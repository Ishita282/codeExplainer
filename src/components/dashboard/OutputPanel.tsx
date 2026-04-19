type Props = {
  explanation: string;
  loading: boolean;
};

export default function OutputPanel({ explanation, loading }: Props) {
  return (
    <div className="border rounded-2xl p-4 min-h-[150px]">
      
      {loading && (
        <p className="text-gray-500">Generating explanation...</p>
      )}

      {!loading && !explanation && (
        <p className="text-gray-400">
          Your explanation will appear here
        </p>
      )}

      {explanation && (
        <>
          <h2 className="font-semibold mb-2">Explanation</h2>
          <p className="text-sm whitespace-pre-wrap">{explanation}</p>
        </>
      )}
    </div>
  );
}