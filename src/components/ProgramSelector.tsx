interface ProgramSelectorProps {
  program: "BCT" | "BCE";
  onChange: (program: "BCT" | "BCE") => void;
}

export default function ProgramSelector({ program, onChange }: ProgramSelectorProps) {
  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      <label
        htmlFor="program-select"
        className="text-base font-medium text-gray-700 select-none"
      >
        Select Program:
      </label>
      <select
        id="program-select"
        value={program}
        onChange={(e) => onChange(e.target.value as "BCT" | "BCE")}
        className="rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
      >
        <option value="BCT">BCT</option>
        <option value="BCE">BCE</option>
      </select>
    </div>
  );
}