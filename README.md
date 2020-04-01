# overkill-react-clock

![CI](https://github.com/overkilling/overkill-react-clock/workflows/CI/badge.svg)

This is an extreme, overengineered, example of a ticking clock webapp. 
The starting point is the basic clock [from the React documentation](https://reactjs.org/docs/rendering-elements.html).
From this starting point, each commit will introduce new technologies and techniques. 
This codebase *in no way* represents production-ready code.
Nonetheless, it's a fun way to pickup and learn a few technologies.

The notable technologies used are:
* [React](https://reactjs.org/): a JavaScript library for building user interfaces
* [Redux](https://redux.js.org/): a Predictable State Container for JS Apps
* [Redux-Saga](https://redux-saga.js.org/): an alternative side effect model for Redux apps

## Getting started

Prequisites:
* [Node.JS](https://nodejs.org/) (version tested 12.16.1)
* [Yarn](https://yarnpkg.com/)

Clone the codebase to your local machine

    git@github.com:overkilling/overkill-react-clock.git

Install all dependencies

    yarn install
    
Run all tests and style checks

    yarn test
    yarn prettier-check
    
Start the application

    yarn start
    
 And that's it!
