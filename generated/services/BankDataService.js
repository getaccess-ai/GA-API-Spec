/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all the reports provided by a particular company
*
* companyId UUID 
* returns Z2O.Bank.ReportList
* */
const bankCompaniesCompanyIdDataReportsGET = ({ companyId }) => new Promise(
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
/**
* Get latest annotated data for a particular report provided by a particular company
*
* companyId UUID 
* reportName String 
* returns Z2O.Bank.Report
* */
const bankCompaniesCompanyIdDataReportsReportNameGET = ({ companyId, reportName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyId,
        reportName,
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
  bankCompaniesCompanyIdDataReportsGET,
  bankCompaniesCompanyIdDataReportsReportNameGET,
};
