let numbers = [54 ,10, 8, 12];

function sumTwoSmallestNumbers(numbers) {
    nums = numbers.sort(function (a, b) { return a - b; });
    console.log(nums[0] + nums[1]);
};

sumTwoSmallestNumbers(numbers)