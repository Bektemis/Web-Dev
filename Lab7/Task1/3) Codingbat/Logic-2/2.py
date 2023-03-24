def lone_sum(a, b, c):
  if(a == b and b == c and a == c):
    return 0
  if(a == b):
    return c
  if(b == c):
    return a
  if(a == c):
    return b
  else:
    return a + b + c
