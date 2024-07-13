import initUtils from"./utils.js";import initTyped from"./plugins/typed.js";import initModeToggle from"./tools/lightDarkSwitch.js";import initLazyLoad from"./layouts/lazyload.js";import initScrollTopBottom from"./tools/scrollTopBottom.js";import initLocalSearch from"./tools/localSearch.js";import initCopyCode from"./tools/codeBlock.js";let main={themeInfo:{theme:"Redefine v"+theme.version,author:"EvanNotFound",repository:"https://github.com/EvanNotFound/hexo-theme-redefine"},localStorageKey:"REDEFINE-THEME-STATUS",styleStatus:{isExpandPageWidth:!1,isDark:theme.colors.default_mode&&"dark"===theme.colors.default_mode,fontSizeLevel:0,isOpenPageAside:!0},printThemeInfo:()=>{console.log(`      ______ __  __  ______  __    __  ______                       \r
     /\\__  _/\\ \\_\\ \\/\\  ___\\/\\ "-./  \\/\\  ___\\                      \r
     \\/_/\\ \\\\ \\  __ \\ \\  __\\\\ \\ \\-./\\ \\ \\  __\\                      \r
        \\ \\_\\\\ \\_\\ \\_\\ \\_____\\ \\_\\ \\ \\_\\ \\_____\\                    \r
         \\/_/ \\/_/\\/_/\\/_____/\\/_/  \\/_/\\/_____/                    \r
                                                               \r
 ______  ______  _____   ______  ______ __  __   __  ______    \r
/\\  == \\/\\  ___\\/\\  __-./\\  ___\\/\\  ___/\\ \\/\\ "-.\\ \\/\\  ___\\   \r
\\ \\  __<\\ \\  __\\\\ \\ \\/\\ \\ \\  __\\\\ \\  __\\ \\ \\ \\ \\-.  \\ \\  __\\   \r
 \\ \\_\\ \\_\\ \\_____\\ \\____-\\ \\_____\\ \\_\\  \\ \\_\\ \\_\\\\"\\_\\ \\_____\\ \r
  \\/_/ /_/\\/_____/\\/____/ \\/_____/\\/_/   \\/_/\\/_/ \\/_/\\/_____/\r
                                                               \r
  Github: https://github.com/EvanNotFound/hexo-theme-redefine`)},setStyleStatus:()=>{localStorage.setItem(main.localStorageKey,JSON.stringify(main.styleStatus))},getStyleStatus:()=>{var _=localStorage.getItem(main.localStorageKey);if(_){for(var t in _=JSON.parse(_),main.styleStatus)main.styleStatus[t]=_[t];return _}return null},refresh:()=>{initUtils(),initModeToggle(),initScrollTopBottom(),0!==theme.home_banner.subtitle.text.length&&location.pathname===config.root&&initTyped("subtitle"),!0===theme.navbar.search.enable&&initLocalSearch(),!0===theme.articles.code_block.copy&&initCopyCode(),!0===theme.articles.lazyload&&initLazyLoad()}};function initMain(){main.printThemeInfo(),main.refresh()}document.addEventListener("DOMContentLoaded",initMain);try{swup.hooks.on("page:view",()=>{main.refresh()})}catch(_){}export{main,initMain};