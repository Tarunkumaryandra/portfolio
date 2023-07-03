window.onload = function() {
    function createStars(n) {
      var stars = "";
      for (var i = 0; i < n; i++) {
        stars += Math.floor(Math.random() * 2560) + "px " + Math.floor(Math.random() * 2560) + "px #FFF";
        if (i !== n - 1) {
          stars += ",";
        }
      }
      return stars;
    }

    var starFieldWidth = 2560;
    var starFieldHeight = 2560;
    var starStartOffset = 600;
    var starOneScrollDuration = "100s";
    var starTwoScrollDuration = "125s";
    var starThreeScrollDuration = "175s";
    var numStarOneStars = 1700;
    var numStarTwoStars = 700;
    var numStarThreeStars = 200;
    var numShootingStars = 10;

    var starsElement = document.querySelector('.stars');
    starsElement.style.boxShadow = createStars(numStarOneStars);
    starsElement.style.animationDuration = starOneScrollDuration;

    var stars1Element = document.querySelector('.stars1');
    stars1Element.style.boxShadow = createStars(numStarTwoStars);
    stars1Element.style.animationDuration = starTwoScrollDuration;

    var stars2Element = document.querySelector('.stars2');
    stars2Element.style.boxShadow = createStars(numStarThreeStars);
    stars2Element.style.animationDuration = starThreeScrollDuration;

    var shootingStarsElement = document.querySelector('.shooting-stars');
    shootingStarsElement.style.animationDuration = "10s";
  };





// navBAR

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css("background" , "#110e27");
    }

    else{
      $(".navbar").css("background" , "transparent");  	
    }
  })
})


document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });

  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

document.addEventListener('click', function(event) {
  var navbarCollapse = document.querySelector('.navbar-collapse');

  if (event.target.closest('.navbar') === null) {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }
});







  // (function () {
  //           const cursor = document.querySelector('.cursor');
  //           const circle = document.querySelector('.circle');
  //           const links = document.querySelectorAll('.link');
  //           const editPosCursor = (e) => {
  //               const { clientX: x, clientY: y } = e;
  //               cursor.style.left = x + 'px';
  //               cursor.style.top = y + 'px';
  //               circle.style.left = x + 'px';
  //               circle.style.top = y + 'px';
  //           }
  //           const animateit = function(e) {
  //               const span = this.querySelector('span');
  //               const { offsetX: x, offsetY: y } = e,
  //                   { offsetWidth: width, offsetHeight: height } = this,
  //                   move = 25,
  //                   xMove = x / width * (move * 2) - move,
  //                   yMove = y / height * (move * 2) - move;
                
  //               span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  //               circle.classList.add('hover');
  //               if (e.type === 'mouseleave') {
  //                   circle.classList.remove('hover');
  //                   span.style.transform = '';
  //               }
  //           }
  //           window.addEventListener('mousemove', editPosCursor);
  //           links.forEach(link => link.addEventListener('mousemove', animateit));
  //           links.forEach(link => link.addEventListener('mouseleave', animateit));
  //       })();








  // var VanillaTilt = (function () {
  //   'use strict';
    
  //   /**
  //    * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
  //    * Original idea: https://github.com/gijsroge/tilt.js
  //    * MIT License.
  //    * Version 1.7.0
  //    */
    
  //   class VanillaTilt {
  //     constructor(element, settings = {}) {
  //       if (!(element instanceof Node)) {
  //         throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
  //       }
    
  //       this.width = null;
  //       this.height = null;
  //       this.clientWidth = null;
  //       this.clientHeight = null;
  //       this.left = null;
  //       this.top = null;
    
  //       // for Gyroscope sampling
  //       this.gammazero = null;
  //       this.betazero = null;
  //       this.lastgammazero = null;
  //       this.lastbetazero = null;
    
  //       this.transitionTimeout = null;
  //       this.updateCall = null;
  //       this.event = null;
    
  //       this.updateBind = this.update.bind(this);
  //       this.resetBind = this.reset.bind(this);
    
  //       this.element = element;
  //       this.settings = this.extendSettings(settings);
    
  //       this.reverse = this.settings.reverse ? -1 : 1;
  //       this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
  //       this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
  //       this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
  //       this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
  //       this.gyroscopeSamples = this.settings.gyroscopeSamples;
    
  //       this.elementListener = this.getElementListener();
    
  //       if (this.glare) {
  //         this.prepareGlare();
  //       }
    
  //       if (this.fullPageListening) {
  //         this.updateClientSize();
  //       }
    
  //       this.addEventListeners();
  //       this.updateInitialPosition();
  //     }
    
  //     static isSettingTrue(setting) {
  //       return setting === "" || setting === true || setting === 1;
  //     }
    
  //     /**
  //      * Method returns element what will be listen mouse events
  //      * @return {Node}
  //      */
  //     getElementListener() {
  //       if (this.fullPageListening) {
  //         return window.document;
  //       }
    
  //       if (typeof this.settings["mouse-event-element"] === "string") {
  //         const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
    
  //         if (mouseEventElement) {
  //           return mouseEventElement;
  //         }
  //       }
    
  //       if (this.settings["mouse-event-element"] instanceof Node) {
  //         return this.settings["mouse-event-element"];
  //       }
    
  //       return this.element;
  //     }
    
  //     /**
  //      * Method set listen methods for this.elementListener
  //      * @return {Node}
  //      */
  //     addEventListeners() {
  //       this.onMouseEnterBind = this.onMouseEnter.bind(this);
  //       this.onMouseMoveBind = this.onMouseMove.bind(this);
  //       this.onMouseLeaveBind = this.onMouseLeave.bind(this);
  //       this.onWindowResizeBind = this.onWindowResize.bind(this);
  //       this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
    
  //       this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
  //       this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
  //       this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
    
  //       if (this.glare || this.fullPageListening) {
  //         window.addEventListener("resize", this.onWindowResizeBind);
  //       }
    
  //       if (this.gyroscope) {
  //         window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
  //       }
  //     }
    
  //     /**
  //      * Method remove event listeners from current this.elementListener
  //      */
  //     removeEventListeners() {
  //       this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
  //       this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
  //       this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
    
  //       if (this.gyroscope) {
  //         window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
  //       }
    
  //       if (this.glare || this.fullPageListening) {
  //         window.removeEventListener("resize", this.onWindowResizeBind);
  //       }
  //     }
    
  //     destroy() {
  //       clearTimeout(this.transitionTimeout);
  //       if (this.updateCall !== null) {
  //         cancelAnimationFrame(this.updateCall);
  //       }
    
  //       this.reset();
    
  //       this.removeEventListeners();
  //       this.element.vanillaTilt = null;
  //       delete this.element.vanillaTilt;
    
  //       this.element = null;
  //     }
    
  //     onDeviceOrientation(event) {
  //       if (event.gamma === null || event.beta === null) {
  //         return;
  //       }
    
  //       this.updateElementPosition();
    
  //       if (this.gyroscopeSamples > 0) {
  //         this.lastgammazero = this.gammazero;
  //         this.lastbetazero = this.betazero;
    
  //         if (this.gammazero === null) {
  //           this.gammazero = event.gamma;
  //           this.betazero = event.beta;
  //         } else {
  //           this.gammazero = (event.gamma + this.lastgammazero) / 2;
  //           this.betazero = (event.beta + this.lastbetazero) / 2;
  //         }
    
  //         this.gyroscopeSamples -= 1;
  //       }
    
  //       const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
  //       const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
    
  //       const degreesPerPixelX = totalAngleX / this.width;
  //       const degreesPerPixelY = totalAngleY / this.height;
    
  //       const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
  //       const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
    
  //       const posX = angleX / degreesPerPixelX;
  //       const posY = angleY / degreesPerPixelY;
    
  //       if (this.updateCall !== null) {
  //         cancelAnimationFrame(this.updateCall);
  //       }
    
  //       this.event = {
  //         clientX: posX + this.left,
  //         clientY: posY + this.top,
  //       };
    
  //       this.updateCall = requestAnimationFrame(this.updateBind);
  //     }
    
  //     onMouseEnter() {
  //       this.updateElementPosition();
  //       this.element.style.willChange = "transform";
  //       this.setTransition();
  //     }
    
  //     onMouseMove(event) {
  //       if (this.updateCall !== null) {
  //         cancelAnimationFrame(this.updateCall);
  //       }
    
  //       this.event = event;
  //       this.updateCall = requestAnimationFrame(this.updateBind);
  //     }
    
  //     onMouseLeave() {
  //       this.setTransition();
    
  //       if (this.settings.reset) {
  //         requestAnimationFrame(this.resetBind);
  //       }
  //     }
    
  //     reset() {
  //       this.event = {
  //         clientX: this.left + this.width / 2,
  //         clientY: this.top + this.height / 2
  //       };
    
  //       if (this.element && this.element.style) {
  //         this.element.style.transform = `perspective(${this.settings.perspective}px) ` +
  //           `rotateX(0deg) ` +
  //           `rotateY(0deg) ` +
  //           `scale3d(1, 1, 1)`;
  //       }
    
  //       this.resetGlare();
  //     }
    
  //     resetGlare() {
  //       if (this.glare) {
  //         this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
  //         this.glareElement.style.opacity = "0";
  //       }
  //     }
    
  //     updateInitialPosition() {
  //       if (this.settings.startX === 0 && this.settings.startY === 0) {
  //         return;
  //       }
    
  //       this.onMouseEnter();
    
  //       if (this.fullPageListening) {
  //         this.event = {
  //           clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
  //           clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
  //         };
  //       } else {
  //         this.event = {
  //           clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
  //           clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
  //         };
  //       }
    
    
  //       let backupScale = this.settings.scale;
  //       this.settings.scale = 1;
  //       this.update();
  //       this.settings.scale = backupScale;
  //       this.resetGlare();
  //     }
    
  //     getValues() {
  //       let x, y;
    
  //       if (this.fullPageListening) {
  //         x = this.event.clientX / this.clientWidth;
  //         y = this.event.clientY / this.clientHeight;
  //       } else {
  //         x = (this.event.clientX - this.left) / this.width;
  //         y = (this.event.clientY - this.top) / this.height;
  //       }
    
  //       x = Math.min(Math.max(x, 0), 1);
  //       y = Math.min(Math.max(y, 0), 1);
    
  //       let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
  //       let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
  //       let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
    
  //       return {
  //         tiltX: tiltX,
  //         tiltY: tiltY,
  //         percentageX: x * 100,
  //         percentageY: y * 100,
  //         angle: angle
  //       };
  //     }
    
  //     updateElementPosition() {
  //       let rect = this.element.getBoundingClientRect();
    
  //       this.width = this.element.offsetWidth;
  //       this.height = this.element.offsetHeight;
  //       this.left = rect.left;
  //       this.top = rect.top;
  //     }
    
  //     update() {
  //       let values = this.getValues();
    
  //       this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
  //         "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
  //         "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
  //         "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
    
  //       if (this.glare) {
  //         this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
  //         this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
  //       }
    
  //       this.element.dispatchEvent(new CustomEvent("tiltChange", {
  //         "detail": values
  //       }));
    
  //       this.updateCall = null;
  //     }
    
  //     /**
  //      * Appends the glare element (if glarePrerender equals false)
  //      * and sets the default style
  //      */
  //     prepareGlare() {
  //       // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
  //       if (!this.glarePrerender) {
  //         // Create glare element
  //         const jsTiltGlare = document.createElement("div");
  //         jsTiltGlare.classList.add("js-tilt-glare");
    
  //         const jsTiltGlareInner = document.createElement("div");
  //         jsTiltGlareInner.classList.add("js-tilt-glare-inner");
    
  //         jsTiltGlare.appendChild(jsTiltGlareInner);
  //         this.element.appendChild(jsTiltGlare);
  //       }
    
  //       this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
  //       this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
    
  //       if (this.glarePrerender) {
  //         return;
  //       }
    
  //       Object.assign(this.glareElementWrapper.style, {
  //         "position": "absolute",
  //         "top": "0",
  //         "left": "0",
  //         "width": "100%",
  //         "height": "100%",
  //         "overflow": "hidden",
  //         "pointer-events": "none"
  //       });
    
  //       Object.assign(this.glareElement.style, {
  //         "position": "absolute",
  //         "top": "50%",
  //         "left": "50%",
  //         "pointer-events": "none",
  //         "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
  //         "width": `${this.element.offsetWidth * 2}px`,
  //         "height": `${this.element.offsetWidth * 2}px`,
  //         "transform": "rotate(180deg) translate(-50%, -50%)",
  //         "transform-origin": "0% 0%",
  //         "opacity": "0",
  //       });
  //     }
    
  //     updateGlareSize() {
  //       if (this.glare) {
  //         Object.assign(this.glareElement.style, {
  //           "width": `${this.element.offsetWidth * 2}`,
  //           "height": `${this.element.offsetWidth * 2}`,
  //         });
  //       }
  //     }
    
  //     updateClientSize() {
  //       this.clientWidth = window.innerWidth
  //         || document.documentElement.clientWidth
  //         || document.body.clientWidth;
    
  //       this.clientHeight = window.innerHeight
  //         || document.documentElement.clientHeight
  //         || document.body.clientHeight;
  //     }
    
  //     onWindowResize() {
  //       this.updateGlareSize();
  //       this.updateClientSize();
  //     }
    
  //     setTransition() {
  //       clearTimeout(this.transitionTimeout);
  //       this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
  //       if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;
    
  //       this.transitionTimeout = setTimeout(() => {
  //         this.element.style.transition = "";
  //         if (this.glare) {
  //           this.glareElement.style.transition = "";
  //         }
  //       }, this.settings.speed);
    
  //     }
    
  //     /**
  //      * Method return patched settings of instance
  //      * @param {boolean} settings.reverse - reverse the tilt direction
  //      * @param {number} settings.max - max tilt rotation (degrees)
  //      * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
  //      * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
  //      * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
  //      * @param {string} settings.easing - Easing on enter/exit
  //      * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
  //      * @param {number} settings.speed - Speed of the enter/exit transition
  //      * @param {boolean} settings.transition - Set a transition on enter/exit
  //      * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
  //      * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
  //      * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  //      * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
  //      * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
  //      * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
  //      * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
  //      * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
  //      * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
  //      * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
  //      */
  //     extendSettings(settings) {
  //       let defaultSettings = {
  //         reverse: false,
  //         max: 15,
  //         startX: 0,
  //         startY: 0,
  //         perspective: 1000,
  //         easing: "cubic-bezier(.03,.98,.52,.99)",
  //         scale: 1,
  //         speed: 300,
  //         transition: true,
  //         axis: null,
  //         glare: false,
  //         "max-glare": 1,
  //         "glare-prerender": false,
  //         "full-page-listening": false,
  //         "mouse-event-element": null,
  //         reset: true,
  //         gyroscope: true,
  //         gyroscopeMinAngleX: -45,
  //         gyroscopeMaxAngleX: 45,
  //         gyroscopeMinAngleY: -45,
  //         gyroscopeMaxAngleY: 45,
  //         gyroscopeSamples: 10
  //       };
    
  //       let newSettings = {};
  //       for (var property in defaultSettings) {
  //         if (property in settings) {
  //           newSettings[property] = settings[property];
  //         } else if (this.element.hasAttribute("data-tilt-" + property)) {
  //           let attribute = this.element.getAttribute("data-tilt-" + property);
  //           try {
  //             newSettings[property] = JSON.parse(attribute);
  //           } catch (e) {
  //             newSettings[property] = attribute;
  //           }
    
  //         } else {
  //           newSettings[property] = defaultSettings[property];
  //         }
  //       }
    
  //       return newSettings;
  //     }
    
  //     static init(elements, settings) {
  //       if (elements instanceof Node) {
  //         elements = [elements];
  //       }
    
  //       if (elements instanceof NodeList) {
  //         elements = [].slice.call(elements);
  //       }
    
  //       if (!(elements instanceof Array)) {
  //         return;
  //       }
    
  //       elements.forEach((element) => {
  //         if (!("vanillaTilt" in element)) {
  //           element.vanillaTilt = new VanillaTilt(element, settings);
  //         }
  //       });
  //     }
  //   }
    
  //   if (typeof document !== "undefined") {
  //     /* expose the class to window */
  //     window.VanillaTilt = VanillaTilt;
    
  //     /**
  //      * Auto load
  //      */
  //     VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  //   }
    
  //   return VanillaTilt;
    
  //   }());
  //   VanillaTilt.init(document.querySelectorAll(".card"),{
  //         max: 25,
  //         speed: 400,
  //         glare:true, 
  //           "max-glare":1,
  //       });


 // Project carousel
   $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    nav: false,
    dots: true,
    dotsData: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});







