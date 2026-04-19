const features = [
  {
    title: "Instant Code Explanation",
    desc: "Get human-readable explanations in seconds.",
  },
  {
    title: "Beginner Mode",
    desc: "ELI5 explanations for absolute beginners.",
  },
  {
    title: "History Tracking",
    desc: "Save and revisit your past explanations.",
  },
  {
    title: "Fast & Lightweight",
    desc: "Built for speed with no unnecessary clutter.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Everything you need to understand code faster
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}