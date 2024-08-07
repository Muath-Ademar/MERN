
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

var users=[]
var comapnies = []

//  create comapny include all companes 

app.get("/api/users/new", (req, res)=> {
    const newUser = createUser()
    users.push(newUser)
    res.json(newUser)
}) 

app.get("/api/companies/new", (req, res)=> {
    const newCompany = createCompany()
    comapnies.push(newCompany)
    res.json(newCompany)
}) 

app.get("/api/user/company", (req, res)=> {
    res.json({company:createCompany(), user:createUser()})
}) 

app.get("/api/users", (req, res)=> {
    res.json(users)
}) 

app.get("/api/companies", (req, res) => {
    res.json(comapnies)
})



app.listen( 8000, () => console.log(`Listening on port: ${8000}`) );