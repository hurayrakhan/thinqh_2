import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoginAnimation } from "./LoginAnimation";


// ✅ Schema validation
const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        // ⚡ replace with your backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const result = await res.json();
      console.log("✅ Login success:", result);
      // TODO: save token to cookie/localStorage & redirect
    } catch (error: any) {
      console.error("❌ Login failed:", error.message);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0a0a1a] text-white">
      {/* Left: Login Form */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center p-8"
      >
        <Card className="w-full max-w-md bg-gray-900/70 border-gray-800 backdrop-blur-xl shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Username */}
              <div>
                <Label htmlFor="username" className="text-gray-300">
                  Username
                </Label>
                <Input
                  id="username"
                  {...register("username")}
                  placeholder="Enter your username"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.username && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-xl font-semibold shadow-lg"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right: Lottie Animation */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex items-center justify-center p-8"
      >
        <LoginAnimation></LoginAnimation>
      </motion.div>
    </section>
  );
}
