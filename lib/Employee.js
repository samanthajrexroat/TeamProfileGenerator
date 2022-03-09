class Employee {
    constructor(name, id, email, role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return this.role;
    }
}