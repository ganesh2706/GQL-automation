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
  }`)
  console.log("res", response);
});
// Then('User should get the token', async () => {
//   assert.equal(response.data.data.login, getData.token);
// })

When('User hitting get data endpoint with valid details', async () => {
  response = await I.sendQuery(getData.query, {}, {}, getData.headers);
  console.log("res", response.data.errors);
});

Then('User should get data', async () => {
  assert.equal(response.data.getData.count, basicData.count)
});

When('User hitting get data endpoint with invalid limit', async () => {
  response = await I.sendQuery(getData.invalidLimit);
});

Then('User should get error of limit is invalid', async () => {
  assert.equal(response.data.getData.error, error);
});

When('User hitting get data endpoint with invalid skip', async () => {
  response = await I.sendQuery(getData.invalidSkip);

});

Then('User should get error of skip is invalid', async () => {
  assert.equal(response.data.getData.error, error);
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