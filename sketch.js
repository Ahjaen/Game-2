var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27;
var thief, cop1, cop2
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10


function preload(){

    thiefImage=loadImage("thief.png")
    copImage = loadImage("cop.png")
    j1 = loadImage("diamond.png")
    j2 = loadImage("amethyst.png")
    j3 = loadImage("apatite.png")
    j4 = loadImage("emerald.png")
    j5 = loadImage("gold.png")
    j6 = loadImage("moonstone.png")
    j7 = loadImage("pearl.png")
    j8 = loadImage("ruby.png")
    j9 = loadImage("saphire.png")
    j10 = loadImage("silver.png")

}

function setup(){
    createCanvas(600,600)


    w1 = createSprite(300, 2, 300, 5)
    w2 = createSprite(50, 2, 100, 5)
    w3 = createSprite(550, 2, 100, 5)
    w4 = createSprite(300, 598, 600, 5)
    w5 = createSprite(2, 300, 5, 600)
    w6 = createSprite(598, 200, 5, 400)
    w7 = createSprite(598, 550, 5, 100)
    w8 = createSprite(190, 60, 200, 5)
    w9 = createSprite(152, 232, 5, 350)
    w10 = createSprite(115, 240, 70, 5)
    w11= createSprite(458, 175, 150, 5)
    w12 = createSprite(535, 225, 5, 105)
    w13 = createSprite(397, 235, 280, 5)
    w14 = createSprite(259.5, 265, 5, 60)
    w15 = createSprite(545, 350, 110, 5)
    w16 = createSprite(488, 375, 5, 100)
    w17 = createSprite(440, 333, 5, 60)
    w18 = createSprite(378, 300, 130, 5)
    w19 = createSprite(330, 365, 226, 5)
    w20 = createSprite(410,425, 250, 5)
    w21 = createSprite(352, 117, 250, 5)
    w22 = createSprite(480, 90, 5, 60)
    w23 = createSprite(40, 150, 80, 5)
    w24 = createSprite(77, 250, 5, 200)
    w25 = createSprite(75, 475, 180, 5)
    w26 = createSprite(105, 410, 100, 5)
    w27 = createSprite(80, 565, 5, 60)
    w28 = createSprite(302, 535, 450, 5)
    w29 = createSprite(525, 508, 5, 60)
    w30 = createSprite(230, 145, 5, 60)
    w31 = createSprite(288, 455, 5, 60)
    w32 = createSprite(218, 390, 5, 56)
    w33 = createSprite(452, 480, 150, 5)

    thief = createSprite(124, 35, 12, 12)
    thief.addImage(thiefImage)
    thief.scale = 0.065
    cop1 = createSprite(370, 330, 12, 12)
    cop1.addImage(copImage)
    cop1.scale = 0.12
    cop2 = createSprite(110, 300, 12, 12)
    cop2.addImage(copImage)
    cop2.scale = 0.12

    d1 = createSprite(570, 30, 10, 10)
    d2 = createSprite(40, 170, 10, 10)
    d3 = createSprite(110, 570, 10, 10)
    d4 = createSprite(530, 380, 10, 10)
    d5 = createSprite(480, 200, 10, 10)
    d6 = createSprite(490, 510, 10, 10)
    d7 = createSprite(113, 205, 10, 10)
    d8 = createSprite(40, 570, 10, 10)
    d9 = createSprite(370, 270, 10, 10)
    d10 = createSprite(260, 140, 10, 10)

    d1.addImage(j1)
    d2.addImage(j2)
    d3.addImage(j3)
    d4.addImage(j4)
    d5.addImage(j5)
    d6.addImage(j6)
    d7.addImage(j7)
    d8.addImage(j8)
    d9.addImage(j9)
    d10.addImage(j10)

    d1.scale = 0.1
    d2.scale = 0.07
    d3.scale = 0.05
    d4.scale = 0.06
    d5.scale = 0.1
    d6.scale = 0.1
    d7.scale = 0.06
    d8.scale = 0.01
    d9.scale = 0.07
    d10.scale = 0.07




}

function draw(){
    background("red")



    drawSprites()
}