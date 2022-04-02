import { html, render } from "https://unpkg.com/lit-html?module";

const myTemplate = () => html`<div id="myjwplayer"></div>`;

render(myTemplate(), document.body);

// ADD JWPlayer configuration
//https://developer.jwplayer.com/jwplayer/docs/jw8-player-configuration-reference
var jwConfig = {
  advertising: {
    admessage: "This video will resume in xx seconds",
    adscheduleid: "hhW6cirr",
    client: "vast",
    cuetext: "Advertisement",
    outstream: false,
    preloadAds: false,
    rules: {
      startOnSeek: "pre",
      timeBetweenAds: 0,
    },
    schedule: [
      {
        offset: "pre",
        tag: [
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
        ],
        type: "linear",
      },
      {
        offset: "25%",
        tag: [
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
        ],
        type: "linear",
      },
    ],
    skipmessage: "Skip ad in xx seconds",
    vpaidcontrols: false,
  },
  aspectratio: "16:9",
  autostart: false,
  cast: {
    appid: "00000000",
  },
  controls: true,
  displayHeading: false,
  displaydescription: true,
  displaytitle: true,
  floating: {},
  height: 360,
  key: "q/d61eF9lADHYDRwNSH95KJvGY/rgesRIKqr1zv8oYEpCAqhy3HM+7obh6BXlGxC",
  mute: false,
  ph: 3,
  pid: "EP0zdcFj",
  playbackRateControls: false,
  playlist:
    "//cdn.jwplayer.com/v2/media/Rc7OBPSf?recommendations_playlist_id=hrjFwvlV",
  preload: "metadata",
  related: {
    autoplaytimer: 10,
    onclick: "play",
    oncomplete: "autoplay",
  },
  repeat: false,
  stretching: "uniform",
  width: "100%",
}; // end config

// tell jwplayer library to load a player in 'myjwplayer', passing in the jwConfig above. 
jwplayer("myjwplayer").setup(jwConfig);
