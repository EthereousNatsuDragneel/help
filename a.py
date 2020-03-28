import pygame, sys, tkinter, math
from pygame.locals import *
root = tkinter.Tk()
root.withdraw()
screenWidth,screenHeight= root.winfo_screenwidth(), root.winfo_screenheight()
pygame.init()
screen=pygame.display.set_mode((screenWidth,screenHeight))
pygame.display.set_caption("Kekadu and Goshi")

class MakeBird(pygame.sprite.Sprite):
	def __init__(self,x,y):
		super(MakeBird,self).__init__()
		self.Bird=[pygame.transform.scale(pygame.image.load("sprites/DBird.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LBird.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RBird.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FBird.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.rect=self.Rect(x,y,int(screenWidth/10),int(screenHeight/10))
		self.Dir=0
		self.Image=self.Bird[self.Dir]

class MakeDonkey(pygame.sprite.Sprite):
	def __init__(self,x,y):
		super(MakeDonkey,self).__init__()
		self.Donkey=[pygame.transform.scale(pygame.image.load("sprites/DDonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LDonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RDonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FDonkey.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.rect=self.Rect(x,y,int(screenWidth/10),int(screenHeight/10))
		self.Dir=0
		self.Image=self.Donkey[self.Dir]

class MakeMonkey(pygame.sprite.Sprite):
	def __init__(self,x,y):
		super(MakeMonkey,self).__init__()
		self.Monkey=[pygame.transform.scale(pygame.image.load("sprites/DMonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LMonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RMonkey.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FMonkey.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.Dir=0
		self.rect=pygame.Rect(x,y,int(screenWidth/10),int(screenHeight/10))
		self.Image=self.Monkey[self.Dir]

class MakeRabbit(pygame.sprite.Sprite):
	def __init__(self):
		super(MakeRabbit,self).__init__()
		self.Rabbit=[pygame.transform.scale(pygame.image.load("sprites/DRabbit.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LRabbit.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RRabbit.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FRabbit.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.rect=pygame.Rect(7*int(screenWidth/10),7*int(screenHeight/10),int(screenWidth/10),int(screenHeight/10))
		self.Dir=0
		self.Image=self.Rabbit[self.Dir]

class MakeTree(pygame.sprite.Sprite):
	def __init__(self,x,y):
		super(MakeTree,self).__init__()
		self.Tree=pygame.transform.scale(pygame.image.load("sprites/Tree.png"),(int(screenWidth/5),int(screenHeight/5)))
		self.rect=pygame.Rect(x,y,int(screenWidth/5),int(screenHeight/5))

class character(pygame.sprite.Sprite):
	def __init__(self):
		super(character,self).__init__()
		self.Right=[pygame.transform.scale(pygame.image.load("sprites/RRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RWalk1.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/RWalk2.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.Left=[pygame.transform.scale(pygame.image.load("sprites/LRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LWalk1.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/LWalk2.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.Up=[pygame.transform.scale(pygame.image.load("sprites/FRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FWalk1.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/FWalk2.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.Down=[pygame.transform.scale(pygame.image.load("sprites/DRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/DWalk1.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/DRest.png"),(int(screenWidth/10),int(screenHeight/10))),pygame.transform.scale(pygame.image.load("sprites/DWalk2.png"),(int(screenWidth/10),int(screenHeight/10)))]
		self.WalkCount=0
		self.Image=self.Down[self.WalkCount]
		self.x,self.y=int(screenWidth/2),int(screenHeight/2)
		self.rect=pygame.Rect(self.x,self.y,int(screenWidth/10),int(screenHeight/10))

	def collide(self,group):
		return not pygame.sprite.spritecollide(self,group,True)

	def Walk(self):
		self.WalkCount=self.WalkCount+1
		if self.WalkCount>3:
			self.WalkCount=0

	def WalkDown(self):
		if self.Image not in self.Down:
			self.Image=self.Down[self.WalkCount]
		self.Walk()
		self.y=self.y+int(screenHeight/40)

	def WalkUp(self):
		if self.Image not in self.Up:
			self.Image=self.Up[self.WalkCount]
		self.Walk()
		self.y=self.y-int(screenHeight/40)

	def WalkLeft(self):
		if self.Image not in self.Left:
			self.Image=self.Left[self.WalkCount]
		self.Walk()
		self.x=self.x-int(screenWidth/40)

	def WalkRight(self):
		if self.Image not in self.Right:
			self.Image=self.Right[self.WalkCount]
		self.Walk()
		self.x=self.x+int(screenWidth/40)

def screen1():
	global GrassMap,screen,mySprite
	Rabbit=MakeRabbit()
	RGroup=pygame.sprite.Group(Rabbit)
	while True:
		screen.blit(GrassMap,GrassMap.get_rect())
		screen.blit(Rabbit.Image,(int(screenWidth/10)*7,int(screenHeight/10)*7))
		screen.blit(mySprite.Image,(mySprite.x,mySprite.y))
		for event in pygame.event.get():
			if event.type==pygame.QUIT:
				quit()
				sys.exit()
			elif event.type==pygame.KEYDOWN and event.key==K_DOWN and mySprite.collide(RGroup):
				mySprite.WalkDown()
			elif event.type==pygame.KEYDOWN and event.key==K_UP and mySprite.collide(RGroup):
				mySprite.WalkUp()
			if event.type==pygame.KEYDOWN and event.key==K_RIGHT and mySprite.collide(RGroup):
				mySprite.WalkRight()
			if event.type==pygame.KEYDOWN and event.key==K_LEFT and mySprite.collide(RGroup):
				mySprite.WalkLeft()
		myGroup.update()
		pygame.display.update()
		clock.tick(30)

pygame.mixer.music.load("sounds/backgroundMusic.mp3")
bg=pygame.transform.scale(pygame.image.load("sprites/AppLogo.png"),(screenWidth,screenHeight))
GrassMap=pygame.transform.scale(pygame.image.load("sprites/GrassMap.jpeg"),(screenWidth,screenHeight))
pygame.mixer.music.play(-1,0.0)
mySprite=character()
myGroup=pygame.sprite.Group(mySprite)
clock=pygame.time.Clock()
while True:
	screen.blit(bg,bg.get_rect())
	for event in pygame.event.get():
		if event.type==QUIT:
			quit()
			sys.exit()
		elif event.type==pygame.KEYDOWN and event.key==K_SPACE:
			screen1()
	pygame.display.update()