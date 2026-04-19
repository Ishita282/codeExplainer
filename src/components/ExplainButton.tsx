type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function ExplainButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
    >
      {loading ? "Explaining..." : "Explain Code"}
    </button>
  );
}