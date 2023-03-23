n=[int(i) for i in input()]
l=len(n)
chet=[]
nechet=[]
for i in range(l):
 if i%2==0:
        chet.append(i)
for i in range(l):
 if i%2==1:
        nechet.append(i)
print(chet, nechet)