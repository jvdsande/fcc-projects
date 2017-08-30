# FreeCodeCamp Frontend Certification Projects

This repository contains all of the projects developed for my FreeCodeCamp Frontend certification.
They are all in one place in order to be available as live-demo on this [Github Page](http://jvdsande.github.io/fcc-projects/)

### Build process

For this project, I used a Webpack-based build process in order to transpile ES2015/ES2016 and JSX into browser-compatible JavaScript. The NPM package used for building is available in the `client/` folder.
The build output is located in the `docs/` folder, used as root of the [Github Page](http://jvdsande.github.io/fcc-projects/).

### Source code
All source code is readable from the `client/src/` folder. This folder contains a `fcc/` subfolder where each project can be found.
React is used for all the projects, and the file organization is always the same:
- The root of the project can be found in `fcc/[project]/index.js`
- All other components are defined in their own `[component]/` subfolder, with their entry point in `[component]/index.js`
- All styling is done with in-code CSS using [styled-components](https://www.styled-components.com/), and is situated in `styles.jsx` file next to the `index.js` file that uses it.

A custom README.md is also available for each independent project.

### Live demo
The live demo of the projects can be loaded from [here](http://jvdsande.github.io/fcc-projects/), hosted by Github, or through my [self-hosted development website](http://jeremie-vds.com/). The Github version offers a through HTTPS experience required for at least the Weather project.

### Project repository list
- [Calculator](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/calculator)
- [Pomodoro](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/pomodoro)
- [Portfolio](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/portfolio)
- [Random Quote](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/quote)
- [Simon Game](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/simon)
- [Tic Tac Toe](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/tictactoe)
- [Tribute Page](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/tribute)
- [Twitch TV](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/twitch)
- [Local Weather](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/weather)
- [Wikipedia Viewer](https://github.com/jvdsande/fcc-projects/tree/master/client/src/fcc/wikipedia)
