/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete a particular company, this is not reversible
*
* companyId UUID 
* no response value expected for this operation
* */
const bankCompaniesCompanyIdDELETE = ({ companyId }) => new Promise(
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
* Get info of a particular company
*
* companyId UUID 
* returns Z2O.Company.CompanyDisplay
* */
const bankCompaniesCompanyIdGET = ({ companyId }) => new Promise(
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
* Update info of a particular company
*
* companyId UUID 
* z2OCompanyCompanyUpdate Z2OCompanyCompanyUpdate  (optional)
* returns Z2O.Company.CompanyDisplay
* */
const bankCompaniesCompanyIdPUT = ({ companyId, z2OCompanyCompanyUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyId,
        z2OCompanyCompanyUpdate,
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
* Get the settings for a particular company
*
* companyId UUID 
* returns Z2O.Company.SettingsDisplay
* */
const bankCompaniesCompanyIdSettingsGET = ({ companyId }) => new Promise(
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
* Update settings for a particular company
*
* companyId UUID 
* z2OCompanySettingsUpdate Z2OCompanySettingsUpdate  (optional)
* returns Z2O.Company.SettingsDisplay
* */
const bankCompaniesCompanyIdSettingsPUT = ({ companyId, z2OCompanySettingsUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyId,
        z2OCompanySettingsUpdate,
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
* Get list of companies connected to bank
*
* returns Z2O.Company.CompanyList
* */
const bankCompaniesGET = () => new Promise(
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
* Add a new company
*
* z2OCompanyCompanyAdd Z2OCompanyCompanyAdd  (optional)
* returns Z2O.Company.CompanyDisplay
* */
const bankCompaniesPOST = ({ z2OCompanyCompanyAdd }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        z2OCompanyCompanyAdd,
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
  bankCompaniesCompanyIdDELETE,
  bankCompaniesCompanyIdGET,
  bankCompaniesCompanyIdPUT,
  bankCompaniesCompanyIdSettingsGET,
  bankCompaniesCompanyIdSettingsPUT,
  bankCompaniesGET,
  bankCompaniesPOST,
};
