export default function Sidebar() {
  return (
    <div className="w-64 border-r p-6 flex flex-col justify-between">
      
      <div>
        <h1 className="text-xl font-bold mb-8">🚀 Code Explainer</h1>

        <nav className="space-y-3 text-sm">
          <p className="cursor-pointer hover:opacity-70">Dashboard</p>
          <p className="cursor-pointer hover:opacity-70">History</p>
          <p className="cursor-pointer hover:opacity-70">Settings</p>
        </nav>
      </div>

      {/* Upgrade CTA */}
      <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-900">
        <p className="text-sm font-semibold">Upgrade to Pro</p>
        <p className="text-xs text-gray-500 mt-1">
          Unlimited explanations
        </p>

        <button className="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm">
          Upgrade
        </button>
      </div>
    </div>
  );
}