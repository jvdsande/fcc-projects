# FreeCodeCamp Frontend Certification Projects
## Project: Build a Personal Portfolio Webpage
### Overview
My Portfolio page starts with a short introductory paragraph on my developer background, and proceeds with showing the various projects developed for this specification.

A final section also showcase personal projects. It's scarce for now, but will be filled out day after day.

The live demo for the Portfolio is the root of this Github Page: [Portfolio](http://jvdsande.github.io/fcc-projects)

### User Stories
#### I can access all of the portfolio webpage's content just by scrolling.
The Portfolio is built as a one pager, showing three linear sections. The user can scroll as on any static page all down to the bottom of the page. An empty space has also been added at the end of the page so that the content can scroll all the way up to the middle of the page, making for a better reading experience.

#### I can click different buttons that will take me to the portfolio creator's different social media pages.
The final section includes three buttons, one linking to my [LinkedIn profile](https://linkedin.com/in/jeremievds), one to my [GitHub account](https://github.com/jvdsande), and one to my [FreeCodeCamp Account](https://www.freecodecamp.com/jvdsande).

#### I can see thumbnail images of different projects the portfolio creator has built.
Each of the showcased project is displayed through a zommed-out iframe, showing a live preview of the content.

#### I navigate to different sections of the webpage by clicking buttons in the navigation.
Each section contains an anchor in its title, and a main, fixed navigation bar is available on the left side of the screen.
Clicking on a section link will get the user to the wanted section, with a natural scroll movement thanks to [react-scrollable-anchor](https://www.npmjs.com/package/react-scrollable-anchor)
