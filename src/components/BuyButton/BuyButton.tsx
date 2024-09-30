"use client"
import { Products } from '@/app/interface';
import AuthContext from '@/contexts/authContext'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

interface BuyButtonProps {
    product: Products;
}

const BuyButton = ({ product }: BuyButtonProps) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    const handleBuy = () => {
        if (!user?.login) {
            router.push("/signIn");
        } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            if (!cart?.some((p: Products) => p.id === product?.id)) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${product?.name} added to your cart`)
            } else {
                alert(`${product?.name} is already in your cart`)
            }
        }
    };
    return (

        <button onClick={handleBuy} className='bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-full hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'>
            Add to cart
        </button>
    )
}

export default BuyButton