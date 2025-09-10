import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoginAnimation } from "./LoginAnimation";

// Schema validation
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", // important for cookies
      });

      if (!res.ok) throw new Error("Invalid credentials");
      const result = await res.json();
      console.log("Login success:", result);
    } catch (error: any) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <Card className="flex flex-col md:flex-row items-center bg-gray-900/70 border-gray-800 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
          {/* Left: Form */}
          <CardContent className="w-full md:w-1/2 p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
              <div>
                <Label htmlFor="username" className="text-gray-300">Username</Label>
                <Input
                  id="username"
                  {...register("username")}
                  placeholder="Enter your username"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.username && (
                  <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-xl font-semibold shadow-lg"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </motion.div>

              <p className="text-center text-gray-400 mt-4">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-purple-400 hover:text-teal-400 font-medium"
                >
                  Register
                </Link>
              </p>
            </form>
          </CardContent>

          {/* Right: Lottie */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-800/20">
            <LoginAnimation></LoginAnimation>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
