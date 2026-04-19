type Props = {
  code: string;
  setCode: (v: string) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  setExplanation: (v: string) => void;
};

export default function CodeEditor({
  code,
  setCode,
  loading,
  setLoading,
  setExplanation,
}: Props) {
  const handleExplain = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setExplanation("");

    const res = await fetch("/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    setExplanation(data.explanation);

    setLoading(false);
  };

  return (
    <div className="border rounded-2xl p-4">
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-40 p-3 border rounded-lg focus:outline-none"
      />

      <button
        onClick={handleExplain}
        className="mt-3 px-6 py-2 bg-black text-white rounded-lg"
      >
        {loading ? "Explaining..." : "Explain Code"}
      </button>
    </div>
  );
}