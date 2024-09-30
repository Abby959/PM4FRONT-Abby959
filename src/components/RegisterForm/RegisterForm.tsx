"use client";
import { FormEvent, useEffect, useState } from 'react';
import { validatePassword, validateEmail, validateAddress } from '@/app/helpers/validation';
import { registerService } from '@/services/authServices';
import { useRouter } from 'next/navigation';


const RegisterForm = () => {
  const initialData = { email: "", password: "", address: "", name: "", phone: "" };
  const initialDirty = { email: false, password: false, address: false, name: false, phone: false };

  const router = useRouter()
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await registerService(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, data)
    if (!response.message) {
      alert("You are Registered!");
      router.back();
    } else {
      alert(response.message);
    }


  };

  const handleChange = (e: any) => {
    console.log("handleChange");
    setData({
      ...data, [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e: any) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    setError({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      address: validateAddress(data.address),
      name: validateAddress(data.name),
      phone: validateAddress(data.phone),
    });
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-black p-6 rounded-lg shadow-lg w-96 mx-auto">
      <label htmlFor='email' className="text-white mb-2">Email</label>
      <input type='email'
        id='email'
        name='email'
        placeholder='email@example.com'
        onChange={handleChange}
        value={data.email}
        onBlur={handleBlur}
        className="p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {dirty.email ? <p className="text-red-600 text-sm mb-4">{error.email}</p> : null}

      <label htmlFor='password' className="text-white mb-2">Password</label>
      <input type='password'
        id='password'
        name='password'
        placeholder='At least 8 characters'
        onChange={handleChange}
        value={data.password}
        onBlur={handleBlur}
        className="p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {dirty.password ? <p className="text-red-600 text-sm mb-4">{error.password}</p> : null}

      <label htmlFor='address' className="text-white mb-2">Address</label>
      <input type='text'
        id='address'
        name='address'
        placeholder='60 Wall Street'
        onChange={handleChange}
        value={data.address}
        onBlur={handleBlur}
        className="p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {dirty.address ? <p className="text-red-600 text-sm mb-4">{error.address}</p> : null}

      <label htmlFor='name' className="text-white mb-2">Name</label>
      <input type='name'
        id='name'
        name='name'
        placeholder='Name'
        onChange={handleChange}
        value={data.name}
        onBlur={handleBlur}
        className="p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {dirty.name ? <p className="text-red-600 text-sm mb-4">{error.name}</p> : null}

      <label htmlFor='phone' className="text-white mb-2">Phone</label>
      <input type='phone'
        id='phone'
        name='phone'
        placeholder='Phone'
        onChange={handleChange}
        value={data.phone}
        onBlur={handleBlur}
        className="p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {dirty.phone ? <p className="text-red-600 text-sm mb-4">{error.phone}</p> : null}


      <button className="bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-full hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white mt-4">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;