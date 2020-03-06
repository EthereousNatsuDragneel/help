def divineFinishTimes(g):
	global stack,e
	while stack:
		dfs(stack[len(stack)-1])




def dfs(v):
	global finishTimes,count,e,stack,g
	for i in range(0,len(g[v])):
		if(e[g[v][i]]==False):
			stack.append(g[v][i])
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

stack=[875714]
finishTimes={}
count=1
g,r,e=makeGraphs()
divineFinishTimes(g)
print("Determined finish times")