const steps = [
  "Paste your code",
  "Click explain",
  "Get instant human explanation",
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-black rounded-xl border text-center"
          >
            <p className="text-lg font-medium">{i + 1}. {s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}