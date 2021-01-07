/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add a new ERP connection for the company
*
* z2OCompanyDataConnectionAdd Z2OCompanyDataConnectionAdd  (optional)
* returns Z2O.Company.DataConnection
* */
const companyConnectionPOST = ({ z2OCompanyDataConnectionAdd }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OCompanyDataConnectionAdd,
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
  companyConnectionPOST,
};
