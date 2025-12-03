import { useState } from "react";
import { useNavigate } from "react-router";
import { Footer } from "~/components/Footer";

// Helper function to format phone number
const formatPhoneNumber = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, ""); // Remove all non-digit characters
  if (value.length > 11) value = value.substring(0, 11); // Limit to 11 digits

  if (value.length <= 2) {
    return `(${value}`;
  } else if (value.length <= 7) {
    return `(${value.substring(0, 2)}) ${value.substring(2)}`;
  } else if (value.length <= 11) {
    return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
  }
  return value;
};

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptsWhatsapp, setAcceptsWhatsapp] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, password_confirmation: passwordConfirmation, phone, accepts_whatsapp: acceptsWhatsapp }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const userData = await response.json();
      console.log("User registered:", userData);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="h-screen">
      <main className="mx-12 text-black flex flex-col items-center justify-center align-center h-full">
        <h1 className="text-2xl font-bold cursor-pointer mb-8" onClick={() => navigate('/')}>Proffice</h1>
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold text-center mb-8">Sign Up</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="border-neutral-300 border rounded-md px-4 py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-neutral-300 border rounded-md px-4 py-3"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              className="border-neutral-300 border rounded-md px-4 py-3"
              value={formatPhoneNumber(phone)} // Apply formatting here
              onChange={(e) => setPhone(e.target.value)}
            />
            {phone && ( // Conditionally render based on phone input
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="acceptsWhatsapp"
                  checked={acceptsWhatsapp}
                  onChange={(e) => setAcceptsWhatsapp(e.target.checked)}
                  className="h-4 w-4 text-black border-neutral-300 rounded"
                />
                <label htmlFor="acceptsWhatsapp" className="text-sm text-black">
                  Accepts WhatsApp notifications
                </label>
              </div>
            )}
            <button type="submit" className="bg-black text-white rounded-md px-4 py-3 cursor-pointer">
              Sign Up
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
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
