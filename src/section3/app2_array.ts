//* ประกาศได้สองแบบ
const ArrayString:Array<string> = ["1","2","3"] 
const ArrayNumber: number[] = [1,2,3]

//* ประกาศอเรย์ที่เก็บได้หลาย type
const ArrayMixed:(string | number)[] = ["1","2",3,4]

//* ประกาศอเรย์ที่เก็บ type อย่างใดอย่างนึง
const ArrayChoose:string[] | number[] = [1,2,3]