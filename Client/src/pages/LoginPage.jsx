import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Teal Gradient with Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-teal-800 to-teal-600 relative overflow-hidden flex-col justify-between p-12">
        {/* Background blur elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-16">
            <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-teal-800 font-bold text-lg">✦</span>
            </div>
            <span className="text-white font-bold text-lg">Smart Study Circle</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Unlock Your
          </h1>
          <h1 className="text-5xl font-bold text-cyan-300 mb-8 leading-tight">
            Academic Potential
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Join the most innovative peer-led learning platform. Connect with experts, share resources, and excel together.
          </p>

          {/* Bottom Image Card */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
              alt="Students studying"
              className="w-full rounded-2xl object-cover h-56"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-cyan-400/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-cyan-400/30">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">AI Study Buddy Active</span>
            </div>
            {/* Stats at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
              <div className="flex gap-1">
                <div className="w-5 h-5 rounded-full bg-gray-300/50" />
                <div className="w-5 h-5 rounded-full bg-gray-300/30 -ml-2" />
                <div className="w-5 h-5 rounded-full bg-gray-300/20 -ml-2" />
              </div>
              <span className="text-white text-xs font-medium">1.2k students studying right now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-teal-700 font-bold">✦</span>
            </div>
            <span className="text-gray-900 font-bold text-base">Smart Study Circle</span>
          </div>

          {/* Welcome Back */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-8">Please enter your details to sign in to your account.</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  required
                />
                <span className="absolute right-3 top-3.5 text-gray-400">@</span>
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-cyan-500 hover:text-cyan-600 font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-full transition-colors"
            >
              Log In →
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700">
              <span className="text-xl">🏢</span>
              SSO
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Don't have an account yet?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-cyan-500 hover:text-cyan-600 font-semibold"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
