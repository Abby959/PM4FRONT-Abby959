import React from 'react'
import styles from "./Footer.module.css"
import { SlScreenSmartphone } from "react-icons/sl";

const Footer = () => {
  return (

    <div className="bg-black text-primary w-full px-6 flex gap-3 border-gray-700 border-t-[1px] py-2">
      <p className='cursor-pointer hover:text-secondary items-center'>@CompanyAbby</p>
      <div className='gap-1 flex items-center hover:text-secondary'>
      <SlScreenSmartphone />
      <p>+54 011 32773243</p>
      </div>
    </div>


  )
}

export default Footer; 