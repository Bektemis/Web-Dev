def alarm_clock(day, vacation):
  if(vacation == True):
    if (day >= 1 and day <= 5): 
      return '10:00'
    if (day == 6 or day == 0): 
      return 'off'
  if (vacation == False):
    if(day >= 1 and day <= 5):
      return '7:00'
    if (day == 6 or day == 0): 
      return '10:00'