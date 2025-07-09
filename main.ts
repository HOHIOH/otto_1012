radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
        for (let index = 0; index < 3; index++) {
            for (let mainloop = 0; mainloop <= step; mainloop++) {
                for (let interloop = 0; interloop <= count - 1; interloop++) {
                    tmp_cnt = mainloop + 1
                    g2_angle = forward_g2[mainloop] + Math.idiv((forward_g2[tmp_cnt] - forward_g2[mainloop]) * (interloop + 1), count)
                    g5_angle = forward_g5[mainloop] + Math.idiv((forward_g5[tmp_cnt] - forward_g5[mainloop]) * (interloop + 1), count)
                    g15_angle = forward_g15[mainloop] + Math.idiv((forward_g15[tmp_cnt] - forward_g15[mainloop]) * (interloop + 1), count)
                    g20_angle = forward_g20[mainloop] + Math.idiv((forward_g20[tmp_cnt] - forward_g20[mainloop]) * (interloop + 1), count)
                    angle1 = G1[mainloop] + Math.idiv((G1[tmp_cnt] - G1[mainloop]) * (interloop + 1), count)
                    angle2 = G2[mainloop] + Math.idiv((G2[tmp_cnt] - G2[mainloop]) * (interloop + 1), count)
                    angle3 = G3[mainloop] + Math.idiv((G3[tmp_cnt] - G3[mainloop]) * (interloop + 1), count)
                    angle4 = G4[mainloop] + Math.idiv((G4[tmp_cnt] - G4[mainloop]) * (interloop + 1), count)
                    basic.pause(20)
                }
                robotbit.Servo(robotbit.Servos.S1, g2_angle)
robotbit.Servo(robotbit.Servos.S2, g5_angle)
robotbit.Servo(robotbit.Servos.S3, g15_angle)
robotbit.Servo(robotbit.Servos.S4, g20_angle)
robotbit.Servo(robotbit.Servos.S5, angle1)
robotbit.Servo(robotbit.Servos.S6, angle2)
robotbit.Servo(robotbit.Servos.S7, angle3)
robotbit.Servo(robotbit.Servos.S8, angle4)
            }
        }
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        robotbit.Servo(robotbit.Servos.S1, 95)
robotbit.Servo(robotbit.Servos.S2, 92)
        basic.pause(100)
        robotbit.Servo(robotbit.Servos.S3, 82)
robotbit.Servo(robotbit.Servos.S4, 88)
        robotbit.Servo(robotbit.Servos.S5, 120)
robotbit.Servo(robotbit.Servos.S6, 110)
robotbit.Servo(robotbit.Servos.S7, 120)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
        for (let index = 0; index < 3; index++) {
            for (let mainloop2 = 0; mainloop2 <= step; mainloop2++) {
                for (let interloop2 = 0; interloop2 <= count - 1; interloop2++) {
                    tmp_cnt = mainloop2 + 1
                    g2_angle = backward_g2[mainloop2] + Math.idiv((backward_g2[tmp_cnt] - backward_g2[mainloop2]) * (interloop2 + 1), count)
                    g5_angle = backward_g5[mainloop2] + Math.idiv((backward_g5[tmp_cnt] - backward_g5[mainloop2]) * (interloop2 + 1), count)
                    g15_angle = backward_g15[mainloop2] + Math.idiv((backward_g15[tmp_cnt] - backward_g15[mainloop2]) * (interloop2 + 1), count)
                    g20_angle = backward_g20[mainloop2] + Math.idiv((backward_g20[tmp_cnt] - backward_g20[mainloop2]) * (interloop2 + 1), count)
                    Z1 = G11[mainloop2] + Math.idiv((G11[tmp_cnt] - G11[mainloop2]) * (interloop2 + 1), count)
                    Z2 = G12[mainloop2] + Math.idiv((G12[tmp_cnt] - G12[mainloop2]) * (interloop2 + 1), count)
                    Z3 = G13[mainloop2] + Math.idiv((G13[tmp_cnt] - G13[mainloop2]) * (interloop2 + 1), count)
                    Z4 = G14[mainloop2] + Math.idiv((G14[tmp_cnt] - G14[mainloop2]) * (interloop2 + 1), count)
                    basic.pause(20)
                }
                robotbit.Servo(robotbit.Servos.S1, g2_angle)
robotbit.Servo(robotbit.Servos.S2, g5_angle)
robotbit.Servo(robotbit.Servos.S3, g15_angle)
robotbit.Servo(robotbit.Servos.S4, g20_angle)
robotbit.Servo(robotbit.Servos.S5, Z1)
robotbit.Servo(robotbit.Servos.S6, Z2)
robotbit.Servo(robotbit.Servos.S7, Z3)
robotbit.Servo(robotbit.Servos.S8, Z4)
            }
        }
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        robotbit.Servo(robotbit.Servos.S1, 95)
robotbit.Servo(robotbit.Servos.S2, 92)
        basic.pause(100)
        robotbit.Servo(robotbit.Servos.S3, 82)
robotbit.Servo(robotbit.Servos.S4, 88)
        robotbit.Servo(robotbit.Servos.S5, 120)
robotbit.Servo(robotbit.Servos.S6, 110)
robotbit.Servo(robotbit.Servos.S7, 120)
    }
})
let tmp_cnt = 0
let step = 0
let count = 0
let G14: number[] = []
let G13: number[] = []
let G12: number[] = []
let G11: number[] = []
let backward_g20: number[] = []
let backward_g15: number[] = []
let backward_g5: number[] = []
let backward_g2: number[] = []
let G4: number[] = []
let G3: number[] = []
let G2: number[] = []
let G1: number[] = []
let forward_g20: number[] = []
let forward_g15: number[] = []
let forward_g5: number[] = []
let forward_g2: number[] = []
let g2_angle = 0
let g5_angle = 0
let g15_angle = 0
let g20_angle = 0
let angle1 = 0
let angle2 = 0
let Z1 = 0
let angle3 = 0
let Z2 = 0
let angle4 = 0
let Z3 = 0
let Z4 = 0
radio.setGroup(3)
basic.showIcon(IconNames.Heart)
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
forward_g2 = [
113,
104,
93,
77,
69,
82,
93,
100,
110,
180
]
forward_g5 = [
90,
99,
110,
117,
110,
90,
77,
82,
90,
180
]
forward_g15 = [
112,
100,
85,
71,
66,
72,
85,
95,
108,
180
]
forward_g20 = [
90,
95,
110,
102,
93,
82,
70,
77,
90,
180
]
G1 = [
115,
104,
91,
81,
71,
80,
93,
104,
111,
180
]
G2 = [
90,
110,
115,
105,
91,
87,
103,
110,
90,
180
]
G3 = [
110,
97,
84,
73,
65,
74,
86,
95,
108,
180
]
G4 = [
90,
69,
90,
105,
113,
105,
90,
108,
90,
180
]
backward_g2 = [
74,
80,
91,
109,
114,
104,
87,
80,
72,
180
]
backward_g5 = [
90,
105,
115,
105,
90,
75,
70,
80,
90,
180
]
backward_g15 = [
66,
72,
86,
99,
108,
98,
85,
70,
79,
180
]
backward_g20 = [
90,
100,
105,
110,
95,
85,
75,
80,
90,
180
]
G11 = [
74,
83,
92,
107,
115,
106,
92,
82,
73,
180
]
G12 = [
90,
110,
120,
110,
90,
110,
120,
110,
90,
180
]
G13 = [
66,
72,
86,
100,
110,
100,
86,
72,
78,
180
]
G14 = [
90,
105,
110,
105,
90,
75,
68,
70,
90,
180
]
count = 9
step = 7
