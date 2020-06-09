const environment = process.env.NODE_ENV || "development";
// const config = require("../knexfile.ts")[environment];
const { obj } = require("../knexfile");
const config = obj[environment];

module.exports = require("knex")(config);
