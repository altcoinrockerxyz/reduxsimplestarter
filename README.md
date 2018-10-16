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

**Lecture 218: More on JSX**

We assigned _const_ instead of _var_ because the variable _App_'s value will not change.

_NOTE:_ JSX makes our code more legible

**Lecture 219: Import Statements**

Take JSX that's been returned by our component and make sure it ends up in our DOM so users can see it. This is simple in theory, but in practice it involves codes that are quite confusing.

React library needs to be defined..?

When we write ES6 code, we have access to JavaScript modules - which encapsulates the idea that all the codes we write in separate files are silo'ed\_ or separated from other codes that we write or other libraries that we install on our project.

Codes that we declared and other files we produced will have zero contact with the file we are working on, unless we explicitly state that we want access to some other file on the same or another location.

So even tho React is already installed, we still need to explicitly state that we want to access to REACT inside of the file we are working on.

**Lecture 220: ReactDOM vs React**

React started to diverge into two separate libraries:

1.  The Core React Library (who knows how to work with react components -- create and manage).

2.  The functionality to actually render a component and insert into a DOM is on a separate library called ReactDOM (used to interact with the actual DOM).

**Lecture 221: Component Instances**

Create and instance of the component

**Lecture 222: Render Targets**

_Note:_ As a rule of thumb, to make an instance, we just have to wrap a class (of a component) with JSX tags. _Whenever we try to make use of a component, wrap with JSX tags._

Problem encountered: We're telling ReactDOM to put it on the page, but we're not actually telling React where to put the component on the page... SO, it is trying to put it, but also requires a second argument - reference to an existing DOM node on the page or a target DOM node (container).

**Lecture 223: Component Structure**

Goal: How to structure application with different components

Remember: A Component -- is a function or an object that returns some amount of HTML.

There could be various different components for each section of the page (i.e. search bar, video title/description, list of videos)

RULE: So for each component, there will exist a separate file. _ONE COMPONENT PER FILE._

1.  A Search bar (search_bar.js)
2.  A Video player and the Title/Description (video_detail.js)
3.  A Single Video preview (to the right, presented multiple times) (video_list_item.js)
4.  A component that will render a list of the video details (we can always NEST components with each other) (video_list.js)
5.  One big over-all component that will contain all the components listed above.

**Lecture 224: Youtube Search API Signup**

1.  Signup for a YT API key (https://console.developers.google.com/?pli=1) > Youtube Data API v3
    https://imgur.com/G26H75x
2.  Install a small package that makes searching simple -- an NPM package called Youtube API search. Run _npm install --save youtube-api-search_

**Lecture 225: Export Statements**

Start by working on the search bar.
Discussions on Exporting Modules, Classes and States

**Lecture 226: Class Based Components**

Create a component - not with a function - but with an ES6 class.

A Class component - if you want your component to have some type of internal record keeping, some ability for it to be aware of itself and what's happened to it since it's been rendered.

Because users are going to be typing into this input, our component has to be able to make other parts of the application that the user typed something and what that something is.

Refactor from a functional component to a class-based component.

_What's going on?_

The SearchBar was previously made as a dumb component with no ability to communicate with other components effectively. We promoted the SearchBar's state from a functional component to a Class-based component.

When we write a class based component, we write Class, then the name of component, then we extend react.Component to it.

Whenever we create a class component, we must always define a render method and return some JSX - otherwise we'll end up with an error.

To render class-based component, it's totally the same as the functional components - we just need to _export_ the component via component name, and we just write the component name on index.js inside some JSX tags.
