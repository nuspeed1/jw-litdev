# jw-litdev
This is a simple lit.dev implementation. 

- It loads a player library
- Then loads the lit component

### index.html
`Line 4` Loads the JWPlayer library.
```html
<script src="https://cdn.jwplayer.com/libraries/EP0zdcFj.js"></script>
```
Change this to your own player library.  The player library URL can be found in the JWPlayer Dashboard > Player > Select Player or create one.

### jw-component.js
`Line 1` imports the lit library.
```javascript
import { html, render } from "https://unpkg.com/lit-html?module";
```

`Line 3` adds the DIV which holds the JWPlayer component.
```javascript
const myTemplate = () => html`<div id="myjwplayer"></div>`;
```
`Line 9-67` is the JWPlayer configuration.  More information on the player configuration can be found here: https://developer.jwplayer.com/jwplayer/docs/jw8-player-configuration-reference

`Line 70` is where we load the player into the DIV above.  
```javascript
jwplayer("myjwplayer").setup(jwConfig);
```
