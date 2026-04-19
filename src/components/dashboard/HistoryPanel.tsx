type Props = {
  setCode: (v: string) => void;
  setExplanation: (v: string) => void;
};

const dummyHistory = [
  {
    code: "console.log('hello')",
    explanation: "Prints hello",
  },
];

export default function HistoryPanel({
  setCode,
  setExplanation,
}: Props) {
  return (
    <div className="w-72 border-l p-4 overflow-y-auto">
      
      <h2 className="font-semibold mb-4">History</h2>

      <div className="space-y-3">
        {dummyHistory.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setCode(item.code);
              setExplanation(item.explanation);
            }}
            className="p-3 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <p className="text-xs text-gray-500">
              {item.code.slice(0, 40)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}   