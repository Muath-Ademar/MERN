

const express = require("express");
const app = express();
const port = 8000;


const {faker} = require('@faker-js/faker')

const createUser = () => {
    const UserFake ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.phone_number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        
    }
    return UserFake;
}

console.log(createUser())
const createCompany = () => {
    const CompanyFake ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.phone_number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        
    }
    return UserFake;
}

app.get("/api", (req, res) => {
    res.json(createUser());
});
app.listen(port, () => console.log(`Listening on port: ${port}`));