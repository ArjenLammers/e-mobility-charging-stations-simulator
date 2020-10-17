const fs = require('fs');
const Utils = require('./Utils');

class Configuration {
  static configurationFile;

  // Read the config file
  static getConfig() {
    if (!Configuration.configurationFile) {
      Configuration.configurationFile = JSON.parse(fs.readFileSync('./src/assets/config.json', 'utf8'));
    }
    return Configuration.configurationFile;
  }

  static getStatisticsDisplayInterval() {
    // Read conf
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'statisticsDisplayInterval') ? Configuration.getConfig().statisticsDisplayInterval : 60;
  }

  static getAutoReconnectTimeout() {
    // Read conf
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'autoReconnectTimeout') ? Configuration.getConfig().autoReconnectTimeout : 10;
  }

  static getAutoReconnectMaxRetries() {
    // Read conf
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'autoReconnectMaxRetries') ? Configuration.getConfig().autoReconnectMaxRetries : -1;
  }

  static getStationTemplateURLs() {
    // Read conf
    return Configuration.getConfig().stationTemplateURLs;
  }

  static useWorkerPool() {
    return Configuration.getConfig().useWorkerPool;
  }

  static getWorkerPoolSize() {
    return Configuration.getConfig().workerPoolSize;
  }

  static getConsoleLog() {
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'consoleLog') ? Configuration.getConfig().consoleLog : false;
  }

  static getLogLevel() {
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'logLevel') ? Configuration.getConfig().logLevel : 'info';
  }

  static getLogFile() {
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'logFile') ? Configuration.getConfig().logFile : 'combined.log';
  }

  static getErrorFile() {
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'errorFile') ? Configuration.getConfig().errorFile : 'error.log';
  }

  static getSupervisionURLs() {
    // Read conf
    return Configuration.getConfig().supervisionURLs;
  }

  static getDistributeStationToTenantEqually() {
    return Utils.objectHasOwnProperty(Configuration.getConfig(), 'distributeStationToTenantEqually') ? Configuration.getConfig().distributeStationToTenantEqually : true;
  }
}

module.exports = Configuration;
