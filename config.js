var config = {};
config.watson = {};
config.telegram = {};
config.watson.username = process.env.WATSON_USERNAME;
config.watson.password = process.env.WATSON_PASSWORD;
config.telegram.token = process.env.TELEGRAM_TOKEN;
module.exports = config;
