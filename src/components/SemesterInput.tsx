interface SemesterInputProps {
  sem: number;
  fullMarks: number;
  score: number | null;
  onChange: (value: string) => void;
  percentage: string | null;
}

export default function SemesterInput({
  sem,
  fullMarks,
  score,
  onChange,
  percentage,
}: SemesterInputProps) {
  return (
    <div className="flex items-center gap-6 border border-gray-200 rounded-lg p-4 shadow-sm">
      <label
        htmlFor={`sem-${sem}`}
        className="w-32 text-gray-700 font-medium select-none leading-tight whitespace-pre-line"
      >
        {`Semester ${sem}\nTotal:`}
      </label>
      <input
        id={`sem-${sem}`}
        type="number"
        min={0}
        max={fullMarks}
        value={score ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Max ${fullMarks}`}
        className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
      />
      <div className="w-24 text-right font-semibold text-indigo-600 text-lg select-none">
        {percentage ?? "-"}%
      </div>
    </div>
  );
}