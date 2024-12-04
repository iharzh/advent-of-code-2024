/*
Day 2: https://adventofcode.com/2024/day/2
 */

/*
Part 1
 */
function calculateSafeReports(input) {
  let result = 0;

  const reports = input.split("\n");

  reports: for (const report of reports) {
    const levels = report.split(" ");
    const isIncreasing = +levels[0] < +levels[levels.length - 1];

    for (let i = 0; i < levels.length - 1; i++) {
      const diff = levels[i + 1] - levels[i];
      const isIncorrectDiff = diff === 0 || Math.abs(diff) > 3;
      const isIncorrectOrder = (isIncreasing && diff < 0) || (!isIncreasing && diff > 0);

      if (isIncorrectDiff || isIncorrectOrder) {
        continue reports;
      }

      if (i === levels.length - 2) {
        result++;
      }
    }
  }

  return result;
}

// calculateSafeReports(input);
