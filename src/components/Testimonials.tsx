const testimonials = [
  {
    name: "Aman (Student)",
    text: "This helped me understand assignments in minutes.",
  },
  {
    name: "Dev Sharma",
    text: "I use this daily while debugging code.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        Loved by developers
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white dark:bg-black border rounded-xl">
            <p className="italic">{t.text}</p>
            <p className="mt-4 font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}