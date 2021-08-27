# Atelier

# atelier-product-overview
API service for handling the 'Product Overview' module of the Atelier shopping app.
# Atelier

## Setup
- **Clone/pull repo**
- `npm install`
- Create a GitHub authorization token and store it in **`config.js`** (make sure it's `.gitignored`).
- `npm start` for the server
- `npm run build` (in a separate terminal) for webpack/react/index.html
- Navigate to `http://localhost:3000` in browser

## Contributing
- Install Pomander before attempting to push commits:
- `curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash`

## Documentation
- Documentation such as diagrams for the app and UX styling guidelines are stored in the **`./docs`** directory.
- See the [web style guide](./docs/web-style-guide.md) for the standards we are following for coding and project organization.

## Team Members
- [Aleksandar Cakic](https://gist.github.com/aleksandar-cakic) - [Engineering Journal](https://gist.github.com/aleksandar-cakic/ac33195f446a9a9ecfa290451e2f3859)


## Testing (IP)
- [Jest](https://jestjs.io/) is the framework chosen to test React and probably all JavaScript code in the app.
- Tests are located in the **`./tests`** directory
- ```npm test``` to run the tests

# Continuous Integration (IP)
Basic test of JavaScript continuous integration uses [CircleCI](https://circleci.com/) to run the tests, and [Coveralls](https://coveralls.io/) for reporting test coverage.

Circle CI: [![SDC-RPP29-sequoia/atelier-product-overview](https://circleci.com/gh/SDC-RPP29-sequoia/atelier-product-overview.svg?style=svg)](https://app.circleci.com/pipelines/github/SDC-RPP29-sequoia/atelier-product-overview)

Coveralls: [![Coverage Status](https://coveralls.io/repos/github/SDC-RPP29-sequoia/atelier-product-overview/badge.svg?branch=main)](https://coveralls.io/github/SDC-RPP29-sequoia/atelier-product-overview?branch=main)

# SonarCloud (IP)
Additionally, [SonarCloud](https://sonarcloud.io/projects) is used for an overall check of code quality.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=alert_status)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Quality: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=alert_status)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Maintainability: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Reliability: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Security: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=security_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Lines of Code: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=ncloc)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Coverage: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=coverage)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Bugs: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=bugs)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Code Smells: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=code_smells)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)

Technical Debt: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-product-overview&metric=sqale_index)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-product-overview)
