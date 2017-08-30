# FreeCodeCamp Frontend Certification Projects
## Project: Use the Twitchtv JSON API
### Overview

For this project I went with a flexbox-based design showing each channel as an individual card.
The card has its background set to the channel's logo (defaulting to Twitch's logo if none), and by default shows only the channel's display name.
If the channel is streaming, the stream name appears at the bottom of the card.
Channels are ordered alphabetically, with the streaming channels always sorted first.

The live demo can be accessed here: [Twitch](http://jvdsande.github.io/fcc-projects/fcc/twitch)

### User Stories
##### I can see whether Free Code Camp is currently streaming on Twitch.tv.
FreeCodeCamp channel is part of the channels loaded on this board. I also added other coding channels, and some gaming channels that stream more often.

##### I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
When clicking on any card (streaming or not), the corresponding channel is open on Twicth.tv

##### If a Twitch user is currently streaming, I can see additional details about what they are streaming.
When a channel is streaming, the name of the stream appears at the bottom of the card.
