import LoginForm from "@/components/LoginForms/LoginForm";
import Link from "next/link";

const signIn = () => {
  return (
    <main className="container">
      <h1 className='text-center' color="text-primary">Sign In</h1>
      <LoginForm />
    </main>
  );
};

export default signIn;