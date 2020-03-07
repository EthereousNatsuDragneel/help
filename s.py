def divineSCCs(r):
	global stack,e
	l=875714
	arr=[]
	while(l>0):
		le=1
		if(e[l]==False):
			l=l-1
		else:
			global inc
			inc={}
			stack.append(l)
			highest=0
			while stack:
				le,highest=SCCdfs(stack[len(stack)-1],le,highest)
			arr.append(highest)
	return arr

def SCCdfs(v,z,highest):
	global stack,e,r
	e[v]=False
	if(z>highest):
		highest=z
	length=len(stack)
	for i in range(0,len(r[v])):
		if(e[r[v][i]]==True):
			e[r[v][i]]=False
			z=z+1
			stack.append(r[v][i])
		elif r[v][i] in inc:
			highest=highest+inc[r[v][i]]
	if(length==len(stack)):
		z=z-1
		del stack[length-1]
	return z,highest

def swap(r):
	global finishTimes
	new={}
	l=list(finishTimes.keys())
	for i in range(0,len(l)):
		new[l[i]]=[]
	for i in range(0,len(l)):
		for j in range(0,len(r[l[i]])):
			new[finishTimes[l[i]]].append(finishTimes[r[l[i]][j]])
	return new

def divineFinishTimes(g):
	global e,stack
	l=875714
	while(l>0):
		if(e[l]==True):
			l=l-1
		else:
			stack.append(l)
			while stack:
				dfs(stack[len(stack)-1])

def dfs(v):
	global finishTimes,count,e,stack,g
	e[v]=True
	length=len(stack)
	for i in range(0,len(g[v])):
		if(e[g[v][i]]==False):
			e[g[v][i]]=True
			stack.append(g[v][i])
	if(length==len(stack)):
		finishTimes[v]=count
		count=count+1
		del stack[len(stack)-1]

def makeGraphs():
	g,r,e={},{},{}
	for i in range(1,875715):
		g[i],r[i]=[],[]
		e[i]=False
	f=open("SCC.txt")
	lines=f.readlines()
	f.close()
	for i in range(0,len(lines)):
		lines[i]=lines[i].strip().split()
		g[int(lines[i][0])].append(int(lines[i][1]))
		r[int(lines[i][1])].append(int(lines[i][0]))
	return g,r,e

stack=[]
finishTimes={}
count=1
g,r,e=makeGraphs()
divineFinishTimes(g)
r=swap(r)
a=divineSCCs(r)
print("Success")
a.sort()
u=len(a)
print(a[u-1],a[u-2],a[u-3],a[u-4],a[u-5])