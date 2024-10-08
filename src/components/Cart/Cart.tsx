"use client"
import { Order, Products } from '@/app/interface';
import AuthContext from '@/contexts/authContext';
import React, { useContext, useEffect, useState } from 'react'
import { TfiShoppingCart } from 'react-icons/tfi';

const Cart = () => {
  const { user, setUser } = useContext(AuthContext)
  const [cart, setCart] = useState<Products[] | []>([]);
console.log(user)
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
  }, [])

  const handleOrder = () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/orders`;
    const products = cart.map((product: Products) => product.id)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: JSON.stringify(user?.user.userId),
        products
      }),
    })
      .then((res) => res.json())
      .then((res) => {

        const products = res.products.map((p:Products)=>({date: res.date, id:  p.id, status: res.status}))
setUser({ 
  ...user,
  user:{...user?.user,orders:[...user?.user.orders!, ...products]}


})
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        alert("Success!");
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className='container mt-4'>
      <div className='flex flex-col w-full justify-center items-center gap-2'>
        <div>
          <TfiShoppingCart size={40} />
        </div>
        <h3 className='text-center text-2xl'>Cart</h3>
      </div>
      <div className='felx justify-between'>
        <div className='flex-col mt-8 flex gap-4 text-xl'>
          {cart.map((product: Products, i: number) => (
            <div key={i} className='flex gap-4'>
              <span>{i = +1}</span>
              <span>{`${product.name} (U$S${product.price})`}</span>
            </div>
          ))}
        </div>
        <div className='flex gap-4 items-center justify-end border-t-2 pt-1 mt-1'>
          <h6>Total products: {cart.length}</h6>
          <h6>Total U$S: {cart.reduce((acc, el) => acc + (el.price), 0)}</h6>
          <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-2 rounded-lg w-36 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'
            onClick={handleOrder}>
            Finish order
          </button>
        </div>
      </div>

    </main>
  )
}


export default Cart