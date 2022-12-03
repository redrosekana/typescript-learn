//* numeric จะกำหนดค่าเท่าไหร่ก็ได้ ถ้าไม่กำหนดจะเริ่มจาก 0 แล้วบวก 1 ไปเรื่อยๆ
//* ถ้ากำหนดแค่บางตัว กำหนดไม่ครบ จะเอาตัวเลขที่มากที่สุดบวก 1
//* เรียงลำดับจากน้อย => มาก
//* read-only
enum Kartoon {
    Onepiece = 40,
    Naruto = 30 ,
    Dragonball = 20,
    Doraemon = 10
}

//* string
enum Eletronics {
    Tv = "Televistion",
    Mv = "Microwave",
}

//* ถ้าเกิดให้ numeric อยู่ท้ายต้องกำหนดค่าเริ่มต้น
enum TwentyTail {
    C = "Cat",
    D = "Dog",
    E = "Egg",
    A = 0,
    B
}