/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get API Key for your company
*
* z2OCompanyCompanyLogin Z2OCompanyCompanyLogin  (optional)
* returns Z2O.Company.CompanyAuth
* */
const companyAuthPOST = ({ z2OCompanyCompanyLogin }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OCompanyCompanyLogin,
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
  companyAuthPOST,
};
