const Product1 = {
    "productName":"Book",
    "price":30,
    "quantity":10
}


const Product2:{productName:string,price:number,quantity:number} = {
    "productName":"Pencil",
    "price":20,
    "quantity":5
}

//! {} หรือ Object หรือ object สามารถแก้ไขค่าได้ อ้างถึงได้สำหรับ typescript จะเกิด error ฟ้องเฉยๆ
const Product3:{} = {
    "productName":"Pen",
    "price":10,
    "quantity":25
}


const Product4:object = {
    "productName":"Microwave",
    "price":60,
    "quantity":40
}