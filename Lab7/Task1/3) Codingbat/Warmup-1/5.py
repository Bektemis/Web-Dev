def parrot_trouble(talking, hour):
  if(talking == True and hour < 7):
    return True
  if(talking == True and hour > 20):
    return True
  if(talking == True and hour >= 7 and hour <= 20):
    return False
  if(talking == False):
    return False
