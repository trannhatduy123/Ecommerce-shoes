const { updateUserValidation } = require("../middleware/validation");
const db = require("../database/db");
const md5 = require("md5");
const { json } = require("express/lib/response");