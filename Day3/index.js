                                    // LEC - CLass and Inheritance

// class myClass{
//     a=10;
//     b=20;
//     print(){
//         console.log("i am printing");
//     }
// }

// const obj1 = new myClass();
// obj1.print();
// console.log(obj1);

//now how to give values to 'a' and 'b' through user in class? => using constructor of class

// class myClass{
//     constructor(v1,v2){
//         this.a = v1;
//         this.b = v2;
//         this.c = "Hey";
//     }
//     print(){
//         console.log("i am printing");
//     }
// }

// const obj1 = new myClass(2,3);
// obj1.print();
// console.log(obj1);

// class myClass{
//     #a = 10; //private variable 'a' cannot be accessed outside class
//     #b = 20; //functions can also be made private similarly
//     constructor(v1,v2){
//         this.#a = v1;
//         this.#b = v2;
//     }
//     print(){
//         console.log("i am printing", this.#b);
//     }
// }

// const obj1 = new myClass(2,3);
// obj1.print();
// console.log(obj1);

// class myClass{
//     #a; 
//     #b;
//     get getA(){ //getter function
//         return this.#a;
//     }
//     get getB(){ //getter function
//         return this.#b;
//     }
//     set setA(value){ //setter function
//         this.#a = value;
//     }
//     set setB(value){ //setter function
//         this.#b = value;
//     }
//     constructor(v1,v2){
//         this.#a = v1;
//         this.#b = v2;
//     }
//     print(){
//         console.log("i am printing", this.#b);
//     }
// }

// const obj1 = new myClass(213,374);
// // obj1.print();
// console.log(`a = ${obj1.getA}`);
// console.log(`b = ${obj1.getB}`);
// obj1.setA = 111;
// console.log(`updated value of a = ${obj1.getA}`);

// const myClass = class{
//     #a;
//     #b;
// }
// const obj = new myClass();
// console.log(obj);


// class Electronics{
//     #input;
//     #output;
//     #name;
//     constructor(input,output,name){
//         this.#input = input;
//         this.#output = output;
//         this.#name = name;
//     }
//     print(){
//         console.log(this.#name);
//     }
// }

// const device = new Electronics(18,200,"Charger");
// // device.print();
// //but what if we wanted to have a charger with plutype or a hard-disk with its rpm but common properties also lie
// //like input output and name? => inherit electronics class and add new variables.

// class Charger extends Electronics{
//     #type;
//     constructor(input,output,name,type){
//         super(input,output,name);
//         this.#type = type;
//     }

//     printType(){
//         console.log(`charger type = ${this.#type}`);
//     }
// }
// const hp_charger = new Charger(18,200,"hp_charger","Phone charger");
// hp_charger.print();
// hp_charger.printType();

// class HardDisk extends Electronics{
//     #RPM;
//     constructor(input,output,name,rpm){
//         super(input,output,name);
//         this.#RPM = rpm;
//     }
//     get speed(){
//         console.log(`speed = ${this.#RPM}`);
//     }
// }
// const wd_harddisk = new HardDisk(213,342,"WD Hard-disk",7200);
// wd_harddisk.print();
// wd_harddisk.speed;