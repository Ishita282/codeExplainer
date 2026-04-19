import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        
        {/* Brand */}
        <div>
          <h2 className="font-bold text-lg">🚀 Code Explainer</h2>
          <p className="mt-3 text-gray-500">
            Understand any code instantly. Built for developers, students, and curious minds.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-500">
            <li><Link href="/features" className="hover:text-black dark:hover:text-white">Features</Link></li>
            <li><Link href="/dashboard" className="hover:text-black dark:hover:text-white">Dashboard</Link></li>
            <li><Link href="/faq" className="hover:text-black dark:hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li><Link href="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CTA / Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-500 mb-3">
            Get updates when Pro launches.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Code Explainer. All rights reserved.
      </div>
    </footer>
  );
}