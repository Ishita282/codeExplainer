type Props = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
};

export default function ToggleSwitch({ enabled, setEnabled }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Explain Like I&apos;m 5</span>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`px-4 py-1 rounded-full text-sm ${
          enabled ? "bg-blue-500" : "bg-gray-200 text-black"
        }`}
      >
        {enabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}