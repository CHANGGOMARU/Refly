// ==UserScript==
// @name         ReFly
// @namespace    https://github.com/CHANGGOMARU/retwitter
// @version      0.1
// @description  Restore Twitter logo.
// @author       You
// @match        *://*.twitter.com/*
// @icon         https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function change1(){
   const twitterre = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg > g > path');
        if (twitterre) {
            twitterre.setAttribute('d', "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z");
            twitterre.setAttribute('fill', '#1D9BF0');
        }
    }

    function change2(){
   const twitterre = document.querySelector('#layers > div:nth-child(2) > div > div > div > div.css-1dbjc4n.r-1e5uvyk.r-6026j.r-16e0dcy.r-dkhcqf.r-axxi2z.r-18jm5s1 > div > div.css-1dbjc4n.r-136ojw6 > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > svg > g > path');
        if (twitterre) {
            twitterre.setAttribute('d', "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z");
            twitterre.setAttribute('fill', '#1D9BF0');
        }
    }

    const targetNode = document.querySelector('#react-root');
    const config = { attributes: false, childList: true, subtree: true };

    const observer = new MutationObserver(change1);
    const observer2 = new MutationObserver(change2);

    if (targetNode) {
        observer.observe(targetNode, config);
        observer2.observe(targetNode, config);
    } else {
        window.addEventListener('load', () => {
            const targetNode = document.querySelector('#react-root');
            if (targetNode) {
                observer.observe(targetNode, config);
                observer2.observe(targetNode, config);
            }
        });
    }

    window.addEventListener('resize', change1);
    window.addEventListener('resize', change2);
})();
