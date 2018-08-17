/*
  Copyright (C) 2018-present evan GmbH.

  This program is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License, version 3,
  as published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program. If not, see http://www.gnu.org/licenses/ or
  write to the Free Software Foundation, Inc., 51 Franklin Street,
  Fifth Floor, Boston, MA, 02110-1301 USA, or download the license from
  the following URL: https://evan.network/license/

  You can be released from the requirements of the GNU Affero General Public
  License by purchasing a commercial license.
  Buying such a license is mandatory as soon as you use this software or parts
  of it on other blockchains than evan.network.

  For more information, please contact evan GmbH at this address:
  https://evan.network/license/
*/

!function(o,s){function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var s=16*Math.random()|0;return("x"==o?s:3&s|8).toString(16)})}function n(){this.key=!1,this.sendConsoleErrors=!1,this.tag="jslogger",this.useDomainProxy=!1}function t(o,s){o.key=s,o.setSession(),a(o)}function i(o,s){o.tag=s}function r(o,s){o.useDomainProxy=s,a(o)}function l(s,e){if(s.sendConsoleErrors=e,!0===s.sendConsoleErrors){var n=o.onerror;o.onerror=function(e,t,i,r,l){s.push({category:"BrowserJsException",exception:{message:e,url:t,lineno:i,colno:r,stack:l?l.stack:"n/a"}}),n&&"function"==typeof n&&n.apply(o,arguments)}}}function a(s){1==s.useDomainProxy?s.inputUrl=g+o.location.host+"/"+u+"/inputs/"+s.key+"/tag/"+s.tag:s.inputUrl=g+(s.logglyCollectorDomain||c)+"/inputs/"+s.key+"/tag/"+s.tag}var g="http"+("https:"===s.location.protocol?"s":"")+"://",c="logs-01.loggly.com",x="logglytrackingsession".length+1,u="loggly";n.prototype={setSession:function(o){o?(this.session_id=o,this.setCookie(this.session_id)):this.session_id||(this.session_id=this.readCookie(),this.session_id||(this.session_id=e(),this.setCookie(this.session_id)))},push:function(o){var s=typeof o;if(o&&("object"===s||"string"===s)){var e=this;if("string"===s)o={text:o};else{if(o.logglyCollectorDomain)return void(e.logglyCollectorDomain=o.logglyCollectorDomain);if(void 0!==o.sendConsoleErrors&&l(e,o.sendConsoleErrors),o.tag&&i(e,o.tag),o.useDomainProxy&&r(e,o.useDomainProxy),o.logglyKey)return void t(e,o.logglyKey);if(o.session_id)return void e.setSession(o.session_id)}e.key&&e.track(o)}},track:function(s){s.sessionId=this.session_id;try{var e=new XMLHttpRequest;e.open("POST",this.inputUrl,!0),e.setRequestHeader("Content-Type","text/plain"),e.send(JSON.stringify(s))}catch(e){o&&o.console&&"function"==typeof o.console.log&&(console.log("Failed to log to loggly because of this exception:\n"+e),console.log("Failed log data:",s))}},readCookie:function(){var o=s.cookie,e=o.indexOf("logglytrackingsession");if(e<0)return!1;var n=o.indexOf(";",e+1);return n=n<0?o.length:n,o.slice(e+x,n)},setCookie:function(o){s.cookie="logglytrackingsession="+o}};var y=o._LTracker,f=new n;if(y&&y.length){var d=0,h=y.length;for(d=0;d<h;d++)f.push(y[d])}o._LTracker=f,o.LogglyTracker=n}(window,document);
//# sourceMappingURL=loggly.tracker-2.2.2.min.map