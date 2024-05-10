if (process.env.ENVIRONMENT === 'yap-local') {
  // eslint-disable-next-line import/no-unresolved,no-unused-vars,global-require
  require('dotenv').config();
}

const config = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'yap-local',
  MICROSERVICE_NAME: process.env.MICROSERVICE_NAME || 'Event Updater',
  MICROSERVICE_TYPE:
    process.env.MICROSERVICE_TYPE || 'com.yapsody.event-updater',
  MICROSERVICE_IP: process.env.MICROSERVICE_IP || '0.0.0.0',
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_PORT: process.env.APP_PORT || '8175',
  MYSQL_HOST: process.env.MYSQL_HOST || '0.0.0.0',
  MYSQL_USERNAME: process.env.MYSQL_USERNAME || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'event_discovery',
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  AWS_SQS_ENDPOINT: process.env.AWS_SQS_ENDPOINT,
  AWS_SQS_BATCH_SIZE: process.env.AWS_SQS_BATCH_SIZE || 10,
  AWS_LOCATION_PLACE_INDEX_NAME: process.env.AWS_LOCATION_PLACE_INDEX_NAME,
};

module.exports = config;
//
