export default function Pricing() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold">Simple Pricing</h2>

      <div className="mt-10 max-w-md mx-auto p-8 border rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold">Free Plan</h3>
        <p className="text-4xl font-bold mt-4">$0</p>

        <ul className="mt-6 text-gray-600 space-y-2">
          <li>✔ 5 explanations/day</li>
          <li>✔ Basic explanations</li>
          <li>✔ History tracking</li>
        </ul>

        <button className="mt-6 w-full py-3 rounded-xl bg-black text-white hover:scale-105 transition">
          Start Free
        </button>

        <p className="text-xs mt-3 text-gray-500">
          Pro plan coming soon 🚀
        </p>
      </div>
    </section>
  );
}