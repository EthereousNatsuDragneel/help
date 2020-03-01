def dfs(v,g):
	global finished,explored
	for i in range(0,len(g[v])):
		if(explored[g[v][i]-1]==False):
			explored[g[v][i]-1]=True
			dfs(g[v][i],g)
	finished.append(v)

def dfsLoop():
	global g,finished,explored
	i=len(g)
	while(i>0):
		if(explored[i-1]==False):
			explored[i-1]=True
			dfs(i,g)
		i=i-1

def reverseGraph():
	global finished,g
	clone=g
	reversed={}
	for i in range(1,len(clone)+1):
		reversed[finished.index(i)+1]=[]
		for j in range(1,len(clone)+1):
			for k in range(0,len(clone[j])):
				if(i==clone[j][k]):
					reversed[finished.index(i)+1].append(finished.index(j)+1)
	return reversed

def findSCC(g):
	global explored,recent
	explored=[False]*875714
	i=len(g)
	scc=0
	while(i>0):
		recent=0
		if(explored[i-1]==False):
			explored[i-1]=True
			dfs(i,g)
			scc=scc+1
			sccLengths.append(recent+1)
		i=i-1
	return scc

g={}
sccLengths,explored,finished=[],[],[]
recent=0
f=open("SCC.txt",'r')
lines=f.readlines()
f.close()
for i in range(0,len(lines)):
	lines[i]=lines[i].split()
	for j in range(0,len(lines[i])):
		lines[i][j]=int(lines[i][j])
	for j in range(0,len(lines[i])):
		if lines[i][0] not in list(g.keys()):
			g[lines[i][0]]=[]
		else:
			g[lines[i][0]].append(lines[i][j])

dfsLoop()
clone=reverseGraph()
scc=findSCC(clone)
sccLengths.sort()
l=len(sccLengths)-1
output=[sccLengths[l],sccLengths[l-1],sccLengths[l-2],sccLengths[l-3],sccLengths[l-4]]
print(output)