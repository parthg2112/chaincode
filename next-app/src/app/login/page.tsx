"use client";

import * as React from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserData {
  username: string;
  role: string;
}

export default function LoginPage() {
  const [formData, setFormData] = React.useState({
    username: "",
    number: "",
    password: "",
    role: "collector",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData: UserData = {
      username: formData.username,
      role: formData.role,
    };

    // Save to localStorage for persistence
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('traceLeaf_user', JSON.stringify(userData));
      window.localStorage.setItem('traceLeaf_isLoggedIn', 'true');
    }
    
    setIsLoading(false);
    
    // Redirect to home page
    window.location.href = '/';
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-8">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={handleBackToHome}
          className="text-foreground/80 hover:text-foreground p-0"
        >
          ← Back to Home
        </Button>
      </div>

      {/* Login Form */}
      <div className="relative rounded-xl bg-card/80 backdrop-blur-xl border border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_0_0_1px_rgba(255,255,255,0.02)] p-8">
        {/* Subtle gradient sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: "radial-gradient(600px 200px at 50% 0%, rgba(34,197,94,0.08), transparent 40%)",
          }}
        />
        
        {/* Hairline top highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative z-10">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-8">Login</h1>
          
          <div className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-foreground mb-3">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Number */}
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-foreground mb-3">
                Number
              </label>
              <input
                id="number"
                type="tel"
                value={formData.number}
                onChange={(e) => handleInputChange("number", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-3">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-3">
                Role
              </label>
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer transition-colors"
                >
                  <option value="collector">Collector / Farmer</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="certifier">Certifier</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Login button */}
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-medium transition-opacity"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}