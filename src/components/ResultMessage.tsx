import { getResultMessage } from "../lib/getResultMessage";

interface ResultMessageProps {
  result: number | null;
}

export default function ResultMessage({ result }: ResultMessageProps) {
  if (result === null) return null;

  const message = getResultMessage(result);

  return (
    <div className="mt-10 rounded-md bg-indigo-50 border border-indigo-300 text-indigo-900 text-center py-4 font-semibold text-lg select-none">
      {message}
    </div>
  );
}