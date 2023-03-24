def missing_char(str, n):
  if n >= 0 and n <= len(str) - 1:
    return str.replace(str[n], "")