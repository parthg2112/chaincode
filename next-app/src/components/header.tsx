import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-green-700 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          HerbChain 🌿
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link href="/how-it-works" className="hover:text-gray-200">
            How it Works
          </Link>
          <Link href="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link href="/dashboard/farmer" className="hover:text-gray-200">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
