const dateformat = require ('dateformat');

var getDate = () => dateformat(new Date(), `dddd, mmmm dS, yyyy, h:MM:ss TT`);

module.exports = {
  getDate: getDate
};
