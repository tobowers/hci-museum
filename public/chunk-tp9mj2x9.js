var O6="184";var M6=0,Z9=1,L6=2;var z7=1,B6=2,W7=3,Z7=0,T1=1,e1=2,JJ=0,P7=1,G7=2,G9=3,U9=4,_6=5;var U7=100,I6=101,w6=102,A6=103,V6=104,z6=200,P6=201,C6=202,T6=203,S6=204,j6=205,h6=206,f6=207,b6=208,v6=209,y6=210,x6=211,g6=212,p6=213,l6=214,d6=0,m6=1,u6=2,k9=3,c6=4,n6=5,i6=6,s6=7,o6=0,a6=1,r6=2,s1=0,R9=1,F9=2,N9=3,q9=4,O9=5,M9=6,L9=7;var k7=301,fJ=302,k8=303,R8=304,C7=306,t6=1000,F8=1001,e6=1002,AJ=1003,JH=1004;var T7=1005;var S1=1006,N8=1007;var bJ=1008;var o1=1009,$H=1010,HH=1011,S7=1012,B9=1013,VJ=1014,GJ=1015,UJ=1016,_9=1017,I9=1018,R7=1020,QH=35902,EH=35899,YH=1021,XH=1022,$J=1023,vJ=1026,yJ=1027,DH=1028,w9=1029,xJ=1030,A9=1031;var V9=1033,q8=33776,O8=33777,M8=33778,L8=33779,z9=35840,P9=35841,C9=35842,T9=35843,S9=36196,j9=37492,h9=37496,f9=37488,b9=37489,B8=37490,v9=37491,y9=37808,x9=37809,g9=37810,p9=37811,l9=37812,d9=37813,m9=37814,u9=37815,c9=37816,n9=37817,i9=37818,s9=37819,o9=37820,a9=37821,r9=36492,t9=36494,e9=36495,J$=36283,$$=36284,_8=36285,H$=36286;var Q$=0,KH=1,gJ="",WH="srgb",E$="srgb-linear",Y$="linear",Q1="srgb";var ZH=512,GH=513,UH=514,I8=515,kH=516,RH=517,w8=518,FH=519;var X$="300 es",D$=2000;function FQ(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function NQ(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function V7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function NH(){let J=V7("canvas");return J.style.display="block",J}var J6={},K7=null;function K$(...J){let $="THREE."+J.shift();if(K7)K7("log",$,...J);else console.log($,...J)}function qH(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let H=J[1];if(H&&H.isStackTrace)J[0]+=" "+H.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function z0(...J){J=qH(J);let $="THREE."+J.shift();if(K7)K7("warn",$,...J);else{let H=J[0];if(H&&H.isStackTrace)console.warn(H.getError($));else console.warn($,...J)}}function P0(...J){J=qH(J);let $="THREE."+J.shift();if(K7)K7("error",$,...J);else{let H=J[0];if(H&&H.isStackTrace)console.error(H.getError($));else console.error($,...J)}}function G8(...J){let $=J.join(" ");if($ in J6)return;J6[$]=!0,z0(...J)}function OH(J,$,H){return new Promise(function(Q,E){function Y(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:E();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,H);break;default:Q()}}setTimeout(Y,H)})}var MH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class kJ{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let H=this._listeners;if(H[J]===void 0)H[J]=[];if(H[J].indexOf($)===-1)H[J].push($)}hasEventListener(J,$){let H=this._listeners;if(H===void 0)return!1;return H[J]!==void 0&&H[J].indexOf($)!==-1}removeEventListener(J,$){let H=this._listeners;if(H===void 0)return;let Q=H[J];if(Q!==void 0){let E=Q.indexOf($);if(E!==-1)Q.splice(E,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let H=$[J.type];if(H!==void 0){J.target=this;let Q=H.slice(0);for(let E=0,Y=Q.length;E<Y;E++)Q[E].call(this,J);J.target=null}}}var _1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var l8=Math.PI/180,U8=180/Math.PI;function j7(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,H=Math.random()*4294967295|0,Q=Math.random()*4294967295|0;return(_1[J&255]+_1[J>>8&255]+_1[J>>16&255]+_1[J>>24&255]+"-"+_1[$&255]+_1[$>>8&255]+"-"+_1[$>>16&15|64]+_1[$>>24&255]+"-"+_1[H&63|128]+_1[H>>8&255]+"-"+_1[H>>16&255]+_1[H>>24&255]+_1[Q&255]+_1[Q>>8&255]+_1[Q>>16&255]+_1[Q>>24&255]).toLowerCase()}function m0(J,$,H){return Math.max($,Math.min(H,J))}function qQ(J,$){return(J%$+$)%$}function d8(J,$,H){return(1-H)*J+H*$}function B7(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function P1(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class a0{static{a0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,H=this.y,Q=J.elements;return this.x=Q[0]*$+Q[3]*H+Q[6],this.y=Q[1]*$+Q[4]*H+Q[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=m0(this.x,J.x,$.x),this.y=m0(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=m0(this.x,J,$),this.y=m0(this.y,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(m0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let H=this.dot(J)/$;return Math.acos(m0(H,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,H=this.y-J.y;return $*$+H*H}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let H=Math.cos($),Q=Math.sin($),E=this.x-J.x,Y=this.y-J.y;return this.x=E*H-Y*Q+J.x,this.y=E*Q+Y*H+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class RJ{constructor(J=0,$=0,H=0,Q=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=H,this._w=Q}static slerpFlat(J,$,H,Q,E,Y,X){let D=H[Q+0],K=H[Q+1],W=H[Q+2],U=H[Q+3],R=E[Y+0],Z=E[Y+1],N=E[Y+2],M=E[Y+3];if(U!==M||D!==R||K!==Z||W!==N){let _=D*R+K*Z+W*N+U*M;if(_<0)R=-R,Z=-Z,N=-N,M=-M,_=-_;let G=1-X;if(_<0.9995){let k=Math.acos(_),B=Math.sin(k);G=Math.sin(G*k)/B,X=Math.sin(X*k)/B,D=D*G+R*X,K=K*G+Z*X,W=W*G+N*X,U=U*G+M*X}else{D=D*G+R*X,K=K*G+Z*X,W=W*G+N*X,U=U*G+M*X;let k=1/Math.sqrt(D*D+K*K+W*W+U*U);D*=k,K*=k,W*=k,U*=k}}J[$]=D,J[$+1]=K,J[$+2]=W,J[$+3]=U}static multiplyQuaternionsFlat(J,$,H,Q,E,Y){let X=H[Q],D=H[Q+1],K=H[Q+2],W=H[Q+3],U=E[Y],R=E[Y+1],Z=E[Y+2],N=E[Y+3];return J[$]=X*N+W*U+D*Z-K*R,J[$+1]=D*N+W*R+K*U-X*Z,J[$+2]=K*N+W*Z+X*R-D*U,J[$+3]=W*N-X*U-D*R-K*Z,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,H,Q){return this._x=J,this._y=$,this._z=H,this._w=Q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:H,_y:Q,_z:E,_order:Y}=J,X=Math.cos,D=Math.sin,K=X(H/2),W=X(Q/2),U=X(E/2),R=D(H/2),Z=D(Q/2),N=D(E/2);switch(Y){case"XYZ":this._x=R*W*U+K*Z*N,this._y=K*Z*U-R*W*N,this._z=K*W*N+R*Z*U,this._w=K*W*U-R*Z*N;break;case"YXZ":this._x=R*W*U+K*Z*N,this._y=K*Z*U-R*W*N,this._z=K*W*N-R*Z*U,this._w=K*W*U+R*Z*N;break;case"ZXY":this._x=R*W*U-K*Z*N,this._y=K*Z*U+R*W*N,this._z=K*W*N+R*Z*U,this._w=K*W*U-R*Z*N;break;case"ZYX":this._x=R*W*U-K*Z*N,this._y=K*Z*U+R*W*N,this._z=K*W*N-R*Z*U,this._w=K*W*U+R*Z*N;break;case"YZX":this._x=R*W*U+K*Z*N,this._y=K*Z*U+R*W*N,this._z=K*W*N-R*Z*U,this._w=K*W*U-R*Z*N;break;case"XZY":this._x=R*W*U-K*Z*N,this._y=K*Z*U-R*W*N,this._z=K*W*N+R*Z*U,this._w=K*W*U+R*Z*N;break;default:z0("Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let H=$/2,Q=Math.sin(H);return this._x=J.x*Q,this._y=J.y*Q,this._z=J.z*Q,this._w=Math.cos(H),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,H=$[0],Q=$[4],E=$[8],Y=$[1],X=$[5],D=$[9],K=$[2],W=$[6],U=$[10],R=H+X+U;if(R>0){let Z=0.5/Math.sqrt(R+1);this._w=0.25/Z,this._x=(W-D)*Z,this._y=(E-K)*Z,this._z=(Y-Q)*Z}else if(H>X&&H>U){let Z=2*Math.sqrt(1+H-X-U);this._w=(W-D)/Z,this._x=0.25*Z,this._y=(Q+Y)/Z,this._z=(E+K)/Z}else if(X>U){let Z=2*Math.sqrt(1+X-H-U);this._w=(E-K)/Z,this._x=(Q+Y)/Z,this._y=0.25*Z,this._z=(D+W)/Z}else{let Z=2*Math.sqrt(1+U-H-X);this._w=(Y-Q)/Z,this._x=(E+K)/Z,this._y=(D+W)/Z,this._z=0.25*Z}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let H=J.dot($)+1;if(H<0.00000001)if(H=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=H;else this._x=0,this._y=-J.z,this._z=J.y,this._w=H;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=H;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(m0(this.dot(J),-1,1)))}rotateTowards(J,$){let H=this.angleTo(J);if(H===0)return this;let Q=Math.min(1,$/H);return this.slerp(J,Q),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:H,_y:Q,_z:E,_w:Y}=J,X=$._x,D=$._y,K=$._z,W=$._w;return this._x=H*W+Y*X+Q*K-E*D,this._y=Q*W+Y*D+E*X-H*K,this._z=E*W+Y*K+H*D-Q*X,this._w=Y*W-H*X-Q*D-E*K,this._onChangeCallback(),this}slerp(J,$){let{_x:H,_y:Q,_z:E,_w:Y}=J,X=this.dot(J);if(X<0)H=-H,Q=-Q,E=-E,Y=-Y,X=-X;let D=1-$;if(X<0.9995){let K=Math.acos(X),W=Math.sin(K);D=Math.sin(D*K)/W,$=Math.sin($*K)/W,this._x=this._x*D+H*$,this._y=this._y*D+Q*$,this._z=this._z*D+E*$,this._w=this._w*D+Y*$,this._onChangeCallback()}else this._x=this._x*D+H*$,this._y=this._y*D+Q*$,this._z=this._z*D+E*$,this._w=this._w*D+Y*$,this.normalize();return this}slerpQuaternions(J,$,H){return this.copy(J).slerp($,H)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),H=Math.random(),Q=Math.sqrt(1-H),E=Math.sqrt(H);return this.set(Q*Math.sin(J),Q*Math.cos(J),E*Math.sin($),E*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,$=0,H=0){this.x=J,this.y=$,this.z=H}set(J,$,H){if(H===void 0)H=this.z;return this.x=J,this.y=$,this.z=H,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion($6.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion($6.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,H=this.y,Q=this.z,E=J.elements;return this.x=E[0]*$+E[3]*H+E[6]*Q,this.y=E[1]*$+E[4]*H+E[7]*Q,this.z=E[2]*$+E[5]*H+E[8]*Q,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,H=this.y,Q=this.z,E=J.elements,Y=1/(E[3]*$+E[7]*H+E[11]*Q+E[15]);return this.x=(E[0]*$+E[4]*H+E[8]*Q+E[12])*Y,this.y=(E[1]*$+E[5]*H+E[9]*Q+E[13])*Y,this.z=(E[2]*$+E[6]*H+E[10]*Q+E[14])*Y,this}applyQuaternion(J){let $=this.x,H=this.y,Q=this.z,E=J.x,Y=J.y,X=J.z,D=J.w,K=2*(Y*Q-X*H),W=2*(X*$-E*Q),U=2*(E*H-Y*$);return this.x=$+D*K+Y*U-X*W,this.y=H+D*W+X*K-E*U,this.z=Q+D*U+E*W-Y*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,H=this.y,Q=this.z,E=J.elements;return this.x=E[0]*$+E[4]*H+E[8]*Q,this.y=E[1]*$+E[5]*H+E[9]*Q,this.z=E[2]*$+E[6]*H+E[10]*Q,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=m0(this.x,J.x,$.x),this.y=m0(this.y,J.y,$.y),this.z=m0(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=m0(this.x,J,$),this.y=m0(this.y,J,$),this.z=m0(this.z,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(m0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this.z=J.z+($.z-J.z)*H,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:H,y:Q,z:E}=J,Y=$.x,X=$.y,D=$.z;return this.x=Q*D-E*X,this.y=E*Y-H*D,this.z=H*X-Q*Y,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let H=J.dot(this)/$;return this.copy(J).multiplyScalar(H)}projectOnPlane(J){return m8.copy(this).projectOnVector(J),this.sub(m8)}reflect(J){return this.sub(m8.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let H=this.dot(J)/$;return Math.acos(m0(H,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,H=this.y-J.y,Q=this.z-J.z;return $*$+H*H+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,H){let Q=Math.sin($)*J;return this.x=Q*Math.sin(H),this.y=Math.cos($)*J,this.z=Q*Math.cos(H),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,H){return this.x=J*Math.sin($),this.y=H,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),H=this.setFromMatrixColumn(J,1).length(),Q=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=H,this.z=Q,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,H=Math.sqrt(1-$*$);return this.x=H*Math.cos(J),this.y=$,this.z=H*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var m8=new v,$6=new RJ;class T0{static{T0.prototype.isMatrix3=!0}constructor(J,$,H,Q,E,Y,X,D,K){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,H,Q,E,Y,X,D,K)}set(J,$,H,Q,E,Y,X,D,K){let W=this.elements;return W[0]=J,W[1]=Q,W[2]=X,W[3]=$,W[4]=E,W[5]=D,W[6]=H,W[7]=Y,W[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,H=J.elements;return $[0]=H[0],$[1]=H[1],$[2]=H[2],$[3]=H[3],$[4]=H[4],$[5]=H[5],$[6]=H[6],$[7]=H[7],$[8]=H[8],this}extractBasis(J,$,H){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),H.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let H=J.elements,Q=$.elements,E=this.elements,Y=H[0],X=H[3],D=H[6],K=H[1],W=H[4],U=H[7],R=H[2],Z=H[5],N=H[8],M=Q[0],_=Q[3],G=Q[6],k=Q[1],B=Q[4],A=Q[7],w=Q[2],T=Q[5],z=Q[8];return E[0]=Y*M+X*k+D*w,E[3]=Y*_+X*B+D*T,E[6]=Y*G+X*A+D*z,E[1]=K*M+W*k+U*w,E[4]=K*_+W*B+U*T,E[7]=K*G+W*A+U*z,E[2]=R*M+Z*k+N*w,E[5]=R*_+Z*B+N*T,E[8]=R*G+Z*A+N*z,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],H=J[1],Q=J[2],E=J[3],Y=J[4],X=J[5],D=J[6],K=J[7],W=J[8];return $*Y*W-$*X*K-H*E*W+H*X*D+Q*E*K-Q*Y*D}invert(){let J=this.elements,$=J[0],H=J[1],Q=J[2],E=J[3],Y=J[4],X=J[5],D=J[6],K=J[7],W=J[8],U=W*Y-X*K,R=X*D-W*E,Z=K*E-Y*D,N=$*U+H*R+Q*Z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/N;return J[0]=U*M,J[1]=(Q*K-W*H)*M,J[2]=(X*H-Q*Y)*M,J[3]=R*M,J[4]=(W*$-Q*D)*M,J[5]=(Q*E-X*$)*M,J[6]=Z*M,J[7]=(H*D-K*$)*M,J[8]=(Y*$-H*E)*M,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,H,Q,E,Y,X){let D=Math.cos(E),K=Math.sin(E);return this.set(H*D,H*K,-H*(D*Y+K*X)+Y+J,-Q*K,Q*D,-Q*(-K*Y+D*X)+X+$,0,0,1),this}scale(J,$){return this.premultiply(u8.makeScale(J,$)),this}rotate(J){return this.premultiply(u8.makeRotation(-J)),this}translate(J,$){return this.premultiply(u8.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,-H,0,H,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,H=J.elements;for(let Q=0;Q<9;Q++)if($[Q]!==H[Q])return!1;return!0}fromArray(J,$=0){for(let H=0;H<9;H++)this.elements[H]=J[H+$];return this}toArray(J=[],$=0){let H=this.elements;return J[$]=H[0],J[$+1]=H[1],J[$+2]=H[2],J[$+3]=H[3],J[$+4]=H[4],J[$+5]=H[5],J[$+6]=H[6],J[$+7]=H[7],J[$+8]=H[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u8=new T0,H6=new T0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Q6=new T0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function OQ(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(E,Y,X){if(this.enabled===!1||Y===X||!Y||!X)return E;if(this.spaces[Y].transfer==="srgb")E.r=ZJ(E.r),E.g=ZJ(E.g),E.b=ZJ(E.b);if(this.spaces[Y].primaries!==this.spaces[X].primaries)E.applyMatrix3(this.spaces[Y].toXYZ),E.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")E.r=D7(E.r),E.g=D7(E.g),E.b=D7(E.b);return E},workingToColorSpace:function(E,Y){return this.convert(E,this.workingColorSpace,Y)},colorSpaceToWorking:function(E,Y){return this.convert(E,Y,this.workingColorSpace)},getPrimaries:function(E){return this.spaces[E].primaries},getTransfer:function(E){if(E==="")return"linear";return this.spaces[E].transfer},getToneMappingMode:function(E){return this.spaces[E].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(E,Y=this.workingColorSpace){return E.fromArray(this.spaces[Y].luminanceCoefficients)},define:function(E){Object.assign(this.spaces,E)},_getMatrix:function(E,Y,X){return E.copy(this.spaces[Y].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(E){return this.spaces[E].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(E=this.workingColorSpace){return this.spaces[E].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(E,Y){return G8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(E,Y)},toWorkingColorSpace:function(E,Y){return G8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(E,Y)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],H=[0.2126,0.7152,0.0722],Q=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Q,transfer:"linear",toXYZ:H6,fromXYZ:Q6,luminanceCoefficients:H,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Q,transfer:"srgb",toXYZ:H6,fromXYZ:Q6,luminanceCoefficients:H,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=OQ();function ZJ(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function D7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var sJ;class W${static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let H;if(J instanceof HTMLCanvasElement)H=J;else{if(sJ===void 0)sJ=V7("canvas");sJ.width=J.width,sJ.height=J.height;let Q=sJ.getContext("2d");if(J instanceof ImageData)Q.putImageData(J,0,0);else Q.drawImage(J,0,0,J.width,J.height);H=sJ}return H.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=V7("canvas");$.width=J.width,$.height=J.height;let H=$.getContext("2d");H.drawImage(J,0,0,J.width,J.height);let Q=H.getImageData(0,0,J.width,J.height),E=Q.data;for(let Y=0;Y<E.length;Y++)E[Y]=ZJ(E[Y]/255)*255;return H.putImageData(Q,0,0),$}else if(J.data){let $=J.data.slice(0);for(let H=0;H<$.length;H++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[H]=Math.floor(ZJ($[H]/255)*255);else $[H]=ZJ($[H]);return{data:$,width:J.width,height:J.height}}else return z0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var MQ=0;class h7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MQ++}),this.uuid=j7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let H={uuid:this.uuid,url:""},Q=this.data;if(Q!==null){let E;if(Array.isArray(Q)){E=[];for(let Y=0,X=Q.length;Y<X;Y++)if(Q[Y].isDataTexture)E.push(c8(Q[Y].image));else E.push(c8(Q[Y]))}else E=c8(Q);H.url=E}if(!$)J.images[this.uuid]=H;return H}}function c8(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return W$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return z0("Texture: Unable to serialize Texture."),{}}var LQ=0,n8=new v;class w1 extends kJ{constructor(J=w1.DEFAULT_IMAGE,$=w1.DEFAULT_MAPPING,H=1001,Q=1001,E=1006,Y=1008,X=1023,D=1009,K=w1.DEFAULT_ANISOTROPY,W=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:LQ++}),this.uuid=j7(),this.name="",this.source=new h7(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=H,this.wrapT=Q,this.magFilter=E,this.minFilter=Y,this.anisotropy=K,this.format=X,this.internalFormat=null,this.type=D,this.offset=new a0(0,0),this.repeat=new a0(1,1),this.center=new a0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new T0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=W,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(n8).x}get height(){return this.source.getSize(n8).y}get depth(){return this.source.getSize(n8).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let H=J[$];if(H===void 0){z0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Q=this[$];if(Q===void 0){z0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Q&&H&&(Q.isVector2&&H.isVector2))Q.copy(H);else if(Q&&H&&(Q.isVector3&&H.isVector3))Q.copy(H);else if(Q&&H&&(Q.isMatrix3&&H.isMatrix3))Q.copy(H);else this[$]=H}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let H={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)H.userData=this.userData;if(!$)J.textures[this.uuid]=H;return H}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}w1.DEFAULT_IMAGE=null;w1.DEFAULT_MAPPING=300;w1.DEFAULT_ANISOTROPY=1;class K1{static{K1.prototype.isVector4=!0}constructor(J=0,$=0,H=0,Q=1){this.x=J,this.y=$,this.z=H,this.w=Q}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,H,Q){return this.x=J,this.y=$,this.z=H,this.w=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,H=this.y,Q=this.z,E=this.w,Y=J.elements;return this.x=Y[0]*$+Y[4]*H+Y[8]*Q+Y[12]*E,this.y=Y[1]*$+Y[5]*H+Y[9]*Q+Y[13]*E,this.z=Y[2]*$+Y[6]*H+Y[10]*Q+Y[14]*E,this.w=Y[3]*$+Y[7]*H+Y[11]*Q+Y[15]*E,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,H,Q,E,Y=0.01,X=0.1,D=J.elements,K=D[0],W=D[4],U=D[8],R=D[1],Z=D[5],N=D[9],M=D[2],_=D[6],G=D[10];if(Math.abs(W-R)<0.01&&Math.abs(U-M)<0.01&&Math.abs(N-_)<0.01){if(Math.abs(W+R)<0.1&&Math.abs(U+M)<0.1&&Math.abs(N+_)<0.1&&Math.abs(K+Z+G-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let B=(K+1)/2,A=(Z+1)/2,w=(G+1)/2,T=(W+R)/4,z=(U+M)/4,C=(N+_)/4;if(B>A&&B>w)if(B<0.01)H=0,Q=0.707106781,E=0.707106781;else H=Math.sqrt(B),Q=T/H,E=z/H;else if(A>w)if(A<0.01)H=0.707106781,Q=0,E=0.707106781;else Q=Math.sqrt(A),H=T/Q,E=C/Q;else if(w<0.01)H=0.707106781,Q=0.707106781,E=0;else E=Math.sqrt(w),H=z/E,Q=C/E;return this.set(H,Q,E,$),this}let k=Math.sqrt((_-N)*(_-N)+(U-M)*(U-M)+(R-W)*(R-W));if(Math.abs(k)<0.001)k=1;return this.x=(_-N)/k,this.y=(U-M)/k,this.z=(R-W)/k,this.w=Math.acos((K+Z+G-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=m0(this.x,J.x,$.x),this.y=m0(this.y,J.y,$.y),this.z=m0(this.z,J.z,$.z),this.w=m0(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=m0(this.x,J,$),this.y=m0(this.y,J,$),this.z=m0(this.z,J,$),this.w=m0(this.w,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(m0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this.z=J.z+($.z-J.z)*H,this.w=J.w+($.w-J.w)*H,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z$ extends kJ{constructor(J=1,$=1,H={}){super();H=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},H),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=H.depth,this.scissor=new K1(0,0,J,$),this.scissorTest=!1,this.viewport=new K1(0,0,J,$),this.textures=[];let Q={width:J,height:$,depth:H.depth},E=new w1(Q),Y=H.count;for(let X=0;X<Y;X++)this.textures[X]=E.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(H),this.depthBuffer=H.depthBuffer,this.stencilBuffer=H.stencilBuffer,this.resolveDepthBuffer=H.resolveDepthBuffer,this.resolveStencilBuffer=H.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=H.depthTexture,this.samples=H.samples,this.multiview=H.multiview}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let H=0;H<this.textures.length;H++)this.textures[H].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,H=1){if(this.width!==J||this.height!==$||this.depth!==H){this.width=J,this.height=$,this.depth=H;for(let Q=0,E=this.textures.length;Q<E;Q++)if(this.textures[Q].image.width=J,this.textures[Q].image.height=$,this.textures[Q].image.depth=H,this.textures[Q].isData3DTexture!==!0)this.textures[Q].isArrayTexture=this.textures[Q].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,H=J.textures.length;$<H;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Q=Object.assign({},J.textures[$].image);this.textures[$].source=new h7(Q)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class l1 extends Z${constructor(J=1,$=1,H={}){super(J,$,H);this.isWebGLRenderTarget=!0}}class A8 extends w1{constructor(J=null,$=1,H=1,Q=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:H,depth:Q},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class G$ extends w1{constructor(J=null,$=1,H=1,Q=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:H,depth:Q},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G1{static{G1.prototype.isMatrix4=!0}constructor(J,$,H,Q,E,Y,X,D,K,W,U,R,Z,N,M,_){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,H,Q,E,Y,X,D,K,W,U,R,Z,N,M,_)}set(J,$,H,Q,E,Y,X,D,K,W,U,R,Z,N,M,_){let G=this.elements;return G[0]=J,G[4]=$,G[8]=H,G[12]=Q,G[1]=E,G[5]=Y,G[9]=X,G[13]=D,G[2]=K,G[6]=W,G[10]=U,G[14]=R,G[3]=Z,G[7]=N,G[11]=M,G[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new G1().fromArray(this.elements)}copy(J){let $=this.elements,H=J.elements;return $[0]=H[0],$[1]=H[1],$[2]=H[2],$[3]=H[3],$[4]=H[4],$[5]=H[5],$[6]=H[6],$[7]=H[7],$[8]=H[8],$[9]=H[9],$[10]=H[10],$[11]=H[11],$[12]=H[12],$[13]=H[13],$[14]=H[14],$[15]=H[15],this}copyPosition(J){let $=this.elements,H=J.elements;return $[12]=H[12],$[13]=H[13],$[14]=H[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,H){if(this.determinant()===0)return J.set(1,0,0),$.set(0,1,0),H.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),H.setFromMatrixColumn(this,2),this}makeBasis(J,$,H){return this.set(J.x,$.x,H.x,0,J.y,$.y,H.y,0,J.z,$.z,H.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let $=this.elements,H=J.elements,Q=1/oJ.setFromMatrixColumn(J,0).length(),E=1/oJ.setFromMatrixColumn(J,1).length(),Y=1/oJ.setFromMatrixColumn(J,2).length();return $[0]=H[0]*Q,$[1]=H[1]*Q,$[2]=H[2]*Q,$[3]=0,$[4]=H[4]*E,$[5]=H[5]*E,$[6]=H[6]*E,$[7]=0,$[8]=H[8]*Y,$[9]=H[9]*Y,$[10]=H[10]*Y,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,H=J.x,Q=J.y,E=J.z,Y=Math.cos(H),X=Math.sin(H),D=Math.cos(Q),K=Math.sin(Q),W=Math.cos(E),U=Math.sin(E);if(J.order==="XYZ"){let R=Y*W,Z=Y*U,N=X*W,M=X*U;$[0]=D*W,$[4]=-D*U,$[8]=K,$[1]=Z+N*K,$[5]=R-M*K,$[9]=-X*D,$[2]=M-R*K,$[6]=N+Z*K,$[10]=Y*D}else if(J.order==="YXZ"){let R=D*W,Z=D*U,N=K*W,M=K*U;$[0]=R+M*X,$[4]=N*X-Z,$[8]=Y*K,$[1]=Y*U,$[5]=Y*W,$[9]=-X,$[2]=Z*X-N,$[6]=M+R*X,$[10]=Y*D}else if(J.order==="ZXY"){let R=D*W,Z=D*U,N=K*W,M=K*U;$[0]=R-M*X,$[4]=-Y*U,$[8]=N+Z*X,$[1]=Z+N*X,$[5]=Y*W,$[9]=M-R*X,$[2]=-Y*K,$[6]=X,$[10]=Y*D}else if(J.order==="ZYX"){let R=Y*W,Z=Y*U,N=X*W,M=X*U;$[0]=D*W,$[4]=N*K-Z,$[8]=R*K+M,$[1]=D*U,$[5]=M*K+R,$[9]=Z*K-N,$[2]=-K,$[6]=X*D,$[10]=Y*D}else if(J.order==="YZX"){let R=Y*D,Z=Y*K,N=X*D,M=X*K;$[0]=D*W,$[4]=M-R*U,$[8]=N*U+Z,$[1]=U,$[5]=Y*W,$[9]=-X*W,$[2]=-K*W,$[6]=Z*U+N,$[10]=R-M*U}else if(J.order==="XZY"){let R=Y*D,Z=Y*K,N=X*D,M=X*K;$[0]=D*W,$[4]=-U,$[8]=K*W,$[1]=R*U+M,$[5]=Y*W,$[9]=Z*U-N,$[2]=N*U-Z,$[6]=X*W,$[10]=M*U+R}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(BQ,J,_Q)}lookAt(J,$,H){let Q=this.elements;if(b1.subVectors(J,$),b1.lengthSq()===0)b1.z=1;if(b1.normalize(),OJ.crossVectors(H,b1),OJ.lengthSq()===0){if(Math.abs(H.z)===1)b1.x+=0.0001;else b1.z+=0.0001;b1.normalize(),OJ.crossVectors(H,b1)}return OJ.normalize(),c7.crossVectors(b1,OJ),Q[0]=OJ.x,Q[4]=c7.x,Q[8]=b1.x,Q[1]=OJ.y,Q[5]=c7.y,Q[9]=b1.y,Q[2]=OJ.z,Q[6]=c7.z,Q[10]=b1.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let H=J.elements,Q=$.elements,E=this.elements,Y=H[0],X=H[4],D=H[8],K=H[12],W=H[1],U=H[5],R=H[9],Z=H[13],N=H[2],M=H[6],_=H[10],G=H[14],k=H[3],B=H[7],A=H[11],w=H[15],T=Q[0],z=Q[4],C=Q[8],O=Q[12],I=Q[1],u=Q[5],V=Q[9],l=Q[13],s=Q[2],f=Q[6],m=Q[10],x=Q[14],p=Q[3],a=Q[7],$0=Q[11],k0=Q[15];return E[0]=Y*T+X*I+D*s+K*p,E[4]=Y*z+X*u+D*f+K*a,E[8]=Y*C+X*V+D*m+K*$0,E[12]=Y*O+X*l+D*x+K*k0,E[1]=W*T+U*I+R*s+Z*p,E[5]=W*z+U*u+R*f+Z*a,E[9]=W*C+U*V+R*m+Z*$0,E[13]=W*O+U*l+R*x+Z*k0,E[2]=N*T+M*I+_*s+G*p,E[6]=N*z+M*u+_*f+G*a,E[10]=N*C+M*V+_*m+G*$0,E[14]=N*O+M*l+_*x+G*k0,E[3]=k*T+B*I+A*s+w*p,E[7]=k*z+B*u+A*f+w*a,E[11]=k*C+B*V+A*m+w*$0,E[15]=k*O+B*l+A*x+w*k0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],H=J[4],Q=J[8],E=J[12],Y=J[1],X=J[5],D=J[9],K=J[13],W=J[2],U=J[6],R=J[10],Z=J[14],N=J[3],M=J[7],_=J[11],G=J[15],k=D*Z-K*R,B=X*Z-K*U,A=X*R-D*U,w=Y*Z-K*W,T=Y*R-D*W,z=Y*U-X*W;return $*(M*k-_*B+G*A)-H*(N*k-_*w+G*T)+Q*(N*B-M*w+G*z)-E*(N*A-M*T+_*z)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,H){let Q=this.elements;if(J.isVector3)Q[12]=J.x,Q[13]=J.y,Q[14]=J.z;else Q[12]=J,Q[13]=$,Q[14]=H;return this}invert(){let J=this.elements,$=J[0],H=J[1],Q=J[2],E=J[3],Y=J[4],X=J[5],D=J[6],K=J[7],W=J[8],U=J[9],R=J[10],Z=J[11],N=J[12],M=J[13],_=J[14],G=J[15],k=$*X-H*Y,B=$*D-Q*Y,A=$*K-E*Y,w=H*D-Q*X,T=H*K-E*X,z=Q*K-E*D,C=W*M-U*N,O=W*_-R*N,I=W*G-Z*N,u=U*_-R*M,V=U*G-Z*M,l=R*G-Z*_,s=k*l-B*V+A*u+w*I-T*O+z*C;if(s===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/s;return J[0]=(X*l-D*V+K*u)*f,J[1]=(Q*V-H*l-E*u)*f,J[2]=(M*z-_*T+G*w)*f,J[3]=(R*T-U*z-Z*w)*f,J[4]=(D*I-Y*l-K*O)*f,J[5]=($*l-Q*I+E*O)*f,J[6]=(_*A-N*z-G*B)*f,J[7]=(W*z-R*A+Z*B)*f,J[8]=(Y*V-X*I+K*C)*f,J[9]=(H*I-$*V-E*C)*f,J[10]=(N*T-M*A+G*k)*f,J[11]=(U*A-W*T-Z*k)*f,J[12]=(X*O-Y*u-D*C)*f,J[13]=($*u-H*O+Q*C)*f,J[14]=(M*B-N*w-_*k)*f,J[15]=(W*w-U*B+R*k)*f,this}scale(J){let $=this.elements,H=J.x,Q=J.y,E=J.z;return $[0]*=H,$[4]*=Q,$[8]*=E,$[1]*=H,$[5]*=Q,$[9]*=E,$[2]*=H,$[6]*=Q,$[10]*=E,$[3]*=H,$[7]*=Q,$[11]*=E,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],H=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Q=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,H,Q))}makeTranslation(J,$,H){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,H,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),H=Math.sin(J);return this.set(1,0,0,0,0,$,-H,0,0,H,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,0,H,0,0,1,0,0,-H,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,-H,0,0,H,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let H=Math.cos($),Q=Math.sin($),E=1-H,Y=J.x,X=J.y,D=J.z,K=E*Y,W=E*X;return this.set(K*Y+H,K*X-Q*D,K*D+Q*X,0,K*X+Q*D,W*X+H,W*D-Q*Y,0,K*D-Q*X,W*D+Q*Y,E*D*D+H,0,0,0,0,1),this}makeScale(J,$,H){return this.set(J,0,0,0,0,$,0,0,0,0,H,0,0,0,0,1),this}makeShear(J,$,H,Q,E,Y){return this.set(1,H,E,0,J,1,Y,0,$,Q,1,0,0,0,0,1),this}compose(J,$,H){let Q=this.elements,E=$._x,Y=$._y,X=$._z,D=$._w,K=E+E,W=Y+Y,U=X+X,R=E*K,Z=E*W,N=E*U,M=Y*W,_=Y*U,G=X*U,k=D*K,B=D*W,A=D*U,w=H.x,T=H.y,z=H.z;return Q[0]=(1-(M+G))*w,Q[1]=(Z+A)*w,Q[2]=(N-B)*w,Q[3]=0,Q[4]=(Z-A)*T,Q[5]=(1-(R+G))*T,Q[6]=(_+k)*T,Q[7]=0,Q[8]=(N+B)*z,Q[9]=(_-k)*z,Q[10]=(1-(R+M))*z,Q[11]=0,Q[12]=J.x,Q[13]=J.y,Q[14]=J.z,Q[15]=1,this}decompose(J,$,H){let Q=this.elements;J.x=Q[12],J.y=Q[13],J.z=Q[14];let E=this.determinant();if(E===0)return H.set(1,1,1),$.identity(),this;let Y=oJ.set(Q[0],Q[1],Q[2]).length(),X=oJ.set(Q[4],Q[5],Q[6]).length(),D=oJ.set(Q[8],Q[9],Q[10]).length();if(E<0)Y=-Y;c1.copy(this);let K=1/Y,W=1/X,U=1/D;return c1.elements[0]*=K,c1.elements[1]*=K,c1.elements[2]*=K,c1.elements[4]*=W,c1.elements[5]*=W,c1.elements[6]*=W,c1.elements[8]*=U,c1.elements[9]*=U,c1.elements[10]*=U,$.setFromRotationMatrix(c1),H.x=Y,H.y=X,H.z=D,this}makePerspective(J,$,H,Q,E,Y,X=2000,D=!1){let K=this.elements,W=2*E/($-J),U=2*E/(H-Q),R=($+J)/($-J),Z=(H+Q)/(H-Q),N,M;if(D)N=E/(Y-E),M=Y*E/(Y-E);else if(X===2000)N=-(Y+E)/(Y-E),M=-2*Y*E/(Y-E);else if(X===2001)N=-Y/(Y-E),M=-Y*E/(Y-E);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return K[0]=W,K[4]=0,K[8]=R,K[12]=0,K[1]=0,K[5]=U,K[9]=Z,K[13]=0,K[2]=0,K[6]=0,K[10]=N,K[14]=M,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,$,H,Q,E,Y,X=2000,D=!1){let K=this.elements,W=2/($-J),U=2/(H-Q),R=-($+J)/($-J),Z=-(H+Q)/(H-Q),N,M;if(D)N=1/(Y-E),M=Y/(Y-E);else if(X===2000)N=-2/(Y-E),M=-(Y+E)/(Y-E);else if(X===2001)N=-1/(Y-E),M=-E/(Y-E);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return K[0]=W,K[4]=0,K[8]=0,K[12]=R,K[1]=0,K[5]=U,K[9]=0,K[13]=Z,K[2]=0,K[6]=0,K[10]=N,K[14]=M,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let $=this.elements,H=J.elements;for(let Q=0;Q<16;Q++)if($[Q]!==H[Q])return!1;return!0}fromArray(J,$=0){for(let H=0;H<16;H++)this.elements[H]=J[H+$];return this}toArray(J=[],$=0){let H=this.elements;return J[$]=H[0],J[$+1]=H[1],J[$+2]=H[2],J[$+3]=H[3],J[$+4]=H[4],J[$+5]=H[5],J[$+6]=H[6],J[$+7]=H[7],J[$+8]=H[8],J[$+9]=H[9],J[$+10]=H[10],J[$+11]=H[11],J[$+12]=H[12],J[$+13]=H[13],J[$+14]=H[14],J[$+15]=H[15],J}}var oJ=new v,c1=new G1,BQ=new v(0,0,0),_Q=new v(1,1,1),OJ=new v,c7=new v,b1=new v,E6=new G1,Y6=new RJ;class wJ{constructor(J=0,$=0,H=0,Q=wJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=H,this._order=Q}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,H,Q=this._order){return this._x=J,this._y=$,this._z=H,this._order=Q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,H=!0){let Q=J.elements,E=Q[0],Y=Q[4],X=Q[8],D=Q[1],K=Q[5],W=Q[9],U=Q[2],R=Q[6],Z=Q[10];switch($){case"XYZ":if(this._y=Math.asin(m0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-W,Z),this._z=Math.atan2(-Y,E);else this._x=Math.atan2(R,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-m0(W,-1,1)),Math.abs(W)<0.9999999)this._y=Math.atan2(X,Z),this._z=Math.atan2(D,K);else this._y=Math.atan2(-U,E),this._z=0;break;case"ZXY":if(this._x=Math.asin(m0(R,-1,1)),Math.abs(R)<0.9999999)this._y=Math.atan2(-U,Z),this._z=Math.atan2(-Y,K);else this._y=0,this._z=Math.atan2(D,E);break;case"ZYX":if(this._y=Math.asin(-m0(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(R,Z),this._z=Math.atan2(D,E);else this._x=0,this._z=Math.atan2(-Y,K);break;case"YZX":if(this._z=Math.asin(m0(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(-W,K),this._y=Math.atan2(-U,E);else this._x=0,this._y=Math.atan2(X,Z);break;case"XZY":if(this._z=Math.asin(-m0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(R,K),this._y=Math.atan2(X,E);else this._x=Math.atan2(-W,Z),this._y=0;break;default:z0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,H===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,H){return E6.makeRotationFromQuaternion(J),this.setFromRotationMatrix(E6,$,H)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return Y6.setFromEuler(this),this.setFromQuaternion(Y6,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wJ.DEFAULT_ORDER="XYZ";class V8{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var IQ=0,X6=new v,aJ=new RJ,EJ=new G1,n7=new v,_7=new v,wQ=new v,AQ=new RJ,D6=new v(1,0,0),K6=new v(0,1,0),W6=new v(0,0,1),Z6={type:"added"},VQ={type:"removed"},rJ={type:"childadded",child:null},i8={type:"childremoved",child:null};class C1 extends kJ{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:IQ++}),this.uuid=j7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=C1.DEFAULT_UP.clone();let J=new v,$=new wJ,H=new RJ,Q=new v(1,1,1);function E(){H.setFromEuler($,!1)}function Y(){$.setFromQuaternion(H,void 0,!1)}$._onChange(E),H._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:H},scale:{configurable:!0,enumerable:!0,value:Q},modelViewMatrix:{value:new G1},normalMatrix:{value:new T0}}),this.matrix=new G1,this.matrixWorld=new G1,this.matrixAutoUpdate=C1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=C1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V8,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return aJ.setFromAxisAngle(J,$),this.quaternion.multiply(aJ),this}rotateOnWorldAxis(J,$){return aJ.setFromAxisAngle(J,$),this.quaternion.premultiply(aJ),this}rotateX(J){return this.rotateOnAxis(D6,J)}rotateY(J){return this.rotateOnAxis(K6,J)}rotateZ(J){return this.rotateOnAxis(W6,J)}translateOnAxis(J,$){return X6.copy(J).applyQuaternion(this.quaternion),this.position.add(X6.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(D6,J)}translateY(J){return this.translateOnAxis(K6,J)}translateZ(J){return this.translateOnAxis(W6,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(EJ.copy(this.matrixWorld).invert())}lookAt(J,$,H){if(J.isVector3)n7.copy(J);else n7.set(J,$,H);let Q=this.parent;if(this.updateWorldMatrix(!0,!1),_7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)EJ.lookAt(_7,n7,this.up);else EJ.lookAt(n7,_7,this.up);if(this.quaternion.setFromRotationMatrix(EJ),Q)EJ.extractRotation(Q.matrixWorld),aJ.setFromRotationMatrix(EJ),this.quaternion.premultiply(aJ.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return P0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(Z6),rJ.child=J,this.dispatchEvent(rJ),rJ.child=null;else P0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let H=0;H<arguments.length;H++)this.remove(arguments[H]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(VQ),i8.child=J,this.dispatchEvent(i8),i8.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),EJ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),EJ.multiply(J.parent.matrixWorld);return J.applyMatrix4(EJ),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(Z6),rJ.child=J,this.dispatchEvent(rJ),rJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let H=0,Q=this.children.length;H<Q;H++){let Y=this.children[H].getObjectByProperty(J,$);if(Y!==void 0)return Y}return}getObjectsByProperty(J,$,H=[]){if(this[J]===$)H.push(this);let Q=this.children;for(let E=0,Y=Q.length;E<Y;E++)Q[E].getObjectsByProperty(J,$,H);return H}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_7,J,wQ),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_7,AQ,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let H=0,Q=$.length;H<Q;H++)$[H].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let H=0,Q=$.length;H<Q;H++)$[H].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:H,z:Q}=J,E=this.matrix.elements;E[12]+=$-E[0]*$-E[4]*H-E[8]*Q,E[13]+=H-E[1]*$-E[5]*H-E[9]*Q,E[14]+=Q-E[2]*$-E[6]*H-E[10]*Q}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let H=0,Q=$.length;H<Q;H++)$[H].updateMatrixWorld(J)}updateWorldMatrix(J,$){let H=this.parent;if(J===!0&&H!==null)H.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Q=this.children;for(let E=0,Y=Q.length;E<Y;E++)Q[E].updateWorldMatrix(!1,!0)}}toJSON(J){let $=J===void 0||typeof J==="string",H={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},H.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Q={};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.castShadow===!0)Q.castShadow=!0;if(this.receiveShadow===!0)Q.receiveShadow=!0;if(this.visible===!1)Q.visible=!1;if(this.frustumCulled===!1)Q.frustumCulled=!1;if(this.renderOrder!==0)Q.renderOrder=this.renderOrder;if(this.static!==!1)Q.static=this.static;if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(Q.layers=this.layers.mask,Q.matrix=this.matrix.toArray(),Q.up=this.up.toArray(),this.pivot!==null)Q.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Q.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Q.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Q.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Q.type="InstancedMesh",Q.count=this.count,Q.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Q.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Q.type="BatchedMesh",Q.perObjectFrustumCulled=this.perObjectFrustumCulled,Q.sortObjects=this.sortObjects,Q.drawRanges=this._drawRanges,Q.reservedRanges=this._reservedRanges,Q.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Q.instanceInfo=this._instanceInfo.map((X)=>({...X})),Q.availableInstanceIds=this._availableInstanceIds.slice(),Q.availableGeometryIds=this._availableGeometryIds.slice(),Q.nextIndexStart=this._nextIndexStart,Q.nextVertexStart=this._nextVertexStart,Q.geometryCount=this._geometryCount,Q.maxInstanceCount=this._maxInstanceCount,Q.maxVertexCount=this._maxVertexCount,Q.maxIndexCount=this._maxIndexCount,Q.geometryInitialized=this._geometryInitialized,Q.matricesTexture=this._matricesTexture.toJSON(J),Q.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Q.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Q.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Q.boundingBox=this.boundingBox.toJSON()}function E(X,D){if(X[D.uuid]===void 0)X[D.uuid]=D.toJSON(J);return D.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Q.background=this.background.toJSON();else if(this.background.isTexture)Q.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Q.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Q.geometry=E(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let D=X.shapes;if(Array.isArray(D))for(let K=0,W=D.length;K<W;K++){let U=D[K];E(J.shapes,U)}else E(J.shapes,D)}}if(this.isSkinnedMesh){if(Q.bindMode=this.bindMode,Q.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)E(J.skeletons,this.skeleton),Q.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let D=0,K=this.material.length;D<K;D++)X.push(E(J.materials,this.material[D]));Q.material=X}else Q.material=E(J.materials,this.material);if(this.children.length>0){Q.children=[];for(let X=0;X<this.children.length;X++)Q.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Q.animations=[];for(let X=0;X<this.animations.length;X++){let D=this.animations[X];Q.animations.push(E(J.animations,D))}}if($){let X=Y(J.geometries),D=Y(J.materials),K=Y(J.textures),W=Y(J.images),U=Y(J.shapes),R=Y(J.skeletons),Z=Y(J.animations),N=Y(J.nodes);if(X.length>0)H.geometries=X;if(D.length>0)H.materials=D;if(K.length>0)H.textures=K;if(W.length>0)H.images=W;if(U.length>0)H.shapes=U;if(R.length>0)H.skeletons=R;if(Z.length>0)H.animations=Z;if(N.length>0)H.nodes=N}return H.object=Q,H;function Y(X){let D=[];for(let K in X){let W=X[K];delete W.metadata,D.push(W)}return D}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let H=0;H<J.children.length;H++){let Q=J.children[H];this.add(Q.clone())}return this}}C1.DEFAULT_UP=new v(0,1,0);C1.DEFAULT_MATRIX_AUTO_UPDATE=!0;C1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class X7 extends C1{constructor(){super();this.isGroup=!0,this.type="Group"}}var zQ={type:"move"};class f7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new X7,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new X7,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new X7,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let H of J.hand.values())this._getHandJoint($,H)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,H){let Q=null,E=null,Y=null,X=this._targetRay,D=this._grip,K=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(K&&J.hand){Y=!0;for(let M of J.hand.values()){let _=$.getJointPose(M,H),G=this._getHandJoint(K,M);if(_!==null)G.matrix.fromArray(_.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,G.jointRadius=_.radius;G.visible=_!==null}let W=K.joints["index-finger-tip"],U=K.joints["thumb-tip"],R=W.position.distanceTo(U.position),Z=0.02,N=0.005;if(K.inputState.pinching&&R>Z+N)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&R<=Z-N)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(D!==null&&J.gripSpace){if(E=$.getPose(J.gripSpace,H),E!==null){if(D.matrix.fromArray(E.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,E.linearVelocity)D.hasLinearVelocity=!0,D.linearVelocity.copy(E.linearVelocity);else D.hasLinearVelocity=!1;if(E.angularVelocity)D.hasAngularVelocity=!0,D.angularVelocity.copy(E.angularVelocity);else D.hasAngularVelocity=!1;if(D.eventsEnabled)D.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Q=$.getPose(J.targetRaySpace,H),Q===null&&E!==null)Q=E;if(Q!==null){if(X.matrix.fromArray(Q.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Q.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Q.linearVelocity);else X.hasLinearVelocity=!1;if(Q.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Q.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(zQ)}}}if(X!==null)X.visible=Q!==null;if(D!==null)D.visible=E!==null;if(K!==null)K.visible=Y!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let H=new X7;H.matrixAutoUpdate=!1,H.visible=!1,J.joints[$.jointName]=H,J.add(H)}return J.joints[$.jointName]}}var LH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},MJ={h:0,s:0,l:0},i7={h:0,s:0,l:0};function s8(J,$,H){if(H<0)H+=1;if(H>1)H-=1;if(H<0.16666666666666666)return J+($-J)*6*H;if(H<0.5)return $;if(H<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-H);return J}class i0{constructor(J,$,H){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,H)}set(J,$,H){if($===void 0&&H===void 0){let Q=J;if(Q&&Q.isColor)this.copy(Q);else if(typeof Q==="number")this.setHex(Q);else if(typeof Q==="string")this.setStyle(Q)}else this.setRGB(J,$,H);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,$),this}setRGB(J,$,H,Q=l0.workingColorSpace){return this.r=J,this.g=$,this.b=H,l0.colorSpaceToWorking(this,Q),this}setHSL(J,$,H,Q=l0.workingColorSpace){if(J=qQ(J,1),$=m0($,0,1),H=m0(H,0,1),$===0)this.r=this.g=this.b=H;else{let E=H<=0.5?H*(1+$):H+$-H*$,Y=2*H-E;this.r=s8(Y,E,J+0.3333333333333333),this.g=s8(Y,E,J),this.b=s8(Y,E,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,Q),this}setStyle(J,$="srgb"){function H(E){if(E===void 0)return;if(parseFloat(E)<1)z0("Color: Alpha component of "+J+" will be ignored.")}let Q;if(Q=/^(\w+)\(([^\)]*)\)/.exec(J)){let E,Y=Q[1],X=Q[2];switch(Y){case"rgb":case"rgba":if(E=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return H(E[4]),this.setRGB(Math.min(255,parseInt(E[1],10))/255,Math.min(255,parseInt(E[2],10))/255,Math.min(255,parseInt(E[3],10))/255,$);if(E=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return H(E[4]),this.setRGB(Math.min(100,parseInt(E[1],10))/100,Math.min(100,parseInt(E[2],10))/100,Math.min(100,parseInt(E[3],10))/100,$);break;case"hsl":case"hsla":if(E=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return H(E[4]),this.setHSL(parseFloat(E[1])/360,parseFloat(E[2])/100,parseFloat(E[3])/100,$);break;default:z0("Color: Unknown color model "+J)}}else if(Q=/^\#([A-Fa-f\d]+)$/.exec(J)){let E=Q[1],Y=E.length;if(Y===3)return this.setRGB(parseInt(E.charAt(0),16)/15,parseInt(E.charAt(1),16)/15,parseInt(E.charAt(2),16)/15,$);else if(Y===6)return this.setHex(parseInt(E,16),$);else z0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let H=LH[J.toLowerCase()];if(H!==void 0)this.setHex(H,$);else z0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=ZJ(J.r),this.g=ZJ(J.g),this.b=ZJ(J.b),this}copyLinearToSRGB(J){return this.r=D7(J.r),this.g=D7(J.g),this.b=D7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(I1.copy(this),J),Math.round(m0(I1.r*255,0,255))*65536+Math.round(m0(I1.g*255,0,255))*256+Math.round(m0(I1.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=l0.workingColorSpace){l0.workingToColorSpace(I1.copy(this),$);let{r:H,g:Q,b:E}=I1,Y=Math.max(H,Q,E),X=Math.min(H,Q,E),D,K,W=(X+Y)/2;if(X===Y)D=0,K=0;else{let U=Y-X;switch(K=W<=0.5?U/(Y+X):U/(2-Y-X),Y){case H:D=(Q-E)/U+(Q<E?6:0);break;case Q:D=(E-H)/U+2;break;case E:D=(H-Q)/U+4;break}D/=6}return J.h=D,J.s=K,J.l=W,J}getRGB(J,$=l0.workingColorSpace){return l0.workingToColorSpace(I1.copy(this),$),J.r=I1.r,J.g=I1.g,J.b=I1.b,J}getStyle(J="srgb"){l0.workingToColorSpace(I1.copy(this),J);let{r:$,g:H,b:Q}=I1;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${H.toFixed(3)} ${Q.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(H*255)},${Math.round(Q*255)})`}offsetHSL(J,$,H){return this.getHSL(MJ),this.setHSL(MJ.h+J,MJ.s+$,MJ.l+H)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,H){return this.r=J.r+($.r-J.r)*H,this.g=J.g+($.g-J.g)*H,this.b=J.b+($.b-J.b)*H,this}lerpHSL(J,$){this.getHSL(MJ),J.getHSL(i7);let H=d8(MJ.h,i7.h,$),Q=d8(MJ.s,i7.s,$),E=d8(MJ.l,i7.l,$);return this.setHSL(H,Q,E),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,H=this.g,Q=this.b,E=J.elements;return this.r=E[0]*$+E[3]*H+E[6]*Q,this.g=E[1]*$+E[4]*H+E[7]*Q,this.b=E[2]*$+E[5]*H+E[8]*Q,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var I1=new i0;i0.NAMES=LH;class z8 extends C1{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wJ,this.environmentIntensity=1,this.environmentRotation=new wJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}var n1=new v,YJ=new v,o8=new v,XJ=new v,tJ=new v,eJ=new v,G6=new v,a8=new v,r8=new v,t8=new v,e8=new K1,J9=new K1,$9=new K1;class g1{constructor(J=new v,$=new v,H=new v){this.a=J,this.b=$,this.c=H}static getNormal(J,$,H,Q){Q.subVectors(H,$),n1.subVectors(J,$),Q.cross(n1);let E=Q.lengthSq();if(E>0)return Q.multiplyScalar(1/Math.sqrt(E));return Q.set(0,0,0)}static getBarycoord(J,$,H,Q,E){n1.subVectors(Q,$),YJ.subVectors(H,$),o8.subVectors(J,$);let Y=n1.dot(n1),X=n1.dot(YJ),D=n1.dot(o8),K=YJ.dot(YJ),W=YJ.dot(o8),U=Y*K-X*X;if(U===0)return E.set(0,0,0),null;let R=1/U,Z=(K*D-X*W)*R,N=(Y*W-X*D)*R;return E.set(1-Z-N,N,Z)}static containsPoint(J,$,H,Q){if(this.getBarycoord(J,$,H,Q,XJ)===null)return!1;return XJ.x>=0&&XJ.y>=0&&XJ.x+XJ.y<=1}static getInterpolation(J,$,H,Q,E,Y,X,D){if(this.getBarycoord(J,$,H,Q,XJ)===null){if(D.x=0,D.y=0,"z"in D)D.z=0;if("w"in D)D.w=0;return null}return D.setScalar(0),D.addScaledVector(E,XJ.x),D.addScaledVector(Y,XJ.y),D.addScaledVector(X,XJ.z),D}static getInterpolatedAttribute(J,$,H,Q,E,Y){return e8.setScalar(0),J9.setScalar(0),$9.setScalar(0),e8.fromBufferAttribute(J,$),J9.fromBufferAttribute(J,H),$9.fromBufferAttribute(J,Q),Y.setScalar(0),Y.addScaledVector(e8,E.x),Y.addScaledVector(J9,E.y),Y.addScaledVector($9,E.z),Y}static isFrontFacing(J,$,H,Q){return n1.subVectors(H,$),YJ.subVectors(J,$),n1.cross(YJ).dot(Q)<0}set(J,$,H){return this.a.copy(J),this.b.copy($),this.c.copy(H),this}setFromPointsAndIndices(J,$,H,Q){return this.a.copy(J[$]),this.b.copy(J[H]),this.c.copy(J[Q]),this}setFromAttributeAndIndices(J,$,H,Q){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,H),this.c.fromBufferAttribute(J,Q),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return n1.subVectors(this.c,this.b),YJ.subVectors(this.a,this.b),n1.cross(YJ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g1.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return g1.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,H,Q,E){return g1.getInterpolation(J,this.a,this.b,this.c,$,H,Q,E)}containsPoint(J){return g1.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g1.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let H=this.a,Q=this.b,E=this.c,Y,X;tJ.subVectors(Q,H),eJ.subVectors(E,H),a8.subVectors(J,H);let D=tJ.dot(a8),K=eJ.dot(a8);if(D<=0&&K<=0)return $.copy(H);r8.subVectors(J,Q);let W=tJ.dot(r8),U=eJ.dot(r8);if(W>=0&&U<=W)return $.copy(Q);let R=D*U-W*K;if(R<=0&&D>=0&&W<=0)return Y=D/(D-W),$.copy(H).addScaledVector(tJ,Y);t8.subVectors(J,E);let Z=tJ.dot(t8),N=eJ.dot(t8);if(N>=0&&Z<=N)return $.copy(E);let M=Z*K-D*N;if(M<=0&&K>=0&&N<=0)return X=K/(K-N),$.copy(H).addScaledVector(eJ,X);let _=W*N-Z*U;if(_<=0&&U-W>=0&&Z-N>=0)return G6.subVectors(E,Q),X=(U-W)/(U-W+(Z-N)),$.copy(Q).addScaledVector(G6,X);let G=1/(_+M+R);return Y=M*G,X=R*G,$.copy(H).addScaledVector(tJ,Y).addScaledVector(eJ,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class pJ{constructor(J=new v(1/0,1/0,1/0),$=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,H=J.length;$<H;$+=3)this.expandByPoint(i1.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,H=J.count;$<H;$++)this.expandByPoint(i1.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,H=J.length;$<H;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let H=i1.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(H),this.max.copy(J).add(H),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let H=J.geometry;if(H!==void 0){let E=H.getAttribute("position");if($===!0&&E!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,X=E.count;Y<X;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,i1);else i1.fromBufferAttribute(E,Y);i1.applyMatrix4(J.matrixWorld),this.expandByPoint(i1)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();s7.copy(J.boundingBox)}else{if(H.boundingBox===null)H.computeBoundingBox();s7.copy(H.boundingBox)}s7.applyMatrix4(J.matrixWorld),this.union(s7)}}let Q=J.children;for(let E=0,Y=Q.length;E<Y;E++)this.expandByObject(Q[E],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,i1),i1.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,H;if(J.normal.x>0)$=J.normal.x*this.min.x,H=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,H=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,H+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,H+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,H+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,H+=J.normal.z*this.min.z;return $<=-J.constant&&H>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(I7),o7.subVectors(this.max,I7),J7.subVectors(J.a,I7),$7.subVectors(J.b,I7),H7.subVectors(J.c,I7),LJ.subVectors($7,J7),BJ.subVectors(H7,$7),TJ.subVectors(J7,H7);let $=[0,-LJ.z,LJ.y,0,-BJ.z,BJ.y,0,-TJ.z,TJ.y,LJ.z,0,-LJ.x,BJ.z,0,-BJ.x,TJ.z,0,-TJ.x,-LJ.y,LJ.x,0,-BJ.y,BJ.x,0,-TJ.y,TJ.x,0];if(!H9($,J7,$7,H7,o7))return!1;if($=[1,0,0,0,1,0,0,0,1],!H9($,J7,$7,H7,o7))return!1;return a7.crossVectors(LJ,BJ),$=[a7.x,a7.y,a7.z],H9($,J7,$7,H7,o7)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,i1).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(i1).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return DJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),DJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),DJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),DJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),DJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),DJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),DJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),DJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(DJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var DJ=[new v,new v,new v,new v,new v,new v,new v,new v],i1=new v,s7=new pJ,J7=new v,$7=new v,H7=new v,LJ=new v,BJ=new v,TJ=new v,I7=new v,o7=new v,a7=new v,SJ=new v;function H9(J,$,H,Q,E){for(let Y=0,X=J.length-3;Y<=X;Y+=3){SJ.fromArray(J,Y);let D=E.x*Math.abs(SJ.x)+E.y*Math.abs(SJ.y)+E.z*Math.abs(SJ.z),K=$.dot(SJ),W=H.dot(SJ),U=Q.dot(SJ);if(Math.max(-Math.max(K,W,U),Math.min(K,W,U))>D)return!1}return!0}var R1=new v,r7=new a0,PQ=0;class p1 extends kJ{constructor(J,$,H=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PQ++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=H,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,H){J*=this.itemSize,H*=$.itemSize;for(let Q=0,E=this.itemSize;Q<E;Q++)this.array[J+Q]=$.array[H+Q];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,H=this.count;$<H;$++)r7.fromBufferAttribute(this,$),r7.applyMatrix3(J),this.setXY($,r7.x,r7.y);else if(this.itemSize===3)for(let $=0,H=this.count;$<H;$++)R1.fromBufferAttribute(this,$),R1.applyMatrix3(J),this.setXYZ($,R1.x,R1.y,R1.z);return this}applyMatrix4(J){for(let $=0,H=this.count;$<H;$++)R1.fromBufferAttribute(this,$),R1.applyMatrix4(J),this.setXYZ($,R1.x,R1.y,R1.z);return this}applyNormalMatrix(J){for(let $=0,H=this.count;$<H;$++)R1.fromBufferAttribute(this,$),R1.applyNormalMatrix(J),this.setXYZ($,R1.x,R1.y,R1.z);return this}transformDirection(J){for(let $=0,H=this.count;$<H;$++)R1.fromBufferAttribute(this,$),R1.transformDirection(J),this.setXYZ($,R1.x,R1.y,R1.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let H=this.array[J*this.itemSize+$];if(this.normalized)H=B7(H,this.array);return H}setComponent(J,$,H){if(this.normalized)H=P1(H,this.array);return this.array[J*this.itemSize+$]=H,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=B7($,this.array);return $}setX(J,$){if(this.normalized)$=P1($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=B7($,this.array);return $}setY(J,$){if(this.normalized)$=P1($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=B7($,this.array);return $}setZ(J,$){if(this.normalized)$=P1($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=B7($,this.array);return $}setW(J,$){if(this.normalized)$=P1($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,H){if(J*=this.itemSize,this.normalized)$=P1($,this.array),H=P1(H,this.array);return this.array[J+0]=$,this.array[J+1]=H,this}setXYZ(J,$,H,Q){if(J*=this.itemSize,this.normalized)$=P1($,this.array),H=P1(H,this.array),Q=P1(Q,this.array);return this.array[J+0]=$,this.array[J+1]=H,this.array[J+2]=Q,this}setXYZW(J,$,H,Q,E){if(J*=this.itemSize,this.normalized)$=P1($,this.array),H=P1(H,this.array),Q=P1(Q,this.array),E=P1(E,this.array);return this.array[J+0]=$,this.array[J+1]=H,this.array[J+2]=Q,this.array[J+3]=E,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class P8 extends p1{constructor(J,$,H){super(new Uint16Array(J),$,H)}}class C8 extends p1{constructor(J,$,H){super(new Uint32Array(J),$,H)}}class M1 extends p1{constructor(J,$,H){super(new Float32Array(J),$,H)}}var CQ=new pJ,w7=new v,Q9=new v;class b7{constructor(J=new v,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let H=this.center;if($!==void 0)H.copy($);else CQ.setFromPoints(J).getCenter(H);let Q=0;for(let E=0,Y=J.length;E<Y;E++)Q=Math.max(Q,H.distanceToSquared(J[E]));return this.radius=Math.sqrt(Q),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let H=this.center.distanceToSquared(J);if($.copy(J),H>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;w7.subVectors(J,this.center);let $=w7.lengthSq();if($>this.radius*this.radius){let H=Math.sqrt($),Q=(H-this.radius)*0.5;this.center.addScaledVector(w7,Q/H),this.radius+=Q}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else Q9.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(w7.copy(J.center).add(Q9)),this.expandByPoint(w7.copy(J.center).sub(Q9));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var TQ=0,x1=new G1,E9=new C1,Q7=new v,v1=new pJ,A7=new pJ,q1=new v;class d1 extends kJ{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TQ++}),this.uuid=j7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((FQ(J))?C8:P8)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,H=0){this.groups.push({start:J,count:$,materialIndex:H})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let H=this.attributes.normal;if(H!==void 0){let E=new T0().getNormalMatrix(J);H.applyNormalMatrix(E),H.needsUpdate=!0}let Q=this.attributes.tangent;if(Q!==void 0)Q.transformDirection(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return x1.makeRotationFromQuaternion(J),this.applyMatrix4(x1),this}rotateX(J){return x1.makeRotationX(J),this.applyMatrix4(x1),this}rotateY(J){return x1.makeRotationY(J),this.applyMatrix4(x1),this}rotateZ(J){return x1.makeRotationZ(J),this.applyMatrix4(x1),this}translate(J,$,H){return x1.makeTranslation(J,$,H),this.applyMatrix4(x1),this}scale(J,$,H){return x1.makeScale(J,$,H),this.applyMatrix4(x1),this}lookAt(J){return E9.lookAt(J),E9.updateMatrix(),this.applyMatrix4(E9.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Q7).negate(),this.translate(Q7.x,Q7.y,Q7.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let H=[];for(let Q=0,E=J.length;Q<E;Q++){let Y=J[Q];H.push(Y.x,Y.y,Y.z||0)}this.setAttribute("position",new M1(H,3))}else{let H=Math.min(J.length,$.count);for(let Q=0;Q<H;Q++){let E=J[Q];$.setXYZ(Q,E.x,E.y,E.z||0)}if(J.length>$.count)z0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new pJ;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let H=0,Q=$.length;H<Q;H++){let E=$[H];if(v1.setFromBufferAttribute(E),this.morphTargetsRelative)q1.addVectors(this.boundingBox.min,v1.min),this.boundingBox.expandByPoint(q1),q1.addVectors(this.boundingBox.max,v1.max),this.boundingBox.expandByPoint(q1);else this.boundingBox.expandByPoint(v1.min),this.boundingBox.expandByPoint(v1.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))P0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new b7;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let H=this.boundingSphere.center;if(v1.setFromBufferAttribute(J),$)for(let E=0,Y=$.length;E<Y;E++){let X=$[E];if(A7.setFromBufferAttribute(X),this.morphTargetsRelative)q1.addVectors(v1.min,A7.min),v1.expandByPoint(q1),q1.addVectors(v1.max,A7.max),v1.expandByPoint(q1);else v1.expandByPoint(A7.min),v1.expandByPoint(A7.max)}v1.getCenter(H);let Q=0;for(let E=0,Y=J.count;E<Y;E++)q1.fromBufferAttribute(J,E),Q=Math.max(Q,H.distanceToSquared(q1));if($)for(let E=0,Y=$.length;E<Y;E++){let X=$[E],D=this.morphTargetsRelative;for(let K=0,W=X.count;K<W;K++){if(q1.fromBufferAttribute(X,K),D)Q7.fromBufferAttribute(J,K),q1.add(Q7);Q=Math.max(Q,H.distanceToSquared(q1))}}if(this.boundingSphere.radius=Math.sqrt(Q),isNaN(this.boundingSphere.radius))P0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){P0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:H,normal:Q,uv:E}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new p1(new Float32Array(4*H.count),4));let Y=this.getAttribute("tangent"),X=[],D=[];for(let C=0;C<H.count;C++)X[C]=new v,D[C]=new v;let K=new v,W=new v,U=new v,R=new a0,Z=new a0,N=new a0,M=new v,_=new v;function G(C,O,I){K.fromBufferAttribute(H,C),W.fromBufferAttribute(H,O),U.fromBufferAttribute(H,I),R.fromBufferAttribute(E,C),Z.fromBufferAttribute(E,O),N.fromBufferAttribute(E,I),W.sub(K),U.sub(K),Z.sub(R),N.sub(R);let u=1/(Z.x*N.y-N.x*Z.y);if(!isFinite(u))return;M.copy(W).multiplyScalar(N.y).addScaledVector(U,-Z.y).multiplyScalar(u),_.copy(U).multiplyScalar(Z.x).addScaledVector(W,-N.x).multiplyScalar(u),X[C].add(M),X[O].add(M),X[I].add(M),D[C].add(_),D[O].add(_),D[I].add(_)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let C=0,O=k.length;C<O;++C){let I=k[C],u=I.start,V=I.count;for(let l=u,s=u+V;l<s;l+=3)G(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let B=new v,A=new v,w=new v,T=new v;function z(C){w.fromBufferAttribute(Q,C),T.copy(w);let O=X[C];B.copy(O),B.sub(w.multiplyScalar(w.dot(O))).normalize(),A.crossVectors(T,O);let u=A.dot(D[C])<0?-1:1;Y.setXYZW(C,B.x,B.y,B.z,u)}for(let C=0,O=k.length;C<O;++C){let I=k[C],u=I.start,V=I.count;for(let l=u,s=u+V;l<s;l+=3)z(J.getX(l+0)),z(J.getX(l+1)),z(J.getX(l+2))}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let H=this.getAttribute("normal");if(H===void 0)H=new p1(new Float32Array($.count*3),3),this.setAttribute("normal",H);else for(let R=0,Z=H.count;R<Z;R++)H.setXYZ(R,0,0,0);let Q=new v,E=new v,Y=new v,X=new v,D=new v,K=new v,W=new v,U=new v;if(J)for(let R=0,Z=J.count;R<Z;R+=3){let N=J.getX(R+0),M=J.getX(R+1),_=J.getX(R+2);Q.fromBufferAttribute($,N),E.fromBufferAttribute($,M),Y.fromBufferAttribute($,_),W.subVectors(Y,E),U.subVectors(Q,E),W.cross(U),X.fromBufferAttribute(H,N),D.fromBufferAttribute(H,M),K.fromBufferAttribute(H,_),X.add(W),D.add(W),K.add(W),H.setXYZ(N,X.x,X.y,X.z),H.setXYZ(M,D.x,D.y,D.z),H.setXYZ(_,K.x,K.y,K.z)}else for(let R=0,Z=$.count;R<Z;R+=3)Q.fromBufferAttribute($,R+0),E.fromBufferAttribute($,R+1),Y.fromBufferAttribute($,R+2),W.subVectors(Y,E),U.subVectors(Q,E),W.cross(U),H.setXYZ(R+0,W.x,W.y,W.z),H.setXYZ(R+1,W.x,W.y,W.z),H.setXYZ(R+2,W.x,W.y,W.z);this.normalizeNormals(),H.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,H=J.count;$<H;$++)q1.fromBufferAttribute(J,$),q1.normalize(),J.setXYZ($,q1.x,q1.y,q1.z)}toNonIndexed(){function J(X,D){let{array:K,itemSize:W,normalized:U}=X,R=new K.constructor(D.length*W),Z=0,N=0;for(let M=0,_=D.length;M<_;M++){if(X.isInterleavedBufferAttribute)Z=D[M]*X.data.stride+X.offset;else Z=D[M]*W;for(let G=0;G<W;G++)R[N++]=K[Z++]}return new p1(R,W,U)}if(this.index===null)return z0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new d1,H=this.index.array,Q=this.attributes;for(let X in Q){let D=Q[X],K=J(D,H);$.setAttribute(X,K)}let E=this.morphAttributes;for(let X in E){let D=[],K=E[X];for(let W=0,U=K.length;W<U;W++){let R=K[W],Z=J(R,H);D.push(Z)}$.morphAttributes[X]=D}$.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let X=0,D=Y.length;X<D;X++){let K=Y[X];$.addGroup(K.start,K.count,K.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let D=this.parameters;for(let K in D)if(D[K]!==void 0)J[K]=D[K];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let H=this.attributes;for(let D in H){let K=H[D];J.data.attributes[D]=K.toJSON(J.data)}let Q={},E=!1;for(let D in this.morphAttributes){let K=this.morphAttributes[D],W=[];for(let U=0,R=K.length;U<R;U++){let Z=K[U];W.push(Z.toJSON(J.data))}if(W.length>0)Q[D]=W,E=!0}if(E)J.data.morphAttributes=Q,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let H=J.index;if(H!==null)this.setIndex(H.clone());let Q=J.attributes;for(let K in Q){let W=Q[K];this.setAttribute(K,W.clone($))}let E=J.morphAttributes;for(let K in E){let W=[],U=E[K];for(let R=0,Z=U.length;R<Z;R++)W.push(U[R].clone($));this.morphAttributes[K]=W}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let K=0,W=Y.length;K<W;K++){let U=Y[K];this.addGroup(U.start,U.count,U.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let D=J.boundingSphere;if(D!==null)this.boundingSphere=D.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var SQ=0;class F7 extends kJ{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:SQ++}),this.uuid=j7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new i0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let H=J[$];if(H===void 0){z0(`Material: parameter '${$}' has value of undefined.`);continue}let Q=this[$];if(Q===void 0){z0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Q&&Q.isColor)Q.set(H);else if(Q&&Q.isVector3&&(H&&H.isVector3))Q.copy(H);else this[$]=H}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let H={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(H.uuid=this.uuid,H.type=this.type,this.name!=="")H.name=this.name;if(this.color&&this.color.isColor)H.color=this.color.getHex();if(this.roughness!==void 0)H.roughness=this.roughness;if(this.metalness!==void 0)H.metalness=this.metalness;if(this.sheen!==void 0)H.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)H.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)H.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)H.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)H.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)H.specular=this.specular.getHex();if(this.specularIntensity!==void 0)H.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)H.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)H.shininess=this.shininess;if(this.clearcoat!==void 0)H.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)H.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)H.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)H.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)H.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,H.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)H.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)H.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)H.dispersion=this.dispersion;if(this.iridescence!==void 0)H.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)H.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)H.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)H.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)H.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)H.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)H.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)H.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)H.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)H.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)H.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)H.lightMap=this.lightMap.toJSON(J).uuid,H.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)H.aoMap=this.aoMap.toJSON(J).uuid,H.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)H.bumpMap=this.bumpMap.toJSON(J).uuid,H.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)H.normalMap=this.normalMap.toJSON(J).uuid,H.normalMapType=this.normalMapType,H.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)H.displacementMap=this.displacementMap.toJSON(J).uuid,H.displacementScale=this.displacementScale,H.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)H.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)H.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)H.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)H.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)H.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)H.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(H.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)H.combine=this.combine}if(this.envMapRotation!==void 0)H.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)H.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)H.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)H.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)H.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)H.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)H.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)H.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)H.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)H.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)H.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)H.size=this.size;if(this.shadowSide!==null)H.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)H.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)H.blending=this.blending;if(this.side!==0)H.side=this.side;if(this.vertexColors===!0)H.vertexColors=!0;if(this.opacity<1)H.opacity=this.opacity;if(this.transparent===!0)H.transparent=!0;if(this.blendSrc!==204)H.blendSrc=this.blendSrc;if(this.blendDst!==205)H.blendDst=this.blendDst;if(this.blendEquation!==100)H.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)H.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)H.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)H.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)H.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)H.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)H.depthFunc=this.depthFunc;if(this.depthTest===!1)H.depthTest=this.depthTest;if(this.depthWrite===!1)H.depthWrite=this.depthWrite;if(this.colorWrite===!1)H.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)H.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)H.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)H.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)H.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)H.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)H.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)H.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)H.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)H.rotation=this.rotation;if(this.polygonOffset===!0)H.polygonOffset=!0;if(this.polygonOffsetFactor!==0)H.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)H.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)H.linewidth=this.linewidth;if(this.dashSize!==void 0)H.dashSize=this.dashSize;if(this.gapSize!==void 0)H.gapSize=this.gapSize;if(this.scale!==void 0)H.scale=this.scale;if(this.dithering===!0)H.dithering=!0;if(this.alphaTest>0)H.alphaTest=this.alphaTest;if(this.alphaHash===!0)H.alphaHash=!0;if(this.alphaToCoverage===!0)H.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)H.premultipliedAlpha=!0;if(this.forceSinglePass===!0)H.forceSinglePass=!0;if(this.allowOverride===!1)H.allowOverride=!1;if(this.wireframe===!0)H.wireframe=!0;if(this.wireframeLinewidth>1)H.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")H.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")H.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)H.flatShading=!0;if(this.visible===!1)H.visible=!1;if(this.toneMapped===!1)H.toneMapped=!1;if(this.fog===!1)H.fog=!1;if(Object.keys(this.userData).length>0)H.userData=this.userData;function Q(E){let Y=[];for(let X in E){let D=E[X];delete D.metadata,Y.push(D)}return Y}if($){let E=Q(J.textures),Y=Q(J.images);if(E.length>0)H.textures=E;if(Y.length>0)H.images=Y}return H}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,H=null;if($!==null){let Q=$.length;H=Array(Q);for(let E=0;E!==Q;++E)H[E]=$[E].clone()}return this.clippingPlanes=H,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var KJ=new v,Y9=new v,t7=new v,_J=new v,X9=new v,e7=new v,D9=new v;class U${constructor(J=new v,$=new v(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,KJ)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let H=$.dot(this.direction);if(H<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,H)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=KJ.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return KJ.copy(this.origin).addScaledVector(this.direction,$),KJ.distanceToSquared(J)}distanceSqToSegment(J,$,H,Q){Y9.copy(J).add($).multiplyScalar(0.5),t7.copy($).sub(J).normalize(),_J.copy(this.origin).sub(Y9);let E=J.distanceTo($)*0.5,Y=-this.direction.dot(t7),X=_J.dot(this.direction),D=-_J.dot(t7),K=_J.lengthSq(),W=Math.abs(1-Y*Y),U,R,Z,N;if(W>0)if(U=Y*D-X,R=Y*X-D,N=E*W,U>=0)if(R>=-N)if(R<=N){let M=1/W;U*=M,R*=M,Z=U*(U+Y*R+2*X)+R*(Y*U+R+2*D)+K}else R=E,U=Math.max(0,-(Y*R+X)),Z=-U*U+R*(R+2*D)+K;else R=-E,U=Math.max(0,-(Y*R+X)),Z=-U*U+R*(R+2*D)+K;else if(R<=-N)U=Math.max(0,-(-Y*E+X)),R=U>0?-E:Math.min(Math.max(-E,-D),E),Z=-U*U+R*(R+2*D)+K;else if(R<=N)U=0,R=Math.min(Math.max(-E,-D),E),Z=R*(R+2*D)+K;else U=Math.max(0,-(Y*E+X)),R=U>0?E:Math.min(Math.max(-E,-D),E),Z=-U*U+R*(R+2*D)+K;else R=Y>0?-E:E,U=Math.max(0,-(Y*R+X)),Z=-U*U+R*(R+2*D)+K;if(H)H.copy(this.origin).addScaledVector(this.direction,U);if(Q)Q.copy(Y9).addScaledVector(t7,R);return Z}intersectSphere(J,$){KJ.subVectors(J.center,this.origin);let H=KJ.dot(this.direction),Q=KJ.dot(KJ)-H*H,E=J.radius*J.radius;if(Q>E)return null;let Y=Math.sqrt(E-Q),X=H-Y,D=H+Y;if(D<0)return null;if(X<0)return this.at(D,$);return this.at(X,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let H=-(this.origin.dot(J.normal)+J.constant)/$;return H>=0?H:null}intersectPlane(J,$){let H=this.distanceToPlane(J);if(H===null)return null;return this.at(H,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let H,Q,E,Y,X,D,K=1/this.direction.x,W=1/this.direction.y,U=1/this.direction.z,R=this.origin;if(K>=0)H=(J.min.x-R.x)*K,Q=(J.max.x-R.x)*K;else H=(J.max.x-R.x)*K,Q=(J.min.x-R.x)*K;if(W>=0)E=(J.min.y-R.y)*W,Y=(J.max.y-R.y)*W;else E=(J.max.y-R.y)*W,Y=(J.min.y-R.y)*W;if(H>Y||E>Q)return null;if(E>H||isNaN(H))H=E;if(Y<Q||isNaN(Q))Q=Y;if(U>=0)X=(J.min.z-R.z)*U,D=(J.max.z-R.z)*U;else X=(J.max.z-R.z)*U,D=(J.min.z-R.z)*U;if(H>D||X>Q)return null;if(X>H||H!==H)H=X;if(D<Q||Q!==Q)Q=D;if(Q<0)return null;return this.at(H>=0?H:Q,$)}intersectsBox(J){return this.intersectBox(J,KJ)!==null}intersectTriangle(J,$,H,Q,E){X9.subVectors($,J),e7.subVectors(H,J),D9.crossVectors(X9,e7);let Y=this.direction.dot(D9),X;if(Y>0){if(Q)return null;X=1}else if(Y<0)X=-1,Y=-Y;else return null;_J.subVectors(this.origin,J);let D=X*this.direction.dot(e7.crossVectors(_J,e7));if(D<0)return null;let K=X*this.direction.dot(X9.cross(_J));if(K<0)return null;if(D+K>Y)return null;let W=-X*_J.dot(D9);if(W<0)return null;return this.at(W/Y,E)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class N7 extends F7{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new i0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var U6=new G1,jJ=new U$,J8=new b7,k6=new v,$8=new v,H8=new v,Q8=new v,K9=new v,E8=new v,R6=new v,Y8=new v;class j1 extends C1{constructor(J=new d1,$=new N7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,H=Object.keys($);if(H.length>0){let Q=$[H[0]];if(Q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,Y=Q.length;E<Y;E++){let X=Q[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=E}}}}getVertexPosition(J,$){let H=this.geometry,Q=H.attributes.position,E=H.morphAttributes.position,Y=H.morphTargetsRelative;$.fromBufferAttribute(Q,J);let X=this.morphTargetInfluences;if(E&&X){E8.set(0,0,0);for(let D=0,K=E.length;D<K;D++){let W=X[D],U=E[D];if(W===0)continue;if(K9.fromBufferAttribute(U,J),Y)E8.addScaledVector(K9,W);else E8.addScaledVector(K9.sub($),W)}$.add(E8)}return $}raycast(J,$){let H=this.geometry,Q=this.material,E=this.matrixWorld;if(Q===void 0)return;if(H.boundingSphere===null)H.computeBoundingSphere();if(J8.copy(H.boundingSphere),J8.applyMatrix4(E),jJ.copy(J.ray).recast(J.near),J8.containsPoint(jJ.origin)===!1){if(jJ.intersectSphere(J8,k6)===null)return;if(jJ.origin.distanceToSquared(k6)>(J.far-J.near)**2)return}if(U6.copy(E).invert(),jJ.copy(J.ray).applyMatrix4(U6),H.boundingBox!==null){if(jJ.intersectsBox(H.boundingBox)===!1)return}this._computeIntersections(J,$,jJ)}_computeIntersections(J,$,H){let Q,E=this.geometry,Y=this.material,X=E.index,D=E.attributes.position,K=E.attributes.uv,W=E.attributes.uv1,U=E.attributes.normal,R=E.groups,Z=E.drawRange;if(X!==null)if(Array.isArray(Y))for(let N=0,M=R.length;N<M;N++){let _=R[N],G=Y[_.materialIndex],k=Math.max(_.start,Z.start),B=Math.min(X.count,Math.min(_.start+_.count,Z.start+Z.count));for(let A=k,w=B;A<w;A+=3){let T=X.getX(A),z=X.getX(A+1),C=X.getX(A+2);if(Q=X8(this,G,J,H,K,W,U,T,z,C),Q)Q.faceIndex=Math.floor(A/3),Q.face.materialIndex=_.materialIndex,$.push(Q)}}else{let N=Math.max(0,Z.start),M=Math.min(X.count,Z.start+Z.count);for(let _=N,G=M;_<G;_+=3){let k=X.getX(_),B=X.getX(_+1),A=X.getX(_+2);if(Q=X8(this,Y,J,H,K,W,U,k,B,A),Q)Q.faceIndex=Math.floor(_/3),$.push(Q)}}else if(D!==void 0)if(Array.isArray(Y))for(let N=0,M=R.length;N<M;N++){let _=R[N],G=Y[_.materialIndex],k=Math.max(_.start,Z.start),B=Math.min(D.count,Math.min(_.start+_.count,Z.start+Z.count));for(let A=k,w=B;A<w;A+=3){let T=A,z=A+1,C=A+2;if(Q=X8(this,G,J,H,K,W,U,T,z,C),Q)Q.faceIndex=Math.floor(A/3),Q.face.materialIndex=_.materialIndex,$.push(Q)}}else{let N=Math.max(0,Z.start),M=Math.min(D.count,Z.start+Z.count);for(let _=N,G=M;_<G;_+=3){let k=_,B=_+1,A=_+2;if(Q=X8(this,Y,J,H,K,W,U,k,B,A),Q)Q.faceIndex=Math.floor(_/3),$.push(Q)}}}}function jQ(J,$,H,Q,E,Y,X,D){let K;if($.side===1)K=Q.intersectTriangle(X,Y,E,!0,D);else K=Q.intersectTriangle(E,Y,X,$.side===0,D);if(K===null)return null;Y8.copy(D),Y8.applyMatrix4(J.matrixWorld);let W=H.ray.origin.distanceTo(Y8);if(W<H.near||W>H.far)return null;return{distance:W,point:Y8.clone(),object:J}}function X8(J,$,H,Q,E,Y,X,D,K,W){J.getVertexPosition(D,$8),J.getVertexPosition(K,H8),J.getVertexPosition(W,Q8);let U=jQ(J,$,H,Q,$8,H8,Q8,R6);if(U){let R=new v;if(g1.getBarycoord(R6,$8,H8,Q8,R),E)U.uv=g1.getInterpolatedAttribute(E,D,K,W,R,new a0);if(Y)U.uv1=g1.getInterpolatedAttribute(Y,D,K,W,R,new a0);if(X){if(U.normal=g1.getInterpolatedAttribute(X,D,K,W,R,new v),U.normal.dot(Q.direction)>0)U.normal.multiplyScalar(-1)}let Z={a:D,b:K,c:W,normal:new v,materialIndex:0};g1.getNormal($8,H8,Q8,Z.normal),U.face=Z,U.barycoord=R}return U}class k$ extends w1{constructor(J=null,$=1,H=1,Q,E,Y,X,D,K=1003,W=1003,U,R){super(null,Y,X,D,K,W,Q,E,U,R);this.isDataTexture=!0,this.image={data:J,width:$,height:H},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var W9=new v,hQ=new v,fQ=new T0;class WJ{constructor(J=new v(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,H,Q){return this.normal.set(J,$,H),this.constant=Q,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,H){let Q=W9.subVectors(H,$).cross(hQ.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Q,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,H=!0){let Q=J.delta(W9),E=this.normal.dot(Q);if(E===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let Y=-(J.start.dot(this.normal)+this.constant)/E;if(H===!0&&(Y<0||Y>1))return null;return $.copy(J.start).addScaledVector(Q,Y)}intersectsLine(J){let $=this.distanceToPoint(J.start),H=this.distanceToPoint(J.end);return $<0&&H>0||H<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let H=$||fQ.getNormalMatrix(J),Q=this.coplanarPoint(W9).applyMatrix4(J),E=this.normal.applyMatrix3(H).normalize();return this.constant=-Q.dot(E),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var hJ=new b7,bQ=new a0(0.5,0.5),D8=new v;class T8{constructor(J=new WJ,$=new WJ,H=new WJ,Q=new WJ,E=new WJ,Y=new WJ){this.planes=[J,$,H,Q,E,Y]}set(J,$,H,Q,E,Y){let X=this.planes;return X[0].copy(J),X[1].copy($),X[2].copy(H),X[3].copy(Q),X[4].copy(E),X[5].copy(Y),this}copy(J){let $=this.planes;for(let H=0;H<6;H++)$[H].copy(J.planes[H]);return this}setFromProjectionMatrix(J,$=2000,H=!1){let Q=this.planes,E=J.elements,Y=E[0],X=E[1],D=E[2],K=E[3],W=E[4],U=E[5],R=E[6],Z=E[7],N=E[8],M=E[9],_=E[10],G=E[11],k=E[12],B=E[13],A=E[14],w=E[15];if(Q[0].setComponents(K-Y,Z-W,G-N,w-k).normalize(),Q[1].setComponents(K+Y,Z+W,G+N,w+k).normalize(),Q[2].setComponents(K+X,Z+U,G+M,w+B).normalize(),Q[3].setComponents(K-X,Z-U,G-M,w-B).normalize(),H)Q[4].setComponents(D,R,_,A).normalize(),Q[5].setComponents(K-D,Z-R,G-_,w-A).normalize();else if(Q[4].setComponents(K-D,Z-R,G-_,w-A).normalize(),$===2000)Q[5].setComponents(K+D,Z+R,G+_,w+A).normalize();else if($===2001)Q[5].setComponents(D,R,_,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();hJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();hJ.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(hJ)}intersectsSprite(J){hJ.center.set(0,0,0);let $=bQ.distanceTo(J.center);return hJ.radius=0.7071067811865476+$,hJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(hJ)}intersectsSphere(J){let $=this.planes,H=J.center,Q=-J.radius;for(let E=0;E<6;E++)if($[E].distanceToPoint(H)<Q)return!1;return!0}intersectsBox(J){let $=this.planes;for(let H=0;H<6;H++){let Q=$[H];if(D8.x=Q.normal.x>0?J.max.x:J.min.x,D8.y=Q.normal.y>0?J.max.y:J.min.y,D8.z=Q.normal.z>0?J.max.z:J.min.z,Q.distanceToPoint(D8)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let H=0;H<6;H++)if($[H].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S8 extends w1{constructor(J=[],$=301,H,Q,E,Y,X,D,K,W){super(J,$,H,Q,E,Y,X,D,K,W);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class zJ extends w1{constructor(J,$,H=1014,Q,E,Y,X=1003,D=1003,K,W=1026,U=1){if(W!==1026&&W!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let R={width:J,height:$,depth:U};super(R,Q,E,Y,X,D,W,H,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new h7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class R$ extends zJ{constructor(J,$=1014,H=301,Q,E,Y=1003,X=1003,D,K=1026){let W={width:J,height:J,depth:1},U=[W,W,W,W,W,W];super(J,J,$,H,Q,E,Y,X,D,K);this.image=U,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class j8 extends w1{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class q7 extends d1{constructor(J=1,$=1,H=1,Q=1,E=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:H,widthSegments:Q,heightSegments:E,depthSegments:Y};let X=this;Q=Math.floor(Q),E=Math.floor(E),Y=Math.floor(Y);let D=[],K=[],W=[],U=[],R=0,Z=0;N("z","y","x",-1,-1,H,$,J,Y,E,0),N("z","y","x",1,-1,H,$,-J,Y,E,1),N("x","z","y",1,1,J,H,$,Q,Y,2),N("x","z","y",1,-1,J,H,-$,Q,Y,3),N("x","y","z",1,-1,J,$,H,Q,E,4),N("x","y","z",-1,-1,J,$,-H,Q,E,5),this.setIndex(D),this.setAttribute("position",new M1(K,3)),this.setAttribute("normal",new M1(W,3)),this.setAttribute("uv",new M1(U,2));function N(M,_,G,k,B,A,w,T,z,C,O){let I=A/z,u=w/C,V=A/2,l=w/2,s=T/2,f=z+1,m=C+1,x=0,p=0,a=new v;for(let $0=0;$0<m;$0++){let k0=$0*u-l;for(let w0=0;w0<f;w0++){let O0=w0*I-V;a[M]=O0*k,a[_]=k0*B,a[G]=s,K.push(a.x,a.y,a.z),a[M]=0,a[_]=0,a[G]=T>0?1:-1,W.push(a.x,a.y,a.z),U.push(w0/z),U.push(1-$0/C),x+=1}}for(let $0=0;$0<C;$0++)for(let k0=0;k0<z;k0++){let w0=R+k0+f*$0,O0=R+k0+f*($0+1),s0=R+(k0+1)+f*($0+1),g0=R+(k0+1)+f*$0;D.push(w0,O0,g0),D.push(O0,s0,g0),p+=6}X.addGroup(Z,p,O),Z+=p,R+=x}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class v7 extends d1{constructor(J=1,$=1,H=1,Q=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:H,heightSegments:Q};let E=J/2,Y=$/2,X=Math.floor(H),D=Math.floor(Q),K=X+1,W=D+1,U=J/X,R=$/D,Z=[],N=[],M=[],_=[];for(let G=0;G<W;G++){let k=G*R-Y;for(let B=0;B<K;B++){let A=B*U-E;N.push(A,-k,0),M.push(0,0,1),_.push(B/X),_.push(1-G/D)}}for(let G=0;G<D;G++)for(let k=0;k<X;k++){let B=k+K*G,A=k+K*(G+1),w=k+1+K*(G+1),T=k+1+K*G;Z.push(B,A,T),Z.push(A,w,T)}this.setIndex(Z),this.setAttribute("position",new M1(N,3)),this.setAttribute("normal",new M1(M,3)),this.setAttribute("uv",new M1(_,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v7(J.width,J.height,J.widthSegments,J.heightSegments)}}class y7 extends d1{constructor(J=1,$=32,H=16,Q=0,E=Math.PI*2,Y=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:H,phiStart:Q,phiLength:E,thetaStart:Y,thetaLength:X},$=Math.max(3,Math.floor($)),H=Math.max(2,Math.floor(H));let D=Math.min(Y+X,Math.PI),K=0,W=[],U=new v,R=new v,Z=[],N=[],M=[],_=[];for(let G=0;G<=H;G++){let k=[],B=G/H,A=0;if(G===0&&Y===0)A=0.5/$;else if(G===H&&D===Math.PI)A=-0.5/$;for(let w=0;w<=$;w++){let T=w/$;U.x=-J*Math.cos(Q+T*E)*Math.sin(Y+B*X),U.y=J*Math.cos(Y+B*X),U.z=J*Math.sin(Q+T*E)*Math.sin(Y+B*X),N.push(U.x,U.y,U.z),R.copy(U).normalize(),M.push(R.x,R.y,R.z),_.push(T+A,1-B),k.push(K++)}W.push(k)}for(let G=0;G<H;G++)for(let k=0;k<$;k++){let B=W[G][k+1],A=W[G][k],w=W[G+1][k],T=W[G+1][k+1];if(G!==0||Y>0)Z.push(B,A,T);if(G!==H-1||D<Math.PI)Z.push(A,w,T)}this.setIndex(Z),this.setAttribute("position",new M1(N,3)),this.setAttribute("normal",new M1(M,3)),this.setAttribute("uv",new M1(_,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y7(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x7 extends d1{constructor(J=1,$=0.4,H=12,Q=48,E=Math.PI*2,Y=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:$,radialSegments:H,tubularSegments:Q,arc:E,thetaStart:Y,thetaLength:X},H=Math.floor(H),Q=Math.floor(Q);let D=[],K=[],W=[],U=[],R=new v,Z=new v,N=new v;for(let M=0;M<=H;M++){let _=Y+M/H*X;for(let G=0;G<=Q;G++){let k=G/Q*E;Z.x=(J+$*Math.cos(_))*Math.cos(k),Z.y=(J+$*Math.cos(_))*Math.sin(k),Z.z=$*Math.sin(_),K.push(Z.x,Z.y,Z.z),R.x=J*Math.cos(k),R.y=J*Math.sin(k),N.subVectors(Z,R).normalize(),W.push(N.x,N.y,N.z),U.push(G/Q),U.push(M/H)}}for(let M=1;M<=H;M++)for(let _=1;_<=Q;_++){let G=(Q+1)*M+_-1,k=(Q+1)*(M-1)+_-1,B=(Q+1)*(M-1)+_,A=(Q+1)*M+_;D.push(G,k,A),D.push(k,B,A)}this.setIndex(D),this.setAttribute("position",new M1(K,3)),this.setAttribute("normal",new M1(W,3)),this.setAttribute("uv",new M1(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function lJ(J){let $={};for(let H in J){$[H]={};for(let Q in J[H]){let E=J[H][Q];if(F6(E))if(E.isRenderTargetTexture)z0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[H][Q]=null;else $[H][Q]=E.clone();else if(Array.isArray(E))if(F6(E[0])){let Y=[];for(let X=0,D=E.length;X<D;X++)Y[X]=E[X].clone();$[H][Q]=Y}else $[H][Q]=E.slice();else $[H][Q]=E}}return $}function A1(J){let $={};for(let H=0;H<J.length;H++){let Q=lJ(J[H]);for(let E in Q)$[E]=Q[E]}return $}function F6(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function vQ(J){let $=[];for(let H=0;H<J.length;H++)$.push(J[H].clone());return $}function F$(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return l0.workingColorSpace}var BH={clone:lJ,merge:A1},yQ=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xQ=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class h1 extends F7{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yQ,this.fragmentShader=xQ,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=lJ(J.uniforms),this.uniformsGroups=vQ(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Q in this.uniforms){let Y=this.uniforms[Q].value;if(Y&&Y.isTexture)$.uniforms[Q]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)$.uniforms[Q]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)$.uniforms[Q]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)$.uniforms[Q]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)$.uniforms[Q]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)$.uniforms[Q]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)$.uniforms[Q]={type:"m4",value:Y.toArray()};else $.uniforms[Q]={value:Y}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let H={};for(let Q in this.extensions)if(this.extensions[Q]===!0)H[Q]=!0;if(Object.keys(H).length>0)$.extensions=H;return $}}class N$ extends h1{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q$ extends F7{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class O$ extends F7{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function K8(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}class dJ{constructor(J,$,H,Q){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Q!==void 0?Q:new $.constructor(H),this.sampleValues=$,this.valueSize=H,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,H=this._cachedIndex,Q=$[H],E=$[H-1];H:{J:{let Y;$:{Q:if(!(J<Q)){for(let X=H+2;;){if(Q===void 0){if(J<E)break Q;return H=$.length,this._cachedIndex=H,this.copySampleValue_(H-1)}if(H===X)break;if(E=Q,Q=$[++H],J<Q)break J}Y=$.length;break $}if(!(J>=E)){let X=$[1];if(J<X)H=2,E=X;for(let D=H-2;;){if(E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(H===D)break;if(Q=E,E=$[--H-1],J>=E)break J}Y=H,H=0;break $}break H}while(H<Y){let X=H+Y>>>1;if(J<$[X])Y=X;else H=X+1}if(Q=$[H],E=$[H-1],E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===void 0)return H=$.length,this._cachedIndex=H,this.copySampleValue_(H-1)}this._cachedIndex=H,this.intervalChanged_(H,E,Q)}return this.interpolate_(H,E,J,Q)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,H=this.sampleValues,Q=this.valueSize,E=J*Q;for(let Y=0;Y!==Q;++Y)$[Y]=H[E+Y];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class M$ extends dJ{constructor(J,$,H,Q){super(J,$,H,Q);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,H){let Q=this.parameterPositions,E=J-2,Y=J+1,X=Q[E],D=Q[Y];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:E=J,X=2*$-H;break;case 2402:E=Q.length-2,X=$+Q[E]-Q[E+1];break;default:E=J,X=H}if(D===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,D=2*H-$;break;case 2402:Y=1,D=H+Q[1]-Q[0];break;default:Y=J-1,D=$}let K=(H-$)*0.5,W=this.valueSize;this._weightPrev=K/($-X),this._weightNext=K/(D-H),this._offsetPrev=E*W,this._offsetNext=Y*W}interpolate_(J,$,H,Q){let E=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,D=J*X,K=D-X,W=this._offsetPrev,U=this._offsetNext,R=this._weightPrev,Z=this._weightNext,N=(H-$)/(Q-$),M=N*N,_=M*N,G=-R*_+2*R*M-R*N,k=(1+R)*_+(-1.5-2*R)*M+(-0.5+R)*N+1,B=(-1-Z)*_+(1.5+Z)*M+0.5*N,A=Z*_-Z*M;for(let w=0;w!==X;++w)E[w]=G*Y[W+w]+k*Y[K+w]+B*Y[D+w]+A*Y[U+w];return E}}class L$ extends dJ{constructor(J,$,H,Q){super(J,$,H,Q)}interpolate_(J,$,H,Q){let E=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,D=J*X,K=D-X,W=(H-$)/(Q-$),U=1-W;for(let R=0;R!==X;++R)E[R]=Y[K+R]*U+Y[D+R]*W;return E}}class B$ extends dJ{constructor(J,$,H,Q){super(J,$,H,Q)}interpolate_(J){return this.copySampleValue_(J-1)}}class _$ extends dJ{interpolate_(J,$,H,Q){let E=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,D=J*X,K=D-X,W=this.settings||this.DefaultSettings_,U=W.inTangents,R=W.outTangents;if(!U||!R){let M=(H-$)/(Q-$),_=1-M;for(let G=0;G!==X;++G)E[G]=Y[K+G]*_+Y[D+G]*M;return E}let Z=X*2,N=J-1;for(let M=0;M!==X;++M){let _=Y[K+M],G=Y[D+M],k=N*Z+M*2,B=R[k],A=R[k+1],w=J*Z+M*2,T=U[w],z=U[w+1],C=(H-$)/(Q-$),O,I,u,V,l;for(let s=0;s<8;s++){O=C*C,I=O*C,u=1-C,V=u*u,l=V*u;let m=l*$+3*V*C*B+3*u*O*T+I*Q-H;if(Math.abs(m)<0.0000000001)break;let x=3*V*(B-$)+6*u*C*(T-B)+3*O*(Q-T);if(Math.abs(x)<0.0000000001)break;C=C-m/x,C=Math.max(0,Math.min(1,C))}E[M]=l*_+3*V*C*A+3*u*O*z+I*G}return E}}class m1{constructor(J,$,H,Q){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=K8($,this.TimeBufferType),this.values=K8(H,this.ValueBufferType),this.setInterpolation(Q||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,H;if($.toJSON!==this.toJSON)H=$.toJSON(J);else{H={name:J.name,times:K8(J.times,Array),values:K8(J.values,Array)};let Q=J.getInterpolation();if(Q!==J.DefaultInterpolation)H.interpolation=Q}return H.type=J.ValueTypeName,H}InterpolantFactoryMethodDiscrete(J){return new B$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new M$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new _$(this.times,this.values,this.getValueSize(),J);if(this.settings)$.settings=this.settings;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let H="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(H);return z0("KeyframeTrack:",H),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let H=0,Q=$.length;H!==Q;++H)$[H]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let H=0,Q=$.length;H!==Q;++H)$[H]*=J}return this}trim(J,$){let H=this.times,Q=H.length,E=0,Y=Q-1;while(E!==Q&&H[E]<J)++E;while(Y!==-1&&H[Y]>$)--Y;if(++Y,E!==0||Y!==Q){if(E>=Y)Y=Math.max(Y,1),E=Y-1;let X=this.getValueSize();this.times=H.slice(E,Y),this.values=this.values.slice(E*X,Y*X)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)P0("KeyframeTrack: Invalid value size in track.",this),J=!1;let H=this.times,Q=this.values,E=H.length;if(E===0)P0("KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let X=0;X!==E;X++){let D=H[X];if(typeof D==="number"&&isNaN(D)){P0("KeyframeTrack: Time is not a valid number.",this,X,D),J=!1;break}if(Y!==null&&Y>D){P0("KeyframeTrack: Out of order keys.",this,X,D,Y),J=!1;break}Y=D}if(Q!==void 0){if(NQ(Q))for(let X=0,D=Q.length;X!==D;++X){let K=Q[X];if(isNaN(K)){P0("KeyframeTrack: Value is not a valid number.",this,X,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),H=this.getValueSize(),Q=this.getInterpolation()===2302,E=J.length-1,Y=1;for(let X=1;X<E;++X){let D=!1,K=J[X],W=J[X+1];if(K!==W&&(X!==1||K!==J[0]))if(!Q){let U=X*H,R=U-H,Z=U+H;for(let N=0;N!==H;++N){let M=$[U+N];if(M!==$[R+N]||M!==$[Z+N]){D=!0;break}}}else D=!0;if(D){if(X!==Y){J[Y]=J[X];let U=X*H,R=Y*H;for(let Z=0;Z!==H;++Z)$[R+Z]=$[U+Z]}++Y}}if(E>0){J[Y]=J[E];for(let X=E*H,D=Y*H,K=0;K!==H;++K)$[D+K]=$[X+K];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=$.slice(0,Y*H);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Q=new this.constructor(this.name,J,$);return Q.createInterpolant=this.createInterpolant,Q}}m1.prototype.ValueTypeName="";m1.prototype.TimeBufferType=Float32Array;m1.prototype.ValueBufferType=Float32Array;m1.prototype.DefaultInterpolation=2301;class mJ extends m1{constructor(J,$,H){super(J,$,H)}}mJ.prototype.ValueTypeName="bool";mJ.prototype.ValueBufferType=Array;mJ.prototype.DefaultInterpolation=2300;mJ.prototype.InterpolantFactoryMethodLinear=void 0;mJ.prototype.InterpolantFactoryMethodSmooth=void 0;class I$ extends m1{constructor(J,$,H,Q){super(J,$,H,Q)}}I$.prototype.ValueTypeName="color";class w$ extends m1{constructor(J,$,H,Q){super(J,$,H,Q)}}w$.prototype.ValueTypeName="number";class A$ extends dJ{constructor(J,$,H,Q){super(J,$,H,Q)}interpolate_(J,$,H,Q){let E=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,D=(H-$)/(Q-$),K=J*X;for(let W=K+X;K!==W;K+=4)RJ.slerpFlat(E,0,Y,K-X,Y,K,D);return E}}class h8 extends m1{constructor(J,$,H,Q){super(J,$,H,Q)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}}h8.prototype.ValueTypeName="quaternion";h8.prototype.InterpolantFactoryMethodSmooth=void 0;class uJ extends m1{constructor(J,$,H){super(J,$,H)}}uJ.prototype.ValueTypeName="string";uJ.prototype.ValueBufferType=Array;uJ.prototype.DefaultInterpolation=2300;uJ.prototype.InterpolantFactoryMethodLinear=void 0;uJ.prototype.InterpolantFactoryMethodSmooth=void 0;class V$ extends m1{constructor(J,$,H,Q){super(J,$,H,Q)}}V$.prototype.ValueTypeName="vector";class z${constructor(J,$,H){let Q=this,E=!1,Y=0,X=0,D=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=H,this._abortController=null,this.itemStart=function(W){if(X++,E===!1){if(Q.onStart!==void 0)Q.onStart(W,Y,X)}E=!0},this.itemEnd=function(W){if(Y++,Q.onProgress!==void 0)Q.onProgress(W,Y,X);if(Y===X){if(E=!1,Q.onLoad!==void 0)Q.onLoad()}},this.itemError=function(W){if(Q.onError!==void 0)Q.onError(W)},this.resolveURL=function(W){if(D)return D(W);return W},this.setURLModifier=function(W){return D=W,this},this.addHandler=function(W,U){return K.push(W,U),this},this.removeHandler=function(W){let U=K.indexOf(W);if(U!==-1)K.splice(U,2);return this},this.getHandler=function(W){for(let U=0,R=K.length;U<R;U+=2){let Z=K[U],N=K[U+1];if(Z.global)Z.lastIndex=0;if(Z.test(W))return N}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var _H=new z$;class P${constructor(J){if(this.manager=J!==void 0?J:_H,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let H=this;return new Promise(function(Q,E){H.load(J,Q,$,E)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}P$.DEFAULT_MATERIAL_NAME="__DEFAULT";var W8=new v,Z8=new RJ,t1=new v;class f8 extends C1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new G1,this.projectionMatrix=new G1,this.projectionMatrixInverse=new G1,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(W8,Z8,t1),t1.x===1&&t1.y===1&&t1.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(W8,Z8,t1.set(1,1,1)).invert()}updateWorldMatrix(J,$){if(super.updateWorldMatrix(J,$),this.matrixWorld.decompose(W8,Z8,t1),t1.x===1&&t1.y===1&&t1.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(W8,Z8,t1.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var IJ=new v,N6=new a0,q6=new a0;class z1 extends f8{constructor(J=50,$=1,H=0.1,Q=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=H,this.far=Q,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=U8*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(l8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return U8*2*Math.atan(Math.tan(l8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,H){IJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(IJ.x,IJ.y).multiplyScalar(-J/IJ.z),IJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),H.set(IJ.x,IJ.y).multiplyScalar(-J/IJ.z)}getViewSize(J,$){return this.getViewBounds(J,N6,q6),$.subVectors(q6,N6)}setViewOffset(J,$,H,Q,E,Y){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=H,this.view.offsetY=Q,this.view.width=E,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(l8*0.5*this.fov)/this.zoom,H=2*$,Q=this.aspect*H,E=-0.5*Q,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:D,fullHeight:K}=Y;E+=Y.offsetX*Q/D,$-=Y.offsetY*H/K,Q*=Y.width/D,H*=Y.height/K}let X=this.filmOffset;if(X!==0)E+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(E,E+Q,$,$-H,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class b8 extends f8{constructor(J=-1,$=1,H=1,Q=-1,E=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=H,this.bottom=Q,this.near=E,this.far=Y,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,H,Q,E,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=H,this.view.offsetY=Q,this.view.width=E,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),H=(this.right+this.left)/2,Q=(this.top+this.bottom)/2,E=H-J,Y=H+J,X=Q+$,D=Q-$;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,W=(this.top-this.bottom)/this.view.fullHeight/this.zoom;E+=K*this.view.offsetX,Y=E+K*this.view.width,X-=W*this.view.offsetY,D=X-W*this.view.height}this.projectionMatrix.makeOrthographic(E,Y,X,D,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}var E7=-90,Y7=1;class C$ extends C1{constructor(J,$,H){super();this.type="CubeCamera",this.renderTarget=H,this.coordinateSystem=null,this.activeMipmapLevel=0;let Q=new z1(E7,Y7,J,$);Q.layers=this.layers,this.add(Q);let E=new z1(E7,Y7,J,$);E.layers=this.layers,this.add(E);let Y=new z1(E7,Y7,J,$);Y.layers=this.layers,this.add(Y);let X=new z1(E7,Y7,J,$);X.layers=this.layers,this.add(X);let D=new z1(E7,Y7,J,$);D.layers=this.layers,this.add(D);let K=new z1(E7,Y7,J,$);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[H,Q,E,Y,X,D]=$;for(let K of $)this.remove(K);if(J===2000)H.up.set(0,1,0),H.lookAt(1,0,0),Q.up.set(0,1,0),Q.lookAt(-1,0,0),E.up.set(0,0,-1),E.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),D.up.set(0,1,0),D.lookAt(0,0,-1);else if(J===2001)H.up.set(0,-1,0),H.lookAt(-1,0,0),Q.up.set(0,-1,0),Q.lookAt(1,0,0),E.up.set(0,0,1),E.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),D.up.set(0,-1,0),D.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of $)this.add(K),K.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:H,activeMipmapLevel:Q}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[E,Y,X,D,K,W]=this.children,U=J.getRenderTarget(),R=J.getActiveCubeFace(),Z=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let M=H.texture.generateMipmaps;H.texture.generateMipmaps=!1;let _=!1;if(J.isWebGLRenderer===!0)_=J.state.buffers.depth.getReversed();else _=J.reversedDepthBuffer;if(J.setRenderTarget(H,0,Q),_&&J.autoClear===!1)J.clearDepth();if(J.render($,E),J.setRenderTarget(H,1,Q),_&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(H,2,Q),_&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(H,3,Q),_&&J.autoClear===!1)J.clearDepth();if(J.render($,D),J.setRenderTarget(H,4,Q),_&&J.autoClear===!1)J.clearDepth();if(J.render($,K),H.texture.generateMipmaps=M,J.setRenderTarget(H,5,Q),_&&J.autoClear===!1)J.clearDepth();J.render($,W),J.setRenderTarget(U,R,Z),J.xr.enabled=N,H.texture.needsPMREMUpdate=!0}}class T$ extends z1{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var S$="\\[\\]\\.:\\/",gQ=new RegExp("["+S$+"]","g"),j$="[^"+S$+"]",pQ="[^"+S$.replace("\\.","")+"]",lQ=/((?:WC+[\/:])*)/.source.replace("WC",j$),dQ=/(WCOD+)?/.source.replace("WCOD",pQ),mQ=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",j$),uQ=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",j$),cQ=new RegExp("^"+lQ+dQ+mQ+uQ+"$"),nQ=["material","materials","bones","map"];class IH{constructor(J,$,H){let Q=H||o0.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Q)}getValue(J,$){this.bind();let H=this._targetGroup.nCachedObjects_,Q=this._bindings[H];if(Q!==void 0)Q.getValue(J,$)}setValue(J,$){let H=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,E=H.length;Q!==E;++Q)H[Q].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,H=J.length;$!==H;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,H=J.length;$!==H;++$)J[$].unbind()}}class o0{constructor(J,$,H){this.path=$,this.parsedPath=H||o0.parseTrackName($),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,H){if(!(J&&J.isAnimationObjectGroup))return new o0(J,$,H);else return new o0.Composite(J,$,H)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(gQ,"")}static parseTrackName(J){let $=cQ.exec(J);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let H={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Q=H.nodeName&&H.nodeName.lastIndexOf(".");if(Q!==void 0&&Q!==-1){let E=H.nodeName.substring(Q+1);if(nQ.indexOf(E)!==-1)H.nodeName=H.nodeName.substring(0,Q),H.objectName=E}if(H.propertyName===null||H.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return H}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let H=J.skeleton.getBoneByName($);if(H!==void 0)return H}if(J.children){let H=function(E){for(let Y=0;Y<E.length;Y++){let X=E[Y];if(X.name===$||X.uuid===$)return X;let D=H(X.children);if(D)return D}return null},Q=H(J.children);if(Q)return Q}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let H=this.resolvedProperty;for(let Q=0,E=H.length;Q!==E;++Q)J[$++]=H[Q]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let H=this.resolvedProperty;for(let Q=0,E=H.length;Q!==E;++Q)H[Q]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let H=this.resolvedProperty;for(let Q=0,E=H.length;Q!==E;++Q)H[Q]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let H=this.resolvedProperty;for(let Q=0,E=H.length;Q!==E;++Q)H[Q]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,H=$.objectName,Q=$.propertyName,E=$.propertyIndex;if(!J)J=o0.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){z0("PropertyBinding: No target node found for track: "+this.path+".");return}if(H){let K=$.objectIndex;switch(H){case"materials":if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){P0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){P0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let W=0;W<J.length;W++)if(J[W].name===K){K=W;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){P0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[H]===void 0){P0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[H]}if(K!==void 0){if(J[K]===void 0){P0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let Y=J[Q];if(Y===void 0){let K=$.nodeName;P0("PropertyBinding: Trying to update property for track: "+K+"."+Q+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let D=this.BindingType.Direct;if(E!==void 0){if(Q==="morphTargetInfluences"){if(!J.geometry){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[E]!==void 0)E=J.morphTargetDictionary[E]}D=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=E}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)D=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))D=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=Q;this.getValue=this.GetterByBindingType[D],this.setValue=this.SetterByBindingTypeAndVersioning[D][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=IH;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nD=new Float32Array(1);class h${static{h$.prototype.isMatrix2=!0}constructor(J,$,H,Q){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,H,Q)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let H=0;H<4;H++)this.elements[H]=J[H+$];return this}set(J,$,H,Q){let E=this.elements;return E[0]=J,E[2]=$,E[1]=H,E[3]=Q,this}}function f$(J,$,H,Q){let E=iQ(Q);switch(H){case 1021:return J*$;case 1028:return J*$/E.components*E.byteLength;case 1029:return J*$/E.components*E.byteLength;case 1030:return J*$*2/E.components*E.byteLength;case 1031:return J*$*2/E.components*E.byteLength;case 1022:return J*$*3/E.components*E.byteLength;case 1023:return J*$*4/E.components*E.byteLength;case 1033:return J*$*4/E.components*E.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${H} format.`)}function iQ(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)z0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function nH(){let J=null,$=!1,H=null,Q=null;function E(Y,X){H(Y,X),Q=J.requestAnimationFrame(E)}return{start:function(){if($===!0)return;if(H===null)return;if(J===null)return;Q=J.requestAnimationFrame(E),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Q);$=!1},setAnimationLoop:function(Y){H=Y},setContext:function(Y){J=Y}}}function sQ(J){let $=new WeakMap;function H(D,K){let{array:W,usage:U}=D,R=W.byteLength,Z=J.createBuffer();J.bindBuffer(K,Z),J.bufferData(K,W,U),D.onUploadCallback();let N;if(W instanceof Float32Array)N=J.FLOAT;else if(typeof Float16Array<"u"&&W instanceof Float16Array)N=J.HALF_FLOAT;else if(W instanceof Uint16Array)if(D.isFloat16BufferAttribute)N=J.HALF_FLOAT;else N=J.UNSIGNED_SHORT;else if(W instanceof Int16Array)N=J.SHORT;else if(W instanceof Uint32Array)N=J.UNSIGNED_INT;else if(W instanceof Int32Array)N=J.INT;else if(W instanceof Int8Array)N=J.BYTE;else if(W instanceof Uint8Array)N=J.UNSIGNED_BYTE;else if(W instanceof Uint8ClampedArray)N=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+W);return{buffer:Z,type:N,bytesPerElement:W.BYTES_PER_ELEMENT,version:D.version,size:R}}function Q(D,K,W){let{array:U,updateRanges:R}=K;if(J.bindBuffer(W,D),R.length===0)J.bufferSubData(W,0,U);else{R.sort((N,M)=>N.start-M.start);let Z=0;for(let N=1;N<R.length;N++){let M=R[Z],_=R[N];if(_.start<=M.start+M.count+1)M.count=Math.max(M.count,_.start+_.count-M.start);else++Z,R[Z]=_}R.length=Z+1;for(let N=0,M=R.length;N<M;N++){let _=R[N];J.bufferSubData(W,_.start*U.BYTES_PER_ELEMENT,U,_.start,_.count)}K.clearUpdateRanges()}K.onUploadCallback()}function E(D){if(D.isInterleavedBufferAttribute)D=D.data;return $.get(D)}function Y(D){if(D.isInterleavedBufferAttribute)D=D.data;let K=$.get(D);if(K)J.deleteBuffer(K.buffer),$.delete(D)}function X(D,K){if(D.isInterleavedBufferAttribute)D=D.data;if(D.isGLBufferAttribute){let U=$.get(D);if(!U||U.version<D.version)$.set(D,{buffer:D.buffer,type:D.type,bytesPerElement:D.elementSize,version:D.version});return}let W=$.get(D);if(W===void 0)$.set(D,H(D,K));else if(W.version<D.version){if(W.size!==D.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Q(W.buffer,D,K),W.version=D.version}}return{get:E,remove:Y,update:X}}var oQ=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aQ=`#ifdef USE_ALPHAHASH
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
#endif`,rQ=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tQ=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eQ=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$5=`#ifdef USE_AOMAP
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
#endif`,H5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q5=`#ifdef USE_BATCHING
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
#endif`,E5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K5=`#ifdef USE_IRIDESCENCE
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
#endif`,W5=`#ifdef USE_BUMPMAP
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
#endif`,Z5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,q5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O5=`#define PI 3.141592653589793
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
} // validated`,M5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L5=`vec3 transformedNormal = objectNormal;
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
#endif`,B5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A5="gl_FragColor = linearToOutputTexel( gl_FragColor );",V5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z5=`#ifdef USE_ENVMAP
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
#endif`,P5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C5=`#ifdef USE_ENVMAP
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
#endif`,T5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S5=`#ifdef USE_ENVMAP
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
#endif`,j5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v5=`#ifdef USE_GRADIENTMAP
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
}`,y5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p5=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l5=`#ifdef USE_ENVMAP
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
#endif`,d5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n5=`PhysicalMaterial material;
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
#endif`,i5=`uniform sampler2D dfgLUT;
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
}`,s5=`
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
#endif`,o5=`#if defined( RE_IndirectDiffuse )
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
#endif`,a5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r5=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YE=`#if defined( USE_POINTS_UV )
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
#endif`,XE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fE=`float getShadowMask() {
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
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$Y=`#include <common>
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
}`,HY=`#if DEPTH_PACKING == 3200
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
}`,QY=`#define DISTANCE
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
}`,EY=`#define DISTANCE
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
}`,YY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DY=`uniform float scale;
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
}`,KY=`uniform vec3 diffuse;
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
}`,WY=`#include <common>
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
}`,ZY=`uniform vec3 diffuse;
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
}`,GY=`#define LAMBERT
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
}`,UY=`#define LAMBERT
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
}`,kY=`#define MATCAP
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
}`,RY=`#define MATCAP
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
}`,FY=`#define NORMAL
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
}`,NY=`#define NORMAL
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
}`,qY=`#define PHONG
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
}`,OY=`#define PHONG
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
}`,MY=`#define STANDARD
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
}`,LY=`#define STANDARD
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
}`,BY=`#define TOON
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
}`,_Y=`#define TOON
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
}`,IY=`uniform float size;
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
}`,wY=`uniform vec3 diffuse;
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
}`,AY=`#include <common>
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
}`,VY=`uniform vec3 color;
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
}`,zY=`uniform float rotation;
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
}`,PY=`uniform vec3 diffuse;
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
}`,b0={alphahash_fragment:oQ,alphahash_pars_fragment:aQ,alphamap_fragment:rQ,alphamap_pars_fragment:tQ,alphatest_fragment:eQ,alphatest_pars_fragment:J5,aomap_fragment:$5,aomap_pars_fragment:H5,batching_pars_vertex:Q5,batching_vertex:E5,begin_vertex:Y5,beginnormal_vertex:X5,bsdfs:D5,iridescence_fragment:K5,bumpmap_pars_fragment:W5,clipping_planes_fragment:Z5,clipping_planes_pars_fragment:G5,clipping_planes_pars_vertex:U5,clipping_planes_vertex:k5,color_fragment:R5,color_pars_fragment:F5,color_pars_vertex:N5,color_vertex:q5,common:O5,cube_uv_reflection_fragment:M5,defaultnormal_vertex:L5,displacementmap_pars_vertex:B5,displacementmap_vertex:_5,emissivemap_fragment:I5,emissivemap_pars_fragment:w5,colorspace_fragment:A5,colorspace_pars_fragment:V5,envmap_fragment:z5,envmap_common_pars_fragment:P5,envmap_pars_fragment:C5,envmap_pars_vertex:T5,envmap_physical_pars_fragment:l5,envmap_vertex:S5,fog_vertex:j5,fog_pars_vertex:h5,fog_fragment:f5,fog_pars_fragment:b5,gradientmap_pars_fragment:v5,lightmap_pars_fragment:y5,lights_lambert_fragment:x5,lights_lambert_pars_fragment:g5,lights_pars_begin:p5,lights_toon_fragment:d5,lights_toon_pars_fragment:m5,lights_phong_fragment:u5,lights_phong_pars_fragment:c5,lights_physical_fragment:n5,lights_physical_pars_fragment:i5,lights_fragment_begin:s5,lights_fragment_maps:o5,lights_fragment_end:a5,lightprobes_pars_fragment:r5,logdepthbuf_fragment:t5,logdepthbuf_pars_fragment:e5,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:$E,map_fragment:HE,map_pars_fragment:QE,map_particle_fragment:EE,map_particle_pars_fragment:YE,metalnessmap_fragment:XE,metalnessmap_pars_fragment:DE,morphinstance_vertex:KE,morphcolor_vertex:WE,morphnormal_vertex:ZE,morphtarget_pars_vertex:GE,morphtarget_vertex:UE,normal_fragment_begin:kE,normal_fragment_maps:RE,normal_pars_fragment:FE,normal_pars_vertex:NE,normal_vertex:qE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:_E,opaque_fragment:IE,packing:wE,premultiplied_alpha_fragment:AE,project_vertex:VE,dithering_fragment:zE,dithering_pars_fragment:PE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:jE,shadowmap_vertex:hE,shadowmask_pars_fragment:fE,skinbase_vertex:bE,skinning_pars_vertex:vE,skinning_vertex:yE,skinnormal_vertex:xE,specularmap_fragment:gE,specularmap_pars_fragment:pE,tonemapping_fragment:lE,tonemapping_pars_fragment:dE,transmission_fragment:mE,transmission_pars_fragment:uE,uv_pars_fragment:cE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:rE,backgroundCube_frag:tE,cube_vert:eE,cube_frag:JY,depth_vert:$Y,depth_frag:HY,distance_vert:QY,distance_frag:EY,equirect_vert:YY,equirect_frag:XY,linedashed_vert:DY,linedashed_frag:KY,meshbasic_vert:WY,meshbasic_frag:ZY,meshlambert_vert:GY,meshlambert_frag:UY,meshmatcap_vert:kY,meshmatcap_frag:RY,meshnormal_vert:FY,meshnormal_frag:NY,meshphong_vert:qY,meshphong_frag:OY,meshphysical_vert:MY,meshphysical_frag:LY,meshtoon_vert:BY,meshtoon_frag:_Y,points_vert:IY,points_frag:wY,shadow_vert:AY,shadow_frag:VY,sprite_vert:zY,sprite_frag:PY},D0={common:{diffuse:{value:new i0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new T0}},envmap:{envMap:{value:null},envMapRotation:{value:new T0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new T0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new T0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new T0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new T0},normalScale:{value:new a0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new T0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new T0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new T0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new T0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new i0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new i0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0},uvTransform:{value:new T0}},sprite:{diffuse:{value:new i0(16777215)},opacity:{value:1},center:{value:new a0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}}},QJ={basic:{uniforms:A1([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:A1([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new i0(0)},envMapIntensity:{value:1}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:A1([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new i0(0)},specular:{value:new i0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:A1([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new i0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:A1([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new i0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:A1([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:A1([D0.points,D0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:A1([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:A1([D0.common,D0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:A1([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:A1([D0.sprite,D0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new T0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new T0}},vertexShader:b0.backgroundCube_vert,fragmentShader:b0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distance:{uniforms:A1([D0.common,D0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:b0.distance_vert,fragmentShader:b0.distance_frag},shadow:{uniforms:A1([D0.lights,D0.fog,{color:{value:new i0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};QJ.physical={uniforms:A1([QJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new T0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new T0},clearcoatNormalScale:{value:new a0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new T0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new T0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new T0},sheen:{value:0},sheenColor:{value:new i0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new T0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new T0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new T0},transmissionSamplerSize:{value:new a0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new T0},attenuationDistance:{value:0},attenuationColor:{value:new i0(0)},specularColor:{value:new i0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new T0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new T0},anisotropyVector:{value:new a0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new T0}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};var v8={r:0,b:0,g:0},CY=new G1,iH=new T0;iH.set(-1,0,0,0,1,0,0,0,1);function TY(J,$,H,Q,E,Y){let X=new i0(0),D=E===!0?0:1,K,W,U=null,R=0,Z=null;function N(B){let A=B.isScene===!0?B.background:null;if(A&&A.isTexture){let w=B.backgroundBlurriness>0;A=$.get(A,w)}return A}function M(B){let A=!1,w=N(B);if(w===null)G(X,D);else if(w&&w.isColor)G(w,1),A=!0;let T=J.xr.getEnvironmentBlendMode();if(T==="additive")H.buffers.color.setClear(0,0,0,1,Y);else if(T==="alpha-blend")H.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||A)H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function _(B,A){let w=N(A);if(w&&(w.isCubeTexture||w.mapping===C7)){if(W===void 0)W=new j1(new q7(1,1,1),new h1({name:"BackgroundCubeMaterial",uniforms:lJ(QJ.backgroundCube.uniforms),vertexShader:QJ.backgroundCube.vertexShader,fragmentShader:QJ.backgroundCube.fragmentShader,side:T1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),W.geometry.deleteAttribute("normal"),W.geometry.deleteAttribute("uv"),W.onBeforeRender=function(T,z,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(W.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Q.update(W);if(W.material.uniforms.envMap.value=w,W.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,W.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,W.material.uniforms.backgroundRotation.value.setFromMatrix4(CY.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)W.material.uniforms.backgroundRotation.value.premultiply(iH);if(W.material.toneMapped=l0.getTransfer(w.colorSpace)!==Q1,U!==w||R!==w.version||Z!==J.toneMapping)W.material.needsUpdate=!0,U=w,R=w.version,Z=J.toneMapping;W.layers.enableAll(),B.unshift(W,W.geometry,W.material,0,0,null)}else if(w&&w.isTexture){if(K===void 0)K=new j1(new v7(2,2),new h1({name:"BackgroundMaterial",uniforms:lJ(QJ.background.uniforms),vertexShader:QJ.background.vertexShader,fragmentShader:QJ.background.fragmentShader,side:Z7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),K.geometry.deleteAttribute("normal"),Object.defineProperty(K.material,"map",{get:function(){return this.uniforms.t2D.value}}),Q.update(K);if(K.material.uniforms.t2D.value=w,K.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,K.material.toneMapped=l0.getTransfer(w.colorSpace)!==Q1,w.matrixAutoUpdate===!0)w.updateMatrix();if(K.material.uniforms.uvTransform.value.copy(w.matrix),U!==w||R!==w.version||Z!==J.toneMapping)K.material.needsUpdate=!0,U=w,R=w.version,Z=J.toneMapping;K.layers.enableAll(),B.unshift(K,K.geometry,K.material,0,0,null)}}function G(B,A){B.getRGB(v8,F$(J)),H.buffers.color.setClear(v8.r,v8.g,v8.b,A,Y)}function k(){if(W!==void 0)W.geometry.dispose(),W.material.dispose(),W=void 0;if(K!==void 0)K.geometry.dispose(),K.material.dispose(),K=void 0}return{getClearColor:function(){return X},setClearColor:function(B,A=1){X.set(B),D=A,G(X,D)},getClearAlpha:function(){return D},setClearAlpha:function(B){D=B,G(X,D)},render:M,addToRenderList:_,dispose:k}}function SY(J,$){let H=J.getParameter(J.MAX_VERTEX_ATTRIBS),Q={},E=Z(null),Y=E,X=!1;function D(V,l,s,f,m){let x=!1,p=R(V,f,s,l);if(Y!==p)Y=p,W(Y.object);if(x=N(V,f,s,m),x)M(V,f,s,m);if(m!==null)$.update(m,J.ELEMENT_ARRAY_BUFFER);if(x||X){if(X=!1,w(V,l,s,f),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(m).buffer)}}function K(){return J.createVertexArray()}function W(V){return J.bindVertexArray(V)}function U(V){return J.deleteVertexArray(V)}function R(V,l,s,f){let m=f.wireframe===!0,x=Q[l.id];if(x===void 0)x={},Q[l.id]=x;let p=V.isInstancedMesh===!0?V.id:0,a=x[p];if(a===void 0)a={},x[p]=a;let $0=a[s.id];if($0===void 0)$0={},a[s.id]=$0;let k0=$0[m];if(k0===void 0)k0=Z(K()),$0[m]=k0;return k0}function Z(V){let l=[],s=[],f=[];for(let m=0;m<H;m++)l[m]=0,s[m]=0,f[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:s,attributeDivisors:f,object:V,attributes:{},index:null}}function N(V,l,s,f){let m=Y.attributes,x=l.attributes,p=0,a=s.getAttributes();for(let $0 in a)if(a[$0].location>=0){let w0=m[$0],O0=x[$0];if(O0===void 0){if($0==="instanceMatrix"&&V.instanceMatrix)O0=V.instanceMatrix;if($0==="instanceColor"&&V.instanceColor)O0=V.instanceColor}if(w0===void 0)return!0;if(w0.attribute!==O0)return!0;if(O0&&w0.data!==O0.data)return!0;p++}if(Y.attributesNum!==p)return!0;if(Y.index!==f)return!0;return!1}function M(V,l,s,f){let m={},x=l.attributes,p=0,a=s.getAttributes();for(let $0 in a)if(a[$0].location>=0){let w0=x[$0];if(w0===void 0){if($0==="instanceMatrix"&&V.instanceMatrix)w0=V.instanceMatrix;if($0==="instanceColor"&&V.instanceColor)w0=V.instanceColor}let O0={};if(O0.attribute=w0,w0&&w0.data)O0.data=w0.data;m[$0]=O0,p++}Y.attributes=m,Y.attributesNum=p,Y.index=f}function _(){let V=Y.newAttributes;for(let l=0,s=V.length;l<s;l++)V[l]=0}function G(V){k(V,0)}function k(V,l){let{newAttributes:s,enabledAttributes:f,attributeDivisors:m}=Y;if(s[V]=1,f[V]===0)J.enableVertexAttribArray(V),f[V]=1;if(m[V]!==l)J.vertexAttribDivisor(V,l),m[V]=l}function B(){let{newAttributes:V,enabledAttributes:l}=Y;for(let s=0,f=l.length;s<f;s++)if(l[s]!==V[s])J.disableVertexAttribArray(s),l[s]=0}function A(V,l,s,f,m,x,p){if(p===!0)J.vertexAttribIPointer(V,l,s,m,x);else J.vertexAttribPointer(V,l,s,f,m,x)}function w(V,l,s,f){_();let m=f.attributes,x=s.getAttributes(),p=l.defaultAttributeValues;for(let a in x){let $0=x[a];if($0.location>=0){let k0=m[a];if(k0===void 0){if(a==="instanceMatrix"&&V.instanceMatrix)k0=V.instanceMatrix;if(a==="instanceColor"&&V.instanceColor)k0=V.instanceColor}if(k0!==void 0){let{normalized:w0,itemSize:O0}=k0,s0=$.get(k0);if(s0===void 0)continue;let{buffer:g0,type:n,bytesPerElement:G0}=s0,L0=n===J.INT||n===J.UNSIGNED_INT||k0.gpuType===B9;if(k0.isInterleavedBufferAttribute){let U0=k0.data,A0=U0.stride,n0=k0.offset;if(U0.isInstancedInterleavedBuffer){for(let v0=0;v0<$0.locationSize;v0++)k($0.location+v0,U0.meshPerAttribute);if(V.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let v0=0;v0<$0.locationSize;v0++)G($0.location+v0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let v0=0;v0<$0.locationSize;v0++)A($0.location+v0,O0/$0.locationSize,n,w0,A0*G0,(n0+O0/$0.locationSize*v0)*G0,L0)}else{if(k0.isInstancedBufferAttribute){for(let U0=0;U0<$0.locationSize;U0++)k($0.location+U0,k0.meshPerAttribute);if(V.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=k0.meshPerAttribute*k0.count}else for(let U0=0;U0<$0.locationSize;U0++)G($0.location+U0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let U0=0;U0<$0.locationSize;U0++)A($0.location+U0,O0/$0.locationSize,n,w0,O0*G0,O0/$0.locationSize*U0*G0,L0)}}else if(p!==void 0){let w0=p[a];if(w0!==void 0)switch(w0.length){case 2:J.vertexAttrib2fv($0.location,w0);break;case 3:J.vertexAttrib3fv($0.location,w0);break;case 4:J.vertexAttrib4fv($0.location,w0);break;default:J.vertexAttrib1fv($0.location,w0)}}}}B()}function T(){I();for(let V in Q){let l=Q[V];for(let s in l){let f=l[s];for(let m in f){let x=f[m];for(let p in x)U(x[p].object),delete x[p];delete f[m]}}delete Q[V]}}function z(V){if(Q[V.id]===void 0)return;let l=Q[V.id];for(let s in l){let f=l[s];for(let m in f){let x=f[m];for(let p in x)U(x[p].object),delete x[p];delete f[m]}}delete Q[V.id]}function C(V){for(let l in Q){let s=Q[l];for(let f in s){let m=s[f];if(m[V.id]===void 0)continue;let x=m[V.id];for(let p in x)U(x[p].object),delete x[p];delete m[V.id]}}}function O(V){for(let l in Q){let s=Q[l],f=V.isInstancedMesh===!0?V.id:0,m=s[f];if(m===void 0)continue;for(let x in m){let p=m[x];for(let a in p)U(p[a].object),delete p[a];delete m[x]}if(delete s[f],Object.keys(s).length===0)delete Q[l]}}function I(){if(u(),X=!0,Y===E)return;Y=E,W(Y.object)}function u(){E.geometry=null,E.program=null,E.wireframe=!1}return{setup:D,reset:I,resetDefaultState:u,dispose:T,releaseStatesOfGeometry:z,releaseStatesOfObject:O,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:G,disableUnusedAttributes:B}}function jY(J,$,H){let Q;function E(K){Q=K}function Y(K,W){J.drawArrays(Q,K,W),H.update(W,Q,1)}function X(K,W,U){if(U===0)return;J.drawArraysInstanced(Q,K,W,U),H.update(W,Q,U)}function D(K,W,U){if(U===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Q,K,0,W,0,U);let Z=0;for(let N=0;N<U;N++)Z+=W[N];H.update(Z,Q,1)}this.setMode=E,this.render=Y,this.renderInstances=X,this.renderMultiDraw=D}function hY(J,$,H,Q){let E;function Y(){if(E!==void 0)return E;if($.has("EXT_texture_filter_anisotropic")===!0){let C=$.get("EXT_texture_filter_anisotropic");E=J.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else E=0;return E}function X(C){if(C!==$J&&Q.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function D(C){let O=C===UJ&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(C!==o1&&Q.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==GJ&&!O)return!1;return!0}function K(C){if(C==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let W=H.precision!==void 0?H.precision:"highp",U=K(W);if(U!==W)z0("WebGLRenderer:",W,"not supported, using",U,"instead."),W=U;let R=H.logarithmicDepthBuffer===!0,Z=H.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(H.reversedDepthBuffer===!0&&Z===!1)z0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let N=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=J.getParameter(J.MAX_TEXTURE_SIZE),G=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),k=J.getParameter(J.MAX_VERTEX_ATTRIBS),B=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),w=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=J.getParameter(J.MAX_SAMPLES),z=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:K,textureFormatReadable:X,textureTypeReadable:D,precision:W,logarithmicDepthBuffer:R,reversedDepthBuffer:Z,maxTextures:N,maxVertexTextures:M,maxTextureSize:_,maxCubemapSize:G,maxAttributes:k,maxVertexUniforms:B,maxVaryings:A,maxFragmentUniforms:w,maxSamples:T,samples:z}}function fY(J){let $=this,H=null,Q=0,E=!1,Y=!1,X=new WJ,D=new T0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(R,Z){let N=R.length!==0||Z||Q!==0||E;return E=Z,Q=R.length,N},this.beginShadows=function(){Y=!0,U(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(R,Z){H=U(R,Z,0)},this.setState=function(R,Z,N){let{clippingPlanes:M,clipIntersection:_,clipShadows:G}=R,k=J.get(R);if(!E||M===null||M.length===0||Y&&!G)if(Y)U(null);else W();else{let B=Y?0:Q,A=B*4,w=k.clippingState||null;K.value=w,w=U(M,Z,A,N);for(let T=0;T!==A;++T)w[T]=H[T];k.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=B}};function W(){if(K.value!==H)K.value=H,K.needsUpdate=Q>0;$.numPlanes=Q,$.numIntersection=0}function U(R,Z,N,M){let _=R!==null?R.length:0,G=null;if(_!==0){if(G=K.value,M!==!0||G===null){let k=N+_*4,B=Z.matrixWorldInverse;if(D.getNormalMatrix(B),G===null||G.length<k)G=new Float32Array(k);for(let A=0,w=N;A!==_;++A,w+=4)X.copy(R[A]).applyMatrix4(B,D),X.normal.toArray(G,w),G[w+3]=X.constant}K.value=G,K.needsUpdate=!0}return $.numPlanes=_,$.numIntersection=0,G}}var PJ=4,wH=[0.125,0.215,0.35,0.446,0.526,0.582],cJ=20,bY=256,g7=new b8,AH=new i0,b$=null,v$=0,y$=0,x$=!1,vY=new v;class l${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,H=0.1,Q=100,E={}){let{size:Y=256,position:X=vY}=E;b$=this._renderer.getRenderTarget(),v$=this._renderer.getActiveCubeFace(),y$=this._renderer.getActiveMipmapLevel(),x$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Y);let D=this._allocateTargets();if(D.depthBuffer=!0,this._sceneToCubeUV(J,H,Q,D,X),$>0)this._blur(D,0,0,$);return this._applyPMREM(D),this._cleanup(D),D}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=PH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=zH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(b$,v$,y$),this._renderer.xr.enabled=x$,J.scissorTest=!1,O7(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===k7||J.mapping===fJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);b$=this._renderer.getRenderTarget(),v$=this._renderer.getActiveCubeFace(),y$=this._renderer.getActiveMipmapLevel(),x$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let H=$||this._allocateTargets();return this._textureToCubeUV(J,H),this._applyPMREM(H),this._cleanup(H),H}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,H={magFilter:S1,minFilter:S1,generateMipmaps:!1,type:UJ,format:$J,colorSpace:E$,depthBuffer:!1},Q=VH(J,$,H);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=VH(J,$,H);let{_lodMax:E}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yY(E)),this._blurMaterial=gY(E,J,$),this._ggxMaterial=xY(E,J,$)}return Q}_compileMaterial(J){let $=new j1(new d1,J);this._renderer.compile($,g7)}_sceneToCubeUV(J,$,H,Q,E){let D=new z1(90,1,$,H),K=[1,-1,1,1,1,1],W=[1,1,1,-1,-1,-1],U=this._renderer,R=U.autoClear,Z=U.toneMapping;if(U.getClearColor(AH),U.toneMapping=s1,U.autoClear=!1,U.state.buffers.depth.getReversed())U.setRenderTarget(Q),U.clearDepth(),U.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j1(new q7,new N7({name:"PMREM.Background",side:T1,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,_=M.material,G=!1,k=J.background;if(k){if(k.isColor)_.color.copy(k),J.background=null,G=!0}else _.color.copy(AH),G=!0;for(let B=0;B<6;B++){let A=B%3;if(A===0)D.up.set(0,K[B],0),D.position.set(E.x,E.y,E.z),D.lookAt(E.x+W[B],E.y,E.z);else if(A===1)D.up.set(0,0,K[B]),D.position.set(E.x,E.y,E.z),D.lookAt(E.x,E.y+W[B],E.z);else D.up.set(0,K[B],0),D.position.set(E.x,E.y,E.z),D.lookAt(E.x,E.y,E.z+W[B]);let w=this._cubeSize;if(O7(Q,A*w,B>2?w:0,w,w),U.setRenderTarget(Q),G)U.render(M,D);U.render(J,D)}U.toneMapping=Z,U.autoClear=R,J.background=k}_textureToCubeUV(J,$){let H=this._renderer,Q=J.mapping===k7||J.mapping===fJ;if(Q){if(this._cubemapMaterial===null)this._cubemapMaterial=PH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=zH();let E=Q?this._cubemapMaterial:this._equirectMaterial,Y=this._lodMeshes[0];Y.material=E;let X=E.uniforms;X.envMap.value=J;let D=this._cubeSize;O7($,0,0,3*D,2*D),H.setRenderTarget($),H.render(Y,g7)}_applyPMREM(J){let $=this._renderer,H=$.autoClear;$.autoClear=!1;let Q=this._lodMeshes.length;for(let E=1;E<Q;E++)this._applyGGXFilter(J,E-1,E);$.autoClear=H}_applyGGXFilter(J,$,H){let Q=this._renderer,E=this._pingPongRenderTarget,Y=this._ggxMaterial,X=this._lodMeshes[H];X.material=Y;let D=Y.uniforms,K=H/(this._lodMeshes.length-1),W=$/(this._lodMeshes.length-1),U=Math.sqrt(K*K-W*W),R=0+K*1.25,Z=U*R,{_lodMax:N}=this,M=this._sizeLods[H],_=3*M*(H>N-PJ?H-N+PJ:0),G=4*(this._cubeSize-M);D.envMap.value=J.texture,D.roughness.value=Z,D.mipInt.value=N-$,O7(E,_,G,3*M,2*M),Q.setRenderTarget(E),Q.render(X,g7),D.envMap.value=E.texture,D.roughness.value=0,D.mipInt.value=N-H,O7(J,_,G,3*M,2*M),Q.setRenderTarget(J),Q.render(X,g7)}_blur(J,$,H,Q,E){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,$,H,Q,"latitudinal",E),this._halfBlur(Y,J,H,H,Q,"longitudinal",E)}_halfBlur(J,$,H,Q,E,Y,X){let D=this._renderer,K=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")P0("blur direction must be either latitudinal or longitudinal!");let W=3,U=this._lodMeshes[Q];U.material=K;let R=K.uniforms,Z=this._sizeLods[H]-1,N=isFinite(E)?Math.PI/(2*Z):2*Math.PI/(2*cJ-1),M=E/N,_=isFinite(E)?1+Math.floor(W*M):cJ;if(_>cJ)z0(`sigmaRadians, ${E}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${cJ}`);let G=[],k=0;for(let z=0;z<cJ;++z){let C=z/M,O=Math.exp(-C*C/2);if(G.push(O),z===0)k+=O;else if(z<_)k+=2*O}for(let z=0;z<G.length;z++)G[z]=G[z]/k;if(R.envMap.value=J.texture,R.samples.value=_,R.weights.value=G,R.latitudinal.value=Y==="latitudinal",X)R.poleAxis.value=X;let{_lodMax:B}=this;R.dTheta.value=N,R.mipInt.value=B-H;let A=this._sizeLods[Q],w=3*A*(Q>B-PJ?Q-B+PJ:0),T=4*(this._cubeSize-A);O7($,w,T,3*A,2*A),D.setRenderTarget($),D.render(U,g7)}}function yY(J){let $=[],H=[],Q=[],E=J,Y=J-PJ+1+wH.length;for(let X=0;X<Y;X++){let D=Math.pow(2,E);$.push(D);let K=1/D;if(X>J-PJ)K=wH[X-J+PJ-1];else if(X===0)K=0;H.push(K);let W=1/(D-2),U=-W,R=1+W,Z=[U,U,R,U,R,R,U,U,R,R,U,R],N=6,M=6,_=3,G=2,k=1,B=new Float32Array(_*M*N),A=new Float32Array(G*M*N),w=new Float32Array(k*M*N);for(let z=0;z<N;z++){let C=z%3*2/3-1,O=z>2?0:-1,I=[C,O,0,C+0.6666666666666666,O,0,C+0.6666666666666666,O+1,0,C,O,0,C+0.6666666666666666,O+1,0,C,O+1,0];B.set(I,_*M*z),A.set(Z,G*M*z);let u=[z,z,z,z,z,z];w.set(u,k*M*z)}let T=new d1;if(T.setAttribute("position",new p1(B,_)),T.setAttribute("uv",new p1(A,G)),T.setAttribute("faceIndex",new p1(w,k)),Q.push(new j1(T,null)),E>PJ)E--}return{lodMeshes:Q,sizeLods:$,sigmas:H}}function VH(J,$,H){let Q=new l1(J,$,H);return Q.texture.mapping=C7,Q.texture.name="PMREM.cubeUv",Q.scissorTest=!0,Q}function O7(J,$,H,Q,E){J.viewport.set($,H,Q,E),J.scissor.set($,H,Q,E)}function xY(J,$,H){return new h1({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bY,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/H,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:x8(),fragmentShader:`

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
		`,blending:JJ,depthTest:!1,depthWrite:!1})}function gY(J,$,H){let Q=new Float32Array(cJ),E=new v(0,1,0);return new h1({name:"SphericalGaussianBlur",defines:{n:cJ,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/H,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Q},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:E}},vertexShader:x8(),fragmentShader:`

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
		`,blending:JJ,depthTest:!1,depthWrite:!1})}function zH(){return new h1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x8(),fragmentShader:`

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
		`,blending:JJ,depthTest:!1,depthWrite:!1})}function PH(){return new h1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x8(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:JJ,depthTest:!1,depthWrite:!1})}function x8(){return`

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
	`}class u$ extends l1{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let H={width:J,height:J,depth:1},Q=[H,H,H,H,H,H];this.texture=new S8(Q),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let H={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Q=new q7(5,5,5),E=new h1({name:"CubemapFromEquirect",uniforms:lJ(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,side:T1,blending:JJ});E.uniforms.tEquirect.value=$;let Y=new j1(Q,E),X=$.minFilter;if($.minFilter===bJ)$.minFilter=S1;return new C$(1,10,this).update(J,Y),$.minFilter=X,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,$=!0,H=!0,Q=!0){let E=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear($,H,Q);J.setRenderTarget(E)}}function pY(J){let $=new WeakMap,H=new WeakMap,Q=null;function E(Z,N=!1){if(Z===null||Z===void 0)return null;if(N)return X(Z);return Y(Z)}function Y(Z){if(Z&&Z.isTexture){let N=Z.mapping;if(N===k8||N===R8)if($.has(Z)){let M=$.get(Z).texture;return D(M,Z.mapping)}else{let M=Z.image;if(M&&M.height>0){let _=new u$(M.height);return _.fromEquirectangularTexture(J,Z),$.set(Z,_),Z.addEventListener("dispose",W),D(_.texture,Z.mapping)}else return null}}return Z}function X(Z){if(Z&&Z.isTexture){let N=Z.mapping,M=N===k8||N===R8,_=N===k7||N===fJ;if(M||_){let G=H.get(Z),k=G!==void 0?G.texture.pmremVersion:0;if(Z.isRenderTargetTexture&&Z.pmremVersion!==k){if(Q===null)Q=new l$(J);return G=M?Q.fromEquirectangular(Z,G):Q.fromCubemap(Z,G),G.texture.pmremVersion=Z.pmremVersion,H.set(Z,G),G.texture}else if(G!==void 0)return G.texture;else{let B=Z.image;if(M&&B&&B.height>0||_&&B&&K(B)){if(Q===null)Q=new l$(J);return G=M?Q.fromEquirectangular(Z):Q.fromCubemap(Z),G.texture.pmremVersion=Z.pmremVersion,H.set(Z,G),Z.addEventListener("dispose",U),G.texture}else return null}}}return Z}function D(Z,N){if(N===k8)Z.mapping=k7;else if(N===R8)Z.mapping=fJ;return Z}function K(Z){let N=0,M=6;for(let _=0;_<M;_++)if(Z[_]!==void 0)N++;return N===M}function W(Z){let N=Z.target;N.removeEventListener("dispose",W);let M=$.get(N);if(M!==void 0)$.delete(N),M.dispose()}function U(Z){let N=Z.target;N.removeEventListener("dispose",U);let M=H.get(N);if(M!==void 0)H.delete(N),M.dispose()}function R(){if($=new WeakMap,H=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:E,dispose:R}}function lY(J){let $={};function H(Q){if($[Q]!==void 0)return $[Q];let E=J.getExtension(Q);return $[Q]=E,E}return{has:function(Q){return H(Q)!==null},init:function(){H("EXT_color_buffer_float"),H("WEBGL_clip_cull_distance"),H("OES_texture_float_linear"),H("EXT_color_buffer_half_float"),H("WEBGL_multisampled_render_to_texture"),H("WEBGL_render_shared_exponent")},get:function(Q){let E=H(Q);if(E===null)G8("WebGLRenderer: "+Q+" extension not supported.");return E}}}function dY(J,$,H,Q){let E={},Y=new WeakMap;function X(R){let Z=R.target;if(Z.index!==null)$.remove(Z.index);for(let M in Z.attributes)$.remove(Z.attributes[M]);Z.removeEventListener("dispose",X),delete E[Z.id];let N=Y.get(Z);if(N)$.remove(N),Y.delete(Z);if(Q.releaseStatesOfGeometry(Z),Z.isInstancedBufferGeometry===!0)delete Z._maxInstanceCount;H.memory.geometries--}function D(R,Z){if(E[Z.id]===!0)return Z;return Z.addEventListener("dispose",X),E[Z.id]=!0,H.memory.geometries++,Z}function K(R){let Z=R.attributes;for(let N in Z)$.update(Z[N],J.ARRAY_BUFFER)}function W(R){let Z=[],N=R.index,M=R.attributes.position,_=0;if(M===void 0)return;if(N!==null){let B=N.array;_=N.version;for(let A=0,w=B.length;A<w;A+=3){let T=B[A+0],z=B[A+1],C=B[A+2];Z.push(T,z,z,C,C,T)}}else{let B=M.array;_=M.version;for(let A=0,w=B.length/3-1;A<w;A+=3){let T=A+0,z=A+1,C=A+2;Z.push(T,z,z,C,C,T)}}let G=new(M.count>=65535?C8:P8)(Z,1);G.version=_;let k=Y.get(R);if(k)$.remove(k);Y.set(R,G)}function U(R){let Z=Y.get(R);if(Z){let N=R.index;if(N!==null){if(Z.version<N.version)W(R)}}else W(R);return Y.get(R)}return{get:D,update:K,getWireframeAttribute:U}}function mY(J,$,H){let Q;function E(R){Q=R}let Y,X;function D(R){Y=R.type,X=R.bytesPerElement}function K(R,Z){J.drawElements(Q,Z,Y,R*X),H.update(Z,Q,1)}function W(R,Z,N){if(N===0)return;J.drawElementsInstanced(Q,Z,Y,R*X,N),H.update(Z,Q,N)}function U(R,Z,N){if(N===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Q,Z,0,Y,R,0,N);let _=0;for(let G=0;G<N;G++)_+=Z[G];H.update(_,Q,1)}this.setMode=E,this.setIndex=D,this.render=K,this.renderInstances=W,this.renderMultiDraw=U}function uY(J){let $={geometries:0,textures:0},H={frame:0,calls:0,triangles:0,points:0,lines:0};function Q(Y,X,D){switch(H.calls++,X){case J.TRIANGLES:H.triangles+=D*(Y/3);break;case J.LINES:H.lines+=D*(Y/2);break;case J.LINE_STRIP:H.lines+=D*(Y-1);break;case J.LINE_LOOP:H.lines+=D*Y;break;case J.POINTS:H.points+=D*Y;break;default:P0("WebGLInfo: Unknown draw mode:",X);break}}function E(){H.calls=0,H.triangles=0,H.points=0,H.lines=0}return{memory:$,render:H,programs:null,autoReset:!0,reset:E,update:Q}}function cY(J,$,H){let Q=new WeakMap,E=new K1;function Y(X,D,K){let W=X.morphTargetInfluences,U=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,R=U!==void 0?U.length:0,Z=Q.get(D);if(Z===void 0||Z.count!==R){let I=function(){C.dispose(),Q.delete(D),D.removeEventListener("dispose",I)};if(Z!==void 0)Z.texture.dispose();let N=D.morphAttributes.position!==void 0,M=D.morphAttributes.normal!==void 0,_=D.morphAttributes.color!==void 0,G=D.morphAttributes.position||[],k=D.morphAttributes.normal||[],B=D.morphAttributes.color||[],A=0;if(N===!0)A=1;if(M===!0)A=2;if(_===!0)A=3;let w=D.attributes.position.count*A,T=1;if(w>$.maxTextureSize)T=Math.ceil(w/$.maxTextureSize),w=$.maxTextureSize;let z=new Float32Array(w*T*4*R),C=new A8(z,w,T,R);C.type=GJ,C.needsUpdate=!0;let O=A*4;for(let u=0;u<R;u++){let V=G[u],l=k[u],s=B[u],f=w*T*4*u;for(let m=0;m<V.count;m++){let x=m*O;if(N===!0)E.fromBufferAttribute(V,m),z[f+x+0]=E.x,z[f+x+1]=E.y,z[f+x+2]=E.z,z[f+x+3]=0;if(M===!0)E.fromBufferAttribute(l,m),z[f+x+4]=E.x,z[f+x+5]=E.y,z[f+x+6]=E.z,z[f+x+7]=0;if(_===!0)E.fromBufferAttribute(s,m),z[f+x+8]=E.x,z[f+x+9]=E.y,z[f+x+10]=E.z,z[f+x+11]=s.itemSize===4?E.w:1}}Z={count:R,texture:C,size:new a0(w,T)},Q.set(D,Z),D.addEventListener("dispose",I)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",X.morphTexture,H);else{let N=0;for(let _=0;_<W.length;_++)N+=W[_];let M=D.morphTargetsRelative?1:1-N;K.getUniforms().setValue(J,"morphTargetBaseInfluence",M),K.getUniforms().setValue(J,"morphTargetInfluences",W)}K.getUniforms().setValue(J,"morphTargetsTexture",Z.texture,H),K.getUniforms().setValue(J,"morphTargetsTextureSize",Z.size)}return{update:Y}}function nY(J,$,H,Q,E){let Y=new WeakMap;function X(W){let U=E.render.frame,R=W.geometry,Z=$.get(W,R);if(Y.get(Z)!==U)$.update(Z),Y.set(Z,U);if(W.isInstancedMesh){if(W.hasEventListener("dispose",K)===!1)W.addEventListener("dispose",K);if(Y.get(W)!==U){if(H.update(W.instanceMatrix,J.ARRAY_BUFFER),W.instanceColor!==null)H.update(W.instanceColor,J.ARRAY_BUFFER);Y.set(W,U)}}if(W.isSkinnedMesh){let N=W.skeleton;if(Y.get(N)!==U)N.update(),Y.set(N,U)}return Z}function D(){Y=new WeakMap}function K(W){let U=W.target;if(U.removeEventListener("dispose",K),Q.releaseStatesOfObject(U),H.remove(U.instanceMatrix),U.instanceColor!==null)H.remove(U.instanceColor)}return{update:X,dispose:D}}var iY={[R9]:"LINEAR_TONE_MAPPING",[F9]:"REINHARD_TONE_MAPPING",[N9]:"CINEON_TONE_MAPPING",[q9]:"ACES_FILMIC_TONE_MAPPING",[M9]:"AGX_TONE_MAPPING",[L9]:"NEUTRAL_TONE_MAPPING",[O9]:"CUSTOM_TONE_MAPPING"};function sY(J,$,H,Q,E){let Y=new l1($,H,{type:J,depthBuffer:Q,stencilBuffer:E,depthTexture:Q?new zJ($,H):void 0}),X=new l1($,H,{type:UJ,depthBuffer:!1,stencilBuffer:!1}),D=new d1;D.setAttribute("position",new M1([-1,3,0,-1,-1,0,3,-1,0],3)),D.setAttribute("uv",new M1([0,2,0,0,2,0],2));let K=new N$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),W=new j1(D,K),U=new b8(-1,1,1,-1,0,1),R=null,Z=null,N=!1,M,_=null,G=[],k=!1;this.setSize=function(B,A){Y.setSize(B,A),X.setSize(B,A);for(let w=0;w<G.length;w++){let T=G[w];if(T.setSize)T.setSize(B,A)}},this.setEffects=function(B){G=B,k=G.length>0&&G[0].isRenderPass===!0;let{width:A,height:w}=Y;for(let T=0;T<G.length;T++){let z=G[T];if(z.setSize)z.setSize(A,w)}},this.begin=function(B,A){if(N)return!1;if(B.toneMapping===s1&&G.length===0)return!1;if(_=A,A!==null){let{width:w,height:T}=A;if(Y.width!==w||Y.height!==T)this.setSize(w,T)}if(k===!1)B.setRenderTarget(Y);return M=B.toneMapping,B.toneMapping=s1,!0},this.hasRenderPass=function(){return k},this.end=function(B,A){B.toneMapping=M,N=!0;let w=Y,T=X;for(let z=0;z<G.length;z++){let C=G[z];if(C.enabled===!1)continue;if(C.render(B,T,w,A),C.needsSwap!==!1){let O=w;w=T,T=O}}if(R!==B.outputColorSpace||Z!==B.toneMapping){if(R=B.outputColorSpace,Z=B.toneMapping,K.defines={},l0.getTransfer(R)===Q1)K.defines.SRGB_TRANSFER="";let z=iY[Z];if(z)K.defines[z]="";K.needsUpdate=!0}K.uniforms.tDiffuse.value=w.texture,B.setRenderTarget(_),B.render(W,U),_=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){if(Y.depthTexture)Y.depthTexture.dispose();Y.dispose(),X.dispose(),D.dispose(),K.dispose()}}var sH=new w1,d$=new zJ(1,1),oH=new A8,aH=new G$,rH=new S8,CH=[],TH=[],SH=new Float32Array(16),jH=new Float32Array(9),hH=new Float32Array(4);function M7(J,$,H){let Q=J[0];if(Q<=0||Q>0)return J;let E=$*H,Y=CH[E];if(Y===void 0)Y=new Float32Array(E),CH[E]=Y;if($!==0){Q.toArray(Y,0);for(let X=1,D=0;X!==$;++X)D+=H,J[X].toArray(Y,D)}return Y}function F1(J,$){if(J.length!==$.length)return!1;for(let H=0,Q=J.length;H<Q;H++)if(J[H]!==$[H])return!1;return!0}function N1(J,$){for(let H=0,Q=$.length;H<Q;H++)J[H]=$[H]}function g8(J,$){let H=TH[$];if(H===void 0)H=new Int32Array($),TH[$]=H;for(let Q=0;Q!==$;++Q)H[Q]=J.allocateTextureUnit();return H}function oY(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1f(this.addr,$),H[0]=$}function aY(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(F1(H,$))return;J.uniform2fv(this.addr,$),N1(H,$)}}function rY(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else if($.r!==void 0){if(H[0]!==$.r||H[1]!==$.g||H[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),H[0]=$.r,H[1]=$.g,H[2]=$.b}else{if(F1(H,$))return;J.uniform3fv(this.addr,$),N1(H,$)}}function tY(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(F1(H,$))return;J.uniform4fv(this.addr,$),N1(H,$)}}function eY(J,$){let H=this.cache,Q=$.elements;if(Q===void 0){if(F1(H,$))return;J.uniformMatrix2fv(this.addr,!1,$),N1(H,$)}else{if(F1(H,Q))return;hH.set(Q),J.uniformMatrix2fv(this.addr,!1,hH),N1(H,Q)}}function JX(J,$){let H=this.cache,Q=$.elements;if(Q===void 0){if(F1(H,$))return;J.uniformMatrix3fv(this.addr,!1,$),N1(H,$)}else{if(F1(H,Q))return;jH.set(Q),J.uniformMatrix3fv(this.addr,!1,jH),N1(H,Q)}}function $X(J,$){let H=this.cache,Q=$.elements;if(Q===void 0){if(F1(H,$))return;J.uniformMatrix4fv(this.addr,!1,$),N1(H,$)}else{if(F1(H,Q))return;SH.set(Q),J.uniformMatrix4fv(this.addr,!1,SH),N1(H,Q)}}function HX(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1i(this.addr,$),H[0]=$}function QX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(F1(H,$))return;J.uniform2iv(this.addr,$),N1(H,$)}}function EX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else{if(F1(H,$))return;J.uniform3iv(this.addr,$),N1(H,$)}}function YX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(F1(H,$))return;J.uniform4iv(this.addr,$),N1(H,$)}}function XX(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1ui(this.addr,$),H[0]=$}function DX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(F1(H,$))return;J.uniform2uiv(this.addr,$),N1(H,$)}}function KX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else{if(F1(H,$))return;J.uniform3uiv(this.addr,$),N1(H,$)}}function WX(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(F1(H,$))return;J.uniform4uiv(this.addr,$),N1(H,$)}}function ZX(J,$,H){let Q=this.cache,E=H.allocateTextureUnit();if(Q[0]!==E)J.uniform1i(this.addr,E),Q[0]=E;let Y;if(this.type===J.SAMPLER_2D_SHADOW)d$.compareFunction=H.isReversedDepthBuffer()?w8:I8,Y=d$;else Y=sH;H.setTexture2D($||Y,E)}function GX(J,$,H){let Q=this.cache,E=H.allocateTextureUnit();if(Q[0]!==E)J.uniform1i(this.addr,E),Q[0]=E;H.setTexture3D($||aH,E)}function UX(J,$,H){let Q=this.cache,E=H.allocateTextureUnit();if(Q[0]!==E)J.uniform1i(this.addr,E),Q[0]=E;H.setTextureCube($||rH,E)}function kX(J,$,H){let Q=this.cache,E=H.allocateTextureUnit();if(Q[0]!==E)J.uniform1i(this.addr,E),Q[0]=E;H.setTexture2DArray($||oH,E)}function RX(J){switch(J){case 5126:return oY;case 35664:return aY;case 35665:return rY;case 35666:return tY;case 35674:return eY;case 35675:return JX;case 35676:return $X;case 5124:case 35670:return HX;case 35667:case 35671:return QX;case 35668:case 35672:return EX;case 35669:case 35673:return YX;case 5125:return XX;case 36294:return DX;case 36295:return KX;case 36296:return WX;case 35678:case 36198:case 36298:case 36306:case 35682:return ZX;case 35679:case 36299:case 36307:return GX;case 35680:case 36300:case 36308:case 36293:return UX;case 36289:case 36303:case 36311:case 36292:return kX}}function FX(J,$){J.uniform1fv(this.addr,$)}function NX(J,$){let H=M7($,this.size,2);J.uniform2fv(this.addr,H)}function qX(J,$){let H=M7($,this.size,3);J.uniform3fv(this.addr,H)}function OX(J,$){let H=M7($,this.size,4);J.uniform4fv(this.addr,H)}function MX(J,$){let H=M7($,this.size,4);J.uniformMatrix2fv(this.addr,!1,H)}function LX(J,$){let H=M7($,this.size,9);J.uniformMatrix3fv(this.addr,!1,H)}function BX(J,$){let H=M7($,this.size,16);J.uniformMatrix4fv(this.addr,!1,H)}function _X(J,$){J.uniform1iv(this.addr,$)}function IX(J,$){J.uniform2iv(this.addr,$)}function wX(J,$){J.uniform3iv(this.addr,$)}function AX(J,$){J.uniform4iv(this.addr,$)}function VX(J,$){J.uniform1uiv(this.addr,$)}function zX(J,$){J.uniform2uiv(this.addr,$)}function PX(J,$){J.uniform3uiv(this.addr,$)}function CX(J,$){J.uniform4uiv(this.addr,$)}function TX(J,$,H){let Q=this.cache,E=$.length,Y=g8(H,E);if(!F1(Q,Y))J.uniform1iv(this.addr,Y),N1(Q,Y);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=d$;else X=sH;for(let D=0;D!==E;++D)H.setTexture2D($[D]||X,Y[D])}function SX(J,$,H){let Q=this.cache,E=$.length,Y=g8(H,E);if(!F1(Q,Y))J.uniform1iv(this.addr,Y),N1(Q,Y);for(let X=0;X!==E;++X)H.setTexture3D($[X]||aH,Y[X])}function jX(J,$,H){let Q=this.cache,E=$.length,Y=g8(H,E);if(!F1(Q,Y))J.uniform1iv(this.addr,Y),N1(Q,Y);for(let X=0;X!==E;++X)H.setTextureCube($[X]||rH,Y[X])}function hX(J,$,H){let Q=this.cache,E=$.length,Y=g8(H,E);if(!F1(Q,Y))J.uniform1iv(this.addr,Y),N1(Q,Y);for(let X=0;X!==E;++X)H.setTexture2DArray($[X]||oH,Y[X])}function fX(J){switch(J){case 5126:return FX;case 35664:return NX;case 35665:return qX;case 35666:return OX;case 35674:return MX;case 35675:return LX;case 35676:return BX;case 5124:case 35670:return _X;case 35667:case 35671:return IX;case 35668:case 35672:return wX;case 35669:case 35673:return AX;case 5125:return VX;case 36294:return zX;case 36295:return PX;case 36296:return CX;case 35678:case 36198:case 36298:case 36306:case 35682:return TX;case 35679:case 36299:case 36307:return SX;case 35680:case 36300:case 36308:case 36293:return jX;case 36289:case 36303:case 36311:case 36292:return hX}}class tH{constructor(J,$,H){this.id=J,this.addr=H,this.cache=[],this.type=$.type,this.setValue=RX($.type)}}class eH{constructor(J,$,H){this.id=J,this.addr=H,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=fX($.type)}}class JQ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,H){let Q=this.seq;for(let E=0,Y=Q.length;E!==Y;++E){let X=Q[E];X.setValue(J,$[X.id],H)}}}var g$=/(\w+)(\])?(\[|\.)?/g;function fH(J,$){J.seq.push($),J.map[$.id]=$}function bX(J,$,H){let Q=J.name,E=Q.length;g$.lastIndex=0;while(!0){let Y=g$.exec(Q),X=g$.lastIndex,D=Y[1],K=Y[2]==="]",W=Y[3];if(K)D=D|0;if(W===void 0||W==="["&&X+2===E){fH(H,W===void 0?new tH(D,J,$):new eH(D,J,$));break}else{let R=H.map[D];if(R===void 0)R=new JQ(D),fH(H,R);H=R}}}class d7{constructor(J,$){this.seq=[],this.map={};let H=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let Y=0;Y<H;++Y){let X=J.getActiveUniform($,Y),D=J.getUniformLocation($,X.name);bX(X,D,this)}let Q=[],E=[];for(let Y of this.seq)if(Y.type===J.SAMPLER_2D_SHADOW||Y.type===J.SAMPLER_CUBE_SHADOW||Y.type===J.SAMPLER_2D_ARRAY_SHADOW)Q.push(Y);else E.push(Y);if(Q.length>0)this.seq=Q.concat(E)}setValue(J,$,H,Q){let E=this.map[$];if(E!==void 0)E.setValue(J,H,Q)}setOptional(J,$,H){let Q=$[H];if(Q!==void 0)this.setValue(J,H,Q)}static upload(J,$,H,Q){for(let E=0,Y=$.length;E!==Y;++E){let X=$[E],D=H[X.id];if(D.needsUpdate!==!1)X.setValue(J,D.value,Q)}}static seqWithValue(J,$){let H=[];for(let Q=0,E=J.length;Q!==E;++Q){let Y=J[Q];if(Y.id in $)H.push(Y)}return H}}function bH(J,$,H){let Q=J.createShader($);return J.shaderSource(Q,H),J.compileShader(Q),Q}var vX=37297,yX=0;function xX(J,$){let H=J.split(`
`),Q=[],E=Math.max($-6,0),Y=Math.min($+6,H.length);for(let X=E;X<Y;X++){let D=X+1;Q.push(`${D===$?">":" "} ${D}: ${H[X]}`)}return Q.join(`
`)}var vH=new T0;function gX(J){l0._getMatrix(vH,l0.workingColorSpace,J);let $=`mat3( ${vH.elements.map((H)=>H.toFixed(4))} )`;switch(l0.getTransfer(J)){case Y$:return[$,"LinearTransferOETF"];case Q1:return[$,"sRGBTransferOETF"];default:return z0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function yH(J,$,H){let Q=J.getShaderParameter($,J.COMPILE_STATUS),Y=(J.getShaderInfoLog($)||"").trim();if(Q&&Y==="")return"";let X=/ERROR: 0:(\d+)/.exec(Y);if(X){let D=parseInt(X[1]);return H.toUpperCase()+`

`+Y+`

`+xX(J.getShaderSource($),D)}else return Y}function pX(J,$){let H=gX($);return[`vec4 ${J}( vec4 value ) {`,`	return ${H[1]}( vec4( value.rgb * ${H[0]}, value.a ) );`,"}"].join(`
`)}var lX={[R9]:"Linear",[F9]:"Reinhard",[N9]:"Cineon",[q9]:"ACESFilmic",[M9]:"AgX",[L9]:"Neutral",[O9]:"Custom"};function dX(J,$){let H=lX[$];if(H===void 0)return z0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+H+"ToneMapping( color ); }"}var y8=new v;function mX(){l0.getLuminanceCoefficients(y8);let J=y8.x.toFixed(4),$=y8.y.toFixed(4),H=y8.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${H} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function uX(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(l7).join(`
`)}function cX(J){let $=[];for(let H in J){let Q=J[H];if(Q===!1)continue;$.push("#define "+H+" "+Q)}return $.join(`
`)}function nX(J,$){let H={},Q=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let E=0;E<Q;E++){let Y=J.getActiveAttrib($,E),X=Y.name,D=1;if(Y.type===J.FLOAT_MAT2)D=2;if(Y.type===J.FLOAT_MAT3)D=3;if(Y.type===J.FLOAT_MAT4)D=4;H[X]={type:Y.type,location:J.getAttribLocation($,X),locationSize:D}}return H}function l7(J){return J!==""}function xH(J,$){let H=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,H).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function gH(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var iX=/^[ \t]*#include +<([\w\d./]+)>/gm;function m$(J){return J.replace(iX,oX)}var sX=new Map;function oX(J,$){let H=b0[$];if(H===void 0){let Q=sX.get($);if(Q!==void 0)H=b0[Q],z0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Q);else throw Error("Can not resolve #include <"+$+">")}return m$(H)}var aX=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pH(J){return J.replace(aX,rX)}function rX(J,$,H,Q){let E="";for(let Y=parseInt($);Y<parseInt(H);Y++)E+=Q.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return E}function lH(J){let $=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}var tX={[z7]:"SHADOWMAP_TYPE_PCF",[W7]:"SHADOWMAP_TYPE_VSM"};function eX(J){return tX[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JD={[k7]:"ENVMAP_TYPE_CUBE",[fJ]:"ENVMAP_TYPE_CUBE",[C7]:"ENVMAP_TYPE_CUBE_UV"};function $D(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return JD[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var HD={[fJ]:"ENVMAP_MODE_REFRACTION"};function QD(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return HD[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ED={[o6]:"ENVMAP_BLENDING_MULTIPLY",[a6]:"ENVMAP_BLENDING_MIX",[r6]:"ENVMAP_BLENDING_ADD"};function YD(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return ED[J.combine]||"ENVMAP_BLENDING_NONE"}function XD(J){let $=J.envMapCubeUVHeight;if($===null)return null;let H=Math.log2($)-2,Q=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:Q,maxMip:H}}function DD(J,$,H,Q){let E=J.getContext(),Y=H.defines,X=H.vertexShader,D=H.fragmentShader,K=eX(H),W=$D(H),U=QD(H),R=YD(H),Z=XD(H),N=uX(H),M=cX(Y),_=E.createProgram(),G,k,B=H.glslVersion?"#version "+H.glslVersion+`
`:"";if(H.isRawShaderMaterial){if(G=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,M].filter(l7).join(`
`),G.length>0)G+=`
`;if(k=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,M].filter(l7).join(`
`),k.length>0)k+=`
`}else G=[lH(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,M,H.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",H.batching?"#define USE_BATCHING":"",H.batchingColor?"#define USE_BATCHING_COLOR":"",H.instancing?"#define USE_INSTANCING":"",H.instancingColor?"#define USE_INSTANCING_COLOR":"",H.instancingMorph?"#define USE_INSTANCING_MORPH":"",H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.map?"#define USE_MAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+U:"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.displacementMap?"#define USE_DISPLACEMENTMAP":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.mapUv?"#define MAP_UV "+H.mapUv:"",H.alphaMapUv?"#define ALPHAMAP_UV "+H.alphaMapUv:"",H.lightMapUv?"#define LIGHTMAP_UV "+H.lightMapUv:"",H.aoMapUv?"#define AOMAP_UV "+H.aoMapUv:"",H.emissiveMapUv?"#define EMISSIVEMAP_UV "+H.emissiveMapUv:"",H.bumpMapUv?"#define BUMPMAP_UV "+H.bumpMapUv:"",H.normalMapUv?"#define NORMALMAP_UV "+H.normalMapUv:"",H.displacementMapUv?"#define DISPLACEMENTMAP_UV "+H.displacementMapUv:"",H.metalnessMapUv?"#define METALNESSMAP_UV "+H.metalnessMapUv:"",H.roughnessMapUv?"#define ROUGHNESSMAP_UV "+H.roughnessMapUv:"",H.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+H.anisotropyMapUv:"",H.clearcoatMapUv?"#define CLEARCOATMAP_UV "+H.clearcoatMapUv:"",H.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+H.clearcoatNormalMapUv:"",H.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+H.clearcoatRoughnessMapUv:"",H.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+H.iridescenceMapUv:"",H.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+H.iridescenceThicknessMapUv:"",H.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+H.sheenColorMapUv:"",H.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+H.sheenRoughnessMapUv:"",H.specularMapUv?"#define SPECULARMAP_UV "+H.specularMapUv:"",H.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+H.specularColorMapUv:"",H.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+H.specularIntensityMapUv:"",H.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+H.transmissionMapUv:"",H.thicknessMapUv?"#define THICKNESSMAP_UV "+H.thicknessMapUv:"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexNormals?"#define HAS_NORMAL":"",H.vertexColors?"#define USE_COLOR":"",H.vertexAlphas?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.flatShading?"#define FLAT_SHADED":"",H.skinning?"#define USE_SKINNING":"",H.morphTargets?"#define USE_MORPHTARGETS":"",H.morphNormals&&H.flatShading===!1?"#define USE_MORPHNORMALS":"",H.morphColors?"#define USE_MORPHCOLORS":"",H.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+H.morphTextureStride:"",H.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+H.morphTargetsCount:"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+K:"",H.sizeAttenuation?"#define USE_SIZEATTENUATION":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",H.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(l7).join(`
`),k=[lH(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,M,H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",H.map?"#define USE_MAP":"",H.matcap?"#define USE_MATCAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+W:"",H.envMap?"#define "+U:"",H.envMap?"#define "+R:"",Z?"#define CUBEUV_TEXEL_WIDTH "+Z.texelWidth:"",Z?"#define CUBEUV_TEXEL_HEIGHT "+Z.texelHeight:"",Z?"#define CUBEUV_MAX_MIP "+Z.maxMip+".0":"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoat?"#define USE_CLEARCOAT":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.dispersion?"#define USE_DISPERSION":"",H.iridescence?"#define USE_IRIDESCENCE":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaTest?"#define USE_ALPHATEST":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.sheen?"#define USE_SHEEN":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexColors||H.instancingColor?"#define USE_COLOR":"",H.vertexAlphas||H.batchingColor?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.gradientMap?"#define USE_GRADIENTMAP":"",H.flatShading?"#define FLAT_SHADED":"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+K:"",H.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",H.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",H.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",H.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",H.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",H.toneMapping!==s1?"#define TONE_MAPPING":"",H.toneMapping!==s1?b0.tonemapping_pars_fragment:"",H.toneMapping!==s1?dX("toneMapping",H.toneMapping):"",H.dithering?"#define DITHERING":"",H.opaque?"#define OPAQUE":"",b0.colorspace_pars_fragment,pX("linearToOutputTexel",H.outputColorSpace),mX(),H.useDepthPacking?"#define DEPTH_PACKING "+H.depthPacking:"",`
`].filter(l7).join(`
`);if(X=m$(X),X=xH(X,H),X=gH(X,H),D=m$(D),D=xH(D,H),D=gH(D,H),X=pH(X),D=pH(D),H.isRawShaderMaterial!==!0)B=`#version 300 es
`,G=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,k=["#define varying in",H.glslVersion===X$?"":"layout(location = 0) out highp vec4 pc_fragColor;",H.glslVersion===X$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+k;let A=B+G+X,w=B+k+D,T=bH(E,E.VERTEX_SHADER,A),z=bH(E,E.FRAGMENT_SHADER,w);if(E.attachShader(_,T),E.attachShader(_,z),H.index0AttributeName!==void 0)E.bindAttribLocation(_,0,H.index0AttributeName);else if(H.morphTargets===!0)E.bindAttribLocation(_,0,"position");E.linkProgram(_);function C(V){if(J.debug.checkShaderErrors){let l=E.getProgramInfoLog(_)||"",s=E.getShaderInfoLog(T)||"",f=E.getShaderInfoLog(z)||"",m=l.trim(),x=s.trim(),p=f.trim(),a=!0,$0=!0;if(E.getProgramParameter(_,E.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(E,_,T,z);else{let k0=yH(E,T,"vertex"),w0=yH(E,z,"fragment");P0("THREE.WebGLProgram: Shader Error "+E.getError()+" - VALIDATE_STATUS "+E.getProgramParameter(_,E.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+m+`
`+k0+`
`+w0)}else if(m!=="")z0("WebGLProgram: Program Info Log:",m);else if(x===""||p==="")$0=!1;if($0)V.diagnostics={runnable:a,programLog:m,vertexShader:{log:x,prefix:G},fragmentShader:{log:p,prefix:k}}}E.deleteShader(T),E.deleteShader(z),O=new d7(E,_),I=nX(E,_)}let O;this.getUniforms=function(){if(O===void 0)C(this);return O};let I;this.getAttributes=function(){if(I===void 0)C(this);return I};let u=H.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(u===!1)u=E.getProgramParameter(_,vX);return u},this.destroy=function(){Q.releaseStatesOfProgram(this),E.deleteProgram(_),this.program=void 0},this.type=H.shaderType,this.name=H.shaderName,this.id=yX++,this.cacheKey=$,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=z,this}var KD=0;class $Q{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:H}=J,Q=this._getShaderStage($),E=this._getShaderStage(H),Y=this._getShaderCacheForMaterial(J);if(Y.has(Q)===!1)Y.add(Q),Q.usedTimes++;if(Y.has(E)===!1)Y.add(E),E.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let H of $)if(H.usedTimes--,H.usedTimes===0)this.shaderCache.delete(H.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,H=$.get(J);if(H===void 0)H=new Set,$.set(J,H);return H}_getShaderStage(J){let $=this.shaderCache,H=$.get(J);if(H===void 0)H=new HQ(J),$.set(J,H);return H}}class HQ{constructor(J){this.id=KD++,this.code=J,this.usedTimes=0}}function WD(J){return J===xJ||J===B8||J===_8}function ZD(J,$,H,Q,E,Y){let X=new V8,D=new $Q,K=new Set,W=[],U=new Map,R=Q.logarithmicDepthBuffer,Z=Q.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(O){if(K.add(O),O===0)return"uv";return`uv${O}`}function _(O,I,u,V,l,s){let f=V.fog,m=l.geometry,x=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?V.environment:null,p=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,a=$.get(O.envMap||x,p),$0=!!a&&a.mapping===C7?a.image.height:null,k0=N[O.type];if(O.precision!==null){if(Z=Q.getMaxPrecision(O.precision),Z!==O.precision)z0("WebGLProgram.getParameters:",O.precision,"not supported, using",Z,"instead.")}let w0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,O0=w0!==void 0?w0.length:0,s0=0;if(m.morphAttributes.position!==void 0)s0=1;if(m.morphAttributes.normal!==void 0)s0=2;if(m.morphAttributes.color!==void 0)s0=3;let g0,n,G0,L0;if(k0){let S0=QJ[k0];g0=S0.vertexShader,n=S0.fragmentShader}else g0=O.vertexShader,n=O.fragmentShader,D.update(O),G0=D.getVertexShaderID(O),L0=D.getFragmentShaderID(O);let U0=J.getRenderTarget(),A0=J.state.buffers.depth.getReversed(),n0=l.isInstancedMesh===!0,v0=l.isBatchedMesh===!0,p0=!!O.map,e0=!!O.matcap,J1=!!a,f0=!!O.aoMap,O1=!!O.lightMap,L1=!!O.bumpMap,U1=!!O.normalMap,S=!!O.displacementMap,V1=!!O.emissiveMap,d0=!!O.metalnessMap,c0=!!O.roughnessMap,W0=O.anisotropy>0,X1=O.clearcoat>0,V0=O.dispersion>0,L=O.iridescence>0,F=O.sheen>0,h=O.transmission>0,o=W0&&!!O.anisotropyMap,r=X1&&!!O.clearcoatMap,e=X1&&!!O.clearcoatNormalMap,Y0=X1&&!!O.clearcoatRoughnessMap,d=L&&!!O.iridescenceMap,i=L&&!!O.iridescenceThicknessMap,E0=F&&!!O.sheenColorMap,N0=F&&!!O.sheenRoughnessMap,H0=!!O.specularMap,X0=!!O.specularColorMap,C0=!!O.specularIntensityMap,h0=h&&!!O.transmissionMap,y0=h&&!!O.thicknessMap,P=!!O.gradientMap,Q0=!!O.alphaMap,c=O.alphaTest>0,J0=!!O.alphaHash,q0=!!O.extensions,t=s1;if(O.toneMapped){if(U0===null||U0.isXRRenderTarget===!0)t=J.toneMapping}let B0={shaderID:k0,shaderType:O.type,shaderName:O.name,vertexShader:g0,fragmentShader:n,defines:O.defines,customVertexShaderID:G0,customFragmentShaderID:L0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:Z,batching:v0,batchingColor:v0&&l._colorsTexture!==null,instancing:n0,instancingColor:n0&&l.instanceColor!==null,instancingMorph:n0&&l.morphTexture!==null,outputColorSpace:U0===null?J.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:p0,matcap:e0,envMap:J1,envMapMode:J1&&a.mapping,envMapCubeUVHeight:$0,aoMap:f0,lightMap:O1,bumpMap:L1,normalMap:U1,displacementMap:S,emissiveMap:V1,normalMapObjectSpace:U1&&O.normalMapType===KH,normalMapTangentSpace:U1&&O.normalMapType===Q$,packedNormalMap:U1&&O.normalMapType===Q$&&WD(O.normalMap.format),metalnessMap:d0,roughnessMap:c0,anisotropy:W0,anisotropyMap:o,clearcoat:X1,clearcoatMap:r,clearcoatNormalMap:e,clearcoatRoughnessMap:Y0,dispersion:V0,iridescence:L,iridescenceMap:d,iridescenceThicknessMap:i,sheen:F,sheenColorMap:E0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:X0,specularIntensityMap:C0,transmission:h,transmissionMap:h0,thicknessMap:y0,gradientMap:P,opaque:O.transparent===!1&&O.blending===P7&&O.alphaToCoverage===!1,alphaMap:Q0,alphaTest:c,alphaHash:J0,combine:O.combine,mapUv:p0&&M(O.map.channel),aoMapUv:f0&&M(O.aoMap.channel),lightMapUv:O1&&M(O.lightMap.channel),bumpMapUv:L1&&M(O.bumpMap.channel),normalMapUv:U1&&M(O.normalMap.channel),displacementMapUv:S&&M(O.displacementMap.channel),emissiveMapUv:V1&&M(O.emissiveMap.channel),metalnessMapUv:d0&&M(O.metalnessMap.channel),roughnessMapUv:c0&&M(O.roughnessMap.channel),anisotropyMapUv:o&&M(O.anisotropyMap.channel),clearcoatMapUv:r&&M(O.clearcoatMap.channel),clearcoatNormalMapUv:e&&M(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&M(O.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&M(O.iridescenceMap.channel),iridescenceThicknessMapUv:i&&M(O.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&M(O.sheenColorMap.channel),sheenRoughnessMapUv:N0&&M(O.sheenRoughnessMap.channel),specularMapUv:H0&&M(O.specularMap.channel),specularColorMapUv:X0&&M(O.specularColorMap.channel),specularIntensityMapUv:C0&&M(O.specularIntensityMap.channel),transmissionMapUv:h0&&M(O.transmissionMap.channel),thicknessMapUv:y0&&M(O.thicknessMap.channel),alphaMapUv:Q0&&M(O.alphaMap.channel),vertexTangents:!!m.attributes.tangent&&(U1||W0),vertexNormals:!!m.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!m.attributes.uv&&(p0||Q0),fog:!!f,useFog:O.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||m.attributes.normal===void 0&&U1===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:R,reversedDepthBuffer:A0,skinning:l.isSkinnedMesh===!0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:O0,morphTextureStride:s0,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:s.length,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&u.length>0,shadowMapType:J.shadowMap.type,toneMapping:t,decodeVideoTexture:p0&&O.map.isVideoTexture===!0&&l0.getTransfer(O.map.colorSpace)===Q1,decodeVideoTextureEmissive:V1&&O.emissiveMap.isVideoTexture===!0&&l0.getTransfer(O.emissiveMap.colorSpace)===Q1,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===e1,flipSided:O.side===T1,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:q0&&O.extensions.clipCullDistance===!0&&H.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q0&&O.extensions.multiDraw===!0||v0)&&H.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:H.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return B0.vertexUv1s=K.has(1),B0.vertexUv2s=K.has(2),B0.vertexUv3s=K.has(3),K.clear(),B0}function G(O){let I=[];if(O.shaderID)I.push(O.shaderID);else I.push(O.customVertexShaderID),I.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let u in O.defines)I.push(u),I.push(O.defines[u]);if(O.isRawShaderMaterial===!1)k(I,O),B(I,O),I.push(J.outputColorSpace);return I.push(O.customProgramCacheKey),I.join()}function k(O,I){O.push(I.precision),O.push(I.outputColorSpace),O.push(I.envMapMode),O.push(I.envMapCubeUVHeight),O.push(I.mapUv),O.push(I.alphaMapUv),O.push(I.lightMapUv),O.push(I.aoMapUv),O.push(I.bumpMapUv),O.push(I.normalMapUv),O.push(I.displacementMapUv),O.push(I.emissiveMapUv),O.push(I.metalnessMapUv),O.push(I.roughnessMapUv),O.push(I.anisotropyMapUv),O.push(I.clearcoatMapUv),O.push(I.clearcoatNormalMapUv),O.push(I.clearcoatRoughnessMapUv),O.push(I.iridescenceMapUv),O.push(I.iridescenceThicknessMapUv),O.push(I.sheenColorMapUv),O.push(I.sheenRoughnessMapUv),O.push(I.specularMapUv),O.push(I.specularColorMapUv),O.push(I.specularIntensityMapUv),O.push(I.transmissionMapUv),O.push(I.thicknessMapUv),O.push(I.combine),O.push(I.fogExp2),O.push(I.sizeAttenuation),O.push(I.morphTargetsCount),O.push(I.morphAttributeCount),O.push(I.numDirLights),O.push(I.numPointLights),O.push(I.numSpotLights),O.push(I.numSpotLightMaps),O.push(I.numHemiLights),O.push(I.numRectAreaLights),O.push(I.numDirLightShadows),O.push(I.numPointLightShadows),O.push(I.numSpotLightShadows),O.push(I.numSpotLightShadowsWithMaps),O.push(I.numLightProbes),O.push(I.shadowMapType),O.push(I.toneMapping),O.push(I.numClippingPlanes),O.push(I.numClipIntersection),O.push(I.depthPacking)}function B(O,I){if(X.disableAll(),I.instancing)X.enable(0);if(I.instancingColor)X.enable(1);if(I.instancingMorph)X.enable(2);if(I.matcap)X.enable(3);if(I.envMap)X.enable(4);if(I.normalMapObjectSpace)X.enable(5);if(I.normalMapTangentSpace)X.enable(6);if(I.clearcoat)X.enable(7);if(I.iridescence)X.enable(8);if(I.alphaTest)X.enable(9);if(I.vertexColors)X.enable(10);if(I.vertexAlphas)X.enable(11);if(I.vertexUv1s)X.enable(12);if(I.vertexUv2s)X.enable(13);if(I.vertexUv3s)X.enable(14);if(I.vertexTangents)X.enable(15);if(I.anisotropy)X.enable(16);if(I.alphaHash)X.enable(17);if(I.batching)X.enable(18);if(I.dispersion)X.enable(19);if(I.batchingColor)X.enable(20);if(I.gradientMap)X.enable(21);if(I.packedNormalMap)X.enable(22);if(I.vertexNormals)X.enable(23);if(O.push(X.mask),X.disableAll(),I.fog)X.enable(0);if(I.useFog)X.enable(1);if(I.flatShading)X.enable(2);if(I.logarithmicDepthBuffer)X.enable(3);if(I.reversedDepthBuffer)X.enable(4);if(I.skinning)X.enable(5);if(I.morphTargets)X.enable(6);if(I.morphNormals)X.enable(7);if(I.morphColors)X.enable(8);if(I.premultipliedAlpha)X.enable(9);if(I.shadowMapEnabled)X.enable(10);if(I.doubleSided)X.enable(11);if(I.flipSided)X.enable(12);if(I.useDepthPacking)X.enable(13);if(I.dithering)X.enable(14);if(I.transmission)X.enable(15);if(I.sheen)X.enable(16);if(I.opaque)X.enable(17);if(I.pointsUvs)X.enable(18);if(I.decodeVideoTexture)X.enable(19);if(I.decodeVideoTextureEmissive)X.enable(20);if(I.alphaToCoverage)X.enable(21);if(I.numLightProbeGrids>0)X.enable(22);O.push(X.mask)}function A(O){let I=N[O.type],u;if(I){let V=QJ[I];u=BH.clone(V.uniforms)}else u=O.uniforms;return u}function w(O,I){let u=U.get(I);if(u!==void 0)++u.usedTimes;else u=new DD(J,I,O,E),W.push(u),U.set(I,u);return u}function T(O){if(--O.usedTimes===0){let I=W.indexOf(O);W[I]=W[W.length-1],W.pop(),U.delete(O.cacheKey),O.destroy()}}function z(O){D.remove(O)}function C(){D.dispose()}return{getParameters:_,getProgramCacheKey:G,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:z,programs:W,dispose:C}}function GD(){let J=new WeakMap;function $(X){return J.has(X)}function H(X){let D=J.get(X);if(D===void 0)D={},J.set(X,D);return D}function Q(X){J.delete(X)}function E(X,D,K){J.get(X)[D]=K}function Y(){J=new WeakMap}return{has:$,get:H,remove:Q,update:E,dispose:Y}}function UD(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function dH(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function mH(){let J=[],$=0,H=[],Q=[],E=[];function Y(){$=0,H.length=0,Q.length=0,E.length=0}function X(Z){let N=0;if(Z.isInstancedMesh)N+=2;if(Z.isSkinnedMesh)N+=1;return N}function D(Z,N,M,_,G,k){let B=J[$];if(B===void 0)B={id:Z.id,object:Z,geometry:N,material:M,materialVariant:X(Z),groupOrder:_,renderOrder:Z.renderOrder,z:G,group:k},J[$]=B;else B.id=Z.id,B.object=Z,B.geometry=N,B.material=M,B.materialVariant=X(Z),B.groupOrder=_,B.renderOrder=Z.renderOrder,B.z=G,B.group=k;return $++,B}function K(Z,N,M,_,G,k){let B=D(Z,N,M,_,G,k);if(M.transmission>0)Q.push(B);else if(M.transparent===!0)E.push(B);else H.push(B)}function W(Z,N,M,_,G,k){let B=D(Z,N,M,_,G,k);if(M.transmission>0)Q.unshift(B);else if(M.transparent===!0)E.unshift(B);else H.unshift(B)}function U(Z,N){if(H.length>1)H.sort(Z||UD);if(Q.length>1)Q.sort(N||dH);if(E.length>1)E.sort(N||dH)}function R(){for(let Z=$,N=J.length;Z<N;Z++){let M=J[Z];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:H,transmissive:Q,transparent:E,init:Y,push:K,unshift:W,finish:R,sort:U}}function kD(){let J=new WeakMap;function $(Q,E){let Y=J.get(Q),X;if(Y===void 0)X=new mH,J.set(Q,[X]);else if(E>=Y.length)X=new mH,Y.push(X);else X=Y[E];return X}function H(){J=new WeakMap}return{get:$,dispose:H}}function RD(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let H;switch($.type){case"DirectionalLight":H={direction:new v,color:new i0};break;case"SpotLight":H={position:new v,direction:new v,color:new i0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":H={position:new v,color:new i0,distance:0,decay:0};break;case"HemisphereLight":H={direction:new v,skyColor:new i0,groundColor:new i0};break;case"RectAreaLight":H={color:new i0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[$.id]=H,H}}}function FD(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let H;switch($.type){case"DirectionalLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"SpotLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"PointLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=H,H}}}var ND=0;function qD(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function OD(J){let $=new RD,H=FD(),Q={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let W=0;W<9;W++)Q.probe.push(new v);let E=new v,Y=new G1,X=new G1;function D(W){let U=0,R=0,Z=0;for(let I=0;I<9;I++)Q.probe[I].set(0,0,0);let N=0,M=0,_=0,G=0,k=0,B=0,A=0,w=0,T=0,z=0,C=0;W.sort(qD);for(let I=0,u=W.length;I<u;I++){let V=W[I],l=V.color,s=V.intensity,f=V.distance,m=null;if(V.shadow&&V.shadow.map)if(V.shadow.map.texture.format===xJ)m=V.shadow.map.texture;else m=V.shadow.map.depthTexture||V.shadow.map.texture;if(V.isAmbientLight)U+=l.r*s,R+=l.g*s,Z+=l.b*s;else if(V.isLightProbe){for(let x=0;x<9;x++)Q.probe[x].addScaledVector(V.sh.coefficients[x],s);C++}else if(V.isDirectionalLight){let x=$.get(V);if(x.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let p=V.shadow,a=H.get(V);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,Q.directionalShadow[N]=a,Q.directionalShadowMap[N]=m,Q.directionalShadowMatrix[N]=V.shadow.matrix,B++}Q.directional[N]=x,N++}else if(V.isSpotLight){let x=$.get(V);x.position.setFromMatrixPosition(V.matrixWorld),x.color.copy(l).multiplyScalar(s),x.distance=f,x.coneCos=Math.cos(V.angle),x.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),x.decay=V.decay,Q.spot[_]=x;let p=V.shadow;if(V.map){if(Q.spotLightMap[T]=V.map,T++,p.updateMatrices(V),V.castShadow)z++}if(Q.spotLightMatrix[_]=p.matrix,V.castShadow){let a=H.get(V);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,Q.spotShadow[_]=a,Q.spotShadowMap[_]=m,w++}_++}else if(V.isRectAreaLight){let x=$.get(V);x.color.copy(l).multiplyScalar(s),x.halfWidth.set(V.width*0.5,0,0),x.halfHeight.set(0,V.height*0.5,0),Q.rectArea[G]=x,G++}else if(V.isPointLight){let x=$.get(V);if(x.color.copy(V.color).multiplyScalar(V.intensity),x.distance=V.distance,x.decay=V.decay,V.castShadow){let p=V.shadow,a=H.get(V);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,a.shadowCameraNear=p.camera.near,a.shadowCameraFar=p.camera.far,Q.pointShadow[M]=a,Q.pointShadowMap[M]=m,Q.pointShadowMatrix[M]=V.shadow.matrix,A++}Q.point[M]=x,M++}else if(V.isHemisphereLight){let x=$.get(V);x.skyColor.copy(V.color).multiplyScalar(s),x.groundColor.copy(V.groundColor).multiplyScalar(s),Q.hemi[k]=x,k++}}if(G>0)if(J.has("OES_texture_float_linear")===!0)Q.rectAreaLTC1=D0.LTC_FLOAT_1,Q.rectAreaLTC2=D0.LTC_FLOAT_2;else Q.rectAreaLTC1=D0.LTC_HALF_1,Q.rectAreaLTC2=D0.LTC_HALF_2;Q.ambient[0]=U,Q.ambient[1]=R,Q.ambient[2]=Z;let O=Q.hash;if(O.directionalLength!==N||O.pointLength!==M||O.spotLength!==_||O.rectAreaLength!==G||O.hemiLength!==k||O.numDirectionalShadows!==B||O.numPointShadows!==A||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==C)Q.directional.length=N,Q.spot.length=_,Q.rectArea.length=G,Q.point.length=M,Q.hemi.length=k,Q.directionalShadow.length=B,Q.directionalShadowMap.length=B,Q.pointShadow.length=A,Q.pointShadowMap.length=A,Q.spotShadow.length=w,Q.spotShadowMap.length=w,Q.directionalShadowMatrix.length=B,Q.pointShadowMatrix.length=A,Q.spotLightMatrix.length=w+T-z,Q.spotLightMap.length=T,Q.numSpotLightShadowsWithMaps=z,Q.numLightProbes=C,O.directionalLength=N,O.pointLength=M,O.spotLength=_,O.rectAreaLength=G,O.hemiLength=k,O.numDirectionalShadows=B,O.numPointShadows=A,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=C,Q.version=ND++}function K(W,U){let R=0,Z=0,N=0,M=0,_=0,G=U.matrixWorldInverse;for(let k=0,B=W.length;k<B;k++){let A=W[k];if(A.isDirectionalLight){let w=Q.directional[R];w.direction.setFromMatrixPosition(A.matrixWorld),E.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(E),w.direction.transformDirection(G),R++}else if(A.isSpotLight){let w=Q.spot[N];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(G),w.direction.setFromMatrixPosition(A.matrixWorld),E.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(E),w.direction.transformDirection(G),N++}else if(A.isRectAreaLight){let w=Q.rectArea[M];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(G),X.identity(),Y.copy(A.matrixWorld),Y.premultiply(G),X.extractRotation(Y),w.halfWidth.set(A.width*0.5,0,0),w.halfHeight.set(0,A.height*0.5,0),w.halfWidth.applyMatrix4(X),w.halfHeight.applyMatrix4(X),M++}else if(A.isPointLight){let w=Q.point[Z];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(G),Z++}else if(A.isHemisphereLight){let w=Q.hemi[_];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(G),_++}}}return{setup:D,setupView:K,state:Q}}function uH(J){let $=new OD(J),H=[],Q=[],E=[];function Y(Z){R.camera=Z,H.length=0,Q.length=0,E.length=0}function X(Z){H.push(Z)}function D(Z){Q.push(Z)}function K(Z){E.push(Z)}function W(){$.setup(H)}function U(Z){$.setupView(H,Z)}let R={lightsArray:H,shadowsArray:Q,lightProbeGridArray:E,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:Y,state:R,setupLights:W,setupLightsView:U,pushLight:X,pushShadow:D,pushLightProbeGrid:K}}function MD(J){let $=new WeakMap;function H(E,Y=0){let X=$.get(E),D;if(X===void 0)D=new uH(J),$.set(E,[D]);else if(Y>=X.length)D=new uH(J),X.push(D);else D=X[Y];return D}function Q(){$=new WeakMap}return{get:H,dispose:Q}}var LD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BD=`uniform sampler2D shadow_pass;
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
}`,_D=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],ID=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],cH=new G1,p7=new v,p$=new v;function wD(J,$,H){let Q=new T8,E=new a0,Y=new a0,X=new K1,D=new q$,K=new O$,W={},U=H.maxTextureSize,R={[Z7]:T1,[T1]:Z7,[e1]:e1},Z=new h1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new a0},radius:{value:4}},vertexShader:LD,fragmentShader:BD}),N=Z.clone();N.defines.HORIZONTAL_PASS=1;let M=new d1;M.setAttribute("position",new p1(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new j1(M,Z),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z7;let k=this.type;this.render=function(z,C,O){if(G.enabled===!1)return;if(G.autoUpdate===!1&&G.needsUpdate===!1)return;if(z.length===0)return;if(this.type===B6)z0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=z7;let I=J.getRenderTarget(),u=J.getActiveCubeFace(),V=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(JJ),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let s=k!==this.type;if(s)C.traverse(function(f){if(f.material)if(Array.isArray(f.material))f.material.forEach((m)=>m.needsUpdate=!0);else f.material.needsUpdate=!0});for(let f=0,m=z.length;f<m;f++){let x=z[f],p=x.shadow;if(p===void 0){z0("WebGLShadowMap:",x,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;E.copy(p.mapSize);let a=p.getFrameExtents();if(E.multiply(a),Y.copy(p.mapSize),E.x>U||E.y>U){if(E.x>U)Y.x=Math.floor(U/a.x),E.x=Y.x*a.x,p.mapSize.x=Y.x;if(E.y>U)Y.y=Math.floor(U/a.y),E.y=Y.y*a.y,p.mapSize.y=Y.y}let $0=J.state.buffers.depth.getReversed();if(p.camera._reversedDepth=$0,p.map===null||s===!0){if(p.map!==null){if(p.map.depthTexture!==null)p.map.depthTexture.dispose(),p.map.depthTexture=null;p.map.dispose()}if(this.type===W7){if(x.isPointLight){z0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new l1(E.x,E.y,{format:xJ,type:UJ,minFilter:S1,magFilter:S1,generateMipmaps:!1}),p.map.texture.name=x.name+".shadowMap",p.map.depthTexture=new zJ(E.x,E.y,GJ),p.map.depthTexture.name=x.name+".shadowMapDepth",p.map.depthTexture.format=vJ,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=AJ,p.map.depthTexture.magFilter=AJ}else{if(x.isPointLight)p.map=new u$(E.x),p.map.depthTexture=new R$(E.x,VJ);else p.map=new l1(E.x,E.y),p.map.depthTexture=new zJ(E.x,E.y,VJ);if(p.map.depthTexture.name=x.name+".shadowMap",p.map.depthTexture.format=vJ,this.type===z7)p.map.depthTexture.compareFunction=$0?w8:I8,p.map.depthTexture.minFilter=S1,p.map.depthTexture.magFilter=S1;else p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=AJ,p.map.depthTexture.magFilter=AJ}p.camera.updateProjectionMatrix()}let k0=p.map.isWebGLCubeRenderTarget?6:1;for(let w0=0;w0<k0;w0++){if(p.map.isWebGLCubeRenderTarget)J.setRenderTarget(p.map,w0),J.clear();else{if(w0===0)J.setRenderTarget(p.map),J.clear();let O0=p.getViewport(w0);X.set(Y.x*O0.x,Y.y*O0.y,Y.x*O0.z,Y.y*O0.w),l.viewport(X)}if(x.isPointLight){let{camera:O0,matrix:s0}=p,g0=x.distance||O0.far;if(g0!==O0.far)O0.far=g0,O0.updateProjectionMatrix();p7.setFromMatrixPosition(x.matrixWorld),O0.position.copy(p7),p$.copy(O0.position),p$.add(_D[w0]),O0.up.copy(ID[w0]),O0.lookAt(p$),O0.updateMatrixWorld(),s0.makeTranslation(-p7.x,-p7.y,-p7.z),cH.multiplyMatrices(O0.projectionMatrix,O0.matrixWorldInverse),p._frustum.setFromProjectionMatrix(cH,O0.coordinateSystem,O0.reversedDepth)}else p.updateMatrices(x);Q=p.getFrustum(),w(C,O,p.camera,x,this.type)}if(p.isPointLightShadow!==!0&&this.type===W7)B(p,O);p.needsUpdate=!1}k=this.type,G.needsUpdate=!1,J.setRenderTarget(I,u,V)};function B(z,C){let O=$.update(_);if(Z.defines.VSM_SAMPLES!==z.blurSamples)Z.defines.VSM_SAMPLES=z.blurSamples,N.defines.VSM_SAMPLES=z.blurSamples,Z.needsUpdate=!0,N.needsUpdate=!0;if(z.mapPass===null)z.mapPass=new l1(E.x,E.y,{format:xJ,type:UJ});Z.uniforms.shadow_pass.value=z.map.depthTexture,Z.uniforms.resolution.value=z.mapSize,Z.uniforms.radius.value=z.radius,J.setRenderTarget(z.mapPass),J.clear(),J.renderBufferDirect(C,null,O,Z,_,null),N.uniforms.shadow_pass.value=z.mapPass.texture,N.uniforms.resolution.value=z.mapSize,N.uniforms.radius.value=z.radius,J.setRenderTarget(z.map),J.clear(),J.renderBufferDirect(C,null,O,N,_,null)}function A(z,C,O,I){let u=null,V=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)u=V;else if(u=O.isPointLight===!0?K:D,J.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let l=u.uuid,s=C.uuid,f=W[l];if(f===void 0)f={},W[l]=f;let m=f[s];if(m===void 0)m=u.clone(),f[s]=m,C.addEventListener("dispose",T);u=m}if(u.visible=C.visible,u.wireframe=C.wireframe,I===W7)u.side=C.shadowSide!==null?C.shadowSide:C.side;else u.side=C.shadowSide!==null?C.shadowSide:R[C.side];if(u.alphaMap=C.alphaMap,u.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,u.map=C.map,u.clipShadows=C.clipShadows,u.clippingPlanes=C.clippingPlanes,u.clipIntersection=C.clipIntersection,u.displacementMap=C.displacementMap,u.displacementScale=C.displacementScale,u.displacementBias=C.displacementBias,u.wireframeLinewidth=C.wireframeLinewidth,u.linewidth=C.linewidth,O.isPointLight===!0&&u.isMeshDistanceMaterial===!0){let l=J.properties.get(u);l.light=O}return u}function w(z,C,O,I,u){if(z.visible===!1)return;if(z.layers.test(C.layers)&&(z.isMesh||z.isLine||z.isPoints)){if((z.castShadow||z.receiveShadow&&u===W7)&&(!z.frustumCulled||Q.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);let s=$.update(z),f=z.material;if(Array.isArray(f)){let m=s.groups;for(let x=0,p=m.length;x<p;x++){let a=m[x],$0=f[a.materialIndex];if($0&&$0.visible){let k0=A(z,$0,I,u);z.onBeforeShadow(J,z,C,O,s,k0,a),J.renderBufferDirect(O,null,s,k0,z,a),z.onAfterShadow(J,z,C,O,s,k0,a)}}}else if(f.visible){let m=A(z,f,I,u);z.onBeforeShadow(J,z,C,O,s,m,null),J.renderBufferDirect(O,null,s,m,z,null),z.onAfterShadow(J,z,C,O,s,m,null)}}}let l=z.children;for(let s=0,f=l.length;s<f;s++)w(l[s],C,O,I,u)}function T(z){z.target.removeEventListener("dispose",T);for(let O in W){let I=W[O],u=z.target.uuid;if(u in I)I[u].dispose(),delete I[u]}}}function AD(J,$){function H(){let P=!1,Q0=new K1,c=null,J0=new K1(0,0,0,0);return{setMask:function(q0){if(c!==q0&&!P)J.colorMask(q0,q0,q0,q0),c=q0},setLocked:function(q0){P=q0},setClear:function(q0,t,B0,S0,k1){if(k1===!0)q0*=S0,t*=S0,B0*=S0;if(Q0.set(q0,t,B0,S0),J0.equals(Q0)===!1)J.clearColor(q0,t,B0,S0),J0.copy(Q0)},reset:function(){P=!1,c=null,J0.set(-1,0,0,0)}}}function Q(){let P=!1,Q0=!1,c=null,J0=null,q0=null;return{setReversed:function(t){if(Q0!==t){let B0=$.get("EXT_clip_control");if(t)B0.clipControlEXT(B0.LOWER_LEFT_EXT,B0.ZERO_TO_ONE_EXT);else B0.clipControlEXT(B0.LOWER_LEFT_EXT,B0.NEGATIVE_ONE_TO_ONE_EXT);Q0=t;let S0=q0;q0=null,this.setClear(S0)}},getReversed:function(){return Q0},setTest:function(t){if(t)U0(J.DEPTH_TEST);else A0(J.DEPTH_TEST)},setMask:function(t){if(c!==t&&!P)J.depthMask(t),c=t},setFunc:function(t){if(Q0)t=MH[t];if(J0!==t){switch(t){case d6:J.depthFunc(J.NEVER);break;case m6:J.depthFunc(J.ALWAYS);break;case u6:J.depthFunc(J.LESS);break;case k9:J.depthFunc(J.LEQUAL);break;case c6:J.depthFunc(J.EQUAL);break;case n6:J.depthFunc(J.GEQUAL);break;case i6:J.depthFunc(J.GREATER);break;case s6:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=t}},setLocked:function(t){P=t},setClear:function(t){if(q0!==t){if(q0=t,Q0)t=1-t;J.clearDepth(t)}},reset:function(){P=!1,c=null,J0=null,q0=null,Q0=!1}}}function E(){let P=!1,Q0=null,c=null,J0=null,q0=null,t=null,B0=null,S0=null,k1=null;return{setTest:function(r0){if(!P)if(r0)U0(J.STENCIL_TEST);else A0(J.STENCIL_TEST)},setMask:function(r0){if(Q0!==r0&&!P)J.stencilMask(r0),Q0=r0},setFunc:function(r0,a1,u1){if(c!==r0||J0!==a1||q0!==u1)J.stencilFunc(r0,a1,u1),c=r0,J0=a1,q0=u1},setOp:function(r0,a1,u1){if(t!==r0||B0!==a1||S0!==u1)J.stencilOp(r0,a1,u1),t=r0,B0=a1,S0=u1},setLocked:function(r0){P=r0},setClear:function(r0){if(k1!==r0)J.clearStencil(r0),k1=r0},reset:function(){P=!1,Q0=null,c=null,J0=null,q0=null,t=null,B0=null,S0=null,k1=null}}}let Y=new H,X=new Q,D=new E,K=new WeakMap,W=new WeakMap,U={},R={},Z={},N=new WeakMap,M=[],_=null,G=!1,k=null,B=null,A=null,w=null,T=null,z=null,C=null,O=new i0(0,0,0),I=0,u=!1,V=null,l=null,s=null,f=null,m=null,x=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,a=0,$0=J.getParameter(J.VERSION);if($0.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec($0)[1]),p=a>=1;else if($0.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec($0)[1]),p=a>=2;let k0=null,w0={},O0=J.getParameter(J.SCISSOR_BOX),s0=J.getParameter(J.VIEWPORT),g0=new K1().fromArray(O0),n=new K1().fromArray(s0);function G0(P,Q0,c,J0){let q0=new Uint8Array(4),t=J.createTexture();J.bindTexture(P,t),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let B0=0;B0<c;B0++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(Q0,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,q0);else J.texImage2D(Q0+B0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,q0);return t}let L0={};L0[J.TEXTURE_2D]=G0(J.TEXTURE_2D,J.TEXTURE_2D,1),L0[J.TEXTURE_CUBE_MAP]=G0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),L0[J.TEXTURE_2D_ARRAY]=G0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),L0[J.TEXTURE_3D]=G0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Y.setClear(0,0,0,1),X.setClear(1),D.setClear(0),U0(J.DEPTH_TEST),X.setFunc(k9),L1(!1),U1(Z9),U0(J.CULL_FACE),f0(JJ);function U0(P){if(U[P]!==!0)J.enable(P),U[P]=!0}function A0(P){if(U[P]!==!1)J.disable(P),U[P]=!1}function n0(P,Q0){if(Z[P]!==Q0){if(J.bindFramebuffer(P,Q0),Z[P]=Q0,P===J.DRAW_FRAMEBUFFER)Z[J.FRAMEBUFFER]=Q0;if(P===J.FRAMEBUFFER)Z[J.DRAW_FRAMEBUFFER]=Q0;return!0}return!1}function v0(P,Q0){let c=M,J0=!1;if(P){if(c=N.get(Q0),c===void 0)c=[],N.set(Q0,c);let q0=P.textures;if(c.length!==q0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let t=0,B0=q0.length;t<B0;t++)c[t]=J.COLOR_ATTACHMENT0+t;c.length=q0.length,J0=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(c)}function p0(P){if(_!==P)return J.useProgram(P),_=P,!0;return!1}let e0={[U7]:J.FUNC_ADD,[I6]:J.FUNC_SUBTRACT,[w6]:J.FUNC_REVERSE_SUBTRACT};e0[A6]=J.MIN,e0[V6]=J.MAX;let J1={[z6]:J.ZERO,[P6]:J.ONE,[C6]:J.SRC_COLOR,[S6]:J.SRC_ALPHA,[y6]:J.SRC_ALPHA_SATURATE,[b6]:J.DST_COLOR,[h6]:J.DST_ALPHA,[T6]:J.ONE_MINUS_SRC_COLOR,[j6]:J.ONE_MINUS_SRC_ALPHA,[v6]:J.ONE_MINUS_DST_COLOR,[f6]:J.ONE_MINUS_DST_ALPHA,[x6]:J.CONSTANT_COLOR,[g6]:J.ONE_MINUS_CONSTANT_COLOR,[p6]:J.CONSTANT_ALPHA,[l6]:J.ONE_MINUS_CONSTANT_ALPHA};function f0(P,Q0,c,J0,q0,t,B0,S0,k1,r0){if(P===JJ){if(G===!0)A0(J.BLEND),G=!1;return}if(G===!1)U0(J.BLEND),G=!0;if(P!==_6){if(P!==k||r0!==u){if(B!==U7||T!==U7)J.blendEquation(J.FUNC_ADD),B=U7,T=U7;if(r0)switch(P){case P7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G7:J.blendFunc(J.ONE,J.ONE);break;case G9:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case U9:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:P0("WebGLState: Invalid blending: ",P);break}else switch(P){case P7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case G9:P0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U9:P0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:P0("WebGLState: Invalid blending: ",P);break}A=null,w=null,z=null,C=null,O.set(0,0,0),I=0,k=P,u=r0}return}if(q0=q0||Q0,t=t||c,B0=B0||J0,Q0!==B||q0!==T)J.blendEquationSeparate(e0[Q0],e0[q0]),B=Q0,T=q0;if(c!==A||J0!==w||t!==z||B0!==C)J.blendFuncSeparate(J1[c],J1[J0],J1[t],J1[B0]),A=c,w=J0,z=t,C=B0;if(S0.equals(O)===!1||k1!==I)J.blendColor(S0.r,S0.g,S0.b,k1),O.copy(S0),I=k1;k=P,u=!1}function O1(P,Q0){P.side===e1?A0(J.CULL_FACE):U0(J.CULL_FACE);let c=P.side===T1;if(Q0)c=!c;L1(c),P.blending===P7&&P.transparent===!1?f0(JJ):f0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),X.setFunc(P.depthFunc),X.setTest(P.depthTest),X.setMask(P.depthWrite),Y.setMask(P.colorWrite);let J0=P.stencilWrite;if(D.setTest(J0),J0)D.setMask(P.stencilWriteMask),D.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),D.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);V1(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?U0(J.SAMPLE_ALPHA_TO_COVERAGE):A0(J.SAMPLE_ALPHA_TO_COVERAGE)}function L1(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function U1(P){if(P!==M6){if(U0(J.CULL_FACE),P!==l)if(P===Z9)J.cullFace(J.BACK);else if(P===L6)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else A0(J.CULL_FACE);l=P}function S(P){if(P!==s){if(p)J.lineWidth(P);s=P}}function V1(P,Q0,c){if(P){if(U0(J.POLYGON_OFFSET_FILL),f!==Q0||m!==c){if(f=Q0,m=c,X.getReversed())Q0=-Q0;J.polygonOffset(Q0,c)}}else A0(J.POLYGON_OFFSET_FILL)}function d0(P){if(P)U0(J.SCISSOR_TEST);else A0(J.SCISSOR_TEST)}function c0(P){if(P===void 0)P=J.TEXTURE0+x-1;if(k0!==P)J.activeTexture(P),k0=P}function W0(P,Q0,c){if(c===void 0)if(k0===null)c=J.TEXTURE0+x-1;else c=k0;let J0=w0[c];if(J0===void 0)J0={type:void 0,texture:void 0},w0[c]=J0;if(J0.type!==P||J0.texture!==Q0){if(k0!==c)J.activeTexture(c),k0=c;J.bindTexture(P,Q0||L0[P]),J0.type=P,J0.texture=Q0}}function X1(){let P=w0[k0];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function V0(){try{J.compressedTexImage2D(...arguments)}catch(P){P0("WebGLState:",P)}}function L(){try{J.compressedTexImage3D(...arguments)}catch(P){P0("WebGLState:",P)}}function F(){try{J.texSubImage2D(...arguments)}catch(P){P0("WebGLState:",P)}}function h(){try{J.texSubImage3D(...arguments)}catch(P){P0("WebGLState:",P)}}function o(){try{J.compressedTexSubImage2D(...arguments)}catch(P){P0("WebGLState:",P)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(P){P0("WebGLState:",P)}}function e(){try{J.texStorage2D(...arguments)}catch(P){P0("WebGLState:",P)}}function Y0(){try{J.texStorage3D(...arguments)}catch(P){P0("WebGLState:",P)}}function d(){try{J.texImage2D(...arguments)}catch(P){P0("WebGLState:",P)}}function i(){try{J.texImage3D(...arguments)}catch(P){P0("WebGLState:",P)}}function E0(P){if(R[P]!==void 0)return R[P];else return J.getParameter(P)}function N0(P,Q0){if(R[P]!==Q0)J.pixelStorei(P,Q0),R[P]=Q0}function H0(P){if(g0.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),g0.copy(P)}function X0(P){if(n.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),n.copy(P)}function C0(P,Q0){let c=W.get(Q0);if(c===void 0)c=new WeakMap,W.set(Q0,c);let J0=c.get(P);if(J0===void 0)J0=J.getUniformBlockIndex(Q0,P.name),c.set(P,J0)}function h0(P,Q0){let J0=W.get(Q0).get(P);if(K.get(Q0)!==J0)J.uniformBlockBinding(Q0,J0,P.__bindingPointIndex),K.set(Q0,J0)}function y0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),U={},R={},k0=null,w0={},Z={},N=new WeakMap,M=[],_=null,G=!1,k=null,B=null,A=null,w=null,T=null,z=null,C=null,O=new i0(0,0,0),I=0,u=!1,V=null,l=null,s=null,f=null,m=null,g0.set(0,0,J.canvas.width,J.canvas.height),n.set(0,0,J.canvas.width,J.canvas.height),Y.reset(),X.reset(),D.reset()}return{buffers:{color:Y,depth:X,stencil:D},enable:U0,disable:A0,bindFramebuffer:n0,drawBuffers:v0,useProgram:p0,setBlending:f0,setMaterial:O1,setFlipSided:L1,setCullFace:U1,setLineWidth:S,setPolygonOffset:V1,setScissorTest:d0,activeTexture:c0,bindTexture:W0,unbindTexture:X1,compressedTexImage2D:V0,compressedTexImage3D:L,texImage2D:d,texImage3D:i,pixelStorei:N0,getParameter:E0,updateUBOMapping:C0,uniformBlockBinding:h0,texStorage2D:e,texStorage3D:Y0,texSubImage2D:F,texSubImage3D:h,compressedTexSubImage2D:o,compressedTexSubImage3D:r,scissor:H0,viewport:X0,reset:y0}}function VD(J,$,H,Q,E,Y,X){let D=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),W=new a0,U=new WeakMap,R=new Set,Z,N=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function _(L,F){return M?new OffscreenCanvas(L,F):V7("canvas")}function G(L,F,h){let o=1,r=V0(L);if(r.width>h||r.height>h)o=h/Math.max(r.width,r.height);if(o<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let e=Math.floor(o*r.width),Y0=Math.floor(o*r.height);if(Z===void 0)Z=_(e,Y0);let d=F?_(e,Y0):Z;return d.width=e,d.height=Y0,d.getContext("2d").drawImage(L,0,0,e,Y0),z0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+e+"x"+Y0+")."),d}else{if("data"in L)z0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return L}return L}function k(L){return L.generateMipmaps}function B(L){J.generateMipmap(L)}function A(L){if(L.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(L.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function w(L,F,h,o,r,e=!1){if(L!==null){if(J[L]!==void 0)return J[L];z0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y0;if(o){if(Y0=$.get("EXT_texture_norm16"),!Y0)z0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=F;if(F===J.RED){if(h===J.FLOAT)d=J.R32F;if(h===J.HALF_FLOAT)d=J.R16F;if(h===J.UNSIGNED_BYTE)d=J.R8;if(h===J.UNSIGNED_SHORT&&Y0)d=Y0.R16_EXT;if(h===J.SHORT&&Y0)d=Y0.R16_SNORM_EXT}if(F===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.R8UI;if(h===J.UNSIGNED_SHORT)d=J.R16UI;if(h===J.UNSIGNED_INT)d=J.R32UI;if(h===J.BYTE)d=J.R8I;if(h===J.SHORT)d=J.R16I;if(h===J.INT)d=J.R32I}if(F===J.RG){if(h===J.FLOAT)d=J.RG32F;if(h===J.HALF_FLOAT)d=J.RG16F;if(h===J.UNSIGNED_BYTE)d=J.RG8;if(h===J.UNSIGNED_SHORT&&Y0)d=Y0.RG16_EXT;if(h===J.SHORT&&Y0)d=Y0.RG16_SNORM_EXT}if(F===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RG8UI;if(h===J.UNSIGNED_SHORT)d=J.RG16UI;if(h===J.UNSIGNED_INT)d=J.RG32UI;if(h===J.BYTE)d=J.RG8I;if(h===J.SHORT)d=J.RG16I;if(h===J.INT)d=J.RG32I}if(F===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RGB8UI;if(h===J.UNSIGNED_SHORT)d=J.RGB16UI;if(h===J.UNSIGNED_INT)d=J.RGB32UI;if(h===J.BYTE)d=J.RGB8I;if(h===J.SHORT)d=J.RGB16I;if(h===J.INT)d=J.RGB32I}if(F===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(h===J.UNSIGNED_INT)d=J.RGBA32UI;if(h===J.BYTE)d=J.RGBA8I;if(h===J.SHORT)d=J.RGBA16I;if(h===J.INT)d=J.RGBA32I}if(F===J.RGB){if(h===J.UNSIGNED_SHORT&&Y0)d=Y0.RGB16_EXT;if(h===J.SHORT&&Y0)d=Y0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(F===J.RGBA){let i=e?Y$:l0.getTransfer(r);if(h===J.FLOAT)d=J.RGBA32F;if(h===J.HALF_FLOAT)d=J.RGBA16F;if(h===J.UNSIGNED_BYTE)d=i===Q1?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&Y0)d=Y0.RGBA16_EXT;if(h===J.SHORT&&Y0)d=Y0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)$.get("EXT_color_buffer_float");return d}function T(L,F){let h;if(L){if(F===null||F===VJ||F===R7)h=J.DEPTH24_STENCIL8;else if(F===GJ)h=J.DEPTH32F_STENCIL8;else if(F===S7)h=J.DEPTH24_STENCIL8,z0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(F===null||F===VJ||F===R7)h=J.DEPTH_COMPONENT24;else if(F===GJ)h=J.DEPTH_COMPONENT32F;else if(F===S7)h=J.DEPTH_COMPONENT16;return h}function z(L,F){if(k(L)===!0||L.isFramebufferTexture&&L.minFilter!==AJ&&L.minFilter!==S1)return Math.log2(Math.max(F.width,F.height))+1;else if(L.mipmaps!==void 0&&L.mipmaps.length>0)return L.mipmaps.length;else if(L.isCompressedTexture&&Array.isArray(L.image))return F.mipmaps.length;else return 1}function C(L){let F=L.target;if(F.removeEventListener("dispose",C),I(F),F.isVideoTexture)U.delete(F);if(F.isHTMLTexture)R.delete(F)}function O(L){let F=L.target;F.removeEventListener("dispose",O),V(F)}function I(L){let F=Q.get(L);if(F.__webglInit===void 0)return;let h=L.source,o=N.get(h);if(o){let r=o[F.__cacheKey];if(r.usedTimes--,r.usedTimes===0)u(L);if(Object.keys(o).length===0)N.delete(h)}Q.remove(L)}function u(L){let F=Q.get(L);J.deleteTexture(F.__webglTexture);let h=L.source,o=N.get(h);delete o[F.__cacheKey],X.memory.textures--}function V(L){let F=Q.get(L);if(L.depthTexture)L.depthTexture.dispose(),Q.remove(L.depthTexture);if(L.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(F.__webglFramebuffer[o]))for(let r=0;r<F.__webglFramebuffer[o].length;r++)J.deleteFramebuffer(F.__webglFramebuffer[o][r]);else J.deleteFramebuffer(F.__webglFramebuffer[o]);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer[o])}else{if(Array.isArray(F.__webglFramebuffer))for(let o=0;o<F.__webglFramebuffer.length;o++)J.deleteFramebuffer(F.__webglFramebuffer[o]);else J.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)J.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let o=0;o<F.__webglColorRenderbuffer.length;o++)if(F.__webglColorRenderbuffer[o])J.deleteRenderbuffer(F.__webglColorRenderbuffer[o])}if(F.__webglDepthRenderbuffer)J.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let h=L.textures;for(let o=0,r=h.length;o<r;o++){let e=Q.get(h[o]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),X.memory.textures--;Q.remove(h[o])}Q.remove(L)}let l=0;function s(){l=0}function f(){return l}function m(L){l=L}function x(){let L=l;if(L>=E.maxTextures)z0("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+E.maxTextures);return l+=1,L}function p(L){let F=[];return F.push(L.wrapS),F.push(L.wrapT),F.push(L.wrapR||0),F.push(L.magFilter),F.push(L.minFilter),F.push(L.anisotropy),F.push(L.internalFormat),F.push(L.format),F.push(L.type),F.push(L.generateMipmaps),F.push(L.premultiplyAlpha),F.push(L.flipY),F.push(L.unpackAlignment),F.push(L.colorSpace),F.join()}function a(L,F){let h=Q.get(L);if(L.isVideoTexture)W0(L);if(L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&h.__version!==L.version){let o=L.image;if(o===null)z0("WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)z0("WebGLRenderer: Texture marked for update but image is incomplete");else{A0(h,L,F);return}}else if(L.isExternalTexture)h.__webglTexture=L.sourceTexture?L.sourceTexture:null;H.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+F)}function $0(L,F){let h=Q.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&h.__version!==L.version){A0(h,L,F);return}else if(L.isExternalTexture)h.__webglTexture=L.sourceTexture?L.sourceTexture:null;H.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+F)}function k0(L,F){let h=Q.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&h.__version!==L.version){A0(h,L,F);return}H.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+F)}function w0(L,F){let h=Q.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&h.__version!==L.version){n0(h,L,F);return}H.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+F)}let O0={[t6]:J.REPEAT,[F8]:J.CLAMP_TO_EDGE,[e6]:J.MIRRORED_REPEAT},s0={[AJ]:J.NEAREST,[JH]:J.NEAREST_MIPMAP_NEAREST,[T7]:J.NEAREST_MIPMAP_LINEAR,[S1]:J.LINEAR,[N8]:J.LINEAR_MIPMAP_NEAREST,[bJ]:J.LINEAR_MIPMAP_LINEAR},g0={[ZH]:J.NEVER,[FH]:J.ALWAYS,[GH]:J.LESS,[I8]:J.LEQUAL,[UH]:J.EQUAL,[w8]:J.GEQUAL,[kH]:J.GREATER,[RH]:J.NOTEQUAL};function n(L,F){if(F.type===GJ&&$.has("OES_texture_float_linear")===!1&&(F.magFilter===S1||F.magFilter===N8||F.magFilter===T7||F.magFilter===bJ||F.minFilter===S1||F.minFilter===N8||F.minFilter===T7||F.minFilter===bJ))z0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(L,J.TEXTURE_WRAP_S,O0[F.wrapS]),J.texParameteri(L,J.TEXTURE_WRAP_T,O0[F.wrapT]),L===J.TEXTURE_3D||L===J.TEXTURE_2D_ARRAY)J.texParameteri(L,J.TEXTURE_WRAP_R,O0[F.wrapR]);if(J.texParameteri(L,J.TEXTURE_MAG_FILTER,s0[F.magFilter]),J.texParameteri(L,J.TEXTURE_MIN_FILTER,s0[F.minFilter]),F.compareFunction)J.texParameteri(L,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(L,J.TEXTURE_COMPARE_FUNC,g0[F.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===AJ)return;if(F.minFilter!==T7&&F.minFilter!==bJ)return;if(F.type===GJ&&$.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||Q.get(F).__currentAnisotropy){let h=$.get("EXT_texture_filter_anisotropic");J.texParameterf(L,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,E.getMaxAnisotropy())),Q.get(F).__currentAnisotropy=F.anisotropy}}}function G0(L,F){let h=!1;if(L.__webglInit===void 0)L.__webglInit=!0,F.addEventListener("dispose",C);let o=F.source,r=N.get(o);if(r===void 0)r={},N.set(o,r);let e=p(F);if(e!==L.__cacheKey){if(r[e]===void 0)r[e]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,h=!0;r[e].usedTimes++;let Y0=r[L.__cacheKey];if(Y0!==void 0){if(r[L.__cacheKey].usedTimes--,Y0.usedTimes===0)u(F)}L.__cacheKey=e,L.__webglTexture=r[e].texture}return h}function L0(L,F,h){return Math.floor(Math.floor(L/h)/F)}function U0(L,F,h,o){let e=L.updateRanges;if(e.length===0)H.texSubImage2D(J.TEXTURE_2D,0,0,0,F.width,F.height,h,o,F.data);else{e.sort((N0,H0)=>N0.start-H0.start);let Y0=0;for(let N0=1;N0<e.length;N0++){let H0=e[Y0],X0=e[N0],C0=H0.start+H0.count,h0=L0(X0.start,F.width,4),y0=L0(H0.start,F.width,4);if(X0.start<=C0+1&&h0===y0&&L0(X0.start+X0.count-1,F.width,4)===h0)H0.count=Math.max(H0.count,X0.start+X0.count-H0.start);else++Y0,e[Y0]=X0}e.length=Y0+1;let d=H.getParameter(J.UNPACK_ROW_LENGTH),i=H.getParameter(J.UNPACK_SKIP_PIXELS),E0=H.getParameter(J.UNPACK_SKIP_ROWS);H.pixelStorei(J.UNPACK_ROW_LENGTH,F.width);for(let N0=0,H0=e.length;N0<H0;N0++){let X0=e[N0],C0=Math.floor(X0.start/4),h0=Math.ceil(X0.count/4),y0=C0%F.width,P=Math.floor(C0/F.width),Q0=h0,c=1;H.pixelStorei(J.UNPACK_SKIP_PIXELS,y0),H.pixelStorei(J.UNPACK_SKIP_ROWS,P),H.texSubImage2D(J.TEXTURE_2D,0,y0,P,Q0,1,h,o,F.data)}L.clearUpdateRanges(),H.pixelStorei(J.UNPACK_ROW_LENGTH,d),H.pixelStorei(J.UNPACK_SKIP_PIXELS,i),H.pixelStorei(J.UNPACK_SKIP_ROWS,E0)}}function A0(L,F,h){let o=J.TEXTURE_2D;if(F.isDataArrayTexture||F.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(F.isData3DTexture)o=J.TEXTURE_3D;let r=G0(L,F),e=F.source;H.bindTexture(o,L.__webglTexture,J.TEXTURE0+h);let Y0=Q.get(e);if(e.version!==Y0.__version||r===!0){if(H.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let c=l0.getPrimaries(l0.workingColorSpace),J0=F.colorSpace===gJ?null:l0.getPrimaries(F.colorSpace),q0=F.colorSpace===gJ||c===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;H.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),H.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),H.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,q0)}H.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment);let i=G(F.image,!1,E.maxTextureSize);i=X1(F,i);let E0=Y.convert(F.format,F.colorSpace),N0=Y.convert(F.type),H0=w(F.internalFormat,E0,N0,F.normalized,F.colorSpace,F.isVideoTexture);n(o,F);let X0,C0=F.mipmaps,h0=F.isVideoTexture!==!0,y0=Y0.__version===void 0||r===!0,P=e.dataReady,Q0=z(F,i);if(F.isDepthTexture){if(H0=T(F.format===yJ,F.type),y0)if(h0)H.texStorage2D(J.TEXTURE_2D,1,H0,i.width,i.height);else H.texImage2D(J.TEXTURE_2D,0,H0,i.width,i.height,0,E0,N0,null)}else if(F.isDataTexture)if(C0.length>0){if(h0&&y0)H.texStorage2D(J.TEXTURE_2D,Q0,H0,C0[0].width,C0[0].height);for(let c=0,J0=C0.length;c<J0;c++)if(X0=C0[c],h0){if(P)H.texSubImage2D(J.TEXTURE_2D,c,0,0,X0.width,X0.height,E0,N0,X0.data)}else H.texImage2D(J.TEXTURE_2D,c,H0,X0.width,X0.height,0,E0,N0,X0.data);F.generateMipmaps=!1}else if(h0){if(y0)H.texStorage2D(J.TEXTURE_2D,Q0,H0,i.width,i.height);if(P)U0(F,i,E0,N0)}else H.texImage2D(J.TEXTURE_2D,0,H0,i.width,i.height,0,E0,N0,i.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){if(h0&&y0)H.texStorage3D(J.TEXTURE_2D_ARRAY,Q0,H0,C0[0].width,C0[0].height,i.depth);for(let c=0,J0=C0.length;c<J0;c++)if(X0=C0[c],F.format!==$J)if(E0!==null)if(h0){if(P)if(F.layerUpdates.size>0){let q0=f$(X0.width,X0.height,F.format,F.type);for(let t of F.layerUpdates){let B0=X0.data.subarray(t*q0/X0.data.BYTES_PER_ELEMENT,(t+1)*q0/X0.data.BYTES_PER_ELEMENT);H.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,t,X0.width,X0.height,1,E0,B0)}F.clearLayerUpdates()}else H.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,X0.width,X0.height,i.depth,E0,X0.data)}else H.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,H0,X0.width,X0.height,i.depth,0,X0.data,0,0);else z0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(P)H.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,X0.width,X0.height,i.depth,E0,N0,X0.data)}else H.texImage3D(J.TEXTURE_2D_ARRAY,c,H0,X0.width,X0.height,i.depth,0,E0,N0,X0.data)}else{if(h0&&y0)H.texStorage2D(J.TEXTURE_2D,Q0,H0,C0[0].width,C0[0].height);for(let c=0,J0=C0.length;c<J0;c++)if(X0=C0[c],F.format!==$J)if(E0!==null)if(h0){if(P)H.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,X0.width,X0.height,E0,X0.data)}else H.compressedTexImage2D(J.TEXTURE_2D,c,H0,X0.width,X0.height,0,X0.data);else z0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(P)H.texSubImage2D(J.TEXTURE_2D,c,0,0,X0.width,X0.height,E0,N0,X0.data)}else H.texImage2D(J.TEXTURE_2D,c,H0,X0.width,X0.height,0,E0,N0,X0.data)}else if(F.isDataArrayTexture)if(h0){if(y0)H.texStorage3D(J.TEXTURE_2D_ARRAY,Q0,H0,i.width,i.height,i.depth);if(P)if(F.layerUpdates.size>0){let c=f$(i.width,i.height,F.format,F.type);for(let J0 of F.layerUpdates){let q0=i.data.subarray(J0*c/i.data.BYTES_PER_ELEMENT,(J0+1)*c/i.data.BYTES_PER_ELEMENT);H.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,J0,i.width,i.height,1,E0,N0,q0)}F.clearLayerUpdates()}else H.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,E0,N0,i.data)}else H.texImage3D(J.TEXTURE_2D_ARRAY,0,H0,i.width,i.height,i.depth,0,E0,N0,i.data);else if(F.isData3DTexture)if(h0){if(y0)H.texStorage3D(J.TEXTURE_3D,Q0,H0,i.width,i.height,i.depth);if(P)H.texSubImage3D(J.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,E0,N0,i.data)}else H.texImage3D(J.TEXTURE_3D,0,H0,i.width,i.height,i.depth,0,E0,N0,i.data);else if(F.isFramebufferTexture){if(y0)if(h0)H.texStorage2D(J.TEXTURE_2D,Q0,H0,i.width,i.height);else{let{width:c,height:J0}=i;for(let q0=0;q0<Q0;q0++)H.texImage2D(J.TEXTURE_2D,q0,H0,c,J0,0,E0,N0,null),c>>=1,J0>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in J){let c=J.canvas;if(!c.hasAttribute("layoutsubtree"))c.setAttribute("layoutsubtree","true");if(i.parentNode!==c){c.appendChild(i),R.add(F),c.onpaint=(S0)=>{let k1=S0.changedElements;for(let r0 of R)if(k1.includes(r0.image))r0.needsUpdate=!0},c.requestPaint();return}let J0=0,q0=J.RGBA,t=J.RGBA,B0=J.UNSIGNED_BYTE;J.texElementImage2D(J.TEXTURE_2D,J0,q0,t,B0,i),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(C0.length>0){if(h0&&y0){let c=V0(C0[0]);H.texStorage2D(J.TEXTURE_2D,Q0,H0,c.width,c.height)}for(let c=0,J0=C0.length;c<J0;c++)if(X0=C0[c],h0){if(P)H.texSubImage2D(J.TEXTURE_2D,c,0,0,E0,N0,X0)}else H.texImage2D(J.TEXTURE_2D,c,H0,E0,N0,X0);F.generateMipmaps=!1}else if(h0){if(y0){let c=V0(i);H.texStorage2D(J.TEXTURE_2D,Q0,H0,c.width,c.height)}if(P)H.texSubImage2D(J.TEXTURE_2D,0,0,0,E0,N0,i)}else H.texImage2D(J.TEXTURE_2D,0,H0,E0,N0,i);if(k(F))B(o);if(Y0.__version=e.version,F.onUpdate)F.onUpdate(F)}L.__version=F.version}function n0(L,F,h){if(F.image.length!==6)return;let o=G0(L,F),r=F.source;H.bindTexture(J.TEXTURE_CUBE_MAP,L.__webglTexture,J.TEXTURE0+h);let e=Q.get(r);if(r.version!==e.__version||o===!0){H.activeTexture(J.TEXTURE0+h);let Y0=l0.getPrimaries(l0.workingColorSpace),d=F.colorSpace===gJ?null:l0.getPrimaries(F.colorSpace),i=F.colorSpace===gJ||Y0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;H.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),H.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),H.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),H.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,i);let E0=F.isCompressedTexture||F.image[0].isCompressedTexture,N0=F.image[0]&&F.image[0].isDataTexture,H0=[];for(let t=0;t<6;t++){if(!E0&&!N0)H0[t]=G(F.image[t],!0,E.maxCubemapSize);else H0[t]=N0?F.image[t].image:F.image[t];H0[t]=X1(F,H0[t])}let X0=H0[0],C0=Y.convert(F.format,F.colorSpace),h0=Y.convert(F.type),y0=w(F.internalFormat,C0,h0,F.normalized,F.colorSpace),P=F.isVideoTexture!==!0,Q0=e.__version===void 0||o===!0,c=r.dataReady,J0=z(F,X0);n(J.TEXTURE_CUBE_MAP,F);let q0;if(E0){if(P&&Q0)H.texStorage2D(J.TEXTURE_CUBE_MAP,J0,y0,X0.width,X0.height);for(let t=0;t<6;t++){q0=H0[t].mipmaps;for(let B0=0;B0<q0.length;B0++){let S0=q0[B0];if(F.format!==$J)if(C0!==null)if(P){if(c)H.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,0,0,S0.width,S0.height,C0,S0.data)}else H.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,y0,S0.width,S0.height,0,S0.data);else z0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P){if(c)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,0,0,S0.width,S0.height,C0,h0,S0.data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,y0,S0.width,S0.height,0,C0,h0,S0.data)}}}else{if(q0=F.mipmaps,P&&Q0){if(q0.length>0)J0++;let t=V0(H0[0]);H.texStorage2D(J.TEXTURE_CUBE_MAP,J0,y0,t.width,t.height)}for(let t=0;t<6;t++)if(N0){if(P){if(c)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,H0[t].width,H0[t].height,C0,h0,H0[t].data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y0,H0[t].width,H0[t].height,0,C0,h0,H0[t].data);for(let B0=0;B0<q0.length;B0++){let k1=q0[B0].image[t].image;if(P){if(c)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,0,0,k1.width,k1.height,C0,h0,k1.data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,y0,k1.width,k1.height,0,C0,h0,k1.data)}}else{if(P){if(c)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,C0,h0,H0[t])}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y0,C0,h0,H0[t]);for(let B0=0;B0<q0.length;B0++){let S0=q0[B0];if(P){if(c)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,0,0,C0,h0,S0.image[t])}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,y0,C0,h0,S0.image[t])}}}if(k(F))B(J.TEXTURE_CUBE_MAP);if(e.__version=r.version,F.onUpdate)F.onUpdate(F)}L.__version=F.version}function v0(L,F,h,o,r,e){let Y0=Y.convert(h.format,h.colorSpace),d=Y.convert(h.type),i=w(h.internalFormat,Y0,d,h.normalized,h.colorSpace),E0=Q.get(F),N0=Q.get(h);if(N0.__renderTarget=F,!E0.__hasExternalTextures){let H0=Math.max(1,F.width>>e),X0=Math.max(1,F.height>>e);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)H.texImage3D(r,e,i,H0,X0,F.depth,0,Y0,d,null);else H.texImage2D(r,e,i,H0,X0,0,Y0,d,null)}if(H.bindFramebuffer(J.FRAMEBUFFER,L),c0(F))D.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,r,N0.__webglTexture,0,d0(F));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,r,N0.__webglTexture,e);H.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(L,F,h){if(J.bindRenderbuffer(J.RENDERBUFFER,L),F.depthBuffer){let o=F.depthTexture,r=o&&o.isDepthTexture?o.type:null,e=T(F.stencilBuffer,r),Y0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(c0(F))D.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,d0(F),e,F.width,F.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,d0(F),e,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,e,F.width,F.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,L)}else{let o=F.textures;for(let r=0;r<o.length;r++){let e=o[r],Y0=Y.convert(e.format,e.colorSpace),d=Y.convert(e.type),i=w(e.internalFormat,Y0,d,e.normalized,e.colorSpace);if(c0(F))D.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,d0(F),i,F.width,F.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,d0(F),i,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,i,F.width,F.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(L,F,h){let o=F.isWebGLCubeRenderTarget===!0;if(H.bindFramebuffer(J.FRAMEBUFFER,L),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=Q.get(F.depthTexture);if(r.__renderTarget=F,!r.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0;if(o){if(r.__webglInit===void 0)r.__webglInit=!0,F.depthTexture.addEventListener("dispose",C);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),H.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),n(J.TEXTURE_CUBE_MAP,F.depthTexture);let E0=Y.convert(F.depthTexture.format),N0=Y.convert(F.depthTexture.type),H0;if(F.depthTexture.format===vJ)H0=J.DEPTH_COMPONENT24;else if(F.depthTexture.format===yJ)H0=J.DEPTH24_STENCIL8;for(let X0=0;X0<6;X0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,H0,F.width,F.height,0,E0,N0,null)}}else a(F.depthTexture,0);let e=r.__webglTexture,Y0=d0(F),d=o?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,i=F.depthTexture.format===yJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(F.depthTexture.format===vJ)if(c0(F))D.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,e,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,e,0);else if(F.depthTexture.format===yJ)if(c0(F))D.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,e,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,e,0);else throw Error("Unknown depthTexture format")}function J1(L){let F=Q.get(L),h=L.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==L.depthTexture){let o=L.depthTexture;if(F.__depthDisposeCallback)F.__depthDisposeCallback();if(o){let r=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,o.removeEventListener("dispose",r)};o.addEventListener("dispose",r),F.__depthDisposeCallback=r}F.__boundDepthTexture=o}if(L.depthTexture&&!F.__autoAllocateDepthBuffer)if(h)for(let o=0;o<6;o++)e0(F.__webglFramebuffer[o],L,o);else{let o=L.texture.mipmaps;if(o&&o.length>0)e0(F.__webglFramebuffer[0],L,0);else e0(F.__webglFramebuffer,L,0)}else if(h){F.__webglDepthbuffer=[];for(let o=0;o<6;o++)if(H.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[o]),F.__webglDepthbuffer[o]===void 0)F.__webglDepthbuffer[o]=J.createRenderbuffer(),p0(F.__webglDepthbuffer[o],L,!1);else{let r=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=F.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}else{let o=L.texture.mipmaps;if(o&&o.length>0)H.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[0]);else H.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer);if(F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=J.createRenderbuffer(),p0(F.__webglDepthbuffer,L,!1);else{let r=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=F.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}H.bindFramebuffer(J.FRAMEBUFFER,null)}function f0(L,F,h){let o=Q.get(L);if(F!==void 0)v0(o.__webglFramebuffer,L,L.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)J1(L)}function O1(L){let F=L.texture,h=Q.get(L),o=Q.get(F);L.addEventListener("dispose",O);let r=L.textures,e=L.isWebGLCubeRenderTarget===!0,Y0=r.length>1;if(!Y0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=F.version,X.memory.textures++}if(e){h.__webglFramebuffer=[];for(let d=0;d<6;d++)if(F.mipmaps&&F.mipmaps.length>0){h.__webglFramebuffer[d]=[];for(let i=0;i<F.mipmaps.length;i++)h.__webglFramebuffer[d][i]=J.createFramebuffer()}else h.__webglFramebuffer[d]=J.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){h.__webglFramebuffer=[];for(let d=0;d<F.mipmaps.length;d++)h.__webglFramebuffer[d]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let d=0,i=r.length;d<i;d++){let E0=Q.get(r[d]);if(E0.__webglTexture===void 0)E0.__webglTexture=J.createTexture(),X.memory.textures++}if(L.samples>0&&c0(L)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],H.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let d=0;d<r.length;d++){let i=r[d];h.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[d]);let E0=Y.convert(i.format,i.colorSpace),N0=Y.convert(i.type),H0=w(i.internalFormat,E0,N0,i.normalized,i.colorSpace,L.isXRRenderTarget===!0),X0=d0(L);J.renderbufferStorageMultisample(J.RENDERBUFFER,X0,H0,L.width,L.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,h.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),L.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),p0(h.__webglDepthRenderbuffer,L,!0);H.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){H.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),n(J.TEXTURE_CUBE_MAP,F);for(let d=0;d<6;d++)if(F.mipmaps&&F.mipmaps.length>0)for(let i=0;i<F.mipmaps.length;i++)v0(h.__webglFramebuffer[d][i],L,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,i);else v0(h.__webglFramebuffer[d],L,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(k(F))B(J.TEXTURE_CUBE_MAP);H.unbindTexture()}else if(Y0){for(let d=0,i=r.length;d<i;d++){let E0=r[d],N0=Q.get(E0),H0=J.TEXTURE_2D;if(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)H0=L.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(H.bindTexture(H0,N0.__webglTexture),n(H0,E0),v0(h.__webglFramebuffer,L,E0,J.COLOR_ATTACHMENT0+d,H0,0),k(E0))B(H0)}H.unbindTexture()}else{let d=J.TEXTURE_2D;if(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)d=L.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(H.bindTexture(d,o.__webglTexture),n(d,F),F.mipmaps&&F.mipmaps.length>0)for(let i=0;i<F.mipmaps.length;i++)v0(h.__webglFramebuffer[i],L,F,J.COLOR_ATTACHMENT0,d,i);else v0(h.__webglFramebuffer,L,F,J.COLOR_ATTACHMENT0,d,0);if(k(F))B(d);H.unbindTexture()}if(L.depthBuffer)J1(L)}function L1(L){let F=L.textures;for(let h=0,o=F.length;h<o;h++){let r=F[h];if(k(r)){let e=A(L),Y0=Q.get(r).__webglTexture;H.bindTexture(e,Y0),B(e),H.unbindTexture()}}}let U1=[],S=[];function V1(L){if(L.samples>0){if(c0(L)===!1){let{textures:F,width:h,height:o}=L,r=J.COLOR_BUFFER_BIT,e=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Q.get(L),d=F.length>1;if(d)for(let E0=0;E0<F.length;E0++)H.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,null),H.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,null,0);H.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let i=L.texture.mipmaps;if(i&&i.length>0)H.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else H.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let E0=0;E0<F.length;E0++){if(L.resolveDepthBuffer){if(L.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(L.stencilBuffer&&L.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[E0]);let N0=Q.get(F[E0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,N0,0)}if(J.blitFramebuffer(0,0,h,o,0,0,h,o,r,J.NEAREST),K===!0){if(U1.length=0,S.length=0,U1.push(J.COLOR_ATTACHMENT0+E0),L.depthBuffer&&L.resolveDepthBuffer===!1)U1.push(e),S.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,S);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,U1)}}if(H.bindFramebuffer(J.READ_FRAMEBUFFER,null),H.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let E0=0;E0<F.length;E0++){H.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[E0]);let N0=Q.get(F[E0]).__webglTexture;H.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,N0,0)}H.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&K){let F=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[F])}}}function d0(L){return Math.min(E.maxSamples,L.samples)}function c0(L){let F=Q.get(L);return L.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function W0(L){let F=X.render.frame;if(U.get(L)!==F)U.set(L,F),L.update()}function X1(L,F){let{colorSpace:h,format:o,type:r}=L;if(L.isCompressedTexture===!0||L.isVideoTexture===!0)return F;if(h!==E$&&h!==gJ)if(l0.getTransfer(h)===Q1){if(o!==$J||r!==o1)z0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else P0("WebGLTextures: Unsupported texture color space:",h);return F}function V0(L){if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement)W.width=L.naturalWidth||L.width,W.height=L.naturalHeight||L.height;else if(typeof VideoFrame<"u"&&L instanceof VideoFrame)W.width=L.displayWidth,W.height=L.displayHeight;else W.width=L.width,W.height=L.height;return W}this.allocateTextureUnit=x,this.resetTextureUnits=s,this.getTextureUnits=f,this.setTextureUnits=m,this.setTexture2D=a,this.setTexture2DArray=$0,this.setTexture3D=k0,this.setTextureCube=w0,this.rebindTextures=f0,this.setupRenderTarget=O1,this.updateRenderTargetMipmap=L1,this.updateMultisampleRenderTarget=V1,this.setupDepthRenderbuffer=J1,this.setupFrameBufferTexture=v0,this.useMultisampledRTT=c0,this.isReversedDepthBuffer=function(){return H.buffers.depth.getReversed()}}function zD(J,$){function H(Q,E=gJ){let Y,X=l0.getTransfer(E);if(Q===o1)return J.UNSIGNED_BYTE;if(Q===_9)return J.UNSIGNED_SHORT_4_4_4_4;if(Q===I9)return J.UNSIGNED_SHORT_5_5_5_1;if(Q===QH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Q===EH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Q===$H)return J.BYTE;if(Q===HH)return J.SHORT;if(Q===S7)return J.UNSIGNED_SHORT;if(Q===B9)return J.INT;if(Q===VJ)return J.UNSIGNED_INT;if(Q===GJ)return J.FLOAT;if(Q===UJ)return J.HALF_FLOAT;if(Q===YH)return J.ALPHA;if(Q===XH)return J.RGB;if(Q===$J)return J.RGBA;if(Q===vJ)return J.DEPTH_COMPONENT;if(Q===yJ)return J.DEPTH_STENCIL;if(Q===DH)return J.RED;if(Q===w9)return J.RED_INTEGER;if(Q===xJ)return J.RG;if(Q===A9)return J.RG_INTEGER;if(Q===V9)return J.RGBA_INTEGER;if(Q===q8||Q===O8||Q===M8||Q===L8)if(X===Q1)if(Y=$.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if(Q===q8)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===O8)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===M8)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===L8)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=$.get("WEBGL_compressed_texture_s3tc"),Y!==null){if(Q===q8)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===O8)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===M8)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===L8)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===z9||Q===P9||Q===C9||Q===T9)if(Y=$.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if(Q===z9)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===P9)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===C9)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===T9)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===S9||Q===j9||Q===h9||Q===f9||Q===b9||Q===B8||Q===v9)if(Y=$.get("WEBGL_compressed_texture_etc"),Y!==null){if(Q===S9||Q===j9)return X===Q1?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if(Q===h9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC;if(Q===f9)return Y.COMPRESSED_R11_EAC;if(Q===b9)return Y.COMPRESSED_SIGNED_R11_EAC;if(Q===B8)return Y.COMPRESSED_RG11_EAC;if(Q===v9)return Y.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Q===y9||Q===x9||Q===g9||Q===p9||Q===l9||Q===d9||Q===m9||Q===u9||Q===c9||Q===n9||Q===i9||Q===s9||Q===o9||Q===a9)if(Y=$.get("WEBGL_compressed_texture_astc"),Y!==null){if(Q===y9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===x9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===g9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===p9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===l9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===d9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===m9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===u9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===c9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===n9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===i9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===s9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===o9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===a9)return X===Q1?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===r9||Q===t9||Q===e9)if(Y=$.get("EXT_texture_compression_bptc"),Y!==null){if(Q===r9)return X===Q1?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Q===t9)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Q===e9)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Q===J$||Q===$$||Q===_8||Q===H$)if(Y=$.get("EXT_texture_compression_rgtc"),Y!==null){if(Q===J$)return Y.COMPRESSED_RED_RGTC1_EXT;if(Q===$$)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===_8)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===H$)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Q===R7)return J.UNSIGNED_INT_24_8;return J[Q]!==void 0?J[Q]:null}return{convert:H}}var PD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CD=`
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

}`;class QQ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let H=new j8(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=H}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,H=new h1({vertexShader:PD,fragmentShader:CD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new j1(new v7(20,20),H)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EQ extends kJ{constructor(J,$){super();let H=this,Q=null,E=1,Y=null,X="local-floor",D=1,K=null,W=null,U=null,R=null,Z=null,N=null,M=typeof XRWebGLBinding<"u",_=new QQ,G={},k=$.getContextAttributes(),B=null,A=null,w=[],T=[],z=new a0,C=null,O=new z1;O.viewport=new K1;let I=new z1;I.viewport=new K1;let u=[O,I],V=new T$,l=null,s=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let G0=w[n];if(G0===void 0)G0=new f7,w[n]=G0;return G0.getTargetRaySpace()},this.getControllerGrip=function(n){let G0=w[n];if(G0===void 0)G0=new f7,w[n]=G0;return G0.getGripSpace()},this.getHand=function(n){let G0=w[n];if(G0===void 0)G0=new f7,w[n]=G0;return G0.getHandSpace()};function f(n){let G0=T.indexOf(n.inputSource);if(G0===-1)return;let L0=w[G0];if(L0!==void 0)L0.update(n.inputSource,n.frame,K||Y),L0.dispatchEvent({type:n.type,data:n.inputSource})}function m(){Q.removeEventListener("select",f),Q.removeEventListener("selectstart",f),Q.removeEventListener("selectend",f),Q.removeEventListener("squeeze",f),Q.removeEventListener("squeezestart",f),Q.removeEventListener("squeezeend",f),Q.removeEventListener("end",m),Q.removeEventListener("inputsourceschange",x);for(let n=0;n<w.length;n++){let G0=T[n];if(G0===null)continue;T[n]=null,w[n].disconnect(G0)}l=null,s=null,_.reset();for(let n in G)delete G[n];J.setRenderTarget(B),Z=null,R=null,U=null,Q=null,A=null,g0.stop(),H.isPresenting=!1,J.setPixelRatio(C),J.setSize(z.width,z.height,!1),H.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(E=n,H.isPresenting===!0)z0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(X=n,H.isPresenting===!0)z0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Y},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return R!==null?R:Z},this.getBinding=function(){if(U===null&&M)U=new XRWebGLBinding(Q,$);return U},this.getFrame=function(){return N},this.getSession=function(){return Q},this.setSession=async function(n){if(Q=n,Q!==null){if(B=J.getRenderTarget(),Q.addEventListener("select",f),Q.addEventListener("selectstart",f),Q.addEventListener("selectend",f),Q.addEventListener("squeeze",f),Q.addEventListener("squeezestart",f),Q.addEventListener("squeezeend",f),Q.addEventListener("end",m),Q.addEventListener("inputsourceschange",x),k.xrCompatible!==!0)await $.makeXRCompatible();if(C=J.getPixelRatio(),J.getSize(z),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:E};Z=new XRWebGLLayer(Q,$,L0),Q.updateRenderState({baseLayer:Z}),J.setPixelRatio(1),J.setSize(Z.framebufferWidth,Z.framebufferHeight,!1),A=new l1(Z.framebufferWidth,Z.framebufferHeight,{format:$J,type:o1,colorSpace:J.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:Z.ignoreDepthValues===!1,resolveStencilBuffer:Z.ignoreDepthValues===!1})}else{let L0=null,U0=null,A0=null;if(k.depth)A0=k.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,L0=k.stencil?yJ:vJ,U0=k.stencil?R7:VJ;let n0={colorFormat:$.RGBA8,depthFormat:A0,scaleFactor:E};U=this.getBinding(),R=U.createProjectionLayer(n0),Q.updateRenderState({layers:[R]}),J.setPixelRatio(1),J.setSize(R.textureWidth,R.textureHeight,!1),A=new l1(R.textureWidth,R.textureHeight,{format:$J,type:o1,depthTexture:new zJ(R.textureWidth,R.textureHeight,U0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:k.stencil,colorSpace:J.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:R.ignoreDepthValues===!1,resolveStencilBuffer:R.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(D),K=null,Y=await Q.requestReferenceSpace(X),g0.setContext(Q),g0.start(),H.isPresenting=!0,H.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Q!==null)return Q.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function x(n){for(let G0=0;G0<n.removed.length;G0++){let L0=n.removed[G0],U0=T.indexOf(L0);if(U0>=0)T[U0]=null,w[U0].disconnect(L0)}for(let G0=0;G0<n.added.length;G0++){let L0=n.added[G0],U0=T.indexOf(L0);if(U0===-1){for(let n0=0;n0<w.length;n0++)if(n0>=T.length){T.push(L0),U0=n0;break}else if(T[n0]===null){T[n0]=L0,U0=n0;break}if(U0===-1)break}let A0=w[U0];if(A0)A0.connect(L0)}}let p=new v,a=new v;function $0(n,G0,L0){p.setFromMatrixPosition(G0.matrixWorld),a.setFromMatrixPosition(L0.matrixWorld);let U0=p.distanceTo(a),A0=G0.projectionMatrix.elements,n0=L0.projectionMatrix.elements,v0=A0[14]/(A0[10]-1),p0=A0[14]/(A0[10]+1),e0=(A0[9]+1)/A0[5],J1=(A0[9]-1)/A0[5],f0=(A0[8]-1)/A0[0],O1=(n0[8]+1)/n0[0],L1=v0*f0,U1=v0*O1,S=U0/(-f0+O1),V1=S*-f0;if(G0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(V1),n.translateZ(S),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),A0[10]===-1)n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse);else{let d0=v0+S,c0=p0+S,W0=L1-V1,X1=U1+(U0-V1),V0=e0*p0/c0*d0,L=J1*p0/c0*d0;n.projectionMatrix.makePerspective(W0,X1,V0,L,d0,c0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function k0(n,G0){if(G0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(G0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Q===null)return;let{near:G0,far:L0}=n;if(_.texture!==null){if(_.depthNear>0)G0=_.depthNear;if(_.depthFar>0)L0=_.depthFar}if(V.near=I.near=O.near=G0,V.far=I.far=O.far=L0,l!==V.near||s!==V.far)Q.updateRenderState({depthNear:V.near,depthFar:V.far}),l=V.near,s=V.far;V.layers.mask=n.layers.mask|6,O.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let U0=n.parent,A0=V.cameras;k0(V,U0);for(let n0=0;n0<A0.length;n0++)k0(A0[n0],U0);if(A0.length===2)$0(V,O,I);else V.projectionMatrix.copy(O.projectionMatrix);w0(n,V,U0)};function w0(n,G0,L0){if(L0===null)n.matrix.copy(G0.matrixWorld);else n.matrix.copy(L0.matrixWorld),n.matrix.invert(),n.matrix.multiply(G0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=U8*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(R===null&&Z===null)return;return D},this.setFoveation=function(n){if(D=n,R!==null)R.fixedFoveation=n;if(Z!==null&&Z.fixedFoveation!==void 0)Z.fixedFoveation=n},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(n){return G[n]};let O0=null;function s0(n,G0){if(W=G0.getViewerPose(K||Y),N=G0,W!==null){let L0=W.views;if(Z!==null)J.setRenderTargetFramebuffer(A,Z.framebuffer),J.setRenderTarget(A);let U0=!1;if(L0.length!==V.cameras.length)V.cameras.length=0,U0=!0;for(let p0=0;p0<L0.length;p0++){let e0=L0[p0],J1=null;if(Z!==null)J1=Z.getViewport(e0);else{let O1=U.getViewSubImage(R,e0);if(J1=O1.viewport,p0===0)J.setRenderTargetTextures(A,O1.colorTexture,O1.depthStencilTexture),J.setRenderTarget(A)}let f0=u[p0];if(f0===void 0)f0=new z1,f0.layers.enable(p0),f0.viewport=new K1,u[p0]=f0;if(f0.matrix.fromArray(e0.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(e0.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(J1.x,J1.y,J1.width,J1.height),p0===0)V.matrix.copy(f0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(U0===!0)V.cameras.push(f0)}let A0=Q.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&Q.depthUsage=="gpu-optimized"&&M){U=H.getBinding();let p0=U.getDepthInformation(L0[0]);if(p0&&p0.isValid&&p0.texture)_.init(p0,Q.renderState)}if(A0&&A0.includes("camera-access")&&M){J.state.unbindTexture(),U=H.getBinding();for(let p0=0;p0<L0.length;p0++){let e0=L0[p0].camera;if(e0){let J1=G[e0];if(!J1)J1=new j8,G[e0]=J1;let f0=U.getCameraImage(e0);J1.sourceTexture=f0}}}}for(let L0=0;L0<w.length;L0++){let U0=T[L0],A0=w[L0];if(U0!==null&&A0!==void 0)A0.update(U0,G0,K||Y)}if(O0)O0(n,G0);if(G0.detectedPlanes)H.dispatchEvent({type:"planesdetected",data:G0});N=null}let g0=new nH;g0.setAnimationLoop(s0),this.setAnimationLoop=function(n){O0=n},this.dispose=function(){}}}var TD=new G1,YQ=new T0;YQ.set(-1,0,0,0,1,0,0,0,1);function SD(J,$){function H(G,k){if(G.matrixAutoUpdate===!0)G.updateMatrix();k.value.copy(G.matrix)}function Q(G,k){if(k.color.getRGB(G.fogColor.value,F$(J)),k.isFog)G.fogNear.value=k.near,G.fogFar.value=k.far;else if(k.isFogExp2)G.fogDensity.value=k.density}function E(G,k,B,A,w){if(k.isNodeMaterial)k.uniformsNeedUpdate=!1;else if(k.isMeshBasicMaterial)Y(G,k);else if(k.isMeshLambertMaterial){if(Y(G,k),k.envMap)G.envMapIntensity.value=k.envMapIntensity}else if(k.isMeshToonMaterial)Y(G,k),R(G,k);else if(k.isMeshPhongMaterial){if(Y(G,k),U(G,k),k.envMap)G.envMapIntensity.value=k.envMapIntensity}else if(k.isMeshStandardMaterial){if(Y(G,k),Z(G,k),k.isMeshPhysicalMaterial)N(G,k,w)}else if(k.isMeshMatcapMaterial)Y(G,k),M(G,k);else if(k.isMeshDepthMaterial)Y(G,k);else if(k.isMeshDistanceMaterial)Y(G,k),_(G,k);else if(k.isMeshNormalMaterial)Y(G,k);else if(k.isLineBasicMaterial){if(X(G,k),k.isLineDashedMaterial)D(G,k)}else if(k.isPointsMaterial)K(G,k,B,A);else if(k.isSpriteMaterial)W(G,k);else if(k.isShadowMaterial)G.color.value.copy(k.color),G.opacity.value=k.opacity;else if(k.isShaderMaterial)k.uniformsNeedUpdate=!1}function Y(G,k){if(G.opacity.value=k.opacity,k.color)G.diffuse.value.copy(k.color);if(k.emissive)G.emissive.value.copy(k.emissive).multiplyScalar(k.emissiveIntensity);if(k.map)G.map.value=k.map,H(k.map,G.mapTransform);if(k.alphaMap)G.alphaMap.value=k.alphaMap,H(k.alphaMap,G.alphaMapTransform);if(k.bumpMap){if(G.bumpMap.value=k.bumpMap,H(k.bumpMap,G.bumpMapTransform),G.bumpScale.value=k.bumpScale,k.side===T1)G.bumpScale.value*=-1}if(k.normalMap){if(G.normalMap.value=k.normalMap,H(k.normalMap,G.normalMapTransform),G.normalScale.value.copy(k.normalScale),k.side===T1)G.normalScale.value.negate()}if(k.displacementMap)G.displacementMap.value=k.displacementMap,H(k.displacementMap,G.displacementMapTransform),G.displacementScale.value=k.displacementScale,G.displacementBias.value=k.displacementBias;if(k.emissiveMap)G.emissiveMap.value=k.emissiveMap,H(k.emissiveMap,G.emissiveMapTransform);if(k.specularMap)G.specularMap.value=k.specularMap,H(k.specularMap,G.specularMapTransform);if(k.alphaTest>0)G.alphaTest.value=k.alphaTest;let B=$.get(k),A=B.envMap,w=B.envMapRotation;if(A){if(G.envMap.value=A,G.envMapRotation.value.setFromMatrix4(TD.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)G.envMapRotation.value.premultiply(YQ);G.reflectivity.value=k.reflectivity,G.ior.value=k.ior,G.refractionRatio.value=k.refractionRatio}if(k.lightMap)G.lightMap.value=k.lightMap,G.lightMapIntensity.value=k.lightMapIntensity,H(k.lightMap,G.lightMapTransform);if(k.aoMap)G.aoMap.value=k.aoMap,G.aoMapIntensity.value=k.aoMapIntensity,H(k.aoMap,G.aoMapTransform)}function X(G,k){if(G.diffuse.value.copy(k.color),G.opacity.value=k.opacity,k.map)G.map.value=k.map,H(k.map,G.mapTransform)}function D(G,k){G.dashSize.value=k.dashSize,G.totalSize.value=k.dashSize+k.gapSize,G.scale.value=k.scale}function K(G,k,B,A){if(G.diffuse.value.copy(k.color),G.opacity.value=k.opacity,G.size.value=k.size*B,G.scale.value=A*0.5,k.map)G.map.value=k.map,H(k.map,G.uvTransform);if(k.alphaMap)G.alphaMap.value=k.alphaMap,H(k.alphaMap,G.alphaMapTransform);if(k.alphaTest>0)G.alphaTest.value=k.alphaTest}function W(G,k){if(G.diffuse.value.copy(k.color),G.opacity.value=k.opacity,G.rotation.value=k.rotation,k.map)G.map.value=k.map,H(k.map,G.mapTransform);if(k.alphaMap)G.alphaMap.value=k.alphaMap,H(k.alphaMap,G.alphaMapTransform);if(k.alphaTest>0)G.alphaTest.value=k.alphaTest}function U(G,k){G.specular.value.copy(k.specular),G.shininess.value=Math.max(k.shininess,0.0001)}function R(G,k){if(k.gradientMap)G.gradientMap.value=k.gradientMap}function Z(G,k){if(G.metalness.value=k.metalness,k.metalnessMap)G.metalnessMap.value=k.metalnessMap,H(k.metalnessMap,G.metalnessMapTransform);if(G.roughness.value=k.roughness,k.roughnessMap)G.roughnessMap.value=k.roughnessMap,H(k.roughnessMap,G.roughnessMapTransform);if(k.envMap)G.envMapIntensity.value=k.envMapIntensity}function N(G,k,B){if(G.ior.value=k.ior,k.sheen>0){if(G.sheenColor.value.copy(k.sheenColor).multiplyScalar(k.sheen),G.sheenRoughness.value=k.sheenRoughness,k.sheenColorMap)G.sheenColorMap.value=k.sheenColorMap,H(k.sheenColorMap,G.sheenColorMapTransform);if(k.sheenRoughnessMap)G.sheenRoughnessMap.value=k.sheenRoughnessMap,H(k.sheenRoughnessMap,G.sheenRoughnessMapTransform)}if(k.clearcoat>0){if(G.clearcoat.value=k.clearcoat,G.clearcoatRoughness.value=k.clearcoatRoughness,k.clearcoatMap)G.clearcoatMap.value=k.clearcoatMap,H(k.clearcoatMap,G.clearcoatMapTransform);if(k.clearcoatRoughnessMap)G.clearcoatRoughnessMap.value=k.clearcoatRoughnessMap,H(k.clearcoatRoughnessMap,G.clearcoatRoughnessMapTransform);if(k.clearcoatNormalMap){if(G.clearcoatNormalMap.value=k.clearcoatNormalMap,H(k.clearcoatNormalMap,G.clearcoatNormalMapTransform),G.clearcoatNormalScale.value.copy(k.clearcoatNormalScale),k.side===T1)G.clearcoatNormalScale.value.negate()}}if(k.dispersion>0)G.dispersion.value=k.dispersion;if(k.iridescence>0){if(G.iridescence.value=k.iridescence,G.iridescenceIOR.value=k.iridescenceIOR,G.iridescenceThicknessMinimum.value=k.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=k.iridescenceThicknessRange[1],k.iridescenceMap)G.iridescenceMap.value=k.iridescenceMap,H(k.iridescenceMap,G.iridescenceMapTransform);if(k.iridescenceThicknessMap)G.iridescenceThicknessMap.value=k.iridescenceThicknessMap,H(k.iridescenceThicknessMap,G.iridescenceThicknessMapTransform)}if(k.transmission>0){if(G.transmission.value=k.transmission,G.transmissionSamplerMap.value=B.texture,G.transmissionSamplerSize.value.set(B.width,B.height),k.transmissionMap)G.transmissionMap.value=k.transmissionMap,H(k.transmissionMap,G.transmissionMapTransform);if(G.thickness.value=k.thickness,k.thicknessMap)G.thicknessMap.value=k.thicknessMap,H(k.thicknessMap,G.thicknessMapTransform);G.attenuationDistance.value=k.attenuationDistance,G.attenuationColor.value.copy(k.attenuationColor)}if(k.anisotropy>0){if(G.anisotropyVector.value.set(k.anisotropy*Math.cos(k.anisotropyRotation),k.anisotropy*Math.sin(k.anisotropyRotation)),k.anisotropyMap)G.anisotropyMap.value=k.anisotropyMap,H(k.anisotropyMap,G.anisotropyMapTransform)}if(G.specularIntensity.value=k.specularIntensity,G.specularColor.value.copy(k.specularColor),k.specularColorMap)G.specularColorMap.value=k.specularColorMap,H(k.specularColorMap,G.specularColorMapTransform);if(k.specularIntensityMap)G.specularIntensityMap.value=k.specularIntensityMap,H(k.specularIntensityMap,G.specularIntensityMapTransform)}function M(G,k){if(k.matcap)G.matcap.value=k.matcap}function _(G,k){let B=$.get(k).light;G.referencePosition.value.setFromMatrixPosition(B.matrixWorld),G.nearDistance.value=B.shadow.camera.near,G.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:Q,refreshMaterialUniforms:E}}function jD(J,$,H,Q){let E={},Y={},X=[],D=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(B,A){let w=A.program;Q.uniformBlockBinding(B,w)}function W(B,A){let w=E[B.id];if(w===void 0)M(B),w=U(B),E[B.id]=w,B.addEventListener("dispose",G);let T=A.program;Q.updateUBOMapping(B,T);let z=$.render.frame;if(Y[B.id]!==z)Z(B),Y[B.id]=z}function U(B){let A=R();B.__bindingPointIndex=A;let w=J.createBuffer(),T=B.__size,z=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,T,z),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,w),w}function R(){for(let B=0;B<D;B++)if(X.indexOf(B)===-1)return X.push(B),B;return P0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function Z(B){let A=E[B.id],w=B.uniforms,T=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let z=0,C=w.length;z<C;z++){let O=Array.isArray(w[z])?w[z]:[w[z]];for(let I=0,u=O.length;I<u;I++){let V=O[I];if(N(V,z,I,T)===!0){let l=V.__offset,s=Array.isArray(V.value)?V.value:[V.value],f=0;for(let m=0;m<s.length;m++){let x=s[m],p=_(x);if(typeof x==="number"||typeof x==="boolean")V.__data[0]=x,J.bufferSubData(J.UNIFORM_BUFFER,l+f,V.__data);else if(x.isMatrix3)V.__data[0]=x.elements[0],V.__data[1]=x.elements[1],V.__data[2]=x.elements[2],V.__data[3]=0,V.__data[4]=x.elements[3],V.__data[5]=x.elements[4],V.__data[6]=x.elements[5],V.__data[7]=0,V.__data[8]=x.elements[6],V.__data[9]=x.elements[7],V.__data[10]=x.elements[8],V.__data[11]=0;else if(ArrayBuffer.isView(x))V.__data.set(new x.constructor(x.buffer,x.byteOffset,V.__data.length));else x.toArray(V.__data,f),f+=p.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,l,V.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(B,A,w,T){let z=B.value,C=A+"_"+w;if(T[C]===void 0){if(typeof z==="number"||typeof z==="boolean")T[C]=z;else if(ArrayBuffer.isView(z))T[C]=z.slice();else T[C]=z.clone();return!0}else{let O=T[C];if(typeof z==="number"||typeof z==="boolean"){if(O!==z)return T[C]=z,!0}else if(ArrayBuffer.isView(z))return!0;else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function M(B){let A=B.uniforms,w=0,T=16;for(let C=0,O=A.length;C<O;C++){let I=Array.isArray(A[C])?A[C]:[A[C]];for(let u=0,V=I.length;u<V;u++){let l=I[u],s=Array.isArray(l.value)?l.value:[l.value];for(let f=0,m=s.length;f<m;f++){let x=s[f],p=_(x),a=w%T,$0=a%p.boundary,k0=a+$0;if(w+=$0,k0!==0&&T-k0<p.storage)w+=T-k0;l.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=w,w+=p.storage}}}let z=w%T;if(z>0)w+=T-z;return B.__size=w,B.__cache={},this}function _(B){let A={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")A.boundary=4,A.storage=4;else if(B.isVector2)A.boundary=8,A.storage=8;else if(B.isVector3||B.isColor)A.boundary=16,A.storage=12;else if(B.isVector4)A.boundary=16,A.storage=16;else if(B.isMatrix3)A.boundary=48,A.storage=48;else if(B.isMatrix4)A.boundary=64,A.storage=64;else if(B.isTexture)z0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(B))A.boundary=16,A.storage=B.byteLength;else z0("WebGLRenderer: Unsupported uniform value type.",B);return A}function G(B){let A=B.target;A.removeEventListener("dispose",G);let w=X.indexOf(A.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(E[A.id]),delete E[A.id],delete Y[A.id]}function k(){for(let B in E)J.deleteBuffer(E[B]);X=[],E={},Y={}}return{bind:K,update:W,dispose:k}}var hD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),HJ=null;function fD(){if(HJ===null)HJ=new k$(hD,16,16,xJ,UJ),HJ.name="DFG_LUT",HJ.minFilter=S1,HJ.magFilter=S1,HJ.wrapS=F8,HJ.wrapT=F8,HJ.generateMipmaps=!1,HJ.needsUpdate=!0;return HJ}class c${constructor(J={}){let{canvas:$=NH(),context:H=null,depth:Q=!0,stencil:E=!1,alpha:Y=!1,antialias:X=!1,premultipliedAlpha:D=!0,preserveDrawingBuffer:K=!1,powerPreference:W="default",failIfMajorPerformanceCaveat:U=!1,reversedDepthBuffer:R=!1,outputBufferType:Z=o1}=J;this.isWebGLRenderer=!0;let N;if(H!==null){if(typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=H.getContextAttributes().alpha}else N=Y;let M=Z,_=new Set([V9,A9,w9]),G=new Set([o1,VJ,S7,R7,_9,I9]),k=new Uint32Array(4),B=new Int32Array(4),A=new v,w=null,T=null,z=[],C=[],O=null;this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=s1,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,u=!1,V=null;this._outputColorSpace=WH;let l=0,s=0,f=null,m=-1,x=null,p=new K1,a=new K1,$0=null,k0=new i0(0),w0=0,O0=$.width,s0=$.height,g0=1,n=null,G0=null,L0=new K1(0,0,O0,s0),U0=new K1(0,0,O0,s0),A0=!1,n0=new T8,v0=!1,p0=!1,e0=new G1,J1=new v,f0=new K1,O1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},L1=!1;function U1(){return f===null?g0:1}let S=H;function V1(q,j){return $.getContext(q,j)}try{let q={alpha:!0,depth:Q,stencil:E,antialias:X,premultipliedAlpha:D,preserveDrawingBuffer:K,powerPreference:W,failIfMajorPerformanceCaveat:U};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${O6}`);if($.addEventListener("webglcontextlost",q0,!1),$.addEventListener("webglcontextrestored",t,!1),$.addEventListener("webglcontextcreationerror",B0,!1),S===null){if(S=V1("webgl2",q),S===null)if(V1("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(q){throw P0("WebGLRenderer: "+q.message),q}let d0,c0,W0,X1,V0,L,F,h,o,r,e,Y0,d,i,E0,N0,H0,X0,C0,h0,y0,P,Q0;function c(){if(d0=new lY(S),d0.init(),y0=new zD(S,d0),c0=new hY(S,d0,J,y0),W0=new AD(S,d0),c0.reversedDepthBuffer&&R)W0.buffers.depth.setReversed(!0);X1=new uY(S),V0=new GD,L=new VD(S,d0,W0,V0,c0,y0,X1),F=new pY(I),h=new sQ(S),P=new SY(S,h),o=new dY(S,h,X1,P),r=new nY(S,o,h,P,X1),X0=new cY(S,c0,L),E0=new fY(V0),e=new ZD(I,F,d0,c0,P,E0),Y0=new SD(I,V0),d=new kD,i=new MD(d0),H0=new TY(I,F,W0,r,N,D),N0=new wD(I,r,c0),Q0=new jD(S,X1,c0,W0),C0=new jY(S,d0,X1),h0=new mY(S,d0,X1),X1.programs=e.programs,I.capabilities=c0,I.extensions=d0,I.properties=V0,I.renderLists=d,I.shadowMap=N0,I.state=W0,I.info=X1}if(c(),M!==o1)O=new sY(M,$.width,$.height,Q,E);let J0=new EQ(I,S);this.xr=J0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let q=d0.get("WEBGL_lose_context");if(q)q.loseContext()},this.forceContextRestore=function(){let q=d0.get("WEBGL_lose_context");if(q)q.restoreContext()},this.getPixelRatio=function(){return g0},this.setPixelRatio=function(q){if(q===void 0)return;g0=q,this.setSize(O0,s0,!1)},this.getSize=function(q){return q.set(O0,s0)},this.setSize=function(q,j,g=!0){if(J0.isPresenting){z0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=q,s0=j,$.width=Math.floor(q*g0),$.height=Math.floor(j*g0),g===!0)$.style.width=q+"px",$.style.height=j+"px";if(O!==null)O.setSize($.width,$.height);this.setViewport(0,0,q,j)},this.getDrawingBufferSize=function(q){return q.set(O0*g0,s0*g0).floor()},this.setDrawingBufferSize=function(q,j,g){O0=q,s0=j,g0=g,$.width=Math.floor(q*g),$.height=Math.floor(j*g),this.setViewport(0,0,q,j)},this.setEffects=function(q){if(M===o1){P0("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(q){for(let j=0;j<q.length;j++)if(q[j].isOutputPass===!0){z0("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(q||[])},this.getCurrentViewport=function(q){return q.copy(p)},this.getViewport=function(q){return q.copy(L0)},this.setViewport=function(q,j,g,b){if(q.isVector4)L0.set(q.x,q.y,q.z,q.w);else L0.set(q,j,g,b);W0.viewport(p.copy(L0).multiplyScalar(g0).round())},this.getScissor=function(q){return q.copy(U0)},this.setScissor=function(q,j,g,b){if(q.isVector4)U0.set(q.x,q.y,q.z,q.w);else U0.set(q,j,g,b);W0.scissor(a.copy(U0).multiplyScalar(g0).round())},this.getScissorTest=function(){return A0},this.setScissorTest=function(q){W0.setScissorTest(A0=q)},this.setOpaqueSort=function(q){n=q},this.setTransparentSort=function(q){G0=q},this.getClearColor=function(q){return q.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(q=!0,j=!0,g=!0){let b=0;if(q){let y=!1;if(f!==null){let Z0=f.texture.format;y=_.has(Z0)}if(y){let Z0=f.texture.type,F0=G.has(Z0),K0=H0.getClearColor(),M0=H0.getClearAlpha(),_0=K0.r,j0=K0.g,x0=K0.b;if(F0)k[0]=_0,k[1]=j0,k[2]=x0,k[3]=M0,S.clearBufferuiv(S.COLOR,0,k);else B[0]=_0,B[1]=j0,B[2]=x0,B[3]=M0,S.clearBufferiv(S.COLOR,0,B)}else b|=S.COLOR_BUFFER_BIT}if(j)b|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)b|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)S.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(q){q.setRenderer(this),V=q},this.dispose=function(){$.removeEventListener("webglcontextlost",q0,!1),$.removeEventListener("webglcontextrestored",t,!1),$.removeEventListener("webglcontextcreationerror",B0,!1),H0.dispose(),d.dispose(),i.dispose(),V0.dispose(),F.dispose(),r.dispose(),P.dispose(),Q0.dispose(),e.dispose(),J0.dispose(),J0.removeEventListener("sessionstart",n$),J0.removeEventListener("sessionend",i$),CJ.stop()};function q0(q){q.preventDefault(),K$("WebGLRenderer: Context Lost."),u=!0}function t(){K$("WebGLRenderer: Context Restored."),u=!1;let q=X1.autoReset,j=N0.enabled,g=N0.autoUpdate,b=N0.needsUpdate,y=N0.type;c(),X1.autoReset=q,N0.enabled=j,N0.autoUpdate=g,N0.needsUpdate=b,N0.type=y}function B0(q){P0("WebGLRenderer: A WebGL context could not be created. Reason: ",q.statusMessage)}function S0(q){let j=q.target;j.removeEventListener("dispose",S0),k1(j)}function k1(q){r0(q),V0.remove(q)}function r0(q){let j=V0.get(q).programs;if(j!==void 0){if(j.forEach(function(g){e.releaseProgram(g)}),q.isShaderMaterial)e.releaseShaderCache(q)}}this.renderBufferDirect=function(q,j,g,b,y,Z0){if(j===null)j=O1;let F0=y.isMesh&&y.matrixWorld.determinant()<0,K0=WQ(q,j,g,b,y);W0.setMaterial(b,F0);let M0=g.index,_0=1;if(b.wireframe===!0){if(M0=o.getWireframeAttribute(g),M0===void 0)return;_0=2}let j0=g.drawRange,x0=g.attributes.position,I0=j0.start*_0,t0=(j0.start+j0.count)*_0;if(Z0!==null)I0=Math.max(I0,Z0.start*_0),t0=Math.min(t0,(Z0.start+Z0.count)*_0);if(M0!==null)I0=Math.max(I0,0),t0=Math.min(t0,M0.count);else if(x0!==void 0&&x0!==null)I0=Math.max(I0,0),t0=Math.min(t0,x0.count);let W1=t0-I0;if(W1<0||W1===1/0)return;P.setup(y,b,K0,g,M0);let D1,$1=C0;if(M0!==null)D1=h.get(M0),$1=h0,$1.setIndex(D1);if(y.isMesh)if(b.wireframe===!0)W0.setLineWidth(b.wireframeLinewidth*U1()),$1.setMode(S.LINES);else $1.setMode(S.TRIANGLES);else if(y.isLine){let B1=b.linewidth;if(B1===void 0)B1=1;if(W0.setLineWidth(B1*U1()),y.isLineSegments)$1.setMode(S.LINES);else if(y.isLineLoop)$1.setMode(S.LINE_LOOP);else $1.setMode(S.LINE_STRIP)}else if(y.isPoints)$1.setMode(S.POINTS);else if(y.isSprite)$1.setMode(S.TRIANGLES);if(y.isBatchedMesh)if(!d0.get("WEBGL_multi_draw")){let{_multiDrawStarts:B1,_multiDrawCounts:R0,_multiDrawCount:f1}=y,u0=M0?h.get(M0).bytesPerElement:1,y1=V0.get(b).currentProgram.getUniforms();for(let r1=0;r1<f1;r1++)y1.setValue(S,"_gl_DrawID",r1),$1.render(B1[r1]/u0,R0[r1])}else $1.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)$1.renderInstances(I0,W1,y.count);else if(g.isInstancedBufferGeometry){let B1=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,R0=Math.min(g.instanceCount,B1);$1.renderInstances(I0,W1,R0)}else $1.render(I0,W1)};function a1(q,j,g){if(q.transparent===!0&&q.side===e1&&q.forceSinglePass===!1)q.side=T1,q.needsUpdate=!0,u7(q,j,g),q.side=Z7,q.needsUpdate=!0,u7(q,j,g),q.side=e1;else u7(q,j,g)}this.compile=function(q,j,g=null){if(g===null)g=q;if(T=i.get(g),T.init(j),C.push(T),g.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}}),q!==g)q.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}});T.setupLights();let b=new Set;return q.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let Z0=y.material;if(Z0)if(Array.isArray(Z0))for(let F0=0;F0<Z0.length;F0++){let K0=Z0[F0];a1(K0,g,y),b.add(K0)}else a1(Z0,g,y),b.add(Z0)}),T=C.pop(),b},this.compileAsync=function(q,j,g=null){let b=this.compile(q,j,g);return new Promise((y)=>{function Z0(){if(b.forEach(function(F0){if(V0.get(F0).currentProgram.isReady())b.delete(F0)}),b.size===0){y(q);return}setTimeout(Z0,10)}if(d0.get("KHR_parallel_shader_compile")!==null)Z0();else setTimeout(Z0,10)})};let u1=null;function DQ(q){if(u1)u1(q)}function n$(){CJ.stop()}function i$(){CJ.start()}let CJ=new nH;if(CJ.setAnimationLoop(DQ),typeof self<"u")CJ.setContext(self);this.setAnimationLoop=function(q){u1=q,J0.setAnimationLoop(q),q===null?CJ.stop():CJ.start()},J0.addEventListener("sessionstart",n$),J0.addEventListener("sessionend",i$),this.render=function(q,j){if(j!==void 0&&j.isCamera!==!0){P0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;if(V!==null)V.renderStart(q,j);let g=J0.enabled===!0&&J0.isPresenting===!0,b=O!==null&&(f===null||g)&&O.begin(I,f);if(q.matrixWorldAutoUpdate===!0)q.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(J0.enabled===!0&&J0.isPresenting===!0&&(O===null||O.isCompositing()===!1)){if(J0.cameraAutoUpdate===!0)J0.updateCamera(j);j=J0.getCamera()}if(q.isScene===!0)q.onBeforeRender(I,q,j,f);if(T=i.get(q,C.length),T.init(j),T.state.textureUnits=L.getTextureUnits(),C.push(T),e0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),n0.setFromProjectionMatrix(e0,D$,j.reversedDepth),p0=this.localClippingEnabled,v0=E0.init(this.clippingPlanes,p0),w=d.get(q,z.length),w.init(),z.push(w),J0.enabled===!0&&J0.isPresenting===!0){let F0=I.xr.getDepthSensingMesh();if(F0!==null)p8(F0,j,-1/0,I.sortObjects)}if(p8(q,j,0,I.sortObjects),w.finish(),I.sortObjects===!0)w.sort(n,G0);if(L1=J0.enabled===!1||J0.isPresenting===!1||J0.hasDepthSensing()===!1,L1)H0.addToRenderList(w,q);if(this.info.render.frame++,v0===!0)E0.beginShadows();let y=T.state.shadowsArray;if(N0.render(y,q,j),v0===!0)E0.endShadows();if(this.info.autoReset===!0)this.info.reset();if((b&&O.hasRenderPass())===!1){let{opaque:F0,transmissive:K0}=w;if(T.setupLights(),j.isArrayCamera){let M0=j.cameras;if(K0.length>0)for(let _0=0,j0=M0.length;_0<j0;_0++){let x0=M0[_0];o$(F0,K0,q,x0)}if(L1)H0.render(q);for(let _0=0,j0=M0.length;_0<j0;_0++){let x0=M0[_0];s$(w,q,x0,x0.viewport)}}else{if(K0.length>0)o$(F0,K0,q,j);if(L1)H0.render(q);s$(w,q,j)}}if(f!==null&&s===0)L.updateMultisampleRenderTarget(f),L.updateRenderTargetMipmap(f);if(b)O.end(I);if(q.isScene===!0)q.onAfterRender(I,q,j);if(P.resetDefaultState(),m=-1,x=null,C.pop(),C.length>0){if(T=C[C.length-1],L.setTextureUnits(T.state.textureUnits),v0===!0)E0.setGlobalState(I.clippingPlanes,T.state.camera)}else T=null;if(z.pop(),z.length>0)w=z[z.length-1];else w=null;if(V!==null)V.renderEnd()};function p8(q,j,g,b){if(q.visible===!1)return;if(q.layers.test(j.layers)){if(q.isGroup)g=q.renderOrder;else if(q.isLOD){if(q.autoUpdate===!0)q.update(j)}else if(q.isLightProbeGrid)T.pushLightProbeGrid(q);else if(q.isLight){if(T.pushLight(q),q.castShadow)T.pushShadow(q)}else if(q.isSprite){if(!q.frustumCulled||n0.intersectsSprite(q)){if(b)f0.setFromMatrixPosition(q.matrixWorld).applyMatrix4(e0);let F0=r.update(q),K0=q.material;if(K0.visible)w.push(q,F0,K0,g,f0.z,null)}}else if(q.isMesh||q.isLine||q.isPoints){if(!q.frustumCulled||n0.intersectsObject(q)){let F0=r.update(q),K0=q.material;if(b){if(q.boundingSphere!==void 0){if(q.boundingSphere===null)q.computeBoundingSphere();f0.copy(q.boundingSphere.center)}else{if(F0.boundingSphere===null)F0.computeBoundingSphere();f0.copy(F0.boundingSphere.center)}f0.applyMatrix4(q.matrixWorld).applyMatrix4(e0)}if(Array.isArray(K0)){let M0=F0.groups;for(let _0=0,j0=M0.length;_0<j0;_0++){let x0=M0[_0],I0=K0[x0.materialIndex];if(I0&&I0.visible)w.push(q,F0,I0,g,f0.z,x0)}}else if(K0.visible)w.push(q,F0,K0,g,f0.z,null)}}}let Z0=q.children;for(let F0=0,K0=Z0.length;F0<K0;F0++)p8(Z0[F0],j,g,b)}function s$(q,j,g,b){let{opaque:y,transmissive:Z0,transparent:F0}=q;if(T.setupLightsView(g),v0===!0)E0.setGlobalState(I.clippingPlanes,g);if(b)W0.viewport(p.copy(b));if(y.length>0)m7(y,j,g);if(Z0.length>0)m7(Z0,j,g);if(F0.length>0)m7(F0,j,g);W0.buffers.depth.setTest(!0),W0.buffers.depth.setMask(!0),W0.buffers.color.setMask(!0),W0.setPolygonOffset(!1)}function o$(q,j,g,b){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[b.id]===void 0){let I0=d0.has("EXT_color_buffer_half_float")||d0.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[b.id]=new l1(1,1,{generateMipmaps:!0,type:I0?UJ:o1,minFilter:bJ,samples:Math.max(4,c0.samples),stencilBuffer:E,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let Z0=T.state.transmissionRenderTarget[b.id],F0=b.viewport||p;Z0.setSize(F0.z*I.transmissionResolutionScale,F0.w*I.transmissionResolutionScale);let K0=I.getRenderTarget(),M0=I.getActiveCubeFace(),_0=I.getActiveMipmapLevel();if(I.setRenderTarget(Z0),I.getClearColor(k0),w0=I.getClearAlpha(),w0<1)I.setClearColor(16777215,0.5);if(I.clear(),L1)H0.render(g);let j0=I.toneMapping;I.toneMapping=s1;let x0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(T.setupLightsView(b),v0===!0)E0.setGlobalState(I.clippingPlanes,b);if(m7(q,g,b),L.updateMultisampleRenderTarget(Z0),L.updateRenderTargetMipmap(Z0),d0.has("WEBGL_multisampled_render_to_texture")===!1){let I0=!1;for(let t0=0,W1=j.length;t0<W1;t0++){let D1=j[t0],{object:$1,geometry:B1,material:R0,group:f1}=D1;if(R0.side===e1&&$1.layers.test(b.layers)){let u0=R0.side;R0.side=T1,R0.needsUpdate=!0,a$($1,g,b,B1,R0,f1),R0.side=u0,R0.needsUpdate=!0,I0=!0}}if(I0===!0)L.updateMultisampleRenderTarget(Z0),L.updateRenderTargetMipmap(Z0)}if(I.setRenderTarget(K0,M0,_0),I.setClearColor(k0,w0),x0!==void 0)b.viewport=x0;I.toneMapping=j0}function m7(q,j,g){let b=j.isScene===!0?j.overrideMaterial:null;for(let y=0,Z0=q.length;y<Z0;y++){let F0=q[y],{object:K0,geometry:M0,group:_0}=F0,j0=F0.material;if(j0.allowOverride===!0&&b!==null)j0=b;if(K0.layers.test(g.layers))a$(K0,j,g,M0,j0,_0)}}function a$(q,j,g,b,y,Z0){if(q.onBeforeRender(I,j,g,b,y,Z0),q.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,q.matrixWorld),q.normalMatrix.getNormalMatrix(q.modelViewMatrix),y.onBeforeRender(I,j,g,b,q,Z0),y.transparent===!0&&y.side===e1&&y.forceSinglePass===!1)y.side=T1,y.needsUpdate=!0,I.renderBufferDirect(g,j,b,y,q,Z0),y.side=Z7,y.needsUpdate=!0,I.renderBufferDirect(g,j,b,y,q,Z0),y.side=e1;else I.renderBufferDirect(g,j,b,y,q,Z0);q.onAfterRender(I,j,g,b,y,Z0)}function u7(q,j,g){if(j.isScene!==!0)j=O1;let b=V0.get(q),y=T.state.lights,Z0=T.state.shadowsArray,F0=y.state.version,K0=e.getParameters(q,y.state,Z0,j,g,T.state.lightProbeGridArray),M0=e.getProgramCacheKey(K0),_0=b.programs;b.environment=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?j.environment:null,b.fog=j.fog;let j0=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap;if(b.envMap=F.get(q.envMap||b.environment,j0),b.envMapRotation=b.environment!==null&&q.envMap===null?j.environmentRotation:q.envMapRotation,_0===void 0)q.addEventListener("dispose",S0),_0=new Map,b.programs=_0;let x0=_0.get(M0);if(x0!==void 0){if(b.currentProgram===x0&&b.lightsStateVersion===F0)return t$(q,K0),x0}else{if(K0.uniforms=e.getUniforms(q),V!==null&&q.isNodeMaterial)V.build(q,g,K0);q.onBeforeCompile(K0,I),x0=e.acquireProgram(K0,M0),_0.set(M0,x0),b.uniforms=K0.uniforms}let I0=b.uniforms;if(!q.isShaderMaterial&&!q.isRawShaderMaterial||q.clipping===!0)I0.clippingPlanes=E0.uniform;if(t$(q,K0),b.needsLights=GQ(q),b.lightsStateVersion=F0,b.needsLights)I0.ambientLightColor.value=y.state.ambient,I0.lightProbe.value=y.state.probe,I0.directionalLights.value=y.state.directional,I0.directionalLightShadows.value=y.state.directionalShadow,I0.spotLights.value=y.state.spot,I0.spotLightShadows.value=y.state.spotShadow,I0.rectAreaLights.value=y.state.rectArea,I0.ltc_1.value=y.state.rectAreaLTC1,I0.ltc_2.value=y.state.rectAreaLTC2,I0.pointLights.value=y.state.point,I0.pointLightShadows.value=y.state.pointShadow,I0.hemisphereLights.value=y.state.hemi,I0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,I0.spotLightMatrix.value=y.state.spotLightMatrix,I0.spotLightMap.value=y.state.spotLightMap,I0.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.lightProbeGrid=T.state.lightProbeGridArray.length>0,b.currentProgram=x0,b.uniformsList=null,x0}function r$(q){if(q.uniformsList===null){let j=q.currentProgram.getUniforms();q.uniformsList=d7.seqWithValue(j.seq,q.uniforms)}return q.uniformsList}function t$(q,j){let g=V0.get(q);g.outputColorSpace=j.outputColorSpace,g.batching=j.batching,g.batchingColor=j.batchingColor,g.instancing=j.instancing,g.instancingColor=j.instancingColor,g.instancingMorph=j.instancingMorph,g.skinning=j.skinning,g.morphTargets=j.morphTargets,g.morphNormals=j.morphNormals,g.morphColors=j.morphColors,g.morphTargetsCount=j.morphTargetsCount,g.numClippingPlanes=j.numClippingPlanes,g.numIntersection=j.numClipIntersection,g.vertexAlphas=j.vertexAlphas,g.vertexTangents=j.vertexTangents,g.toneMapping=j.toneMapping}function KQ(q,j){if(q.length===0)return null;if(q.length===1)return q[0].texture!==null?q[0]:null;A.setFromMatrixPosition(j.matrixWorld);for(let g=0,b=q.length;g<b;g++){let y=q[g];if(y.texture!==null&&y.boundingBox.containsPoint(A))return y}return null}function WQ(q,j,g,b,y){if(j.isScene!==!0)j=O1;L.resetTextureUnits();let Z0=j.fog,F0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,K0=f===null?I.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:l0.workingColorSpace,M0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,_0=F.get(b.envMap||F0,M0),j0=b.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,x0=!!g.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),I0=!!g.morphAttributes.position,t0=!!g.morphAttributes.normal,W1=!!g.morphAttributes.color,D1=s1;if(b.toneMapped){if(f===null||f.isXRRenderTarget===!0)D1=I.toneMapping}let $1=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,B1=$1!==void 0?$1.length:0,R0=V0.get(b),f1=T.state.lights;if(v0===!0){if(p0===!0||q!==x){let E1=q===x&&b.id===m;E0.setState(b,q,E1)}}let u0=!1;if(b.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==f1.state.version)u0=!0;else if(R0.outputColorSpace!==K0)u0=!0;else if(y.isBatchedMesh&&R0.batching===!1)u0=!0;else if(!y.isBatchedMesh&&R0.batching===!0)u0=!0;else if(y.isBatchedMesh&&R0.batchingColor===!0&&y.colorTexture===null)u0=!0;else if(y.isBatchedMesh&&R0.batchingColor===!1&&y.colorTexture!==null)u0=!0;else if(y.isInstancedMesh&&R0.instancing===!1)u0=!0;else if(!y.isInstancedMesh&&R0.instancing===!0)u0=!0;else if(y.isSkinnedMesh&&R0.skinning===!1)u0=!0;else if(!y.isSkinnedMesh&&R0.skinning===!0)u0=!0;else if(y.isInstancedMesh&&R0.instancingColor===!0&&y.instanceColor===null)u0=!0;else if(y.isInstancedMesh&&R0.instancingColor===!1&&y.instanceColor!==null)u0=!0;else if(y.isInstancedMesh&&R0.instancingMorph===!0&&y.morphTexture===null)u0=!0;else if(y.isInstancedMesh&&R0.instancingMorph===!1&&y.morphTexture!==null)u0=!0;else if(R0.envMap!==_0)u0=!0;else if(b.fog===!0&&R0.fog!==Z0)u0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==E0.numPlanes||R0.numIntersection!==E0.numIntersection))u0=!0;else if(R0.vertexAlphas!==j0)u0=!0;else if(R0.vertexTangents!==x0)u0=!0;else if(R0.morphTargets!==I0)u0=!0;else if(R0.morphNormals!==t0)u0=!0;else if(R0.morphColors!==W1)u0=!0;else if(R0.toneMapping!==D1)u0=!0;else if(R0.morphTargetsCount!==B1)u0=!0;else if(!!R0.lightProbeGrid!==T.state.lightProbeGridArray.length>0)u0=!0}else u0=!0,R0.__version=b.version;let y1=R0.currentProgram;if(u0===!0){if(y1=u7(b,j,y),V&&b.isNodeMaterial)V.onUpdateProgram(b,y1,R0)}let r1=!1,FJ=!1,nJ=!1,H1=y1.getUniforms(),Z1=R0.uniforms;if(W0.useProgram(y1.program))r1=!0,FJ=!0,nJ=!0;if(b.id!==m)m=b.id,FJ=!0;if(R0.needsLights){let E1=KQ(T.state.lightProbeGridArray,y);if(R0.lightProbeGrid!==E1)R0.lightProbeGrid=E1,FJ=!0}if(r1||x!==q){if(W0.buffers.depth.getReversed()&&q.reversedDepth!==!0)q._reversedDepth=!0,q.updateProjectionMatrix();H1.setValue(S,"projectionMatrix",q.projectionMatrix),H1.setValue(S,"viewMatrix",q.matrixWorldInverse);let qJ=H1.map.cameraPosition;if(qJ!==void 0)qJ.setValue(S,J1.setFromMatrixPosition(q.matrixWorld));if(c0.logarithmicDepthBuffer)H1.setValue(S,"logDepthBufFC",2/(Math.log(q.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)H1.setValue(S,"isOrthographic",q.isOrthographicCamera===!0);if(x!==q)x=q,FJ=!0,nJ=!0}if(R0.needsLights){if(f1.state.directionalShadowMap.length>0)H1.setValue(S,"directionalShadowMap",f1.state.directionalShadowMap,L);if(f1.state.spotShadowMap.length>0)H1.setValue(S,"spotShadowMap",f1.state.spotShadowMap,L);if(f1.state.pointShadowMap.length>0)H1.setValue(S,"pointShadowMap",f1.state.pointShadowMap,L)}if(y.isSkinnedMesh){H1.setOptional(S,y,"bindMatrix"),H1.setOptional(S,y,"bindMatrixInverse");let E1=y.skeleton;if(E1){if(E1.boneTexture===null)E1.computeBoneTexture();H1.setValue(S,"boneTexture",E1.boneTexture,L)}}if(y.isBatchedMesh){if(H1.setOptional(S,y,"batchingTexture"),H1.setValue(S,"batchingTexture",y._matricesTexture,L),H1.setOptional(S,y,"batchingIdTexture"),H1.setValue(S,"batchingIdTexture",y._indirectTexture,L),H1.setOptional(S,y,"batchingColorTexture"),y._colorsTexture!==null)H1.setValue(S,"batchingColorTexture",y._colorsTexture,L)}let NJ=g.morphAttributes;if(NJ.position!==void 0||NJ.normal!==void 0||NJ.color!==void 0)X0.update(y,g,y1);if(FJ||R0.receiveShadow!==y.receiveShadow)R0.receiveShadow=y.receiveShadow,H1.setValue(S,"receiveShadow",y.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&j.environment!==null)Z1.envMapIntensity.value=j.environmentIntensity;if(Z1.dfgLUT!==void 0)Z1.dfgLUT.value=fD();if(FJ){if(H1.setValue(S,"toneMappingExposure",I.toneMappingExposure),R0.needsLights)ZQ(Z1,nJ);if(Z0&&b.fog===!0)Y0.refreshFogUniforms(Z1,Z0);if(Y0.refreshMaterialUniforms(Z1,b,g0,s0,T.state.transmissionRenderTarget[q.id]),R0.needsLights&&R0.lightProbeGrid){let E1=R0.lightProbeGrid;Z1.probesSH.value=E1.texture,Z1.probesMin.value.copy(E1.boundingBox.min),Z1.probesMax.value.copy(E1.boundingBox.max),Z1.probesResolution.value.copy(E1.resolution)}d7.upload(S,r$(R0),Z1,L)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)d7.upload(S,r$(R0),Z1,L),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)H1.setValue(S,"center",y.center);if(H1.setValue(S,"modelViewMatrix",y.modelViewMatrix),H1.setValue(S,"normalMatrix",y.normalMatrix),H1.setValue(S,"modelMatrix",y.matrixWorld),b.uniformsGroups!==void 0){let E1=b.uniformsGroups;for(let qJ=0,iJ=E1.length;qJ<iJ;qJ++){let e$=E1[qJ];Q0.update(e$,y1),Q0.bind(e$,y1)}}return y1}function ZQ(q,j){q.ambientLightColor.needsUpdate=j,q.lightProbe.needsUpdate=j,q.directionalLights.needsUpdate=j,q.directionalLightShadows.needsUpdate=j,q.pointLights.needsUpdate=j,q.pointLightShadows.needsUpdate=j,q.spotLights.needsUpdate=j,q.spotLightShadows.needsUpdate=j,q.rectAreaLights.needsUpdate=j,q.hemisphereLights.needsUpdate=j}function GQ(q){return q.isMeshLambertMaterial||q.isMeshToonMaterial||q.isMeshPhongMaterial||q.isMeshStandardMaterial||q.isShadowMaterial||q.isShaderMaterial&&q.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(q,j,g){let b=V0.get(q);if(b.__autoAllocateDepthBuffer=q.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;V0.get(q.texture).__webglTexture=j,V0.get(q.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:g,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(q,j){let g=V0.get(q);g.__webglFramebuffer=j,g.__useDefaultFramebuffer=j===void 0};let UQ=S.createFramebuffer();this.setRenderTarget=function(q,j=0,g=0){f=q,l=j,s=g;let b=null,y=!1,Z0=!1;if(q){let K0=V0.get(q);if(K0.__useDefaultFramebuffer!==void 0){W0.bindFramebuffer(S.FRAMEBUFFER,K0.__webglFramebuffer),p.copy(q.viewport),a.copy(q.scissor),$0=q.scissorTest,W0.viewport(p),W0.scissor(a),W0.setScissorTest($0),m=-1;return}else if(K0.__webglFramebuffer===void 0)L.setupRenderTarget(q);else if(K0.__hasExternalTextures)L.rebindTextures(q,V0.get(q.texture).__webglTexture,V0.get(q.depthTexture).__webglTexture);else if(q.depthBuffer){let j0=q.depthTexture;if(K0.__boundDepthTexture!==j0){if(j0!==null&&V0.has(j0)&&(q.width!==j0.image.width||q.height!==j0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(q)}}let M0=q.texture;if(M0.isData3DTexture||M0.isDataArrayTexture||M0.isCompressedArrayTexture)Z0=!0;let _0=V0.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget){if(Array.isArray(_0[j]))b=_0[j][g];else b=_0[j];y=!0}else if(q.samples>0&&L.useMultisampledRTT(q)===!1)b=V0.get(q).__webglMultisampledFramebuffer;else if(Array.isArray(_0))b=_0[g];else b=_0;p.copy(q.viewport),a.copy(q.scissor),$0=q.scissorTest}else p.copy(L0).multiplyScalar(g0).floor(),a.copy(U0).multiplyScalar(g0).floor(),$0=A0;if(g!==0)b=UQ;if(W0.bindFramebuffer(S.FRAMEBUFFER,b))W0.drawBuffers(q,b);if(W0.viewport(p),W0.scissor(a),W0.setScissorTest($0),y){let K0=V0.get(q.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+j,K0.__webglTexture,g)}else if(Z0){let K0=j;for(let M0=0;M0<q.textures.length;M0++){let _0=V0.get(q.textures[M0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+M0,_0.__webglTexture,g,K0)}}else if(q!==null&&g!==0){let K0=V0.get(q.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,K0.__webglTexture,g)}m=-1},this.readRenderTargetPixels=function(q,j,g,b,y,Z0,F0,K0=0){if(!(q&&q.isWebGLRenderTarget)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let M0=V0.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget&&F0!==void 0)M0=M0[F0];if(M0){W0.bindFramebuffer(S.FRAMEBUFFER,M0);try{let _0=q.textures[K0],j0=_0.format,x0=_0.type;if(q.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+K0);if(!c0.textureFormatReadable(j0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!c0.textureTypeReadable(x0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=q.width-b&&(g>=0&&g<=q.height-y))S.readPixels(j,g,b,y,y0.convert(j0),y0.convert(x0),Z0)}finally{let _0=f!==null?V0.get(f).__webglFramebuffer:null;W0.bindFramebuffer(S.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(q,j,g,b,y,Z0,F0,K0=0){if(!(q&&q.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let M0=V0.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget&&F0!==void 0)M0=M0[F0];if(M0)if(j>=0&&j<=q.width-b&&(g>=0&&g<=q.height-y)){W0.bindFramebuffer(S.FRAMEBUFFER,M0);let _0=q.textures[K0],j0=_0.format,x0=_0.type;if(q.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+K0);if(!c0.textureFormatReadable(j0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!c0.textureTypeReadable(x0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let I0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,I0),S.bufferData(S.PIXEL_PACK_BUFFER,Z0.byteLength,S.STREAM_READ),S.readPixels(j,g,b,y,y0.convert(j0),y0.convert(x0),0);let t0=f!==null?V0.get(f).__webglFramebuffer:null;W0.bindFramebuffer(S.FRAMEBUFFER,t0);let W1=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await OH(S,W1,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,I0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Z0),S.deleteBuffer(I0),S.deleteSync(W1),Z0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(q,j=null,g=0){let b=Math.pow(2,-g),y=Math.floor(q.image.width*b),Z0=Math.floor(q.image.height*b),F0=j!==null?j.x:0,K0=j!==null?j.y:0;L.setTexture2D(q,0),S.copyTexSubImage2D(S.TEXTURE_2D,g,0,0,F0,K0,y,Z0),W0.unbindTexture()};let kQ=S.createFramebuffer(),RQ=S.createFramebuffer();if(this.copyTextureToTexture=function(q,j,g=null,b=null,y=0,Z0=0){let F0,K0,M0,_0,j0,x0,I0,t0,W1,D1=q.isCompressedTexture?q.mipmaps[Z0]:q.image;if(g!==null)F0=g.max.x-g.min.x,K0=g.max.y-g.min.y,M0=g.isBox3?g.max.z-g.min.z:1,_0=g.min.x,j0=g.min.y,x0=g.isBox3?g.min.z:0;else{let Z1=Math.pow(2,-y);if(F0=Math.floor(D1.width*Z1),K0=Math.floor(D1.height*Z1),q.isDataArrayTexture)M0=D1.depth;else if(q.isData3DTexture)M0=Math.floor(D1.depth*Z1);else M0=1;_0=0,j0=0,x0=0}if(b!==null)I0=b.x,t0=b.y,W1=b.z;else I0=0,t0=0,W1=0;let $1=y0.convert(j.format),B1=y0.convert(j.type),R0;if(j.isData3DTexture)L.setTexture3D(j,0),R0=S.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)L.setTexture2DArray(j,0),R0=S.TEXTURE_2D_ARRAY;else L.setTexture2D(j,0),R0=S.TEXTURE_2D;W0.activeTexture(S.TEXTURE0),W0.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,j.flipY),W0.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W0.pixelStorei(S.UNPACK_ALIGNMENT,j.unpackAlignment);let f1=W0.getParameter(S.UNPACK_ROW_LENGTH),u0=W0.getParameter(S.UNPACK_IMAGE_HEIGHT),y1=W0.getParameter(S.UNPACK_SKIP_PIXELS),r1=W0.getParameter(S.UNPACK_SKIP_ROWS),FJ=W0.getParameter(S.UNPACK_SKIP_IMAGES);W0.pixelStorei(S.UNPACK_ROW_LENGTH,D1.width),W0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,D1.height),W0.pixelStorei(S.UNPACK_SKIP_PIXELS,_0),W0.pixelStorei(S.UNPACK_SKIP_ROWS,j0),W0.pixelStorei(S.UNPACK_SKIP_IMAGES,x0);let nJ=q.isDataArrayTexture||q.isData3DTexture,H1=j.isDataArrayTexture||j.isData3DTexture;if(q.isDepthTexture){let Z1=V0.get(q),NJ=V0.get(j),E1=V0.get(Z1.__renderTarget),qJ=V0.get(NJ.__renderTarget);W0.bindFramebuffer(S.READ_FRAMEBUFFER,E1.__webglFramebuffer),W0.bindFramebuffer(S.DRAW_FRAMEBUFFER,qJ.__webglFramebuffer);for(let iJ=0;iJ<M0;iJ++){if(nJ)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,V0.get(q).__webglTexture,y,x0+iJ),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,V0.get(j).__webglTexture,Z0,W1+iJ);S.blitFramebuffer(_0,j0,F0,K0,I0,t0,F0,K0,S.DEPTH_BUFFER_BIT,S.NEAREST)}W0.bindFramebuffer(S.READ_FRAMEBUFFER,null),W0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(y!==0||q.isRenderTargetTexture||V0.has(q)){let Z1=V0.get(q),NJ=V0.get(j);W0.bindFramebuffer(S.READ_FRAMEBUFFER,kQ),W0.bindFramebuffer(S.DRAW_FRAMEBUFFER,RQ);for(let E1=0;E1<M0;E1++){if(nJ)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Z1.__webglTexture,y,x0+E1);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Z1.__webglTexture,y);if(H1)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,NJ.__webglTexture,Z0,W1+E1);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,NJ.__webglTexture,Z0);if(y!==0)S.blitFramebuffer(_0,j0,F0,K0,I0,t0,F0,K0,S.COLOR_BUFFER_BIT,S.NEAREST);else if(H1)S.copyTexSubImage3D(R0,Z0,I0,t0,W1+E1,_0,j0,F0,K0);else S.copyTexSubImage2D(R0,Z0,I0,t0,_0,j0,F0,K0)}W0.bindFramebuffer(S.READ_FRAMEBUFFER,null),W0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(H1)if(q.isDataTexture||q.isData3DTexture)S.texSubImage3D(R0,Z0,I0,t0,W1,F0,K0,M0,$1,B1,D1.data);else if(j.isCompressedArrayTexture)S.compressedTexSubImage3D(R0,Z0,I0,t0,W1,F0,K0,M0,$1,D1.data);else S.texSubImage3D(R0,Z0,I0,t0,W1,F0,K0,M0,$1,B1,D1);else if(q.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,Z0,I0,t0,F0,K0,$1,B1,D1.data);else if(q.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,Z0,I0,t0,D1.width,D1.height,$1,D1.data);else S.texSubImage2D(S.TEXTURE_2D,Z0,I0,t0,F0,K0,$1,B1,D1);if(W0.pixelStorei(S.UNPACK_ROW_LENGTH,f1),W0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,u0),W0.pixelStorei(S.UNPACK_SKIP_PIXELS,y1),W0.pixelStorei(S.UNPACK_SKIP_ROWS,r1),W0.pixelStorei(S.UNPACK_SKIP_IMAGES,FJ),Z0===0&&j.generateMipmaps)S.generateMipmap(R0);W0.unbindTexture()},this.initRenderTarget=function(q){if(V0.get(q).__webglFramebuffer===void 0)L.setupRenderTarget(q)},this.initTexture=function(q){if(q.isCubeTexture)L.setTextureCube(q,0);else if(q.isData3DTexture)L.setTexture3D(q,0);else if(q.isDataArrayTexture||q.isCompressedArrayTexture)L.setTexture2DArray(q,0);else L.setTexture2D(q,0);W0.unbindTexture()},this.resetState=function(){l=0,s=0,f=null,W0.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return D$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),$.unpackColorSpace=l0._getUnpackColorSpace()}}var Y1=(J)=>`assets/wiki/${J}`,L7=[{id:"hubot",slug:"hubot",wikiTitle:"Hubot",year:"c.1983",sortYear:1983,title:"Hubot",subtitle:"The butler robot with an Atari inside",blurb:"A 50kg wheeled companion with a CP/M computer, a voice synthesizer, an Atari 2600, and a Polaroid sonar head. Priced at $3,495, it scanned rooms, spoke 1,200 words, and played Defender.",tags:["Robot","Voice","Home Computer"],image:Y1("hubot-hardware.webp"),feature:!0},{id:"power-glove",slug:"nintendo-power-glove",wikiTitle:"Nintendo Power Glove",year:"1989",sortYear:1989,title:"Power Glove",subtitle:"A $10,000 NASA glove, shrunk to $90",blurb:`Mattel had nine months to turn VPL's research-grade DataGlove into a toy. It sold 1.3 million units. "I love the Power Glove. It's so bad."`,tags:["Gesture","Gaming","Wearable"],image:Y1("power-glove-1.jpg"),span:2},{id:"atari-mindlink",slug:"atari-mindlink",wikiTitle:"Atari Mindlink",year:"1984",sortYear:1984,title:"Atari Mindlink",subtitle:"Mind control (actually eyebrow control)",blurb:"A headband that read forehead muscle tension and called it telepathy. Demoed at CES, then canceled. Testers got headaches from wiggling their brows.",tags:["BCI","Biofeedback","Vaporware"],image:Y1("atari-mindlink-2.jpg")},{id:"videoplace",slug:"videoplace",wikiTitle:"VIDEOPLACE / Artificial Reality",year:"1970s–80s",sortYear:1978,title:"VIDEOPLACE",subtitle:"Artificial reality without goggles",blurb:"Myron Krueger put people in shared silhouette worlds using only cameras and projectors. No headsets, no gloves — just your body, glowing on screen.",tags:["Gesture","Computer Vision","Art"],image:Y1("videoplace-mediaartnet.jpg")},{id:"p300-speller",slug:"p300-speller",wikiTitle:"The P300 Speller",year:"1988",sortYear:1988,title:"P300 Speller",subtitle:"Talking off the top of your head",blurb:"The first BCI that let you type with brainwaves alone. Focus on a letter in a 6×6 grid; the system reads the P300 spike when your target flashes. 95% accuracy at 12 bits/min.",tags:["Brain Control","BCI","EEG"],image:Y1("p300-rowcolumn.webp")},{id:"vpl",slug:"vpl-research",wikiTitle:"VPL Research EyePhone & DataGlove",year:"1980s",sortYear:1985,title:"VPL EyePhone & DataGlove",subtitle:"The birth of commercial VR",blurb:"Jaron Lanier's fiber-optic glove and Fresnel-lens headset defined the visual language of virtual reality. A full system cost $250,000 and ran at 5 fps.",tags:["VR","Gesture","Wearables"],image:Y1("vpl-eyephone-demo.jpg"),span:2},{id:"virtuality",slug:"virtuality",wikiTitle:"Virtuality Arcade VR System",year:"1990",sortYear:1990,title:"Virtuality",subtitle:"Networked VR in an arcade pod",blurb:"Amiga 3000s, camcorder LCDs, and magnetic tracking. Dactyl Nightmare let four players fight in cyberspace years before Doom.",tags:["VR","Arcade","Multiplayer"],image:Y1("virtuality-1000cs-1.jpg")},{id:"eyetap",slug:"eyetap",wikiTitle:"Steve Mann’s EyeTap / Wearable Computing",year:"1980s",sortYear:1985,title:"EyeTap",subtitle:"Wearable computing before it had a name",blurb:"Steve Mann built camera-display eyeglasses in high school. The computer mediates reality itself — not a HUD, but a reversible eye.",tags:["Wearable","AR","Sousveillance"],image:Y1("eyetap-mann-glass-2.jpg")},{id:"digital-desk",slug:"digital-desk",wikiTitle:"The Digital Desk",year:"1991",sortYear:1991,title:"The Digital Desk",subtitle:"Paper meets projector",blurb:"Pierre Wellner pointed a camera and projector at an ordinary desk. Point at printed numbers; the desk calculates and projects the answer onto the paper.",tags:["Tangible","AR","Projection"],image:Y1("digital-desk-2.jpg")},{id:"mandala",slug:"mandala",wikiTitle:"Mandala / The Vivid Group Gesture VR System",year:"1986",sortYear:1986,title:"Mandala",subtitle:"Full-body VR on an Amiga",blurb:"The Vivid Group put your live video silhouette inside a virtual world. Punch objects, play drums, dance — 30fps, no controller, on an Amiga 1000.",tags:["Gesture","VR","Computer Vision"],image:Y1("mandala-siggraph-1.jpg")},{id:"put-that-there",slug:"put-that-there",wikiTitle:"Put-That-There",year:"1980",sortYear:1980,title:"Put-That-There",subtitle:"Voice + gesture at the graphics interface",blurb:"MIT's Architecture Machine Group let you move shapes by speaking and pointing. It asked clarifying questions when it couldn't understand you.",tags:["Voice","Gesture","Multimodal"],image:Y1("put-that-there-video.jpg")},{id:"speak-spell",slug:"speak-spell",wikiTitle:"Texas Instruments Speak & Spell",year:"1978",sortYear:1978,title:"Speak & Spell",subtitle:"The first talking chip",blurb:"Texas Instruments put a 10th-order LPC vocal tract model on a single chip. It taught kids to spell, became an IEEE Milestone, and soundtracked Kraftwerk.",tags:["Voice","Speech Synthesis","Toy"],image:Y1("speak-spell-1.jpg")},{id:"kurzweil",slug:"kurzweil-reading-machine",wikiTitle:"Kurzweil Reading Machine",year:"1976",sortYear:1976,title:"Kurzweil Reading Machine",subtitle:"Print made audible for the blind",blurb:"The first omni-font OCR plus a CCD scanner plus a speech synthesizer. Walter Cronkite read his sign-off with it. Stevie Wonder took the first unit home.",tags:["Accessibility","OCR","Text-to-Speech"],image:Y1("kurzweil-reading-machine-1.jpg")},{id:"active-badge",slug:"active-badge",wikiTitle:"Olivetti Active Badge",year:"1992",sortYear:1992,title:"Active Badge",subtitle:"Your location, broadcast every 10 seconds",blurb:"Olivetti Research made an IR badge that told the building where you were. Phones followed you. Desktops moved with you. Privacy was born as a question.",tags:["Wearable","Location-Aware","Ubicomp"],image:Y1("active-badge-1.gif")},{id:"twiddler",slug:"twiddler",wikiTitle:"Handykey Twiddler Chord Keyboard",year:"1992",sortYear:1992,title:"Twiddler",subtitle:"A keyboard in one hand",blurb:"A chording keypad you hold like a grenade. MIT wearable researchers typed 60 wpm while walking. Still in production 33 years later.",tags:["Input","Chorded","One-Handed"],image:Y1("twiddler-original-1.png")},{id:"gridpad-100",slug:"gridpad-100",wikiTitle:"GRiDPad 100",year:"1989",sortYear:1989,title:"GRiDPad 100",subtitle:"First commercial tablet computer with pen input.",blurb:"Pioneered portable form-factor handwriting recognition and stylus-driven UI on MS-DOS.",tags:["pen computing","handwriting recognition","tablet PC"],image:Y1("gridpad-100-1.jpg")},{id:"heathkit-hero-1",slug:"heathkit-hero-1",wikiTitle:"Heathkit HERO 1",year:"1982",sortYear:1982,title:"Heathkit HERO 1",subtitle:"Educational robot with sonar, light, and sound sensors.",blurb:"Brought programmable physical-world sensing and locomotion to hobbyist HCI experiments.",tags:["Educational Robot","Programmable Sensing","Human-Computer Interaction"],image:Y1("heathkit-hero-1-1.jpg")},{id:"hp-150-touchscreen",slug:"hp-150-touchscreen",wikiTitle:"HP-150 Touchscreen",year:"1983",sortYear:1983,title:"HP-150 Touchscreen",subtitle:"CRT monitor with infrared touch overlay for office PCs.",blurb:"First mass-market computer to ship with direct finger touch as primary input.",tags:["Touchscreen","Infrared touch","MS-DOS computer"],image:Y1("hp-150-touchscreen-1.jpg")},{id:"koalapad",slug:"koalapad",wikiTitle:"KoalaPad",year:"1984",sortYear:1984,title:"KoalaPad",subtitle:"Pressure-sensitive touch tablet for 8-bit home computers.",blurb:"Brought absolute-position drawing and menu selection to consumer software years before mainstream mice.",tags:["Graphics Tablet","Touch Tablet","Absolute Positioning"],image:Y1("koalapad-1.jpg")},{id:"microwriter",slug:"microwriter",wikiTitle:"Microwriter",year:"1980",sortYear:1980,title:"Microwriter",subtitle:"Five-key chorded portable word processor.",blurb:"Early wearable-style one-handed text entry device aimed at mobile professionals.",tags:["chording keyboard","portable computing","mobile text entry"],image:Y1("microwriter-1.png")},{id:"nintendo-d-pad-controller",slug:"nintendo-d-pad-controller",wikiTitle:"Nintendo D-pad controller",year:"1985",sortYear:1985,title:"Nintendo D-pad controller",subtitle:"Cross-shaped directional pad replacing joysticks on consoles.",blurb:"Established the dominant discrete directional input paradigm still used in handheld and console gaming.",tags:["D-pad","Game controller","NES"],image:Y1("nintendo-d-pad-controller-1.jpg")},{id:"polhemus-isotrak",slug:"polhemus-isotrak",wikiTitle:"Polhemus 3Space Isotrak",year:"1987",sortYear:1987,title:"Polhemus 3Space Isotrak",subtitle:"Magnetic 6DOF tracking sensor for 3D interaction.",blurb:"First widely available electromagnetic tracker enabling freehand spatial input in VR and CAD.",tags:["6DOF Tracking","Electromagnetic Tracking","Virtual Reality"],image:Y1("polhemus-isotrak-1.png")},{id:"poqet-pc",slug:"poqet-pc",wikiTitle:"Poqet PC",year:"1989",sortYear:1989,title:"Poqet PC",subtitle:"Credit-card-sized MS-DOS computer with PCMCIA.",blurb:"Pushed the limits of portable full-PC interaction years before Palm and Windows CE.",tags:["Palmtop PC","Power Management","MS-DOS"],image:Y1("poqet-pc-1.jpg")},{id:"psion-organiser-ii",slug:"psion-organiser-ii",wikiTitle:"Psion Organiser II",year:"1986",sortYear:1986,title:"Psion Organiser II",subtitle:"Pocket computer with full QWERTY and expansion slots.",blurb:"Early PDA that demonstrated mobile database and calculator interaction models.",tags:["Personal Digital Assistant","Mobile Database","Calculator"],image:Y1("psion-organiser-ii-3.jpg")},{id:"summagraphics-bit-pad",slug:"summagraphics-bit-pad",wikiTitle:"Summagraphics Bit Pad",year:"1977",sortYear:1977,title:"Summagraphics Bit Pad",subtitle:"Large electromagnetic digitizing tablet for CAD.",blurb:"Standardized absolute coordinate input for professional graphics long before consumer tablets.",tags:["Digitizing Tablet","Absolute Positioning","Professional Graphics"],image:Y1("summagraphics-bit-pad-1.jpg")},{id:"writehander",slug:"writehander",wikiTitle:"WriteHander",year:"1978",sortYear:1978,title:"WriteHander",subtitle:"Twelve-key one-handed chording keyboard for left or right hand.",blurb:"Early commercial attempt at compact, eyes-free chorded text entry that predates later wearable keyboards.",tags:["Chorded Keyboard","Wearable","Eyes-Free"],image:Y1("writehander-1.jpg")}],XQ=L7.find((J)=>J.feature)??L7[0];xD(XQ);yD();gD();vD();function vD(){let J=document.getElementById("hero-exhibit-count"),$=document.getElementById("gallery-count");if(J)J.textContent=String(L7.length);if($)$.textContent=`${L7.length} artifacts recovered`}function yD(){let J=document.getElementById("gallery-grid");if(!J)return;J.replaceChildren(...L7.map(($)=>{let H=document.createElement("a");if(H.className="exhibit-card",$.span===2)H.classList.add("exhibit-card--wide");H.href=`./exhibits/${$.slug}/`,H.setAttribute("aria-label",`${$.title}, ${$.year}`);let Q=document.createElement("div");Q.className="exhibit-card__media";let E=document.createElement("img");E.className="exhibit-card__image",E.src=$.image,E.alt=`${$.title} archival photograph`,E.loading="lazy";let Y=document.createElement("div");Y.className="exhibit-card__image-glitch";let X=document.createElement("span");X.className="exhibit-card__year",X.textContent=$.year,Q.append(E,Y,X);let D=document.createElement("div");D.className="exhibit-card__body";let K=document.createElement("h3");K.className="exhibit-card__title",K.textContent=$.title;let W=document.createElement("p");W.className="exhibit-card__subtitle",W.textContent=$.subtitle;let U=document.createElement("div");return U.className="exhibit-card__tags",U.append(...$.tags.map((R)=>{let Z=document.createElement("span");return Z.className="exhibit-card__tag",Z.textContent=R,Z})),D.append(K,W,U),H.append(Q,D),H}))}function xD(J){let $=document.getElementById("hero-feature-image"),H=document.getElementById("hero-feature-info");if(!$||!H)return;$.src=J.image,$.alt=`${J.title} archival photograph`;let Q=document.createElement("span");Q.className="hero__feature-year",Q.textContent=J.year;let E=document.createElement("h2");E.className="hero__feature-title",E.textContent=J.title;let Y=document.createElement("p");Y.className="hero__feature-subtitle",Y.textContent=J.blurb;let X=document.createElement("a");X.className="hero__feature-link",X.href=`./exhibits/${J.slug}/`,X.textContent="Inspect artifact",H.replaceChildren(Q,E,Y,X)}function gD(){let J=document.getElementById("ambient-canvas");if(!J)return;let $=window.matchMedia("(prefers-reduced-motion: reduce)"),H=new z8,Q=new z1(45,1,0.1,100);Q.position.set(0,0,5);let E=new c$({canvas:J,antialias:!0,alpha:!0});E.setClearColor(0,0),E.setPixelRatio(Math.min(window.devicePixelRatio,2));let Y={uTime:{value:0},uGlitch:{value:0.1}},X=new h1({uniforms:Y,transparent:!0,depthWrite:!1,blending:G7,vertexShader:`
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
    `}),D=new j1(new y7(1.5,80,60),X);H.add(D);let K=new j1(new x7(1.9,0.008,4,80),new N7({color:65403,transparent:!0,opacity:0.12,blending:G7}));K.rotation.x=Math.PI*0.5,H.add(K);function W(){let M=Math.max(1,window.innerWidth),_=Math.max(1,window.innerHeight);Q.aspect=M/_,Q.updateProjectionMatrix(),E.setSize(M,_,!1)}let U=0;new ResizeObserver(()=>{cancelAnimationFrame(U),U=requestAnimationFrame(W)}).observe(J),W();let Z=performance.now(),N=Z;E.setAnimationLoop(()=>{let M=performance.now(),_=(M-N)/1000,G=(M-Z)/1000;Z=M;let k=$.matches?0.2:1;Y.uTime.value=_,D.rotation.y+=G*0.12*k,D.rotation.x=Math.sin(_*0.3)*0.04*k,K.rotation.z=-_*0.06*k,E.render(H,Q)})}
