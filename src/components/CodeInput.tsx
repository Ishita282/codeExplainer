type Props = {
  code: string;
  setCode: (value: string) => void;
};

export default function CodeInput({ code, setCode }: Props) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste your code here..."
      className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}