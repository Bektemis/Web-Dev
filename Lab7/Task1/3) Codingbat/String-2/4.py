def count_code(str):
  result = 0
  for i in range(len(str) - 3):
    if(str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e'):
      result = result +1
  return result

