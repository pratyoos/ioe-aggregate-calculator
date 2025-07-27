import ProgramSelector from "./components/ProgramSelector";
import SemesterInput from "./components/SemesterInput";
import ResultMessage from "./components/ResultMessage";
import Footer from "./components/Footer";

import { useAggregateCalculator } from "./logic/useAggregateCalculator";

export default function App() {
  const {
    program,
    semesters,
    scores,
    result,
    handleChange,
    calculateAggregate,
    getSemesterPercentage,
    handleProgramChange,
  } = useAggregateCalculator();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4">

      <main className="flex-grow flex flex-col items-center py-16">
        <div className="w-full max-w-3xl bg-white rounded-lg border border-gray-200 shadow-sm p-10">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            IOE Aggregate Percentage Calculator
          </h1>

          <ProgramSelector program={program} onChange={handleProgramChange} />

          <div className="space-y-6">
            {semesters.map((sem, idx) => (
              <SemesterInput
                key={idx}
                sem={sem.sem}
                fullMarks={sem.fullMarks}
                score={scores[idx]}
                onChange={(v) => handleChange(idx, v)}
                percentage={getSemesterPercentage(scores[idx], sem.fullMarks)}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={calculateAggregate}
              className="rounded-md bg-indigo-600 px-8 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Calculate
            </button>
          </div>

          <ResultMessage result={result} />
        </div>
      </main>

      <Footer />
    </div>
  );
}