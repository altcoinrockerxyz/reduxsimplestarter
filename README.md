# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?

Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

_The following is a continuation on lessons learned related to Solidity dApp (found on SolidityBasics repo) development as taught by StephenGrider via Udemy._

**Lecture 214: Purpose of Boilerplate Projects**

Photo - https://imgur.com/fI1ttKG

Libraries to be used: React.js and Redux.js - JavaScript files with a slightly different syntax of JavaScripts (written in ES6 or ES2016).

Note: No browser has complete support for ES6 yet. (ES5 is Vanilla JavaScript).

For the scripts (codes) to run on a browser, we need to undergo a Tooling or a Transpile step. To Transpile, we need a tool called Webpack, backed by another lib called Babel.js

Their purpose is to take these ES6 codes that can't be run by browsers, and transpile them into something that can be run in browsers.

After running through webpack/babel, a single JS file will be spit out (app.js/application.js/main.js). This new file can be safely run into a browser.

STEPS:

1.  Write our Codes (Project Files)
2.  Tranpile using Webpack / Babel
3.  Run inside of browsers

**Lecture 215: Environment Setup**

Step 1: Install the boiler plate application (navigate to github.com/StephenGrider > ReduxSimpleStarter) -

_Clone repo into Atom (cmd + shift + P to open command palette then type in Git Clone, then choose a directory to install, then paste the Clone with HTTPS url https://github.com/StephenGrider/ReduxSimpleStarter.git)_

_Clone with SSH: Open Terminal and run "git clone git@github.com:StephenGrider/ReduxSimpleStarter.git" < this requires access rights to function_

_Go to project directory and run "npm install" to install all project dependencies_

_Create a new repo on github (reduxsimplestarter)_

_Once this has been setup, edit config file within .git folder and change [remote "origin"] URL to_ https://github.com/altcoinrockerxyz/reduxsimplestarter.git

**Lecture 216: Project Setup**

_The application: A video player of sorts modeled on YouTube (YT)._

Objective: Build the application only in React and utilize YT API.

Search bar on top, Opened window on left, Video List on right hand side,
Video Title and Description below Opened video.

- When the user types a video on the search bar, it will update the video list on the right side on the fly.
- When a video is clicked, it starts playing automatically on the video player to the left.
- Start with the boilerplate package that we just finished installing.

1.  Run "npm start"

This will startup the boilerplate package and run a local server (http://localhost:8080/webpack-dev-server or http://localhost:8080)

**Lecture 217: JSX**

The boilerplate app has an index.html file that contains reference to a JS script called _bundle.js_. This JS is a compiled JavaScript for our entire application (the various JS files within the Source (_src_) folder).

_Webpack and Babel takes all these files and makes them available as bundle.js_

The index.html file is the default html shown (_being run_) by default when accessing http://localhost:8080

NOTE: The _app.js_ file within components folder contains the default content shown when placing the _<div class="container"></div>_ tag.

To really learn, delete the Source folder ( https://imgur.com/tK3MFxn ) and start from scratch.

Re-create the Source (src) folder and an index.js inside.

Restart the server (Ctrl - Q, then run _npm start_)

_What is React?_

A JavaScript library that is used to produce HTML that is shown to user on a web browser. When we write a React code, we are writing individual components or views.

Components - in this context - are snippets of codes that produce HTML. When we write React codes, we write multiple different components. We nest these components together by placing one inside the other in different fashions - to make really complex applications relatively simple.

A component is a collection of JavaScript functions that produce HTML.

_Create an error filled example code, to understand how to Troubleshoot (red texts popping up on browser console)_

_JSX_ is a subset or dialect of JavaScript that allows us to write what looks like HTML inside of our JavaScript but is really, behind the scenes, just JavaScript.
