# RNGRPG (Random Number Generator Role-Playing Game)
_____________
# Live DEMO: https://memeengineer.github.io/RNGRPG/
_____________

![RNGRPG](https://github.com/MemeEngineer/RNGRPG/assets/90629466/f0b6236d-5fb9-49f9-827c-4e49ba188078)

# About
______________
A simple analog WASD key and "H" button game. The game is simple: kill the enemies and find the Gem of Swag 💎 (1/10 Drop Rate). The lower the kill count the better. Game design was based off of Space invaders and Pac-Man game development.

![image](https://github.com/MemeEngineer/RNGRPG/assets/90629466/d976107e-ff36-46f3-8b5f-63d2c08d9150)

![image](https://github.com/MemeEngineer/RNGRPG/assets/90629466/e2afc6d8-5d2b-4d61-8175-53a9bc94cc31)

# Motivation
______________
This game was created for my love of MMORPGs. Inspired by games with drop rates and rare items. RNG based games have always intrigued me because people love a good grind to find items that would boosts the character stats. This is a short homage, to games that give us that dopamine when trying to find rare items for your character.

# Game Logic / Game Mechanic
______________
Created with Object Oriented programming in mind. Each class/object has X & Y coordinates. The bullets/attack event happens at the players X & Y coordinate and is put into an array. If the Mob(Moveable Objects) / enemies are in the same X & Y coordinate as the bullets then the collision will trigger a class method to reduce the Mobs health. The game takes place in a canvas element in HTML <canvas/> allowing graphical and color elements to be drawn. The top left corner of the canvas element is the origin and the game is based off of those coordinate positions.

# Wireframe
_____________
![image](https://github.com/MemeEngineer/RNGRPG/assets/90629466/16fb3c07-2351-431e-a07a-50514917c46a)

# Live ScreenShot
_________________
![image](https://github.com/MemeEngineer/RNGRPG/assets/90629466/564835ce-f183-4bb5-b539-82682badef4a)



# Technology
______________

![HTMLCSSJS](https://github.com/MemeEngineer/RNGRPG/assets/90629466/7ce08ecb-c62b-4772-a7e6-647473cf1176)


# Improvements / Future Implementations
______________________________________
- Randomize mob movement (create mobs that move)
- Fix lose condition to end when collision and health reduction
- Add more items to boost damage or add health
- Add Pond to make a game within a game to obtain more items
- Need to map out border to prevent player from going off screen

# Credit
______________
Special Thanks to Colton Wright for the idea of using Pac-Man / Space Invaders game mechanics.

# Links Used
_________________
## (Game Foundation)
- https://www.youtube.com/watch?v=i7FzA4NavDs

## (Future Use to build map collision)
- https://www.youtube.com/watch?v=Tk48dQCdQ3E
- https://www.youtube.com/watch?v=KsLChm2MIQY

## (2D collision Detection)
- https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#axis-aligned_bounding_box
  
## (Random Number Generation)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  
## (Game movement)
- https://www.w3schools.com/graphics/game_movement.asp

