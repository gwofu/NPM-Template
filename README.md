# @adtalem/npm-template

This is a npm package template. In package.json file, some common development dependencies are included in `devDependencies` section. If a dependency is needed for other application to use this package then this dependency should also be placed in `peerDependencies` section.

Feel free to update this project for anything that can improve our development. Please update this README file with the change.

---

## Requirements

- Node v10 installed.
- Git installed and configured with AWS CodeCommit.
- Npm installed and configured with our Verdaccio private npm registry.
- Your IP address needs to be added in AWS_ATGE_MOBILE npm-on-site security group in order to access our private npm registry.

Make sure you have access to our [AWS CodeCommit repository](https://console.aws.amazon.com/codesuite/codecommit/repositories?region=us-east-1) page and [Verdaccio private npm registry](http://ec2-3-84-229-75.compute-1.amazonaws.com:4873/) page.

Make sure your node is v10 and npm is v6.

    $ node --version
    v10.15.3

    $ npm --version
    6.4.1

---

## Configure package

Rename npm-template folder to your project name, I will use `your_package` here.

### Remove git reference

    $ rm -rf .git

### Update package.json

Open `your_package/package.json` and set project name to @adtalem/`your_package`.  
_@adtalem is our package scope used to avoid conflict with other external packages._  
Update descriptions and author.  
Update repository url once your package is checked in to CodeCommit repository.

### Running the test

    > npm run test

### Debuging the test

    > npm run test:debug

### Run and watch the package chagne

    > npm start

### Run and without watch the package chagne

    > npm run node

### Analyze source code

    > npm run eslint

### Format source code

    > npm run prettier

### Build for production

    > npm run build

### API documentation

Documentation.js is a node package designed to parse JSDoc and output your documentation in several different formats.

Install the package globally

    > npm install -g documentation

Create API documentation API.md at project root

    > npm run docs

## Publish package

Before publishing you need to setup your account by running the following two commands in a terminal:

    > npm set registry http://ec2-3-84-229-75.compute-1.amazonaws.com:4873
    $ npm adduser --registry http://ec2-3-84-229-75.compute-1.amazonaws.com:4873

To increment version number

    > npm version <patch | minor | major>

To publish run

    > npm publish

Our published packages can found at http://ec2-3-84-229-75.compute-1.amazonaws.com:4873/#/.

## Resources

About [Verdaccio](https://verdaccio.org/en/).  
About [pm2](https://www.npmjs.com/package/pm2)  
&nbsp;&nbsp;&nbsp;- pm2 is used to manage Verdaccio application. Config file is located at /home/ubuntu/.config/verdaccio/config.yaml  
About [CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html).  
About [Jest](https://jestjs.io/).  
About [Dotenv](https://www.npmjs.com/package/dotenv)  
About [documentation.js](https://documentation.js.org/)  
About [Backpack](https://www.npmjs.com/package/backpack-core)  
[Jsdoc cheatsheet](https://devhints.io/jsdoc)  
[Jest cheatsheet](https://devhints.io/jest)  
[Debug Jest test in Visual Studio Code](https://jestjs.io/docs/en/troubleshooting)  
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)  
[Configure Prettier and ESLint in Visual Studio Code](https://www.39digits.com/configure-prettier-and-eslint-in-visual-studio-code/)
