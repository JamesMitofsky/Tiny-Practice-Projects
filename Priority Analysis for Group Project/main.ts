import values from "./values";

main();

function main() {
  const priorities = sumPriorities(values);

  const sortedPriorities = [...priorities].sort(
    (a, b) => a.standardDeviation - b.standardDeviation
  );
  console.table(sortedPriorities);
}
type Item = { id: number; description: string; priority: number };

function calculateMean(numbers: number[]): number {
  const total = numbers.reduce((a, b) => a + b, 0);
  const mean = total / numbers.length;
  const roundedMean = Math.round(mean * 100) / 100;
  return roundedMean;
}

function calculateStandardDeviation(numbers: number[], mean: number): number {
  const variance =
    numbers.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) /
    numbers.length;
  const standardDeviation = Math.sqrt(variance);
  const roundedStandardDeviation = Math.round(standardDeviation * 100) / 100;
  return roundedStandardDeviation;
}

function sumPriorities(data: Item[][]): {
  id: number;
  description: string;
  mean: number;
  standardDeviation: number;
}[] {
  const cumulative = data.flat().reduce((acc, item) => {
    if (item.id in acc) {
      acc[item.id].priorities.push(item.priority);
    } else {
      acc[item.id] = {
        description: item.description,
        priorities: [item.priority],
      };
    }
    return acc;
  }, {} as { [id: number]: { description: string; priorities: number[] } });

  return Object.entries(cumulative).map(([id, { description, priorities }]) => {
    const mean = calculateMean(priorities);
    const standardDeviation = calculateStandardDeviation(priorities, mean);
    return {
      id: Number(id),
      description,
      mean,
      standardDeviation,
    };
  });
}
