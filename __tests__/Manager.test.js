const Manager = require("../lib/Manager");

describe("This is the test for the manager class", ()=> {
    it("Should have an officeNumber property when instantiated with the officeNumber parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const officeNumber = 1;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.officeNumber).toEqual(officeNumber);
    });

    it("Should return the officeNumber property when getOfficeNumber method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const officeNumber = 1;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getOfficeNumber()).toEqual(officeNumber);
    });

    it("Should return 'Manager' when the getRole method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const officeNumber = 1;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getRole()).toEqual("Manager");
    });
})