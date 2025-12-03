
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/contexts/AuthContext"; // Import useAuth
import { Footer } from "~/components/Footer";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password); // Use the login function from AuthContext
    } catch (error) {
      console.error("Login error:", error);
      // Display error message to the user
    }
  };

  return (
    <div className="h-screen">
      <main className="mx-12 text-black flex flex-col items-center justify-center align-center h-full">
        <h1 className="text-2xl font-bold cursor-pointer mb-8" onClick={() => navigate('/')}>Proffice</h1>
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold text-center mb-8">Login</h1>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border-neutral-300 border rounded-md px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-neutral-300 border rounded-md px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-black text-white rounded-md px-4 py-3 cursor-pointer">
              Login
            </button>
          </form>
          <p className="text-center my-4 font-bold">OR</p>
          <div>
            <div className="flex justify-center gap-4 mt-2">
              <button className="border border-neutral-300 rounded-md px-4 py-2 cursor-pointer">
                <i className="fi fi-brands-google text-xl"></i>
              </button>
              <button className="border border-neutral-300 rounded-md px-4 py-2 cursor-pointer">
                <i className="fi fi-brands-facebook text-xl"></i>
              </button>
            </div>
          </div>
          <div>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </span>
            </p>
          </div>
          <div>
            <p className="text-center">
              Don't remember your password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate('/recover')}
              >
                Recover it here
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
