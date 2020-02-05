const I = actor();
const { assert } = require('chai');
// import { assert } from 'chai';

// Add in your custom step files
const { basicData } = require("../data/basic");
const { getData } = require('../GqlQuery/getData');

let response;



When('User is hitting login endpoint with valid details', async () => {
  response = await I.sendMutation(`mutation{
    login(email:"head.trainer@successive.tech",password:"Training@123")
  }
  `);
  console.log("res", response.data);
});

When('User hitting create user endpoint with valid details', async () => {
  response = await I.sendMutation(`mutation {
    createUser(name:"abc",email:"abc@gmail.com",password:"abc")
  }`);
  console.log("res create", response.data);
});

Then('User should get success msg', () => {
  assert.equal(response.data.createUser, basicData.successMsg);
});

When('User hitting get data endpoint with valid details', async () => {
  response = await I.sendQuery(getData.validQuery);
  console.log("res name", response.data.getData);

});

Then('User should get data', async () => {
  const value = Array(response.data.getData).length;
  assert.equal(value,1);
});

When('User hitting get data endpoint with invalid limit', async () => {
  response = await I.sendQuery(getData.invalidLimit);
  console.log("invalid limit ",response.data.errors[0].message)
});

Then('User should get error of limit is invalid', async () => {
  assert.equal(response.data.errors[0].message,basicData.limitError);
});

When('User hitting get data endpoint with invalid skip', async () => {
  response = await I.sendQuery(getData.invalidSkip);
  console.log("invalid limit ",response.data.errors[0].message)
});

Then('User should get error of skip is invalid', async () => {
  assert.equal(response.data.errors[0].message,basicData.limitError);
});

When('User hitting get data endpoint with blank limit', async () => {
  response = await I.sendQuery(getData.linitIsBlank);
});

Then('User should get error of limit is required', async () => {
  assert.equal(response.data.getData.error, basicData.errorUndefined);
});

When('User hitting get data endpoint with blank skip', async () => {
  response = await I.sendQuery(getData.skipIsBlank);
});

Then('User should get error of skip is required', async () => {
  assert.equal(response.data.getData.error, basicData.errorUndefined);
});

When('User is hitting login endpoint with valid details', () => {

});

Then('User should get the token', () => {

});
When('User is hitting login endpoint with invalid details', () => {

});

Then('User should get error message', () => {
});




When('User is hitting login endpoint with invalid email address', async () => {
  response = await I.sendMutation(`mutation{
    login(email:"head.trainer",password:"Training@123")
  }
  `);
  console.log('res invalid email:', response.data.errors[0].extensions.response.body.error);

});

Then('User should get error message for invalid email', () => {
  assert.equal(response.data.errors[0].extensions.response.body.error, basicData.emailErrorMsg);
});
When('User is hitting login endpoint with invalid password', async () => {
  response = await I.sendMutation(`mutation{
    login(email:"head.trainer@successive.tech",password:"Training")
  }
  `)
  // console.log('res invalid password:', response.error.extensions);
  console.log('res invalid email:', response.data.errors[0].extensions.response.body.error);

});

Then('User should get error message for invalid password', () => {
  assert.equal(response.data.errors[0].extensions.response.body.error, basicData.passErrorMsg)

});


