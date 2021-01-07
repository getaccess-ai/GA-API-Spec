/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get list of all reports a company can provide for its ERP connection
*
* returns Z2O.Company.ReportNameList
* */
const companyDataReportsAllGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Get list of reports company is providing
*
* returns Z2O.Company.ReportList
* */
const companyDataReportsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Add a new report to provide
*
* z2OCompanyReportAdd Z2OCompanyReportAdd  (optional)
* returns Z2O.Company.Report
* */
const companyDataReportsPOST = ({ z2OCompanyReportAdd }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OCompanyReportAdd,
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
* Stop providing a particular report
*
* reportName String 
* no response value expected for this operation
* */
const companyDataReportsReportNameDELETE = ({ reportName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
/**
* Get latest data of a particular report that will be pushed
*
* reportName String 
* returns Z2O.Company.Report
* */
const companyDataReportsReportNameGET = ({ reportName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
/**
* Annotate the data of a particular report and then push it to bank
*
* reportName String 
* z2OCompanyReportAnnotated Z2OCompanyReportAnnotated  (optional)
* returns Z2O.Bank.Report
* */
const companyDataReportsReportNamePOST = ({ reportName, z2OCompanyReportAnnotated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        reportName,
        z2OCompanyReportAnnotated,
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
  companyDataReportsAllGET,
  companyDataReportsGET,
  companyDataReportsPOST,
  companyDataReportsReportNameDELETE,
  companyDataReportsReportNameGET,
  companyDataReportsReportNamePOST,
};
