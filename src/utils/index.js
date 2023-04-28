const verifyTypes = require("./verifyTypes");
const normalizeStr = require("./normalizeStr");
const contactMongoDB = require("./contactMongDB");
const catchError = require("./catchError");

module.exports = { verifyTypes, normalizeStr, contactMongoDB, catchError };
