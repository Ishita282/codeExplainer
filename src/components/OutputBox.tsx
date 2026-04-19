type Props = {
  explanation: string;
};

export default function OutputBox({ explanation }: Props) {
  if (!explanation) return null;

  return (
    <div className="p-4 rounded-lg border">
      <h2 className="font-semibold mb-2">Explanation:</h2>
      <p className="text-sm whitespace-pre-wrap">{explanation}</p>
    </div>
  );
}