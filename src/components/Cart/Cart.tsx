"use client"
import { Products } from '@/app/interface';
import AuthContext from '@/contexts/authContext';
import React, { useContext, useEffect, useState } from 'react'

const Cart = () => {
  const { user } = useContext(AuthContext)
  const [cart, setCart] = useState<Products[] | []>([]);

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
      .then(() => {
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        alert("Success!");
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className='container'>
      <h3>Cart</h3>
      <div className='felx justify-between'>
        <h6>Total products: {cart.length}</h6>
        <h6>Total U$S: {cart.reduce((acc, el) => acc + (el.price), 0)}</h6>
        <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-36 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'
          onClick={handleOrder}>
          Finish order</button>
      </div>
      <div className='flex-col mt-8 flex gap-4 text-xl'>
        {cart.map((product: Products, i: number) => (
          <div key={i}>{`${i = +1} ${product.name}(U$S${product.price})`}</div>
        ))}
      </div>


    </main>
  )
}


export default Cart