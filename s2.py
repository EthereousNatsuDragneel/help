def handleTies():
	global sequence,lines
	l=list(sequence.keys())
	for i in range(0,len(l)):
		if(len(sequence[l[i]])>1):
			remember=[]
			x=[]
			for j in range(0,len(sequence[l[i]])):
				remember.append(lines[sequence[l[i]][j]][0])
			x=remember
			x.sort()
			l2=len(remember)-1
			y,sequence[l[i]]=sequence[l[i]],[]
			while(l2>-1):
				sequence[l[i]].append(y[remember.index(x[l2])])
				l2=l2-1

def getJobs():
	f=open("test.txt",'r')
	lines=f.readlines()
	jobs=[]
	f.close()
	sequence={}
	for i in range(1,len(lines)):
		lines[i]=lines[i].strip().split()
		lines[i][0],lines[i][1]=int(lines[i][0]),int(lines[i][1])
		lines[i].append(lines[i][0]/lines[i][1])
		jobs.append(lines[i])
		if lines[i][2] not in sequence:
			sequence[lines[i][2]]=[i]
		else:
			sequence[lines[i][2]].append(i)
	return sequence,lines

sequence,lines=getJobs()
handleTies()
li=list(sequence.keys())
l=len(li)-1
time=0
li.sort()
total=0
while(l>-1):
	for i in range(0,len(sequence[li[l]])):
		time=time+lines[sequence[li[l]][i]][1]
		total=total+(lines[sequence[li[l]][i]][0]*time)
	l=l-1
print(total)