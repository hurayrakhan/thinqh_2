export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0f1f] border-b border-gray-800 p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-gradient">Thinqh</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
        <li><a href="/about" className="hover:text-purple-400 transition-colors">About</a></li>
        <li><a href="/services" className="hover:text-purple-400 transition-colors">Services</a></li>
        <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}
