# FreeCodeCamp Frontend Certification Projects
## Project: Build a Wikipedia Viewer
### Overview

This project uses a flex-box grid to display a list of material-design inspired cards of Wikipedia entries.
Each card shows a small extract of the article, and a link to open the full article in its own page.
Each line of card text the height of the biggest card in the line.

The live demo can be accessed here: [Wikipedia Viewer](http://jvdsande.github.io/fcc-projects/fcc/wikipedia)

### User Stories
#### I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.
The search box is available top of the screen, and is focused at page load. Writing anything in the search box will trigger a debounce event, which will search for the input words when met.

#### I can click a button to see a random Wikipedia entry.
Next to the search box is a link to a random Wikipedia entry.
