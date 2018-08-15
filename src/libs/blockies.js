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

!function(){function r(r){for(var t=0;t<l.length;t++)l[t]=0;for(var t=0;t<r.length;t++)l[t%4]=(l[t%4]<<5)-l[t%4]+r.charCodeAt(t)}function t(){var r=l[0]^l[0]<<11;return l[0]=l[1],l[1]=l[2],l[2]=l[3],l[3]=l[3]^l[3]>>19^r^r>>8,(l[3]>>>0)/(1<<31>>>0)}function e(){var r=Math.floor(360*t()),e=60*t()+40+"%",o=25*(t()+t()+t()+t())+"%",n="hsl("+r+","+e+","+o+")";return n}function o(r){for(var e=r,o=r,n=Math.ceil(e/2),a=e-n,l=[],c=0;o>c;c++){for(var f=[],h=0;n>h;h++)f[h]=Math.floor(2.3*t());var i=f.slice(0,a);i.reverse(),f=f.concat(i);for(var v=0;v<f.length;v++)l.push(f[v])}return l}function n(r,t,e,o,n){var a=document.createElement("canvas"),l=Math.sqrt(r.length);a.width=a.height=l*e;var c=a.getContext("2d");c.fillStyle=o,c.fillRect(0,0,a.width,a.height),c.fillStyle=t;for(var f=0;f<r.length;f++){var h=Math.floor(f/l),i=f%l;c.fillStyle=1==r[f]?t:n,r[f]&&c.fillRect(i*e,h*e,e,e)}return a}function a(t){t=t||{};var a=t.size||8,l=t.scale||4,c=t.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);r(c);var f=t.color||e(),h=t.bgcolor||e(),i=t.spotcolor||e(),v=o(a),u=n(v,f,l,h,i);return u}var l=new Array(4);window.blockies={create:a}}();
