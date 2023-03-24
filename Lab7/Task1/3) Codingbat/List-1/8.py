def max_end3(nums):
  max = 0
  for i in nums:
    if(nums[0] > nums[2]):
      max = nums[0]
    if(nums[0] < nums[2]):
      max = nums[2]
    if(nums[0] == nums[2]):
      max = nums[0]
  a = []
  a.append(max)
  a.append(max)
  a.append(max)
  return a
