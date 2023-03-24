def caught_speeding(speed, is_birthday):
  if(speed >= 81 and is_birthday == False):
    return 2
  elif(61 <= speed <= 80 and is_birthday == False):
    return 1
  elif(speed >= 86 and is_birthday == True):
    return 2
  elif(66 <= speed <= 85 and is_birthday == True):
    return 1
  else:
    return 0
