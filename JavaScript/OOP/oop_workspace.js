class Employee {
    constructor(nameSurname, age, job, salary) {
        this.nameSurname = nameSurname;
        this.age = age;
        this.job = job;
        this.salary = salary;
    }

    showInfo() {
        console.log(
            `
            Name-Surname : ${this.nameSurname}
            Age : ${this.age}
            Job : ${this.job}
            Salary : ${this.salary}
            `
        );
    }
}

const employe1 = new Employee("Kerem Kenan", 16, "Full Stack Web Developer", 15000);
employe1.showInfo();