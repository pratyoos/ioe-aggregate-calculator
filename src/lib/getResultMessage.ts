export function getResultMessage(result: number | null): string | null {
  if (result === null) return null;

  if (result >= 80.0) return `Distinction! Aggregate: ${result}%`;
  if (result >= 65.0) return `First Division! Aggregate: ${result}%`;
  if (result >= 50.0) return `Second Division! Aggregate: ${result}%`;
  if (result >= 40.0) return `Passed! Aggregate: ${result}%`;
  return `You did not pass. Aggregate: ${result}%`;
}