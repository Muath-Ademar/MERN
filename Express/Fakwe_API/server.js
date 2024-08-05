
const Express = require("express")
const {faker} = require('@faker-js/faker')
const app = Express()
const createUser = () => {
    const UserFake ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        userId: faker.string.uuid(),
    }
    return UserFake;
}



const createCompany = () => {
    const UserFake ={
        userId: faker.string.uuid(),
        name : faker.company.name(),
        address : {
        street: faker.location.streetAddress(),
        City: faker.location.city(),
        State: faker.location.state(),
        zip: faker.location.zipCode(),
        Country: faker.location.country()
        } 
        
    }
    return UserFake;
}





app.get("/api/users/new", (req, res)=> {
    res.json(createUser())
}) 

app.get("/api/companies/new", (req, res)=> {
    res.json(createCompany())
}) 

app.get("/api/user/company", (req, res)=> {
    res.json({company:createCompany(), user:createUser()})
}) 



app.listen( 8000, () => console.log(`Listening on port: ${8000}`) );