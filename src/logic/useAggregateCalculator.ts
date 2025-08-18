import { useState } from "react";
import { getResultMessage } from "../lib/getResultMessage";

export type SemesterWeight = {
  sem: number;
  fullMarks: number;
  weight: number;
};

export const SEMESTER_DATA: Record<"BCT" | "BCE" | "BME", SemesterWeight[]> = {
  BCT: [
    { sem: 1, fullMarks: 725, weight: 10 },
    { sem: 2, fullMarks: 650, weight: 10 },
    { sem: 3, fullMarks: 875, weight: 10 },
    { sem: 4, fullMarks: 900, weight: 10 },
    { sem: 5, fullMarks: 875, weight: 15 },
    { sem: 6, fullMarks: 825, weight: 15 },
    { sem: 7, fullMarks: 825, weight: 15 },
    { sem: 8, fullMarks: 750, weight: 15 },
  ],
  BCE: [
    { sem: 1, fullMarks: 750, weight: 10 },
    { sem: 2, fullMarks: 700, weight: 10 },
    { sem: 3, fullMarks: 850, weight: 10 },
    { sem: 4, fullMarks: 850, weight: 10 },
    { sem: 5, fullMarks: 850, weight: 15 },
    { sem: 6, fullMarks: 800, weight: 15 },
    { sem: 7, fullMarks: 800, weight: 15 },
    { sem: 8, fullMarks: 750, weight: 15 },
  ],
  BME: [
    { sem: 1, fullMarks: 675, weight: 10 },
    { sem: 2, fullMarks: 700, weight: 10 },
    { sem: 3, fullMarks: 675, weight: 10 },
    { sem: 4, fullMarks: 750, weight: 10 },
    { sem: 5, fullMarks: 750, weight: 15 },
    { sem: 6, fullMarks: 700, weight: 15 },
    { sem: 7, fullMarks: 900, weight: 15 },
    { sem: 8, fullMarks: 625, weight: 15 },
  ],
};

export function useAggregateCalculator() {
  const [program, setProgram] = useState<"BCT" | "BCE" | "BME">("BCT");
  const [scores, setScores] = useState<(number | null)[]>(Array(8).fill(null));
  const [result, setResult] = useState<number | null>(null);

  const semesters = SEMESTER_DATA[program];

  const handleChange = (index: number, value: string) => {
    const newScores = [...scores];
    newScores[index] = value === "" ? null : Number(value);
    setScores(newScores);
  };

  const calculateAggregate = () => {
    const total = scores.reduce<number>((acc, score, idx) => {
      const { fullMarks, weight } = semesters[idx];
      return acc + (score ? (score * weight) / fullMarks : 0);
    }, 0);
    setResult(Math.round(total * 1000) / 1000);
  };

  const getSemesterPercentage = (
    score: number | null,
    fullMarks: number
  ): string | null => {
    if (score === null || isNaN(score)) return null;
    return ((score / fullMarks) * 100).toFixed(2);
  };

  const handleProgramChange = (program: "BCT" | "BCE" | "BME") => {
    setProgram(program);
    setScores(Array(8).fill(null));
    setResult(null);
  };

  const getMessage = (): string => {
    return getResultMessage(result) ?? "";
  };

  return {
    program,
    semesters,
    scores,
    result,
    handleChange,
    calculateAggregate,
    getSemesterPercentage,
    handleProgramChange,
    getMessage,
  };
}