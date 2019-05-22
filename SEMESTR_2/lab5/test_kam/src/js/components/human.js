
class Human {
    constructor (gender, age) {
        this.gender = gender;
        this.age = age;
    }

    print() {
        const tekst = `Stworzono nowego człowieka. Płeć ${this.gender}: wiek: ${this.age}`
        console.log(tekst)
    }
}

export default Human;
