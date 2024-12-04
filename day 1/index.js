/*
Day 1: https://adventofcode.com/2024/day/1
 */

/*
Part 1
 */
function getDistance(input) {
  const leftList = [];
  const rightList = [];
  const splitInput = input.split('\n');
  let result = 0;

  for (const line of splitInput) {
    const [left, right] = line.split('   ');

    leftList.push(Number(left));
    rightList.push(Number(right));
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  for (let i = 0; i < leftList.length; i++) {
    result += Math.abs(leftList[i] - rightList[i]);
  }

  return result;
}

// getDistance(input);

/*
Part 2
 */
function getSimilarityScoreWithNestedLoops (input) {
  const leftList = [];
  const rightList = [];
  const splitInput = input.split('\n');
  let result = 0;

  for (const line of splitInput) {
    const [left, right] = line.split('   ');

    leftList.push(+left);
    rightList.push(+right);
  }

  for (const leftNum of leftList) {
    for (const rightNum of rightList) {
      if (rightNum === leftNum) {
        result += rightNum;
      }
    }
  }

  return result;
}

// O(n)
function getSimilarityScoreWithHashMaps(input) {
  const leftHash =  {};
  const rightHash = {};
  const splitInput = input.split('\n');
  let result = 0;

  for (const line of splitInput) {
    const [left, right] = line.split('   ');
    const leftNum = +left;
    const rightNum = +right;

    leftHash[leftNum] = leftNum in leftHash ? leftHash[leftNum] + 1 : 1;
    rightHash[rightNum] = rightNum in rightHash ? rightHash[rightNum] + 1 : 1;
  }

  Object.entries(leftHash).forEach(([key, value]) => {
    if (key in rightHash) {
      result += key * value * rightHash[key];
    }
  })

  return result;
}

// getSimilarityScoreWithNestedLoops(input);
// getSimilarityScoreWithHashMaps(input);
