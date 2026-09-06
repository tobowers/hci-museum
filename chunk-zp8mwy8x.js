var xo="184";var wo=0,ua=1,So=2;var Rn=1,Mo=2,dn=3,un=0,Pt=1,ei=2,ti=0,In=1,pn=2,pa=3,fa=4,To=5;var fn=100,Ao=101,Eo=102,Co=103,Ro=104,Io=200,Po=201,Do=202,ko=203,Lo=204,No=205,Fo=206,Uo=207,Bo=208,Oo=209,zo=210,Ho=211,Go=212,Vo=213,Wo=214,Xo=0,Yo=1,qo=2,ma=3,Jo=4,$o=5,jo=6,Ko=7,Zo=0,Qo=1,el=2,$t=0,ga=1,ya=2,ba=3,va=4,_a=5,xa=6,wa=7;var mn=301,Ni=302,mr=303,gr=304,Pn=306,tl=1000,yr=1001,il=1002,Ai=1003,nl=1004;var Dn=1005;var Dt=1006,br=1007;var Fi=1008;var jt=1009,rl=1010,al=1011,kn=1012,Sa=1013,Ei=1014,ui=1015,pi=1016,Ma=1017,Ta=1018,gn=1020,sl=35902,ol=35899,ll=1021,cl=1022,ii=1023,Ui=1026,Bi=1027,hl=1028,Aa=1029,Oi=1030,Ea=1031;var Ca=1033,vr=33776,_r=33777,xr=33778,wr=33779,Ra=35840,Ia=35841,Pa=35842,Da=35843,ka=36196,La=37492,Na=37496,Fa=37488,Ua=37489,Sr=37490,Ba=37491,Oa=37808,za=37809,Ha=37810,Ga=37811,Va=37812,Wa=37813,Xa=37814,Ya=37815,qa=37816,Ja=37817,$a=37818,ja=37819,Ka=37820,Za=37821,Qa=36492,es=36494,ts=36495,is=36283,ns=36284,Mr=36285,rs=36286;var as=0,dl=1,zi="",ul="srgb",ss="srgb-linear",os="linear",at="srgb";var pl=512,fl=513,ml=514,Tr=515,gl=516,yl=517,Ar=518,bl=519;var ls="300 es",cs=2000;function xc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Cn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vl(){let e=Cn("canvas");return e.style.display="block",e}var io={},hn=null;function hs(...e){let t="THREE."+e.shift();if(hn)hn("log",t,...e);else console.log(t,...e)}function _l(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Re(...e){e=_l(e);let t="THREE."+e.shift();if(hn)hn("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Ie(...e){e=_l(e);let t="THREE."+e.shift();if(hn)hn("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function pr(...e){let t=e.join(" ");if(t in io)return;io[t]=!0,Re(...e)}function xl(e,t,i){return new Promise(function(n,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:n()}}setTimeout(a,i)})}var wl={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class fi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}var St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vr=Math.PI/180,fr=180/Math.PI;function Ln(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[e&255]+St[e>>8&255]+St[e>>16&255]+St[e>>24&255]+"-"+St[t&255]+St[t>>8&255]+"-"+St[t>>16&15|64]+St[t>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Xe(e,t,i){return Math.max(t,Math.min(i,e))}function Sc(e,t){return(e%t+t)%t}function Wr(e,t,i){return(1-i)*e+i*t}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}class Ze{static{Ze.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,s){let o=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3],f=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||o!==f||l!==h||c!==g){let w=o*f+l*h+c*g+u*v;if(w<0)f=-f,h=-h,g=-g,v=-v,w=-w;let d=1-s;if(w<0.9995){let p=Math.acos(w),x=Math.sin(p);d=Math.sin(d*p)/x,s=Math.sin(s*p)/x,o=o*d+f*s,l=l*d+h*s,c=c*d+g*s,u=u*d+v*s}else{o=o*d+f*s,l=l*d+h*s,c=c*d+g*s,u=u*d+v*s;let p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let s=i[n],o=i[n+1],l=i[n+2],c=i[n+3],u=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=s*g+c*u+o*h-l*f,e[t+1]=o*g+c*f+l*u-s*h,e[t+2]=l*g+c*h+s*f-o*u,e[t+3]=c*g-s*u-o*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:a}=e,{cos:s,sin:o}=Math,l=s(i/2),c=s(n/2),u=s(r/2),f=o(i/2),h=o(n/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*u+l*h*g,this._y=l*h*u-f*c*g,this._z=l*c*g+f*h*u,this._w=l*c*u-f*h*g;break;case"YXZ":this._x=f*c*u+l*h*g,this._y=l*h*u-f*c*g,this._z=l*c*g-f*h*u,this._w=l*c*u+f*h*g;break;case"ZXY":this._x=f*c*u-l*h*g,this._y=l*h*u+f*c*g,this._z=l*c*g+f*h*u,this._w=l*c*u-f*h*g;break;case"ZYX":this._x=f*c*u-l*h*g,this._y=l*h*u+f*c*g,this._z=l*c*g-f*h*u,this._w=l*c*u+f*h*g;break;case"YZX":this._x=f*c*u+l*h*g,this._y=l*h*u+f*c*g,this._z=l*c*g-f*h*u,this._w=l*c*u-f*h*g;break;case"XZY":this._x=f*c*u-l*h*g,this._y=l*h*u-f*c*g,this._z=l*c*g+f*h*u,this._w=l*c*u+f*h*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10],f=i+s+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(a-n)*h}else if(i>s&&i>u){let h=2*Math.sqrt(1+i-s-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(n+a)/h,this._z=(r+l)/h}else if(s>u){let h=2*Math.sqrt(1+s-i-u);this._w=(r-l)/h,this._x=(n+a)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-i-s);this._w=(a-n)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:a}=e,{_x:s,_y:o,_z:l,_w:c}=t;return this._x=i*c+a*s+n*l-r*o,this._y=n*c+a*o+r*s-i*l,this._z=r*c+a*l+i*o-n*s,this._w=a*c-i*s-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:a}=e,s=this.dot(e);if(s<0)i=-i,n=-n,r=-r,a=-a,s=-s;let o=1-t;if(s<0.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:a,z:s,w:o}=e,l=2*(a*n-s*i),c=2*(s*t-r*n),u=2*(r*i-a*t);return this.x=t+o*l+a*u-s*c,this.y=i+o*c+s*l-r*u,this.z=n+o*u+r*c-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:a,y:s,z:o}=t;return this.x=n*o-r*s,this.y=r*a-i*o,this.z=i*s-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Xr=new U,no=new mi;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,s,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,a,s,o,l)}set(e,t,i,n,r,a,s,o,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=s,c[3]=t,c[4]=r,c[5]=o,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7],f=i[2],h=i[5],g=i[8],v=n[0],w=n[3],d=n[6],p=n[1],x=n[4],A=n[7],M=n[2],P=n[5],C=n[8];return r[0]=a*v+s*p+o*M,r[3]=a*w+s*x+o*P,r[6]=a*d+s*A+o*C,r[1]=l*v+c*p+u*M,r[4]=l*w+c*x+u*P,r[7]=l*d+c*A+u*C,r[2]=f*v+h*p+g*M,r[5]=f*w+h*x+g*P,r[8]=f*d+h*A+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8];return t*a*c-t*s*l-i*r*c+i*s*o+n*r*l-n*a*o}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8],u=c*a-s*l,f=s*o-c*r,h=l*r-a*o,g=t*u+i*f+n*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(n*l-c*i)*v,e[2]=(s*i-n*a)*v,e[3]=f*v,e[4]=(c*t-n*o)*v,e[5]=(n*r-s*t)*v,e[6]=h*v,e[7]=(i*o-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,s){let o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*a+l*s)+a+e,-n*l,n*o,-n*(-l*a+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Yr=new De,ro=new De().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ao=new De().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Mc(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,a,s){if(this.enabled===!1||a===s||!a||!s)return r;if(this.spaces[a].transfer==="srgb")r.r=di(r.r),r.g=di(r.g),r.b=di(r.b);if(this.spaces[a].primaries!==this.spaces[s].primaries)r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ);if(this.spaces[s].transfer==="srgb")r.r=cn(r.r),r.g=cn(r.g),r.b=cn(r.b);return r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r==="")return"linear";return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:n,transfer:"linear",toXYZ:ro,fromXYZ:ao,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:n,transfer:"srgb",toXYZ:ro,fromXYZ:ao,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var Ve=Mc();function di(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function cn(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var $i;class ds{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if($i===void 0)$i=Cn("canvas");$i.width=e.width,$i.height=e.height;let n=$i.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(di(t[i]/255)*255);else t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Tc=0;class Nn{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,s=n.length;a<s;a++)if(n[a].isDataTexture)r.push(qr(n[a].image));else r.push(qr(n[a]))}else r=qr(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function qr(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return ds.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Re("Texture: Unable to serialize Texture."),{}}var Ac=0,Jr=new U;class Tt extends fi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,s=1023,o=1009,l=Tt.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ln(),this.name="",this.source=new Nn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=o,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=300;Tt.DEFAULT_ANISOTROPY=1;class ct{static{ct.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,a=0.01,s=0.1,o=e.elements,l=o[0],c=o[4],u=o[8],f=o[1],h=o[5],g=o[9],v=o[2],w=o[6],d=o[10];if(Math.abs(c-f)<0.01&&Math.abs(u-v)<0.01&&Math.abs(g-w)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+v)<0.1&&Math.abs(g+w)<0.1&&Math.abs(l+h+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,A=(h+1)/2,M=(d+1)/2,P=(c+f)/4,C=(u+v)/4,I=(g+w)/4;if(x>A&&x>M)if(x<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(x),n=P/i,r=C/i;else if(A>M)if(A<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(A),i=P/n,r=I/n;else if(M<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(M),i=C/r,n=I/r;return this.set(i,n,r,t),this}let p=Math.sqrt((w-g)*(w-g)+(u-v)*(u-v)+(f-c)*(f-c));if(Math.abs(p)<0.001)p=1;return this.x=(w-g)/p,this.y=(u-v)/p,this.z=(f-c)/p,this.w=Math.acos((l+h+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class us extends fi{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new Tt(n),a=i.count;for(let s=0;s<a;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(e!==null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Nn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends us{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Er extends Tt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ps extends Tt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{static{ut.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,s,o,l,c,u,f,h,g,v,w){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,a,s,o,l,c,u,f,h,g,v,w)}set(e,t,i,n,r,a,s,o,l,c,u,f,h,g,v,w){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=a,d[9]=s,d[13]=o,d[2]=l,d[6]=c,d[10]=u,d[14]=f,d[3]=h,d[7]=g,d[11]=v,d[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinant()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,a=Math.cos(i),s=Math.sin(i),o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*c,h=a*u,g=s*c,v=s*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-s*o,t[2]=v-f*l,t[6]=g+h*l,t[10]=a*o}else if(e.order==="YXZ"){let f=o*c,h=o*u,g=l*c,v=l*u;t[0]=f+v*s,t[4]=g*s-h,t[8]=a*l,t[1]=a*u,t[5]=a*c,t[9]=-s,t[2]=h*s-g,t[6]=v+f*s,t[10]=a*o}else if(e.order==="ZXY"){let f=o*c,h=o*u,g=l*c,v=l*u;t[0]=f-v*s,t[4]=-a*u,t[8]=g+h*s,t[1]=h+g*s,t[5]=a*c,t[9]=v-f*s,t[2]=-a*l,t[6]=s,t[10]=a*o}else if(e.order==="ZYX"){let f=a*c,h=a*u,g=s*c,v=s*u;t[0]=o*c,t[4]=g*l-h,t[8]=f*l+v,t[1]=o*u,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=s*o,t[10]=a*o}else if(e.order==="YZX"){let f=a*o,h=a*l,g=s*o,v=s*l;t[0]=o*c,t[4]=v-f*u,t[8]=g*u+h,t[1]=u,t[5]=a*c,t[9]=-s*c,t[2]=-l*c,t[6]=h*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*o,h=a*l,g=s*o,v=s*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=f*u+v,t[5]=a*c,t[9]=h*u-g,t[2]=g*u-h,t[6]=s*c,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ec,e,Cc)}lookAt(e,t,i){let n=this.elements;if(Ft.subVectors(e,t),Ft.lengthSq()===0)Ft.z=1;if(Ft.normalize(),vi.crossVectors(i,Ft),vi.lengthSq()===0){if(Math.abs(i.z)===1)Ft.x+=0.0001;else Ft.z+=0.0001;Ft.normalize(),vi.crossVectors(i,Ft)}return vi.normalize(),qn.crossVectors(Ft,vi),n[0]=vi.x,n[4]=qn.x,n[8]=Ft.x,n[1]=vi.y,n[5]=qn.y,n[9]=Ft.y,n[2]=vi.z,n[6]=qn.z,n[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[4],o=i[8],l=i[12],c=i[1],u=i[5],f=i[9],h=i[13],g=i[2],v=i[6],w=i[10],d=i[14],p=i[3],x=i[7],A=i[11],M=i[15],P=n[0],C=n[4],I=n[8],b=n[12],S=n[1],X=n[5],E=n[9],G=n[13],j=n[2],N=n[6],W=n[10],O=n[14],H=n[3],Z=n[7],ne=n[11],me=n[15];return r[0]=a*P+s*S+o*j+l*H,r[4]=a*C+s*X+o*N+l*Z,r[8]=a*I+s*E+o*W+l*ne,r[12]=a*b+s*G+o*O+l*me,r[1]=c*P+u*S+f*j+h*H,r[5]=c*C+u*X+f*N+h*Z,r[9]=c*I+u*E+f*W+h*ne,r[13]=c*b+u*G+f*O+h*me,r[2]=g*P+v*S+w*j+d*H,r[6]=g*C+v*X+w*N+d*Z,r[10]=g*I+v*E+w*W+d*ne,r[14]=g*b+v*G+w*O+d*me,r[3]=p*P+x*S+A*j+M*H,r[7]=p*C+x*X+A*N+M*Z,r[11]=p*I+x*E+A*W+M*ne,r[15]=p*b+x*G+A*O+M*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],s=e[5],o=e[9],l=e[13],c=e[2],u=e[6],f=e[10],h=e[14],g=e[3],v=e[7],w=e[11],d=e[15],p=o*h-l*f,x=s*h-l*u,A=s*f-o*u,M=a*h-l*c,P=a*f-o*c,C=a*u-s*c;return t*(v*p-w*x+d*A)-i*(g*p-w*M+d*P)+n*(g*x-v*M+d*C)-r*(g*A-v*P+w*C)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8],u=e[9],f=e[10],h=e[11],g=e[12],v=e[13],w=e[14],d=e[15],p=t*s-i*a,x=t*o-n*a,A=t*l-r*a,M=i*o-n*s,P=i*l-r*s,C=n*l-r*o,I=c*v-u*g,b=c*w-f*g,S=c*d-h*g,X=u*w-f*v,E=u*d-h*v,G=f*d-h*w,j=p*G-x*E+A*X+M*S-P*b+C*I;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/j;return e[0]=(s*G-o*E+l*X)*N,e[1]=(n*E-i*G-r*X)*N,e[2]=(v*C-w*P+d*M)*N,e[3]=(f*P-u*C-h*M)*N,e[4]=(o*S-a*G-l*b)*N,e[5]=(t*G-n*S+r*b)*N,e[6]=(w*A-g*C-d*x)*N,e[7]=(c*C-f*A+h*x)*N,e[8]=(a*E-s*S+l*I)*N,e[9]=(i*S-t*E-r*I)*N,e[10]=(g*P-v*A+d*p)*N,e[11]=(u*A-c*P-h*p)*N,e[12]=(s*b-a*X-o*I)*N,e[13]=(t*X-i*b+n*I)*N,e[14]=(v*x-g*M-w*p)*N,e[15]=(c*M-u*x+f*p)*N,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:a,y:s,z:o}=e,l=r*a,c=r*s;return this.set(l*a+i,l*s-n*o,l*o+n*s,0,l*s+n*o,c*s+i,c*o-n*a,0,l*o-n*s,c*o+n*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:a,_z:s,_w:o}=t,l=r+r,c=a+a,u=s+s,f=r*l,h=r*c,g=r*u,v=a*c,w=a*u,d=s*u,p=o*l,x=o*c,A=o*u,{x:M,y:P,z:C}=i;return n[0]=(1-(v+d))*M,n[1]=(h+A)*M,n[2]=(g-x)*M,n[3]=0,n[4]=(h-A)*P,n[5]=(1-(f+d))*P,n[6]=(w+p)*P,n[7]=0,n[8]=(g+x)*C,n[9]=(w-p)*C,n[10]=(1-(f+v))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ji.set(n[0],n[1],n[2]).length(),s=ji.set(n[4],n[5],n[6]).length(),o=ji.set(n[8],n[9],n[10]).length();if(r<0)a=-a;Yt.copy(this);let l=1/a,c=1/s,u=1/o;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=c,Yt.elements[5]*=c,Yt.elements[6]*=c,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,t.setFromRotationMatrix(Yt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,a,s=2000,o=!1){let l=this.elements,c=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),h=(i+n)/(i-n),g,v;if(o)g=r/(a-r),v=a*r/(a-r);else if(s===2000)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(s===2001)g=-a/(a-r),v=-a*r/(a-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,s=2000,o=!1){let l=this.elements,c=2/(t-e),u=2/(i-n),f=-(t+e)/(t-e),h=-(i+n)/(i-n),g,v;if(o)g=1/(a-r),v=a/(a-r);else if(s===2000)g=-2/(a-r),v=-(a+r)/(a-r);else if(s===2001)g=-1/(a-r),v=-r/(a-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var ji=new U,Yt=new ut,Ec=new U(0,0,0),Cc=new U(1,1,1),vi=new U,qn=new U,Ft=new U,so=new ut,oo=new mi;class Ti{constructor(e=0,t=0,i=0,n=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],s=n[8],o=n[1],l=n[5],c=n[9],u=n[2],f=n[6],h=n[10];switch(t){case"XYZ":if(this._y=Math.asin(Xe(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(s,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,l);else this._y=0,this._z=Math.atan2(o,r);break;case"ZYX":if(this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(o,r);else this._x=0,this._z=Math.atan2(-a,l);break;case"YZX":if(this._z=Math.asin(Xe(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r);else this._x=0,this._y=Math.atan2(s,h);break;case"XZY":if(this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(s,r);else this._x=Math.atan2(-c,h),this._y=0;break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Cr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Rc=0,lo=new U,Ki=new mi,ai=new ut,Jn=new U,Mn=new U,Ic=new U,Pc=new mi,co=new U(1,0,0),ho=new U(0,1,0),uo=new U(0,0,1),po={type:"added"},Dc={type:"removed"},Zi={type:"childadded",child:null},$r={type:"childremoved",child:null};class It extends fi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();let e=new U,t=new Ti,i=new mi,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new De}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(ho,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(ho,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Jn.copy(e);else Jn.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ai.lookAt(Mn,Jn,this.up);else ai.lookAt(Jn,Mn,this.up);if(this.quaternion.setFromRotationMatrix(ai),n)ai.extractRotation(n.matrixWorld),Ki.setFromRotationMatrix(ai),this.quaternion.premultiply(Ki.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Ie("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(po),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null;else Ie("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),$r.child=e,this.dispatchEvent($r),$r.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld);return e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(po),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.castShadow===!0)n.castShadow=!0;if(this.receiveShadow===!0)n.receiveShadow=!0;if(this.visible===!1)n.visible=!1;if(this.frustumCulled===!1)n.frustumCulled=!1;if(this.renderOrder!==0)n.renderOrder=this.renderOrder;if(this.static!==!1)n.static=this.static;if(Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)n.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((s)=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((s)=>({...s})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(s,o){if(s[o.uuid]===void 0)s[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let o=s.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];r(e.shapes,u)}else r(e.shapes,o)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let o=0,l=this.material.length;o<l;o++)s.push(r(e.materials,this.material[o]));n.material=s}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){let o=this.animations[s];n.animations.push(r(e.animations,o))}}if(t){let s=a(e.geometries),o=a(e.materials),l=a(e.textures),c=a(e.images),u=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);if(s.length>0)i.geometries=s;if(o.length>0)i.materials=o;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(u.length>0)i.shapes=u;if(f.length>0)i.skeletons=f;if(h.length>0)i.animations=h;if(g.length>0)i.nodes=g}return i.object=n,i;function a(s){let o=[];for(let l in s){let c=s[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ln extends It{constructor(){super();this.isGroup=!0,this.type="Group"}}var kc={type:"move"};class Fn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let w=t.getJointPose(v,i),d=this._getHandJoint(l,v);if(w!==null)d.matrix.fromArray(w.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=w.radius;d.visible=w!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,g=0.005;if(l.inputState.pinching&&f>h+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=h-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(s!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity)s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity);else s.hasLinearVelocity=!1;if(n.angularVelocity)s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity);else s.hasAngularVelocity=!1;this.dispatchEvent(kc)}}}if(s!==null)s.visible=n!==null;if(o!==null)o.visible=r!==null;if(l!==null)l.visible=a!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},$n={h:0,s:0,l:0};function jr(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=Sc(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=jr(a,r,e+0.3333333333333333),this.g=jr(a,r,e),this.b=jr(a,r,e-0.3333333333333333)}return Ve.colorSpaceToWorking(this,n),this}setStyle(e,t="srgb"){function i(r){if(r===void 0)return;if(parseFloat(r)<1)Re("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(a===6)return this.setHex(parseInt(r,16),t);else Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=Sl[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Re("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Ve.workingToColorSpace(Mt.copy(this),e),Math.round(Xe(Mt.r*255,0,255))*65536+Math.round(Xe(Mt.g*255,0,255))*256+Math.round(Xe(Mt.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Mt.copy(this),t);let{r:i,g:n,b:r}=Mt,a=Math.max(i,n,r),s=Math.min(i,n,r),o,l,c=(s+a)/2;if(s===a)o=0,l=0;else{let u=a-s;switch(l=c<=0.5?u/(a+s):u/(2-a-s),a){case i:o=(n-r)/u+(n<r?6:0);break;case n:o=(r-i)/u+2;break;case r:o=(i-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e="srgb"){Ve.workingToColorSpace(Mt.copy(this),e);let{r:t,g:i,b:n}=Mt;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL($n);let i=Wr(_i.h,$n.h,t),n=Wr(_i.s,$n.s,t),r=Wr(_i.l,$n.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Mt=new $e;$e.NAMES=Sl;class Rr extends It{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;if(t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)t.object.environmentIntensity=this.environmentIntensity;return t.object.environmentRotation=this.environmentRotation.toArray(),t}}var qt=new U,si=new U,Kr=new U,oi=new U,Qi=new U,en=new U,fo=new U,Zr=new U,Qr=new U,ea=new U,ta=new ct,ia=new ct,na=new ct;class zt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),qt.subVectors(e,t),n.cross(qt);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){qt.subVectors(n,t),si.subVectors(i,t),Kr.subVectors(e,t);let a=qt.dot(qt),s=qt.dot(si),o=qt.dot(Kr),l=si.dot(si),c=si.dot(Kr),u=a*l-s*s;if(u===0)return r.set(0,0,0),null;let f=1/u,h=(l*o-s*c)*f,g=(a*c-s*o)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,oi)===null)return!1;return oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,n,r,a,s,o){if(this.getBarycoord(e,t,i,n,oi)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(r,oi.x),o.addScaledVector(a,oi.y),o.addScaledVector(s,oi.z),o}static getInterpolatedAttribute(e,t,i,n,r,a){return ta.setScalar(0),ia.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,i),na.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(ia,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(e,t,i,n){return qt.subVectors(i,t),si.subVectors(e,t),qt.cross(si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),si.subVectors(this.a,this.b),qt.cross(si).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,s;Qi.subVectors(n,i),en.subVectors(r,i),Zr.subVectors(e,i);let o=Qi.dot(Zr),l=en.dot(Zr);if(o<=0&&l<=0)return t.copy(i);Qr.subVectors(e,n);let c=Qi.dot(Qr),u=en.dot(Qr);if(c>=0&&u<=c)return t.copy(n);let f=o*u-c*l;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(i).addScaledVector(Qi,a);ea.subVectors(e,r);let h=Qi.dot(ea),g=en.dot(ea);if(g>=0&&h<=g)return t.copy(r);let v=h*l-o*g;if(v<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(i).addScaledVector(en,s);let w=c*g-h*u;if(w<=0&&u-c>=0&&h-g>=0)return fo.subVectors(r,n),s=(u-c)/(u-c+(h-g)),t.copy(n).addScaledVector(fo,s);let d=1/(w+v+f);return a=v*d,s=f*d,t.copy(i).addScaledVector(Qi,a).addScaledVector(en,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jt.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=r.count;a<s;a++){if(e.isMesh===!0)e.getVertexPosition(a,Jt);else Jt.fromBufferAttribute(r,a);Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();jn.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();jn.copy(i.boundingBox)}jn.applyMatrix4(e.matrixWorld),this.union(jn)}}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tn),Kn.subVectors(this.max,Tn),tn.subVectors(e.a,Tn),nn.subVectors(e.b,Tn),rn.subVectors(e.c,Tn),xi.subVectors(nn,tn),wi.subVectors(rn,nn),Pi.subVectors(tn,rn);let t=[0,-xi.z,xi.y,0,-wi.z,wi.y,0,-Pi.z,Pi.y,xi.z,0,-xi.x,wi.z,0,-wi.x,Pi.z,0,-Pi.x,-xi.y,xi.x,0,-wi.y,wi.x,0,-Pi.y,Pi.x,0];if(!ra(t,tn,nn,rn,Kn))return!1;if(t=[1,0,0,0,1,0,0,0,1],!ra(t,tn,nn,rn,Kn))return!1;return Zn.crossVectors(xi,wi),t=[Zn.x,Zn.y,Zn.z],ra(t,tn,nn,rn,Kn)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Jt).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var li=[new U,new U,new U,new U,new U,new U,new U,new U],Jt=new U,jn=new Hi,tn=new U,nn=new U,rn=new U,xi=new U,wi=new U,Pi=new U,Tn=new U,Kn=new U,Zn=new U,Di=new U;function ra(e,t,i,n,r){for(let a=0,s=e.length-3;a<=s;a+=3){Di.fromArray(e,a);let o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=t.dot(Di),c=i.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var mt=new U,Qn=new Ze,Lc=0;class Ht extends fi{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=Sn(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=Rt(i,this.array);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=Sn(t,this.array);return t}setX(e,t){if(this.normalized)t=Rt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=Sn(t,this.array);return t}setY(e,t){if(this.normalized)t=Rt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=Sn(t,this.array);return t}setZ(e,t){if(this.normalized)t=Rt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=Sn(t,this.array);return t}setW(e,t){if(this.normalized)t=Rt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=Rt(t,this.array),i=Rt(i,this.array);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=Rt(t,this.array),i=Rt(i,this.array),n=Rt(n,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=Rt(t,this.array),i=Rt(i,this.array),n=Rt(n,this.array),r=Rt(r,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pr extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Nc=new Hi,An=new U,aa=new U;class Un{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Nc.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;An.subVectors(e,this.center);let t=An.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(An,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(An.copy(e.center).add(aa)),this.expandByPoint(An.copy(e.center).sub(aa));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Fc=0,Ot=new ut,sa=new It,an=new U,Ut=new Hi,En=new Hi,bt=new U;class Vt extends fi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((xc(e))?Pr:Ir)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(an).negate(),this.translate(an.x,an.y,an.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Hi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(Ut.setFromBufferAttribute(r),this.morphTargetsRelative)bt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(bt);else this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Un;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let s=t[r];if(En.setFromBufferAttribute(s),this.morphTargetsRelative)bt.addVectors(Ut.min,En.min),Ut.expandByPoint(bt),bt.addVectors(Ut.max,En.max),Ut.expandByPoint(bt);else Ut.expandByPoint(En.min),Ut.expandByPoint(En.max)}Ut.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){let s=t[r],o=this.morphTargetsRelative;for(let l=0,c=s.count;l<c;l++){if(bt.fromBufferAttribute(s,l),o)an.fromBufferAttribute(e,l),bt.add(an);n=Math.max(n,i.distanceToSquared(bt))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),s=[],o=[];for(let I=0;I<i.count;I++)s[I]=new U,o[I]=new U;let l=new U,c=new U,u=new U,f=new Ze,h=new Ze,g=new Ze,v=new U,w=new U;function d(I,b,S){l.fromBufferAttribute(i,I),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),c.sub(l),u.sub(l),h.sub(f),g.sub(f);let X=1/(h.x*g.y-g.x*h.y);if(!isFinite(X))return;v.copy(c).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(X),w.copy(u).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(X),s[I].add(v),s[b].add(v),s[S].add(v),o[I].add(w),o[b].add(w),o[S].add(w)}let p=this.groups;if(p.length===0)p=[{start:0,count:e.count}];for(let I=0,b=p.length;I<b;++I){let S=p[I],{start:X,count:E}=S;for(let G=X,j=X+E;G<j;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let x=new U,A=new U,M=new U,P=new U;function C(I){M.fromBufferAttribute(n,I),P.copy(M);let b=s[I];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),A.crossVectors(P,b);let X=A.dot(o[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,X)}for(let I=0,b=p.length;I<b;++I){let S=p[I],{start:X,count:E}=S;for(let G=X,j=X+E;G<j;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let n=new U,r=new U,a=new U,s=new U,o=new U,l=new U,c=new U,u=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),w=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,w),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),s.fromBufferAttribute(i,g),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,w),s.add(c),o.add(c),l.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(s,o){let{array:l,itemSize:c,normalized:u}=s,f=new l.constructor(o.length*c),h=0,g=0;for(let v=0,w=o.length;v<w;v++){if(s.isInterleavedBufferAttribute)h=o[v]*s.data.stride+s.offset;else h=o[v]*c;for(let d=0;d<c;d++)f[g++]=l[h++]}return new Ht(f,c,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Vt,i=this.index.array,n=this.attributes;for(let s in n){let o=n[s],l=e(o,i);t.setAttribute(s,l)}let r=this.morphAttributes;for(let s in r){let o=[],l=r[s];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=e(f,i);o.push(h)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let s=0,o=a.length;s<o;s++){let l=a[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let o in i){let l=i[o];e.data.attributes[o]=l.toJSON(e.data)}let n={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)n[o]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;if(a.length>0)e.data.groups=JSON.parse(JSON.stringify(a));let s=this.boundingSphere;if(s!==null)e.data.boundingSphere=s.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],u=r[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let s=e.boundingBox;if(s!==null)this.boundingBox=s.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Uc=0;class yn extends fi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)i.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.shadowSide!==null)i.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)i.blending=this.blending;if(this.side!==0)i.side=this.side;if(this.vertexColors===!0)i.vertexColors=!0;if(this.opacity<1)i.opacity=this.opacity;if(this.transparent===!0)i.transparent=!0;if(this.blendSrc!==204)i.blendSrc=this.blendSrc;if(this.blendDst!==205)i.blendDst=this.blendDst;if(this.blendEquation!==100)i.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)i.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)i.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)i.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)i.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)i.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)i.depthFunc=this.depthFunc;if(this.depthTest===!1)i.depthTest=this.depthTest;if(this.depthWrite===!1)i.depthWrite=this.depthWrite;if(this.colorWrite===!1)i.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)i.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)i.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)i.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)i.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)i.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)i.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)i.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)i.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)i.rotation=this.rotation;if(this.polygonOffset===!0)i.polygonOffset=!0;if(this.polygonOffsetFactor!==0)i.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)i.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)i.linewidth=this.linewidth;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.dithering===!0)i.dithering=!0;if(this.alphaTest>0)i.alphaTest=this.alphaTest;if(this.alphaHash===!0)i.alphaHash=!0;if(this.alphaToCoverage===!0)i.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)i.premultipliedAlpha=!0;if(this.forceSinglePass===!0)i.forceSinglePass=!0;if(this.allowOverride===!1)i.allowOverride=!1;if(this.wireframe===!0)i.wireframe=!0;if(this.wireframeLinewidth>1)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)i.flatShading=!0;if(this.visible===!1)i.visible=!1;if(this.toneMapped===!1)i.toneMapped=!1;if(this.fog===!1)i.fog=!1;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let a=[];for(let s in r){let o=r[s];delete o.metadata,a.push(o)}return a}if(t){let r=n(e.textures),a=n(e.images);if(r.length>0)i.textures=r;if(a.length>0)i.images=a}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var ci=new U,oa=new U,er=new U,Si=new U,la=new U,tr=new U,ca=new U;class fs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){oa.copy(e).add(t).multiplyScalar(0.5),er.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(oa);let r=e.distanceTo(t)*0.5,a=-this.direction.dot(er),s=Si.dot(this.direction),o=-Si.dot(er),l=Si.lengthSq(),c=Math.abs(1-a*a),u,f,h,g;if(c>0)if(u=a*o-s,f=a*s-o,g=r*c,u>=0)if(f>=-g)if(f<=g){let v=1/c;u*=v,f*=v,h=u*(u+a*f+2*s)+f*(a*u+f+2*o)+l}else f=r,u=Math.max(0,-(a*f+s)),h=-u*u+f*(f+2*o)+l;else f=-r,u=Math.max(0,-(a*f+s)),h=-u*u+f*(f+2*o)+l;else if(f<=-g)u=Math.max(0,-(-a*r+s)),f=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+l;else if(f<=g)u=0,f=Math.min(Math.max(-r,-o),r),h=f*(f+2*o)+l;else u=Math.max(0,-(a*r+s)),f=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+l;else f=a>0?-r:r,u=Math.max(0,-(a*f+s)),h=-u*u+f*(f+2*o)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,u);if(n)n.copy(oa).addScaledVector(er,f);return h}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),n=ci.dot(ci)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),s=i-a,o=i+a;if(o<0)return null;if(s<0)return this.at(o,t);return this.at(s,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,a,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l;if(c>=0)r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c;else r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c;if(i>a||r>n)return null;if(r>i||isNaN(i))i=r;if(a<n||isNaN(n))n=a;if(u>=0)s=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u;else s=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u;if(i>o||s>n)return null;if(s>i||i!==i)i=s;if(o<n||n!==n)n=o;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,n,r){la.subVectors(t,e),tr.subVectors(i,e),ca.crossVectors(la,tr);let a=this.direction.dot(ca),s;if(a>0){if(n)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Si.subVectors(this.origin,e);let o=s*this.direction.dot(tr.crossVectors(Si,tr));if(o<0)return null;let l=s*this.direction.dot(la.cross(Si));if(l<0)return null;if(o+l>a)return null;let c=-s*Si.dot(ca);if(c<0)return null;return this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends yn{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var mo=new ut,ki=new fs,ir=new Un,go=new U,nr=new U,rr=new U,ar=new U,ha=new U,sr=new U,yo=new U,or=new U;class kt extends It{constructor(e=new Vt,t=new bn){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let s=this.morphTargetInfluences;if(r&&s){sr.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let c=s[o],u=r[o];if(c===0)continue;if(ha.fromBufferAttribute(u,e),a)sr.addScaledVector(ha,c);else sr.addScaledVector(ha.sub(t),c)}t.add(sr)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(ir.copy(i.boundingSphere),ir.applyMatrix4(r),ki.copy(e.ray).recast(e.near),ir.containsPoint(ki.origin)===!1){if(ki.intersectSphere(ir,go)===null)return;if(ki.origin.distanceToSquared(go)>(e.far-e.near)**2)return}if(mo.copy(r).invert(),ki.copy(e.ray).applyMatrix4(mo),i.boundingBox!==null){if(ki.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,ki)}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,s=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,{groups:f,drawRange:h}=r;if(s!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let w=f[g],d=a[w.materialIndex],p=Math.max(w.start,h.start),x=Math.min(s.count,Math.min(w.start+w.count,h.start+h.count));for(let A=p,M=x;A<M;A+=3){let P=s.getX(A),C=s.getX(A+1),I=s.getX(A+2);if(n=lr(this,d,e,i,l,c,u,P,C,I),n)n.faceIndex=Math.floor(A/3),n.face.materialIndex=w.materialIndex,t.push(n)}}else{let g=Math.max(0,h.start),v=Math.min(s.count,h.start+h.count);for(let w=g,d=v;w<d;w+=3){let p=s.getX(w),x=s.getX(w+1),A=s.getX(w+2);if(n=lr(this,a,e,i,l,c,u,p,x,A),n)n.faceIndex=Math.floor(w/3),t.push(n)}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let w=f[g],d=a[w.materialIndex],p=Math.max(w.start,h.start),x=Math.min(o.count,Math.min(w.start+w.count,h.start+h.count));for(let A=p,M=x;A<M;A+=3){let P=A,C=A+1,I=A+2;if(n=lr(this,d,e,i,l,c,u,P,C,I),n)n.faceIndex=Math.floor(A/3),n.face.materialIndex=w.materialIndex,t.push(n)}}else{let g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let w=g,d=v;w<d;w+=3){let p=w,x=w+1,A=w+2;if(n=lr(this,a,e,i,l,c,u,p,x,A),n)n.faceIndex=Math.floor(w/3),t.push(n)}}}}function Bc(e,t,i,n,r,a,s,o){let l;if(t.side===1)l=n.intersectTriangle(s,a,r,!0,o);else l=n.intersectTriangle(r,a,s,t.side===0,o);if(l===null)return null;or.copy(o),or.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(or);if(c<i.near||c>i.far)return null;return{distance:c,point:or.clone(),object:e}}function lr(e,t,i,n,r,a,s,o,l,c){e.getVertexPosition(o,nr),e.getVertexPosition(l,rr),e.getVertexPosition(c,ar);let u=Bc(e,t,i,n,nr,rr,ar,yo);if(u){let f=new U;if(zt.getBarycoord(yo,nr,rr,ar,f),r)u.uv=zt.getInterpolatedAttribute(r,o,l,c,f,new Ze);if(a)u.uv1=zt.getInterpolatedAttribute(a,o,l,c,f,new Ze);if(s){if(u.normal=zt.getInterpolatedAttribute(s,o,l,c,f,new U),u.normal.dot(n.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new U,materialIndex:0};zt.getNormal(nr,rr,ar,h.normal),u.face=h,u.barycoord=f}return u}class ms extends Tt{constructor(e=null,t=1,i=1,n,r,a,s,o,l=1003,c=1003,u,f){super(null,a,s,o,l,c,n,r,u,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var da=new U,Oc=new U,zc=new De;class hi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=da.subVectors(i,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(da),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let a=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(a<0||a>1))return null;return t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zc.getNormalMatrix(e),n=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Li=new Un,Hc=new Ze(0.5,0.5),cr=new U;class Dr{constructor(e=new hi,t=new hi,i=new hi,n=new hi,r=new hi,a=new hi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(r),s[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2000,i=!1){let n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],g=r[8],v=r[9],w=r[10],d=r[11],p=r[12],x=r[13],A=r[14],M=r[15];if(n[0].setComponents(l-a,h-c,d-g,M-p).normalize(),n[1].setComponents(l+a,h+c,d+g,M+p).normalize(),n[2].setComponents(l+s,h+u,d+v,M+x).normalize(),n[3].setComponents(l-s,h-u,d-v,M-x).normalize(),i)n[4].setComponents(o,f,w,A).normalize(),n[5].setComponents(l-o,h-f,d-w,M-A).normalize();else if(n[4].setComponents(l-o,h-f,d-w,M-A).normalize(),t===2000)n[5].setComponents(l+o,h+f,d+w,M+A).normalize();else if(t===2001)n[5].setComponents(o,f,w,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Hc.distanceTo(e.center);return Li.radius=0.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(cr.x=n.normal.x>0?e.max.x:e.min.x,cr.y=n.normal.y>0?e.max.y:e.min.y,cr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kr extends Tt{constructor(e=[],t=301,i,n,r,a,s,o,l,c){super(e,t,i,n,r,a,s,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ci extends Tt{constructor(e,t,i=1014,n,r,a,s=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,n,r,a,s,o,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}class gs extends Ci{constructor(e,t=1014,i=301,n,r,a=1003,s=1003,o,l=1026){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,n,r,a,s,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lr extends Tt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends Vt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let s=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let o=[],l=[],c=[],u=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2));function g(v,w,d,p,x,A,M,P,C,I,b){let S=A/C,X=M/I,E=A/2,G=M/2,j=P/2,N=C+1,W=I+1,O=0,H=0,Z=new U;for(let ne=0;ne<W;ne++){let me=ne*X-G;for(let Ae=0;Ae<N;Ae++){let _e=Ae*S-E;Z[v]=_e*p,Z[w]=me*x,Z[d]=j,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[w]=0,Z[d]=P>0?1:-1,c.push(Z.x,Z.y,Z.z),u.push(Ae/C),u.push(1-ne/I),O+=1}}for(let ne=0;ne<I;ne++)for(let me=0;me<C;me++){let Ae=f+me+N*ne,_e=f+me+N*(ne+1),je=f+(me+1)+N*(ne+1),He=f+(me+1)+N*ne;o.push(Ae,_e,He),o.push(_e,je,He),H+=6}s.addGroup(h,H,b),h+=H,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bn extends Vt{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,s=Math.floor(i),o=Math.floor(n),l=s+1,c=o+1,u=e/s,f=t/o,h=[],g=[],v=[],w=[];for(let d=0;d<c;d++){let p=d*f-a;for(let x=0;x<l;x++){let A=x*u-r;g.push(A,-p,0),v.push(0,0,1),w.push(x/s),w.push(1-d/o)}}for(let d=0;d<o;d++)for(let p=0;p<s;p++){let x=p+l*d,A=p+l*(d+1),M=p+1+l*(d+1),P=p+1+l*d;h.push(x,A,P),h.push(A,M,P)}this.setIndex(h),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class On extends Vt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,s=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(a+s,Math.PI),l=0,c=[],u=new U,f=new U,h=[],g=[],v=[],w=[];for(let d=0;d<=i;d++){let p=[],x=d/i,A=0;if(d===0&&a===0)A=0.5/t;else if(d===i&&o===Math.PI)A=-0.5/t;for(let M=0;M<=t;M++){let P=M/t;u.x=-e*Math.cos(n+P*r)*Math.sin(a+x*s),u.y=e*Math.cos(a+x*s),u.z=e*Math.sin(n+P*r)*Math.sin(a+x*s),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),w.push(P+A,1-x),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let x=c[d][p+1],A=c[d][p],M=c[d+1][p],P=c[d+1][p+1];if(d!==0||a>0)h.push(x,A,P);if(d!==i-1||o<Math.PI)h.push(A,M,P)}this.setIndex(h),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Vt{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,a=0,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:s},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],u=[],f=new U,h=new U,g=new U;for(let v=0;v<=i;v++){let w=a+v/i*s;for(let d=0;d<=n;d++){let p=d/n*r;h.x=(e+t*Math.cos(w))*Math.cos(p),h.y=(e+t*Math.cos(w))*Math.sin(p),h.z=t*Math.sin(w),l.push(h.x,h.y,h.z),f.x=e*Math.cos(p),f.y=e*Math.sin(p),g.subVectors(h,f).normalize(),c.push(g.x,g.y,g.z),u.push(d/n),u.push(v/i)}}for(let v=1;v<=i;v++)for(let w=1;w<=n;w++){let d=(n+1)*v+w-1,p=(n+1)*(v-1)+w-1,x=(n+1)*(v-1)+w,A=(n+1)*v+w;o.push(d,p,A),o.push(p,x,A)}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Gi(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(bo(r))if(r.isRenderTargetTexture)Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(bo(r[0])){let a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();t[i][n]=a}else t[i][n]=r.slice();else t[i][n]=r}}return t}function At(e){let t={};for(let i=0;i<e.length;i++){let n=Gi(e[i]);for(let r in n)t[r]=n[r]}return t}function bo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Gc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ys(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Ve.workingColorSpace}var Ml={clone:Gi,merge:At},Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends yn{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Gc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;if(a&&a.isTexture)t.uniforms[n]={type:"t",value:a.toJSON(e).uuid};else if(a&&a.isColor)t.uniforms[n]={type:"c",value:a.getHex()};else if(a&&a.isVector2)t.uniforms[n]={type:"v2",value:a.toArray()};else if(a&&a.isVector3)t.uniforms[n]={type:"v3",value:a.toArray()};else if(a&&a.isVector4)t.uniforms[n]={type:"v4",value:a.toArray()};else if(a&&a.isMatrix3)t.uniforms[n]={type:"m3",value:a.toArray()};else if(a&&a.isMatrix4)t.uniforms[n]={type:"m4",value:a.toArray()};else t.uniforms[n]={value:a}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}}class bs extends Lt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends yn{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _s extends yn{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}class Vi{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let s=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let s=t[1];if(e<s)i=2,r=s;for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}while(i<a){let s=i+a>>>1;if(e<t[s])a=s;else i=s+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class xs extends Vi{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,s=n[r],o=n[a];if(s===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,s=2*t-i;break;case 2402:r=n.length-2,s=t+n[r]-n[r+1];break;default:r=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,o=2*i-t;break;case 2402:a=1,o=i+n[1]-n[0];break;default:a=e-1,o=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(n-t),v=g*g,w=v*g,d=-f*w+2*f*v-f*g,p=(1+f)*w+(-1.5-2*f)*v+(-0.5+f)*g+1,x=(-1-h)*w+(1.5+h)*v+0.5*g,A=h*w-h*v;for(let M=0;M!==s;++M)r[M]=d*a[c+M]+p*a[l+M]+x*a[o+M]+A*a[u+M];return r}}class ws extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(n-t),u=1-c;for(let f=0;f!==s;++f)r[f]=a[l+f]*u+a[o+f]*c;return r}}class Ss extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ms extends Vi{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.settings||this.DefaultSettings_,{inTangents:u,outTangents:f}=c;if(!u||!f){let v=(i-t)/(n-t),w=1-v;for(let d=0;d!==s;++d)r[d]=a[l+d]*w+a[o+d]*v;return r}let h=s*2,g=e-1;for(let v=0;v!==s;++v){let w=a[l+v],d=a[o+v],p=g*h+v*2,x=f[p],A=f[p+1],M=e*h+v*2,P=u[M],C=u[M+1],I=(i-t)/(n-t),b,S,X,E,G;for(let j=0;j<8;j++){b=I*I,S=b*I,X=1-I,E=X*X,G=E*X;let W=G*t+3*E*I*x+3*X*b*P+S*n-i;if(Math.abs(W)<0.0000000001)break;let O=3*E*(x-t)+6*X*I*(P-x)+3*b*(n-P);if(Math.abs(O)<0.0000000001)break;I=I-W/O,I=Math.max(0,Math.min(1,I))}r[v]=G*w+3*E*I*A+3*X*b*C+S*d}return r}}class Wt{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ms(this.times,this.values,this.getValueSize(),e);if(this.settings)t.settings=this.settings;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;while(r!==n&&i[r]<e)++r;while(a!==-1&&i[a]>t)--a;if(++a,r!==0||a!==n){if(r>=a)a=Math.max(a,1),r=a-1;let s=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Ie("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Ie("KeyframeTrack: Track is empty.",this),e=!1;let a=null;for(let s=0;s!==r;s++){let o=i[s];if(typeof o==="number"&&isNaN(o)){Ie("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){Ie("KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(n!==void 0){if(wc(n))for(let s=0,o=n.length;s!==o;++s){let l=n[s];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===2302,r=e.length-1,a=1;for(let s=1;s<r;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(!n){let u=s*i,f=u-i,h=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[h+g]){o=!0;break}}}else o=!0;if(o){if(s!==a){e[a]=e[s];let u=s*i,f=a*i;for(let h=0;h!==i;++h)t[f+h]=t[u+h]}++a}}if(r>0){e[a]=e[r];for(let s=r*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[s+l];++a}if(a!==e.length)this.times=e.slice(0,a),this.values=t.slice(0,a*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=2301;class Wi extends Wt{constructor(e,t,i){super(e,t,i)}}Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=2300;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Wt{constructor(e,t,i,n){super(e,t,i,n)}}Ts.prototype.ValueTypeName="color";class As extends Wt{constructor(e,t,i,n){super(e,t,i,n)}}As.prototype.ValueTypeName="number";class Es extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(i-t)/(n-t),l=e*s;for(let c=l+s;l!==c;l+=4)mi.slerpFlat(r,0,a,l-s,a,l,o);return r}}class Nr extends Wt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Es(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends Wt{constructor(e,t,i){super(e,t,i)}}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=2300;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Wt{constructor(e,t,i,n){super(e,t,i,n)}}Cs.prototype.ValueTypeName="vector";class Rs{constructor(e,t,i){let n=this,r=!1,a=0,s=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(s++,r===!1){if(n.onStart!==void 0)n.onStart(c,a,s)}r=!0},this.itemEnd=function(c){if(a++,n.onProgress!==void 0)n.onProgress(c,a,s);if(a===s){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],g=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Tl=new Rs;class Is{constructor(e){if(this.manager=e!==void 0?e:Tl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=new U,ur=new mi,Qt=new U;class Fr extends It{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(dr,ur,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(dr,ur,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){if(super.updateWorldMatrix(e,t),this.matrixWorld.decompose(dr,ur,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(dr,ur,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Mi=new U,vo=new Ze,_o=new Ze;class Ct extends Fr{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vr*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Vr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,vo,_o),t.subVectors(_o,vo)}setViewOffset(e,t,i,n,r,a){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vr*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=a;r+=a.offsetX*n/o,t-=a.offsetY*i/l,n*=a.width/o,i*=a.height/l}let s=this.filmOffset;if(s!==0)r+=e*s/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ur extends Fr{constructor(e=-1,t=1,i=1,n=-1,r=0.1,a=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,s=n+t,o=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var sn=-90,on=1;class Ps extends It{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ct(sn,on,e,t);n.layers=this.layers,this.add(n);let r=new Ct(sn,on,e,t);r.layers=this.layers,this.add(r);let a=new Ct(sn,on,e,t);a.layers=this.layers,this.add(a);let s=new Ct(sn,on,e,t);s.layers=this.layers,this.add(s);let o=new Ct(sn,on,e,t);o.layers=this.layers,this.add(o);let l=new Ct(sn,on,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,s,o]=t;for(let l of t)this.remove(l);if(e===2000)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,a,s,o,l,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let w=!1;if(e.isWebGLRenderer===!0)w=e.state.buffers.depth.getReversed();else w=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),w&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),w&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,2,n),w&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,3,n),w&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,4,n),w&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),w&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ds extends Ct{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}var ks="\\[\\]\\.:\\/",Xc=new RegExp("["+ks+"]","g"),Ls="[^"+ks+"]",Yc="[^"+ks.replace("\\.","")+"]",qc=/((?:WC+[\/:])*)/.source.replace("WC",Ls),Jc=/(WCOD+)?/.source.replace("WCOD",Yc),$c=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ls),jc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ls),Kc=new RegExp("^"+qc+Jc+$c+jc+"$"),Zc=["material","materials","bones","map"];class Al{constructor(e,t,i){let n=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Ke(e,t,i);else return new Ke.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xc,"")}static parseTrackName(e){let t=Kc.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(Zc.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let s=r[a];if(s.name===t||s.uuid===t)return s;let o=i(s.children);if(o)return o}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=Ke.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let s=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)s=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)s=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else if(a.fromArray!==void 0&&a.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=a;else if(Array.isArray(a))o=this.BindingType.EntireArray,this.resolvedProperty=a;else this.propertyName=n;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=Al;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qf=new Float32Array(1);class Ns{static{Ns.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function Fs(e,t,i,n){let r=Qc(n);switch(i){case 1021:return e*t;case 1028:return e*t/r.components*r.byteLength;case 1029:return e*t/r.components*r.byteLength;case 1030:return e*t*2/r.components*r.byteLength;case 1031:return e*t*2/r.components*r.byteLength;case 1022:return e*t*3/r.components*r.byteLength;case 1023:return e*t*4/r.components*r.byteLength;case 1033:return e*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Qc(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)Re("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function $l(){let e=null,t=!1,i=null,n=null;function r(a,s){i(a,s),n=e.requestAnimationFrame(r)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function eh(e){let t=new WeakMap;function i(o,l){let{array:c,usage:u}=o,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)g=e.HALF_FLOAT;else g=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=e.SHORT;else if(c instanceof Uint32Array)g=e.UNSIGNED_INT;else if(c instanceof Int32Array)g=e.INT;else if(c instanceof Int8Array)g=e.BYTE;else if(c instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let{array:u,updateRanges:f}=l;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<f.length;g++){let v=f[h],w=f[g];if(w.start<=v.start+v.count+1)v.count=Math.max(v.count,w.start+w.count-v.start);else++h,f[h]=w}f.length=h+1;for(let g=0,v=f.length;g<v;g++){let w=f[g];e.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function a(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function s(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=t.get(o);if(!u||u.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;var hu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Su=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Au=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:th,alphahash_pars_fragment:ih,alphamap_fragment:nh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:sh,aomap_fragment:oh,aomap_pars_fragment:lh,batching_pars_vertex:ch,batching_vertex:hh,begin_vertex:dh,beginnormal_vertex:uh,bsdfs:ph,iridescence_fragment:fh,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:vh,color_fragment:_h,color_pars_fragment:xh,color_pars_vertex:wh,color_vertex:Sh,common:Mh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Eh,displacementmap_vertex:Ch,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ih,colorspace_fragment:Ph,colorspace_pars_fragment:Dh,envmap_fragment:kh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:qh,envmap_vertex:Uh,fog_vertex:Bh,fog_pars_vertex:Oh,fog_fragment:zh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Wh,lights_lambert_pars_fragment:Xh,lights_pars_begin:Yh,lights_toon_fragment:Jh,lights_toon_pars_fragment:$h,lights_phong_fragment:jh,lights_phong_pars_fragment:Kh,lights_physical_fragment:Zh,lights_physical_pars_fragment:Qh,lights_fragment_begin:ed,lights_fragment_maps:td,lights_fragment_end:id,lightprobes_pars_fragment:nd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:hd,map_particle_pars_fragment:dd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:pd,morphinstance_vertex:fd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:yd,morphtarget_vertex:bd,normal_fragment_begin:vd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:wd,normal_vertex:Sd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Id,premultiplied_alpha_fragment:Pd,project_vertex:Dd,dithering_fragment:kd,dithering_pars_fragment:Ld,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Bd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:Yd,tonemapping_fragment:qd,tonemapping_pars_fragment:Jd,transmission_fragment:$d,transmission_pars_fragment:jd,uv_pars_fragment:Kd,uv_pars_vertex:Zd,uv_vertex:Qd,worldpos_vertex:eu,background_vert:tu,background_frag:iu,backgroundCube_vert:nu,backgroundCube_frag:ru,cube_vert:au,cube_frag:su,depth_vert:ou,depth_frag:lu,distance_vert:cu,distance_frag:hu,equirect_vert:du,equirect_frag:uu,linedashed_vert:pu,linedashed_frag:fu,meshbasic_vert:mu,meshbasic_frag:gu,meshlambert_vert:yu,meshlambert_frag:bu,meshmatcap_vert:vu,meshmatcap_frag:_u,meshnormal_vert:xu,meshnormal_frag:wu,meshphong_vert:Su,meshphong_frag:Mu,meshphysical_vert:Tu,meshphysical_frag:Au,meshtoon_vert:Eu,meshtoon_frag:Cu,points_vert:Ru,points_frag:Iu,shadow_vert:Pu,shadow_frag:Du,sprite_vert:ku,sprite_frag:Lu},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ri={basic:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:At([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:At([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ri.physical={uniforms:At([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Br={r:0,b:0,g:0},Nu=new ut,jl=new De;jl.set(-1,0,0,0,1,0,0,0,1);function Fu(e,t,i,n,r,a){let s=new $e(0),o=r===!0?0:1,l,c,u=null,f=0,h=null;function g(x){let A=x.isScene===!0?x.background:null;if(A&&A.isTexture){let M=x.backgroundBlurriness>0;A=t.get(A,M)}return A}function v(x){let A=!1,M=g(x);if(M===null)d(s,o);else if(M&&M.isColor)d(M,1),A=!0;let P=e.xr.getEnvironmentBlendMode();if(P==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(P==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||A)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function w(x,A){let M=g(A);if(M&&(M.isCubeTexture||M.mapping===Pn)){if(c===void 0)c=new kt(new vn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Gi(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(jl);if(c.material.toneMapped=Ve.getTransfer(M.colorSpace)!==at,u!==M||f!==M.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping;c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new kt(new Bn(2,2),new Lt({name:"BackgroundMaterial",uniforms:Gi(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),u!==M||f!==M.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping;l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)}}function d(x,A){x.getRGB(Br,ys(e)),i.buffers.color.setClear(Br.r,Br.g,Br.b,A,a)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return s},setClearColor:function(x,A=1){s.set(x),o=A,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,d(s,o)},render:v,addToRenderList:w,dispose:p}}function Uu(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=h(null),a=r,s=!1;function o(E,G,j,N,W){let O=!1,H=f(E,N,j,G);if(a!==H)a=H,c(a.object);if(O=g(E,N,j,W),O)v(E,N,j,W);if(W!==null)t.update(W,e.ELEMENT_ARRAY_BUFFER);if(O||s){if(s=!1,M(E,G,j,N),W!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer)}}function l(){return e.createVertexArray()}function c(E){return e.bindVertexArray(E)}function u(E){return e.deleteVertexArray(E)}function f(E,G,j,N){let W=N.wireframe===!0,O=n[G.id];if(O===void 0)O={},n[G.id]=O;let H=E.isInstancedMesh===!0?E.id:0,Z=O[H];if(Z===void 0)Z={},O[H]=Z;let ne=Z[j.id];if(ne===void 0)ne={},Z[j.id]=ne;let me=ne[W];if(me===void 0)me=h(l()),ne[W]=me;return me}function h(E){let G=[],j=[],N=[];for(let W=0;W<i;W++)G[W]=0,j[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:N,object:E,attributes:{},index:null}}function g(E,G,j,N){let W=a.attributes,O=G.attributes,H=0,Z=j.getAttributes();for(let ne in Z)if(Z[ne].location>=0){let Ae=W[ne],_e=O[ne];if(_e===void 0){if(ne==="instanceMatrix"&&E.instanceMatrix)_e=E.instanceMatrix;if(ne==="instanceColor"&&E.instanceColor)_e=E.instanceColor}if(Ae===void 0)return!0;if(Ae.attribute!==_e)return!0;if(_e&&Ae.data!==_e.data)return!0;H++}if(a.attributesNum!==H)return!0;if(a.index!==N)return!0;return!1}function v(E,G,j,N){let W={},O=G.attributes,H=0,Z=j.getAttributes();for(let ne in Z)if(Z[ne].location>=0){let Ae=O[ne];if(Ae===void 0){if(ne==="instanceMatrix"&&E.instanceMatrix)Ae=E.instanceMatrix;if(ne==="instanceColor"&&E.instanceColor)Ae=E.instanceColor}let _e={};if(_e.attribute=Ae,Ae&&Ae.data)_e.data=Ae.data;W[ne]=_e,H++}a.attributes=W,a.attributesNum=H,a.index=N}function w(){let E=a.newAttributes;for(let G=0,j=E.length;G<j;G++)E[G]=0}function d(E){p(E,0)}function p(E,G){let j=a.newAttributes,N=a.enabledAttributes,W=a.attributeDivisors;if(j[E]=1,N[E]===0)e.enableVertexAttribArray(E),N[E]=1;if(W[E]!==G)e.vertexAttribDivisor(E,G),W[E]=G}function x(){let E=a.newAttributes,G=a.enabledAttributes;for(let j=0,N=G.length;j<N;j++)if(G[j]!==E[j])e.disableVertexAttribArray(j),G[j]=0}function A(E,G,j,N,W,O,H){if(H===!0)e.vertexAttribIPointer(E,G,j,W,O);else e.vertexAttribPointer(E,G,j,N,W,O)}function M(E,G,j,N){w();let W=N.attributes,O=j.getAttributes(),H=G.defaultAttributeValues;for(let Z in O){let ne=O[Z];if(ne.location>=0){let me=W[Z];if(me===void 0){if(Z==="instanceMatrix"&&E.instanceMatrix)me=E.instanceMatrix;if(Z==="instanceColor"&&E.instanceColor)me=E.instanceColor}if(me!==void 0){let Ae=me.normalized,_e=me.itemSize,je=t.get(me);if(je===void 0)continue;let{buffer:He,type:q,bytesPerElement:pe}=je,we=q===e.INT||q===e.UNSIGNED_INT||me.gpuType===Sa;if(me.isInterleavedBufferAttribute){let fe=me.data,Ee=fe.stride,Je=me.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<ne.locationSize;Be++)p(ne.location+Be,fe.meshPerAttribute);if(E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0)N._maxInstanceCount=fe.meshPerAttribute*fe.count}else for(let Be=0;Be<ne.locationSize;Be++)d(ne.location+Be);e.bindBuffer(e.ARRAY_BUFFER,He);for(let Be=0;Be<ne.locationSize;Be++)A(ne.location+Be,_e/ne.locationSize,q,Ae,Ee*pe,(Je+_e/ne.locationSize*Be)*pe,we)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<ne.locationSize;fe++)p(ne.location+fe,me.meshPerAttribute);if(E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0)N._maxInstanceCount=me.meshPerAttribute*me.count}else for(let fe=0;fe<ne.locationSize;fe++)d(ne.location+fe);e.bindBuffer(e.ARRAY_BUFFER,He);for(let fe=0;fe<ne.locationSize;fe++)A(ne.location+fe,_e/ne.locationSize,q,Ae,_e*pe,_e/ne.locationSize*fe*pe,we)}}else if(H!==void 0){let Ae=H[Z];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(ne.location,Ae);break;case 3:e.vertexAttrib3fv(ne.location,Ae);break;case 4:e.vertexAttrib4fv(ne.location,Ae);break;default:e.vertexAttrib1fv(ne.location,Ae)}}}}x()}function P(){S();for(let E in n){let G=n[E];for(let j in G){let N=G[j];for(let W in N){let O=N[W];for(let H in O)u(O[H].object),delete O[H];delete N[W]}}delete n[E]}}function C(E){if(n[E.id]===void 0)return;let G=n[E.id];for(let j in G){let N=G[j];for(let W in N){let O=N[W];for(let H in O)u(O[H].object),delete O[H];delete N[W]}}delete n[E.id]}function I(E){for(let G in n){let j=n[G];for(let N in j){let W=j[N];if(W[E.id]===void 0)continue;let O=W[E.id];for(let H in O)u(O[H].object),delete O[H];delete W[E.id]}}}function b(E){for(let G in n){let j=n[G],N=E.isInstancedMesh===!0?E.id:0,W=j[N];if(W===void 0)continue;for(let O in W){let H=W[O];for(let Z in H)u(H[Z].object),delete H[Z];delete W[O]}if(delete j[N],Object.keys(j).length===0)delete n[G]}}function S(){if(X(),s=!0,a===r)return;a=r,c(a.object)}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:d,disableUnusedAttributes:x}}function Bu(e,t,i){let n;function r(l){n=l}function a(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function s(l,c,u){if(u===0)return;e.drawArraysInstanced(n,l,c,u),i.update(c,n,u)}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let g=0;g<u;g++)h+=c[g];i.update(h,n,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Ou(e,t,i,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){if(I!==ii&&n.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(I){let b=I===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(I!==jt&&n.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ui&&!b)return!1;return!0}function l(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);if(u!==c)Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(i.reversedDepthBuffer===!0&&h===!1)Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:M,maxSamples:P,samples:C}}function zu(e){let t=this,i=null,n=0,r=!1,a=!1,s=new hi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let g=f.length!==0||h||n!==0||r;return r=h,n=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){i=u(f,h,0)},this.setState=function(f,h,g){let{clippingPlanes:v,clipIntersection:w,clipShadows:d}=f,p=e.get(f);if(!r||v===null||v.length===0||a&&!d)if(a)u(null);else c();else{let x=a?0:n,A=x*4,M=p.clippingState||null;l.value=M,M=u(v,h,A,g);for(let P=0;P!==A;++P)M[P]=i[P];p.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=x}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function u(f,h,g,v){let w=f!==null?f.length:0,d=null;if(w!==0){if(d=l.value,v!==!0||d===null){let p=g+w*4,x=h.matrixWorldInverse;if(o.getNormalMatrix(x),d===null||d.length<p)d=new Float32Array(p);for(let A=0,M=g;A!==w;++A,M+=4)s.copy(f[A]).applyMatrix4(x,o),s.normal.toArray(d,M),d[M+3]=s.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,d}}var Ri=4,El=[0.125,0.215,0.35,0.446,0.526,0.582],Yi=20,Hu=256,Hn=new Ur,Cl=new $e,Us=null,Bs=0,Os=0,zs=!1,Gu=new U;class Vs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:a=256,position:s=Gu}=r;Us=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,s),t>0)this._blur(o,0,0,t);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Bs,Os),this._renderer.xr.enabled=zs,e.scissorTest=!1,_n(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===mn||e.mapping===Ni)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);Us=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:pi,format:ii,colorSpace:ss,depthBuffer:!1},n=Rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Rl(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vu(r)),this._blurMaterial=Xu(r,e,t),this._ggxMaterial=Wu(r,e,t)}return n}_compileMaterial(e){let t=new kt(new Vt,e);this._renderer.compile(t,Hn)}_sceneToCubeUV(e,t,i,n,r){let o=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:f,toneMapping:h}=u;if(u.getClearColor(Cl),u.toneMapping=$t,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new kt(new vn,new bn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}));let v=this._backgroundBox,w=v.material,d=!1,p=e.background;if(p){if(p.isColor)w.color.copy(p),e.background=null,d=!0}else w.color.copy(Cl),d=!0;for(let x=0;x<6;x++){let A=x%3;if(A===0)o.up.set(0,l[x],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[x],r.y,r.z);else if(A===1)o.up.set(0,0,l[x]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[x],r.z);else o.up.set(0,l[x],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[x]);let M=this._cubeSize;if(_n(n,A*M,x>2?M:0,M,M),u.setRenderTarget(n),d)u.render(v,o);u.render(e,o)}u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===mn||e.mapping===Ni;if(n){if(this._cubemapMaterial===null)this._cubemapMaterial=Pl();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Il();let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let s=r.uniforms;s.envMap.value=e;let o=this._cubeSize;_n(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Hn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;let o=a.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),f=0+l*1.25,h=u*f,{_lodMax:g}=this,v=this._sizeLods[i],w=3*v*(i>g-Ri?i-g+Ri:0),d=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=g-t,_n(r,w,d,3*v,2*v),n.setRenderTarget(r),n.render(s,Hn),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-i,_n(e,w,d,3*v,2*v),n.setRenderTarget(e),n.render(s,Hn)}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,s){let o=this._renderer,l=this._blurMaterial;if(a!=="latitudinal"&&a!=="longitudinal")Ie("blur direction must be either latitudinal or longitudinal!");let c=3,u=this._lodMeshes[n];u.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Yi-1),v=r/g,w=isFinite(r)?1+Math.floor(c*v):Yi;if(w>Yi)Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${Yi}`);let d=[],p=0;for(let C=0;C<Yi;++C){let I=C/v,b=Math.exp(-I*I/2);if(d.push(b),C===0)p+=b;else if(C<w)p+=2*b}for(let C=0;C<d.length;C++)d[C]=d[C]/p;if(f.envMap.value=e.texture,f.samples.value=w,f.weights.value=d,f.latitudinal.value=a==="latitudinal",s)f.poleAxis.value=s;let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let A=this._sizeLods[n],M=3*A*(n>x-Ri?n-x+Ri:0),P=4*(this._cubeSize-A);_n(t,M,P,3*A,2*A),o.setRenderTarget(t),o.render(u,Hn)}}function Vu(e){let t=[],i=[],n=[],r=e,a=e-Ri+1+El.length;for(let s=0;s<a;s++){let o=Math.pow(2,r);t.push(o);let l=1/o;if(s>e-Ri)l=El[s-e+Ri-1];else if(s===0)l=0;i.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,w=3,d=2,p=1,x=new Float32Array(w*v*g),A=new Float32Array(d*v*g),M=new Float32Array(p*v*g);for(let C=0;C<g;C++){let I=C%3*2/3-1,b=C>2?0:-1,S=[I,b,0,I+0.6666666666666666,b,0,I+0.6666666666666666,b+1,0,I,b,0,I+0.6666666666666666,b+1,0,I,b+1,0];x.set(S,w*v*C),A.set(h,d*v*C);let X=[C,C,C,C,C,C];M.set(X,p*v*C)}let P=new Vt;if(P.setAttribute("position",new Ht(x,w)),P.setAttribute("uv",new Ht(A,d)),P.setAttribute("faceIndex",new Ht(M,p)),n.push(new kt(P,null)),r>Ri)r--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function Rl(e,t,i){let n=new Gt(e,t,i);return n.texture.mapping=Pn,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _n(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function Wu(e,t,i){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xu(e,t,i){let n=new Float32Array(Yi),r=new U(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Il(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Pl(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ys extends Gt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new kr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new vn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:ti});r.uniforms.tEquirect.value=t;let a=new kt(n,r),s=t.minFilter;if(t.minFilter===Fi)t.minFilter=Dt;return new Ps(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}function Yu(e){let t=new WeakMap,i=new WeakMap,n=null;function r(h,g=!1){if(h===null||h===void 0)return null;if(g)return s(h);return a(h)}function a(h){if(h&&h.isTexture){let g=h.mapping;if(g===mr||g===gr)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let w=new Ys(v.height);return w.fromEquirectangularTexture(e,h),t.set(h,w),h.addEventListener("dispose",c),o(w.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let g=h.mapping,v=g===mr||g===gr,w=g===mn||g===Ni;if(v||w){let d=i.get(h),p=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p){if(n===null)n=new Vs(e);return d=v?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),d.texture}else if(d!==void 0)return d.texture;else{let x=h.image;if(v&&x&&x.height>0||w&&x&&l(x)){if(n===null)n=new Vs(e);return d=v?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),h.addEventListener("dispose",u),d.texture}else return null}}}return h}function o(h,g){if(g===mr)h.mapping=mn;else if(g===gr)h.mapping=Ni;return h}function l(h){let g=0,v=6;for(let w=0;w<v;w++)if(h[w]!==void 0)g++;return g===v}function c(h){let g=h.target;g.removeEventListener("dispose",c);let v=t.get(g);if(v!==void 0)t.delete(g),v.dispose()}function u(h){let g=h.target;g.removeEventListener("dispose",u);let v=i.get(g);if(v!==void 0)i.delete(g),v.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:f}}function qu(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)pr("WebGLRenderer: "+n+" extension not supported.");return r}}}function Ju(e,t,i,n){let r={},a=new WeakMap;function s(f){let h=f.target;if(h.index!==null)t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete r[h.id];let g=a.get(h);if(g)t.remove(g),a.delete(h);if(n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;i.memory.geometries--}function o(f,h){if(r[h.id]===!0)return h;return h.addEventListener("dispose",s),r[h.id]=!0,i.memory.geometries++,h}function l(f){let h=f.attributes;for(let g in h)t.update(h[g],e.ARRAY_BUFFER)}function c(f){let h=[],g=f.index,v=f.attributes.position,w=0;if(v===void 0)return;if(g!==null){let x=g.array;w=g.version;for(let A=0,M=x.length;A<M;A+=3){let P=x[A+0],C=x[A+1],I=x[A+2];h.push(P,C,C,I,I,P)}}else{let x=v.array;w=v.version;for(let A=0,M=x.length/3-1;A<M;A+=3){let P=A+0,C=A+1,I=A+2;h.push(P,C,C,I,I,P)}}let d=new(v.count>=65535?Pr:Ir)(h,1);d.version=w;let p=a.get(f);if(p)t.remove(p);a.set(f,d)}function u(f){let h=a.get(f);if(h){let g=f.index;if(g!==null){if(h.version<g.version)c(f)}}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function $u(e,t,i){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,h){e.drawElements(n,h,a,f*s),i.update(h,n,1)}function c(f,h,g){if(g===0)return;e.drawElementsInstanced(n,h,a,f*s,g),i.update(h,n,g)}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,f,0,g);let w=0;for(let d=0;d<g;d++)w+=h[d];i.update(w,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ju(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(a/3);break;case e.LINES:i.lines+=o*(a/2);break;case e.LINE_STRIP:i.lines+=o*(a-1);break;case e.LINE_LOOP:i.lines+=o*a;break;case e.POINTS:i.points+=o*a;break;default:Ie("WebGLInfo: Unknown draw mode:",s);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Ku(e,t,i){let n=new WeakMap,r=new ct;function a(s,o,l){let c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};if(h!==void 0)h.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],A=0;if(g===!0)A=1;if(v===!0)A=2;if(w===!0)A=3;let M=o.attributes.position.count*A,P=1;if(M>t.maxTextureSize)P=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let C=new Float32Array(M*P*4*f),I=new Er(C,M,P,f);I.type=ui,I.needsUpdate=!0;let b=A*4;for(let X=0;X<f;X++){let E=d[X],G=p[X],j=x[X],N=M*P*4*X;for(let W=0;W<E.count;W++){let O=W*b;if(g===!0)r.fromBufferAttribute(E,W),C[N+O+0]=r.x,C[N+O+1]=r.y,C[N+O+2]=r.z,C[N+O+3]=0;if(v===!0)r.fromBufferAttribute(G,W),C[N+O+4]=r.x,C[N+O+5]=r.y,C[N+O+6]=r.z,C[N+O+7]=0;if(w===!0)r.fromBufferAttribute(j,W),C[N+O+8]=r.x,C[N+O+9]=r.y,C[N+O+10]=r.z,C[N+O+11]=j.itemSize===4?r.w:1}}h={count:f,texture:I,size:new Ze(M,P)},n.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];let v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function Zu(e,t,i,n,r){let a=new WeakMap;function s(c){let u=r.render.frame,f=c.geometry,h=t.get(c,f);if(a.get(h)!==u)t.update(h),a.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(a.get(c)!==u){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);a.set(c,u)}}if(c.isSkinnedMesh){let g=c.skeleton;if(a.get(g)!==u)g.update(),a.set(g,u)}return h}function o(){a=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null)i.remove(u.instanceColor)}return{update:s,dispose:o}}var Qu={[ga]:"LINEAR_TONE_MAPPING",[ya]:"REINHARD_TONE_MAPPING",[ba]:"CINEON_TONE_MAPPING",[va]:"ACES_FILMIC_TONE_MAPPING",[xa]:"AGX_TONE_MAPPING",[wa]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function ep(e,t,i,n,r){let a=new Gt(t,i,{type:e,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Ci(t,i):void 0}),s=new Gt(t,i,{type:pi,depthBuffer:!1,stencilBuffer:!1}),o=new Vt;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));let l=new bs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new kt(o,l),u=new Ur(-1,1,1,-1,0,1),f=null,h=null,g=!1,v,w=null,d=[],p=!1;this.setSize=function(x,A){a.setSize(x,A),s.setSize(x,A);for(let M=0;M<d.length;M++){let P=d[M];if(P.setSize)P.setSize(x,A)}},this.setEffects=function(x){d=x,p=d.length>0&&d[0].isRenderPass===!0;let{width:A,height:M}=a;for(let P=0;P<d.length;P++){let C=d[P];if(C.setSize)C.setSize(A,M)}},this.begin=function(x,A){if(g)return!1;if(x.toneMapping===$t&&d.length===0)return!1;if(w=A,A!==null){let{width:M,height:P}=A;if(a.width!==M||a.height!==P)this.setSize(M,P)}if(p===!1)x.setRenderTarget(a);return v=x.toneMapping,x.toneMapping=$t,!0},this.hasRenderPass=function(){return p},this.end=function(x,A){x.toneMapping=v,g=!0;let M=a,P=s;for(let C=0;C<d.length;C++){let I=d[C];if(I.enabled===!1)continue;if(I.render(x,P,M,A),I.needsSwap!==!1){let b=M;M=P,P=b}}if(f!==x.outputColorSpace||h!==x.toneMapping){if(f=x.outputColorSpace,h=x.toneMapping,l.defines={},Ve.getTransfer(f)===at)l.defines.SRGB_TRANSFER="";let C=Qu[h];if(C)l.defines[C]="";l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(w),x.render(c,u),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){if(a.depthTexture)a.depthTexture.dispose();a.dispose(),s.dispose(),o.dispose(),l.dispose()}}var Kl=new Tt,Ws=new Ci(1,1),Zl=new Er,Ql=new ps,ec=new kr,Dl=[],kl=[],Ll=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function xn(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,a=Dl[r];if(a===void 0)a=new Float32Array(r),Dl[r]=a;if(t!==0){n.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(a,o)}return a}function gt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function yt(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Hr(e,t){let i=kl[t];if(i===void 0)i=new Int32Array(t),kl[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function tp(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function ip(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gt(i,t))return;e.uniform2fv(this.addr,t),yt(i,t)}}function np(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(gt(i,t))return;e.uniform3fv(this.addr,t),yt(i,t)}}function rp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gt(i,t))return;e.uniform4fv(this.addr,t),yt(i,t)}}function ap(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),yt(i,t)}else{if(gt(i,n))return;Fl.set(n),e.uniformMatrix2fv(this.addr,!1,Fl),yt(i,n)}}function sp(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),yt(i,t)}else{if(gt(i,n))return;Nl.set(n),e.uniformMatrix3fv(this.addr,!1,Nl),yt(i,n)}}function op(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),yt(i,t)}else{if(gt(i,n))return;Ll.set(n),e.uniformMatrix4fv(this.addr,!1,Ll),yt(i,n)}}function lp(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function cp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gt(i,t))return;e.uniform2iv(this.addr,t),yt(i,t)}}function hp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(gt(i,t))return;e.uniform3iv(this.addr,t),yt(i,t)}}function dp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gt(i,t))return;e.uniform4iv(this.addr,t),yt(i,t)}}function up(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function pp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gt(i,t))return;e.uniform2uiv(this.addr,t),yt(i,t)}}function fp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(gt(i,t))return;e.uniform3uiv(this.addr,t),yt(i,t)}}function mp(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gt(i,t))return;e.uniform4uiv(this.addr,t),yt(i,t)}}function gp(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let a;if(this.type===e.SAMPLER_2D_SHADOW)Ws.compareFunction=i.isReversedDepthBuffer()?Ar:Tr,a=Ws;else a=Kl;i.setTexture2D(t||a,r)}function yp(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||Ql,r)}function bp(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTextureCube(t||ec,r)}function vp(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||Zl,r)}function _p(e){switch(e){case 5126:return tp;case 35664:return ip;case 35665:return np;case 35666:return rp;case 35674:return ap;case 35675:return sp;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return up;case 36294:return pp;case 36295:return fp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return vp}}function xp(e,t){e.uniform1fv(this.addr,t)}function wp(e,t){let i=xn(t,this.size,2);e.uniform2fv(this.addr,i)}function Sp(e,t){let i=xn(t,this.size,3);e.uniform3fv(this.addr,i)}function Mp(e,t){let i=xn(t,this.size,4);e.uniform4fv(this.addr,i)}function Tp(e,t){let i=xn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Ap(e,t){let i=xn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Ep(e,t){let i=xn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Cp(e,t){e.uniform1iv(this.addr,t)}function Rp(e,t){e.uniform2iv(this.addr,t)}function Ip(e,t){e.uniform3iv(this.addr,t)}function Pp(e,t){e.uniform4iv(this.addr,t)}function Dp(e,t){e.uniform1uiv(this.addr,t)}function kp(e,t){e.uniform2uiv(this.addr,t)}function Lp(e,t){e.uniform3uiv(this.addr,t)}function Np(e,t){e.uniform4uiv(this.addr,t)}function Fp(e,t,i){let n=this.cache,r=t.length,a=Hr(i,r);if(!gt(n,a))e.uniform1iv(this.addr,a),yt(n,a);let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Ws;else s=Kl;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||s,a[o])}function Up(e,t,i){let n=this.cache,r=t.length,a=Hr(i,r);if(!gt(n,a))e.uniform1iv(this.addr,a),yt(n,a);for(let s=0;s!==r;++s)i.setTexture3D(t[s]||Ql,a[s])}function Bp(e,t,i){let n=this.cache,r=t.length,a=Hr(i,r);if(!gt(n,a))e.uniform1iv(this.addr,a),yt(n,a);for(let s=0;s!==r;++s)i.setTextureCube(t[s]||ec,a[s])}function Op(e,t,i){let n=this.cache,r=t.length,a=Hr(i,r);if(!gt(n,a))e.uniform1iv(this.addr,a),yt(n,a);for(let s=0;s!==r;++s)i.setTexture2DArray(t[s]||Zl,a[s])}function zp(e){switch(e){case 5126:return xp;case 35664:return wp;case 35665:return Sp;case 35666:return Mp;case 35674:return Tp;case 35675:return Ap;case 35676:return Ep;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Ip;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return kp;case 36295:return Lp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return Op}}class tc{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_p(t.type)}}class ic{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class nc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let s=n[r];s.setValue(e,t[s.id],i)}}}var Hs=/(\w+)(\])?(\[|\.)?/g;function Ul(e,t){e.seq.push(t),e.map[t.id]=t}function Hp(e,t,i){let n=e.name,r=n.length;Hs.lastIndex=0;while(!0){let a=Hs.exec(n),s=Hs.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l)o=o|0;if(c===void 0||c==="["&&s+2===r){Ul(i,c===void 0?new tc(o,e,t):new ic(o,e,t));break}else{let f=i.map[o];if(f===void 0)f=new nc(o),Ul(i,f);i=f}}}class Wn{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);Hp(s,o,this)}let n=[],r=[];for(let a of this.seq)if(a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(a);else r.push(a);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let s=t[r],o=i[s.id];if(o.needsUpdate!==!1)s.setValue(e,o.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];if(a.id in t)i.push(a)}return i}}function Bl(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Gp=37297,Vp=0;function Wp(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let s=r;s<a;s++){let o=s+1;n.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return n.join(`
`)}var Ol=new De;function Xp(e){Ve._getMatrix(Ol,Ve.workingColorSpace,e);let t=`mat3( ${Ol.elements.map((i)=>i.toFixed(4))} )`;switch(Ve.getTransfer(e)){case os:return[t,"LinearTransferOETF"];case at:return[t,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function zl(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let o=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+Wp(e.getShaderSource(t),o)}else return a}function Yp(e,t){let i=Xp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var qp={[ga]:"Linear",[ya]:"Reinhard",[ba]:"Cineon",[va]:"ACESFilmic",[xa]:"AgX",[wa]:"Neutral",[_a]:"Custom"};function Jp(e,t){let i=qp[t];if(i===void 0)return Re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Or=new U;function $p(){Ve.getLuminanceCoefficients(Or);let e=Or.x.toFixed(4),t=Or.y.toFixed(4),i=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function jp(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function Kp(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function Zp(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let a=e.getActiveAttrib(t,r),s=a.name,o=1;if(a.type===e.FLOAT_MAT2)o=2;if(a.type===e.FLOAT_MAT3)o=3;if(a.type===e.FLOAT_MAT4)o=4;i[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Vn(e){return e!==""}function Hl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(e){return e.replace(Qp,tf)}var ef=new Map;function tf(e,t){let i=Ue[t];if(i===void 0){let n=ef.get(t);if(n!==void 0)i=Ue[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw Error("Can not resolve #include <"+t+">")}return Xs(i)}var nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(e){return e.replace(nf,rf)}function rf(e,t,i,n){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var af={[Rn]:"SHADOWMAP_TYPE_PCF",[dn]:"SHADOWMAP_TYPE_VSM"};function sf(e){return af[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var of={[mn]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Pn]:"ENVMAP_TYPE_CUBE_UV"};function lf(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return of[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var cf={[Ni]:"ENVMAP_MODE_REFRACTION"};function hf(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return cf[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var df={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[Qo]:"ENVMAP_BLENDING_MIX",[el]:"ENVMAP_BLENDING_ADD"};function uf(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return df[e.combine]||"ENVMAP_BLENDING_NONE"}function pf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function ff(e,t,i,n){let r=e.getContext(),{defines:a,vertexShader:s,fragmentShader:o}=i,l=sf(i),c=lf(i),u=hf(i),f=uf(i),h=pf(i),g=jp(i),v=Kp(a),w=r.createProgram(),d,p,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(Vn).join(`
`),d.length>0)d+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(Vn).join(`
`),p.length>0)p+=`
`}else d=[Wl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),p=[Wl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$t?"#define TONE_MAPPING":"",i.toneMapping!==$t?Ue.tonemapping_pars_fragment:"",i.toneMapping!==$t?Jp("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Yp("linearToOutputTexel",i.outputColorSpace),$p(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vn).join(`
`);if(s=Xs(s),s=Hl(s,i),s=Gl(s,i),o=Xs(o),o=Hl(o,i),o=Gl(o,i),s=Vl(s),o=Vl(o),i.isRawShaderMaterial!==!0)x=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",i.glslVersion===ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let A=x+d+s,M=x+p+o,P=Bl(r,r.VERTEX_SHADER,A),C=Bl(r,r.FRAGMENT_SHADER,M);if(r.attachShader(w,P),r.attachShader(w,C),i.index0AttributeName!==void 0)r.bindAttribLocation(w,0,i.index0AttributeName);else if(i.morphTargets===!0)r.bindAttribLocation(w,0,"position");r.linkProgram(w);function I(E){if(e.debug.checkShaderErrors){let G=r.getProgramInfoLog(w)||"",j=r.getShaderInfoLog(P)||"",N=r.getShaderInfoLog(C)||"",W=G.trim(),O=j.trim(),H=N.trim(),Z=!0,ne=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,w,P,C);else{let me=zl(r,P,"vertex"),Ae=zl(r,C,"fragment");Ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+me+`
`+Ae)}else if(W!=="")Re("WebGLProgram: Program Info Log:",W);else if(O===""||H==="")ne=!1;if(ne)E.diagnostics={runnable:Z,programLog:W,vertexShader:{log:O,prefix:d},fragmentShader:{log:H,prefix:p}}}r.deleteShader(P),r.deleteShader(C),b=new Wn(r,w),S=Zp(r,w)}let b;this.getUniforms=function(){if(b===void 0)I(this);return b};let S;this.getAttributes=function(){if(S===void 0)I(this);return S};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(X===!1)X=r.getProgramParameter(w,Gp);return X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vp++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=C,this}var mf=0;class rc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:i}=e,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);if(a.has(n)===!1)a.add(n),n.usedTimes++;if(a.has(r)===!1)a.add(r),r.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new ac(e),t.set(e,i);return i}}class ac{constructor(e){this.id=mf++,this.code=e,this.usedTimes=0}}function gf(e){return e===Oi||e===Sr||e===Mr}function yf(e,t,i,n,r,a){let s=new Cr,o=new rc,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:f,precision:h}=n,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){if(l.add(b),b===0)return"uv";return`uv${b}`}function w(b,S,X,E,G,j){let N=E.fog,W=G.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?E.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Z=t.get(b.envMap||O,H),ne=!!Z&&Z.mapping===Pn?Z.image.height:null,me=g[b.type];if(b.precision!==null){if(h=n.getMaxPrecision(b.precision),h!==b.precision)Re("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead.")}let Ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=Ae!==void 0?Ae.length:0,je=0;if(W.morphAttributes.position!==void 0)je=1;if(W.morphAttributes.normal!==void 0)je=2;if(W.morphAttributes.color!==void 0)je=3;let He,q,pe,we;if(me){let ke=ri[me];He=ke.vertexShader,q=ke.fragmentShader}else He=b.vertexShader,q=b.fragmentShader,o.update(b),pe=o.getVertexShaderID(b),we=o.getFragmentShaderID(b);let fe=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Je=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,Ge=!!b.map,tt=!!b.matcap,it=!!Z,Fe=!!b.aoMap,vt=!!b.lightMap,xt=!!b.bumpMap,pt=!!b.normalMap,D=!!b.displacementMap,Et=!!b.emissiveMap,We=!!b.metalnessMap,qe=!!b.roughnessMap,de=b.anisotropy>0,ot=b.clearcoat>0,Ce=b.dispersion>0,_=b.iridescence>0,m=b.sheen>0,L=b.transmission>0,K=de&&!!b.anisotropyMap,Q=ot&&!!b.clearcoatMap,te=ot&&!!b.clearcoatNormalMap,oe=ot&&!!b.clearcoatRoughnessMap,V=_&&!!b.iridescenceMap,J=_&&!!b.iridescenceThicknessMap,se=m&&!!b.sheenColorMap,be=m&&!!b.sheenRoughnessMap,re=!!b.specularMap,le=!!b.specularColorMap,Pe=!!b.specularIntensityMap,Ne=L&&!!b.transmissionMap,Oe=L&&!!b.thicknessMap,R=!!b.gradientMap,ae=!!b.alphaMap,Y=b.alphaTest>0,ie=!!b.alphaHash,ve=!!b.extensions,ee=$t;if(b.toneMapped){if(fe===null||fe.isXRRenderTarget===!0)ee=e.toneMapping}let Se={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:q,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Je,instancingColor:Je&&G.instanceColor!==null,instancingMorph:Je&&G.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:tt,envMap:it,envMapMode:it&&Z.mapping,envMapCubeUVHeight:ne,aoMap:Fe,lightMap:vt,bumpMap:xt,normalMap:pt,displacementMap:D,emissiveMap:Et,normalMapObjectSpace:pt&&b.normalMapType===dl,normalMapTangentSpace:pt&&b.normalMapType===as,packedNormalMap:pt&&b.normalMapType===as&&gf(b.normalMap.format),metalnessMap:We,roughnessMap:qe,anisotropy:de,anisotropyMap:K,clearcoat:ot,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:Ce,iridescence:_,iridescenceMap:V,iridescenceThicknessMap:J,sheen:m,sheenColorMap:se,sheenRoughnessMap:be,specularMap:re,specularColorMap:le,specularIntensityMap:Pe,transmission:L,transmissionMap:Ne,thicknessMap:Oe,gradientMap:R,opaque:b.transparent===!1&&b.blending===In&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:Y,alphaHash:ie,combine:b.combine,mapUv:Ge&&v(b.map.channel),aoMapUv:Fe&&v(b.aoMap.channel),lightMapUv:vt&&v(b.lightMap.channel),bumpMapUv:xt&&v(b.bumpMap.channel),normalMapUv:pt&&v(b.normalMap.channel),displacementMapUv:D&&v(b.displacementMap.channel),emissiveMapUv:Et&&v(b.emissiveMap.channel),metalnessMapUv:We&&v(b.metalnessMap.channel),roughnessMapUv:qe&&v(b.roughnessMap.channel),anisotropyMapUv:K&&v(b.anisotropyMap.channel),clearcoatMapUv:Q&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(b.sheenRoughnessMap.channel),specularMapUv:re&&v(b.specularMap.channel),specularColorMapUv:le&&v(b.specularColorMap.channel),specularIntensityMapUv:Pe&&v(b.specularIntensityMap.channel),transmissionMapUv:Ne&&v(b.transmissionMap.channel),thicknessMapUv:Oe&&v(b.thicknessMap.channel),alphaMapUv:ae&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(pt||de),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Ge||ae),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&pt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:Et&&b.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ei,flipSided:b.side===Pt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&b.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function d(b){let S=[];if(b.shaderID)S.push(b.shaderID);else S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID);if(b.defines!==void 0)for(let X in b.defines)S.push(X),S.push(b.defines[X]);if(b.isRawShaderMaterial===!1)p(S,b),x(S,b),S.push(e.outputColorSpace);return S.push(b.customProgramCacheKey),S.join()}function p(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){if(s.disableAll(),S.instancing)s.enable(0);if(S.instancingColor)s.enable(1);if(S.instancingMorph)s.enable(2);if(S.matcap)s.enable(3);if(S.envMap)s.enable(4);if(S.normalMapObjectSpace)s.enable(5);if(S.normalMapTangentSpace)s.enable(6);if(S.clearcoat)s.enable(7);if(S.iridescence)s.enable(8);if(S.alphaTest)s.enable(9);if(S.vertexColors)s.enable(10);if(S.vertexAlphas)s.enable(11);if(S.vertexUv1s)s.enable(12);if(S.vertexUv2s)s.enable(13);if(S.vertexUv3s)s.enable(14);if(S.vertexTangents)s.enable(15);if(S.anisotropy)s.enable(16);if(S.alphaHash)s.enable(17);if(S.batching)s.enable(18);if(S.dispersion)s.enable(19);if(S.batchingColor)s.enable(20);if(S.gradientMap)s.enable(21);if(S.packedNormalMap)s.enable(22);if(S.vertexNormals)s.enable(23);if(b.push(s.mask),s.disableAll(),S.fog)s.enable(0);if(S.useFog)s.enable(1);if(S.flatShading)s.enable(2);if(S.logarithmicDepthBuffer)s.enable(3);if(S.reversedDepthBuffer)s.enable(4);if(S.skinning)s.enable(5);if(S.morphTargets)s.enable(6);if(S.morphNormals)s.enable(7);if(S.morphColors)s.enable(8);if(S.premultipliedAlpha)s.enable(9);if(S.shadowMapEnabled)s.enable(10);if(S.doubleSided)s.enable(11);if(S.flipSided)s.enable(12);if(S.useDepthPacking)s.enable(13);if(S.dithering)s.enable(14);if(S.transmission)s.enable(15);if(S.sheen)s.enable(16);if(S.opaque)s.enable(17);if(S.pointsUvs)s.enable(18);if(S.decodeVideoTexture)s.enable(19);if(S.decodeVideoTextureEmissive)s.enable(20);if(S.alphaToCoverage)s.enable(21);if(S.numLightProbeGrids>0)s.enable(22);b.push(s.mask)}function A(b){let S=g[b.type],X;if(S){let E=ri[S];X=Ml.clone(E.uniforms)}else X=b.uniforms;return X}function M(b,S){let X=u.get(S);if(X!==void 0)++X.usedTimes;else X=new ff(e,S,b,r),c.push(X),u.set(S,X);return X}function P(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function C(b){o.remove(b)}function I(){o.dispose()}return{getParameters:w,getProgramCacheKey:d,getUniforms:A,acquireProgram:M,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:I}}function bf(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);if(o===void 0)o={},e.set(s,o);return o}function n(s){e.delete(s)}function r(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:a}}function vf(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Xl(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Yl(){let e=[],t=0,i=[],n=[],r=[];function a(){t=0,i.length=0,n.length=0,r.length=0}function s(h){let g=0;if(h.isInstancedMesh)g+=2;if(h.isSkinnedMesh)g+=1;return g}function o(h,g,v,w,d,p){let x=e[t];if(x===void 0)x={id:h.id,object:h,geometry:g,material:v,materialVariant:s(h),groupOrder:w,renderOrder:h.renderOrder,z:d,group:p},e[t]=x;else x.id=h.id,x.object=h,x.geometry=g,x.material=v,x.materialVariant=s(h),x.groupOrder=w,x.renderOrder=h.renderOrder,x.z=d,x.group=p;return t++,x}function l(h,g,v,w,d,p){let x=o(h,g,v,w,d,p);if(v.transmission>0)n.push(x);else if(v.transparent===!0)r.push(x);else i.push(x)}function c(h,g,v,w,d,p){let x=o(h,g,v,w,d,p);if(v.transmission>0)n.unshift(x);else if(v.transparent===!0)r.unshift(x);else i.unshift(x)}function u(h,g){if(i.length>1)i.sort(h||vf);if(n.length>1)n.sort(g||Xl);if(r.length>1)r.sort(g||Xl)}function f(){for(let h=t,g=e.length;h<g;h++){let v=e[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:f,sort:u}}function _f(){let e=new WeakMap;function t(n,r){let a=e.get(n),s;if(a===void 0)s=new Yl,e.set(n,[s]);else if(r>=a.length)s=new Yl,a.push(s);else s=a[r];return s}function i(){e=new WeakMap}return{get:t,dispose:i}}function xf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new U,color:new $e};break;case"SpotLight":i={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":i={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=i,i}}}function wf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var Sf=0;function Mf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tf(e){let t=new xf,i=wf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let r=new U,a=new ut,s=new ut;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,v=0,w=0,d=0,p=0,x=0,A=0,M=0,P=0,C=0,I=0;c.sort(Mf);for(let S=0,X=c.length;S<X;S++){let E=c[S],{color:G,intensity:j,distance:N}=E,W=null;if(E.shadow&&E.shadow.map)if(E.shadow.map.texture.format===Oi)W=E.shadow.map.texture;else W=E.shadow.map.depthTexture||E.shadow.map.texture;if(E.isAmbientLight)u+=G.r*j,f+=G.g*j,h+=G.b*j;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],j);I++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let H=E.shadow,Z=i.get(E);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=E.shadow.matrix,x++}n.directional[g]=O,g++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(G).multiplyScalar(j),O.distance=N,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[w]=O;let H=E.shadow;if(E.map){if(n.spotLightMap[P]=E.map,P++,H.updateMatrices(E),E.castShadow)C++}if(n.spotLightMatrix[w]=H.matrix,E.castShadow){let Z=i.get(E);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[w]=Z,n.spotShadowMap[w]=W,M++}w++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(G).multiplyScalar(j),O.halfWidth.set(E.width*0.5,0,0),O.halfHeight.set(0,E.height*0.5,0),n.rectArea[d]=O,d++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let H=E.shadow,Z=i.get(E);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=E.shadow.matrix,A++}n.point[v]=O,v++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(j),O.groundColor.copy(E.groundColor).multiplyScalar(j),n.hemi[p]=O,p++}}if(d>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2;else n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2;n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let b=n.hash;if(b.directionalLength!==g||b.pointLength!==v||b.spotLength!==w||b.rectAreaLength!==d||b.hemiLength!==p||b.numDirectionalShadows!==x||b.numPointShadows!==A||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==I)n.directional.length=g,n.spot.length=w,n.rectArea.length=d,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=M+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,b.directionalLength=g,b.pointLength=v,b.spotLength=w,b.rectAreaLength=d,b.hemiLength=p,b.numDirectionalShadows=x,b.numPointShadows=A,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=I,n.version=Sf++}function l(c,u){let f=0,h=0,g=0,v=0,w=0,d=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let A=c[p];if(A.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),f++}else if(A.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),g++}else if(A.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(d),s.identity(),a.copy(A.matrixWorld),a.premultiply(d),s.extractRotation(a),M.halfWidth.set(A.width*0.5,0,0),M.halfHeight.set(0,A.height*0.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(d),h++}else if(A.isHemisphereLight){let M=n.hemi[w];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(d),w++}}}return{setup:o,setupView:l,state:n}}function ql(e){let t=new Tf(e),i=[],n=[],r=[];function a(h){f.camera=h,i.length=0,n.length=0,r.length=0}function s(h){i.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(i)}function u(h){t.setupView(i,h)}let f={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Af(e){let t=new WeakMap;function i(r,a=0){let s=t.get(r),o;if(s===void 0)o=new ql(e),t.set(r,[o]);else if(a>=s.length)o=new ql(e),s.push(o);else o=s[a];return o}function n(){t=new WeakMap}return{get:i,dispose:n}}var Ef=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rf=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],If=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jl=new ut,Gn=new U,Gs=new U;function Pf(e,t,i){let n=new Dr,r=new Ze,a=new Ze,s=new ct,o=new vs,l=new _s,c={},u=i.maxTextureSize,f={[un]:Pt,[Pt]:un,[ei]:ei},h=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Ef,fragmentShader:Cf}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let v=new Vt;v.setAttribute("position",new Ht(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let w=new kt(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rn;let p=this.type;this.render=function(C,I,b){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(C.length===0)return;if(this.type===Mo)Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Rn;let S=e.getRenderTarget(),X=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),G=e.state;if(G.setBlending(ti),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=p!==this.type;if(j)I.traverse(function(N){if(N.material)if(Array.isArray(N.material))N.material.forEach((W)=>W.needsUpdate=!0);else N.material.needsUpdate=!0});for(let N=0,W=C.length;N<W;N++){let O=C[N],H=O.shadow;if(H===void 0){Re("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let Z=H.getFrameExtents();if(r.multiply(Z),a.copy(H.mapSize),r.x>u||r.y>u){if(r.x>u)a.x=Math.floor(u/Z.x),r.x=a.x*Z.x,H.mapSize.x=a.x;if(r.y>u)a.y=Math.floor(u/Z.y),r.y=a.y*Z.y,H.mapSize.y=a.y}let ne=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ne,H.map===null||j===!0){if(H.map!==null){if(H.map.depthTexture!==null)H.map.depthTexture.dispose(),H.map.depthTexture=null;H.map.dispose()}if(this.type===dn){if(O.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gt(r.x,r.y,{format:Oi,type:pi,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Ci(r.x,r.y,ui),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ai,H.map.depthTexture.magFilter=Ai}else{if(O.isPointLight)H.map=new Ys(r.x),H.map.depthTexture=new gs(r.x,Ei);else H.map=new Gt(r.x,r.y),H.map.depthTexture=new Ci(r.x,r.y,Ei);if(H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ui,this.type===Rn)H.map.depthTexture.compareFunction=ne?Ar:Tr,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt;else H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ai,H.map.depthTexture.magFilter=Ai}H.camera.updateProjectionMatrix()}let me=H.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<me;Ae++){if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,Ae),e.clear();else{if(Ae===0)e.setRenderTarget(H.map),e.clear();let _e=H.getViewport(Ae);s.set(a.x*_e.x,a.y*_e.y,a.x*_e.z,a.y*_e.w),G.viewport(s)}if(O.isPointLight){let{camera:_e,matrix:je}=H,He=O.distance||_e.far;if(He!==_e.far)_e.far=He,_e.updateProjectionMatrix();Gn.setFromMatrixPosition(O.matrixWorld),_e.position.copy(Gn),Gs.copy(_e.position),Gs.add(Rf[Ae]),_e.up.copy(If[Ae]),_e.lookAt(Gs),_e.updateMatrixWorld(),je.makeTranslation(-Gn.x,-Gn.y,-Gn.z),Jl.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Jl,_e.coordinateSystem,_e.reversedDepth)}else H.updateMatrices(O);n=H.getFrustum(),M(I,b,H.camera,O,this.type)}if(H.isPointLightShadow!==!0&&this.type===dn)x(H,b);H.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(S,X,E)};function x(C,I){let b=t.update(w);if(h.defines.VSM_SAMPLES!==C.blurSamples)h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new Gt(r.x,r.y,{format:Oi,type:pi});h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(I,null,b,h,w,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(I,null,b,g,w,null)}function A(C,I,b,S){let X=null,E=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)X=E;else if(X=b.isPointLight===!0?l:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let G=X.uuid,j=I.uuid,N=c[G];if(N===void 0)N={},c[G]=N;let W=N[j];if(W===void 0)W=X.clone(),N[j]=W,I.addEventListener("dispose",P);X=W}if(X.visible=I.visible,X.wireframe=I.wireframe,S===dn)X.side=I.shadowSide!==null?I.shadowSide:I.side;else X.side=I.shadowSide!==null?I.shadowSide:f[I.side];if(X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let G=e.properties.get(X);G.light=b}return X}function M(C,I,b,S,X){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&X===dn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let j=t.update(C),N=C.material;if(Array.isArray(N)){let W=j.groups;for(let O=0,H=W.length;O<H;O++){let Z=W[O],ne=N[Z.materialIndex];if(ne&&ne.visible){let me=A(C,ne,S,X);C.onBeforeShadow(e,C,I,b,j,me,Z),e.renderBufferDirect(b,null,j,me,C,Z),C.onAfterShadow(e,C,I,b,j,me,Z)}}}else if(N.visible){let W=A(C,N,S,X);C.onBeforeShadow(e,C,I,b,j,W,null),e.renderBufferDirect(b,null,j,W,C,null),C.onAfterShadow(e,C,I,b,j,W,null)}}}let G=C.children;for(let j=0,N=G.length;j<N;j++)M(G[j],I,b,S,X)}function P(C){C.target.removeEventListener("dispose",P);for(let b in c){let S=c[b],X=C.target.uuid;if(X in S)S[X].dispose(),delete S[X]}}}function Df(e,t){function i(){let R=!1,ae=new ct,Y=null,ie=new ct(0,0,0,0);return{setMask:function(ve){if(Y!==ve&&!R)e.colorMask(ve,ve,ve,ve),Y=ve},setLocked:function(ve){R=ve},setClear:function(ve,ee,Se,ke,ft){if(ft===!0)ve*=ke,ee*=ke,Se*=ke;if(ae.set(ve,ee,Se,ke),ie.equals(ae)===!1)e.clearColor(ve,ee,Se,ke),ie.copy(ae)},reset:function(){R=!1,Y=null,ie.set(-1,0,0,0)}}}function n(){let R=!1,ae=!1,Y=null,ie=null,ve=null;return{setReversed:function(ee){if(ae!==ee){let Se=t.get("EXT_clip_control");if(ee)Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT);else Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT);ae=ee;let ke=ve;ve=null,this.setClear(ke)}},getReversed:function(){return ae},setTest:function(ee){if(ee)fe(e.DEPTH_TEST);else Ee(e.DEPTH_TEST)},setMask:function(ee){if(Y!==ee&&!R)e.depthMask(ee),Y=ee},setFunc:function(ee){if(ae)ee=wl[ee];if(ie!==ee){switch(ee){case Xo:e.depthFunc(e.NEVER);break;case Yo:e.depthFunc(e.ALWAYS);break;case qo:e.depthFunc(e.LESS);break;case ma:e.depthFunc(e.LEQUAL);break;case Jo:e.depthFunc(e.EQUAL);break;case $o:e.depthFunc(e.GEQUAL);break;case jo:e.depthFunc(e.GREATER);break;case Ko:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ie=ee}},setLocked:function(ee){R=ee},setClear:function(ee){if(ve!==ee){if(ve=ee,ae)ee=1-ee;e.clearDepth(ee)}},reset:function(){R=!1,Y=null,ie=null,ve=null,ae=!1}}}function r(){let R=!1,ae=null,Y=null,ie=null,ve=null,ee=null,Se=null,ke=null,ft=null;return{setTest:function(Qe){if(!R)if(Qe)fe(e.STENCIL_TEST);else Ee(e.STENCIL_TEST)},setMask:function(Qe){if(ae!==Qe&&!R)e.stencilMask(Qe),ae=Qe},setFunc:function(Qe,Kt,Xt){if(Y!==Qe||ie!==Kt||ve!==Xt)e.stencilFunc(Qe,Kt,Xt),Y=Qe,ie=Kt,ve=Xt},setOp:function(Qe,Kt,Xt){if(ee!==Qe||Se!==Kt||ke!==Xt)e.stencilOp(Qe,Kt,Xt),ee=Qe,Se=Kt,ke=Xt},setLocked:function(Qe){R=Qe},setClear:function(Qe){if(ft!==Qe)e.clearStencil(Qe),ft=Qe},reset:function(){R=!1,ae=null,Y=null,ie=null,ve=null,ee=null,Se=null,ke=null,ft=null}}}let a=new i,s=new n,o=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},g=new WeakMap,v=[],w=null,d=!1,p=null,x=null,A=null,M=null,P=null,C=null,I=null,b=new $e(0,0,0),S=0,X=!1,E=null,G=null,j=null,N=null,W=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,ne=e.getParameter(e.VERSION);if(ne.indexOf("WebGL")!==-1)Z=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=Z>=1;else if(ne.indexOf("OpenGL ES")!==-1)Z=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=Z>=2;let me=null,Ae={},_e=e.getParameter(e.SCISSOR_BOX),je=e.getParameter(e.VIEWPORT),He=new ct().fromArray(_e),q=new ct().fromArray(je);function pe(R,ae,Y,ie){let ve=new Uint8Array(4),ee=e.createTexture();e.bindTexture(R,ee),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Se=0;Se<Y;Se++)if(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)e.texImage3D(ae,0,e.RGBA,1,1,ie,0,e.RGBA,e.UNSIGNED_BYTE,ve);else e.texImage2D(ae+Se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ve);return ee}let we={};we[e.TEXTURE_2D]=pe(e.TEXTURE_2D,e.TEXTURE_2D,1),we[e.TEXTURE_CUBE_MAP]=pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[e.TEXTURE_2D_ARRAY]=pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),we[e.TEXTURE_3D]=pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(e.DEPTH_TEST),s.setFunc(ma),xt(!1),pt(ua),fe(e.CULL_FACE),Fe(ti);function fe(R){if(u[R]!==!0)e.enable(R),u[R]=!0}function Ee(R){if(u[R]!==!1)e.disable(R),u[R]=!1}function Je(R,ae){if(h[R]!==ae){if(e.bindFramebuffer(R,ae),h[R]=ae,R===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=ae;if(R===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=ae;return!0}return!1}function Be(R,ae){let Y=v,ie=!1;if(R){if(Y=g.get(ae),Y===void 0)Y=[],g.set(ae,Y);let ve=R.textures;if(Y.length!==ve.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,Se=ve.length;ee<Se;ee++)Y[ee]=e.COLOR_ATTACHMENT0+ee;Y.length=ve.length,ie=!0}}else if(Y[0]!==e.BACK)Y[0]=e.BACK,ie=!0;if(ie)e.drawBuffers(Y)}function Ge(R){if(w!==R)return e.useProgram(R),w=R,!0;return!1}let tt={[fn]:e.FUNC_ADD,[Ao]:e.FUNC_SUBTRACT,[Eo]:e.FUNC_REVERSE_SUBTRACT};tt[Co]=e.MIN,tt[Ro]=e.MAX;let it={[Io]:e.ZERO,[Po]:e.ONE,[Do]:e.SRC_COLOR,[Lo]:e.SRC_ALPHA,[zo]:e.SRC_ALPHA_SATURATE,[Bo]:e.DST_COLOR,[Fo]:e.DST_ALPHA,[ko]:e.ONE_MINUS_SRC_COLOR,[No]:e.ONE_MINUS_SRC_ALPHA,[Oo]:e.ONE_MINUS_DST_COLOR,[Uo]:e.ONE_MINUS_DST_ALPHA,[Ho]:e.CONSTANT_COLOR,[Go]:e.ONE_MINUS_CONSTANT_COLOR,[Vo]:e.CONSTANT_ALPHA,[Wo]:e.ONE_MINUS_CONSTANT_ALPHA};function Fe(R,ae,Y,ie,ve,ee,Se,ke,ft,Qe){if(R===ti){if(d===!0)Ee(e.BLEND),d=!1;return}if(d===!1)fe(e.BLEND),d=!0;if(R!==To){if(R!==p||Qe!==X){if(x!==fn||P!==fn)e.blendEquation(e.FUNC_ADD),x=fn,P=fn;if(Qe)switch(R){case In:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pn:e.blendFunc(e.ONE,e.ONE);break;case pa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fa:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ie("WebGLState: Invalid blending: ",R);break}else switch(R){case In:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pa:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fa:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",R);break}A=null,M=null,C=null,I=null,b.set(0,0,0),S=0,p=R,X=Qe}return}if(ve=ve||ae,ee=ee||Y,Se=Se||ie,ae!==x||ve!==P)e.blendEquationSeparate(tt[ae],tt[ve]),x=ae,P=ve;if(Y!==A||ie!==M||ee!==C||Se!==I)e.blendFuncSeparate(it[Y],it[ie],it[ee],it[Se]),A=Y,M=ie,C=ee,I=Se;if(ke.equals(b)===!1||ft!==S)e.blendColor(ke.r,ke.g,ke.b,ft),b.copy(ke),S=ft;p=R,X=!1}function vt(R,ae){R.side===ei?Ee(e.CULL_FACE):fe(e.CULL_FACE);let Y=R.side===Pt;if(ae)Y=!Y;xt(Y),R.blending===In&&R.transparent===!1?Fe(ti):Fe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),a.setMask(R.colorWrite);let ie=R.stencilWrite;if(o.setTest(ie),ie)o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass);Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):Ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function xt(R){if(E!==R){if(R)e.frontFace(e.CW);else e.frontFace(e.CCW);E=R}}function pt(R){if(R!==wo){if(fe(e.CULL_FACE),R!==G)if(R===ua)e.cullFace(e.BACK);else if(R===So)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Ee(e.CULL_FACE);G=R}function D(R){if(R!==j){if(H)e.lineWidth(R);j=R}}function Et(R,ae,Y){if(R){if(fe(e.POLYGON_OFFSET_FILL),N!==ae||W!==Y){if(N=ae,W=Y,s.getReversed())ae=-ae;e.polygonOffset(ae,Y)}}else Ee(e.POLYGON_OFFSET_FILL)}function We(R){if(R)fe(e.SCISSOR_TEST);else Ee(e.SCISSOR_TEST)}function qe(R){if(R===void 0)R=e.TEXTURE0+O-1;if(me!==R)e.activeTexture(R),me=R}function de(R,ae,Y){if(Y===void 0)if(me===null)Y=e.TEXTURE0+O-1;else Y=me;let ie=Ae[Y];if(ie===void 0)ie={type:void 0,texture:void 0},Ae[Y]=ie;if(ie.type!==R||ie.texture!==ae){if(me!==Y)e.activeTexture(Y),me=Y;e.bindTexture(R,ae||we[R]),ie.type=R,ie.texture=ae}}function ot(){let R=Ae[me];if(R!==void 0&&R.type!==void 0)e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function _(){try{e.compressedTexImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function m(){try{e.texSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function L(){try{e.texSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function te(){try{e.texStorage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function oe(){try{e.texStorage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function V(){try{e.texImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function J(){try{e.texImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function se(R){if(f[R]!==void 0)return f[R];else return e.getParameter(R)}function be(R,ae){if(f[R]!==ae)e.pixelStorei(R,ae),f[R]=ae}function re(R){if(He.equals(R)===!1)e.scissor(R.x,R.y,R.z,R.w),He.copy(R)}function le(R){if(q.equals(R)===!1)e.viewport(R.x,R.y,R.z,R.w),q.copy(R)}function Pe(R,ae){let Y=c.get(ae);if(Y===void 0)Y=new WeakMap,c.set(ae,Y);let ie=Y.get(R);if(ie===void 0)ie=e.getUniformBlockIndex(ae,R.name),Y.set(R,ie)}function Ne(R,ae){let ie=c.get(ae).get(R);if(l.get(ae)!==ie)e.uniformBlockBinding(ae,ie,R.__bindingPointIndex),l.set(ae,ie)}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},me=null,Ae={},h={},g=new WeakMap,v=[],w=null,d=!1,p=null,x=null,A=null,M=null,P=null,C=null,I=null,b=new $e(0,0,0),S=0,X=!1,E=null,G=null,j=null,N=null,W=null,He.set(0,0,e.canvas.width,e.canvas.height),q.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:fe,disable:Ee,bindFramebuffer:Je,drawBuffers:Be,useProgram:Ge,setBlending:Fe,setMaterial:vt,setFlipSided:xt,setCullFace:pt,setLineWidth:D,setPolygonOffset:Et,setScissorTest:We,activeTexture:qe,bindTexture:de,unbindTexture:ot,compressedTexImage2D:Ce,compressedTexImage3D:_,texImage2D:V,texImage3D:J,pixelStorei:be,getParameter:se,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:te,texStorage3D:oe,texSubImage2D:m,texSubImage3D:L,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:re,viewport:le,reset:Oe}}function kf(e,t,i,n,r,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,f=new Set,h,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function w(_,m){return v?new OffscreenCanvas(_,m):Cn("canvas")}function d(_,m,L){let K=1,Q=Ce(_);if(Q.width>L||Q.height>L)K=L/Math.max(Q.width,Q.height);if(K<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let te=Math.floor(K*Q.width),oe=Math.floor(K*Q.height);if(h===void 0)h=w(te,oe);let V=m?w(te,oe):h;return V.width=te,V.height=oe,V.getContext("2d").drawImage(_,0,0,te,oe),Re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+oe+")."),V}else{if("data"in _)Re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+").");return _}return _}function p(_){return _.generateMipmaps}function x(_){e.generateMipmap(_)}function A(_){if(_.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function M(_,m,L,K,Q,te=!1){if(_!==null){if(e[_]!==void 0)return e[_];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let oe;if(K){if(oe=t.get("EXT_texture_norm16"),!oe)Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let V=m;if(m===e.RED){if(L===e.FLOAT)V=e.R32F;if(L===e.HALF_FLOAT)V=e.R16F;if(L===e.UNSIGNED_BYTE)V=e.R8;if(L===e.UNSIGNED_SHORT&&oe)V=oe.R16_EXT;if(L===e.SHORT&&oe)V=oe.R16_SNORM_EXT}if(m===e.RED_INTEGER){if(L===e.UNSIGNED_BYTE)V=e.R8UI;if(L===e.UNSIGNED_SHORT)V=e.R16UI;if(L===e.UNSIGNED_INT)V=e.R32UI;if(L===e.BYTE)V=e.R8I;if(L===e.SHORT)V=e.R16I;if(L===e.INT)V=e.R32I}if(m===e.RG){if(L===e.FLOAT)V=e.RG32F;if(L===e.HALF_FLOAT)V=e.RG16F;if(L===e.UNSIGNED_BYTE)V=e.RG8;if(L===e.UNSIGNED_SHORT&&oe)V=oe.RG16_EXT;if(L===e.SHORT&&oe)V=oe.RG16_SNORM_EXT}if(m===e.RG_INTEGER){if(L===e.UNSIGNED_BYTE)V=e.RG8UI;if(L===e.UNSIGNED_SHORT)V=e.RG16UI;if(L===e.UNSIGNED_INT)V=e.RG32UI;if(L===e.BYTE)V=e.RG8I;if(L===e.SHORT)V=e.RG16I;if(L===e.INT)V=e.RG32I}if(m===e.RGB_INTEGER){if(L===e.UNSIGNED_BYTE)V=e.RGB8UI;if(L===e.UNSIGNED_SHORT)V=e.RGB16UI;if(L===e.UNSIGNED_INT)V=e.RGB32UI;if(L===e.BYTE)V=e.RGB8I;if(L===e.SHORT)V=e.RGB16I;if(L===e.INT)V=e.RGB32I}if(m===e.RGBA_INTEGER){if(L===e.UNSIGNED_BYTE)V=e.RGBA8UI;if(L===e.UNSIGNED_SHORT)V=e.RGBA16UI;if(L===e.UNSIGNED_INT)V=e.RGBA32UI;if(L===e.BYTE)V=e.RGBA8I;if(L===e.SHORT)V=e.RGBA16I;if(L===e.INT)V=e.RGBA32I}if(m===e.RGB){if(L===e.UNSIGNED_SHORT&&oe)V=oe.RGB16_EXT;if(L===e.SHORT&&oe)V=oe.RGB16_SNORM_EXT;if(L===e.UNSIGNED_INT_5_9_9_9_REV)V=e.RGB9_E5;if(L===e.UNSIGNED_INT_10F_11F_11F_REV)V=e.R11F_G11F_B10F}if(m===e.RGBA){let J=te?os:Ve.getTransfer(Q);if(L===e.FLOAT)V=e.RGBA32F;if(L===e.HALF_FLOAT)V=e.RGBA16F;if(L===e.UNSIGNED_BYTE)V=J===at?e.SRGB8_ALPHA8:e.RGBA8;if(L===e.UNSIGNED_SHORT&&oe)V=oe.RGBA16_EXT;if(L===e.SHORT&&oe)V=oe.RGBA16_SNORM_EXT;if(L===e.UNSIGNED_SHORT_4_4_4_4)V=e.RGBA4;if(L===e.UNSIGNED_SHORT_5_5_5_1)V=e.RGB5_A1}if(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)t.get("EXT_color_buffer_float");return V}function P(_,m){let L;if(_){if(m===null||m===Ei||m===gn)L=e.DEPTH24_STENCIL8;else if(m===ui)L=e.DEPTH32F_STENCIL8;else if(m===kn)L=e.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(m===null||m===Ei||m===gn)L=e.DEPTH_COMPONENT24;else if(m===ui)L=e.DEPTH_COMPONENT32F;else if(m===kn)L=e.DEPTH_COMPONENT16;return L}function C(_,m){if(p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ai&&_.minFilter!==Dt)return Math.log2(Math.max(m.width,m.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return m.mipmaps.length;else return 1}function I(_){let m=_.target;if(m.removeEventListener("dispose",I),S(m),m.isVideoTexture)u.delete(m);if(m.isHTMLTexture)f.delete(m)}function b(_){let m=_.target;m.removeEventListener("dispose",b),E(m)}function S(_){let m=n.get(_);if(m.__webglInit===void 0)return;let L=_.source,K=g.get(L);if(K){let Q=K[m.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)X(_);if(Object.keys(K).length===0)g.delete(L)}n.remove(_)}function X(_){let m=n.get(_);e.deleteTexture(m.__webglTexture);let L=_.source,K=g.get(L);delete K[m.__cacheKey],s.memory.textures--}function E(_){let m=n.get(_);if(_.depthTexture)_.depthTexture.dispose(),n.remove(_.depthTexture);if(_.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(m.__webglFramebuffer[K]))for(let Q=0;Q<m.__webglFramebuffer[K].length;Q++)e.deleteFramebuffer(m.__webglFramebuffer[K][Q]);else e.deleteFramebuffer(m.__webglFramebuffer[K]);if(m.__webglDepthbuffer)e.deleteRenderbuffer(m.__webglDepthbuffer[K])}else{if(Array.isArray(m.__webglFramebuffer))for(let K=0;K<m.__webglFramebuffer.length;K++)e.deleteFramebuffer(m.__webglFramebuffer[K]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer)e.deleteRenderbuffer(m.__webglDepthbuffer);if(m.__webglMultisampledFramebuffer)e.deleteFramebuffer(m.__webglMultisampledFramebuffer);if(m.__webglColorRenderbuffer){for(let K=0;K<m.__webglColorRenderbuffer.length;K++)if(m.__webglColorRenderbuffer[K])e.deleteRenderbuffer(m.__webglColorRenderbuffer[K])}if(m.__webglDepthRenderbuffer)e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let L=_.textures;for(let K=0,Q=L.length;K<Q;K++){let te=n.get(L[K]);if(te.__webglTexture)e.deleteTexture(te.__webglTexture),s.memory.textures--;n.remove(L[K])}n.remove(_)}let G=0;function j(){G=0}function N(){return G}function W(_){G=_}function O(){let _=G;if(_>=r.maxTextures)Re("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures);return G+=1,_}function H(_){let m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function Z(_,m){let L=n.get(_);if(_.isVideoTexture)de(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&L.__version!==_.version){let K=_.image;if(K===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(L,_,m);return}}else if(_.isExternalTexture)L.__webglTexture=_.sourceTexture?_.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+m)}function ne(_,m){let L=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){Ee(L,_,m);return}else if(_.isExternalTexture)L.__webglTexture=_.sourceTexture?_.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+m)}function me(_,m){let L=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){Ee(L,_,m);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+m)}function Ae(_,m){let L=n.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&L.__version!==_.version){Je(L,_,m);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+m)}let _e={[tl]:e.REPEAT,[yr]:e.CLAMP_TO_EDGE,[il]:e.MIRRORED_REPEAT},je={[Ai]:e.NEAREST,[nl]:e.NEAREST_MIPMAP_NEAREST,[Dn]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[br]:e.LINEAR_MIPMAP_NEAREST,[Fi]:e.LINEAR_MIPMAP_LINEAR},He={[pl]:e.NEVER,[bl]:e.ALWAYS,[fl]:e.LESS,[Tr]:e.LEQUAL,[ml]:e.EQUAL,[Ar]:e.GEQUAL,[gl]:e.GREATER,[yl]:e.NOTEQUAL};function q(_,m){if(m.type===ui&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Dt||m.magFilter===br||m.magFilter===Dn||m.magFilter===Fi||m.minFilter===Dt||m.minFilter===br||m.minFilter===Dn||m.minFilter===Fi))Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(_,e.TEXTURE_WRAP_S,_e[m.wrapS]),e.texParameteri(_,e.TEXTURE_WRAP_T,_e[m.wrapT]),_===e.TEXTURE_3D||_===e.TEXTURE_2D_ARRAY)e.texParameteri(_,e.TEXTURE_WRAP_R,_e[m.wrapR]);if(e.texParameteri(_,e.TEXTURE_MAG_FILTER,je[m.magFilter]),e.texParameteri(_,e.TEXTURE_MIN_FILTER,je[m.minFilter]),m.compareFunction)e.texParameteri(_,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(_,e.TEXTURE_COMPARE_FUNC,He[m.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ai)return;if(m.minFilter!==Dn&&m.minFilter!==Fi)return;if(m.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(_,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function pe(_,m){let L=!1;if(_.__webglInit===void 0)_.__webglInit=!0,m.addEventListener("dispose",I);let K=m.source,Q=g.get(K);if(Q===void 0)Q={},g.set(K,Q);let te=H(m);if(te!==_.__cacheKey){if(Q[te]===void 0)Q[te]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,L=!0;Q[te].usedTimes++;let oe=Q[_.__cacheKey];if(oe!==void 0){if(Q[_.__cacheKey].usedTimes--,oe.usedTimes===0)X(m)}_.__cacheKey=te,_.__webglTexture=Q[te].texture}return L}function we(_,m,L){return Math.floor(Math.floor(_/L)/m)}function fe(_,m,L,K){let te=_.updateRanges;if(te.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,L,K,m.data);else{te.sort((be,re)=>be.start-re.start);let oe=0;for(let be=1;be<te.length;be++){let re=te[oe],le=te[be],Pe=re.start+re.count,Ne=we(le.start,m.width,4),Oe=we(re.start,m.width,4);if(le.start<=Pe+1&&Ne===Oe&&we(le.start+le.count-1,m.width,4)===Ne)re.count=Math.max(re.count,le.start+le.count-re.start);else++oe,te[oe]=le}te.length=oe+1;let V=i.getParameter(e.UNPACK_ROW_LENGTH),J=i.getParameter(e.UNPACK_SKIP_PIXELS),se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let be=0,re=te.length;be<re;be++){let le=te[be],Pe=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Oe=Pe%m.width,R=Math.floor(Pe/m.width),ae=Ne,Y=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,R),i.texSubImage2D(e.TEXTURE_2D,0,Oe,R,ae,1,L,K,m.data)}_.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,V),i.pixelStorei(e.UNPACK_SKIP_PIXELS,J),i.pixelStorei(e.UNPACK_SKIP_ROWS,se)}}function Ee(_,m,L){let K=e.TEXTURE_2D;if(m.isDataArrayTexture||m.isCompressedArrayTexture)K=e.TEXTURE_2D_ARRAY;if(m.isData3DTexture)K=e.TEXTURE_3D;let Q=pe(_,m),te=m.source;i.bindTexture(K,_.__webglTexture,e.TEXTURE0+L);let oe=n.get(te);if(te.version!==oe.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+L),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let Y=Ve.getPrimaries(Ve.workingColorSpace),ie=m.colorSpace===zi?null:Ve.getPrimaries(m.colorSpace),ve=m.colorSpace===zi||Y===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}i.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment);let J=d(m.image,!1,r.maxTextureSize);J=ot(m,J);let se=a.convert(m.format,m.colorSpace),be=a.convert(m.type),re=M(m.internalFormat,se,be,m.normalized,m.colorSpace,m.isVideoTexture);q(K,m);let le,Pe=m.mipmaps,Ne=m.isVideoTexture!==!0,Oe=oe.__version===void 0||Q===!0,R=te.dataReady,ae=C(m,J);if(m.isDepthTexture){if(re=P(m.format===Bi,m.type),Oe)if(Ne)i.texStorage2D(e.TEXTURE_2D,1,re,J.width,J.height);else i.texImage2D(e.TEXTURE_2D,0,re,J.width,J.height,0,se,be,null)}else if(m.isDataTexture)if(Pe.length>0){if(Ne&&Oe)i.texStorage2D(e.TEXTURE_2D,ae,re,Pe[0].width,Pe[0].height);for(let Y=0,ie=Pe.length;Y<ie;Y++)if(le=Pe[Y],Ne){if(R)i.texSubImage2D(e.TEXTURE_2D,Y,0,0,le.width,le.height,se,be,le.data)}else i.texImage2D(e.TEXTURE_2D,Y,re,le.width,le.height,0,se,be,le.data);m.generateMipmaps=!1}else if(Ne){if(Oe)i.texStorage2D(e.TEXTURE_2D,ae,re,J.width,J.height);if(R)fe(m,J,se,be)}else i.texImage2D(e.TEXTURE_2D,0,re,J.width,J.height,0,se,be,J.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){if(Ne&&Oe)i.texStorage3D(e.TEXTURE_2D_ARRAY,ae,re,Pe[0].width,Pe[0].height,J.depth);for(let Y=0,ie=Pe.length;Y<ie;Y++)if(le=Pe[Y],m.format!==ii)if(se!==null)if(Ne){if(R)if(m.layerUpdates.size>0){let ve=Fs(le.width,le.height,m.format,m.type);for(let ee of m.layerUpdates){let Se=le.data.subarray(ee*ve/le.data.BYTES_PER_ELEMENT,(ee+1)*ve/le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,ee,le.width,le.height,1,se,Se)}m.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,J.depth,se,le.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,re,le.width,le.height,J.depth,0,le.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ne){if(R)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,J.depth,se,be,le.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Y,re,le.width,le.height,J.depth,0,se,be,le.data)}else{if(Ne&&Oe)i.texStorage2D(e.TEXTURE_2D,ae,re,Pe[0].width,Pe[0].height);for(let Y=0,ie=Pe.length;Y<ie;Y++)if(le=Pe[Y],m.format!==ii)if(se!==null)if(Ne){if(R)i.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,le.width,le.height,se,le.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Y,re,le.width,le.height,0,le.data);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ne){if(R)i.texSubImage2D(e.TEXTURE_2D,Y,0,0,le.width,le.height,se,be,le.data)}else i.texImage2D(e.TEXTURE_2D,Y,re,le.width,le.height,0,se,be,le.data)}else if(m.isDataArrayTexture)if(Ne){if(Oe)i.texStorage3D(e.TEXTURE_2D_ARRAY,ae,re,J.width,J.height,J.depth);if(R)if(m.layerUpdates.size>0){let Y=Fs(J.width,J.height,m.format,m.type);for(let ie of m.layerUpdates){let ve=J.data.subarray(ie*Y/J.data.BYTES_PER_ELEMENT,(ie+1)*Y/J.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,J.width,J.height,1,se,be,ve)}m.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,be,J.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,re,J.width,J.height,J.depth,0,se,be,J.data);else if(m.isData3DTexture)if(Ne){if(Oe)i.texStorage3D(e.TEXTURE_3D,ae,re,J.width,J.height,J.depth);if(R)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,be,J.data)}else i.texImage3D(e.TEXTURE_3D,0,re,J.width,J.height,J.depth,0,se,be,J.data);else if(m.isFramebufferTexture){if(Oe)if(Ne)i.texStorage2D(e.TEXTURE_2D,ae,re,J.width,J.height);else{let Y=J.width,ie=J.height;for(let ve=0;ve<ae;ve++)i.texImage2D(e.TEXTURE_2D,ve,re,Y,ie,0,se,be,null),Y>>=1,ie>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in e){let Y=e.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(J.parentNode!==Y){Y.appendChild(J),f.add(m),Y.onpaint=(ke)=>{let ft=ke.changedElements;for(let Qe of f)if(ft.includes(Qe.image))Qe.needsUpdate=!0},Y.requestPaint();return}let ie=0,{RGBA:ve,RGBA:ee,UNSIGNED_BYTE:Se}=e;e.texElementImage2D(e.TEXTURE_2D,ie,ve,ee,Se,J),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ne&&Oe){let Y=Ce(Pe[0]);i.texStorage2D(e.TEXTURE_2D,ae,re,Y.width,Y.height)}for(let Y=0,ie=Pe.length;Y<ie;Y++)if(le=Pe[Y],Ne){if(R)i.texSubImage2D(e.TEXTURE_2D,Y,0,0,se,be,le)}else i.texImage2D(e.TEXTURE_2D,Y,re,se,be,le);m.generateMipmaps=!1}else if(Ne){if(Oe){let Y=Ce(J);i.texStorage2D(e.TEXTURE_2D,ae,re,Y.width,Y.height)}if(R)i.texSubImage2D(e.TEXTURE_2D,0,0,0,se,be,J)}else i.texImage2D(e.TEXTURE_2D,0,re,se,be,J);if(p(m))x(K);if(oe.__version=te.version,m.onUpdate)m.onUpdate(m)}_.__version=m.version}function Je(_,m,L){if(m.image.length!==6)return;let K=pe(_,m),Q=m.source;i.bindTexture(e.TEXTURE_CUBE_MAP,_.__webglTexture,e.TEXTURE0+L);let te=n.get(Q);if(Q.version!==te.__version||K===!0){i.activeTexture(e.TEXTURE0+L);let oe=Ve.getPrimaries(Ve.workingColorSpace),V=m.colorSpace===zi?null:Ve.getPrimaries(m.colorSpace),J=m.colorSpace===zi||oe===V?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let se=m.isCompressedTexture||m.image[0].isCompressedTexture,be=m.image[0]&&m.image[0].isDataTexture,re=[];for(let ee=0;ee<6;ee++){if(!se&&!be)re[ee]=d(m.image[ee],!0,r.maxCubemapSize);else re[ee]=be?m.image[ee].image:m.image[ee];re[ee]=ot(m,re[ee])}let le=re[0],Pe=a.convert(m.format,m.colorSpace),Ne=a.convert(m.type),Oe=M(m.internalFormat,Pe,Ne,m.normalized,m.colorSpace),R=m.isVideoTexture!==!0,ae=te.__version===void 0||K===!0,Y=Q.dataReady,ie=C(m,le);q(e.TEXTURE_CUBE_MAP,m);let ve;if(se){if(R&&ae)i.texStorage2D(e.TEXTURE_CUBE_MAP,ie,Oe,le.width,le.height);for(let ee=0;ee<6;ee++){ve=re[ee].mipmaps;for(let Se=0;Se<ve.length;Se++){let ke=ve[Se];if(m.format!==ii)if(Pe!==null)if(R){if(Y)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,ke.width,ke.height,Pe,ke.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,Oe,ke.width,ke.height,0,ke.data);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(R){if(Y)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,ke.width,ke.height,Pe,Ne,ke.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,Oe,ke.width,ke.height,0,Pe,Ne,ke.data)}}}else{if(ve=m.mipmaps,R&&ae){if(ve.length>0)ie++;let ee=Ce(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ie,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){if(R){if(Y)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,re[ee].width,re[ee].height,Pe,Ne,re[ee].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,re[ee].width,re[ee].height,0,Pe,Ne,re[ee].data);for(let Se=0;Se<ve.length;Se++){let ft=ve[Se].image[ee].image;if(R){if(Y)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,ft.width,ft.height,Pe,Ne,ft.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,Oe,ft.width,ft.height,0,Pe,Ne,ft.data)}}else{if(R){if(Y)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,Ne,re[ee])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Pe,Ne,re[ee]);for(let Se=0;Se<ve.length;Se++){let ke=ve[Se];if(R){if(Y)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,Pe,Ne,ke.image[ee])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,Oe,Pe,Ne,ke.image[ee])}}}if(p(m))x(e.TEXTURE_CUBE_MAP);if(te.__version=Q.version,m.onUpdate)m.onUpdate(m)}_.__version=m.version}function Be(_,m,L,K,Q,te){let oe=a.convert(L.format,L.colorSpace),V=a.convert(L.type),J=M(L.internalFormat,oe,V,L.normalized,L.colorSpace),se=n.get(m),be=n.get(L);if(be.__renderTarget=m,!se.__hasExternalTextures){let re=Math.max(1,m.width>>te),le=Math.max(1,m.height>>te);if(Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY)i.texImage3D(Q,te,J,re,le,m.depth,0,oe,V,null);else i.texImage2D(Q,te,J,re,le,0,oe,V,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,_),qe(m))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,Q,be.__webglTexture,0,We(m));else if(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,K,Q,be.__webglTexture,te);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(_,m,L){if(e.bindRenderbuffer(e.RENDERBUFFER,_),m.depthBuffer){let K=m.depthTexture,Q=K&&K.isDepthTexture?K.type:null,te=P(m.stencilBuffer,Q),oe=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(qe(m))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,We(m),te,m.width,m.height);else if(L)e.renderbufferStorageMultisample(e.RENDERBUFFER,We(m),te,m.width,m.height);else e.renderbufferStorage(e.RENDERBUFFER,te,m.width,m.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,_)}else{let K=m.textures;for(let Q=0;Q<K.length;Q++){let te=K[Q],oe=a.convert(te.format,te.colorSpace),V=a.convert(te.type),J=M(te.internalFormat,oe,V,te.normalized,te.colorSpace);if(qe(m))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,We(m),J,m.width,m.height);else if(L)e.renderbufferStorageMultisample(e.RENDERBUFFER,We(m),J,m.width,m.height);else e.renderbufferStorage(e.RENDERBUFFER,J,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function tt(_,m,L){let K=m.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(m.depthTexture);if(Q.__renderTarget=m,!Q.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0;if(K){if(Q.__webglInit===void 0)Q.__webglInit=!0,m.depthTexture.addEventListener("dispose",I);if(Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),q(e.TEXTURE_CUBE_MAP,m.depthTexture);let se=a.convert(m.depthTexture.format),be=a.convert(m.depthTexture.type),re;if(m.depthTexture.format===Ui)re=e.DEPTH_COMPONENT24;else if(m.depthTexture.format===Bi)re=e.DEPTH24_STENCIL8;for(let le=0;le<6;le++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,re,m.width,m.height,0,se,be,null)}}else Z(m.depthTexture,0);let te=Q.__webglTexture,oe=We(m),V=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,J=m.depthTexture.format===Bi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===Ui)if(qe(m))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,V,te,0,oe);else e.framebufferTexture2D(e.FRAMEBUFFER,J,V,te,0);else if(m.depthTexture.format===Bi)if(qe(m))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,V,te,0,oe);else e.framebufferTexture2D(e.FRAMEBUFFER,J,V,te,0);else throw Error("Unknown depthTexture format")}function it(_){let m=n.get(_),L=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){let K=_.depthTexture;if(m.__depthDisposeCallback)m.__depthDisposeCallback();if(K){let Q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),m.__depthDisposeCallback=Q}m.__boundDepthTexture=K}if(_.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let K=0;K<6;K++)tt(m.__webglFramebuffer[K],_,K);else{let K=_.texture.mipmaps;if(K&&K.length>0)tt(m.__webglFramebuffer[0],_,0);else tt(m.__webglFramebuffer,_,0)}else if(L){m.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[K]),m.__webglDepthbuffer[K]===void 0)m.__webglDepthbuffer[K]=e.createRenderbuffer(),Ge(m.__webglDepthbuffer[K],_,!1);else{let Q=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,te)}}else{let K=_.texture.mipmaps;if(K&&K.length>0)i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer);if(m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Ge(m.__webglDepthbuffer,_,!1);else{let Q=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,te)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(_,m,L){let K=n.get(_);if(m!==void 0)Be(K.__webglFramebuffer,_,_.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(L!==void 0)it(_)}function vt(_){let m=_.texture,L=n.get(_),K=n.get(m);_.addEventListener("dispose",b);let Q=_.textures,te=_.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(!oe){if(K.__webglTexture===void 0)K.__webglTexture=e.createTexture();K.__version=m.version,s.memory.textures++}if(te){L.__webglFramebuffer=[];for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[V]=[];for(let J=0;J<m.mipmaps.length;J++)L.__webglFramebuffer[V][J]=e.createFramebuffer()}else L.__webglFramebuffer[V]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let V=0;V<m.mipmaps.length;V++)L.__webglFramebuffer[V]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(oe)for(let V=0,J=Q.length;V<J;V++){let se=n.get(Q[V]);if(se.__webglTexture===void 0)se.__webglTexture=e.createTexture(),s.memory.textures++}if(_.samples>0&&qe(_)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let V=0;V<Q.length;V++){let J=Q[V];L.__webglColorRenderbuffer[V]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[V]);let se=a.convert(J.format,J.colorSpace),be=a.convert(J.type),re=M(J.internalFormat,se,be,J.normalized,J.colorSpace,_.isXRRenderTarget===!0),le=We(_);e.renderbufferStorageMultisample(e.RENDERBUFFER,le,re,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+V,e.RENDERBUFFER,L.__webglColorRenderbuffer[V])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),_.depthBuffer)L.__webglDepthRenderbuffer=e.createRenderbuffer(),Ge(L.__webglDepthRenderbuffer,_,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),q(e.TEXTURE_CUBE_MAP,m);for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0)for(let J=0;J<m.mipmaps.length;J++)Be(L.__webglFramebuffer[V][J],_,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,J);else Be(L.__webglFramebuffer[V],_,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);if(p(m))x(e.TEXTURE_CUBE_MAP);i.unbindTexture()}else if(oe){for(let V=0,J=Q.length;V<J;V++){let se=Q[V],be=n.get(se),re=e.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)re=_.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(re,be.__webglTexture),q(re,se),Be(L.__webglFramebuffer,_,se,e.COLOR_ATTACHMENT0+V,re,0),p(se))x(re)}i.unbindTexture()}else{let V=e.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)V=_.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(V,K.__webglTexture),q(V,m),m.mipmaps&&m.mipmaps.length>0)for(let J=0;J<m.mipmaps.length;J++)Be(L.__webglFramebuffer[J],_,m,e.COLOR_ATTACHMENT0,V,J);else Be(L.__webglFramebuffer,_,m,e.COLOR_ATTACHMENT0,V,0);if(p(m))x(V);i.unbindTexture()}if(_.depthBuffer)it(_)}function xt(_){let m=_.textures;for(let L=0,K=m.length;L<K;L++){let Q=m[L];if(p(Q)){let te=A(_),oe=n.get(Q).__webglTexture;i.bindTexture(te,oe),x(te),i.unbindTexture()}}}let pt=[],D=[];function Et(_){if(_.samples>0){if(qe(_)===!1){let{textures:m,width:L,height:K}=_,Q=e.COLOR_BUFFER_BIT,te=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=n.get(_),V=m.length>1;if(V)for(let se=0;se<m.length;se++)i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let J=_.texture.mipmaps;if(J&&J.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let se=0;se<m.length;se++){if(_.resolveDepthBuffer){if(_.depthBuffer)Q|=e.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)Q|=e.STENCIL_BUFFER_BIT}if(V){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,oe.__webglColorRenderbuffer[se]);let be=n.get(m[se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,be,0)}if(e.blitFramebuffer(0,0,L,K,0,0,L,K,Q,e.NEAREST),l===!0){if(pt.length=0,D.length=0,pt.push(e.COLOR_ATTACHMENT0+se),_.depthBuffer&&_.resolveDepthBuffer===!1)pt.push(te),D.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,D);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pt)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),V)for(let se=0;se<m.length;se++){i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,oe.__webglColorRenderbuffer[se]);let be=n.get(m[se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,be,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let m=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function We(_){return Math.min(r.maxSamples,_.samples)}function qe(_){let m=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function de(_){let m=s.render.frame;if(u.get(_)!==m)u.set(_,m),_.update()}function ot(_,m){let{colorSpace:L,format:K,type:Q}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return m;if(L!==ss&&L!==zi)if(Ve.getTransfer(L)===at){if(K!==ii||Q!==jt)Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ie("WebGLTextures: Unsupported texture color space:",L);return m}function Ce(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)c.width=_.displayWidth,c.height=_.displayHeight;else c.width=_.width,c.height=_.height;return c}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=ne,this.setTexture3D=me,this.setTextureCube=Ae,this.rebindTextures=Fe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Lf(e,t){function i(n,r=zi){let a,s=Ve.getTransfer(r);if(n===jt)return e.UNSIGNED_BYTE;if(n===Ma)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return e.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===rl)return e.BYTE;if(n===al)return e.SHORT;if(n===kn)return e.UNSIGNED_SHORT;if(n===Sa)return e.INT;if(n===Ei)return e.UNSIGNED_INT;if(n===ui)return e.FLOAT;if(n===pi)return e.HALF_FLOAT;if(n===ll)return e.ALPHA;if(n===cl)return e.RGB;if(n===ii)return e.RGBA;if(n===Ui)return e.DEPTH_COMPONENT;if(n===Bi)return e.DEPTH_STENCIL;if(n===hl)return e.RED;if(n===Aa)return e.RED_INTEGER;if(n===Oi)return e.RG;if(n===Ea)return e.RG_INTEGER;if(n===Ca)return e.RGBA_INTEGER;if(n===vr||n===_r||n===xr||n===wr)if(s===at)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ia||n===Pa||n===Da)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===La||n===Na||n===Fa||n===Ua||n===Sr||n===Ba)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ka||n===La)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Na)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fa)return a.COMPRESSED_R11_EAC;if(n===Ua)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Sr)return a.COMPRESSED_RG11_EAC;if(n===Ba)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Ja||n===$a||n===ja||n===Ka||n===Za)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Oa)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===es||n===ts)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Qa)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===es)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ts)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===is||n===ns||n===Mr||n===rs)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===is)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ns)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===gn)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var Nf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ff=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lr(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Lt({vertexShader:Nf,fragmentShader:Ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Bn(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oc extends fi{constructor(e,t){super();let i=this,n=null,r=1,a=null,s="local-floor",o=1,l=null,c=null,u=null,f=null,h=null,g=null,v=typeof XRWebGLBinding<"u",w=new sc,d={},p=t.getContextAttributes(),x=null,A=null,M=[],P=[],C=new Ze,I=null,b=new Ct;b.viewport=new ct;let S=new Ct;S.viewport=new ct;let X=[b,S],E=new Ds,G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=M[q];if(pe===void 0)pe=new Fn,M[q]=pe;return pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=M[q];if(pe===void 0)pe=new Fn,M[q]=pe;return pe.getGripSpace()},this.getHand=function(q){let pe=M[q];if(pe===void 0)pe=new Fn,M[q]=pe;return pe.getHandSpace()};function N(q){let pe=P.indexOf(q.inputSource);if(pe===-1)return;let we=M[pe];if(we!==void 0)we.update(q.inputSource,q.frame,l||a),we.dispatchEvent({type:q.type,data:q.inputSource})}function W(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",O);for(let q=0;q<M.length;q++){let pe=P[q];if(pe===null)continue;P[q]=null,M[q].disconnect(pe)}G=null,j=null,w.reset();for(let q in d)delete d[q];e.setRenderTarget(x),h=null,f=null,u=null,n=null,A=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(r=q,i.isPresenting===!0)Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(s=q,i.isPresenting===!0)Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&v)u=new XRWebGLBinding(n,t);return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",W),n.addEventListener("inputsourceschange",O),p.xrCompatible!==!0)await t.makeXRCompatible();if(I=e.getPixelRatio(),e.getSize(C),!(v&&("createProjectionLayer"in XRWebGLBinding.prototype))){let we={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,we),n.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new Gt(h.framebufferWidth,h.framebufferHeight,{format:ii,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let we=null,fe=null,Ee=null;if(p.depth)Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=p.stencil?Bi:Ui,fe=p.stencil?gn:Ei;let Je={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Je),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Gt(f.textureWidth,f.textureHeight,{format:ii,type:jt,depthTexture:new Ci(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await n.requestReferenceSpace(s),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function O(q){for(let pe=0;pe<q.removed.length;pe++){let we=q.removed[pe],fe=P.indexOf(we);if(fe>=0)P[fe]=null,M[fe].disconnect(we)}for(let pe=0;pe<q.added.length;pe++){let we=q.added[pe],fe=P.indexOf(we);if(fe===-1){for(let Je=0;Je<M.length;Je++)if(Je>=P.length){P.push(we),fe=Je;break}else if(P[Je]===null){P[Je]=we,fe=Je;break}if(fe===-1)break}let Ee=M[fe];if(Ee)Ee.connect(we)}}let H=new U,Z=new U;function ne(q,pe,we){H.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(we.matrixWorld);let fe=H.distanceTo(Z),Ee=pe.projectionMatrix.elements,Je=we.projectionMatrix.elements,Be=Ee[14]/(Ee[10]-1),Ge=Ee[14]/(Ee[10]+1),tt=(Ee[9]+1)/Ee[5],it=(Ee[9]-1)/Ee[5],Fe=(Ee[8]-1)/Ee[0],vt=(Je[8]+1)/Je[0],xt=Be*Fe,pt=Be*vt,D=fe/(-Fe+vt),Et=D*-Fe;if(pe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Et),q.translateZ(D),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let We=Be+D,qe=Ge+D,de=xt-Et,ot=pt+(fe-Et),Ce=tt*Ge/qe*We,_=it*Ge/qe*We;q.projectionMatrix.makePerspective(de,ot,Ce,_,We,qe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,pe){if(pe===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let{near:pe,far:we}=q;if(w.texture!==null){if(w.depthNear>0)pe=w.depthNear;if(w.depthFar>0)we=w.depthFar}if(E.near=S.near=b.near=pe,E.far=S.far=b.far=we,G!==E.near||j!==E.far)n.updateRenderState({depthNear:E.near,depthFar:E.far}),G=E.near,j=E.far;E.layers.mask=q.layers.mask|6,b.layers.mask=E.layers.mask&-5,S.layers.mask=E.layers.mask&-3;let fe=q.parent,Ee=E.cameras;me(E,fe);for(let Je=0;Je<Ee.length;Je++)me(Ee[Je],fe);if(Ee.length===2)ne(E,b,S);else E.projectionMatrix.copy(b.projectionMatrix);Ae(q,E,fe)};function Ae(q,pe,we){if(we===null)q.matrix.copy(pe.matrixWorld);else q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return E},this.getFoveation=function(){if(f===null&&h===null)return;return o},this.setFoveation=function(q){if(o=q,f!==null)f.fixedFoveation=q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=q},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)},this.getCameraTexture=function(q){return d[q]};let _e=null;function je(q,pe){if(c=pe.getViewerPose(l||a),g=pe,c!==null){let we=c.views;if(h!==null)e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A);let fe=!1;if(we.length!==E.cameras.length)E.cameras.length=0,fe=!0;for(let Ge=0;Ge<we.length;Ge++){let tt=we[Ge],it=null;if(h!==null)it=h.getViewport(tt);else{let vt=u.getViewSubImage(f,tt);if(it=vt.viewport,Ge===0)e.setRenderTargetTextures(A,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(A)}let Fe=X[Ge];if(Fe===void 0)Fe=new Ct,Fe.layers.enable(Ge),Fe.viewport=new ct,X[Ge]=Fe;if(Fe.matrix.fromArray(tt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(tt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(it.x,it.y,it.width,it.height),Ge===0)E.matrix.copy(Fe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale);if(fe===!0)E.cameras.push(Fe)}let Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Ge=u.getDepthInformation(we[0]);if(Ge&&Ge.isValid&&Ge.texture)w.init(Ge,n.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ge=0;Ge<we.length;Ge++){let tt=we[Ge].camera;if(tt){let it=d[tt];if(!it)it=new Lr,d[tt]=it;let Fe=u.getCameraImage(tt);it.sourceTexture=Fe}}}}for(let we=0;we<M.length;we++){let fe=P[we],Ee=M[we];if(fe!==null&&Ee!==void 0)Ee.update(fe,pe,l||a)}if(_e)_e(q,pe);if(pe.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:pe});g=null}let He=new $l;He.setAnimationLoop(je),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}var Uf=new ut,lc=new De;lc.set(-1,0,0,0,1,0,0,0,1);function Bf(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,ys(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,x,A,M){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)a(d,p);else if(p.isMeshLambertMaterial){if(a(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)a(d,p),f(d,p);else if(p.isMeshPhongMaterial){if(a(d,p),u(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(a(d,p),h(d,p),p.isMeshPhysicalMaterial)g(d,p,M)}else if(p.isMeshMatcapMaterial)a(d,p),v(d,p);else if(p.isMeshDepthMaterial)a(d,p);else if(p.isMeshDistanceMaterial)a(d,p),w(d,p);else if(p.isMeshNormalMaterial)a(d,p);else if(p.isLineBasicMaterial){if(s(d,p),p.isLineDashedMaterial)o(d,p)}else if(p.isPointsMaterial)l(d,p,x,A);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function a(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Pt)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Pt)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let x=t.get(p),{envMap:A,envMapRotation:M}=x;if(A){if(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(lc);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function s(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,x,A){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=A*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function f(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function h(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function g(d,p,x){if(d.ior.value=p.ior,p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function v(d,p){if(p.matcap)d.matcap.value=p.matcap}function w(d,p){let x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Of(e,t,i,n){let r={},a={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let M=A.program;n.uniformBlockBinding(x,M)}function c(x,A){let M=r[x.id];if(M===void 0)v(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",d);let P=A.program;n.updateUBOMapping(x,P);let C=t.render.frame;if(a[x.id]!==C)h(x),a[x.id]=C}function u(x){let A=f();x.__bindingPointIndex=A;let M=e.createBuffer(),{__size:P,usage:C}=x;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,P,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,M),M}function f(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let A=r[x.id],{uniforms:M,__cache:P}=x;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let C=0,I=M.length;C<I;C++){let b=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,X=b.length;S<X;S++){let E=b[S];if(g(E,C,S,P)===!0){let G=E.__offset,j=Array.isArray(E.value)?E.value:[E.value],N=0;for(let W=0;W<j.length;W++){let O=j[W],H=w(O);if(typeof O==="number"||typeof O==="boolean")E.__data[0]=O,e.bufferSubData(e.UNIFORM_BUFFER,G+N,E.__data);else if(O.isMatrix3)E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0;else if(ArrayBuffer.isView(O))E.__data.set(new O.constructor(O.buffer,O.byteOffset,E.__data.length));else O.toArray(E.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,G,E.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(x,A,M,P){let C=x.value,I=A+"_"+M;if(P[I]===void 0){if(typeof C==="number"||typeof C==="boolean")P[I]=C;else if(ArrayBuffer.isView(C))P[I]=C.slice();else P[I]=C.clone();return!0}else{let b=P[I];if(typeof C==="number"||typeof C==="boolean"){if(b!==C)return P[I]=C,!0}else if(ArrayBuffer.isView(C))return!0;else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(x){let A=x.uniforms,M=0,P=16;for(let I=0,b=A.length;I<b;I++){let S=Array.isArray(A[I])?A[I]:[A[I]];for(let X=0,E=S.length;X<E;X++){let G=S[X],j=Array.isArray(G.value)?G.value:[G.value];for(let N=0,W=j.length;N<W;N++){let O=j[N],H=w(O),Z=M%P,ne=Z%H.boundary,me=Z+ne;if(M+=ne,me!==0&&P-me<H.storage)M+=P-me;G.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=H.storage}}}let C=M%P;if(C>0)M+=P-C;return x.__size=M,x.__cache={},this}function w(x){let A={boundary:0,storage:0};if(typeof x==="number"||typeof x==="boolean")A.boundary=4,A.storage=4;else if(x.isVector2)A.boundary=8,A.storage=8;else if(x.isVector3||x.isColor)A.boundary=16,A.storage=12;else if(x.isVector4)A.boundary=16,A.storage=16;else if(x.isMatrix3)A.boundary=48,A.storage=48;else if(x.isMatrix4)A.boundary=64,A.storage=64;else if(x.isTexture)Re("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(x))A.boundary=16,A.storage=x.byteLength;else Re("WebGLRenderer: Unsupported uniform value type.",x);return A}function d(x){let A=x.target;A.removeEventListener("dispose",d);let M=s.indexOf(A.__bindingPointIndex);s.splice(M,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function p(){for(let x in r)e.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}var zf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Hf(){if(ni===null)ni=new ms(zf,16,16,Oi,pi),ni.name="DFG_LUT",ni.minFilter=Dt,ni.magFilter=Dt,ni.wrapS=yr,ni.wrapT=yr,ni.generateMipmaps=!1,ni.needsUpdate=!0;return ni}class qs{constructor(e={}){let{canvas:t=vl(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=jt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=h,w=new Set([Ca,Ea,Aa]),d=new Set([jt,Ei,kn,gn,Ma,Ta]),p=new Uint32Array(4),x=new Int32Array(4),A=new U,M=null,P=null,C=[],I=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$t,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,X=!1,E=null;this._outputColorSpace=ul;let G=0,j=0,N=null,W=-1,O=null,H=new ct,Z=new ct,ne=null,me=new $e(0),Ae=0,{width:_e,height:je}=t,He=1,q=null,pe=null,we=new ct(0,0,_e,je),fe=new ct(0,0,_e,je),Ee=!1,Je=new Dr,Be=!1,Ge=!1,tt=new ut,it=new U,Fe=new ct,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function pt(){return N===null?He:1}let D=i;function Et(y,k){return t.getContext(y,k)}try{let y={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${xo}`);if(t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),D===null){if(D=Et("webgl2",y),D===null)if(Et("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(y){throw Ie("WebGLRenderer: "+y.message),y}let We,qe,de,ot,Ce,_,m,L,K,Q,te,oe,V,J,se,be,re,le,Pe,Ne,Oe,R,ae;function Y(){if(We=new qu(D),We.init(),Oe=new Lf(D,We),qe=new Ou(D,We,e,Oe),de=new Df(D,We),qe.reversedDepthBuffer&&f)de.buffers.depth.setReversed(!0);ot=new ju(D),Ce=new bf,_=new kf(D,We,de,Ce,qe,Oe,ot),m=new Yu(S),L=new eh(D),R=new Uu(D,L),K=new Ju(D,L,ot,R),Q=new Zu(D,K,L,R,ot),le=new Ku(D,qe,_),se=new zu(Ce),te=new yf(S,m,We,qe,R,se),oe=new Bf(S,Ce),V=new _f,J=new Af(We),re=new Fu(S,m,de,Q,g,o),be=new Pf(S,Q,qe),ae=new Of(D,ot,qe,de),Pe=new Bu(D,We,ot),Ne=new $u(D,We,ot),ot.programs=te.programs,S.capabilities=qe,S.extensions=We,S.properties=Ce,S.renderLists=V,S.shadowMap=be,S.state=de,S.info=ot}if(Y(),v!==jt)b=new ep(v,t.width,t.height,n,r);let ie=new oc(S,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=We.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=We.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(y){if(y===void 0)return;He=y,this.setSize(_e,je,!1)},this.getSize=function(y){return y.set(_e,je)},this.setSize=function(y,k,z=!0){if(ie.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}if(_e=y,je=k,t.width=Math.floor(y*He),t.height=Math.floor(k*He),z===!0)t.style.width=y+"px",t.style.height=k+"px";if(b!==null)b.setSize(t.width,t.height);this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(_e*He,je*He).floor()},this.setDrawingBufferSize=function(y,k,z){_e=y,je=k,He=z,t.width=Math.floor(y*z),t.height=Math.floor(k*z),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(v===jt){Ie("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,k,z,F){if(y.isVector4)we.set(y.x,y.y,y.z,y.w);else we.set(y,k,z,F);de.viewport(H.copy(we).multiplyScalar(He).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,k,z,F){if(y.isVector4)fe.set(y.x,y.y,y.z,y.w);else fe.set(y,k,z,F);de.scissor(Z.copy(fe).multiplyScalar(He).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(y){de.setScissorTest(Ee=y)},this.setOpaqueSort=function(y){q=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,z=!0){let F=0;if(y){let B=!1;if(N!==null){let ue=N.texture.format;B=w.has(ue)}if(B){let ue=N.texture.type,ye=d.has(ue),he=re.getClearColor(),xe=re.getClearAlpha(),{r:Me,g:Le,b:ze}=he;if(ye)p[0]=Me,p[1]=Le,p[2]=ze,p[3]=xe,D.clearBufferuiv(D.COLOR,0,p);else x[0]=Me,x[1]=Le,x[2]=ze,x[3]=xe,D.clearBufferiv(D.COLOR,0,x)}else F|=D.COLOR_BUFFER_BIT}if(k)F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(z)F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),E=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),re.dispose(),V.dispose(),J.dispose(),Ce.dispose(),m.dispose(),Q.dispose(),R.dispose(),ae.dispose(),te.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Js),ie.removeEventListener("sessionend",$s),Ii.stop()};function ve(y){y.preventDefault(),hs("WebGLRenderer: Context Lost."),X=!0}function ee(){hs("WebGLRenderer: Context Restored."),X=!1;let y=ot.autoReset,k=be.enabled,z=be.autoUpdate,F=be.needsUpdate,B=be.type;Y(),ot.autoReset=y,be.enabled=k,be.autoUpdate=z,be.needsUpdate=F,be.type=B}function Se(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){let k=y.target;k.removeEventListener("dispose",ke),ft(k)}function ft(y){Qe(y),Ce.remove(y)}function Qe(y){let k=Ce.get(y).programs;if(k!==void 0){if(k.forEach(function(z){te.releaseProgram(z)}),y.isShaderMaterial)te.releaseShaderCache(y)}}this.renderBufferDirect=function(y,k,z,F,B,ue){if(k===null)k=vt;let ye=B.isMesh&&B.matrixWorld.determinant()<0,he=mc(y,k,z,F,B);de.setMaterial(F,ye);let xe=z.index,Me=1;if(F.wireframe===!0){if(xe=K.getWireframeAttribute(z),xe===void 0)return;Me=2}let Le=z.drawRange,ze=z.attributes.position,Te=Le.start*Me,et=(Le.start+Le.count)*Me;if(ue!==null)Te=Math.max(Te,ue.start*Me),et=Math.min(et,(ue.start+ue.count)*Me);if(xe!==null)Te=Math.max(Te,0),et=Math.min(et,xe.count);else if(ze!==void 0&&ze!==null)Te=Math.max(Te,0),et=Math.min(et,ze.count);let ht=et-Te;if(ht<0||ht===1/0)return;R.setup(B,F,he,z,xe);let lt,nt=Pe;if(xe!==null)lt=L.get(xe),nt=Ne,nt.setIndex(lt);if(B.isMesh)if(F.wireframe===!0)de.setLineWidth(F.wireframeLinewidth*pt()),nt.setMode(D.LINES);else nt.setMode(D.TRIANGLES);else if(B.isLine){let wt=F.linewidth;if(wt===void 0)wt=1;if(de.setLineWidth(wt*pt()),B.isLineSegments)nt.setMode(D.LINES);else if(B.isLineLoop)nt.setMode(D.LINE_LOOP);else nt.setMode(D.LINE_STRIP)}else if(B.isPoints)nt.setMode(D.POINTS);else if(B.isSprite)nt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(!We.get("WEBGL_multi_draw")){let{_multiDrawStarts:wt,_multiDrawCounts:ge,_multiDrawCount:Nt}=B,Ye=xe?L.get(xe).bytesPerElement:1,Bt=Ce.get(F).currentProgram.getUniforms();for(let Zt=0;Zt<Nt;Zt++)Bt.setValue(D,"_gl_DrawID",Zt),nt.render(wt[Zt]/Ye,ge[Zt])}else nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)nt.renderInstances(Te,ht,B.count);else if(z.isInstancedBufferGeometry){let wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ge=Math.min(z.instanceCount,wt);nt.renderInstances(Te,ht,ge)}else nt.render(Te,ht)};function Kt(y,k,z){if(y.transparent===!0&&y.side===ei&&y.forceSinglePass===!1)y.side=Pt,y.needsUpdate=!0,Yn(y,k,z),y.side=un,y.needsUpdate=!0,Yn(y,k,z),y.side=ei;else Yn(y,k,z)}this.compile=function(y,k,z=null){if(z===null)z=y;if(P=J.get(z),P.init(k),I.push(P),z.traverseVisible(function(B){if(B.isLight&&B.layers.test(k.layers)){if(P.pushLight(B),B.castShadow)P.pushShadow(B)}}),y!==z)y.traverseVisible(function(B){if(B.isLight&&B.layers.test(k.layers)){if(P.pushLight(B),B.castShadow)P.pushShadow(B)}});P.setupLights();let F=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ue=B.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let he=ue[ye];Kt(he,z,B),F.add(he)}else Kt(ue,z,B),F.add(ue)}),P=I.pop(),F},this.compileAsync=function(y,k,z=null){let F=this.compile(y,k,z);return new Promise((B)=>{function ue(){if(F.forEach(function(ye){if(Ce.get(ye).currentProgram.isReady())F.delete(ye)}),F.size===0){B(y);return}setTimeout(ue,10)}if(We.get("KHR_parallel_shader_compile")!==null)ue();else setTimeout(ue,10)})};let Xt=null;function pc(y){if(Xt)Xt(y)}function Js(){Ii.stop()}function $s(){Ii.start()}let Ii=new $l;if(Ii.setAnimationLoop(pc),typeof self<"u")Ii.setContext(self);this.setAnimationLoop=function(y){Xt=y,ie.setAnimationLoop(y),y===null?Ii.stop():Ii.start()},ie.addEventListener("sessionstart",Js),ie.addEventListener("sessionend",$s),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(E!==null)E.renderStart(y,k);let z=ie.enabled===!0&&ie.isPresenting===!0,F=b!==null&&(N===null||z)&&b.begin(S,N);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(k.parent===null&&k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(ie.enabled===!0&&ie.isPresenting===!0&&(b===null||b.isCompositing()===!1)){if(ie.cameraAutoUpdate===!0)ie.updateCamera(k);k=ie.getCamera()}if(y.isScene===!0)y.onBeforeRender(S,y,k,N);if(P=J.get(y,I.length),P.init(k),P.state.textureUnits=_.getTextureUnits(),I.push(P),tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Je.setFromProjectionMatrix(tt,cs,k.reversedDepth),Ge=this.localClippingEnabled,Be=se.init(this.clippingPlanes,Ge),M=V.get(y,C.length),M.init(),C.push(M),ie.enabled===!0&&ie.isPresenting===!0){let ye=S.xr.getDepthSensingMesh();if(ye!==null)Gr(ye,k,-1/0,S.sortObjects)}if(Gr(y,k,0,S.sortObjects),M.finish(),S.sortObjects===!0)M.sort(q,pe);if(xt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,xt)re.addToRenderList(M,y);if(this.info.render.frame++,Be===!0)se.beginShadows();let B=P.state.shadowsArray;if(be.render(B,y,k),Be===!0)se.endShadows();if(this.info.autoReset===!0)this.info.reset();if((F&&b.hasRenderPass())===!1){let ye=M.opaque,he=M.transmissive;if(P.setupLights(),k.isArrayCamera){let xe=k.cameras;if(he.length>0)for(let Me=0,Le=xe.length;Me<Le;Me++){let ze=xe[Me];Ks(ye,he,y,ze)}if(xt)re.render(y);for(let Me=0,Le=xe.length;Me<Le;Me++){let ze=xe[Me];js(M,y,ze,ze.viewport)}}else{if(he.length>0)Ks(ye,he,y,k);if(xt)re.render(y);js(M,y,k)}}if(N!==null&&j===0)_.updateMultisampleRenderTarget(N),_.updateRenderTargetMipmap(N);if(F)b.end(S);if(y.isScene===!0)y.onAfterRender(S,y,k);if(R.resetDefaultState(),W=-1,O=null,I.pop(),I.length>0){if(P=I[I.length-1],_.setTextureUnits(P.state.textureUnits),Be===!0)se.setGlobalState(S.clippingPlanes,P.state.camera)}else P=null;if(C.pop(),C.length>0)M=C[C.length-1];else M=null;if(E!==null)E.renderEnd()};function Gr(y,k,z,F){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(k)}else if(y.isLightProbeGrid)P.pushLightProbeGrid(y);else if(y.isLight){if(P.pushLight(y),y.castShadow)P.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||Je.intersectsSprite(y)){if(F)Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);let ye=Q.update(y),he=y.material;if(he.visible)M.push(y,ye,he,z,Fe.z,null)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||Je.intersectsObject(y)){let ye=Q.update(y),he=y.material;if(F){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();Fe.copy(y.boundingSphere.center)}else{if(ye.boundingSphere===null)ye.computeBoundingSphere();Fe.copy(ye.boundingSphere.center)}Fe.applyMatrix4(y.matrixWorld).applyMatrix4(tt)}if(Array.isArray(he)){let xe=ye.groups;for(let Me=0,Le=xe.length;Me<Le;Me++){let ze=xe[Me],Te=he[ze.materialIndex];if(Te&&Te.visible)M.push(y,ye,Te,z,Fe.z,ze)}}else if(he.visible)M.push(y,ye,he,z,Fe.z,null)}}}let ue=y.children;for(let ye=0,he=ue.length;ye<he;ye++)Gr(ue[ye],k,z,F)}function js(y,k,z,F){let{opaque:B,transmissive:ue,transparent:ye}=y;if(P.setupLightsView(z),Be===!0)se.setGlobalState(S.clippingPlanes,z);if(F)de.viewport(H.copy(F));if(B.length>0)Xn(B,k,z);if(ue.length>0)Xn(ue,k,z);if(ye.length>0)Xn(ye,k,z);de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ks(y,k,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[F.id]===void 0){let Te=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[F.id]=new Gt(1,1,{generateMipmaps:!0,type:Te?pi:jt,minFilter:Fi,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let ue=P.state.transmissionRenderTarget[F.id],ye=F.viewport||H;ue.setSize(ye.z*S.transmissionResolutionScale,ye.w*S.transmissionResolutionScale);let he=S.getRenderTarget(),xe=S.getActiveCubeFace(),Me=S.getActiveMipmapLevel();if(S.setRenderTarget(ue),S.getClearColor(me),Ae=S.getClearAlpha(),Ae<1)S.setClearColor(16777215,0.5);if(S.clear(),xt)re.render(z);let Le=S.toneMapping;S.toneMapping=$t;let ze=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(P.setupLightsView(F),Be===!0)se.setGlobalState(S.clippingPlanes,F);if(Xn(y,z,F),_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue),We.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let et=0,ht=k.length;et<ht;et++){let lt=k[et],{object:nt,geometry:wt,material:ge,group:Nt}=lt;if(ge.side===ei&&nt.layers.test(F.layers)){let Ye=ge.side;ge.side=Pt,ge.needsUpdate=!0,Zs(nt,z,F,wt,ge,Nt),ge.side=Ye,ge.needsUpdate=!0,Te=!0}}if(Te===!0)_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue)}if(S.setRenderTarget(he,xe,Me),S.setClearColor(me,Ae),ze!==void 0)F.viewport=ze;S.toneMapping=Le}function Xn(y,k,z){let F=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ue=y.length;B<ue;B++){let ye=y[B],{object:he,geometry:xe,group:Me}=ye,Le=ye.material;if(Le.allowOverride===!0&&F!==null)Le=F;if(he.layers.test(z.layers))Zs(he,k,z,xe,Le,Me)}}function Zs(y,k,z,F,B,ue){if(y.onBeforeRender(S,k,z,F,B,ue),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(S,k,z,F,y,ue),B.transparent===!0&&B.side===ei&&B.forceSinglePass===!1)B.side=Pt,B.needsUpdate=!0,S.renderBufferDirect(z,k,F,B,y,ue),B.side=un,B.needsUpdate=!0,S.renderBufferDirect(z,k,F,B,y,ue),B.side=ei;else S.renderBufferDirect(z,k,F,B,y,ue);y.onAfterRender(S,k,z,F,B,ue)}function Yn(y,k,z){if(k.isScene!==!0)k=vt;let F=Ce.get(y),B=P.state.lights,ue=P.state.shadowsArray,ye=B.state.version,he=te.getParameters(y,B.state,ue,k,z,P.state.lightProbeGridArray),xe=te.getProgramCacheKey(he),Me=F.programs;F.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,F.fog=k.fog;let Le=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(F.envMap=m.get(y.envMap||F.environment,Le),F.envMapRotation=F.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Me===void 0)y.addEventListener("dispose",ke),Me=new Map,F.programs=Me;let ze=Me.get(xe);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===ye)return eo(y,he),ze}else{if(he.uniforms=te.getUniforms(y),E!==null&&y.isNodeMaterial)E.build(y,z,he);y.onBeforeCompile(he,S),ze=te.acquireProgram(he,xe),Me.set(xe,ze),F.uniforms=he.uniforms}let Te=F.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)Te.clippingPlanes=se.uniform;if(eo(y,he),F.needsLights=yc(y),F.lightsStateVersion=ye,F.needsLights)Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix;return F.lightProbeGrid=P.state.lightProbeGridArray.length>0,F.currentProgram=ze,F.uniformsList=null,ze}function Qs(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=Wn.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function eo(y,k){let z=Ce.get(y);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.batchingColor=k.batchingColor,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.instancingMorph=k.instancingMorph,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function fc(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;A.setFromMatrixPosition(k.matrixWorld);for(let z=0,F=y.length;z<F;z++){let B=y[z];if(B.texture!==null&&B.boundingBox.containsPoint(A))return B}return null}function mc(y,k,z,F,B){if(k.isScene!==!0)k=vt;_.resetTextureUnits();let ue=k.fog,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?k.environment:null,he=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ve.workingColorSpace,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Me=m.get(F.envMap||ye,xe),Le=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,ht=!!z.morphAttributes.color,lt=$t;if(F.toneMapped){if(N===null||N.isXRRenderTarget===!0)lt=S.toneMapping}let nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=nt!==void 0?nt.length:0,ge=Ce.get(F),Nt=P.state.lights;if(Be===!0){if(Ge===!0||y!==O){let st=y===O&&F.id===W;se.setState(F,y,st)}}let Ye=!1;if(F.version===ge.__version){if(ge.needsLights&&ge.lightsStateVersion!==Nt.state.version)Ye=!0;else if(ge.outputColorSpace!==he)Ye=!0;else if(B.isBatchedMesh&&ge.batching===!1)Ye=!0;else if(!B.isBatchedMesh&&ge.batching===!0)Ye=!0;else if(B.isBatchedMesh&&ge.batchingColor===!0&&B.colorTexture===null)Ye=!0;else if(B.isBatchedMesh&&ge.batchingColor===!1&&B.colorTexture!==null)Ye=!0;else if(B.isInstancedMesh&&ge.instancing===!1)Ye=!0;else if(!B.isInstancedMesh&&ge.instancing===!0)Ye=!0;else if(B.isSkinnedMesh&&ge.skinning===!1)Ye=!0;else if(!B.isSkinnedMesh&&ge.skinning===!0)Ye=!0;else if(B.isInstancedMesh&&ge.instancingColor===!0&&B.instanceColor===null)Ye=!0;else if(B.isInstancedMesh&&ge.instancingColor===!1&&B.instanceColor!==null)Ye=!0;else if(B.isInstancedMesh&&ge.instancingMorph===!0&&B.morphTexture===null)Ye=!0;else if(B.isInstancedMesh&&ge.instancingMorph===!1&&B.morphTexture!==null)Ye=!0;else if(ge.envMap!==Me)Ye=!0;else if(F.fog===!0&&ge.fog!==ue)Ye=!0;else if(ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==se.numPlanes||ge.numIntersection!==se.numIntersection))Ye=!0;else if(ge.vertexAlphas!==Le)Ye=!0;else if(ge.vertexTangents!==ze)Ye=!0;else if(ge.morphTargets!==Te)Ye=!0;else if(ge.morphNormals!==et)Ye=!0;else if(ge.morphColors!==ht)Ye=!0;else if(ge.toneMapping!==lt)Ye=!0;else if(ge.morphTargetsCount!==wt)Ye=!0;else if(!!ge.lightProbeGrid!==P.state.lightProbeGridArray.length>0)Ye=!0}else Ye=!0,ge.__version=F.version;let Bt=ge.currentProgram;if(Ye===!0){if(Bt=Yn(F,k,B),E&&F.isNodeMaterial)E.onUpdateProgram(F,Bt,ge)}let Zt=!1,gi=!1,qi=!1,rt=Bt.getUniforms(),dt=ge.uniforms;if(de.useProgram(Bt.program))Zt=!0,gi=!0,qi=!0;if(F.id!==W)W=F.id,gi=!0;if(ge.needsLights){let st=fc(P.state.lightProbeGridArray,B);if(ge.lightProbeGrid!==st)ge.lightProbeGrid=st,gi=!0}if(Zt||O!==y){if(de.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();rt.setValue(D,"projectionMatrix",y.projectionMatrix),rt.setValue(D,"viewMatrix",y.matrixWorldInverse);let bi=rt.map.cameraPosition;if(bi!==void 0)bi.setValue(D,it.setFromMatrixPosition(y.matrixWorld));if(qe.logarithmicDepthBuffer)rt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)rt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0);if(O!==y)O=y,gi=!0,qi=!0}if(ge.needsLights){if(Nt.state.directionalShadowMap.length>0)rt.setValue(D,"directionalShadowMap",Nt.state.directionalShadowMap,_);if(Nt.state.spotShadowMap.length>0)rt.setValue(D,"spotShadowMap",Nt.state.spotShadowMap,_);if(Nt.state.pointShadowMap.length>0)rt.setValue(D,"pointShadowMap",Nt.state.pointShadowMap,_)}if(B.isSkinnedMesh){rt.setOptional(D,B,"bindMatrix"),rt.setOptional(D,B,"bindMatrixInverse");let st=B.skeleton;if(st){if(st.boneTexture===null)st.computeBoneTexture();rt.setValue(D,"boneTexture",st.boneTexture,_)}}if(B.isBatchedMesh){if(rt.setOptional(D,B,"batchingTexture"),rt.setValue(D,"batchingTexture",B._matricesTexture,_),rt.setOptional(D,B,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",B._indirectTexture,_),rt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null)rt.setValue(D,"batchingColorTexture",B._colorsTexture,_)}let yi=z.morphAttributes;if(yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)le.update(B,z,Bt);if(gi||ge.receiveShadow!==B.receiveShadow)ge.receiveShadow=B.receiveShadow,rt.setValue(D,"receiveShadow",B.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&k.environment!==null)dt.envMapIntensity.value=k.environmentIntensity;if(dt.dfgLUT!==void 0)dt.dfgLUT.value=Hf();if(gi){if(rt.setValue(D,"toneMappingExposure",S.toneMappingExposure),ge.needsLights)gc(dt,qi);if(ue&&F.fog===!0)oe.refreshFogUniforms(dt,ue);if(oe.refreshMaterialUniforms(dt,F,He,je,P.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){let st=ge.lightProbeGrid;dt.probesSH.value=st.texture,dt.probesMin.value.copy(st.boundingBox.min),dt.probesMax.value.copy(st.boundingBox.max),dt.probesResolution.value.copy(st.resolution)}Wn.upload(D,Qs(ge),dt,_)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)Wn.upload(D,Qs(ge),dt,_),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)rt.setValue(D,"center",B.center);if(rt.setValue(D,"modelViewMatrix",B.modelViewMatrix),rt.setValue(D,"normalMatrix",B.normalMatrix),rt.setValue(D,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let st=F.uniformsGroups;for(let bi=0,Ji=st.length;bi<Ji;bi++){let to=st[bi];ae.update(to,Bt),ae.bind(to,Bt)}}return Bt}function gc(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function yc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,k,z){let F=Ce.get(y);if(F.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;Ce.get(y.texture).__webglTexture=k,Ce.get(y.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){let z=Ce.get(y);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0};let bc=D.createFramebuffer();this.setRenderTarget=function(y,k=0,z=0){N=y,G=k,j=z;let F=null,B=!1,ue=!1;if(y){let he=Ce.get(y);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),H.copy(y.viewport),Z.copy(y.scissor),ne=y.scissorTest,de.viewport(H),de.scissor(Z),de.setScissorTest(ne),W=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(he.__hasExternalTextures)_.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Le=y.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&Ce.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let xe=y.texture;if(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)ue=!0;let Me=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Me[k]))F=Me[k][z];else F=Me[k];B=!0}else if(y.samples>0&&_.useMultisampledRTT(y)===!1)F=Ce.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Me))F=Me[z];else F=Me;H.copy(y.viewport),Z.copy(y.scissor),ne=y.scissorTest}else H.copy(we).multiplyScalar(He).floor(),Z.copy(fe).multiplyScalar(He).floor(),ne=Ee;if(z!==0)F=bc;if(de.bindFramebuffer(D.FRAMEBUFFER,F))de.drawBuffers(y,F);if(de.viewport(H),de.scissor(Z),de.setScissorTest(ne),B){let he=Ce.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,z)}else if(ue){let he=k;for(let xe=0;xe<y.textures.length;xe++){let Me=Ce.get(y.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,Me.__webglTexture,z,he)}}else if(y!==null&&z!==0){let he=Ce.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,z)}W=-1},this.readRenderTargetPixels=function(y,k,z,F,B,ue,ye,he=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0)xe=xe[ye];if(xe){de.bindFramebuffer(D.FRAMEBUFFER,xe);try{let Me=y.textures[he],{format:Le,type:ze}=Me;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+he);if(!qe.textureFormatReadable(Le)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ze)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(k>=0&&k<=y.width-F&&(z>=0&&z<=y.height-B))D.readPixels(k,z,F,B,Oe.convert(Le),Oe.convert(ze),ue)}finally{let Me=N!==null?Ce.get(N).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,k,z,F,B,ue,ye,he=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0)xe=xe[ye];if(xe)if(k>=0&&k<=y.width-F&&(z>=0&&z<=y.height-B)){de.bindFramebuffer(D.FRAMEBUFFER,xe);let Me=y.textures[he],{format:Le,type:ze}=Me;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+he);if(!qe.textureFormatReadable(Le))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ze))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(k,z,F,B,Oe.convert(Le),Oe.convert(ze),0);let et=N!==null?Ce.get(N).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,et);let ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xl(D,ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Te),D.deleteSync(ht),ue}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,z=0){let F=Math.pow(2,-z),B=Math.floor(y.image.width*F),ue=Math.floor(y.image.height*F),ye=k!==null?k.x:0,he=k!==null?k.y:0;_.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ye,he,B,ue),de.unbindTexture()};let vc=D.createFramebuffer(),_c=D.createFramebuffer();if(this.copyTextureToTexture=function(y,k,z=null,F=null,B=0,ue=0){let ye,he,xe,Me,Le,ze,Te,et,ht,lt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(z!==null)ye=z.max.x-z.min.x,he=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,Le=z.min.y,ze=z.isBox3?z.min.z:0;else{let dt=Math.pow(2,-B);if(ye=Math.floor(lt.width*dt),he=Math.floor(lt.height*dt),y.isDataArrayTexture)xe=lt.depth;else if(y.isData3DTexture)xe=Math.floor(lt.depth*dt);else xe=1;Me=0,Le=0,ze=0}if(F!==null)Te=F.x,et=F.y,ht=F.z;else Te=0,et=0,ht=0;let nt=Oe.convert(k.format),wt=Oe.convert(k.type),ge;if(k.isData3DTexture)_.setTexture3D(k,0),ge=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)_.setTexture2DArray(k,0),ge=D.TEXTURE_2D_ARRAY;else _.setTexture2D(k,0),ge=D.TEXTURE_2D;de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let Nt=de.getParameter(D.UNPACK_ROW_LENGTH),Ye=de.getParameter(D.UNPACK_IMAGE_HEIGHT),Bt=de.getParameter(D.UNPACK_SKIP_PIXELS),Zt=de.getParameter(D.UNPACK_SKIP_ROWS),gi=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),de.pixelStorei(D.UNPACK_SKIP_ROWS,Le),de.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);let qi=y.isDataArrayTexture||y.isData3DTexture,rt=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){let dt=Ce.get(y),yi=Ce.get(k),st=Ce.get(dt.__renderTarget),bi=Ce.get(yi.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,st.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ji=0;Ji<xe;Ji++){if(qi)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,B,ze+Ji),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,ue,ht+Ji);D.blitFramebuffer(Me,Le,ye,he,Te,et,ye,he,D.DEPTH_BUFFER_BIT,D.NEAREST)}de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Ce.has(y)){let dt=Ce.get(y),yi=Ce.get(k);de.bindFramebuffer(D.READ_FRAMEBUFFER,vc),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,_c);for(let st=0;st<xe;st++){if(qi)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.__webglTexture,B,ze+st);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,B);if(rt)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yi.__webglTexture,ue,ht+st);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yi.__webglTexture,ue);if(B!==0)D.blitFramebuffer(Me,Le,ye,he,Te,et,ye,he,D.COLOR_BUFFER_BIT,D.NEAREST);else if(rt)D.copyTexSubImage3D(ge,ue,Te,et,ht+st,Me,Le,ye,he);else D.copyTexSubImage2D(ge,ue,Te,et,Me,Le,ye,he)}de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(rt)if(y.isDataTexture||y.isData3DTexture)D.texSubImage3D(ge,ue,Te,et,ht,ye,he,xe,nt,wt,lt.data);else if(k.isCompressedArrayTexture)D.compressedTexSubImage3D(ge,ue,Te,et,ht,ye,he,xe,nt,lt.data);else D.texSubImage3D(ge,ue,Te,et,ht,ye,he,xe,nt,wt,lt);else if(y.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,ue,Te,et,ye,he,nt,wt,lt.data);else if(y.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Te,et,lt.width,lt.height,nt,lt.data);else D.texSubImage2D(D.TEXTURE_2D,ue,Te,et,ye,he,nt,wt,lt);if(de.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),de.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),de.pixelStorei(D.UNPACK_SKIP_IMAGES,gi),ue===0&&k.generateMipmaps)D.generateMipmap(ge);de.unbindTexture()},this.initRenderTarget=function(y){if(Ce.get(y).__webglFramebuffer===void 0)_.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)_.setTextureCube(y,0);else if(y.isData3DTexture)_.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)_.setTexture2DArray(y,0);else _.setTexture2D(y,0);de.unbindTexture()},this.resetState=function(){G=0,j=0,N=null,de.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}var T=(e)=>`assets/wiki/${e}`,cc=[{id:"hubot",slug:"hubot",wikiTitle:"Hubot",year:"c.1983",sortYear:1983,title:"Hubot",subtitle:"The butler robot with an Atari inside",blurb:"A 50kg wheeled companion with a CP/M computer, a voice synthesizer, an Atari 2600, and a Polaroid sonar head. Priced at $3,495, it scanned rooms, spoke 1,200 words, and played Defender.",tags:["Robot","Voice","Home Computer"],image:T("hubot-hardware.webp"),feature:!0},{id:"power-glove",slug:"nintendo-power-glove",wikiTitle:"Nintendo Power Glove",year:"1989",sortYear:1989,title:"Power Glove",subtitle:"A $10,000 NASA glove, shrunk to $90",blurb:`Mattel had nine months to turn VPL's research-grade DataGlove into a toy. It sold 1.3 million units. "I love the Power Glove. It's so bad."`,tags:["Gesture","Gaming","Wearable"],image:T("power-glove-1.jpg"),span:2},{id:"atari-mindlink",slug:"atari-mindlink",wikiTitle:"Atari Mindlink",year:"1984",sortYear:1984,title:"Atari Mindlink",subtitle:"Mind control (actually eyebrow control)",blurb:"A headband that read forehead muscle tension and called it telepathy. Demoed at CES, then canceled. Testers got headaches from wiggling their brows.",tags:["BCI","Biofeedback","Vaporware"],image:T("atari-mindlink-2.jpg")},{id:"videoplace",slug:"videoplace",wikiTitle:"VIDEOPLACE / Artificial Reality",year:"1970s–80s",sortYear:1978,title:"VIDEOPLACE",subtitle:"Artificial reality without goggles",blurb:"Myron Krueger put people in shared silhouette worlds using only cameras and projectors. No headsets, no gloves — just your body, glowing on screen.",tags:["Gesture","Computer Vision","Art"],image:T("videoplace-mediaartnet.jpg")},{id:"p300-speller",slug:"p300-speller",wikiTitle:"The P300 Speller",year:"1988",sortYear:1988,title:"P300 Speller",subtitle:"Talking off the top of your head",blurb:"The first BCI that let you type with brainwaves alone. Focus on a letter in a 6×6 grid; the system reads the P300 spike when your target flashes. 95% accuracy at 12 bits/min.",tags:["Brain Control","BCI","EEG"],image:T("p300-rowcolumn.webp")},{id:"vpl",slug:"vpl-research",wikiTitle:"VPL Research EyePhone & DataGlove",year:"1980s",sortYear:1985,title:"VPL EyePhone & DataGlove",subtitle:"The birth of commercial VR",blurb:"Jaron Lanier's fiber-optic glove and Fresnel-lens headset defined the visual language of virtual reality. A full system cost $250,000 and ran at 5 fps.",tags:["VR","Gesture","Wearables"],image:T("vpl-eyephone-demo.jpg"),span:2},{id:"virtuality",slug:"virtuality",wikiTitle:"Virtuality Arcade VR System",year:"1990",sortYear:1990,title:"Virtuality",subtitle:"Networked VR in an arcade pod",blurb:"Amiga 3000s, camcorder LCDs, and magnetic tracking. Dactyl Nightmare let four players fight in cyberspace years before Doom.",tags:["VR","Arcade","Multiplayer"],image:T("virtuality-1000cs-1.jpg")},{id:"eyetap",slug:"eyetap",wikiTitle:"Steve Mann’s EyeTap / Wearable Computing",year:"1980s",sortYear:1985,title:"EyeTap",subtitle:"Wearable computing before it had a name",blurb:"Steve Mann built camera-display eyeglasses in high school. The computer mediates reality itself — not a HUD, but a reversible eye.",tags:["Wearable","AR","Sousveillance"],image:T("eyetap-mann-glass-2.jpg")},{id:"digital-desk",slug:"digital-desk",wikiTitle:"The Digital Desk",year:"1991",sortYear:1991,title:"The Digital Desk",subtitle:"Paper meets projector",blurb:"Pierre Wellner pointed a camera and projector at an ordinary desk. Point at printed numbers; the desk calculates and projects the answer onto the paper.",tags:["Tangible","AR","Projection"],image:T("digital-desk-2.jpg")},{id:"mandala",slug:"mandala",wikiTitle:"Mandala / The Vivid Group Gesture VR System",year:"1986",sortYear:1986,title:"Mandala",subtitle:"Full-body VR on an Amiga",blurb:"The Vivid Group put your live video silhouette inside a virtual world. Punch objects, play drums, dance — 30fps, no controller, on an Amiga 1000.",tags:["Gesture","VR","Computer Vision"],image:T("mandala-siggraph-1.jpg")},{id:"viewtouch",slug:"viewtouch",wikiTitle:"ViewTouch",year:"1986",sortYear:1986,title:"ViewTouch",subtitle:"The first commercial touchscreen point-of-sale — finger-on-glass order entry on an Atari ST",blurb:"Restaurateur Gene Mosher fitted an Atari ST with a MicroTouch capacitive overlay, wrote his own direct-manipulation POS software, and let waitstaff run his Syracuse cafe by touching on-screen buttons instead of paper tickets. The screen became the register; the order was a handful of fingertip taps. A photograph shot by Barbara Mosher at Comdex on 17 November 1986 documents the system, and it is the direct ancestor of every modern touchscreen restaurant POS — and of tablet ordering.",tags:["Touchscreen","Retail","Point of Sale","Direct Manipulation","Consumer"],image:T("viewtouch-comdex-1986.png")},{id:"put-that-there",slug:"put-that-there",wikiTitle:"Put-That-There",year:"1980",sortYear:1980,title:"Put-That-There",subtitle:"Voice + gesture at the graphics interface",blurb:"MIT's Architecture Machine Group let you move shapes by speaking and pointing. It asked clarifying questions when it couldn't understand you.",tags:["Voice","Gesture","Multimodal"],image:T("put-that-there-video.jpg")},{id:"speak-spell",slug:"speak-spell",wikiTitle:"Texas Instruments Speak & Spell",year:"1978",sortYear:1978,title:"Speak & Spell",subtitle:"The first talking chip",blurb:"Texas Instruments put a 10th-order LPC vocal tract model on a single chip. It taught kids to spell, became an IEEE Milestone, and soundtracked Kraftwerk.",tags:["Voice","Speech Synthesis","Toy"],image:T("speak-spell-1.jpg")},{id:"kurzweil",slug:"kurzweil-reading-machine",wikiTitle:"Kurzweil Reading Machine",year:"1976",sortYear:1976,title:"Kurzweil Reading Machine",subtitle:"Print made audible for the blind",blurb:"The first omni-font OCR plus a CCD scanner plus a speech synthesizer. Walter Cronkite read his sign-off with it. Stevie Wonder took the first unit home.",tags:["Accessibility","OCR","Text-to-Speech"],image:T("kurzweil-reading-machine-1.jpg")},{id:"active-badge",slug:"active-badge",wikiTitle:"Olivetti Active Badge",year:"1992",sortYear:1992,title:"Active Badge",subtitle:"Your location, broadcast every 10 seconds",blurb:"Olivetti Research made an IR badge that told the building where you were. Phones followed you. Desktops moved with you. Privacy was born as a question.",tags:["Wearable","Location-Aware","Ubicomp"],image:T("active-badge-1.gif")},{id:"twiddler",slug:"twiddler",wikiTitle:"Handykey Twiddler Chord Keyboard",year:"1992",sortYear:1992,title:"Twiddler",subtitle:"A keyboard in one hand",blurb:"A chording keypad you hold like a grenade. MIT wearable researchers typed 60 wpm while walking. Still in production 33 years later.",tags:["Input","Chorded","One-Handed"],image:T("twiddler-original-1.png")},{id:"gridpad-100",slug:"gridpad-100",wikiTitle:"GRiDPad 100",year:"1989",sortYear:1989,title:"GRiDPad 100",subtitle:"First commercial tablet computer with pen input.",blurb:"Pioneered portable form-factor handwriting recognition and stylus-driven UI on MS-DOS.",tags:["pen computing","handwriting recognition","tablet PC"],image:T("gridpad-100-1.jpg")},{id:"heathkit-hero-1",slug:"heathkit-hero-1",wikiTitle:"Heathkit HERO 1",year:"1982",sortYear:1982,title:"Heathkit HERO 1",subtitle:"Educational robot with sonar, light, and sound sensors.",blurb:"Brought programmable physical-world sensing and locomotion to hobbyist HCI experiments.",tags:["Educational Robot","Programmable Sensing","Human-Computer Interaction"],image:T("heathkit-hero-1-1.jpg")},{id:"hp-150-touchscreen",slug:"hp-150-touchscreen",wikiTitle:"HP-150 Touchscreen",year:"1983",sortYear:1983,title:"HP-150 Touchscreen",subtitle:"CRT monitor with infrared touch overlay for office PCs.",blurb:"First mass-market computer to ship with direct finger touch as primary input.",tags:["Touchscreen","Infrared touch","MS-DOS computer"],image:T("hp-150-touchscreen-1.jpg")},{id:"koalapad",slug:"koalapad",wikiTitle:"KoalaPad",year:"1984",sortYear:1984,title:"KoalaPad",subtitle:"Pressure-sensitive touch tablet for 8-bit home computers.",blurb:"Brought absolute-position drawing and menu selection to consumer software years before mainstream mice.",tags:["Graphics Tablet","Touch Tablet","Absolute Positioning"],image:T("koalapad-1.jpg")},{id:"microwriter",slug:"microwriter",wikiTitle:"Microwriter",year:"1980",sortYear:1980,title:"Microwriter",subtitle:"Five-key chorded portable word processor.",blurb:"Early wearable-style one-handed text entry device aimed at mobile professionals.",tags:["chording keyboard","portable computing","mobile text entry"],image:T("microwriter-1.png")},{id:"nintendo-d-pad-controller",slug:"nintendo-d-pad-controller",wikiTitle:"Nintendo D-pad controller",year:"1985",sortYear:1985,title:"Nintendo D-pad controller",subtitle:"Cross-shaped directional pad replacing joysticks on consoles.",blurb:"Established the dominant discrete directional input paradigm still used in handheld and console gaming.",tags:["D-pad","Game controller","NES"],image:T("nintendo-d-pad-controller-1.jpg")},{id:"polhemus-isotrak",slug:"polhemus-isotrak",wikiTitle:"Polhemus 3Space Isotrak",year:"1987",sortYear:1987,title:"Polhemus 3Space Isotrak",subtitle:"Magnetic 6DOF tracking sensor for 3D interaction.",blurb:"First widely available electromagnetic tracker enabling freehand spatial input in VR and CAD.",tags:["6DOF Tracking","Electromagnetic Tracking","Virtual Reality"],image:T("polhemus-isotrak-1.png")},{id:"poqet-pc",slug:"poqet-pc",wikiTitle:"Poqet PC",year:"1989",sortYear:1989,title:"Poqet PC",subtitle:"Credit-card-sized MS-DOS computer with PCMCIA.",blurb:"Pushed the limits of portable full-PC interaction years before Palm and Windows CE.",tags:["Palmtop PC","Power Management","MS-DOS"],image:T("poqet-pc-1.jpg")},{id:"psion-organiser-ii",slug:"psion-organiser-ii",wikiTitle:"Psion Organiser II",year:"1986",sortYear:1986,title:"Psion Organiser II",subtitle:"Pocket computer with full QWERTY and expansion slots.",blurb:"Early PDA that demonstrated mobile database and calculator interaction models.",tags:["Personal Digital Assistant","Mobile Database","Calculator"],image:T("psion-organiser-ii-3.jpg")},{id:"summagraphics-bit-pad",slug:"summagraphics-bit-pad",wikiTitle:"Summagraphics Bit Pad",year:"1977",sortYear:1977,title:"Summagraphics Bit Pad",subtitle:"Large electromagnetic digitizing tablet for CAD.",blurb:"Standardized absolute coordinate input for professional graphics long before consumer tablets.",tags:["Digitizing Tablet","Absolute Positioning","Professional Graphics"],image:T("summagraphics-bit-pad-1.jpg")},{id:"writehander",slug:"writehander",wikiTitle:"WriteHander",year:"1978",sortYear:1978,title:"WriteHander",subtitle:"Twelve-key one-handed chording keyboard for left or right hand.",blurb:"Early commercial attempt at compact, eyes-free chorded text entry that predates later wearable keyboards.",tags:["Chorded Keyboard","Wearable","Eyes-Free"],image:T("writehander-1.jpg")},{id:"fairlight-cmi",slug:"fairlight-cmi",wikiTitle:"Fairlight CMI (Computer Musical Instrument)",year:"1979",sortYear:1979,title:"Fairlight CMI (Computer Musical Instrument)",subtitle:"The first digital sampling synthesizer — draw sound with a light pen.",blurb:"The first commercially successful creative tool that used a light pen for direct-manipulation content creation. Musicians drew sound waveforms on a CRT and composed visually via Page R, the first graphical pattern sequencer. Years before the Macintosh, it proved that visual, gestural interfaces could power professional creative work.",tags:["Music HCI","Light Pen","Digital Audio"],image:T("fairlight-cmi-1.jpg")},{id:"konami-laserscope",slug:"konami-laserscope",wikiTitle:"Konami LaserScope",year:"1990",sortYear:1990,title:"Konami LaserScope",subtitle:"A voice-activated head-mounted targeting device for the NES — shout 'Fire!' to shoot.",blurb:"An astonishingly ambitious consumer wearable from 1990: head-mounted crosshair eyepiece + voice trigger + light gun sensor, all for $39.95. It combined head-based spatial aiming, voice input, heads-up display, and stereo headphones into a single NES peripheral. That it failed spectacularly — the mic triggered on any loud noise, neck fatigue from head-aiming, and you still needed a regular Zapper to make it work — makes it a perfect HCI design-failure case study.",tags:["Voice Control","Head-Mounted Display","Gaming"],image:T("konami-laserscope-1.jpg")},{id:"nes-power-pad",slug:"nes-power-pad",wikiTitle:"NES Power Pad (Family Trainer / Family Fun Fitness)",year:"1988",sortYear:1988,title:"NES Power Pad (Family Trainer / Family Fun Fitness)",subtitle:"The first mass-market full-body exertion interface for home video games — run, jump, stomp.",blurb:"A foldable plastic floor mat with 12 pressure sensors that turned the player's entire body into a game controller. Years before DDR, Wii Fit, or Kinect, the Power Pad proved that feet and whole-body movement could be a viable consumer input modality. It pioneered exergaming, invented the 'body as controller' paradigm, and is the direct ancestor of every motion-based game interface that followed. Plus, kids discovered you could cheat by kneeling and slapping the mat with your hands.",tags:["Full-Body Input","Exergaming","Floor Mat"],image:T("nes-power-pad-1.png")},{id:"amiga-joyboard",slug:"amiga-joyboard",wikiTitle:"Amiga Joyboard",year:"1983",sortYear:1983,title:"Amiga Joyboard",subtitle:"The world's first home-console balance board — a foot-operated Atari 2600 controller that gave us the 'Guru Meditation' error screen.",blurb:"Arguably the first commercial full-body input device for a home video game console, predating the Wii Balance Board by 23 years. A plastic board you stood on and leaned to control on-screen action, translating gross motor movement into digital directional input through simple mechanical latches.",tags:["Balance Board","Full-Body Interaction","Game Controller"],image:T("amiga-joyboard-1.jpg")},{id:"grope-iii",slug:"grope-iii",wikiTitle:"GROPE-III",year:"1990",sortYear:1990,title:"GROPE-III",subtitle:"The first force-feedback molecular docking system that let chemists physically feel electrostatic forces between drug molecules and protein receptors.",blurb:"Repurposed a nuclear-industry teleoperator arm from Argonne National Lab as a 6-DOF haptic force display. Chemists grasped a handle and felt real-time electrostatic forces — steric repulsion, van der Waals attraction, and Coulomb forces — guiding drug molecules into protein receptor sites. Demonstrated a two-fold performance improvement over purely visual interaction and founded the field of haptic rendering.",tags:["Haptics","Force Feedback","Scientific Visualization"],image:T("grope-iii-1.png")},{id:"nintendo-hands-free",slug:"nintendo-hands-free",wikiTitle:"Nintendo Hands Free Controller",year:"1989",sortYear:1989,title:"Nintendo Hands Free Controller",subtitle:"The first accessibility controller produced by a major gaming corporation, operated by chin and breath — 29 years ahead of its time.",blurb:"Designed for quadriplegic players and co-developed with Seattle Children's Hospital. A chest-strapped device with a chin-operated joystick for directional movement and a sip-and-puff tube: sipping activates A, puffing activates B. Sold at cost via mail-order with zero marketing, predating Microsoft's Xbox Adaptive Controller by 29 years. Very few units survive today.",tags:["Accessibility","Sip-and-Puff","Assistive Technology"],image:T("nintendo-hands-free-1.jpg")},{id:"dlr-spacemouse",slug:"dlr-spacemouse",wikiTitle:"DLR Control Ball (SpaceMouse)",year:"1981",sortYear:1981,title:"DLR Control Ball",subtitle:"The first 6-DOF force-sensing ball: push, twist, and pull your way through 3D space — built for robots, launched in orbit, and still on desks today",blurb:"A tennis-ball-sized sphere that reads minute hand pressures — not position, not movement, but force — and translates them into simultaneous control of all six degrees of freedom. Developed at the German Aerospace Center in 1981. Used on Space Shuttle Columbia. Still in production as the 3Dconnexion SpaceMouse.",tags:["6-DOF Input","Force Input","Spatial Controller"],image:T("dlr-spacemouse-2.jpg")},{id:"dragondictate",slug:"dragondictate",wikiTitle:"DragonDictate",year:"1989",sortYear:1989,title:"DragonDictate",subtitle:"The first large-vocabulary speech-to-text dictation: 30,000 words, one $9,000 DSP board, and an 'Oops' command",blurb:"Dragon Systems' husband-wife team put 30,000-word speech recognition on a 386 PC with a $9,000 ISA DSP board and Shure headset. Defined the dictation interaction model: speak, pause, 'Oops' to correct. Life-changing for quadriplegic users.",tags:["Speech Recognition","Dictation","Natural Language"],image:T("dragondictate-1.png")},{id:"eyetyper",slug:"eyetyper",wikiTitle:"EyeTyper",year:"1983",sortYear:1983,title:"EyeTyper",subtitle:"The first camera-based eye-typing device: look to type, dwell to select",blurb:"A video camera pointed at one eyeball. A display board with oversized characters. Hold your gaze — and type at 10 words per minute. CMU spinoff Sentient Systems launched EyeTyper in 1983; the company became DynaVox, then Tobii Dynavox.",tags:["Eye-Tracking","Accessibility","Camera-Based Input"],image:T("eyetyper-1.png")},{id:"biomuse",slug:"biomuse",wikiTitle:"BioMuse",year:"1990",sortYear:1990,title:"BioMuse",subtitle:"The first commercial biosignal controller: muscle tension, eye movement, and brainwaves become music",blurb:"Eight channels of EMG, EOG, and EEG electrodes feed a $20,000 DSP box. Tensing a forearm muscle triggers a synth note. Shifting your gaze bends a parameter. Built at Stanford's CCRMA by Hugh Lusted and Benjamin Knapp in 1990. Performed in concert halls by Atau Tanaka. Used by NASA, the U.S. Air Force, and a disabled child playing video games at Loma Linda Medical Center.",tags:["Biosignals","Music","Accessibility","Wearable","EMG"],image:T("biomuse/biomuse-system.jpg")},{id:"etak-navigator",slug:"etak-navigator",wikiTitle:"Etak Navigator",year:"1985",sortYear:1985,title:"Etak Navigator",subtitle:"The first practical in-car navigation computer, using dead reckoning and a rotating map — years before GPS",blurb:"A shoebox-sized 8088 computer in the trunk, a compass on the rear windshield, wheel sensors on the brakes, and maps on high-speed cassette tapes. No GPS — just dead reckoning and a map-matching algorithm that snapped your position to the nearest road. Nolan Bushnell seed-funded it after a 4am yacht conversation. Its heading-up rotating map display and triangular arrow symbol became the universal standard for every navigation app since.",tags:["Navigation","Automotive","Map Display","Location"],image:T("etak-navigator/etak-popsci.jpg")},{id:"nintendo-rob",slug:"nintendo-rob",wikiTitle:"Nintendo R.O.B. (Robotic Operating Buddy)",year:"1985",sortYear:1985,title:"Nintendo R.O.B.",subtitle:"A physical robot companion that played NES games with you, commanded by light flashes from the TV screen",blurb:"R.O.B. is an output device disguised as a friend. The NES draws flashing green and black rectangles on a CRT screen. A phototransistor in R.O.B.'s head decodes the pulses into motor commands. Three DC motors grind into action, and the robot reaches into the real world to press buttons on a second controller. Designed by Gunpei Yokoi. Discontinued by 1988. But before that, it saved Nintendo — retailers wouldn't stock a 'video game console' after the 1983 crash, so they bundled a robot and called it a toy.",tags:["Robotics","Game Peripheral","Physical Computing","Embodied Interaction"],image:T("nintendo-rob/rob-studio.jpg")},{id:"private-eye",slug:"private-eye",wikiTitle:"Private Eye",year:"1989",sortYear:1989,title:"Private Eye",subtitle:"The vibrating-mirror monocular display that launched wearable computing and became the Nintendo Virtual Boy",blurb:"A 2.5-ounce monochrome display using 280 LEDs and a vibrating mirror to paint a 720x280 image onto your retina. By covering only one eye, your brain fused the display with reality — accidental AR, years before the term existed. MIT researchers wore them daily. Google Glass traces its lineage here.",tags:["Head-Mounted Display","Wearable","Augmented Reality"],image:T("private-eye/pe-display-unit.png")},{id:"radio-drum",slug:"radio-drum",wikiTitle:"Radio Drum / Radio Baton",year:"c.1987",sortYear:1987,title:"Radio Drum",subtitle:"A 3D capacitive spatial controller that tracks two batons in free space — built as a mouse, reborn as an instrument",blurb:"Max Mathews, father of computer music, and Bell Labs engineer Bob Boie built a 3D mouse that failed. Then they realized it was a musical instrument. Two batons hover above a capacitance-sensing antenna plate, tracking X, Y, and Z at 100Hz with 1mm precision. No contact required.",tags:["3D Spatial Input","Music HCI","Gestural Controller"],image:T("radio-drum/rd-ccrma-device.jpg")},{id:"uforce",slug:"uforce",wikiTitle:"Broderbund U-Force",year:"1989",sortYear:1989,title:"U-Force",subtitle:"The NES touchless controller with the unfortunate slogan 'Don't Touch!' — nine infrared beams, zero playability, one magnificent failure",blurb:"Broderbund Software had never made hardware. Then it shipped a clamshell pad with nine IR emitter-detector pairs that tracked your hand in 3D space above the NES. Ambient light confused it. Calibration drifted. 'Don't Touch!' became an ironic epitaph. A perfect HCI failure study.",tags:["Touchless Input","Infrared Sensing","Gaming"],image:T("uforce/uf-wikipedia.jpg")},{id:"fakespeare-boom",slug:"fakespeare-boom",wikiTitle:"Fakespeare BOOM (Binocular Omni-Orientation Monitor)",year:"1989",sortYear:1989,title:"Fakespeare BOOM",subtitle:"Press your face against a CRT on a counterbalanced mechanical arm — immersive VR with zero latency, zero weight on your head",blurb:"Suspended two 1280x1024 CRTs and LEEP optics inside a viewing hood on a spring-balanced articulated arm. Gripped the handles, pressed your face in, and physically wrestled the display through space — joint encoders giving sub-millisecond 6-DOF tracking. Invented by Mark Bolas (who later mentored Oculus founder Palmer Luckey). Used by NASA, Boeing, and Sandia Labs.",tags:["VR","Immersive Display","Head-Coupled Display"],image:T("fakespeare-boom-1.gif")},{id:"buchla-lightning",slug:"buchla-lightning",wikiTitle:"Buchla Lightning",year:"1991",sortYear:1991,title:"Buchla Lightning",subtitle:"Conjure music from thin air — two infrared wands, one optical tracker, and a DSP that reads your gestures as MIDI",blurb:"Don Buchla built an optical gesture-sensing MIDI controller 15 years before the Wii. Two wireless wands emit IR light; a photosensor array triangulates their position, velocity, and acceleration in real time. A TMS370 DSP classifies strikes, sweeps, and zones into MIDI notes and controllers. $1,995, hand-built in Berkeley. Used at IRCAM, CCRMA, and Times Square's millennium celebration.",tags:["Music HCI","Gesture","Optical Tracking"],image:T("buchla-lightning-1.jpg")},{id:"seiko-rc1000",slug:"seiko-rc1000",wikiTitle:"Seiko RC-1000 Wrist Terminal",year:"1984",sortYear:1984,title:"Seiko RC-1000 Wrist Terminal",subtitle:"A wristwatch that plugs into your desktop computer — the first wrist-worn computer terminal, a decade ahead of its time",blurb:"The same year the Macintosh shipped, Seiko sold a wristwatch with 2KB RAM, a 12x2 dot-matrix LCD, and an RS-232C serial port. You authored data on a desktop PC, then blasted it to the watch in a 2051-byte dump. Read-only on the wrist. Spawned the WristMac, which flew on Space Shuttle Atlantis in 1991 for the first email from space.",tags:["Wearable","Wrist-Worn","Mobile Computing"],image:T("seiko-rc1000-1.jpg")},{id:"barcode-battler",slug:"barcode-battler",wikiTitle:"Barcode Battler / バーコードバトラー",year:"1991",sortYear:1991,title:"Barcode Battler",subtitle:"A handheld game that turned every supermarket barcode into an RPG character — Japan's brief, glorious fad for scanning cereal boxes into warriors",blurb:"In 1991, Epoch Co. released a handheld LCD game with a built-in barcode scanner. Swipe any product barcode through its slot — cereal, soup, toilet paper — and an algorithm hashed the digits into character stats for turn-based RPG combat. No graphics, just 7-segment numbers. In Japan, it was a mania: products sold out because kids thought they had lucky barcodes. In the West, it flopped completely. A genuinely novel physical-to-digital bridge, decades before Skylanders or QR-code games.",tags:["Barcode","Tangible","Gaming"],image:T("barcode-battler-1.png")},{id:"kramers-talking-glove",slug:"kramers-talking-glove",wikiTitle:"Talking Glove / The TalkingGlove",year:"1988",sortYear:1988,title:"Talking Glove",subtitle:"A glove that translated American Sign Language fingerspelling into spoken words in real time",blurb:"The first portable ASL-to-speech translation system: 14 strain-gauge flex sensors, a beacon recognition algorithm in 16-dimensional hand-space, and a DECtalk speech synthesizer. Built by James Kramer at Stanford (1988–1991) for deaf users to have everyday conversations without an interpreter. The sensor design proved so robust it became the CyberGlove, dominating VR hand-input for two decades before Immersion Corp acquired it and leveraged the patents against Microsoft and Sony.",tags:["Wearable","Accessibility","Gesture Recognition"],image:T("kramers-talking-glove-1.png")},{id:"williams-facial-animation",slug:"williams-facial-animation",wikiTitle:"Performance-Driven Facial Animation",year:"1990",sortYear:1990,title:"Performance-Driven Facial Animation",subtitle:"The first system to use a live actor's real face as a real-time input device for computer-generated animation",blurb:"At SIGGRAPH 1990, Lance Williams of Apple ATG introduced the 'electronic mask': retroreflective dots on an actor's face tracked by computer vision, driving a photorealistic 3D CG character in real time. The actor's smile, frown, or raised eyebrow became a real-time animation input stream — the birth of facial performance capture, decades before Avatar or ARKit. Williams later served as Chief Scientist at Walt Disney Animation Studios and won a Technical Academy Award for this work.",tags:["Facial Tracking","Computer Vision","Performance Capture"],image:T("williams-facial-animation-1.jpg")},{id:"convolvotron",slug:"convolvotron",wikiTitle:"Convolvotron",year:"1988",sortYear:1988,title:"Convolvotron",subtitle:"The first real-time 3D audio spatializer — a $15,000 PC board set from NASA's VIEW lab that let you listen through someone else's ears",blurb:"Built under a NASA contract by Scott Foster and Crystal River Engineering, the Convolvotron was the first system capable of real-time binaural spatialization of multiple independent sound sources. A custom parallel ALU engine with 128 16×16 multiply-accumulators performed head-related transfer function (HRTF) convolution in real time — as you turned your head, virtual sound sources stayed anchored in 3D space through standard stereo headphones. At $14,995 for a two-board PC set, it spawned a product family (Acoustetron, Beachtron, Alphatron) and was used in landmark VR artworks including Brenda Laurel's Placeholder and Char Davies' Osmose. Its technology was distilled into Aureal's A3D consumer 3D audio API before being acquired by Creative Technology.",tags:["Audio","Spatial Audio","VR","NASA"],image:T("convolvotron-1.jpg")},{id:"headmaster",slug:"headmaster",wikiTitle:"HeadMaster",year:"1986",sortYear:1986,title:"HeadMaster",subtitle:"An ultrasonic headset that turned head movement into cursor movement — 'If you can move your head, you can move your world'",blurb:"The first commercially successful head-operated computer cursor controller. A lightweight headset with three 40 kHz ultrasonic receivers tracked rotational head movement (yaw and pitch) through analog phase-comparison circuitry, sampled at 1,000 Hz with sub-millimeter resolution. A sip-and-puff mouth switch provided mouse-button clicks. Built by Personics Corp in 1986 for $795, later sold by Prentke Romich Company through the 2000s, it came with ScreenTyper — an on-screen keyboard with characters arranged by frequency of use, a decade before soft keyboards became common. Its patent was classified under G06F3/012 'Head tracking input arrangements' — the same classification that would define VR input. Units are held by both the Smithsonian and the Computer History Museum.",tags:["Head Tracking","Accessibility","Ultrasonic","Cursor Control"],image:T("headmaster-1.png")},{id:"vpl-datasuit",slug:"vpl-datasuit",wikiTitle:"VPL DataSuit",year:"1989",sortYear:1989,title:"VPL DataSuit",subtitle:"The first full-body fiber-optic tracking suit — 30+ sensors across arms, legs, and trunk, your entire body as computer input",blurb:"The VPL DataSuit extended the DataGlove's fiber-optic bend sensor technology from one hand to the entire body. Worn as a tight Lycra outfit with 30+ sensors measuring joint angles along arms, legs, and trunk, it made the human body a real-time input device for virtual environments. Combined with the EyePhone HMD and DataGlove in VPL's 'Reality Built for Two' (RB2) — the first multi-user VR system — it embodied Jaron Lanier's concept of 'post-symbolic communication': using body movement as a programming language. Ann Lasko-Harvill designed gender-specific tailoring for different body types. The suit appeared in the 1992 film The Lawnmower Man, introducing full-body VR to mass audiences. Though VPL filed for bankruptcy in 1990, the DataSuit established the template for every full-body tracking system that followed.",tags:["VR","Wearable","Motion Capture","Full-Body"],image:T("vpl-datasuit-1.jpg")},{id:"minsky-sandpaper",slug:"minsky-sandpaper",wikiTitle:"Minsky Sandpaper / Computational Haptics Sandpaper System",year:"1990",sortYear:1990,title:"Minsky Sandpaper",subtitle:"The 2-DOF force-feedback joystick that synthesized virtual textures through programmable lateral forces, birthing computational haptics.",blurb:"The origin story of computational haptics — the moment touch became programmable. Margaret Minsky's 2-DOF force-feedback joystick used a lateral-force algorithm to synthesize virtual textures (sandpaper, rubber, velvet) that users could genuinely feel and distinguish. A wooden box with DC motors, optical encoders, and metal linkages — every haptic device since descends from it.",tags:["Haptics","Force Feedback","MIT Media Lab"],image:T("minsky-sandpaper-1.webp")},{id:"quantel-paintbox",slug:"quantel-paintbox",wikiTitle:"Quantel Paintbox",year:"1981",sortYear:1981,title:"Quantel Paintbox",subtitle:"The $250,000 broadcast graphics workstation that put a pressure-sensitive stylus in the hands of TV artists and defined the look of 1980s television.",blurb:"The first computer graphics system designed as an artist's tool rather than an engineer's. Its patented pressure-sensitive stylus and tablet, combined with real-time pop-up menus, let traditionally trained illustrators produce broadcast-quality digital graphics with zero computer knowledge. A decade before consumer tablets and Photoshop, it proved natural gestural interaction could power professional creative work.",tags:["Graphics HCI","Pressure-Sensitive Stylus","Broadcast Graphics"],image:T("quantel-paintbox-1.jpg")},{id:"tongue-touch-keypad",slug:"tongue-touch-keypad",wikiTitle:"Tongue Touch Keypad (TTK) / Tongue Activated Communications Controller",year:"1991",sortYear:1991,title:"Tongue Touch Keypad",subtitle:"The intraoral dental retainer with a nine-key membrane keypad that let quadriplegics control computers by touching their tongue to the roof of their mouth.",blurb:"A custom-fitted dental retainer embedding a nine-key keypad, digital encoder, and magnetic-flux radio transmitter — worn on the palate and operated entirely by tongue. Received FDA clearance in 1991, served ~70 quadriplegic users, and established the paradigm for every modern intraoral interface from the Georgia Tech Tongue Drive to MIT's MouthIO.",tags:["Accessibility","Assistive Technology","Tongue Interface"],image:T("tongue-touch-keypad-1.png")},{id:"aesthedes",slug:"aesthedes",wikiTitle:"Aesthedes",year:"1984",sortYear:1984,title:"Aesthedes",subtitle:"The 220 kg Dutch design workstation with 636 dedicated membrane keys, six screens, and a philosophy that designers should never need to learn computers.",blurb:"A dedicated graphic-design workstation where every function had a physical key spread across the desk surface — 583 membrane switches on the Aesthedes 1, 636 on the Aesthedes 2. Six screens (three colour, three monochrome) gave every view its own monitor. Ten Motorola 68000 CPUs, 220 kg, and a price tag of $150,000. It designed Dutch banknotes, Heineken labels, and Volvo dashboards before the Macintosh killed it.",tags:["CAD","Workstation","Keyboard"],image:T("aesthedes-1.jpg")},{id:"rdi-halcyon",slug:"rdi-halcyon",wikiTitle:"RDI Halcyon",year:"1985",sortYear:1985,title:"RDI Halcyon",subtitle:"The voice-controlled laserdisc game console that trained itself to your voice, cost $2,500, and sold perhaps ten units before vanishing into legend.",blurb:"A consumer device in 1985 that bet its entire identity on speech recognition. No joystick, no keyboard — you talked to it through a noise-canceling headset while it navigated branching laserdisc movies with your spoken commands. Funded by Dragon's Lair profits, killed by the 1983 game crash and a price tag that bought 14 NES consoles. One of the rarest game consoles ever made.",tags:["Gaming","Voice Recognition","Laserdisc"],image:T("rdi-halcyon-1.jpg")},{id:"talking-signs",slug:"talking-signs",wikiTitle:"Talking Signs / Remote Infrared Audible Signage (RIAS)",year:"1979",sortYear:1979,title:"Talking Signs",subtitle:"The invisible city: infrared beams broadcasting spoken directions that only you can hear, turning the built environment into an ambient interface for blind navigation.",blurb:"A network of infrared transmitters that broadcast spoken labels on modulated light beams. A blind person carrying a pocket receiver could 'read' the city by pointing it around — doorways, bus stops, ATMs would whisper their names with directional clarity. Codified into US federal building standards (ADAAG 703.7) in 2000. In 2016, the concept became a free smartphone app used by thousands daily.",tags:["Accessibility","Infrared","Navigation"],image:T("talking-signs-1.jpg")},{id:"canon-cat",slug:"canon-cat",wikiTitle:"Canon Cat",year:"1987",sortYear:1987,title:"Canon Cat",subtitle:"Jef Raskin's radical text-centric computer that rejected files, applications, and the mouse.",blurb:"No files, no applications, no operating system — just a single unified document stream navigated by content via pink LEAP keys. Designed by the man who initiated the Macintosh, it represents the road not taken in personal computing. The interaction model IS the point.",tags:["HCI","Input","Interface Paradigm"],image:T("canon-cat-1.jpg")},{id:"puma-rs-computer-shoes",slug:"puma-rs-computer-shoes",wikiTitle:"Puma RS Computer Shoes",year:"1985",sortYear:1985,title:"Puma RS Computer Shoes",subtitle:"The first body-worn computer activity tracker — a running shoe you plugged into your Apple IIe.",blurb:"The PUMA RS-Computer transformed a shoe into an active sensing peripheral, measuring stride timing to compute distance, speed, and calories. After a run, you physically plugged your shoes into a computer's printer port to download data — a ritual that anticipated every fitness wearable by 20 years.",tags:["HCI","Wearable","Sensing"],image:T("puma-rs-computer-shoes-1.jpg")},{id:"versabraille",slug:"versabraille",wikiTitle:"VersaBraille",year:"1979",sortYear:1979,title:"VersaBraille",subtitle:"The first American refreshable Braille display, turning screen text into raised dots under the fingers.",blurb:"A 20-cell piezoelectric Braille display that functioned as notetaker, reading machine, and computer terminal — giving blind users direct tactile access to electronic text for the first time. The same transducer technology invented for this device still powers most Braille displays today.",tags:["HCI","Accessibility","Tactile"],image:T("versabraille-1.jpg")},{id:"mbx-expansion-system",slug:"mbx-expansion-system",wikiTitle:"MBX Expansion System",year:"1983",sortYear:1983,title:"MBX Expansion System",subtitle:"Consumer voice-recognition gaming peripheral that trained on your voice, then let you shout commands at the screen.",blurb:"In 1983, Milton Bradley shipped a peripheral that wore a headset, learned your voice, understood spoken game commands, and paired them with a 360-degree analog joystick with a twist knob and a 64-key membrane overlay keypad. Voice-recognition gaming in 1983.",tags:["HCI","Input","Voice"],image:T("mbx-expansion-system-1.jpg")},{id:"drawing-prism",slug:"drawing-prism",wikiTitle:"The Drawing Prism",year:"1985",sortYear:1985,title:"The Drawing Prism",subtitle:"An optical bridge between real brushes and digital pixels — paint directly into a computer with your hands.",blurb:"A transparent glass prism that let artists paint with real brushes, fingers, or any light-colored object directly into a computer's frame buffer in 1985. A video camera underneath saw only points of optical contact via frustrated total internal reflection.",tags:["HCI","Input","Art"],image:T("drawing-prism-1.jpg")},{id:"datahand-keyboard",slug:"datahand-keyboard",wikiTitle:"DataHand Keyboard",year:"1990",sortYear:1990,title:"DataHand Keyboard",subtitle:"The keyboard where your fingers never move — each digit rests in a padded well and types by twitching in five directions.",blurb:"The most extreme keyboard redesign ever brought to market. Each finger rests in a padded well with five magnetic switches (N/S/E/W + center). No wrist movement, sub-millimeter finger twitches. Invented by Dale Retter to solve his own RSI, prototyped by 1989, sold from 1990.",tags:["HCI","Input","Ergonomic"],image:T("datahand-keyboard-1.jpg")},{id:"pencept-penpad",slug:"pencept-penpad",wikiTitle:"Pencept PenPad",year:"1982",sortYear:1982,title:"Pencept PenPad",subtitle:"A keyboardless terminal that read your handwriting—and your gestures—in 1982",blurb:"A terminal replacement with no keyboard—just a pen and tablet. Used MIT-developed user-independent handwriting recognition and gesture commands (circle to select, scribble to delete). CHI '85 demo showed real-time pen computing a decade before the Newton.",tags:["Pen Computing","Handwriting Recognition","Gesture"],image:T("pencept-penpad-1.jpg")},{id:"relax-stress-reduction",slug:"relax-stress-reduction",wikiTitle:"Synapse Relax Stress Reduction System",year:"1984",sortYear:1984,title:"Synapse Relax Stress Reduction System",subtitle:"A video-game company built the first FDA-cleared biofeedback peripheral for home computers—and it almost worked",blurb:"An EMG headband, control unit, and software that let you fly a balloon by relaxing. Synapse Software (of Blue Max fame) got FDA clearance as a Class II medical device in 1984. Co-created by legendary game designer Bill Williams. Rarity 9 on AtariMania.",tags:["Biofeedback","Physiological Computing","Wearable"],image:T("relax-stress-reduction-1.png")},{id:"exciting-boxing",slug:"exciting-boxing",wikiTitle:"Exciting Boxing Controller",year:"1987",sortYear:1987,title:"Exciting Boxing Controller",subtitle:"An inflatable humanoid punching bag you physically fought to control a Famicom boxing game",blurb:"An inflatable, life-sized boxer with 11 internal pressure sensors that plugged into the Nintendo Famicom. You stood on a mat, put on knitted gloves, and physically punched the bag. Konami, 1987. Full-body motion gaming nearly two decades before the Wii.",tags:["Game Controller","Full-Body Input","Motion Gaming","Famicom"],image:T("exciting-boxing-1.jpg")},{id:"ibva",slug:"ibva",wikiTitle:"Interactive Brainwave Visual Analyzer (IBVA)",year:"1991",sortYear:1991,title:"Interactive Brainwave Visual Analyzer (IBVA)",subtitle:"The first commercial wireless brain-computer interface — think with your forehead, control a Mac with your mind",blurb:"A wireless EEG headband that transmitted brainwaves by radio to a Macintosh, converting alpha and beta rhythms into MIDI notes, visuals, and control signals. Shipped April 1991 by Psychic Lab Inc. Used by Mariko Mori at the Venice Biennale, and by HBO to measure TV audience engagement.",tags:["BCI","EEG","Wearable","Brainwave"],image:T("ibva-5.jpg")},{id:"cave",slug:"cave",wikiTitle:"CAVE Automatic Virtual Environment",year:"1992",sortYear:1992,title:"CAVE Automatic Virtual Environment",subtitle:"The first room-scale VR — no headset, just a room you walked into",blurb:"The CAVE turned the room itself into the display: three walls and a floor projecting stereoscopic 3D that surrounded you, rendered from your tracked viewpoint. You walked naturally. Three other people could stand in there with you, making eye contact and pointing at the same virtual objects.",tags:["VR","Immersive","Display"],image:T("cave-1.jpg")},{id:"virtual-fixtures",slug:"virtual-fixtures",wikiTitle:"Virtual Fixtures",year:"1992",sortYear:1992,title:"Virtual Fixtures",subtitle:"The first augmented reality system — a full upper-body exoskeleton that let you see and feel virtual objects registered in the real world",blurb:"In 1992, Louis Rosenberg bolted himself into a full upper-body exoskeleton covered in motors, peered through binocular magnifiers salvaged from a parachute test rig, and reached out to touch a virtual surface that pushed back — the first system to merge real and virtual with force feedback.",tags:["Augmented Reality","Haptic","Exoskeleton"],image:T("virtual-fixtures-1.jpg")},{id:"vectrex-3d-imager",slug:"vectrex-3d-imager",wikiTitle:"Vectrex 3D Imager",year:"1983",sortYear:1983,title:"Vectrex 3D Imager",subtitle:"Color 3D from a black-and-white screen — using a motorized spinning filter disk strapped to your face",blurb:"The first commercially released stereoscopic 3D gaming peripheral: a headset with a spinning half-black, half-RGB filter disk synced to the Vectrex vector CRT via PWM motor control. Only ~2,000 units escaped before the 1983 crash. Invented by John Ross, who also created the Vectrex itself.",tags:["3D Display","Gaming","Electromechanical","Stereoscopic"],image:T("vectrex-3d-imager.jpg")},{id:"soundbeam",slug:"soundbeam",wikiTitle:"Soundbeam",year:"1984",sortYear:1984,title:"Soundbeam",subtitle:"The invisible keyboard in space — ultrasonic sonar that turned body movement into music, then accidentally revolutionized disability music therapy",blurb:"Touch-free MIDI controller using 50 kHz sonar beams. Conceived by composer Edward Williams, built by the EMS team (legendary VCS3 synth). Dancers were supposed to use it. Instead, children with profound disabilities made music for the first time. Still in production in 2025.",tags:["Sonar","Music","MIDI","Gestural","Accessibility","Embodied"],image:T("soundbeam-system.jpg")},{id:"hard-drivin",slug:"hard-drivin",wikiTitle:"Hard Drivin' / Race Drivin'",year:"1989",sortYear:1989,title:"Hard Drivin'",subtitle:"The arcade machine that strapped a real DC motor to your steering wheel — and hid a Milliken-level vehicle physics model inside",blurb:"First commercial arcade game with continuous force-feedback steering (not vibration — actual road-force resistance). Full manual transmission with clutch and H-pattern shifter. Real vehicle dynamics by Doug Milliken, credited as 'test driver' to keep it secret. 3,318 cabinets built. Every modern force-feedback racing wheel descends from this.",tags:["Force Feedback","Haptics","Arcade","Simulation"],image:T("hard-drivin-flyer.jpg")},{id:"cauzin-softstrip",slug:"cauzin-softstrip",wikiTitle:"Cauzin Softstrip Reader",year:"1985",sortYear:1985,title:"Cauzin Softstrip Reader",subtitle:"Before QR codes, this $200 wand turned magazine pages into computer data—one manual 30-second swipe at a time.",blurb:"The Cauzin Softstrip is the most literal 'paper-to-silicon bridge' ever sold as a consumer computer peripheral. You physically dragged this beige wand over a strip of tiny black-and-white squares printed in Byte magazine, and 5,500 bytes of program code materialized on your Apple II. Co-founder Jack Goldman had founded Xerox PARC. It won MacUser's 'Most Innovative Concept of 1986' and died within three years, outrun by floppy disks and modems.",tags:["Input","Scanning","Optical Reader"],image:T("cauzin-softstrip-1.jpeg")},{id:"reading-epg",slug:"reading-epg",wikiTitle:"Reading Electropalatography (EPG) System",year:"1978",sortYear:1978,title:"Reading Electropalatography System",subtitle:"A computer worn inside the mouth—62 gold electrodes on a custom acrylic palate turned invisible tongue movements into a real-time visual targeting game.",blurb:"One of the most intimate human-computer interfaces ever built. A custom-molded acrylic plate, clipped to the user's upper teeth like a retainer, carries 62 gold electrodes in an 8-row grid. When the tongue touches the palate during speech, a CRT monitor illuminates dots wherever contact occurs—turning the invisible act of articulation into a visible, teachable skill. Developed at the University of Reading in 1978.",tags:["Biofeedback","Speech Therapy","Accessibility"],image:T("reading-epg-1.jpg")},{id:"synthaxe",slug:"synthaxe",wikiTitle:"SynthAxe",year:"1985",sortYear:1985,title:"SynthAxe",subtitle:"The £10,000 MIDI guitar that freed pitch from pluck — crashed sequencers with six channels of aftertouch, and fewer than 100 were made",blurb:"A fretted MIDI guitar controller with two independent sets of strings at an angle: one for pitch (electrical fret scanning, zero latency) and one for triggering (Hall-effect velocity sensing). Funded by Virgin Group, priced like a small car, built from aerospace materials. Allan Holdsworth called it 'the only guitar synthesizer that really works.' Virgin pulled out, the company folded, and the remaining instruments became holy grails.",tags:["Music","MIDI","Gesture"],image:T("synthaxe-wikimedia.jpg")},{id:"sega-hang-on",slug:"sega-hang-on",wikiTitle:"Sega Hang-On",year:"1985",sortYear:1985,title:"Sega Hang-On",subtitle:"The arcade motorcycle you rode with your whole body, launching Sega's body-sensation revolution.",blurb:"Before Hang-On, every arcade game was played with fingers. Then Yu Suzuki built a full-size motorcycle cabinet with a spring-loaded axle that translated body lean into steering. Players straddled it, twisted a real throttle, squeezed real brake levers, and leaned through corners. It sold 20,000 units, was the highest-grossing arcade game of 1985 in the US and 1986 in both Japan and the US, and launched Sega's decade of taikan ('body sensation') motion simulators. Suzuki, a motorcyclist himself, built it for '16-year-old males' who wanted to ride but couldn't get a license.",tags:["Arcade","Motion","Full-Body","Gaming"],image:T("sega-hang-on-cabinet.jpg")},{id:"cmu-sensor-frame",slug:"cmu-sensor-frame",wikiTitle:"CMU Sensor Frame",year:"1985",sortYear:1985,title:"CMU Sensor Frame",subtitle:"The multi-touch system where pinch-to-zoom was born — built from DRAM memory chips, shown to Steve Jobs.",blurb:"Before the iPhone, before Jeff Han's TED talk, there was a metal frame around a CRT monitor at Carnegie Mellon that tracked three fingers, detected their approach angle, and recognized gestures — including canonical pinch-to-zoom in 1985. The sensors were off-the-shelf DRAM memory chips repurposed as crude cameras because CCDs were unavailable. Steve Jobs visited the lab in October 1985 and signed an NDA. The technology was patented, a company was founded, NASA funded a 3D variant — and then nothing. It never shipped. But the idea it proved is now in every pocket.",tags:["Multi-Touch","Gesture","Input","Research"],image:T("sensor-frame-hardware.jpg")},{id:"upic",slug:"upic",wikiTitle:"UPIC (Unité Polyagogique Informatique CEMAMu)",year:"1977",sortYear:1977,title:"UPIC",subtitle:"Iannis Xenakis's drawing tablet that turned hand-drawn lines directly into synthesized sound.",blurb:"A music composition tool with no keyboard, no notation, no code — just drawing. Xenakis, the avant-garde composer who had worked for Le Corbusier, built a large electromagnetic drawing tablet where the X-axis was time and the Y-axis was pitch. Draw a waveform shape → that's the timbre. Draw an envelope → that's the dynamics. Draw a line across the grid → that's the melody. Designed to be usable by children. The entire system fit in under a megabyte. Aphex Twin called it 'under 1mb and it shits on everyone.' His first UPIC piece premiered at the Acropolis of Mycenae.",tags:["Music","Drawing","Tablet","Synthesis"],image:T("upic-system.jpg")},{id:"atarilab",slug:"atarilab",wikiTitle:"AtariLab",year:"1983",sortYear:1983,title:"AtariLab",subtitle:"The home computer became a scientific instrument when a physics professor plugged a thermistor into the joystick port.",blurb:"In 1983, physics professor Priscilla Laws realized the Atari's joystick port was secretly a general-purpose ADC. She built a breakout box that turned the Atari 800 into a real-time lab instrument: plug in a temperature probe, dip it in water, and watch a cooling curve draw itself on the family TV. The software was written by a 15-year-old. Atari collapsed before a dozen planned modules could ship, but Laws's concept lived on — the Universal Laboratory Interface she later co-developed sold 40,000 units through Vernier Software and launched the modern probeware industry.",tags:["Education","Sensors","Physical Computing"],image:T("atarilab-temperature.jpeg")},{id:"sgi-dial-box",slug:"sgi-dial-box",wikiTitle:"SGI Dial and Button Box",year:"1986",sortYear:1986,title:"SGI Dial and Button Box",subtitle:"Eight aluminum knobs, thirty-two buttons, and a design philosophy that said your tools should feel like instruments.",blurb:"A dedicated 3D input peripheral for Silicon Graphics IRIS workstations: eight continuous-rotation optical encoder dials and thirty-two programmable buttons in a metal chassis. Animators used their left hand on the dials (rotate, zoom, pan) while the right hand worked the mouse — an asymmetric bimanual workflow later studied by Bill Buxton at the University of Toronto. The dial box represents a lost design philosophy: that professional creative tools deserve dedicated, task-specific physical controls. Every modern 3D app's orbit/zoom/pan navigation inherits the SGI dial layout, but the physical knobs are gone.",tags:["3D Interaction","Professional Workstation","Bimanual"],image:T("sgi-dial-box-front.jpg")},{id:"sega-r360",slug:"sega-r360",wikiTitle:"Sega R360",year:"1990",sortYear:1990,title:"Sega R360",subtitle:"The arcade cabinet that barrel-rolled with you inside",blurb:"A 1,100 kg gyroscopic arcade sphere that rotated freely through 360 degrees on two axes, physically inverting the player to match in-game flight. $90,000 per unit. Emergency stops on every installation. Only ~100 were ever built.",tags:["Motion Platform","Arcade","Kinesthetic","Simulation"],image:T("sega-r360-cabinet.jpg")},{id:"akai-ewi-1000",slug:"akai-ewi-1000",wikiTitle:"Akai EWI 1000",year:"1987",sortYear:1987,title:"Akai EWI 1000",subtitle:"The saxophone with no moving keys — just the electricity in your fingers",blurb:"A wind instrument controller from 1987 where every key is a capacitive touch sensor. Zero mechanical travel, zero clicks. Breath pressure, bite pressure, and finger capacitance combined into three continuous MIDI channels. Nyle Steiner invented it in his Utah basement. Akai sold it to jazz musicians who needed more than a keyboard could give.",tags:["Music","Capacitive Touch","Breath Control","MIDI"],image:T("akai-ewi-3020.jpg")},{id:"armatron",slug:"armatron",wikiTitle:"Armatron",year:"1984",sortYear:1984,title:"Armatron",subtitle:"A $40 plastic robot arm that made every ten-year-old a teleoperator, no computer required",blurb:"Tomy/Radio Shack's six-degree-of-freedom tabletop robotic arm, operated through purely mechanical dual joysticks with zero digital electronics. The user's hand movements engage rotating gear drums that map directly onto wrist rotation, elbow bend, shoulder elevation, and gripper — a waldo for the price of a board game.",tags:["Robot","Teleoperation","Mechanical","Toy"],image:T("armatron-1.jpg")},{id:"big-trak",slug:"big-trak",wikiTitle:"Big Trak",year:"1979",sortYear:1979,title:"Big Trak",subtitle:"A programmable toy tank with a membrane keypad and a Texas Instruments brain, executing 16-step programs in the physical world",blurb:"Milton Bradley's six-wheeled programmable tank (1979). A TI TMS1000 microcontroller, 16 command memory, and no screen — you typed FORWARD 5, RIGHT 15, FIRE on the keypad and the tank carried out your orders on the living room floor. Carnegie Mellon psychologists adopted it to study how humans learn without instructions.",tags:["Robot","Programming","Education","Toy"],image:T("big-trak-1.jpg")},{id:"scanman",slug:"scanman",wikiTitle:"Logitech ScanMan",year:"1987",sortYear:1987,title:"Logitech ScanMan",subtitle:"The scanner where your hand was the motor — every twitch came out as a pixel",blurb:"Logitech's 1987 handheld scanner. Four inches wide, 200 dpi, serial port. No motor: the user physically dragged it across the page at a steady speed, with a roller encoder syncing capture and an LED warning if you moved too fast. Scan quality was a direct function of your hand steadiness.",tags:["Input","Scanner","Handheld","Embodied"],image:T("scanman-1.jpg")},{id:"bat-keyboard",slug:"bat-keyboard",wikiTitle:"BAT Keyboard",year:"1990",sortYear:1990,title:"BAT Keyboard",subtitle:"Seven keys, one hand, and a tilt that says 'I was designed for a fighter jet cockpit.' NASA helped bring it to Earth.",blurb:"The BAT keyboard is one-handed chording reduced to its most elegant form: four finger keys, three thumb keys, a 25-degree tilt, backwards-facing keycaps, and Cherry MX switches with springs so light they had to be custom-modified. Conceived by an Israeli Air Force human-factors specialist who needed to cut fighter-jet control sequences from 32 seconds to 12, then developed with NASA Stennis Space Center for accessibility and spaceflight use.",tags:["Input","Accessibility","Wearable"],image:T("bat-keyboard-1.jpg")},{id:"ntt-clearboard",slug:"ntt-clearboard",wikiTitle:"NTT ClearBoard-1",year:"1991",sortYear:1991,title:"NTT ClearBoard-1",subtitle:"A shared glass drawing surface where your collaborator appears as a ghostly face, maintaining eye contact through a half-silvered mirror.",blurb:"ClearBoard-1 is one of the most beautiful and strange interaction models ever built. Two people at remote locations each draw on a large glass pane with marker pens. A half-silvered mirror superimposes the remote collaborator's live video face onto the drawing surface, so you see them 'through' the glass while drawing together.",tags:["CSCW","Video","Drawing"],image:T("ntt-clearboard-1.jpg")},{id:"xerox-liveboard",slug:"xerox-liveboard",wikiTitle:"Xerox LiveBoard",year:"1990",sortYear:1990,title:"Xerox LiveBoard",subtitle:"A 67-inch rear-projection wall that turned a meeting room into a shared computer — and put a laser from a copier in the corner to track your pen.",blurb:"The LiveBoard was the moment collaborative computing outgrew the desk. A 67-inch rear-projection display with laser-based pen sensing, built from repurposed Xerox copier parts, let multiple people write simultaneously on a shared digital wall. The Colab room that housed it — with motorized desks, no-glare lighting, and four networked workstations — was an entire physical environment designed around a new way of working together.",tags:["Input","Display","CSCW"],image:T("xerox-liveboard-1.jpg")},{id:"butler-in-a-box",slug:"butler-in-a-box",wikiTitle:"Butler in a Box",year:"1983",sortYear:1983,title:"Butler in a Box",subtitle:"The first voice-controlled home automation system, responding 'Yes, boss' 30 years before Alexa — built by a magician and an ex-IBM programmer.",blurb:"The Butler in a Box (1983) pioneered the wake-word-plus-command interaction model that now powers every smart speaker. You trained it to recognize a butler name ('Godfrey,' 'Hobson'), it responded 'Yes, boss,' and then controlled your lights, phone, timers, and alarm — all by voice. Created by professional magician Gus Searcy and former IBM programmer Franz Kavan. Priced at $1,495. It could handle 256 functions, 4 users' voice profiles, and if-then conditional logic. A Smithsonian artifact.",tags:["Voice Control","Home Automation","Speech Recognition"],image:T("butler-in-a-box-1.jpg")},{id:"gibson-light-pen",slug:"gibson-light-pen",wikiTitle:"Gibson Light Pen System (LPS II)",year:"1981",sortYear:1981,title:"Gibson Light Pen System (LPS II)",subtitle:"A professional-grade light pen for the Apple II by the teenager who worked at Stanford AI Lab at age 15 — the launchpad for SpinRite and Security Now!",blurb:"Steve Gibson's LPS II (1981) was the finest light pen ever made for an 8-bit microcomputer. A photodetector in the pen tip tracked the CRT's electron beam for 1:1 absolute positioning — drawing directly on screen felt, as one reviewer put it, 'utterly analogous to working with a normal pen.' At $250 it bridged the gap between toy tablets and $1,000+ CAD digitizers. Gibson sold the company to Atari, recovered the rights, licensed to Koala, then founded Gibson Research Corporation — making SpinRite and co-hosting Security Now! for decades.",tags:["Light Pen","Apple II","Drawing","Input"],image:T("gibson-light-pen-1.jpg")},{id:"versatron-footmouse",slug:"versatron-footmouse",wikiTitle:"Versatron Footmouse",year:"1985",sortYear:1985,title:"Versatron Footmouse",subtitle:"The first commercial foot-operated computer cursor controller — built by a missile-guidance company as their only consumer product.",blurb:"The Versatron Footmouse (1985) was the first commercially available foot-operated cursor controller. A keyboard-wedge device that plugged between the keyboard and PC, it injected cursor-key scan codes when you slid your foot across its surface — no mouse drivers needed. The company that built it, Versatron Corporation, was primarily a defense contractor making actuators for Stinger missiles and the Excalibur artillery shell. The footmouse was their one consumer product: a sliding-pedal floor unit designed for accessibility, years before the ADA.",tags:["Foot","Input","Accessibility","Cursor Control"],image:T("versatron-footmouse-1.jpg")},{id:"segarc-3d",slug:"segarc-3d",wikiTitle:"Sega SubRoc-3D",year:"1982",sortYear:1982,title:"Sega SubRoc-3D",subtitle:"The arcade cabinet you pressed your face into — first stereoscopic 3D video game with a mechanical spinning-shutter periscope.",blurb:"Sega's SubRoc-3D (1982) was the first commercial stereoscopic 3D video game, featuring a submarine-periscope-shaped viewer with twin spinning disks that alternated left-eye and right-eye images at 30 fps. Players pressed their face against the eyepiece and gripped the controls below — a full upper-body embodied interface designed by Shikanosuke Ochi, the Sega engineer behind the 1966 Periscope and the first arcade trackball. The 3D system was co-developed with Matsushita (Panasonic) from their experimental 3D television technology. The ColecoVision home port stripped the 3D entirely: you cannot port this experience.",tags:["3D Display","Arcade","Embodied Interaction","Periscope"],image:T("subroc3d-cabinet-upright.jpg")},{id:"bandai-terebikko",slug:"bandai-terebikko",wikiTitle:"Bandai Terebikko (See 'n Say Video Phone)",year:"1988",sortYear:1988,title:"Bandai Terebikko",subtitle:"The VHS telephone that let cartoon characters call you — Bandai's pre-web interactive television.",blurb:"The Bandai Terebikko (1988) was an interactive VHS system shaped like a toy telephone. The handset plugged into a VCR's audio jack and decoded inaudible DTMF-like control tones embedded in licensed anime tapes. When a character 'called,' the phone rang — the child answered and pressed colored buttons to respond to quiz questions. Thirty-three tapes were produced featuring Super Mario, Dragon Ball Z, Sailor Moon, and Anpanman. It was pre-web interactive TV: the telephone as game controller, the VHS tape as bidirectional medium, and the parasocial framing of cartoon characters calling you by name.",tags:["Interactive Television","VHS","Toy","Japan","Consumer Electronics"],image:T("terebikko-system.jpg")},{id:"two-xl",slug:"two-xl",wikiTitle:"2-XL",year:"1978",sortYear:1978,title:"2-XL",subtitle:"A talking toy robot that used 8-track tape track-switching as an interactive branching mechanism — analog HCI at its most elegant.",blurb:"The Mego 2-XL (1978) was a toy robot with blinking red eyes and a slot for 8-track tape cartridges. It had no CPU, no RAM, no software — just an 8-track player and four buttons. But those buttons switched between the four parallel audio tracks on the tape, creating a seamless interactive conversation. Children pressed Yes or No, and the robot answered with a sarcastic synthesized voice. It was named one of the top ten toys of all time by Playthings magazine and predated digital interactive fiction by using the physical format as the interaction substrate.",tags:["Consumer","Toy","Audio","Interactive","Robot","Education"],image:T("2-XL_Educational_Toy_Robot_Mego_Corporation_1978.jpg")},{id:"surf-champ",slug:"surf-champ",wikiTitle:"Surf Champ",year:"1985",sortYear:1985,title:"Surf Champ",subtitle:"The ZX Spectrum game that shipped with a miniature plastic surfboard — shifting your hands forward, back, and sideways translated weight into fluid-dynamic surfing physics.",blurb:"Surf Champ (1985) was a surfing simulator for the ZX Spectrum 48K that came packaged with a 19cm miniature surfboard. The board sat on the keyboard; metal bobbles on its underside pressed different keys when you shifted your hand weight. Real fluid-dynamics algorithms modeled wave behavior at Fistral Beach, Cornwall. Endorsed by the International and European Surfing Associations, it held the first-ever esports tournament — the 1985 World Computer Surfing Championship — and then funding collapsed, leaving only 3,000 copies in existence.",tags:["Gaming","Sports","Input","Proprioception","Keyboard Overlay"],image:T("surf-champ-surfboard-1.jpg")},{id:"iwata-desktop-force-display",slug:"iwata-desktop-force-display",wikiTitle:"Iwata Desktop Force Display",year:"1990",sortYear:1990,title:"Iwata Desktop Force Display",subtitle:"A compact desktop haptic device that let you grope blind through invisible virtual space — feeling hard walls, squishy surfaces, and swirling fluid vortices with your bare hand.",blurb:"Hiroo Iwata's Desktop Force Display (SIGGRAPH 1990) was a compact haptic device small enough to sit on a desk. Three pantograph linkages supported a handle; the mechanism was so back-drivable and low-inertia that users felt nothing when moving through empty space. Deliberately, no visual display was provided — users relied entirely on force cues to find and explore invisible virtual objects. Hard surfaces felt impenetrable, elastic surfaces gave way like foam, and flow fields twisted the handle in vortices. It proved that force feedback alone is a complete sensory channel for spatial understanding.",tags:["Haptics","Force Feedback","VR","Research","Input"],image:T("iwata-desktop-force-display-1.jpg")},{id:"atari-video-music",slug:"atari-video-music",wikiTitle:"Atari Video Music / C-240",year:"1977",sortYear:1977,title:"Atari Video Music / C-240",subtitle:"The first commercial music visualizer — five knobs and a walnut box that turned your stereo into abstract television",blurb:"Before Winamp, before iTunes Visualizer, there was a wooden box from Atari with five knobs and twelve buttons. The Atari Video Music (1977) connected between a stereo and a TV, translating audio waveforms into live geometric animations through purely analog circuitry. Designed by Pong engineer Robert Brown, it was discontinued after one year — a glorious commercial failure that established an entire genre. When Sears asked what the developers were smoking, a technician held up a lit joint.",tags:["Audio-Visual","Analog","Consumer Electronics"],image:T("atari-video-music-1.jpg")},{id:"grimes-data-glove",slug:"grimes-data-glove",wikiTitle:"Grimes Digital Data Entry Glove",year:"1983",sortYear:1983,title:"Grimes Digital Data Entry Glove",subtitle:"A chorded keyboard you wear — type by touching your fingers together",blurb:"A fabric glove from Bell Labs where touching your fingers together types characters. Unlike position-tracking gloves, the Grimes Glove measures which fingers touch — each fingertip is a switch, your thumb is the common terminal, and typing means tapping finger to thumb in coded patterns. Patented in 1983 by Gary J. Grimes, it reimagined the chorded keyboard as something worn rather than held, years before wearable computing was a term.",tags:["Wearable","Chorded Keyboard","Input","Glove"],image:T("grimes-data-glove-1.png")},{id:"coleco-telstar-arcade",slug:"coleco-telstar-arcade",wikiTitle:"Coleco Telstar Arcade",year:"1977",sortYear:1977,title:"Coleco Telstar Arcade",subtitle:"The triangular 3-in-1 console whose body WAS the controller — rotate to play",blurb:"A triangular prism console where each face is a different game controller: a steering wheel, a light gun, and paddle knobs. To switch games, you physically rotate the whole four-pound unit. Each triangular cartridge contains its own CPU. Designed by Ralph Baer's team at Sanders Associates for Coleco, 1977.",tags:["Gaming","Input","Hardware"],image:T("coleco-telstar-arcade-1.jpg")},{id:"sf1-pneumatic",slug:"sf1-pneumatic",wikiTitle:"Street Fighter Pneumatic Controller",year:"1987",sortYear:1987,title:"Street Fighter Pneumatic Controller",subtitle:"The arcade cabinet that hurt you back — punch pads that sensed force through compressed air",blurb:"Capcom's 1987 Street Fighter deluxe cabinet replaced buttons with pneumatic pistons under rubber pads labeled PUNCH and KICK. Striking a pad compressed air in a chamber; a pressure sensor measured the spike to determine light, medium, or heavy attacks. Players got bloody knuckles. Capcom recalled it after roughly 1,000 units. The ROM was lost for decades until reverse-engineered in 2019.",tags:["Arcade","Force Sensing","Input"],image:T("sf1-pneumatic-1.jpg")},{id:"vectrex-light-pen",slug:"vectrex-light-pen",wikiTitle:"Vectrex Light Pen",year:"1983",sortYear:1983,title:"Vectrex Light Pen",subtitle:"The light pen that shouldn't have worked — a bullseye-tracking hack on a vector display",blurb:"Light pens normally need a raster scan beam to time position — impossible on a vector display. GCE's John Ross inverted the paradigm: software drew an expanding bullseye pattern that actively hunted for the pen's photodetector. Released in 1983 with Art Master, AnimAction, and Melody Master cartridges, turning the Vectrex into a direct-manipulation creative platform.",tags:["Input","Pointing","Gaming"],image:T("vectrex-light-pen-1.jpg")},{id:"heavyweight-champ",slug:"heavyweight-champ",wikiTitle:"Sega Heavyweight Champ",year:"1976",sortYear:1976,title:"Sega Heavyweight Champ",subtitle:"The first fighting game — and arguably the first motion-controlled video game — with spring-loaded mechanical boxing glove controllers on articulated arms",blurb:"The first fighting game, released by Sega in 1976 before microprocessors were standard in arcades. Two spring-loaded mechanical boxing glove controllers on articulated arms — players moved them up/down to aim and pushed inward to punch. Ran on discrete TTL logic: no CPU, no ROMs, just hardwired circuits and switch contacts. Considered lost until original schematics were rediscovered in Bologna in 2025.",tags:["Arcade","Motion Control","Physical Controller"],image:T("heavyweight-champ-1.jpg")},{id:"suncom-aerobics-joystick",slug:"suncom-aerobics-joystick",wikiTitle:"Suncom Aerobics Joystick",year:"1983",sortYear:1983,title:"Suncom Aerobics Joystick",subtitle:"An exercise bike adapter for the Atari 2600 that translated pedaling speed into proportional game input — cardiovascular exergaming, 35 years before Peloton",blurb:'A $39.95 adapter that converted pedaling speed into variable-rate fire button presses on the Atari 2600. A magnetic reed switch on the exercise bike flywheel drove a pulse-to-frequency circuit — the faster you pedaled, the faster your ship shot. Only one user account survives. Pioneered the "sustained exertion rate → in-game action rate" paradigm used by Peloton, Zwift, and every modern smart trainer.',tags:["Exergaming","Physical Controller","Atari 2600"],image:T("suncom-aerobics-1.jpg")},{id:"covox-voice-master",slug:"covox-voice-master",wikiTitle:"Covox Voice Master",year:"1984",sortYear:1984,title:"Covox Voice Master",subtitle:"Trainable voice command recognition for the Commodore 64 — a consumer speech I/O peripheral that let home computers listen, speak, and obey",blurb:"A $89.95 speech I/O peripheral for the Commodore 64 that combined voice recording, playback, and trainable speech recognition. Users trained up to 31 word templates, then controlled software by speaking. Bundled Blackjack was one of the first voice-controlled computer games. Added LEARN, SPEAK, TRAIN, and RECOG commands to BASIC, democratizing voice interaction for home programmers.",tags:["Speech Recognition","Input","Home Computer"],image:T("covox-voice-master-1.png")},{id:"liferower",slug:"liferower",wikiTitle:"LifeRower",year:"1986",sortYear:1986,title:"LifeRower",subtitle:"The rowing machine that was also a video game console — full-body exergaming, 20 years before the Wii",blurb:"A commercial rowing machine with a built-in color CRT and video games, released by Bally/Life Fitness in 1986. The rowing mechanism itself was the game controller: an optical encoder measured shaft RPM for on-screen boat speed, a microswitch synchronized the on-screen rower's animation to the user's strokes, and a magnetic particle brake provided constant-torque resistance. Two games built in: competitive boat racing and shark chase. Priced at $2,000–3,000, sold to commercial gyms. Predates Peloton and Ring Fit by 35 years.",tags:["Exergaming","Fitness","Rowing","Game Console"],image:T("liferower-1.png")},{id:"sega-ai-computer",slug:"sega-ai-computer",wikiTitle:"Sega AI Computer",year:"1986",sortYear:1986,title:"Sega AI Computer",subtitle:"A children's computer that understood natural language — touch overlays, speech recognition, and Prolog AI in 1986",blurb:"An extremely rare educational computer released by Sega in Japan in 1986, featuring a touch surface with swappable overlay sheets, speech recognition and synthesis, and a Prolog-based AI engine for natural language processing. Children used physical overlays to interact with lessons; the system's diary app asked about their day and generated grammatically correct entries from one-word answers. Built by Yamaha with software by CSK Research Institute. Only a handful survive; the complete ROM set was preserved and emulated in MAME in 2024.",tags:["Touch","Speech Recognition","Children's Computing","AI","Home Computer"],image:T("sega-ai-computer-unit.jpg")},{id:"ibutton",slug:"ibutton",wikiTitle:"Dallas Semiconductor iButton",year:"1990",sortYear:1990,title:"Dallas Semiconductor iButton",subtitle:"A 16mm steel can that turned touch into digital identity",blurb:"A microchip in a 16mm stainless steel can — shaped like a watch battery — that contained a unique, factory-lasered 64-bit serial number. To identify yourself to a computer, you pressed the button against a reader. Touch = identity. Invented by Dallas Semiconductor in 1990, the iButton used the 1-Wire protocol (data and power over a single conductor) and spawned an ecosystem of memory, clock, temperature, and cryptographic variants. Used as electronic keys, time clock tokens, Istanbul's Akbil transit smart ticket, and eventually the Java Ring (1998) — a finger-worn iButton with a full Java virtual machine.",tags:["Tangible","Identity","Token","Touch","Ubiquitous Computing"],image:T("ibutton-token.jpg")},{id:"trs80-voice-synthesizer",slug:"trs80-voice-synthesizer",wikiTitle:"TRS-80 Voice Synthesizer",year:"1979",sortYear:1979,title:"TRS-80 Voice Synthesizer",subtitle:"The speech synthesizer you programmed by writing to the screen",blurb:"A speech synthesis peripheral for the TRS-80 Model I that worked through the strangest interface imaginable: it read phoneme codes directly from video memory. To make it speak, you wrote ASCII phoneme strings like '?K6MPY(UT?' to the right half of the bottom screen line — the synthesizer would read them and produce speech. Each of the 60 phonemes was mapped to an arbitrary ASCII character (6=UH1, $=TH, +=NG), turning speech programming into a secret code. Built around the Votrax SC-01-A chip. Sold for $399 in 1979 by Radio Shack; discontinued in 1983. There was no text-to-speech engine — every word had to be manually decomposed into phonemes.",tags:["Speech Synthesis","TRS-80","Peripheral","Accessibility"],image:T("trs80-voice-synthesizer.jpg")},{id:"stompin",slug:"stompin",wikiTitle:"Stompin'",year:"1986",sortYear:1986,title:"Stompin'",subtitle:"The arcade game you play with your feet — Bushnell's 'floorplay' controller that invented the dance pad",blurb:"A 1986 arcade game by Bally Sente that introduced the first foot-operated grid controller in arcade history — a 3×3 matrix of weight-sensitive pads embedded in a floor platform, each surrounded by individually-addressable LED light segments. To play, you stomped on bugs and mice by placing your feet on the corresponding pads while a Motorola 6809 CPU read a 9-bit shift register to determine your foot position and controlled 24 LED segments through a second shift register. Bally Sente coined the term 'floorplay' for this new interaction category. The patent (US 4,720,789) named Nolan K. Bushnell as co-inventor and explicitly described the system as both a video game and exercise apparatus — anticipating exergaming by decades. This is the direct ancestor of Dance Dance Revolution and every foot-operated rhythm game that followed.",tags:["Arcade","Foot Controller","Exergaming","Floor Interface","Input"],image:T("stompin-patent-fig1.png")},{id:"electroglottograph",slug:"electroglottograph",wikiTitle:"Kay Visi-Pitch / Electroglottograph",year:"1987",sortYear:1987,title:"Kay Visi-Pitch / Electroglottograph",subtitle:"A computer that reads what your vocal cords are doing, not what they sound like",blurb:"The Kay Visi-Pitch Model 6300 (1987) connected an electroglottograph (EGG) to an IBM PC via a custom ISA-bus ADC card. Two neck electrodes passed a 2-3 MHz current across the larynx, measuring vocal fold contact impedance — producing a waveform of laryngeal movement even during silent speech, whispering, or subvocalization. This is not a microphone and not EMG: it measures the internal mechanical dance of your vocal cords through tissue impedance. Used in speech therapy clinics as real-time visual biofeedback, patients could see their own vocal fold contact patterns on screen and learn to adjust them. The technology works when you produce no audible sound at all, making it a proto-'silent speech interface' decades before modern BCI research attempted the same. Kay Elemetrics (founded 1949) shipped the Model 6087 standalone Visi-Pitch in 1977 and added PC connectivity with the Model 6300 in 1987.",tags:["Biosignal Input","Medical","Biofeedback","Speech","Wearable","Accessibility"],image:T("eg2-pcx-electroglottograph.jpg")},{id:"action-max",slug:"action-max",wikiTitle:"Worlds of Wonder Action Max",year:"1987",sortYear:1987,title:"Worlds of Wonder Action Max",subtitle:"A VHS tape is the game cartridge, and a light gun reads screen brightness to score your shots",blurb:"The Action Max (1987) is a video game console that has no game cartridge and no on-screen graphics of its own. Game content lives entirely on ordinary VHS tapes; the console only registers trigger pulls from a jet-fighter-shaped 'Sonic Fighter' light gun, increments a 2-digit LED score on its base, and flashes a separate suction-cup 'Score Signal' lamp on the TV bezel. The light gun's photocell detects timed brightness flashes baked into the VHS video at the moments a target is shootable — subtle flicker patterns even encode target type (enemy vs. civilian). Built on a 4-bit Hitachi HD401010 microcontroller, launched the same quarter its parent company (Worlds of Wonder, founded by ex-Atari sales president Don Kingsborough) filed for Chapter 11, and dead within five launch tapes: Sonic Fury, .38 Ambush Alley, Blue Thunder, Hydrosub: 2021, and The Rescue of Pops Ghostly. A uniquely weird HCI paradigm: VHS-as-game-medium, light gun + photocell as input, console as score-only overlay.",tags:["Light Gun","VHS","Video Game Console","Optical Input","Commercial Failure","Input"],image:T("action-max-set.jpg")},{id:"lightwriter-sl1",slug:"lightwriter-sl1",wikiTitle:"Toby Churchill Lightwriter SL1",year:"c. 1985",sortYear:1985,title:"Toby Churchill Lightwriter SL1",subtitle:"A speech prosthesis with two screens — one for the typer, one facing the listener",blurb:"The Lightwriter is a portable augmentative and alternative communication (AAC) device invented by Toby Churchill, a British engineer who lost his own speech and almost all motor function to encephalitis contracted in 1968 at age 21. The defining feature of the SL1 (c. 1985) is a pair of back-to-back LCD displays: one faces the user, who composes the message on a QWERTY keyboard with a cursor; the other faces the listener, who reads the same text appearing character-by-character as it is typed. A built-in speech synthesizer then speaks the message aloud. This dual-display shared-workspace paradigm is the Lightwriter's distinctive HCI contribution — a speech prosthesis explicitly designed for face-to-face conversation, so both parties can read what is being typed in real time. Distinct from VersaBraille (Braille terminal), Tongue Touch Keypad (input peripheral), and Kay Visi-Pitch (clinical voice measurement). Toby Churchill Ltd was founded in 1973; descendants remain in production today under Abilia Ltd.",tags:["AAC","Accessibility","Speech Synthesis","Dual Display","Medical","Output"],image:T("lightwriter-sl35.jpg")},{id:"optacon-ii",slug:"optacon-ii",wikiTitle:"Optacon II (Tactile Reading Machine)",year:"1985",sortYear:1985,title:"Optacon II (Tactile Reading Machine)",subtitle:"Feel the shape of a printed letter vibrating against your fingertip, in real time — no OCR, no speech",blurb:"The Optacon (OPtical to TActile CONverter) is a direct sensory-substitution reading machine for blind users, conceived at Stanford in 1962 by EE professor John Linvill — motivated by his daughter Candy, blind from age three — and developed with Jim Bliss at SRI. A handheld camera images a single letterspace of printed text, and a 24×6 array of piezoelectric bimorph-driven vibrating pins maps that image 1:1 onto the user's index fingertip. The user reads by feeling the letters as flowing dot patterns at ~250–300 Hz — pure visual-to-tactile substitution with no OCR, no speech, no text storage; the human does the recognition in real time, at 30–100 wpm after extensive training. Roughly 15,000 units were sold across the 1971–1996 production life. The Optacon II (1985), co-developed with Canon Inc., was the redesigned variant with improved packaging and a computer/terminal interfacing capability allowing users to read CRT screens — squarely within the museum's window. A cost-driven decision reduced the tactile array from 144 to 100 pins and hurt usability badly enough that long-time users largely stuck with the older model.",tags:["Accessibility","Sensory Substitution","Tactile Output","Reading Machine","Piezoelectric","Output"],image:T("optacon-ii.jpg")},{id:"adventure-vision",slug:"adventure-vision",wikiTitle:"Entex Adventure Vision",year:"1982",sortYear:1982,title:"Entex Adventure Vision",subtitle:"A 150-pixel-wide red display synthesized by a spinning mirror sweeping a vertical column of 40 LEDs — a mechanical-scan display in a battery-powered handheld",blurb:"The Entex Adventure Vision (1982) is a handheld tabletop game console whose display is a 150×40 monochrome red raster, synthesized by a spinning flat mirror sweeping a single vertical column of 40 red GaAsP LEDs. An Intel 8048 microcontroller strobes the LEDs in patterns synchronized to the mirror's angular position; persistence of vision blends the 40-LED column into an apparent 150×40 pixel image at ~15 fps. The player holds the bulky 13.25 × 10 × 9 inch device with two hands: a 4-direction digital joystick in the center, with 4 physical buttons arranged symmetrically (2 left, 2 right) so left- and right-handed players each get a fire button and a secondary button. Only 4 game cartridges shipped (Defender as the pack-in, Super Cobra, Turtles, Space Force). It is an evolutionary dead-end whose only spiritual descendant is Nintendo's 1995 Virtual Boy. Roughly 10,000 systems sold (per collector consensus), at $79.95 MSRP, before Entex folded in 1983. The rotating-mirror mechanical-scan display is fundamentally different from CRT, LCD, and the Vectrex vector approach already in the museum, giving the collection a fourth display paradigm.",tags:["Display","Mechanical Scan","Rotating Mirror","Handheld","LED","Commercial Failure","Output"],image:T("adventure-vision-1.jpg")},{id:"bbc-domesday-project",slug:"bbc-domesday-project",wikiTitle:"BBC Domesday Project",year:"1986",sortYear:1986,title:"BBC Domesday Project",subtitle:"A million contributors, two laserdiscs, a trackball and 16 function keys — the pre-Web national point-and-click information system that became unreadable within 15 years",blurb:"The BBC Domesday Project (1986) was a national interactive multimedia system launched by the BBC to mark the 900th anniversary of the Domesday Book. A BBC Master AIV computer, a Philips VP415 laserdisc player with internal genlock and video-mixing board, a Marconi RB2 trackball, and a printed 16-key function-key overlay strip put a pre-Web point-and-click GUI into schools and libraries — running on a genlocked laserdisc/computer overlay, predating the World Wide Web. Over 1 million people crowd-contributed photographs and text entries; ~9,000 schools participated. The two LV-ROM discs (54,000 image frames and ~300 MB of digital data per side, interleaved with error protection) carried a national map browser of 24,000 4 km × 3 km blocks from Ordnance Survey, a topic hierarchy with natural-language search (the Porter Stemming Algorithm — yes, that Porter), and a Bosch FGS-4000-rendered 'Landscape of Knowledge' virtual art gallery with 9 'surrogate walks' (early non-immersive VR). By 2002 the Observer ran the famous headline 'Digital Domesday Book lasts 15 years not 1000' — the playback system had become unreadable. Recovery took a multi-decade, multi-institution effort (CAMiLEON, BBC R&D, domesday1986.com, Domesday Reloaded 2011, Domesday86 2020+). Fewer than 2,000 systems sold at ~£5,000 each. Distinct from RDI Halcyon (laserdisc game), Bandai Terebikko (VHS quiz), and Action Max (VHS light-gun shooter) — the only general-purpose national reference/information system in the candidate pool, and the canonical digital-obsolescence parable.",tags:["Laserdisc","Interactive Video","Trackball","GUI","Reference System","Crowdsourcing","Digital Obsolescence","Genlock","Input"],image:T("bbc-domesday-system.jpg")},{id:"hologram-time-traveler",slug:"hologram-time-traveler",wikiTitle:"Sega Hologram Time Traveler",year:"1991",sortYear:1991,title:"Sega Hologram Time Traveler",subtitle:"A curved mirror projects live-action actors as free-standing 3D figures above the cabinet — and a coin-bought 'time reversal' button rewinds your mistakes",blurb:"Sega Hologram Time Traveler (1991) is a 1991 arcade cabinet that produces the visual impression of free-standing 3D actors by reflecting a 20-inch Sony CRT, mounted face-up inside the cabinet, off a large black hemispherical concave mirror. The reflected light forms a real image — not a virtual one — that appears to hover in mid-air above a small darkened stage ringed by neon geometric blocks. The actors are pre-recorded live-action footage on laserdisc; the player interacts via a 4-way joystick, an action button, and a 'time reversal' button that rewinds the last few seconds of a failed segment so the player can retry without restarting — additional time-reversal 'cubes' are bought with inserted coins between levels. Designed by Rick Dyer, creator of Dragon's Lair (1983), through his Virtual Image Productions studio and GTE ImagiTrek / GTE Interactive Media; Sega published. The optical system is described in US Patent 4,776,118 ('Display device,' Goro Mizuno / Decos Co. Ltd, filed 1986, granted 1988). The 'hologram' is marketing language — the patent explicitly calls it a 'real image' produced by a single direct reflection, a Pepper's-ghost-lineage stage illusion, not laser-interference holography. The cabinet was fragile: Sega Retro (citing System16) confirms Time Traveler cabinets had hardware problems and Sega's 1992 Holosseum was produced specifically as a replacement. Where Hard Drivin' embodies the player through force feedback and Sega R360 through gyroscopic motion, Time Traveler embodies through perceptual illusion — the interface's claim is that the actor stands physically in front of you. The 'time reversal' input is a distinct HCI mechanic not present in any other museum artifact: a coin-purchasable mechanical undo for branching video.",tags:["Display","Holographic","Laserdisc","Arcade","Branching Video","Time Reversal","Commercial Failure","Output"],image:T("hologram-time-traveler-cabinet.jpg")},{id:"simon",slug:"simon",wikiTitle:"Milton Bradley Simon",year:"1978",sortYear:1978,title:"Milton Bradley Simon",subtitle:"A Texas Instruments TMS1000 microcontroller, four mechanical lighted push-buttons, and an A-major triad — the closed-loop microcontroller-mediated memory game that defined a genre",blurb:"Simon (1978) is the canonical, patent-protected, microcontroller-driven consumer artifact that defined the audio-visual memory-game genre — a closed-loop microcontroller-mediated human-machine interaction in purest form. A Texas Instruments TMS1000 4-bit single-chip microcontroller (one of the earliest consumer applications of a microcontroller, explicitly named in US Patent 4,207,087) generates a stochastic sequence of tone + light events. The player perceives the stimulus and responds by pressing one of four mechanical push-button keyswitches — translucent colored quadrants (red, green, blue, yellow) lit from behind by incandescent bulbs — each playing a distinct tone. The machine evaluates the response and adaptively lengthens or accelerates the next stimulus, with five game variants described in the patent (solo, two-player, timed, record/playback of tunes, multi-player elimination). The tones form an A major triad in second inversion (resembling a bugle fanfare — Baer's inspiration), so any sequence is always harmonic regardless of order. Invented by Ralph H. Baer (already in the museum via Coleco Telstar Arcade, his earlier work at Sanders Associates) and Howard J. Morrison at Marvin Glass and Associates in Chicago, with software by Lenny Cope and much of the assembly code by Charles Kapps (Temple University). Patent US 4,207,087 filed September 1977, granted June 1980. Launched at Studio 54 in New York City in 1978 at $24.95; ~1 million sold in the first year; top-selling toy of the 1978 Christmas season. Still in production by Hasbro today, with dozens of variants across four decades. Simon is Baer's most iconic mass-market artifact and gives the museum a coherent Ralph-Baer thread alongside Coleco Telstar Arcade (1977).",tags:["Microcontroller","Audio-Visual","Memory Game","Consumer","Closed-Loop","TMS1000","Input"],image:T("simon-game.jpg")},{id:"telesar-i",slug:"telesar-i",wikiTitle:"TELESAR I",year:"1981–1984",sortYear:1982,title:"TELESAR I",subtitle:"First working telexistence system — a head-coupled stereoscopic telepresence rig that produced a genuine out-of-body sensation in every operator who tried it",blurb:"TELESAR I (1981–1984) was the world's first working telexistence system, developed by Susumu Tachi at Japan's Mechanical Engineering Laboratory in Tsukuba. The operator wore a stereo head-mounted display carried by a counterbalanced 6-DOF link mechanism that tracked head movements in real time, while a parallel-link master arm captured hand and arm motion. On the remote side, an anthropomorphic slave robot (60 kg, 7-DOF arm, stereo CCD cameras on a 3-DOF neck, binaural microphones, gripper hand) replicated the operator's movements. Four Intel 286/386 computers processed the control loops at 10 ms. When Tachi first tested the visual-only prototype in late 1981, he experienced what he described as an out-of-body sensation (yūtai ridatsu) — he could observe his real self raising and lowering hands from the robot's perspective. This was independently confirmed by visitors Grant Fjermedal (documented in The Tomorrow Makers, 1986) and Howard Rheingold (documented in Virtual Reality, 1991). The system was funded through Japan's eight-year national 'Advanced Robot Technology in Hazardous Environments' project (1983–1990). The core HCI principle — that tight visuomotor coupling between human and machine creates genuine presence — predates and underlies all modern VR and telepresence. The 'telexistence' concept (1980) was Tachi's independent Japanese invention, contemporaneous with but distinct from Marvin Minsky's 'telepresence' (1980) — telexistence explicitly includes virtual environments and frames the avatar robot as a virtual exoskeleton, a dialectical synthesis (Aufhebung) of the dangerous physical exoskeleton and autonomous supervised robot paradigms.",tags:["Telepresence","Robotics","VR","HMD","Japan","Out-of-Body","Master-Slave"],image:T("telesar-i-system.png")},{id:"minitel",slug:"minitel",wikiTitle:"Minitel",year:"1982",sortYear:1982,title:"Minitel",subtitle:"The terminal France gave away for free — 9 million keyboards brought a nation online a decade before the Web",blurb:"Minitel (1982–2012) was a dedicated videotex terminal distributed free to French telephone subscribers, combining a 9-inch monochrome CRT, an AZERTY keyboard, and a built-in V.23 modem. By 1993, 6.5 million terminals were in French homes with 25,000 services — phone directories, train reservations, home banking, and the 'messageries roses' chat services that became the first mass-market computer-mediated social phenomenon. It ran for 30 years, outliving every other national videotex system.",tags:["Public Kiosk","Videotex","Telecommunications","Network Terminal"],image:T("minitel1.jpg")},{id:"dycam-model-1",slug:"dycam-model-1",wikiTitle:"Dycam Model 1 / Logitech Fotoman",year:"1990",sortYear:1990,title:"Dycam Model 1 / Logitech Fotoman",subtitle:"The camera with one button, no screen, volatile memory, and a fake shutter sound — a computer peripheral that happened to be shaped like a camera",blurb:"The Dycam Model 1 (1990, $995) was the first commercially sold fully-digital consumer camera in the US. It had exactly one physical control — the shutter button. No LCD, no mode dial, no on/off switch. Images lived in volatile DRAM: if the battery died, your photos vanished. Even the shutter sound was fake — a speaker generated a simulated click to reassure photographers. Logitech licensed the design for $1M as the Fotoman FM-1, establishing the consumer digital camera category before Apple's QuickTake.",tags:["Digital Camera","Computer Peripheral","Image Capture","Input Device"],image:T("fotoman-black.jpg")},{id:"novation-cat",slug:"novation-cat",wikiTitle:"Novation CAT",year:"1977",sortYear:1977,title:"Novation CAT",subtitle:"The acoustic coupler that made the telephone a computer peripheral — one rubber cup at a time",blurb:"The Novation CAT (c. 1977) was the gateway modem of the early home computer era. To go online, you dialed a number on your telephone, listened for the remote modem's answer tone, then pressed the handset into two rubber cups to acoustically couple sound to data. No auto-dial, no AT commands — just you, a phone, and the shriek of a 300 baud carrier. Rebranded by Apple, Atari, TI, and Radio Shack. Immortalized in WarGames.",tags:["Telephony","Modem","Networking","Peripheral"],image:T("novation-cat-coupler.jpg")},{id:"cracklebox",slug:"cracklebox",wikiTitle:"Cracklebox / Kraakdoos",year:"1978",sortYear:1978,title:"Cracklebox / Kraakdoos",subtitle:"The electronic instrument where the human body becomes a variable circuit component",blurb:"The Kraakdoos (1978) is a small wooden box with six exposed metal contacts wired directly to a bare, unstable operational amplifier. Touch them and your body completes the circuit — skin conductivity becomes a variable resistor and capacitor in the feedback loop. Different people produce different sounds; the same person sounds different depending on humidity and finger pressure. Designed by Michel Waisvisz at STEIM, Amsterdam. Never commercialized; disseminated through DIY workshops.",tags:["Music","Circuit Bending","Touch","Experimental"],image:T("cracklebox.jpg")},{id:"the-hands",slug:"the-hands",wikiTitle:"The Hands",year:"1984",sortYear:1984,title:"The Hands",subtitle:"Michel Waisvisz's hand-worn gestural MIDI controller — wooden frames, tilt sensors, and ultrasound",blurb:"The Hands (1984) is a pair of hand-worn wooden frames fitted with switches, potentiometers, tilt sensors, and ultrasonic rangefinders — strapped to the performer's hands and converting arm gestures, hand tilts, and finger presses into MIDI data. Built by Michel Waisvisz at STEIM, Amsterdam, one year after the MIDI standard was published. Predates the Power Glove by five years. The body is the interface, not just the operator of an interface.",tags:["Music","Gesture","Wearable","MIDI","Sensor","Experimental"],image:T("the-hands-hero.jpg")},{id:"topo",slug:"topo",wikiTitle:"Topo",year:"1983",sortYear:1983,title:"Topo",subtitle:"Nolan Bushnell's 36-inch programmable floor robot — code made physical",blurb:"Topo (1983) was a life-sized humanoid robot wirelessly programmable from an Apple II. Write code in TopoBASIC, and a 36½-inch beige plastic robot across the room executes those geometric movements. Topo I had no sensors — no bump detection, no sonar, no feedback loop. It was a pure physical output device, a body for your program to inhabit. $495 from Androbot Inc. (Nolan Bushnell's post-Atari startup). Only ~650 units shipped before the company folded.",tags:["Robotics","Education","Programming","Physical Computing"],image:T("topo-robot.jpg")},{id:"famicom-network-system",slug:"famicom-network-system",sortYear:1988,wikiTitle:"Famicom Network System / Famicom Modem",year:"1988",title:"Famicom Network System / Famicom Modem",subtitle:"Japan's iconic game console becomes a stock trading and horse-betting terminal",blurb:"The Famicom Network System (1988) was a dial-up modem peripheral for Nintendo's Famicom that turned the world's most popular game console into a financial information appliance. A special controller with an orange numeric keypad replaced the game pad. Users checked stock quotes from Nomura Securities, transferred money between bank accounts, and bet on horse races — through the same machine that an hour earlier might have been running Super Mario Bros. 130,000 modems shipped. At its peak, it captured 35% of Japan's online horse-betting market. Nintendo president Hiroshi Yamauchi believed the Famicom would become as essential as the telephone.",tags:["Network","Console","Modem","Online Service","Telephony"],image:T("famicom-modem-attached.jpg")},{id:"videoface",slug:"videoface",sortYear:1986,wikiTitle:"Videoface Digitizer",year:"1986",title:"Videoface Digitizer",subtitle:"Real-time video frame capture for the ZX Spectrum, at £69",blurb:"The Videoface (1986) was a composite-video digitizer for the ZX Spectrum that captured grayscale frames at 256×192 pixels with 16 intensity levels at nearly 4 frames per second. Plug in any video source — camera, VCR, laserdisc — and watch live digitized footage on the Spectrum's display. A single contrast knob on top adjusted brightness in real time. Originally £69, dropping to £30. Neither a scanner, nor a camera, nor a video game interface — it was a real-time video capture peripheral that bridged the analog broadcast world and the home computer's digital pixel grid. Made by Data-Skip (Netherlands) and later Romantic Robot UK.",tags:["Video","Input","Peripheral","ZX Spectrum","Digitizer"],image:T("videoface.jpg")},{id:"little-professor",slug:"little-professor",sortYear:1976,wikiTitle:"TI Little Professor",year:"1976",title:"TI Little Professor",subtitle:"The backwards calculator — a machine that asks the questions",blurb:"The Little Professor (1976) was Texas Instruments' first electronic educational toy — a calculator that refused to calculate. Instead of solving problems, it generated random equations and quizzed the user. Select a difficulty level and operation, and the owl-faced device presents '3 × 6 ='. Three tries per problem; 'EEE' on wrong answers; score after ten problems. Priced under $20, it sold over one million units in 1977. The interaction model — machine-asks, human-answers — is the ancestor of every drill-and-practice app, every Duolingo lesson, every adaptive quiz engine. The pedagogy was entirely in the interaction design, not the code.",tags:["Education","Calculator","Handheld","Math","Toy"],image:T("little-professor-booklet.jpg")},{id:"sharp-wizard",slug:"sharp-wizard",sortYear:1989,wikiTitle:"Sharp Wizard OZ-7000",year:"1989",title:"Sharp Wizard OZ-7000",subtitle:"Transparent touch panel over swappable physical IC cards — a plug-and-play hardware UI",blurb:"The Sharp Wizard OZ-7000 (1989) featured a 4×5 matrix of touch zones on a transparent overlay covering a recessed IC card slot. Insert a card — scientific calculator, thesaurus, 8-language translator, spreadsheet, or Tetris — and the 20 touch zones mapped to that card's printed template, visible through the glass. Swapping the card physically changed both the software and the visible input surface. This was hardware-defined modular UI: plug-and-play interaction before capacitive touchscreens and app stores. Priced around $299–399 with cards at $50–120 each, the Wizard dominated the electronic organizer market and was immortalized in a 1998 Seinfeld episode where Jerry gives one to his father as a gift.",tags:["Touchscreen","Portable","Organizer","Modular","PDA"],image:T("sharp-wizard-OZ-7000.png")},{id:"cambridge-z88",slug:"cambridge-z88",sortYear:1987,wikiTitle:"Cambridge Z88",year:"1987",title:"Cambridge Z88",subtitle:"Clive Sinclair's silent A4 notebook computer — 20mm thin, no moving parts",blurb:"The Cambridge Z88 (1987) was Clive Sinclair's final computer: an A4-sized, 900g notebook that contained no moving parts at all. A silent rubber membrane keyboard registered keystrokes without a click — designed for quiet use in meetings and libraries. Three proprietary RAM/EPROM card slots replaced disk drives; capacitor-backed internal RAM preserved work when the machine was switched off. The preemptive multitasking OS suspended and resumed applications instantly. Bundled PipeDream unified word processing, spreadsheet, and database in a single document format. Designed by Rick Dickinson (ZX Spectrum, Sinclair QL), priced at £230, approximately 100,000 units sold. The Z88 was Sinclair's most distilled vision: portable computing that didn't announce itself, didn't need saving, and fit in a shoulder bag.",tags:["Portable","Sinclair","Keyboard","Notebook","Silent"],image:T("cambridge-z88-open.jpg")},{id:"casio-pb1000",slug:"casio-pb1000",sortYear:1987,wikiTitle:"Casio PB-1000",year:"1987",title:"Casio PB-1000",subtitle:"A folding pocket computer with 16 touch zones embedded directly in the LCD",blurb:"The Casio PB-1000 (1986 Japan / 1987 international) embedded a resistive touch digitizer directly on top of its folding pocket computer's LCD — one of the earliest touch-sensitive handheld displays. A 4×4 matrix of 16 fixed touch zones rendered as on-screen soft keys whose functions changed depending on mode: calculation, menu navigation, text editing, or program selection. Under the lift-up LCD sat a full QWERTY keyboard with 13 additional capacitive touch keys. Powered by a custom Hitachi HD61700 CPU and programmable in both C61 BASIC and assembly language, the PB-1000 represents a brief, strange moment when pocket computing experimented with direct screen interaction before styluses and capacitive touch won. A dedicated enthusiast community has reverse-engineered the CPU, built emulators, and published fully commented ROM disassemblies.",tags:["Portable","Touchscreen","Programming","Pocket Computer","Resistive"],image:T("casio-pb1000.jpg")},{id:"ti-silent-700",slug:"ti-silent-700",sortYear:1975,wikiTitle:"TI Silent 700 Model 745",year:"1975",title:"TI Silent 700",subtitle:"A 13-pound briefcase terminal — place a telephone handset into its rubber cups to go online",blurb:"The Texas Instruments Silent 700 Model 745 was a self-contained portable data terminal in a briefcase. It integrated a full keyboard, a 30-character-per-second thermal printer, and an acoustic coupler — two molded rubber cups in the lid that accepted a standard telephone handset. To go online, you dialed a number, listened for the carrier tone, and pressed the handset into the cups. Data flowed through sound alone at up to 300 baud, printed on heat-sensitive paper in near-silence. Priced at $1,995, it was used by field engineers, journalists, and early CompuServe subscribers — making 'going online' a physical ceremony involving rubber cups, thermal paper, and the sound of data traveling through a telephone handset.",tags:["Terminal","Portable Computing","Telecommunications","Thermal Printing","Acoustic Coupler"],image:T("ti-silent-700-open.jpg")},{id:"hayes-smartmodem",slug:"hayes-smartmodem",sortYear:1981,wikiTitle:"Hayes Smartmodem 300",year:"1981",title:"Hayes Smartmodem 300",subtitle:"The modem that taught computers to dial the phone — and created the language every modem still speaks",blurb:"Before the Hayes Smartmodem 300 (1981), using a modem meant manually dialing a phone, listening for the carrier tone, and pressing the handset into rubber acoustic cups. The Smartmodem replaced this entire ritual with a single software command: ATDT. Its AT command set — ATDT5551212 sent from the computer over RS-232 — became the universal language of modem control, turning the telephone network into a programmable peripheral. The internal speaker let users hear negotiation tones as audio feedback, and the +++ escape sequence allowed switching between data and command modes without hanging up. Housed in an extruded aluminum 'Hayes Stack' case and priced at $279, it used a Zilog Z8 microcontroller. Within two years, Hayes was selling 140,000 modems annually, and the BBS revolution had its standard-bearer.",tags:["Modem","Telephony","Networking","Telecommunications","AT Commands"],image:T("hayes-smartmodem-hero.jpg")},{id:"commodore-1520-plotter",slug:"commodore-1520-plotter",sortYear:1983,wikiTitle:"Commodore 1520 / Atari 1020 Printer Plotter",year:"1983",title:"Commodore 1520 / Atari 1020",subtitle:"A miniature four-color mechanical drawing machine that made physical output a spectacle",blurb:"The Commodore 1520 (also sold as the Atari 1020, Tandy CGP-115, and several other rebadged variants) was a miniature color pen plotter built around the Japanese ALPS DPG1302 mechanism. Using 4.5-inch roll paper, a four-pen rotating turret, and stepper motors, it produced multicolor vector graphics at ~0.2 mm resolution with a distinctive hand-drawn aesthetic. But the real draw was the spectacle: paper whipping back and forth, the turret audibly clicking between colors, a solenoid hammering the pen down with a sharp 'thwack.' Priced at $199–$299 in 1983, it was the cheapest color output device for any home computer — transforming computer output into a watchable, listenable mechanical ceremony.",tags:["Output","Plotter","Physical Computing","Drawing Machine","Mechanical"],image:T("commodore-1520-hero.jpg")},{id:"rainbow-sentinel",slug:"rainbow-sentinel",sortYear:1984,wikiTitle:"Rainbow Sentinel Dongle",year:"1984",title:"Rainbow Sentinel Dongle",subtitle:"When software came with a physical key you had to plug into your printer port",blurb:"The Rainbow Sentinel (1984) was a hardware key for software: a small plastic block that plugged into the parallel port of an IBM PC. Without this specific physical object, protected software — AutoCAD, CorelDRAW, Cubase — simply refused to run. It wasn't a password or a serial number; it was a physical lock for a thing made of pure information. Internally, a custom IC with deliberately ground-off part numbers responded to cryptographic challenges. Multiple dongles could be daisy-chained for users who owned multiple protected programs. Jerry Pournelle captured the user anxiety in BYTE (1988): 'I don't know what the thing is doing... For all I know, the gizmo may infect my machine with a virus.' The Sentinel's descendants — including the iLok used in professional audio — still enforce the principle that the most reliable security is something you can touch.",tags:["Security","Physical Token","Copy Protection","Peripheral","Input"],image:T("rainbow-sentinel-front.jpg")},{id:"roland-mc8",slug:"roland-mc8",sortYear:1977,wikiTitle:"Roland MC-8 MicroComposer",year:"1977",title:"Roland MC-8 MicroComposer",subtitle:"The music machine you programmed with a calculator keypad instead of a keyboard",blurb:"The Roland MC-8 MicroComposer (1977) was a music sequencer with no piano keyboard — just a numeric keypad. At $4,795 (¥1.2M), it was one of the earliest standalone microprocessor-driven CV/Gate sequencers, built around an Intel 8080A with 16KB of RAM storing up to 5,200 notes. Notes were entered by typing numbers: the preferred workflow was programming, not performing. Only 200 units were sold worldwide, but each went to someone who changed popular music: Kraftwerk used it on The Man-Machine, Yellow Magic Orchestra called its programmer their 'fourth member,' Hans Zimmer learned electronic composition on it, and Giorgio Moroder sequenced From Here to Eternity with it. Backup took 45 minutes to cassette tape; volatile memory meant power loss destroyed everything. The MC-8 represents the radical moment when making music became indistinguishable from writing code — a programmer's terminal masquerading as a musician's instrument.",tags:["Music","Input","Sequencer","Roland","Programming"],image:T("roland-mc8-front.jpg")},{id:"omnichord",slug:"omnichord",sortYear:1981,wikiTitle:"Suzuki Omnichord",year:"1981",title:"Suzuki Omnichord",subtitle:"The electronic autoharp that replaced strings with a capacitive touch strip",blurb:"The Suzuki Omnichord (1981) was an electronic autoharp for people who had never touched an instrument. Your left hand pressed chord buttons from a grid of 27 (later 84) selections; your right hand strummed the 'Sonic Strings' — a capacitive touch plate mapping chord-degree arpeggios across four octaves. The notes were always in key with the selected chord. A built-in rhythm machine and auto-bass line provided accompaniment. You could not play a wrong note. David Bowie performed with one at the 2001 Concert for New York City. Brian Eno and Daniel Lanois slowed one down into the ambient beauty of 'Deep Blue Day' from Apollo. Gorillaz built 'Clint Eastwood' around its 'Rock 1' preset. The Omnichord democratized music-making through constrained interaction design — a philosophy that anticipated Guitar Hero, GarageBand Smart Instruments, and every app that guarantees pleasant output regardless of skill.",tags:["Music","Input","Touch","Capacitive","Consumer"],image:T("omnichord-om27.jpg")},{id:"linus-writetop",slug:"linus-writetop",sortYear:1988,wikiTitle:"Linus Write-Top",year:"1988",title:"Linus Write-Top",subtitle:"The first handwriting recognition tablet — no keyboard, just a pen and 30 minutes of training",blurb:"The Linus Write-Top (1988) was the first commercially released tablet computer with handwriting recognition. There was no keyboard at all. You wrote on its 9.4-inch monochrome LCD with any stylus — even a mechanical pencil would work. A terminate-and-stay-resident program called Your-Write converted your handwriting (entered in a zone at the bottom of the screen) into ASCII text, injecting it live into whatever DOS application you were running. Training took 30 minutes. The NEC V20 CPU ran MS-DOS 3.30, the two-piece clamshell weighed 9 pounds, and the price was $3,000. Linus Technologies, founded by NASA environmental monitoring developer Ralph Sklarew and English professor Robert Nadeau, sold about 1,500 units before going bankrupt in February 1990. Sklarew reflected: 'We were a little too early with not enough staying power.' The patents went to GRiD Systems. Five years before the Apple Newton, this was the moment pen computing first tried — and failed — to become the future.",tags:["Pen Computing","Tablet","Handwriting Recognition","Input","Portable"],image:T("linus-writetop.jpg")},{id:"casio-vl1",slug:"casio-vl1",sortYear:1981,wikiTitle:"Casio VL-1 / VL-Tone",year:"1981",title:"Casio VL-1 / VL-Tone",subtitle:"The calculator that became a musical instrument — and vice versa",blurb:"The Casio VL-1 (1981) was a pocket-sized device where a single physical switch rewired every key on its 29-button keypad. In calculator mode, the keys did arithmetic. Flip the switch, and the same keys became musical notes — Do, Re, Mi labeled right alongside 1, 2, 3. At $69.95, it was arguably the first affordable commercial digital synthesizer. ADSR parameters were entered as 8-digit numeric codes: you designed sounds by typing numbers. A 100-note step sequencer and 10 preset rhythms made it a complete lo-fi production tool. German band Trio used its Rock-1 preset for the 1982 hit 'Da Da Da.' The Human League used it on 'Dare.' The VL-1 is one of consumer electronics' purest examples of modal interface design — where a physical switch doesn't just change mode, it transforms what every button means.",tags:["HCI","Input","Music","Consumer Electronics","Modal Interface"],image:T("casio-vl1-front.jpg")},{id:"rockwell-aim65",slug:"rockwell-aim65",sortYear:1978,wikiTitle:"Rockwell AIM-65",year:"1978",title:"Rockwell AIM-65",subtitle:"The single-board computer that talks back on paper",blurb:"The Rockwell AIM-65 (1978) was a complete 6502-based computer on a single exposed circuit board — and its primary display was not a screen, but a built-in 20-column thermal printer. Type a command and the machine literally printed its response onto a scrolling paper roll, creating a permanent physical record of the human-machine conversation. A 20-character LED provided minimal status feedback; the printer was the real output. Used in university engineering labs, process control, and microprocessor programming courses, the AIM-65 was a self-contained 'measure, compute, print' pipeline. You could connect temperature probes and pressure sensors directly to the board and get immediate hardcopy results. In an era racing toward glass CRTs, the AIM-65 represents a brief, beautiful dead end: the computer that wrote everything down.",tags:["HCI","Output","Single-Board Computer","Paper Interface","Laboratory"],image:T("aim65-vcfb.jpg")},{id:"casio-sk1",slug:"casio-sk1",sortYear:1985,wikiTitle:"Casio SK-1 Sampling Keyboard",year:"1985",title:"Casio SK-1 Sampling Keyboard",subtitle:"One button. Any sound. Now play it.",blurb:"The Casio SK-1 (1985) reduced digital sampling to a single gesture: slide a switch, hold one button, make a noise, release — and your sound is now mapped across 32 miniature piano keys, playable chromatically. At $99.95 with 1.4 seconds of 8-bit memory, it democratized a technology that cost $10,000+ in professional studios. The real magic came after. The SK-1's exposed PCB traces — a consequence of cheap construction, not design intent — made it the most famous circuit-bending platform in history. Touch the bare circuit board with your fingers, and the device glitches into a completely new instrument. Autechre used it in their earliest recordings. Blur's Damon Albarn played it on 'Advert.' DJ Hype and Large Professor built early beats with it. The SK-1 is a rare triple convergence: mass-market toy, professional tool, and hacker platform — all because one button did exactly one thing perfectly.",tags:["HCI","Input","Music","Sampling","Consumer Electronics","Circuit Bending"],image:T("casio-sk1-front.jpg")},{id:"synsonics",slug:"synsonics",sortYear:1981,wikiTitle:"Mattel Synsonics Drums",year:"1981",title:"Mattel Synsonics Drums",subtitle:"The toy drum machine that Kraftwerk took seriously",blurb:"The Mattel Synsonics Drums (1981) is an electronic drum synthesizer from Mattel Electronics that fuses three interaction modes in one handheld box: play it with drumsticks on four velocity-sensitive rubber pads, program patterns with auto-repeat buttons, or layer live stick playing over running auto-sequences. The bass drum can ONLY be played automatically — there is no dedicated pad. A tap-tempo feature syncs to external music by rhythmically pressing two buttons. Despite its toy origins and £99 price, the Synsonics was adopted by professional musicians including Kraftwerk. The all-analog sounds — tuneable tom spanning five octaves, white-noise snare and cymbal — are produced by a custom LSI chip. The 1983 review in Electronics & Music Maker identified six distinct performance modes, from pure manual to additive layering. A toy company making a drum machine that professional musicians adopted, where half the sounds can only exist as programmed patterns — that ambiguity between toy and instrument is the entire point.",tags:["HCI","Input","Music","Toy","Analog"],image:T("synsonics.jpg")},{id:"pk232",slug:"pk232",sortYear:1986,wikiTitle:"AEA PK-232 Pakratt 232",year:"1986",title:"AEA PK-232 Pakratt 232",subtitle:"The box that made the radio spectrum feel like a data network",blurb:"The AEA PK-232 'Pakratt 232' (1986) is a multimode amateur radio data controller — a metal box with 21 status LEDs that sits between a personal computer and two radio transceivers, translating the invisible radio spectrum into text on your screen. Connect your computer via RS-232, plug in an HF and a VHF radio, type arcane terminal commands, and tune across the dial until the green tuning-indicator LEDs lock onto a signal. Text scrolls in: a packet radio message from across the continent, a RTTY weather bulletin, a Morse code transmission, or a weather satellite image resolving line by line. The PK-232 treated the radio spectrum as a data network years before the public web existed, decoding packet radio (AX.25), radioteletype, Morse code, AMTOR, WEFAX, and Navtex — all from a single $319.95 box. Built by AEA (Mike Lamb, N7ML) in Hong Kong, the PK-232 became the best-selling multimode controller in amateur radio history. The physical ritual — twisting a VFO knob while watching LEDs flicker, then seeing text emerge from static — made the radio spectrum feel like a network you could touch.",tags:["HCI","Network","Radio","Communication","LED"],image:T("pk232.jpg")},{id:"ti-magic-wand",slug:"ti-magic-wand",sortYear:1982,wikiTitle:"TI Magic Wand Speaking Reader",year:"1982",title:"TI Magic Wand Speaking Reader",subtitle:"The barcode wand that read children's books aloud, years before LeapFrog",blurb:"The TI Magic Wand Speaking Reader (1982) combined a barcode-scanning wand with TI's Speak & Spell speech synthesis chip. A child swiped the wand across barcode strips printed beneath the text in special picture books, and the LP-shaped base unit spoke the words aloud — barking, singing, even saying 'supercalifragilisticexpialidocious.' At $120 with $12 books (Spider-Man, E.T., Berenstain Bears), it made books interactive before 'interactive' was a word. Discontinued within 18 months when TI shuttered its Consumer Products Division in 1983. The physical ritual — careful left-to-right wand swiping as a reading act, with comprehension quizzes answered through the same gesture — is a genuinely novel HCI paradigm that bridges barcode scanning and speech synthesis in a way no device has replicated since.",tags:["HCI","Input","Speech","Education","Barcode"],image:T("magic-wand.jpg")},{id:"tektronix-7854",slug:"tektronix-7854",sortYear:1980,wikiTitle:"Tektronix 7854 Waveform Processing Oscilloscope",year:"1980",title:"Tektronix 7854",subtitle:"The oscilloscope with a detachable RPN calculator keyboard — a lab instrument taught to compute",blurb:"The Tektronix 7854 Waveform Processing Oscilloscope (1980) was a 400 MHz analog/digital hybrid with a defining feature: a detachable calculator-style keyboard that used Reverse Polish Notation to perform waveform mathematics. Type 'WAVEFORM A WAVEFORM B +' and the scope added two captured signals point-by-point. Operations included FFT, integration, differentiation, log, and square root — all on entire waveforms as operands. Internally codenamed the 'Smart Scope,' it ran a TMS9900 CPU (same chip as the TI-99/4 home computer) with 32KB ROM and 8KB RAM. The keyboard was explicitly designed to be detachable so the instrument could revert to a conventional scope. At $10,500 in 1981 (~$38,600 today), it was produced for a decade and became a mainstay of research laboratories worldwide. The collision of two interface paradigms — analog knobs for signal viewing, RPN keyboard for computation — in one 42-pound instrument makes it a unique artifact of hybrid HCI.",tags:["HCI","Scientific","Hybrid","Input","Laboratory"],image:T("tektronix-7854.jpg")},{id:"buick-gcc",slug:"buick-gcc",sortYear:1986,wikiTitle:"Buick Riviera Graphic Control Center",year:"1986",title:"Buick Riviera GCC",subtitle:"The first automotive touchscreen — a green-phosphor CRT dashboard, 15 years too early",blurb:"The Buick Riviera Graphic Control Center (1986) was the first production touchscreen in any automobile. A 5-inch green-phosphor CRT covered by an invisible Mylar resistive-touch membrane replaced conventional knobs and buttons with six context-dependent soft-key zones. It controlled climate, AM/FM radio with graphic equalizer, trip computer, gauges, and complete vehicle diagnostics — all through tap-on-screen interaction. The CRT pre-warmed when the driver touched the door handle, booting to a Buick logo before revealing the home page. Developed from 1980 under GM Chairman Roger B. Smith and tested in a fleet of 100 Rivieras before launch, the GCC appeared in the 1986 Riviera, 1988-89 Reatta, and 1989-92 Toronado before GM abandoned it. The auto industry wouldn't catch up for another 15+ years. It redefined the dashboard as a reconfigurable software surface — a bet nearly every modern car has now made.",tags:["HCI","Touchscreen","Automotive","Embedded"],image:T("buick-gcc.jpg")},{id:"data-discman",slug:"data-discman",sortYear:1990,wikiTitle:"Sony Data Discman / Electronic Book Player",year:"1990",title:"Sony Data Discman",subtitle:"The first dedicated e-book reader, three years before the word meant anything",blurb:"The Sony Data Discman (DD-1, Japan 1990) was the first purpose-built portable e-book reader. It was not a computer you program — it was a book machine. Content arrived on 3.15-inch CD-ROM discs in Sony's Electronic Book (EB) format, each holding up to 100,000 pages, and you searched it with a small QWERTY keyboard plus dedicated Yes/No keys that drove a scripted, dialogue-style retrieval flow: the machine asks, you answer, the book opens. Sony licensed its $9,000 authoring system to publishers, and 240+ titles eventually shipped — mostly dictionaries and travel references, plus exactly one novel. Japan bought 90,000 units in eight months; the West bought almost none. The DD-1EX now sits in the permanent collection of the Victoria and Albert Museum.",tags:["E-Reader","Information Appliance","Portable","Optical Disc"],image:T("data-discman-1.jpg")},{id:"fidelity-voice-chess",slug:"fidelity-voice-chess",sortYear:1980,wikiTitle:"Fidelity Voice Sensory Chess Challenger",year:"1980",title:"Fidelity Voice Sensory Chess Challenger",subtitle:"The chess computer that felt your move and talked back",blurb:"Fidelity Electronics of Chicago built the first commercial chess computer, the Chess Challenger 1 (1977). The 1980 Voice Sensory Chess Challenger added two things: a board of 64 pressure-sensing squares so you input your move by pressing a piece down on its destination square — no keypad, no coordinates, the board itself is the interface — and a speech ROM that announced the computer's moves aloud. It ran a Z80 at 4 MHz with 20 KB of ROM plus a dedicated voice ROM. The press-the-square paradigm outlived Fidelity and survives in chess computers to this day. The line is preserved at the Victoria and Albert Museum, the Computer History Museum, and even inside the MAME arcade emulator, which carries the Voice Sensory Chess Challenger's ROM set.",tags:["Games","Voice","Sensory Input","Embedded"],image:T("fidelity-voice-chess-1.jpg")},{id:"att-videophone-2500",slug:"att-videophone-2500",sortYear:1992,wikiTitle:"AT&T VideoPhone 2500",year:"1992",title:"AT&T VideoPhone 2500",subtitle:"A $1,500 color videophone that squeezed 10 frames a second out of a phone line",blurb:"The AT&T VideoPhone 2500 (1992) looked like a normal desk phone until you flipped up its 3.3-inch color LCD. A camera sat above the screen, a privacy shutter covered the lens, and the ritual was simple: dial normally, then press a key to activate video. The engineering feat was fitting compressed color video onto an ordinary POTS phone line — the video stream used about 11,200 bit/s at up to 10 frames per second, a jerky but real moving image of your caller. Sold from 1992 to 1995 at $1,500 (later $1,000), it moved about 30,000 units, mostly outside the US. It was the direct descendant of Bell Labs' Picturephone — a 'concept looking for a market' — finally small and cheap enough to try, and still a flop. FaceTime arrived eighteen years later.",tags:["Telephony","Video","Consumer","Communication"],image:T("att-videophone-2500-1.jpg")},{id:"ti-voyager",slug:"ti-voyager",sortYear:1988,wikiTitle:"TI Voyager",year:"1988",title:"TI Voyager",subtitle:"A talking toy with no keyboard — the only way in is to answer aloud",blurb:"The Texas Instruments Voyager (1988) is the strangest member of the Speak & Spell family: it has no keyboard at all. Where its siblings used a membrane keypad, the Voyager's entire interface is a soft headset on a flexible printed circuit. The toy speaks a lesson, and the child answers 'yes', 'no', 'true', or 'false' out loud; a speech recognizer decides whether the game continues. Eight swappable speech-ROM cartridges — 'Journey to Exotic Animals', 'Journey into Space', even 'Journey to U.S. Presidents' — turned it into a small platform. It vanished without a trace out of TI's shrunken consumer division, a forgotten bridge between Speak & Spell's talk and DragonDictate's listening.",tags:["HCI","Voice","Recognition","Toy"],image:T("ti-voyager-1.jpg")},{id:"pioneer-laserbarcode",slug:"pioneer-laserbarcode",sortYear:1985,wikiTitle:"Pioneer LaserBarcode System",year:"c.1985",title:"Pioneer LaserBarcode System",subtitle:"Swipe a printed strip of barcodes to command a laserdisc",blurb:"Pioneer's LaserBarcode system made the printed page a remote control for full-motion video. Trace a light-tipped pen wand across a strip of barcodes, hold the read button, and the industrial laserdisc player jumps to an exact frame or segment of a training disc. Publishers printed barcoded guides for hundreds of educational discs, and a whole software ecosystem — BarKoder for Windows, Bar 'n Coder for the Mac — let anyone print command sheets for any existing disc. The barcode strip was the interface; the expensive player was just the actuator.",tags:["HCI","Barcode","Video","Education"],image:T("pioneer-laserbarcode-1.jpg")},{id:"sony-view-system",slug:"sony-view-system",sortYear:1984,wikiTitle:"Sony VIEW System",year:"1984",title:"Sony VIEW System",subtitle:"A PC with a laserdisc for a hard drive",blurb:"The Sony VIEW System bolted a videodisc player into a personal computer and made the disc carry both the movie and the software. Built for the US Army's EIDS training contract, it encoded MS-DOS program files and digitized audio as black-and-white patterns inside individual video frames — 4KB per frame, with CD-style error correction. One pressed disc held 30 minutes of analog video, 54,000 addressable frames, and the executable courseware, and the EIDS configuration ran with no floppy drive at all: the training software simply came out of the video. Sony lost the Army bid to Matrox, and the VIEW became one of the strangest 'DVD before DVD' machines ever sold into classrooms.",tags:["HCI","Videodisc","Media","Training"],image:T("sony-view-system-1.jpg")},{id:"merlin",slug:"merlin",sortYear:1978,wikiTitle:"Parker Brothers Merlin / The Electronic Wizard",year:"1978",title:"Parker Brothers Merlin",subtitle:"The toy that played games with you — eleven glowing keys that were both your input and its only screen",blurb:"Merlin, released by Parker Brothers in 1978, was the best-selling toy in America in 1980 — a red phone-shaped box whose only interface was eleven buttons with red LEDs inside them. The keys were both the display and the input: the machine communicated by lighting them in patterns, and you answered by pressing them. Its six games included Tic-Tac-Toe against the computer, Blackjack 13, a step-sequencer Music Machine, and Mindbender, a Mastermind-style game in which the box secretly picked a number and you deduced it by questioning. More than five million sold. For millions of children, Merlin was the first computer that wanted to play with you.",tags:["Games","Embedded","LED","Handheld"],image:T("merlin-1.jpg")},{id:"etch-a-sketch-animator",slug:"etch-a-sketch-animator",sortYear:1986,wikiTitle:"Etch A Sketch Animator",year:"1986",title:"Etch A Sketch Animator",subtitle:"The classic knob-drawing ritual, digitized — a $90 toy with infrared rotary encoders and a frame-based animation engine",blurb:"The Etch A Sketch Animator (1986) took the two-knob drawing ritual of the mechanical Etch A Sketch and rebuilt it with infrared rotary encoders feeding a 4-bit CPU: turn the knobs, hear static-like tones, and draw on a 40x30 LCD. Then the real trick — the toy stored up to twelve hand-drawn frames and played them back as animation in sequences up to 96 steps long. US Patent 4,764,763 documents the encoder design; a scanned manual and a The Strong museum object record complete the picture. A frame-based animation authoring tool in a children's toy — pen-up, pen-down, save, recall, animate — one of the earliest consumer uses of rotary encoders as a drawing interface.",tags:["Creative Tool","LCD","Input","Animation","Consumer"],image:T("etch-a-sketch-animator-1.jpg")},{id:"sony-typecorder",slug:"sony-typecorder",sortYear:1980,wikiTitle:"Sony Typecorder / OA-S1100",year:"1980",title:"Sony Typecorder",subtitle:"A three-pound typewriter that stored up to 120 pages of text on a microcassette — and could fax it over a phone line",blurb:"Sony's 1980 Typecorder was a three-pound briefcase-sized typewriter with a QWERTY keyboard and a single-line 40-character LCD whose only permanent storage was a standard audio microcassette — up to 120 pages of typing per cassette, in digital form on ordinary tape. Because the medium was an audio cassette, the machine doubled as a dictation and meeting recorder. Text left the machine by physical ritual: print it, hand the cassette to a companion word processor, punch it to telex tape, or transmit it over a telephone line through an acoustic coupler. Pitched by Akio Morita at journalists and traveling professionals, it quietly prefigured the portable text-capture appliance. A 1980 unit is preserved at the Computer History Museum.",tags:["Word Processing","Portable","Magnetic Media","Information Appliance"],image:T("sony-typecorder-1.jpg")},{id:"id3d-hand-geometry",slug:"id3d-hand-geometry",sortYear:1986,wikiTitle:"Recognition Systems ID-3D Hand Geometry Verifier",year:"1986",title:"ID-3D Hand Geometry Verifier",subtitle:"The machine that reads your whole hand as a password",blurb:"Recognition Systems' ID-3D (1986) turned the human hand into a living key. You enter a PIN, then perform a ritual printed on the platen — slide your hand forward until it bumps the web pegs, press flat, close your fingers against the pins, hold until the lamp goes out. A retro-reflective platen and a 45-degree mirror give a single camera two views of the hand, and a Micron IS-32 'Optic RAM' — a DRAM chip with a clear window, used as an image sensor — digitizes it into roughly ninety measurements. A two-dimensional cardboard tracing can't fool it. The line became the HandKey, guarding Disney World turnstiles and the 1996 Atlanta Olympics.",tags:["Biometrics","Identity","Access Control","Embodied"],image:T("id3d-hand-geometry-1.jpg")},{id:"mattel-auto-race",slug:"mattel-auto-race",sortYear:1976,wikiTitle:"Mattel Auto Race",year:"1976",title:"Mattel Auto Race",subtitle:"The first handheld electronic game — two slide switches, 512 bytes of assembly, and a field of red LEDs",blurb:"Mattel Auto Race (1976) was the first handheld electronic game. It has no buttons at all: a four-position gear lever sets your speed — and the oncoming traffic's — while a three-position lane lever weaves your LED blip between lanes. The whole game lives in 512 bytes of assembly Mark Lesser spent eighteen months fitting into a Rockwell B6000 calculator chip, with beeps toggled from inside timing loops. Sold for $24.99, it convinced Mattel to found its Electronics division, and was cloned in the Soviet Union as the Elektronika IER-01.",tags:["Games","Handheld","Input","Embedded","LED"],image:T("auto-race-1.jpg")},{id:"microvision",slug:"milton-bradley-microvision",sortYear:1979,wikiTitle:"Milton Bradley Microvision",year:"1979",title:"Milton Bradley Microvision",subtitle:"The first cartridge handheld — a console with no CPU, where every game is a different computer",blurb:"Milton Bradley's Microvision (1979) is the first handheld game console with interchangeable cartridges — and the console has no processor at all. Each cartridge contains its own CPU (an Intel 8021 or TI TMS1100) with the game in masked ROM; plugging in a game is literally plugging in a computer. Input is equally strange: a twelve-button keypad buried under flexible plastic that you press through each game's printed overlay, plus an analog rotary paddle. It failed in instructive ways — keypads tore, static killed exposed CPU pins (up to 60% returned in the 1979 holidays), and it still inspired Nintendo's Game Boy.",tags:["Games","Handheld","Input","Embedded","LCD"],image:T("microvision-1.jpg")},{id:"mavica",slug:"sony-mavica-1981",sortYear:1981,wikiTitle:"Sony Mavica",year:"1981",title:"Sony Mavica (1981 prototype)",subtitle:"The world's first electronic still camera — film replaced by a floppy disk and a TV playback ritual",blurb:"Sony unveiled the Mavica prototype on August 25, 1981 — the world's first electronic still camera. It was not digital: an analog NTSC CCD wrote each shot as FM-modulated magnetic tracks onto a 2-inch Mavipak floppy disk, fifty images per disk, and to see your pictures you carried the disk to a separate playback viewer plugged into a television. Capture and review were two devices joined only by the disk in your hand. The Mavipak format became the Video Floppy standard that defined 1980s still-video photography — and the museum's cleanest example of film turning into removable magnetic media.",tags:["Camera","Input","Magnetic Media","Prototype","Analog"],image:T("mavica-1.jpg")},{id:"plato-v-terminal",slug:"plato-v-terminal",sortYear:1981,wikiTitle:"PLATO V Terminal",year:"1981",title:"PLATO V Terminal",subtitle:"The orange-glowing touchscreen terminal that split a mainframe",blurb:"The PLATO V terminal (1981) is the hardware face of the first networked online community: a 512x512 orange gas-plasma panel with an infrared touch screen, wired to a CDC mainframe. An Intel 8080 inside downloaded and ran courseware locally — the first terminal to combine local micro and remote mainframe. Students reached up and pressed the glowing screen to chat, mail, and play multiplayer games a decade before the web.",tags:["Terminal","Touchscreen","Plasma","Network","Education"],image:T("plato-v-terminal-1.jpg")},{id:"milton-talking-game",slug:"milton-talking-game",sortYear:1980,wikiTitle:"Milton (Electronic Talking Game)",year:"1980",title:"Milton",subtitle:"The talking game that memorized phrases and insulted you",blurb:"Milton (1980) was the first competitive electronic talking game — per its own patent, the first where two humans play against each other. It is Simon rebuilt around speech: the machine recites three-word phrases, players match beginnings to endings by pressing red and yellow buttons, and every wrong answer earns a sarcastic laugh or a verdict of 'Garbage.' Its voice was squeezed into 15 bytes of control data with reused wave samples — 'ersatz speech' with an attitude.",tags:["Speech","Games","Toy","Memory","Embodied"],image:T("milton-talking-game-1.jpg")},{id:"stop-thief",slug:"stop-thief",sortYear:1979,wikiTitle:"Stop Thief (Electronic Crime Scanner)",year:"1979",title:"Stop Thief",subtitle:"The pocket computer that hides a thief and taunts you",blurb:"Parker Brothers' Stop Thief (1979) contains one of the strangest computers of the era: a handheld Electronic Crime Scanner that secretly holds the location of an invisible thief, moves it adversarially through a city grid, and communicates only through sound — footsteps, door creaks, breaking glass, subway rumbles. Players interrogate it with a Clue button, triangulate by ear, and type an arrest code. Wrong guesses earn a raspberry; a thief that evades three crimes escapes and nobody wins.",tags:["Games","Board Game","Audio","Embodied","Hidden State"],image:T("stop-thief-1.jpg")},{id:"pxl2000",slug:"pxl2000",sortYear:1987,wikiTitle:"Fisher-Price PXL2000 / Pixelvision",year:"1987",title:"Fisher-Price PXL2000 / Pixelvision",subtitle:"A toy video camera that stored eleven minutes of black-and-white video on a plain audio cassette",blurb:"The PXL2000 Pixelvision (1987) was a toy video camera whose entire design is about its medium: it ran a standard audio cassette at nine times speed, encoded video as an FM signal on the left channel and sound on the right, and could fit eleven minutes of moving image onto a C90. Pulled from the market after about 400,000 units, it was reborn as an avant-garde film format — Sadie Benning's video diaries, Peggy Ahwesh's Strange Weather, and a film festival (PXL THIS) devoted entirely to its shimmering, grainy image.",tags:["Camera","Video","Magnetic Media","Consumer","Analog"],image:T("pxl2000-1.jpg")},{id:"disklavier",slug:"disklavier",sortYear:1987,wikiTitle:"Yamaha Disklavier",year:"1987",title:"Yamaha Disklavier",subtitle:"A real acoustic piano that records your touch to a floppy disk, then plays it back by physically moving the keys",blurb:"The Yamaha Disklavier (1987 US launch) is an acoustic piano fitted with fiber-optic sensors on its keys, hammers, and pedals, and solenoids that physically drive those same keys. It records a performance to a 3.5-inch floppy in E-SEQ format, then reproduces it by playing the piano itself. Composers turned the capture-and-replay loop into an instrument: Jean-Claude Risset's Duet For One Pianist (1989) sends the pianist's notes back to the same piano in real time, so the performer duets with the ghost of their own hands.",tags:["Music","Performance Capture","Sensors","Physical Output","MIDI"],image:T("disklavier-1.jpg")},{id:"craig-m100-translator",slug:"craig-m100-translator",sortYear:1979,wikiTitle:"Craig M100 Hand-Held Translator and Information Center",year:"1979",title:"Craig M100 Hand-Held Translator and Information Center",subtitle:"A pocket translator that admitted when it was confused — flashing question marks instead of guessing",blurb:"The Craig M100 (1979), built for Craig Corporation by Friends Ami, was one of the first two pocket electronic translators in America. Its three swappable single-language Memory Capsules made it a simultaneous three-way translator with no mode switching. Its strange genius is the search key: when its literal word-for-word dictionary hit a homograph — watch the verb versus watch the clock — the machine flashed question marks and handed the choice to you. Explicit uncertainty handling, embodied in a $200 pocket gadget in 1979.",tags:["Translation","Handheld","Consumer","Language","Uncertainty"],image:T("craig-m100-translator-1.jpg")},{id:"nortel-displayphone",slug:"nortel-displayphone",sortYear:1982,wikiTitle:"Northern Telecom Displayphone",year:"1982",title:"Northern Telecom Displayphone",subtitle:"A telephone and a computer terminal that were the same desk object",blurb:"The Northern Telecom Displayphone (1982), developed at Bell-Northern Research, was the first product to integrate voice and data on one desk: a two-line POTS phone with a 7-inch CRT, a retractable QWERTY keyboard in the base, and a 300 bps modem. You dial by pressing keys and watch the number echo on the screen; soft keys re-label themselves for a 90-number directory. Then the keyboard folds down and the same object dials into remote databases while the other line carries your voice call.",tags:["Telephony","Terminal","Display","Business","Communication"],image:T("nortel-displayphone-1.jpg")},{id:"franklin-spelling-ace",slug:"franklin-spelling-ace",sortYear:1986,wikiTitle:"Franklin Spelling Ace",year:"1986",title:"Franklin Spelling Ace",subtitle:"The pocket device that expects you to spell wrong — and fixes your word anyway",blurb:"The Franklin Spelling Ace (1986) created the handheld electronic book category by inverting the lookup contract: instead of needing to spell a word correctly to find it, you type it the way it sounds — 'fonettickally' — and the machine returns the likely correct spellings, ranked. Its correction engine came from Proximity Technology, whose phonetic-and-typographical error model and '?' wildcards made the device guess what you meant. Franklin sold more than 800,000 in its first two years.",tags:["Reference","Handheld","Retrieval","Language","Consumer"],image:T("franklin-spelling-ace-1.jpg")},{id:"yamaha-cx5m",slug:"yamaha-cx5m",sortYear:1984,wikiTitle:"Yamaha CX5M Music Computer",year:"1984",title:"Yamaha CX5M Music Computer",subtitle:"The whole computer is a synthesizer — an MSX machine sold in music stores, played by typing",blurb:'The Yamaha CX5M (1984) is a full MSX computer whose reason for existing was being a musical instrument. It boots to MSX BASIC with an 8-voice FM synthesizer built in; you wake it with CALL MUSIC and compose by typing notes into a stave editor or writing BASIC music macros — `_PHRASE(1,"cdefg")`. One of only two MSX machines ever sold in the US, it was pitched on a strange promise: a cartridge that let you edit the famously cryptic Yamaha DX7\'s patches on a real screen.',tags:["Music","MSX","Computer Music","MIDI","Consumer"],image:T("cx5m-mim-brussels.jpg")},{id:"pfaff-creative-1471",slug:"pfaff-creative-1471",sortYear:1984,wikiTitle:"Pfaff Creative 1471",year:"1984",title:"Pfaff Creative 1471",subtitle:"The first domestic computer that sewed — programmable stitches, an LCD, and a counting bug",blurb:"The Pfaff Creative 1471 (1984) replaced the cams that cut stitch patterns into metal with a microprocessor: 99+ stitches selected by push-button, read off an LCD, chainable into sequences stored in memory. Its one-step buttonhole worked by counting stitches rather than stitching to a stop — if the fabric bunched, the count drifted and the buttonhole came out wrong. A domestic computer, years before anyone called it ubiquitous computing, for the millions of households that never touched a PC.",tags:["Domestic Appliance","Embedded Computing","Physical Output","Consumer"],image:T("pfaff-select-1538.jpg")},{id:"strand-light-palette",slug:"strand-light-palette",sortYear:1978,wikiTitle:"Strand Light Palette",year:"1978",title:"Strand Light Palette",subtitle:"The lighting designer's command line — type sentences like 'CH 1 @ 5', and the theatre obeys",blurb:"The Strand Light Palette (1978) was the first lighting console to put a CRT and a command line on a theatre desk. Designers — not programmers — typed channel/level sentences on a dedicated keypad, watched cue sheets appear on screen, and pressed GO to execute. Its command-line and tracking philosophy became the US industry standard and still lives in every modern ETC lighting desk.",tags:["Professional Interface","Command Language","Physical Output","Theatre"],image:T("lightpalette-1978-photo.jpg")},{id:"tb303",slug:"tb303",sortYear:1981,wikiTitle:"Roland TB-303 Bass Line",year:"1981",title:"Roland TB-303 Bass Line",subtitle:"The bass machine with no display that programmed in two blind passes — and accidentally invented acid house",blurb:"The Roland TB-303 Bass Line (1981) was sold as a 'computerised bass machine' and failed so completely that second-hand units went for $50. The failure was its interface: no display at all, and a two-pass sequencer that made you program pitch first and timing second across the same 16 multi-purpose keys. Chicago's Phuture bought cheap units, twisted the knobs over a looping pattern, and produced 'Acid Tracks' (1987) — the first acid house record. The machine that could not show you what it had learned became the found object of a genre.",tags:["Music","Input","Sequencer","Roland","Programming"],image:T("tb303-panel.jpg")},{id:"tr808",slug:"tr808",sortYear:1980,wikiTitle:"Roland TR-808 Rhythm Composer",year:"1980",title:"Roland TR-808 Rhythm Composer",subtitle:"The 16-step LED grid that taught a generation to think in sequences",blurb:"The Roland TR-808 Rhythm Composer (1980) was the first drum machine you could program instead of selecting presets — a 16-step grid with one LED per step, an instrument row per voice, and a song mode chaining 768 measures. It sold fewer than 12,000 units before Roland discontinued it in 1983, yet it became the most-used drum machine in history: 'Planet Rock,' 'Sexual Healing,' and the entire sound of hip-hop, Miami bass, and Detroit techno. The interface is the story — the 808's visible grid made rhythm something you could think in, and its faulty-transistor sounds made failure a sound.",tags:["Music","Input","Sequencer","Roland","Programming"],image:T("tr808-panel.jpg")},{id:"photon",slug:"photon",sortYear:1984,wikiTitle:"Photon",year:"1984",title:"Photon",subtitle:"The Ultimate Game on Planet Earth — fifteen pounds of IR gear, and the whole body as interface",blurb:"Photon (1984) was the first commercial laser-tag arena, opened by George Carter III in Garland, Texas. Players wore fifteen pounds of infrared phaser guns, sensor vests, and helmets into a multi-level fog-filled arena where a computer scored every beam fired and every beam taken: points for hits, penalties for friendly fire, a three-consecutive-zap limit, and a weapon that went inert for seconds after each zap. The entire body was the input and output device, decades before Kinect. By 1987 there were 45 arenas; by 1989 the company was gone. Every laser-tag venue since descends from it.",tags:["Embodied Interaction","Arcade","IR","Multiplayer","Body Interface"],image:T("photon-gun.jpg")},{id:"novag-robot-adversary",slug:"novag-robot-adversary",sortYear:1982,wikiTitle:"Novag Robot Adversary",year:"1982",title:"Novag Robot Adversary",subtitle:"The chess computer with a robot arm that moves your pieces for you",blurb:"The Novag Robot Adversary (1982) was the first commercially released chess computer with a visible robotic arm: a two-segment gripper on a rotating base lifted the machine's pieces and played them on a real magnetic-sensing board — captures, castling, everything — while you played across the table. The board read your moves through magnets in the pieces' bases; the arm could point at suggested moves, play itself, and throw theatrical 'tantrums.' Built by Novag Industries with David Kittinger's MyChess engine, it cost about US$1,100–1,500 and roughly 2,000–2,500 were made. The Computer History Museum holds one.",tags:["Robotics","Games","Mechanical","Consumer","Embodied"],image:T("novag-robot-adversary-chm.jpg")},{id:"unimation-puma-teach-pendant",slug:"unimation-puma-teach-pendant",sortYear:1980,wikiTitle:"Unimation PUMA Teach Pendant / VAL",year:"1980",title:"Unimation PUMA Teach Pendant / VAL",subtitle:"Programming a robot by grabbing it — jog buttons, a limp-mode arm, and a record key",blurb:"The Unimation PUMA's handheld 'manual control unit' (1980) taught an industrial robot by manipulation: six mode buttons (OFF, COMP, JOINT, FREE, WORLD, TOOL), a speed knob with an increment setting, joint-select toggles, and a RECORD key. In FREE mode the servos went limp and the operator physically pushed the arm while the controller recorded positions into VAL — the first widely used robot programming language — on a DEC LSI-11. 'The servo system releases control of that joint, and you can move it to a new position by pushing on the members of the robot.' Programming-by-manipulation, before collaborative robots had a name.",tags:["Robotics","Industrial","Programming","Embodied"],image:T("puma-deutsches-museum.jpg")},{id:"teddy-ruxpin",slug:"teddy-ruxpin",sortYear:1985,wikiTitle:"Teddy Ruxpin",year:"1985",title:"Teddy Ruxpin",subtitle:"The animatronic bear that read stories off a cassette tape",blurb:"A plush bear with a cassette deck in its back — and the cassette is a data cartridge. One track carries the narration, the other a pulse-position-modulated control stream that moves the bear's eyes and jaw in sync with the words. Worlds of Wonder shipped eight million of them from 1985, turning a tape you chose and inserted into an animatronic performance of a story.",tags:["Toy","Audio","Animatronics","Consumer"],image:T("teddy-ruxpin-bear.jpg")},{id:"apricot-portable",slug:"apricot-portable",sortYear:1984,wikiTitle:"Apricot Portable",year:"1984",title:"Apricot Portable",subtitle:"The first portable computer with a built-in ear — teach it your voice",blurb:"ACT's 1984 portable was the first to ship with built-in speech recognition: you clipped on a microphone, repeated each word until the machine learned your voice, then dictated or spoke commands. It also had the first 25-line LCD on a portable and an infrared wireless keyboard you could break the link on just by raising your hand. Three strange interface ideas in one commercially doomed box.",tags:["Portable","Voice","Input","Consumer"],image:T("apricot-portable.jpg")},{id:"rca-studio-ii",slug:"rca-studio-ii",wikiTitle:"RCA Studio II",year:"1977",sortYear:1977,title:"RCA Studio II",subtitle:"The home console with no joystick — every game played on telephone-style numeric keypads",blurb:"The RCA Studio II (1977) is the cleanest example of a lost interaction bet: a cartridge console whose only controller is the console itself. Two wired ten-button telephone-style keypads sit built into the machine's body — no joystick exists, because RCA bet home computing would be a button-pushing activity, not a movement one. Pressing two adjacent keys together even yields a diagonal. Monochrome 64x32 graphics in a color era, it sold about 53,000-64,000 units against the Fairchild Channel F and Atari 2600, and RCA abandoned it within a year. Then the story gets strange: the same RCA 1802 'COSMAC' chip that powered the worst-selling console flew to Jupiter inside NASA's Galileo spacecraft. It is also where the industry's first female commercial game developer, Joyce Weisbecker, wrote her games.",tags:["Games","Input","Keypad","Console","Consumer"],image:T("rca-studio-ii-console.jpg")},{id:"philips-cdi",slug:"philips-cdi",wikiTitle:"Philips CD-i",year:"1991",sortYear:1991,title:"Philips CD-i",subtitle:"The living-room computer you operate like a TV — a remote with a thumb-trackball for a mouse",blurb:"The Philips CD-i (US launch December 3, 1991 as the Magnavox CDI 910) is the most complete attempt of the era to make the computer a living-room appliance, and its input device is the point: a handheld infrared remote control with a built-in thumb-operated trackball. You rolled the ball to move a cursor and pressed a button to select, on a machine that looked like a CD player and connected to your television. Philips is believed to have spent around a billion dollars on the vision — and it became a famous disaster, a 'terrible game machine and a terrible PC' (Bill Gates) that nonetheless shipped roughly 570,000 players and produced the derided Zelda and Mario CD-i games, which are now memes. The interactive-television dream made weirdly, magnificently physical.",tags:["Consumer","Multimedia","Appliance","Games","Input"],image:T("cdi-910-console-set.jpg")},{id:"ti-59",slug:"ti-59",wikiTitle:"TI-59",year:"1977",sortYear:1977,title:"TI-59",subtitle:"The programmable calculator whose programs were physical cards you slid into the machine",blurb:"The TI-59 (May 1977, $299.95) is the clearest mass-market expression of a strange and lovely HCI idea: your program is a physical object. The machine recorded your keystrokes into memory, and to keep a program you slid a magnetically striped card through a slot in the calculator's side — the card was the software. Then the design doubled the idea: the card you just read also slipped into the gap between the display and the keyboard, where its printed side served as the legend for the five user-defined keys A-E and their shifted A'-E' forms. Storage medium, documentation, and interface label were the same strip of plastic. Programs also shipped as plug-in ROM modules, and from 1977 TI ran the PPX-59 program exchange — software distributed by mail as physical card sets.",tags:["Calculator","Programming","Physical Media","Consumer"],image:T("ti-59-card-inserted.jpg")},{id:"vtech-socrates",slug:"vtech-socrates",wikiTitle:"VTech Socrates",year:"1988",sortYear:1988,title:"VTech Socrates",subtitle:"The kids' console that cut every wire — keyboard, controllers, mouse, and drawing pad all talked over infrared",blurb:"VTech's 1988 educational console made its entire input stack wireless: a full QWERTY keyboard, two game controllers, a mouse tablet, and a stylus drawing pad all beam signals to the console over infrared. The Touch Pad let young children practice writing letters and numbers with a stylus, feeding the built-in Super Painter drawing program. Sold in Europe as Prof. Weiss-Alles and Professeur Saitout.",tags:["Education","Wireless","Children","Stylus"],image:T("vtech-socrates-set.jpg")},{id:"grafbar-sonic-digitizer",slug:"grafbar-sonic-digitizer",wikiTitle:"GRAF/PEN GrafBar Sonic Digitizer",year:"1983–84",sortYear:1984,title:"GRAF/PEN GrafBar Sonic Digitizer",subtitle:"The pen that made sparks — a digitizer whose stylus is a loudspeaker and whose tablet is just a table",blurb:"Science Accessories' sonic digitizer had no grid and no wires in the drawing surface: the pen's tip fired a spark several times a second, and two microphones in a bar along the top edge timed each click to triangulate the pen's position. You could digitize from paper laid loose on a desk — and, per Autodesk's John Walker, the sparks made ozone and were handy for chasing away cats.",tags:["Input","Digitizer","Acoustic","CAD"],image:T("grafbar-patent-fig1.png")},{id:"ti-touch-tell",slug:"ti-touch-tell",wikiTitle:"TI Touch & Tell",year:"1981",sortYear:1981,title:"TI Touch & Tell",subtitle:"The toddler computer with no keyboard — you answer by pointing at the picture",blurb:"Texas Instruments' 1981 speech toy asked a random question and the child answered by pointing at a picture on a printed panel laid over a position-sensitive touch pad. Seven overlay libraries — including an E.T. pack — made the printed page the interface, years before the HP-150 touchscreen.",tags:["Education","Toy","Speech","Touch"],image:T("ti-touch-tell.jpg")},{id:"vcr-plus",slug:"vcr-plus",wikiTitle:"VCR Plus+",year:"1990",sortYear:1990,title:"VCR Plus+",subtitle:"A whole recording schedule compressed into a printed number you type into a box",blurb:"In 1990 the newspaper itself became the program guide's database: Gemstar's $60 box recorded any show you typed in from the bold PlusCode number printed next to the listing — channel, date, time and duration packed into a handful of digits, decoded in secret and beamed to your VCR as infrared. An algorithm good enough to reverse-engineer and publish in a cryptography journal.",tags:["Home Automation","Programming","Input","Consumer","Printed Media"],image:T("vcr-plus-1.jpg")},{id:"ems-synthi-aks",slug:"ems-synthi-aks",wikiTitle:"EMS Synthi AKS",year:"1972–1984",sortYear:1972,title:"EMS Synthi AKS",subtitle:"A synthesizer in a briefcase whose programs are pins and whose keyboard is a touchplate",blurb:"EMS's portable studio in a briefcase (1972, still in the catalogue through the late 1970s) programmed its patch with pins pushed into a socket grid and played its notes on a flat 30-key capacitance touchplate with no moving parts — the sequence behind Pink Floyd's 'On the Run' was laboriously finger-recorded on it.",tags:["Music","Input","Tangible Programming","Touch","Instrument"],image:T("synthi-aks-opened.jpg")},{id:"meade-lx200",slug:"meade-lx200",wikiTitle:"Meade LX200",year:"1992",sortYear:1992,title:"Meade LX200",subtitle:"The first telescope you point by keying a catalog number into a red-lit keypad",blurb:"Meade's 1992 GoTo telescope put a 64,359-object star database in a 16-key hand controller with a red-LED keypad built for night vision: press M for Messier, type a catalog number, hit GO TO, and the mount slewed itself to the eyepiece. Its RS-232 protocol became the amateur astronomy standard.",tags:["Scientific Instrument","Input","Keypad","Database","Consumer"],image:T("lx200-jiamusi.jpg")},{id:"fairchild-channel-f",slug:"fairchild-channel-f",wikiTitle:"Fairchild Channel F",year:"1976",sortYear:1976,title:"Fairchild Channel F",subtitle:"The first cartridge console, steered and fired by one knob you push, twist, and pull",blurb:"The first microprocessor cartridge console hid an extraordinary controller in plain sight: a base-less pistol grip whose triangular cap tilts in eight directions, twists to act as a digital paddle, and pushes down or pulls up to fire. One knob, three grammars — invented under Jerry Lawson, one of the first Black engineers to lead a Silicon Valley consumer product.",tags:["Console","Input","Games","Joystick","Consumer"],image:T("fairchild-channel-f-1.jpg")},{id:"bbn-spacegraph",slug:"bbn-spacegraph",wikiTitle:"BBN Spacegraph",year:"1977",sortYear:1977,title:"BBN Spacegraph",subtitle:"A true 3D display — a vibrating mirror sweeps a CRT image through a volume of air you point into",blurb:"BBN's varifocal-mirror display rendered real points floating in a 33.8 cm-deep volume of space — no stereo glasses, no mirror trick — with parallax that survived head movement. The strangest part was the input: a pulsed laser beam aimed directly INTO the image to point at and select floating light buttons.",tags:["Display","3D","Volumetric","Input","Research"],image:T("spacegraph-photo-airplane.jpg")},{id:"bally-professional-arcade",slug:"bally-professional-arcade",wikiTitle:"Bally Professional Arcade / Astrocade",year:"1978",sortYear:1978,title:"Bally Professional Arcade / Astrocade",subtitle:"A console you program by typing into the pixels — Bally BASIC lived inside the video RAM",blurb:"Bally's 1978 console joined a pistol-grip controller (trigger, 8-way joystick, and a shaft that rotates into a paddle) with a 24-key keypad — and Bally BASIC, whose interpreter stored every program bit-interleaved inside the display's own RAM, hidden in plain sight by remapping two colors to the same white. The screen you watched was the memory your program occupied.",tags:["Console","Input","Programming","Games","Consumer"],image:T("bally-arcade-1.jpg")},{id:"minolta-talker",slug:"minolta-talker",wikiTitle:"Minolta Talker",year:"1984",sortYear:1984,title:"Minolta Talker",subtitle:"The camera that talks back — three spoken phrases coach your photography",blurb:"Minolta's 1984 point-and-shoot watched its own sensors and spoke guidance at you mid-gesture: 'Load film,' 'Too dark, use flash,' 'Check distance.' The shutter always fired regardless, so the voice was pure advice — the world's first talking camera, a kind machine with a mother-in-law's mouth.",tags:["Speech","Camera","Consumer","Voice","Output"],image:T("minolta-talker.jpg")},{id:"tsi-speech-plus",slug:"tsi-speech-plus",wikiTitle:"TSI Speech+ Talking Calculator",year:"1976",sortYear:1976,title:"TSI Speech+ Talking Calculator",subtitle:"The first talking calculator — you hear every key you press",blurb:"Telesensory Systems sold this $395 calculator in 1976 for blind users, and made its keypad a telephone layout on purpose. Every keystroke was spoken back, a speaker key read the display aloud, and the instruction manual came on cassette. Its S14001A speech chip fit 24 words into 4K of ROM — and predated Speak & Spell by two years.",tags:["Speech","Accessibility","Calculator","Consumer","Output"],image:T("tsi-speech-plus.jpg")},{id:"imsai-8080",slug:"imsai-8080",wikiTitle:"IMSAI 8080",year:"1976",sortYear:1976,title:"IMSAI 8080",subtitle:"A computer you program one toggle switch at a time — the front panel is the entire interface",blurb:"No OS, no monitor, no keyboard: the IMSAI 8080's front panel was the whole user interface, and the human was the boot loader. Flip the address and data switches to deposit one byte at a time, single-step the machine watching the LEDs, and even play the manual's own game by flipping the sense switches — the panel doubles as a game controller.",tags:["Computer","Input","Programming","Consumer"],image:T("imsai-8080-wargames.jpg")},{id:"kim-1",slug:"kim-1",wikiTitle:"KIM-1",year:"1976",sortYear:1976,title:"KIM-1",subtitle:"The $245 hex-keypad computer that made programming feel like typing instead of flipping switches",blurb:"MOS Technology's answer to front-panel programming: a bare board whose 24-key hex keypad and six-digit LED display are the whole interface, with a ROM monitor called TIM that greets you at power-on. Machine code is typed in as hex digits, not toggled in as binary — and the first commercially sold microcomputer game, Microchess, was written on it.",tags:["Computer","Input","Programming","Consumer"],image:T("kim-1-computer.jpg")},{id:"nissan-voice-warning",slug:"nissan-voice-warning",wikiTitle:"Nissan/Datsun Voice Warning System",year:"1981",sortYear:1981,title:"Nissan/Datsun Voice Warning System",subtitle:"The talking car whose 'voice' was a tiny vinyl record with six parallel grooves",blurb:"Nissan made its 1981-84 Maxima, 200SX, and Z-cars speak with the most analog voice possible: a three-inch white plastic phonograph record inside a box under the dash, cut with six parallel grooves, one per warning. A rubber-belt motor spun the disc and a tiny tonearm dropped onto the right groove to say 'Left door is open' or, in a breathy voice, the 'bocking brake.'",tags:["Voice","Automotive","Output","Consumer"],image:T("nissan-voice-warning-patent-1.png")},{id:"fluke-9010a",slug:"fluke-9010a",wikiTitle:"Fluke 9010A Micro-System Troubleshooter",year:"1983",sortYear:1983,title:"Fluke 9010A Micro-System Troubleshooter",subtitle:"The repair tool you plug into a dead computer's brain socket",blurb:"A portable service instrument that debugs a dead microprocessor board by physically replacing its CPU: you pull the chip and plug in a pod, and the Fluke becomes the processor, driving the board's bus, testing RAM and ROM, and poking logic with a probe that flashes red and green. The arcade repairman's sacred tool — it debugged Pac-Man and Defender PCBs.",tags:["Input","Instrument","Lab Equipment"],image:T("fluke-9010a.jpg")},{id:"aspen-movie-map",slug:"aspen-movie-map",wikiTitle:"Aspen Movie Map",year:"1978",sortYear:1978,title:"Aspen Movie Map",subtitle:"Drive through a filmed city with a touchscreen — surrogate travel before Street View",blurb:"MIT's surrogate-travel system: a car with four 16mm cameras filmed every street in Aspen onto laserdisc, and users drove through the recorded city with a touchscreen menu — choosing speed, angle, and even the season mid-drive, and touching buildings to jump inside. The direct ancestor of Google Street View and the interactive-video kiosk.",tags:["Output","Spatial","Research"],image:T("aspen-frame-42757.jpg")},{id:"thunderscan",slug:"thunderscan",wikiTitle:"ThunderScan",year:"1984",sortYear:1984,title:"ThunderScan",subtitle:"Swap out your printer's ribbon and the printer becomes a scanner",blurb:"Thunderware's under-$200 add-on turns an ImageWriter dot-matrix printer into a high-resolution scanner: remove the ribbon cartridge, snap in an optical sensor cartridge, thread a photo through the platen, and wait an hour of loud shuttling for a full page. The printer's own stepper motors set the resolution — better than flatbeds costing ten times more.",tags:["Input","Image","Peripheral"],image:T("thunderscan-scanner-unit.jpg")},{id:"databar-oscar",slug:"databar-oscar",wikiTitle:"Databar OSCAR",year:"1983",sortYear:1983,title:"Databar OSCAR",subtitle:"Load BASIC programs by swiping a wand over magazine barcodes until it beeps",blurb:"The 1983 barcode-magazine software loader: a $79.95 wand-and-box system that emulated a cassette drive, so you could load BASIC programs printed as barcodes in the one and only issue of Databar Magazine — swiping each line three, four, or seven times until the box beeped. Precedes Cauzin Softstrip by two years.",tags:["Input","Barcode","Peripheral"],image:T("databar-oscar-scanner.jpg")},{id:"dnd-computer-labyrinth",slug:"dnd-computer-labyrinth",wikiTitle:"Mattel Dungeons & Dragons Computer Labyrinth Game",year:"1980",sortYear:1980,title:"Mattel Dungeons & Dragons Computer Labyrinth Game",subtitle:"A hidden maze in a 4-bit chip, mapped one touch at a time",blurb:"Mattel's 1980 electronic board game hides an entire dungeon inside a TMS1100-family microcontroller: fifty random walls, a treasure room, and a sleeping dragon, with no display of any kind. Players press diecast metal miniatures onto a touch-sensitive 8x8 grid and learn the invisible maze by sound alone — twelve audio cues for walls, doors, the dragon waking, and attack. Orange plastic markers map the unseen geometry as you go.",tags:["Games","Board Game","Hidden State","Sound","Input","TMS1000"],image:T("dnd-labyrinth-board.jpg")},{id:"invicta-electronic-master-mind",slug:"invicta-electronic-master-mind",wikiTitle:"Invicta Electronic Master Mind",year:"1977",sortYear:1977,title:"Invicta Electronic Master Mind",subtitle:"Interrogate the computer's hidden number until it cracks",blurb:"The first mass-market handheld where you play against the machine directly and the machine is the code-maker: a black-box oracle that secretly chooses a 3-5 digit number, accepts your guesses from a keypad, and answers only in coded LED verdicts. The 1979 Super-Sonic version added an audible signal when you finally struck the hidden code, a Fail key to reveal it, and a display of your time and tries. The consumer embodiment of Knuth's 1976 'The Computer as Master Mind.'",tags:["Games","Handheld","Hidden State","Input","Consumer"],image:T("master-mind-1.jpg")},{id:"btx-terminal",slug:"btx-terminal",wikiTitle:"Bildschirmtext (BTX) Terminal",year:"1983",sortYear:1983,title:"Bildschirmtext (BTX) Terminal",subtitle:"The pay-per-page videotex terminal: every screenful cost money, and the chip-card reader was the meter",blurb:"West Germany's national videotex service, launched by the Deutsche Bundespost in 1983, where the receiver paid for every page received — providers priced each screenful from 0.01 to 9.99 Deutsche Mark. Dedicated BTX terminals carried a chip-card reader as the billing meter, making paging through the service a transaction per screen. Its unauthenticated plaintext protocol let Wau Holland's Chaos Computer Club stage the 1984 BTX hack, the first famous remote payment-hacking incident.",tags:["Terminal","Network","Videotex","Germany","Chip Card"],image:T("btx-multikom-l1.jpg")},{id:"quotron-ii",slug:"quotron-ii",wikiTitle:"Quotron II",year:"1986",sortYear:1986,title:"Quotron II",subtitle:"Wall Street's dedicated quote terminal: type a ticker, press a labeled field key, read the green glass",blurb:"Before Bloomberg there was Quotron: a dedicated, non-QWERTY market-data terminal whose entire interface is a custom keyboard of ticker-symbol and field keys (LAST, BID, ASK, VOL...) driving a green-phosphor CRT. No cursor, no mouse — pure key-driven retrieval from a central computer. At 60% of the 1986 financial-data market and 100,000 rented terminals, it defined the trading floor, immortalized in the 1987 film Wall Street.",tags:["Terminal","Network","Professional","Keyboard","Finance"],image:T("quotron-ii-desk-unit.png")},{id:"turbo-touch-360",slug:"turbo-touch-360",wikiTitle:"Turbo Touch 360",year:"1992",sortYear:1992,title:"Turbo Touch 360",subtitle:"The D-pad replacement that swapped mechanical switches for a sliding capacitive touch plate",blurb:"Triax's 1992 controller replaced the mechanical D-pad with an octagonal plate of eight capacitive touch sensors under a low-friction membrane: you steered by sliding your thumb, never pressing down. Marketed as a cure for 'numb thumb' and endorsed by an orthopedic surgeon, it was a consumer touch-pad game controller years before trackpads were ordinary — too sensitive to survive, and later ranked the ninth-worst controller ever by IGN.",tags:["Games","Controller","Touch","Input","Consumer"],image:T("ttx360-md.jpg")},{id:"concept-keyboard",slug:"concept-keyboard",wikiTitle:"Concept Keyboard / Star Microterminals A4-128",year:"1983",sortYear:1983,title:"Concept Keyboard / Star Microterminals A4-128",subtitle:"A paper-overlay touch panel that let non-readers and motor-impaired children control a computer",blurb:"A flat A4-sized touch-sensitive membrane panel with 128 discrete touch zones — each sending a fixed 7-bit code when pressed. The secret was the paper overlay placed on top: swap the sheet and the same hardware becomes a farm-animal selector, a Logo turtle controller, or an industrial control panel. Teachers authored custom interfaces in 15 minutes, collapsing the literacy barrier to computing for special-needs classrooms across the UK. Tangible computing before the name existed.",tags:["HCI","Input","Accessibility","Education","Tangible","Touch"],image:T("concept-keyboard-top.jpg")},{id:"microvote-mv464",slug:"microvote-mv464",wikiTitle:"Microvote MV-464 Electronic Voting Computer",year:"1985",sortYear:1985,title:"Microvote MV-464 Electronic Voting Computer",subtitle:"A push-button voting machine with a motor-driven paper scroll ballot display — democracy as a mechanical interface",blurb:"A direct-recording electronic voting machine where ballot choices are printed on a paper scroll behind a glass window, with push buttons on either side for selection. The motor-driven scroll advances the ballot page by page, while the buttons provide 1:1 correspondence with visible choices — no cursor, no touchscreen, no keyboard. The machine folds open into a voting booth, bridging the gap between mechanical lever machines and modern touchscreen DREs. A transitional artifact where democracy, mechanics, and electronics meet.",tags:["HCI","Input","Voting","Kiosk","Dedicated Terminal","Push-Button"],image:T("microvote-mv464.jpg")},{id:"valiant-turtle",slug:"valiant-turtle",wikiTitle:"Valiant Turtle / Valiant Logo Turtle",year:"1983",sortYear:1983,title:"Valiant Turtle / Valiant Logo Turtle",subtitle:"A floor-roving infrared-controlled robot that made Logo programs physically visible",blurb:"A 25cm hemispherical robot that made code into a physical event. A child types FORWARD 50 RIGHT 90 on a BBC Micro, and the turtle moves forward 50cm and turns right 90 degrees on the classroom floor. Infrared-linked at 300 baud, the turtle carried a retractable pen to trace its path on paper, making Logo programs visible as physical drawings. Papert's 'body-syntonic' reasoning made literal: the child's own body schema becomes the debugger. In production from 1983 to 2011.",tags:["HCI","Output","Education","Robotics","Programming","Physical"],image:T("valiant-turtle.jpg")},{id:"captain-ntx5000",slug:"captain-ntx5000",wikiTitle:"CAPTAIN System / NEC NTX-5000",year:"1984",sortYear:1984,title:"CAPTAIN System / NEC NTX-5000",subtitle:"Japan's videotex that faxed you the screen: pre-rendered pages, kana keypad, numeric page codes",blurb:"CAPTAIN (Character and Pattern Telephone Access Information Network) was NTT's answer to European videotex — and the strangest of them all. Japanese kanji has 3,500+ characters, too many for an affordable character generator, so CAPTAIN sent pages as pre-rendered raster images 'using coding strategies similar to facsimile machines.' The terminal's screen progressively filled with the page's graphics like a fax. Input was a 12-key numeric keypad with kana characters printed on the keys — multi-tap kana entry for search terms, numeric page addresses for navigation. Launched November 1984, it reached only 120,000 subscribers by 1992 — a commercially doomed but beautifully weird national project.",tags:["HCI","Terminal","Network","Videotex","Japan","Numeric Keypad"],image:T("captain-ntx5000-terminal.jpg")},{id:"view-master-interactive-vision",slug:"view-master-interactive-vision",wikiTitle:"View-Master Interactive Vision",year:"1988",sortYear:1988,title:"View-Master Interactive Vision",subtitle:"The VHS console that painted 8-bit sprites over live video — interactive television, 1988-style",blurb:"The View-Master Interactive Vision (1988/1989) is an interactive movie VHS console where the console generates its own 8-bit sprite graphics composited over live VHS video, with dual audio tracks for branching narratives. The VHS tape provided the backdrop and dialogue; the console provided the interactive layer — collectible sprites, characters, score displays. Seven titles were released (Sesame Street, Muppets, Disney). The dual-audio-track technique allowed two different outcomes from the same video, lip-synced to match mouth movements. Completes the museum's VHS-interaction triptych alongside Terebikko (audio tones) and Action Max (light gun).",tags:["HCI","Game Console","VHS","Interactive Video","Edutainment","Sprite Overlay"],image:T("viewmaster-interactive-vision-1.jpg")},{id:"playskool-alphie",slug:"playskool-alphie",wikiTitle:"Playskool Alphie",year:"1978",sortYear:1978,title:"Playskool Alphie",subtitle:"The educational robot whose 'software' was printed cardboard — insert a card, press buttons, learn",blurb:"Alphie is an educational robot from Playskool (1978) that uses interchangeable printed cardboard cards as its 'software.' Insert a card into the slot on the robot's front, and the soft-touch membrane buttons map to the activity printed on the card: matching, math, spelling, sequencing. The card is not optically scanned or magnetically encoded — it is a purely mechanical alignment mechanism. This is a tangible user interface (TUI) nearly two decades before the term existed. Alphie ran on batteries, came with a library of cards, and remained in production through the 1980s.",tags:["Educational","Toy","Tangible","Card-based","Robot"],image:T("alphie.jpg")},{id:"toshiba-lc836mn",slug:"toshiba-lc836mn",wikiTitle:"Toshiba LC-836MN Memo Note 30",year:"1978",sortYear:1978,title:"Toshiba LC-836MN Memo Note 30",subtitle:"The first portable electronic data bank — a calculator you type names into, one 8-segment character at a time",blurb:"Toshiba's 1978 Memo Note 30 is the ur-organizer: a pocket calculator with no full keyboard, where you spell names and numbers character-by-character through the shared digit pad onto an eight-segment alphanumeric display, stored into 30 fixed slots (six letters + eight numerals each — 256 bytes total). Nine years ahead of TI's first Mini Data Bank, it proved people would want to carry electronic memory at all. Also sold as Radio Shack's EC-4002.",tags:["Portable","Personal Data","Calculator","Segmented Display","Japan"],image:T("toshiba-lc836mn.jpg")},{id:"fehmi-biofeedback-computer",slug:"fehmi-biofeedback-computer",wikiTitle:"Fehmi Multiple-Channel Phase-Integrating Biofeedback Computer",year:"1977",sortYear:1977,title:"Fehmi Phase-Integrating Biofeedback Computer",subtitle:"A five-channel EEG/EMG instrument that made the phase relationship of brainwaves directly audible",blurb:"Fehmi and Schneider's 1977 biofeedback computer (US 4,031,883) does what no tone-alone biofeedback toy attempts: it continuously analyzes the phase relationship among multiple cortical EEG/EMG channels and encodes their agreement into the pitch and timbre of a feedback tone. The user learns, without a single word of instruction, to bring regions of their own brain into synchrony — coherence rendered directly perceptible. The museum's only phase-synchrony biofeedback instrument, and its earliest multi-channel neurofeedback artifact.",tags:["Biofeedback","EEG","EMG","Wearable","Auditory","Clinical"],image:T("fehmi-biofeedback-fig3-trainee.png")},{id:"heidenhain-tnc-110",slug:"heidenhain-tnc-110",wikiTitle:"Heidenhain TNC 110",year:"1976",sortYear:1976,title:"Heidenhain TNC 110",subtitle:"The first conversational CNC control — a machine tool that held a dialog with its operator through labeled function keys",blurb:"The 1976 Heidenhain TNC 110 was the first CNC to use dialog-guided 'Touch Numerical Control' programming: instead of writing G-code or punching tape, the operator answered questions the machine posed on a CRT through labeled function keys (POS, TOOL, CYCLE, PATH, INPUT). The programming manual was ten pages. A skilled machinist who was not a programmer could now program their own machine.",tags:["Industrial","CNC","Manufacturing","Dialog","Keypad","Machine Tool"],image:T("heidenhain-tnc110.jpg")},{id:"rolm-cbx",slug:"rolm-cbx",wikiTitle:"ROLM CBX / RolmPhone 400",year:"1981",sortYear:1981,title:"ROLM CBX / RolmPhone 400",subtitle:"The first digital PBX whose desk phone had no switchhook — a magnet in the handset was the button, and its keys were software",blurb:"ROLM's CBX ran a telephone switch on a general-purpose minicomputer, and its RolmPhone 400 was the phone that looked nothing like one: 40 programmable soft keys reconfigured remotely by the switch, and no physical switchhook — a magnet in the handset and a reed switch in the base made the handset itself the on/off mechanism. A direct ancestor of the soft-button phone.",tags:["Telephony","PBX","Digital Phone","Soft Keys","Magnetic Sensing"],image:T("rolmphone-400.jpg")},{id:"velotype",slug:"velotype",wikiTitle:"Velotype Synthetic Keyboard",year:"1982",sortYear:1982,title:"Velotype Synthetic Keyboard",subtitle:"A two-handed keyboard where every stroke is a whole syllable — press several keys with both hands and the machine spells the sound",blurb:"The Velotype is a two-handed chorded keyboard that types whole syllables per stroke. Instead of one key per letter, the typist presses several keys with each hand at once and the machine's orthographic rules expand the chord into spelled text — a 'butterfly'-layout chord at up to 200 words per minute. It is the museum's only full-syllable chording keyboard, the opposite idea from the one-hand micro-chorders.",tags:["Keyboard","Text Entry","Chording","Input","Netherlands"],image:T("velotype1985.jpg")},{id:"oasys-thumbshift-keyboard",slug:"oasys-thumbshift-keyboard",wikiTitle:"Fujitsu OASYS 100 Thumb-Shift Keyboard",year:"1980",sortYear:1980,title:"Fujitsu OASYS 100 Thumb-Shift Keyboard",subtitle:"The Japanese word-processor keyboard that moved the shift keys to the thumbs, giving every key three characters and keeping both hands on the home row",blurb:"Fujitsu's OASYS 100 solved Japanese text entry by anatomically reassigning the shift key to the strongest digit. Two thumb keys at the bottom center multiply every other key three ways (base, same-hand, opposite-hand), so all hiragana fit in the home row, and each word's kana-to-kanji conversion runs word-by-word by striking a thumb key. An anatomy-driven input layout that became a Japanese standard.",tags:["Keyboard","Japanese","Word Processor","Text Entry","Input"],image:T("oasys100.png")},{id:"le-stick",slug:"le-stick",wikiTitle:"Le Stick",year:"1981",sortYear:1981,title:"Le Stick",subtitle:"The first motion-sensitive game controller: a base-less wand that steers by a mercury core shifting in your hand",blurb:"Le Stick is DataSoft's 1981 base-less joystick whose direction was read by a gravity-displaced mercury core. Tilt the wand and the liquid metal shifts to close a switch for that direction — no stick shaft, no potentiometer, no power source. Widely credited as the first motion-sensitive video game controller, it failed commercially for want of any game that wanted it, an embodied input outrunning its software 25 years before the Wii.",tags:["Game Controller","Motion","Input","Fluid Sensing"],image:T("le-stick.jpg")},{id:"ibm-5265-retail-system",slug:"ibm-5265-retail-system",wikiTitle:"IBM 5265 Point of Sale Terminal / IBM 5260 Retail System",year:"1979",sortYear:1979,title:"IBM 5265 Point of Sale Terminal",subtitle:"The register that guided its cashier with a rotating cylinder of printed prompts and was reprogrammed by laying paper overlays across deliberately awkward chicklet keys",blurb:"IBM's 5260 retail system is the point-of-sale register at the tail end of the pre-screen era. The operator is walked through every transaction by a mechanical rolling-cylinder prompt — a rotating tape of printed captions visible through a window, customizable with stickers — and the machine is reprogrammed on the spot by draping printed paper keyboard overlays across its oddly-sized chicklet keys. No display, no software metaphor: the instructions live in physical paper on a spinning drum.",tags:["Retail","Point of Sale","Output","Input","Mechanical"],image:T("ibm_5260_retail_prototypes.jpg")},{id:"ibm-3614-atm",slug:"ibm-3614-atm",wikiTitle:"IBM 3614 Consumer Transaction Facility",year:"1973–1981",sortYear:1973,title:"IBM 3614 Consumer Transaction Facility",subtitle:"The ATM that closed its own face on you: a self-closing safety-case shutter, stripe-up card insertion, and a machine that could seize your card and keep it",blurb:"IBM's 3614 is the first ATM that felt like a host receiving a guest. Its interface hides behind a powered protective-window shutter that opens only when you insert your card (stripe-up, the reverse of modern ATMs) and closes itself 25 seconds after your last transaction. It could run full bank transactions on a 40-character display, chain several on one card, and physically retain a suspected-stolen card. One unit dispensed reproductions of pre-Civil War dollar bills in the Smithsonian.",tags:["Terminal","Financial","Self-service","Input","Physical"],image:T("ibm-3614-atm.jpg")},{id:"collins-efis-glass-cockpit",slug:"collins-efis-glass-cockpit",wikiTitle:"Rockwell Collins EFIS / Boeing 757 Glass Cockpit",year:"1982–1983",sortYear:1982,title:"Rockwell Collins EFIS — Boeing 757 Glass Cockpit",subtitle:"The first CRT glass cockpit in an airliner: two color EADIs and EHSIs, a keyshow control panel, and a rising-runway symbol that grows up the screen as you descend",blurb:"The Boeing 757/767 flight deck was the first commercial airliner cockpit to replace the electromechanical instruments and the flight engineer with two color CRTs per pilot, driven by Collins EFIS. The interaction is a human-factors novelty: color is a semantic state machine (armed captions blue, green on capture), data declutters itself by flight condition, and a rising-runway symbol literally grows up the screen over the final 200 feet. Cybernetically the most demanding real-time interface a human operates.",tags:["Aviation","Display","CRT","Safety-critical","Physical"],image:T("b747-400-pfd-nd.jpg")},{id:"cochlear-nucleus-22",slug:"cochlear-nucleus-22",wikiTitle:"Cochlear Nucleus 22 / Mini Speech Processor",year:"1989",sortYear:1989,title:"Cochlear Nucleus 22 / Mini Speech Processor",subtitle:"The machine that learns your brain's language for sound, then injects coded pulses straight into your auditory nerve",blurb:"The museum reads the body a dozen ways — EEG, EMG, GSR, vocal-fold impedance. The Nucleus 22 cochlear implant does the opposite: it pushes signal back in. A digital speech processor analyzes sound, maps it onto a 22-electrode array in the cochlea, and fires electrical pulse trains directly at the auditory nerve, betting that the brain is plastic enough to learn to hear a pattern of spikes as language. The 1989 Mini Speech Processor is that interface made wearable. This is cyborg hardware in the most literal, medically regulated sense — a computer as an output sense organ.",tags:["Assistive","Output","Wearable","Medical","Clinical"],image:T("cochlear-mini-speech-processor-1989.jpg")},{id:"ascom-quickfare-b8050",slug:"ascom-quickfare-b8050",wikiTitle:"Ascom B8050 QuickFare",year:"1989",sortYear:1989,title:"Ascom B8050 QuickFare",subtitle:"A self-service ticket machine whose output is a notched cardstock card that IS the data",blurb:"A public self-service terminal where the interface contracts to a physical ritual: press destination and ticket-type buttons, feed coins, and watch a continuous-roll cardstock ticket get cut to length and drop out — the fare data literally punched into the notches of the card itself. No magnetic stripe, no onboard lookup. The QuickFare folds value into the geometry of the object it hands you, a member of the museum's physical-token-as-data family that reads its information in the shape of a freshly issued ticket.",tags:["Kiosk","Public","Output","Physical","Retail"],image:T("ascom-quickfare-aht.jpg")},{id:"polaroid-digital-palette",slug:"polaroid-digital-palette",wikiTitle:"Polaroid Digital Palette",year:"1986",sortYear:1986,title:"Polaroid Digital Palette",subtitle:"The desktop computer colour output device whose ritual is washing light through three filters onto instant film",blurb:"A film recorder that makes a computer's graphics real by exposing one sheet of instant film three times — once through red, green, and blue — so colour is built up as light washing over a photosensitive surface rather than as pixels on a screen. Load a film pack, wait for the mechanism to whir through its three-filter exposure, then peel the print apart. It is the museum's clearest instance of computer output in the other direction: not drawing on a screen or a page, but developing light onto film through a rotating filter wheel.",tags:["Output","Physical","Graphics","Home Computer"],image:T("polaroid-digital-palette-hr6000.jpg")},{id:"mattel-intellivision",slug:"mattel-intellivision",wikiTitle:"Mattel Intellivision",year:"1979",sortYear:1979,title:"Mattel Intellivision",subtitle:"The console that turned a telephone keypad into a game controller and let a printed paper card redefine every button",blurb:"The Intellivision's whole interaction lives in its two mirror-image hand controllers: a 12-button telephone-style keypad flanked by a free-spinning 16-direction disc. What makes it strange and worth the museum's care is the overlay: every cartridge shipped with two printed plastic overlays that slide down over the keypad and relabel those twelve buttons — a sports playbook, a strategy grid, a set of text keys — depending on which paper card you press against the membrane. One generic numeric keypad becomes any game's command surface, a physical ancestor of software-defined controls, and the museum's only printed-paper-reprograms-a-hardware-keyboard interface. The same controllers' wandering disc gave continuous analog motion beside the gated keypad.",tags:["Input","Game Console","Keypad","Controller","Overlay","Home Computer"],image:T("intellivision-controller.jpg")},{id:"amana-touchmatic-radarange",slug:"amana-touchmatic-radarange",wikiTitle:"Amana Touchmatic Radarange",year:"1975",sortYear:1975,title:"Amana Touchmatic Radarange",subtitle:"The first microprocessor control panel on a household appliance — cooking becomes programming",blurb:"Until 1975 a microwave's controls were a mechanical dial and a knob. The Amana Touchmatic Radarange (RR-6, 1975; the line ran through the late 1970s and early 1980s, with a 1978 RR5-6 preserved by the Science Museum Group) replaced them with a microprocessor and a digital touch keypad — press keys to set cook time, defrost-by-time, temperature, and staged or held programs, watch the bright clock count down, wait for the beep. It is the moment a computer's brains entered the kitchen, the ur-example of 'brains replace the dial.' The museum already keeps the machine-tool interrogator (TNC 110), the lab instrument (Tektronix 7854), and the automotive dashboard (Buick Riviera GCC); the Touchmatic is the same boundary crossing as it happened on the most ordinary household surface of all.",tags:["Input","Home Appliance","Microprocessor","Keypad","Display","Consumer"],image:T("amana-radarange.jpg")},{id:"mailmobile",slug:"mailmobile",wikiTitle:"Mailmobile",year:"1982",sortYear:1982,title:"Mailmobile",subtitle:"The office mail cart that chased you down a chemical trail and gave you thirty seconds to grab your mail",blurb:"A 600-pound autonomous mail robot by Bell & Howell that followed an invisible ultraviolet-fluorescent chemical trail across office carpet, stopping at each desk to beep, flash, and give secretaries a hard thirty-second window to grab their mail from locked shelves before it wheeled on. Deployed first in the Sears Tower, then at FBI Headquarters (OBR III, June 1982) and across Citibank, MassMutual, Northrop Grumman, and the IMF. It often bumped into people and stalled for hours, and staff decorated and named their units anyway.",tags:["Robot","Office","Autonomous","Physical","Commercial"],image:T("mailmobile-fbi.jpg")},{id:"mouse-systems-optical-mouse",slug:"mouse-systems-optical-mouse",wikiTitle:"Mouse Systems Optical Mouse",year:"1980",sortYear:1980,title:"Mouse Systems Optical Mouse",subtitle:"The first optical mouse, chained to its printed grid pad",blurb:"Steve Kirsch's 1980 optical mouse (first demonstrated December 1980, sold from 1982 by Mouse Systems) tracked an infrared grid printed on a special metallic pad — lift it off the pad or rotate the pad and it lost all tracking. The cursor was computed against printed coordinates on the mat, tethering the pointer to its own paper map. A solid-state counterpoint to dirty rolling balls, and the direct ancestor of every modern optical mouse.",tags:["Input","Pointing","Optical","Desktop","Commercial"],image:T("optical-mouse-underside.jpg")},{id:"logitech-trackman",slug:"logitech-trackman",wikiTitle:"Logitech TrackMan",year:"1989",sortYear:1989,title:"Logitech TrackMan (1989)",subtitle:"The first thumb-operated trackball, the grammar laptops would borrow",blurb:"Logitech's 1989 TrackMan parked a stationary ball in a cradle and drove it with a single thumb, leaving the palm and fingers to rest — inverting the whole-hand finger-trackball and the arm-reaching mouse into one digit's job. It became the template between moving the cursor without lifting the arm, and what a decade of laptops spread: a fixed device, a resting hand, one busy thumb.",tags:["Input","Pointing","Trackball","Desktop","Commercial"],image:T("trackman-1989-white.jpg")},{id:"ibm-65-cartridge-system",slug:"ibm-65-cartridge-system",wikiTitle:"IBM 6:5 Cartridge System",year:"1975",sortYear:1975,title:"IBM 6:5 Cartridge System (1975)",subtitle:"The office dictation machine that stored your voice on magnetic discs you could color-code, mark urgent, and mail",blurb:"IBM's 1975 answer to the cassette-tape office: dictation stored on six-minute magnetic discs packed into a floppy-like cartridge, in five colors so jobs could be sorted at a glance. The recorded voice lived on a tangible, removable object you could flag as urgent and physically route — and transcription was a whole-body ritual, hands on the keys while a foot pedal drove playback and ears heard through a headset. A physical-token interface where the token is a human voice, and one of the most embodied office workflows computing ever had.",tags:["Office","Physical Token","Audio","Input","Commercial"],image:T("ibm-65-portable-recorder.jpg")},{id:"trackpoint",slug:"trackpoint",wikiTitle:"IBM TrackPoint",year:"1992",sortYear:1992,title:"IBM TrackPoint (1992)",subtitle:"The laptop pointer that reads pressure, not motion — force-sensing isometric input between the G and H keys",blurb:"TrackPoint is the strange inversion of the mouse: it doesn't move at all. Its two pairs of resistive strain gauges read how hard you press an immobile cap between the G and H keys, converting force — not travel — into cursor velocity. Hands never leave home row, countering the three-quarters of a second Xerox PARC measured in shifting hand from keyboard to mouse. IBM commercialized it on the 1992 ThinkPad 700, from Ted Selker's PARC prototype. Its oddest flank was Zenith's J-Mouse, where the letter J itself became the pointing stick.",tags:["Input","Pointing","Force Sensing","Desktop","Commercial"],image:T("pointing-stick-hero.jpg")},{id:"orca-edge",slug:"orca-edge",wikiTitle:"Orca Edge",year:"1983",sortYear:1983,title:"Orca Edge Dive Computer (1983)",subtitle:"A wrist-worn decompression computer that renders your body's nitrogen uptake as 12 abstract 'tissue' bar graphs",blurb:"The Orca Edge (Orca Industries, 1983) replaced dive tables and a dive watch with real-time wearable ambient computing: instead of a numeric decompression plan, it rendered the diver's state as twelve horizontal 'tissue' bar graphs on a graphic LCD, each a theoretical body compartment modeled on the US Navy air tables. The diver reads a metaphor — watching which bars cross the limiting line to judge how much decompression obligation is building — and must stay below the computed safe-ascent depth. Reading the instrument means reasoning about your own physiology from an abstract visualization, not looking up a number.",tags:["Wearable","Embodied","Displays","Safety-critical","Commercial"],image:T("orca-edge-dive-computer.jpg")},{id:"magnavox-odyssey-2",slug:"magnavox-odyssey-2",wikiTitle:"Magnavox Odyssey 2 / Philips Videopac G7000",year:"1978",sortYear:1978,title:"Magnavox Odyssey 2 / Philips Videopac G7000 (1978)",subtitle:"A game console that grew a full QWERTY keyboard, a speech-synthesis module, and a tactile board-game/video-game hybrid",blurb:"The Magnavox Odyssey 2 (1978, sold in Europe as the Philips Videopac G7000) is the console-that-wanted-to-be-a-computer: it shipped with a full QWERTY-layout membrane keyboard built into the machine body, used for educational games, option selection, and teaching simple programming via the Computer Intro! cartridge. It later gained The Voice speech-synthesis module (1982) and the Master Strategy Series — cardboard-and-plastic board games played in tandem with the CRT. Around two million units sold before its March 1984 withdrawal.",tags:["Console","Keyboard","Speech synthesis","Tangible","Commercial"],image:T("odyssey-2-console-set.jpg")},{id:"psion-organiser-i",slug:"psion-organiser-i",wikiTitle:"Psion Organiser I",year:"1984",sortYear:1984,title:"Psion Organiser I (1984)",subtitle:"Saving data meant zapping a write-once EPROM — and reusing it meant ultraviolet light",blurb:"The line widely credited as the first practical pocket computer, at £99 in 1984. Data and programs lived on Datapaks — write-once EPROM cartridges the machine itself 'zapped' with a high-voltage pulse to save. Freeing a full pack was a physical ritual: pull it out and hold it under an ultraviolet lamp to erase the window, then slide it back in. The 6×6 keypad hides under a spring-loaded sliding cover; the line grew into EPOC and then Symbian.",tags:["PDA","Portable","Storage","Physical Token","Commercial"],image:T("psion-organiser-1.jpg")},{id:"lexicon-lk3000",slug:"lexicon-lk3000",wikiTitle:"Lexicon LK-3000",year:"1978",sortYear:1978,title:"Lexicon LK-3000 (1978)",subtitle:"A pocket translator with no brain of its own — you swap the whole CPU and ROM cartridge by hand to change its function",blurb:"The LK-3000 base unit is an inert shell: keyboard, 16-character LED display, cartridge slot, and batteries — but no processor and no memory of its own. All logic lives inside swappable plastic cartridges, each containing its own CPU and ROM, so changing language or function means ejecting one cartridge and snapping in another. A hardware-multiplexing design a decade before software-defined devices, sold under both Lexicon and Nixdorf Computer AG.",tags:["Translation","Cartridge","Portable","Input","Commercial"],image:T("lk3000-nixdorf-handheld.jpg")},{id:"tomy-digital-derby",slug:"tomy-digital-derby",wikiTitle:"Tomy Digital Derby",year:"1978",sortYear:1978,title:"Tomy Digital Derby (1978)",subtitle:"A palm-sized race you steer with a physical wheel, not a switch",blurb:"An electro-mechanical handheld racer with no buttons at all. A small three-spoke steering wheel turns continuously to guide a car through oncoming traffic on a mechanically scrolling roadway; a separate gear lever changes speed. Crash and the field freezes behind a red light until you reset. The palm-sized ancestor of the steering-wheel driving controller, distinct from Mattel Auto Race's slide levers.",tags:["Games","Handheld","Input","Electro-mechanical","Analog"],image:T("tomy-digital-derby-1978.jpg")},{id:"cmx-340",slug:"cmx-340",wikiTitle:"CMX-340",year:"1976",sortYear:1976,title:"CMX-340 (1976)",subtitle:"The broadcast edit console whose keyboard became an industry standard — with a jog knob box you could hand over for left- or right-handed editors",blurb:"The first computerized broadcast videotape editing console, from the CBS + Memorex venture that invented the field. Editing is a typed ritual: you enter edit points on a dedicated function keyboard and scrub with a jog knob. The most embodied touch is the GIZMO, a jog-knob box integrated into the keyboard that could be repositioned for left- or right-handed editors. Within 18 months, over 90% of broadcast videotape editing ran on CMX systems.",tags:["HCI","Video","Editing","Input","Professional"],image:T("cmx-340-console.jpg")},{id:"sony-bve-600",slug:"sony-bve-600",wikiTitle:"Sony BVE-600",year:"c. 1985",sortYear:1985,title:"Sony BVE-600 (c. 1985)",subtitle:"A desktop edit controller with two independent jog dials — one hand on the source deck, one on the recorder — for two-handed scrubbing",blurb:"A desktop U-Matic editing controller whose defining feature is two independent jog dials: one scrubs the source deck, the other the recorder, so the editor works both hands simultaneously — a literal bimanual mapping of the two-deck edit. The desktop counterpoint to the broadcast CMX function-keyboard console. Held in the Museum of Science and Industry, Manchester.",tags:["HCI","Video","Editing","Input","Professional"],image:T("bve-600-controller.jpg")},{id:"movement-mcs-drum-computer",slug:"movement-mcs-drum-computer",wikiTitle:"Movement Systems (MCS) Drum Computer",year:"1981",sortYear:1981,title:"Movement Systems (MCS) Drum Computer (1981)",subtitle:"A drum machine that IS a microcomputer — you type your rhythms on a QWERTY keyboard and read them on a CRT",blurb:"A rare British drum machine built around a Nascom 2 single-board computer. Rather than step buttons and LEDs, you program percussion by typing on a full QWERTY keyboard and graphically editing patterns on a monochrome CRT. Fourteen voices blend analog synthesized drums with 8-bit samples. David Stewart of the Eurythmics used one on 'Sweet Dreams' — seen typing at it in the video. Only ~30 units were ever made.",tags:["Music","Input","Sequencer","Computer","Commercial"],image:T("mcs-drum-computer.jpg")},{id:"brother-wp1",slug:"brother-wp1",wikiTitle:"Brother WP1 Word Processor / Electronic Typewriter",year:"c. 1985",sortYear:1985,title:"Brother WP1 Word Processor / Electronic Typewriter",subtitle:"The typewriter that made you edit before you printed",blurb:"The Brother WP1 sits exactly on the seam where a typewriter stopped committing ink on every keystroke and became a computer that holds your words until you say so. It pairs a QWERTY keyboard with a multi-line LCD editing screen and built-in document memory: you type, you see the text on the display, you correct it, and only then does the print head materialize it on paper. Composition happens in the digital on-device domain; printing is a separate, deliberate step. It is a direct descendant of the earliest single-line edit-before-print portable, the Brother EP-20 (1982), and a fully realized mass-market realization of the edit-before-print interaction.",tags:["Keyboard","Text Entry","Word Processor","Input","Output"],image:T("brother-wp1-1.jpg")},{id:"intellivision-keyboard-component",slug:"intellivision-keyboard-component",wikiTitle:"Mattel Intellivision Keyboard Component",year:"1983",sortYear:1983,title:"Mattel Intellivision Keyboard Component",subtitle:"The toy console that sprouted a typewriter, a tape drive, and a second brain",blurb:"The Intellivision was designed from its 1979 debut as a modular home computer, and the Keyboard Component was the promise made flesh — then un-made. This enormous full-width keyboard module swallows the game console into a recessed cavity, adds an 8-bit 6502 beside the Intellivision's own CP1610 (a genuine dual-processor machine), and stores programs on a built-in cassette drive with two digital and two analog tracks. ~4,000 were built, it was released in two cities at $600, cancelled in 1982 amid an FTC false-advertising probe, and bought back from every owner. Jay Leno riffed on its endless delays at Mattel's 1981 Christmas party.",tags:["Input","Keyboard","Home Computer","Console Peripheral","Storage"],image:T("intellivision-keyboard-component-1.jpg")},{id:"the-clapper",slug:"the-clapper",wikiTitle:"The Clapper",year:"1984",sortYear:1984,title:"The Clapper",subtitle:"Clap on, clap off — two sharp handclaps as a consumer gesture command, a decade before Kinect",blurb:"A small box that plugs into a wall outlet and switches any plugged-in appliance on or off with two sharp handclaps. No remote, no touch, no switch of its own — the command is a percussive gesture made with the body alone, recognized by acoustic pattern and rejected when it is a single accidental clap. The most iconic consumer gesture-recognition device of its era, selling for under $30 and later immortalized as pop-culture shorthand for 'the ridiculously simple interface.'",tags:["HCI","Gesture","Consumer","Sound Input","Home Automation"],image:T("the-clapper.png")},{id:"caere-ocr-wand",slug:"caere-ocr-wand",wikiTitle:"Caere Hand-held OCR Wand with Visual Aligner",year:"1980",sortYear:1980,title:"Caere Hand-held OCR Wand with Visual Aligner (1980)",subtitle:"An OCR wand that projects a light pattern to guide your hand — read only when your sweep is geometrically perfect",blurb:"A hand-swept OCR wand that projects a trapezoidal light pattern onto the paper surface. The operator must hold the wand at the precise height, angle, and center alignment — the pattern visibly distorts if you tilt, hold too high, or skew, and reading only succeeds when the geometry is perfect. The interface is a continuous visual-to-motor calibration loop: the machine tells the human, through projected light, whether their hand is doing it right. Patent US 4,240,748 (Caere Corporation, 1980).",tags:["HCI","Input","OCR","Scanning","Physical Interaction"],image:T("caere-ocr-wand-fig1.png")},{id:"dynatac-8000x",slug:"dynatac-8000x",wikiTitle:"Motorola DynaTAC 8000X",year:"1984",sortYear:1984,title:"Motorola DynaTAC 8000X",subtitle:"The first handheld cell phone — the whole device is the handset, and every call is a dial-then-Send ritual",blurb:"The first commercially available handheld cellular phone, sold from 1984 at $3,995. Its defining interaction is that the entire device is the handset — no separate earpiece, no base. The user types a number into the single-line LED display, then presses a dedicated 'Snd' (Send) key to seize a channel and connect: a modal two-phase dial-then-Send gesture that is the direct ancestor of every mobile 'green call button.' Beyond the 12-key pad it carries nine special keys (Rcl, Clr, Snd, Sto, Fcn, End, Pwr, Lock, Vol) and a 30-number store-and-recall memory. Ten inches tall, 2.5 pounds, 30 minutes of talk time on a 10-hour charge — the 'brick.'",tags:["HCI","Input","Telephony","Mobile","Handheld","Consumer"],image:T("dynatac-8000x.jpg")},{id:"hp-75d",slug:"hp-75d",wikiTitle:"HP-75C / HP-75D Portable Computer",year:"1982",sortYear:1982,title:"HP-75C / HP-75D Portable Computer",subtitle:"A handheld BASIC computer you load with software by sliding magnetic cards beside the spacebar — then it wakes up on a schedule to run your programs",blurb:"A handheld BASIC computer whose defining interaction is physical-token software loading: a manually operated magnetic card reader is built into the body beside the spacebar (2×650 bytes per card), ROM modules snap into four expansion ports, and the HP-75D adds a barcode-wand port for sweeping printed data directly into programs. Unusually for 1982, its appointment scheduler can execute BASIC programs at scheduled times — a real-time-control 'personal intelligence appliance' that fires your code on the clock. BYTE called it a real-time control system in a very portable box.",tags:["HCI","Input","Physical Token","Pocket Computer","Scheduled Automation"],image:T("hp-75d.jpg")},{id:"casio-fx-7000g",slug:"casio-fx-7000g",wikiTitle:"Casio FX-7000G Graphing Calculator",year:"1985",sortYear:1985,title:"Casio FX-7000G Graphing Calculator",subtitle:"The first graphing calculator — a pocket number-slab whose 96×64 dot-matrix display becomes a drawing surface that plots your functions",blurb:"Widely recognized as the world's first graphing calculator (1985). Its 96×64-pixel dot-matrix LCD turns the display into a drawing surface: the machine renders user-defined function graphs, statistical graphs, bar/line/normal-distribution curves, and regression lines directly on the device. This is the interaction-model shift from 'machine that answers with a number' to 'machine that draws a picture you inspect' — the direct ancestor of every graphing calculator since, and a distinct new channel in the museum's calculator narrative. Also programmable (422 bytes, tokenized, ten slots) at 13-digit precision.",tags:["HCI","Input","Display","Calculator","Graphical Output"],image:T("casio-fx-7000g.jpg")},{id:"ge-talaria",slug:"ge-talaria",wikiTitle:"GE Talaria Light-Valve Video Projector",year:"1983",sortYear:1983,title:"GE Talaria Light-Valve Video Projector",subtitle:"A full video image sculpted by electrons into a spinning film of oil, read by light bent into a shadow",blurb:"A video projector with no picture tube and no pixels. Inside, a rotating glass disc is continuously re-coated with a thin film of viscous oil; a conventional electron beam sweeps a raster across the oil, physically deforming it into a diffraction grating. Light from a Xenon arc lamp is diffracted by the carved oil and imaged through Schlieren optics; undisturbed oil falls into a light trap and shows black. Color is split into red/green/blue via dichroic filters, each writing its own oil film. The image is literally sculpted from oil — one of the strangest output mechanisms ever commercialized, with no near neighbor anywhere in the collection.",tags:["HCI","Output","Display","Light Valve"],image:T("ge-talaria.png")},{id:"ferranti-packard-flipdot",slug:"ferranti-packard-flipdot",wikiTitle:"Ferranti-Packard Flip-Disc Display",year:"1976",sortYear:1976,title:"Ferranti-Packard Flip-Disc Display",subtitle:"An electromechanical dot matrix where each pixel is a metal disc flipped by a solenoid pulse and locked in place with no power at all",blurb:"A purely electromechanical, bistable dot-matrix display: each pixel is a two-sided metal disc on an axle with a permanent magnet; a solenoid pulse flips it and it latches, holding its state with zero energy. Patented by Kenyon Taylor (1961) and mass-produced by Ferranti-Packard, it filled stock-exchange boards, transit destination signs, highway signs, and — most famously — the Family Feud answer board from 1976. The image updates with a soft thunder of tiny flipping latches: a display that is also a small mechanical performance. The output mechanism is the entire story.",tags:["HCI","Output","Display","Electromechanical"],image:T("ferranti-packard-family-feud.jpg")},{id:"linotype-crtronic",slug:"linotype-crtronic",wikiTitle:"Linotype CRTronic",year:"1979",sortYear:1979,title:"Linotype CRTronic",subtitle:"A digital phototypesetter where the operator reads a movable keyboard and a tiltable CRT, and watches remaining line length as a glowing light bar",blurb:"An all-in-one digital phototypesetting workstation from Mergenthaler Linotype. Composition happens interactively on a 9-inch tiltable green-phosphor CRT, but the oddest detail is the analog line-length-remainder light bar: the screen renders the column space still to be filled as a graphical gauge rather than a number — instrument-like feedback inside a text editor. A movable keyboard carries 14 programmable memory keys in three levels, and the system does foreground and background hyphenation/justification at once. A distinct corner of professional creative HCI: embodied, oddly-instrumented typesetting with a verifiable primary-source brochure.",tags:["HCI","Input","Output","Typesetting","Professional"],image:T("crtronic-360.jpg")},{id:"space-cadet-keyboard",slug:"space-cadet-keyboard",wikiTitle:"Space-Cadet Keyboard",year:"1978",sortYear:1978,title:"Space-Cadet Keyboard",subtitle:"The MIT Lisp-machine keyboard where chording five modifier bits and three shift levels gives a typist thousands of distinct single-keystroke commands",blurb:"Designed by John L. Kulp in 1978 for the MIT Lisp machines, this keyboard carries seven modifiers — the bucky bits Control, Meta, Super, Hyper plus Shift, Top, and a Greek/Front shift — arranged in rows so one hand can chord them while the other types. Combined, (50 keys × 5 shift types) × 24 bucky combinations yields up to 4,000 distinct inputs: enough to type Greek mathematical text and to give users thousands of single-character commands. The ultimate 'the more keys you learn, the faster you go' input device, and the origin of Emacs' M- prefix. No other keyboard in the collection is a chorded-modifier system of this scale.",tags:["HCI","Input","Keyboard","Chording","Modifier"],image:T("space-cadet.jpg")}];var wn=cc.toSorted((e,t)=>t.sortYear-e.sortYear||e.title.localeCompare(t.title)),hc=cc.toReversed(),dc=wn.find((e)=>e.feature)??wn[0];Xf(dc);Wf();Yf();Vf();function Vf(){let e=document.getElementById("hero-exhibit-count"),t=document.getElementById("gallery-count");if(e)e.textContent=String(wn.length);if(t)t.textContent=`${wn.length} artifacts recovered`}function Wf(){uc("timeline"),document.querySelectorAll(".gallery__sort-button").forEach((e)=>{e.addEventListener("click",()=>{let t=e.dataset.sort==="newest"?"newest":"timeline";document.querySelectorAll(".gallery__sort-button").forEach((i)=>{let n=i===e;i.classList.toggle("active",n),i.setAttribute("aria-pressed",String(n))}),uc(t)})})}function uc(e){let t=document.getElementById("gallery-grid");if(!t)return;let i=e==="newest"?hc:wn;t.replaceChildren(...i.map((n)=>{let r=document.createElement("a");if(r.className="exhibit-card",n.span===2)r.classList.add("exhibit-card--wide");r.href=`./exhibits/${n.slug}/`,r.setAttribute("aria-label",`${n.title}, ${n.year}`);let a=document.createElement("div");a.className="exhibit-card__media";let s=document.createElement("img");s.className="exhibit-card__image",s.src=n.image,s.alt=`${n.title} archival photograph`,s.loading="lazy";let o=document.createElement("div");o.className="exhibit-card__image-glitch";let l=document.createElement("span");l.className="exhibit-card__year",l.textContent=n.year,a.append(s,o,l);let c=document.createElement("div");c.className="exhibit-card__body";let u=document.createElement("h3");u.className="exhibit-card__title",u.textContent=n.title;let f=document.createElement("p");f.className="exhibit-card__subtitle",f.textContent=n.subtitle;let h=document.createElement("div");return h.className="exhibit-card__tags",h.append(...n.tags.map((g)=>{let v=document.createElement("span");return v.className="exhibit-card__tag",v.textContent=g,v})),c.append(u,f,h),r.append(a,c),r}))}function Xf(e){let t=document.getElementById("hero-feature-image"),i=document.getElementById("hero-feature-info");if(!t||!i)return;t.src=e.image,t.alt=`${e.title} archival photograph`;let n=document.createElement("span");n.className="hero__feature-year",n.textContent=e.year;let r=document.createElement("h2");r.className="hero__feature-title",r.textContent=e.title;let a=document.createElement("p");a.className="hero__feature-subtitle",a.textContent=e.blurb;let s=document.createElement("a");s.className="hero__feature-link",s.href=`./exhibits/${e.slug}/`,s.textContent="Inspect artifact",i.replaceChildren(n,r,a,s)}function Yf(){let e=document.getElementById("ambient-canvas");if(!e)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=new Rr,n=new Ct(45,1,0.1,100);n.position.set(0,0,5);let r=new qs({canvas:e,antialias:!0,alpha:!0});r.setClearColor(0,0),r.setPixelRatio(Math.min(window.devicePixelRatio,2));let a={uTime:{value:0},uGlitch:{value:0.1}},s=new Lt({uniforms:a,transparent:!0,depthWrite:!1,blending:pn,vertexShader:`
      uniform float uTime;
      uniform float uGlitch;
      varying vec2 vUv;
      varying float vRim;

      float hash(float v) { return fract(sin(v * 113.17) * 43758.5453); }

      void main() {
        vUv = uv;
        vec3 pos = position;
        float band = floor((pos.y + 1.5) * 18.0);
        float glitch = step(1.0 - uGlitch * 0.3, hash(band + floor(uTime * 5.0)));
        pos += normal * glitch * 0.08 * sin(uTime * 20.0 + band);
        vRim = pow(1.0 - abs(dot(normalize(normalMatrix * normal), vec3(0.0, 0.0, 1.0))), 2.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uGlitch;
      varying vec2 vUv;
      varying float vRim;

      float lineMask(float v, float s, float w) {
        return 1.0 - smoothstep(w, w + 0.01, abs(fract(v * s) - 0.5));
      }

      void main() {
        float lat = lineMask(vUv.y, 28.0, 0.012);
        float lon = lineMask(vUv.x, 40.0, 0.008);
        float scan = lineMask(vUv.y + uTime * 0.03, 80.0, 0.005) * 0.2;
        float wire = max(lat, lon) * 0.6;
        float intensity = wire + scan + vRim * 0.3;
        vec3 color = vec3(0.0, 1.0, 0.48) * intensity;
        gl_FragColor = vec4(color, clamp(intensity, 0.0, 0.7));
      }
    `}),o=new kt(new On(1.5,80,60),s);i.add(o);let l=new kt(new zn(1.9,0.008,4,80),new bn({color:65403,transparent:!0,opacity:0.12,blending:pn}));l.rotation.x=Math.PI*0.5,i.add(l);function c(){let v=Math.max(1,window.innerWidth),w=Math.max(1,window.innerHeight);n.aspect=v/w,n.updateProjectionMatrix(),r.setSize(v,w,!1)}let u=0;new ResizeObserver(()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)}).observe(e),c();let h=performance.now(),g=h;r.setAnimationLoop(()=>{let v=performance.now(),w=(v-g)/1000,d=(v-h)/1000;h=v;let p=t.matches?0.2:1;a.uTime.value=w,o.rotation.y+=d*0.12*p,o.rotation.x=Math.sin(w*0.3)*0.04*p,l.rotation.z=-w*0.06*p,r.render(i,n)})}
