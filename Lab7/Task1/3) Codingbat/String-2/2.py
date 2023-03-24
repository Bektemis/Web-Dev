def count_hi(str):
  result = 0
  for i in range(0, len(str) - 1):
    if(str[i] == 'h' and str[i+1] == 'i'):
      result = result +1
  return result
