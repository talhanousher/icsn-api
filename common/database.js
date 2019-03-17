let config = require('../config/default');
let mongoose = require('mongoose');
exports.connect = function () {
    console.log(config);
  mongoose.connect(config.mongoUrl, {
    reconnectInterval: 5000,
    reconnectTries: 60
  });
  let db = mongoose.connection;
  db.on(`error`, console.error.bind(console, `connection error:`));
  db.once(`open`, function () {
    // we`re connected!
    console.log(`MongoDB connected on "  ${config.mongoUrl}`);
    console.log(`###########################################################################`);
  });
};