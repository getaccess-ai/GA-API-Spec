/**
 * The CompanyDataController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CompanyDataService');
const companyDataReportsAllGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsAllGET);
};

const companyDataReportsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsGET);
};

const companyDataReportsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsPOST);
};

const companyDataReportsReportNameDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsReportNameDELETE);
};

const companyDataReportsReportNameGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsReportNameGET);
};

const companyDataReportsReportNamePOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.companyDataReportsReportNamePOST);
};


module.exports = {
  companyDataReportsAllGET,
  companyDataReportsGET,
  companyDataReportsPOST,
  companyDataReportsReportNameDELETE,
  companyDataReportsReportNameGET,
  companyDataReportsReportNamePOST,
};
