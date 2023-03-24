def same_first_last(nums):
  for i in nums:
    if(nums[0] == nums[len(nums) - 1]):
      return True
  return False
