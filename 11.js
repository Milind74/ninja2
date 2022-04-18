var nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums);
function moveZeroes(nums) {

    if (nums.length == 0 || nums.length == 1)
        return;

    let left = 0;
    let right = 0;
    let temp;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            right++;
        }
        else {
            temp = nums[right];
            nums[right] = nums[left]
            nums[left] = temp;
            left++;
            right++;
        }

    }

};

