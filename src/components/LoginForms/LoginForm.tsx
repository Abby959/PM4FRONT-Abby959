"use client";
import { FormEvent, useContext, useEffect, useState } from 'react';
import { validatePassword, validateEmail } from '@/app/helpers/validation';
import { loginService } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthContext from '@/contexts/authContext';


const LoginForm = () => {
const {setUser} = useContext(AuthContext);

  const router = useRouter()
  const initialData = { email: "", password: "" };
  const initialDirty = { email: false, password: false };


  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData)
  const [dirty, setDirty] = useState(initialDirty)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await loginService(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, data)
    if (response.login) {
      alert("Login success");
      setUser(response);
      router.back();
    } else {
      alert("User or credentials wrong!");
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange");
    setData({
      ...data, [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };


  useEffect(() => {
    setError({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
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

      <div className="flex justify-between mt-4">
        <button className="bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-1/2 mr-2 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white">
          Login
        </button>

        <Link 
        className="flex justify-center bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-1/2 ml-2 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white" 
        href={"/register"}>
          <button >
            Register
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;