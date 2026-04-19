import { HistoryItem } from "../hooks/useHistory";

type Props = {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onClear: () => void;
};

export default function HistoryPanel({
  history,
  onSelect,
  onClear,
}: Props) {
  if (history.length === 0) return null;

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">History</h2>

        <button
          onClick={onClear}
          className="text-xs text-red-500"
        >
          Clear
        </button>
      </div>

      <div className="space-y-2 max-h-40 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelect(item)}
            className="p-2 border rounded cursor-pointer hover:bg-gray-100"
          >
            <p className="text-xs text-gray-500">
              {item.mode.toUpperCase()} • {item.createdAt}
            </p>

            <p className="text-sm truncate">
              {item.code.slice(0, 60)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}