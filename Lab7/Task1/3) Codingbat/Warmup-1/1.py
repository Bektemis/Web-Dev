def sleep_in(weekday, vacation):
  if(weekday == False and vacation == False):
    return True
  if(weekday == True and vacation == False):
    return False
  if(weekday == False and vacation == True):
    return True
  if(weekday == True and vacation == True):
    return True
 
