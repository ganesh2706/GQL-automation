const I = actor();
const { assert } = require('chai');
// import { assert } from 'chai';

// Add in your custom step files
const { basicData } = require("../data/basic");

let response;

When('User is hitting login endpoint with valid details', async () => {
  response = await I.sendQuery(`query login{
    status,
    data,
    error,
  }`)
});

When('User hitting get data endpoint with valid details', async () => {
  response = await I.sendQuery(`query getData(limit : 1,skip : 200){
    name
    originalId
    email
}`);
});

Then('User should get data', async () => {
  assert.equal(response.data.getData.count, basicData.count)
});

When('User hitting get data endpoint with invalid limit', () => {
  response = await I.sendQuery(`query getData(limit : -1,skip : 200){
    name
    originalId
    email
}`);
});

Then('User should get error of limit is invalid', () => {
  assert.equal(response.data.getData.error, error);
});

When('User hitting get data endpoint with invalid skip', () => {
  response = await I.sendQuery(`query getData(limit : 100,skip : -1){
    name
    originalId
    email
}`);

});

Then('User should get error of skip is invalid', () => {
  assert.equal(response.data.getData.error, error);
});

When('User hitting get data endpoint with blank limit', () => {
  response = await I.sendQuery(`query getData(limit ,skip : 200){
    name
    originalId
    email
}`);

});

Then('User should get error of limit is required', () => {
  assert.equal(response.data.getData.error, basicData.errorUndefined);
});

When('User hitting get data endpoint with blank skip', () => {
  response = await I.sendQuery(`query getData(limit : 100,skip ){
    name
    originalId
    email
}`);

});

Then('User should get error of skip is required', () => {
  assert.equal(response.data.getData.error, basicData.errorUndefined);
});