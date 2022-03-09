const Engineer = require("../lib/Engineer");

describe("This is the test for the engineer class", ()=> {
    it("Should have a gitHub property when instantiated with the gitHub parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const gitHub = "mollycodes";
        const emp = new Engineer(name, id, email, gitHub);
        expect(emp.gitHub).toEqual(gitHub);
    });

    it("Should return the gitHub property when getGitHub method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const gitHub = "mollycodes";
        const emp = new Engineer(name, id, email, gitHub);
        expect(emp.getGitHub()).toEqual(gitHub);
    });

    it("Should return 'Engineer' when the getRole method is invoked", ()=>{
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const gitHub = "mollycodes";
        const emp = new Engineer(name, id, email, gitHub);
        expect(emp.getRole()).toEqual("Engineer");
    });
})