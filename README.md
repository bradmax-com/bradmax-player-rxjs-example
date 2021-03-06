___
![Bradmax][bradmaxLogo]![ReactJs][reactJsLogo]
___
Repository contains [bradmax player][bradmax] [ReactJs][reactJs] application skeleton for a typical [ReactJs][reactJs] web app. 

It uses [webpack][webpack] to bundle app files, please visit [their website][webpack] for more details.
___
### Example of usage for:
[bradmax-com/bradmax-player-rxjs][git-player-rxjs] : bradmax player react js library.
___
## Prerequisites
We use a number of [Node.js][node] tools to initialize and build processes. You must have [Node.js][node] and its package manager [npm][npm] installed.
We also recommend to use [yarn][yarn] as replacement for [npm][npm].

You can check required [node.js][node], [npm][npm] and [yarn][yarn] versions in 'engines' section of [./package.json](./package.json) file.
___
| Directory Layout |  |
|---|---|
| *`public/`*             | static app asset files |
| *`└─ index.html`*       | app main layout file *(the main html template file of the app)* |
| *`src/`*                | all of the source files for the application |
| *`└─ App.scss`*         | app style sheets |
| *`└─ App.tsx`*          | app component |
| *`└─ index.scss`*       | main style sheets |
| *`└─ index.tsx`*        | main component |
| *`tsconfig.json`*       | main typescript configuration |
| *`tslint.json`*         | tslint configuration |
| *`webpack.config.json`* | webpack configuration |
___
## Usage:
### 1. Install removed dependencies
```
yarn 
```
### 2. Run removed
```
yarn start
```
___
#### License MIT 
___
More info @ [bradmax.com][bradmax]

[bradmax]: https://bradmax.com
[bradmax-doc-config]: https://bradmax.com/static/player-doc/configuration.html
[npm-player-ag]: https://npmjs.com/package/bradmax-player-ag
[npm-player-ng]: https://npmjs.com/package/bradmax-player-ng
[npm-player-rxjs]: https://npmjs.com/package/bradmax-player-rxjs
[npm-player-js]: https://npmjs.com/package/bradmax-player-js
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rxjs]: https://github.com/bradmax-com/bradmax-player-rxjs
[git-player-rxjs-example]: https://github.com/bradmax-com/bradmax-player-rxjs-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-js

[local-app-url]: localhost:4200
[reactJs]: https://reactjs.org/
[webpack]: https://webpack.org/

[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[yarn]: https://yarnpkg.com/

[bradmaxLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-rxjs-example/master/assets/md/bradmax.svg?sanitize=true
[reactJsLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-rxjs-example/master/assets/md/rx.svg?sanitize=true
