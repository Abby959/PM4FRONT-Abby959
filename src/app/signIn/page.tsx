import LoginForm from "@/components/LoginForms/LoginForm";
import Link from "next/link";

const signIn = () => {
  return (
    <main className="container mt-4">
      <h1 className='text-center text-lg' color="text-primary">Sign In</h1>
      <LoginForm />
    </main>
  );
};

export default signIn;