class Employee {
    constructor(name, id, email, role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return this.role;
    };

    generateHTMLCard(extra){
        return`
        <div class="row row-cols-1 row-cols-md-2 g-4 m-0">
            <div class="col">
                <div class="card rounded" style="width: 18rem;">
                    <div class="card-body p-0 m-2 bg-secondary">
                        <div class="bg-primary text-white fw-bold p-2" > 
                            <h5 class="card-title">${this.name}</h5>
                            <h6 class="card-subtitle mb-2 text-white">${this.role}</h6>
                        </div>
                        <ul class="list-group list-group m-2 bg-light">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <a href="mailto:${this.email}"><li class="list-group-item">Email: ${this.email}</li></a>
                            ${this.role === "Manager" ?
                            `<li class="list-group-item">Office Number: ${extra}</li>` :
                            this.role === "Engineer" ?
                            `<li class="list-group-item">GitHub Username: ${extra}</li>` :
                            `<li class="list-group-item">School: ${extra}</li>`
                        } 
                        </ul>
                    </div>
                </div>
            </div>
        </div> `
    };
};

module.exports = Employee;