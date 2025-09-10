import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowRight } from "lucide-react";
import aiAnimation from "../Assets/hero.json"; 

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]"
    >
      {/* 🔮 Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Gradient circles */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-400/30 blur-[160px] animate-pulse delay-1000"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl px-6 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gradient">Empowering Growth</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
              With Intelligent Tech
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            At <span className="font-semibold text-purple-300">Thinqh</span>, we
            transform bold ideas into scalable, glowing digital solutions that
            move businesses forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Lottie / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          {/* Option A: Lottie */}
          <Lottie animationData={aiAnimation} loop={true} />

          {/* Option B: Image (uncomment if you want an image instead) */}
          {/* <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80" 
            alt="Innovation" 
            className="w-[400px] rounded-2xl shadow-lg" 
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
