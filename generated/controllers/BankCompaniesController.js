/**
 * The BankCompaniesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BankCompaniesService');
const bankCompaniesCompanyIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesCompanyIdDELETE);
};

const bankCompaniesCompanyIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesCompanyIdGET);
};

const bankCompaniesCompanyIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesCompanyIdPUT);
};

const bankCompaniesCompanyIdSettingsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesCompanyIdSettingsGET);
};

const bankCompaniesCompanyIdSettingsPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesCompanyIdSettingsPUT);
};

const bankCompaniesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesGET);
};

const bankCompaniesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.bankCompaniesPOST);
};


module.exports = {
  bankCompaniesCompanyIdDELETE,
  bankCompaniesCompanyIdGET,
  bankCompaniesCompanyIdPUT,
  bankCompaniesCompanyIdSettingsGET,
  bankCompaniesCompanyIdSettingsPUT,
  bankCompaniesGET,
  bankCompaniesPOST,
};
