export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-28">
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
        Understand Any Code in Seconds — Not Hours
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Paste any code snippet and get a clear, human explanation instantly.
        Built for students, developers, and curious minds.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/dashboard"
          className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
        >
          Try Free
        </a>

        <a
          href="/features"
          className="px-6 py-3 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          Learn More
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        No signup required • 5 free explanations
      </p>
    </section>
  );
}