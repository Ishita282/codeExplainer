type Props = {
  usage: number;
  limit: number;
};

export default function UsageCounter({ usage, limit }: Props) {
  return (
    <p className="text-xs text-gray-500 text-center">
      Free uses: {usage}/{limit}
    </p>
  );
}