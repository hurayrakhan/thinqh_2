// app/routes/auth/layout.tsx
import { Outlet } from "react-router";
import { motion } from "framer-motion";

/**
 * AuthLayout: Wrapper for all /auth pages
 * You can add side animations, background gradients, logos, etc.
 */
export default function AuthLayout() {
  return (
    <section>
        <Outlet></Outlet>
    </section>
  );
}
