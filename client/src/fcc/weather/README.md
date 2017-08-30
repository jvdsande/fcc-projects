# FreeCodeCamp Frontend Certification Projects
## Project: Show the Local Weather
### Overview

The Weather project has been implemented as a material-design card showing an interactive scene based on the current weather conditions. The scene will be filled with clouds, rainy clouds, snowy clouds... Depending on the conditions. It will also feature either the Sun or the Moon, placed in the sky according to the current time.

The live demo can be accessed here: [Weather](http://jvdsande.github.io/fcc-projects/fcc/weather)

### User Stories
#### I can see the weather in my current location.
The application uses the browser geolocation API to get the user's position. If this cannot be used, it displays an error message.

#### I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
The clouds filling the sky evolves in appearance and number depending on the weather. Their direction and travel speed depend on the wind. The color of the temperature will also change, depending if the temperature can be considered cold, average or hot.

#### I can push a button to toggle between Fahrenheit and Celsius.
Clicking on the Fahrenheit or Celsius symbol will toggle between the two.
