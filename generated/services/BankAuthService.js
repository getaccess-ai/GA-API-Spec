/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get API Key for your bank
*
* z2OBankBankLogin Z2OBankBankLogin  (optional)
* returns Z2O.Bank.BankAuth
* */
const bankAuthPOST = ({ z2OBankBankLogin }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OBankBankLogin,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Register a new bank
*
* z2OBankBank Z2OBankBank  (optional)
* returns Z2O.Bank.BankDisplay
* */
const bankRegisterPOST = ({ z2OBankBank }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OBankBank,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  bankAuthPOST,
  bankRegisterPOST,
};
