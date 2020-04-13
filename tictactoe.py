import math

X = "X"
O = "O"
EMPTY = None

def initial_state():
	return [[EMPTY, EMPTY, EMPTY],[EMPTY, EMPTY, EMPTY],[EMPTY, EMPTY, EMPTY]]

def player(board):
	x,o=0,0
	for i in range(0,len(board)):
		for j in range(0,len(board[i])):
			if board[i][j]=='O':
				o=o+1
			elif board[i][j]=='X':
				x=x+1
	if o<=x:
		return 'O'
	return 'X'

def actions(board):
	available=[]
	for i in range(0,len(board)):
		for j in range(0,len(board[i])):
			if board[i][j]==EMPTY:
				available.append((i,j))
	return available

def result(board, action):
	board[action[0]][action[1]]=player(board)
	return board

def winner(board):
	n=utility(board)
	if n==-1:
		return 'O'
	elif n==1:
		return 'X'
	else:
		return None

def terminal(board):
	for i in range(0,len(board)):
		hx,ho=0,0
		for j in range(0,len(board[i])):
			if(board[i][j]=='O'):
				ho=ho+1
			elif(board[i][j]=='X'):
				hx=hx+1
		if(hx==3 or ho==3):
			return True
	for i in range(0,len(board)):
		vx,vo=0,0
		for j in range(0,len(board[i])):
			if board[j][i]=='O':
				vo=vo+1
			elif board[j][i]=='X':
				vx=vx+1
		if vx==3 or vo==3:
			return True
	for i in range(0,len(board)):
		for j in range(0,len(board[i])):
			if board[i][j]==EMPTY:
				return False
	return True

def utility(board):
	for i in range(0,len(board)):
		hx,ho=0,0
		for j in range(0,len(board[i])):
			if board[i][j]=='O':
				ho=ho+1
			elif board[i][j]=='X':
				hx=hx+1
		if hx==3:
			return 1
		if ho==3:
			return -1
	if board[0][0]=='O' and board[1][1]=='O' and board[2][2]=='O':
		return -1
	if board[0][2]=='O' and board[1][1]=='O' and board[2][0]=='O':
		return -1

	if board[0][0]=='X' and board[1][1]=='X' and board[2][2]=='X':
		return 1
	if board[0][2]=='X' and board[1][1]=='X' and board[2][0]=='X':
		return 1

	for i in range(0,len(board)):
		vx,vo=0,0
		for j in range(0,len(board[i])):
			if board[j][i]=='O':
				vo=vo+1
			elif board[j][i]=='X':
				vx=vx+1
		if vo==3:
			return -1
		if vx==3:
			return 1
	return 0

def minimax(board):
	possibleMoves=[]
	availableMoves=actions(board)
	scores=[]
	for move in availableMoves:
		new_board=result(board,move)
		possibleMove={"pos":move,"utility":moveUtility(new_board)}
		possibleMoves.append(possibleMove)
		scores.append(possibleMove["utility"])
	if player(board)=='O':
		return possibleMoves[scores.index(min(scores))]["pos"]
	else:
		return possibleMoves[scores.index(max(scores))]["pos"]

def moveUtility(board):
	availableMoves=actions(board)
	if terminal(board):
		return utility(board)
	scores=[]
	for availableMove in availableMoves:
		new_board=result(board,availableMove)
		if terminal(new_board):
			scores.append(utility(new_board))
		else:
			scores.append(moveUtility(new_board))
	netUtility=0
	for i in range(0,len(scores)):
		netUtility=netUtility+scores[i]
	return netUtility/len(scores)