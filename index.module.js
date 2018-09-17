if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/prod.module");
} else {
  module.exports = require("./dist/dev.module");
}
