window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),document.querySelectorAll("ul.shuffle").forEach(function(t){for(var e=t.children.length;0<=e;e--)t.appendChild(t.children[Math.random()*e|0])});var notifyOk=function(t,e){console.info("[OK]",t,e)},notifyError=function(t){console.error("[ERROR]",t)};function subscribe(t){try{var e=this.email.value,n={email:e};firestore.collection("subscribers").doc(e).set(n).then(function(t){return notifyOk("Subscription saved",t.id)}).catch(notifyError)}catch(t){notifyError("Oops!",t)}return t.preventDefault(),!1}document.querySelectorAll(".subscribe").forEach(function(t){return t.style.display="flex"}),document.querySelectorAll("form.subscribe").forEach(function(t){return t.addEventListener("submit",subscribe,!0)});var Konami$1=function(t){var n={addEvent:function(t,e,n,o){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](window.event,o)},t.attachEvent("on"+e,t[e+n]))},removeEvent:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n):t.attachEvent&&t.detachEvent(e)},input:"",pattern:"38384040373937396665",keydownHandler:function(t,e){if(e&&(n=e),n.input+=t?t.keyCode:event.keyCode,n.input.length>n.pattern.length&&(n.input=n.input.substr(n.input.length-n.pattern.length)),n.input===n.pattern)return n.code(n._currentLink),n.input="",t.preventDefault(),!1},load:function(t){this._currentLink=t,this.addEvent(document,"keydown",this.keydownHandler,this),this.iphone.load(t)},unload:function(){this.removeEvent(document,"keydown",this.keydownHandler),this.iphone.unload()},code:function(t){window.location=t},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],input:[],code:function(t){n.code(t)},touchmoveHandler:function(t){if(1===t.touches.length&&!0===n.iphone.capture){var e=t.touches[0];n.iphone.stop_x=e.pageX,n.iphone.stop_y=e.pageY,n.iphone.tap=!1,n.iphone.capture=!1,n.iphone.check_direction()}},touchendHandler:function(){if(n.iphone.input.push(n.iphone.check_direction()),n.iphone.input.length>n.iphone.keys.length&&n.iphone.input.shift(),n.iphone.input.length===n.iphone.keys.length){for(var t=!0,e=0;e<n.iphone.keys.length;e++)n.iphone.input[e]!==n.iphone.keys[e]&&(t=!1);t&&n.iphone.code(n._currentLink)}},touchstartHandler:function(t){n.iphone.start_x=t.changedTouches[0].pageX,n.iphone.start_y=t.changedTouches[0].pageY,n.iphone.tap=!0,n.iphone.capture=!0},load:function(t){this.orig_keys=this.keys,n.addEvent(document,"touchmove",this.touchmoveHandler),n.addEvent(document,"touchend",this.touchendHandler,!1),n.addEvent(document,"touchstart",this.touchstartHandler)},unload:function(){n.removeEvent(document,"touchmove",this.touchmoveHandler),n.removeEvent(document,"touchend",this.touchendHandler),n.removeEvent(document,"touchstart",this.touchstartHandler)},check_direction:function(){return x_magnitude=Math.abs(this.start_x-this.stop_x),y_magnitude=Math.abs(this.start_y-this.stop_y),x=this.start_x-this.stop_x<0?"RIGHT":"LEFT",y=this.start_y-this.stop_y<0?"DOWN":"UP",result=x_magnitude>y_magnitude?x:y,result=!0===this.tap?"TAP":result,result}}};return"string"==typeof t&&n.load(t),"function"==typeof t&&(n.code=t,n.load()),n};"undefined"!=typeof module&&void 0!==module.exports?module.exports=Konami$1:"function"==typeof define&&define.amd?define([],function(){return Konami$1}):window.Konami=Konami$1,new Konami(function(){var t=document.querySelector(".jumbo");t&&t.style.setProperty("--bg-img","url(/images/wtf/serious.jpg)")});
