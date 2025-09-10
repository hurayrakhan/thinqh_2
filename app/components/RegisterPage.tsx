import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router";
import Swal from "sweetalert2";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoginAnimation } from "./LoginAnimation";

// Schema validation
const registerSchema = z.object({
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const payload = { ...data, role: "user" };

      const res = await fetch(
        "https://fast-todo-api-production.up.railway.app/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      console.log(res)

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Registration failed");
      }

      const result = await res.json();
      console.log("✅ Registration success:", result);

      // ✅ Show sweetalert success
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You can now login with your credentials.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        window.location.href = "/auth/login"; // redirect to login page
      });
    } catch (error: any) {
      console.error("❌ Registration failed:", error.message);

      // ✅ Show sweetalert error
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
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
                Create Account
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
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
                  <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* First Name */}
              <div>
                <Label htmlFor="first_name" className="text-gray-300">
                  First Name
                </Label>
                <Input
                  id="first_name"
                  {...register("first_name")}
                  placeholder="Enter your first name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.first_name && (
                  <p className="text-red-400 text-sm mt-1">{errors.first_name.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="last_name" className="text-gray-300">
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  {...register("last_name")}
                  placeholder="Enter your last name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.last_name && (
                  <p className="text-red-400 text-sm mt-1">{errors.last_name.message}</p>
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
                  <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-xl font-semibold shadow-lg"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </motion.div>

              <p className="text-center text-gray-400 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-400 hover:text-teal-400 font-medium">
                  Login
                </Link>
              </p>
            </form>
          </CardContent>

          {/* Right: Lottie */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-800/20">
            <LoginAnimation />
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
