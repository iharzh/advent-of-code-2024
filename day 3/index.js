/*
Day 3: https://adventofcode.com/2024/day/3
 */

/*
Part 1
 */
function calc(input) {
  let match = new RegExp(/(mul\(\d{1,},\d{1,}\))/, 'g');

  let matches = [...input.matchAll(match)].map(el => el[0]);

  return matches.reduce((acc, el) => {
    const nums = el.replaceAll(/[^\d,]/g, '').split(",");

    return acc + nums[0] * nums[1];
  }, 0)
}

// calc(input);

/*
Part 2
 */
function calc2(input) {
  let strings = [];
  let doIdx = 0;

  while(true) {
    let dontIdx = input.indexOf("don't()", doIdx);

    if (dontIdx < 0) {
      strings.push(input.substring(doIdx));
      break;
    }

    strings.push(input.substring(doIdx, dontIdx));
    doIdx = input.indexOf("do()", dontIdx);
    if (doIdx < 0) {
      break;
    }
  }

  return strings;
}

// 1. let joinedParts = calc2(input) - generates an array of only valid parts (do() ... don't())
// 2. let result = calc(calc2(input).join('')) - join an array into a string and solve like 1st part
