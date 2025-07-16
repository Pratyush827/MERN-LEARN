
//public class
class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    Info(){
        return `name: ${this.name},age: ${this.age}`;
    }
}
const ram = new Student("Ram", 20);
console.log(ram.name);
console.log(ram.age);

//private class
class StudentPrivate{
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    Info(){
        return `name: ${this.#name}, age: ${this.#age}`;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }

    setName(name){
        this.#name = name;
    }
    setAge(age){
        this.#age = age;    
    }
}
const shyam = new StudentPrivate("Shyam", 22);
console.log(shyam.getName());