def cat_dog(str):
    counter1 = 0
    counter2 = 0
    counter1 = str.count("cat")
    counter2 = str.count("dog")
    if(counter1 == counter2):
       return True
    else:
       return False
    