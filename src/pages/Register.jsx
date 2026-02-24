import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });

      navigate("/login");

      toast.success(response.data.message);
    } catch (error) {
      if (error.message && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Project<span className="text-blue-600">Flow</span>
            </h1>
          </Link>
          <p className="text-gray-600 mt-2">
            Create your account and start managing projects!
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-t from-slate-700 to-slate-900 text-white py-3 rounded-lg font-semibold hover:from-slate-900 hover:to-slate-700 transition shadow-lg"
            >
              {loading ? "Registering user..." : "Create account"}
            </button>
            {message && <p>{message}</p>}
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
