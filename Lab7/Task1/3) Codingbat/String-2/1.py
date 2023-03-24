def double_char(str):
    result = ""
    for i in range (len(str)):
        result = result + str[i]
        result = result + str[i]
    return result