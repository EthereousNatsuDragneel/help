def small(x,lines):
	array=[x]
	while array:
		i=0
		while(i<len(lines)):
			hd=0
			for j in range(0,len(lines[i])):
				if(not x[j]==lines[i][j]):
					hd=hd+1
				if(hd>2):
					break
			if(hd<3):
				array.append(lines[i])
				del lines[i]
			else:
				i=i+1
	return lines

def main(lines):
	clusters=0
	while lines:
		clusters=clusters+1
		x=lines[0]
		del lines[0]
		lines=small(x,lines)
	return clusters

def getGraph():
	f=open("Clustering_big.txt",'r')
	lines=f.readlines()
	f.close()
	del lines[0]
	for i in range(0,len(lines)):
		lines[i]=lines[i].strip().split()
		x=""
		for j in range(0,len(lines[i])):
			x=x+lines[i][j]
		lines[i]=x
	return lines

lines=getGraph()
count=main(lines)
print("Success")
print(count)