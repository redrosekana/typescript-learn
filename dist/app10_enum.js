"use strict";
//? numeric จะกำหนดค่าเท่าไหร่ก็ได้ ถ้าไม่กำหนดจะเริ่มจาก 0 แล้วบวก 1 ไปเรื่อยๆ
var Kartoon;
(function (Kartoon) {
    Kartoon[Kartoon["Onepiece"] = 10] = "Onepiece";
    Kartoon[Kartoon["Naruto"] = 20] = "Naruto";
    Kartoon[Kartoon["Dragonball"] = 30] = "Dragonball";
    Kartoon[Kartoon["Doraemon"] = 40] = "Doraemon";
})(Kartoon || (Kartoon = {}));
//? string
var Eletronics;
(function (Eletronics) {
    Eletronics["Tv"] = "Televistion";
    Eletronics["Mv"] = "Microwave";
})(Eletronics || (Eletronics = {}));
//? ถ้าเกิดให้ numeric อยู่ท้ายต้องกำหนดค่าเริ่มต้น
var TwentyTail;
(function (TwentyTail) {
    TwentyTail["C"] = "Cat";
    TwentyTail["D"] = "Dog";
    TwentyTail["E"] = "Egg";
    TwentyTail[TwentyTail["A"] = 0] = "A";
    TwentyTail[TwentyTail["B"] = 1] = "B";
})(TwentyTail || (TwentyTail = {}));
