const Intern = require("../lib/Intern");

describe("This is the test for the intern class", ()=> {
    it("Should have a school property when instantiated with the school parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const school = "MIT"
        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    });

    it("Should return the school property when getSchool method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const school = "MIT";
        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    });

    it("Should return 'Intern' when the getRole method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const school = "MIT";
        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    });
})