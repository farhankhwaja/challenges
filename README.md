#Technologies
[Docker](https://docs.docker.com/)
[Mongo DB](https://hub.docker.com/_/mongo/)
[Node](https://github.com/creationix/nvm)
[Restify](http://restify.com/)
[Mongoose](http://mongoosejs.com/)
[Bcrypt](https://github.com/ncb000gt/node.bcrypt.js)
[Jasmine](http://jasmine.github.io/2.0/introduction.html)
[Chai](http://chaijs.com/)
[Wallaby](https://wallabyjs.com/)


#Directions

[Setup Instructions](https://github.com/prima-ai/challenges/blob/backend/registration/SETUP.md)

Install Node with the nvm configuration file provided within this repo. Make sure to either add the required version to your system PATH or individually expose your NODE_PATH to your IDE flavor as required by Wallaby.

This challenge will be evaluated in the following areas:

- Did the candidate complete the challenge as instructed
- Does the solution work correctly
- Code, syntax, style and cleanliness
- Proper use of ES6
- Code performance

Create a fork of this repository and create a feature branch, *last-name*/registration. When your solution is complete, issue a [pull request pointing your feature branch to upstream](https://help.github.com/articles/merging-a-pull-request/).


#Challenge

*Suggested time to completion*: **2 hours**

Utilizing the technologies listed within this document, we’d like you to build a skeleton REST API with simple authentication. Most of the work has been completed for you already. We want you to specifically focus on the challenge at hand.

Utilizing the links provided above build a Restify API with OOP and M~~*V*~~C best practices. The API should connect with a separate Mongo container that will house the data relevant to this exercise. These services should be linked with [Docker Compose](https://docs.docker.com/compose/compose-file/). Utilize [Docker Compose’s first-class networking](https://docs.docker.com/compose/networking/) to connect the two services.

Expose a POST endpoint `/register` from the API service that validates the following required body parameters:

```
email: String
password: String
username: String
```

Write a [Mongoose Schema](http://mongoosejs.com/docs/api.html#schema-js) for the registering user.

Issue primary indices on both the username and email parameters.

Validate the required parameter types with Mongoose’s built in [Schema Validator](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required).

If the POST payload lacks any of the required fields, the API should respond with an appropriate server [response code](http://www.restapitutorial.com/httpstatuscodes.html) and a message in JSON format.

All API work should exemplify best practice and follow M~~*V*~~C structure. Code should be easily manageable and separated into model/controller logic. All code written should utilize ES6 class structure where applicable.

Remember an API should be able to internationalize request input, no string literals should be placed directly in either controller nor model. Utilize the lang JSON file located within the *i18n* directory.


#Bonus

*Suggested time to completion*: **2 hours**

Prima engineering is a very disciplined [behavior driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) stack.

While test runners like Karma are nice, it requires us to leave the IDE to test. We prefer to develop as much as possible within our respective IDEs in order to keep focused and aligned with the task at hand.

Install [Wallaby](https://wallabyjs.com/) for your IDE flavor to locally develop a strong test suite for the registration rest point being exposed as defined in the challenge. Make sure all points of success and failure are adequately tested.

Write a unit test to test the route endpoint controller. Also, write an integration test that covers the rest point user model. You should not connect with a live database at any point during the unit test. The integration test should connect with a live database before the start of the test. An integration helper that initializes the connection to Mongo before the test has been provided within the repository for you.

Jasmine is shipped as default for use with Wallaby and the Wallaby config file has been configured to used Chai as an assertion library.
