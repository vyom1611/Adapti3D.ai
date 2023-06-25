import {proxy} from "valtio";

const state = proxy({
    intro: true,
    color: "EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './assets/textures/logo.png',
    fullDecal: './assets/textures/full.png',
});

export default state;
