function displayComponent(animal:{name:string,age:number}):{name:string,age:number}{
    animal.name = "adam"
    animal.age = 25
    return animal
}

//! ถ้าหากว่ากำหนด property ในตัวแปรเพิ่มแล้วในฟังชันก์มี property เท่าเดิมก็สามารถเข้าถึงตัวแปร property ได้
//! แต่อาจจะมี error เตือนตอนเข้าถึงข้อมูล ซึ่งไม่ควรทำแบบนี้แต่แรก ควรกำหนด object ให้ชัดไปเลย
const ant:{name:string,age:number} = {
    name:"tony",
    age:15,
}

console.log(displayComponent(ant))

