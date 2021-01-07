/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get connection details for a particular company
*
* companyId UUID 
* returns Z2O.Company.DataConnection
* */
const bankCompaniesCompanyIdConnectionGET = ({ companyId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyId,
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
  bankCompaniesCompanyIdConnectionGET,
};
