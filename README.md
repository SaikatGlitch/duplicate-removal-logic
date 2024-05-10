# Node Boilerplate

[![tests](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/tests.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/tests.yml)
[![build](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/build.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/build.yml)
[![Sentry Release](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/sentry-release.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/sentry-release.yml)
[![Deploy Dev](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-dev.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-dev.yml)
[![Deploy Stage](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-stage.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-stage.yml)
[![Deploy Prod](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/yapsody/nodejs-microservice-boilerplate/actions/workflows/deploy-prod.yml)


This project is a boilerplate code for starter projects for Yapsody 3.0. This project contains the base template for the node js microservice that is built.
This project has dependencies installed and the pipeline completed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Setup

- Make sure you have `NPM_TOKEN` set as an environment variable to pull private npm packages

Note: If you do not have a token, please ask your POC of the project lead for it.

### External Services

- Database: MYSQL.

### Mac OS X

1. If you are using bash, Open the `.bash_profile` file in your home directory (for example,
   `/Users/your-user-name/.bash_profile`) in a text editor.
1. If you are using zsh, Open the `.zshrc` file in your home directory (for example,
   `/Users/your-user-name/.zshrc`) in a text editor.
2. Add `export NPM_TOKEN="00000000-0000-0000-0000-000000000000"` to the last line of the file, where
   *your-dir* is the directory you want to add.
3. Save the file.
4. Restart your terminal.

### Linux

1. Open the `.bashrc` file in your home directory (for example,
   `/home/your-user-name/.bashrc`) in a text editor.
2. Add `export NPM_TOKEN="00000000-0000-0000-0000-000000000000"` to the last line of the file, where
   *your-dir* is the directory you want to add.
3. Save the file.
4. Restart your terminal.

## Running

A step-by-step series of examples that tell you how to get a development env running

### Environment variables

| Name | Description | Default |
|---|---|---|
| ENVIRONMENT | Current environment of service  | `yap-local` |
| MICROSERVICE_NAME | Name of service | `boilerplate` |
| MICROSERVICE_IP |  | `0.0.0.0`|
| APP_HOST | | `0.0.0.0`|
| APP_PORT | Service port | `8080`|
| SENTRY_PROJECT_DSN | | ``|
| MYSQL_HOST | MYSQL server host IP | `0.0.0.0`|
| MYSQL_USERNAME | MYSQL server user name | |
| MYSQL_PASSWORD | MYSQL server user password | |
| MYSQL_DB_NAME | MYSQL database name |`notes` |
| MYSQL_PORT | MYSQL server port | `3306`|


### Using docker (recommended)

To run the project tests including required dependencies, `docker-compose up --build`

### Using npm

1. To build a project, `npm run build`
2. To test a project, `npm run test`
3. To test linter, `npm run lint`
4. To test and fix linter, `npm run lintfix`
5. To audit packages, `npm audit` and to fix minor package issues run `npm audit fix`
6. To start a project server, `npm run start`

## Testing code for Duplicate logic
const event = {
  id: '969d5964-f647-4159-ac06-49b76f31dc94',
  specversion: '1.0',
  type: 'CreateEventSchema',
  source: 'com.yapsody.mailchimp',
  time: '2022-12-01T05:41:31.129Z',
  datacontenttype: 'application/json',
  data: {
    identity: {
      user_id: '1',
      account_id: '299',
      whitelabel_id: '1',
      session_id: '7ab67c9f-b6f7-4084-8535-7b7740208a1a',
      product_id: '1',
    },
    request: {
      read_only: true,
      path: '/sync',
      parameters: {},
      user_agent: {
        raw: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15',
        browser_name: 'Safari',
        browser_version: '15.3',
        os_name: 'Mac OS',
        os_version: '10.15.7',
      },
      source_ip: '157.42.217.247',
    },
    data: {
      event_schema: {
        category: 'Movie',
        name: 'Test 2 | Yapsody',
        description:
          'Testing data',
        event_url:
          'https://swot.yapsody.com/event/index/798193/swot-day-reproductive-medicine',
        image_url: '',
        sitemap_id: 1,
        organizer: {
          name: 'SWOT Education',
          website_url: 'https://swot.yapsody.com',
          description: undefined,
          logo: undefined,
        },
        location: {
          name: "St. Michael's Hospital",
          address: null,
          city: "St. Michael's Hospital, Southwell Street, Bristol, United Kingdom",
          state: 'Avon',
          country: null,
          postal_code: null,
          latitude: '51.45909882',
          longitude: '-2.59940004',
        },
        performers: [],
        sessions: [
          {
            start_date: '2024-05-16T08:00:00+0100',
            end_date: '2024-05-16T17:00:00+0100',
            status: 3,
            attendance_mode: 1,
            offers: [
              {
                name: undefined,
                low_price: '0',
                high_price: '0',
                currency: 'GBP',
                valid_from: '2024-01-08T11:24:47+0000',
                availability: undefined,
              },
            ],
          },
          {
            start_date: '2024-05-18T08:00:00+0100',
            end_date: '2024-05-16T19:00:00+0100',
            status: 3,
            attendance_mode: 1,
            offers: [
              {
                name: undefined,
                low_price: '0',
                high_price: '0',
                currency: 'GBP',
                valid_from: '2024-01-08T11:24:47+0000',
                availability: undefined,
              },
            ],
          },
        ],
      },
    },
  },
};

(async () => {
  const res = await handleEventUpdater({ event_data: event.data });
  console.log(res);
})();