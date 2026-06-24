var O5="184";var _5=0,E1=1,M5=2;var A7=1,w5=2,U7=3,E7=0,T8=1,e8=2,J6=0,C7=1,G7=2,G1=3,k1=4,L5=5;var k7=100,V5=101,B5=102,z5=103,I5=104,A5=200,C5=201,P5=202,T5=203,S5=204,j5=205,h5=206,f5=207,v5=208,b5=209,y5=210,x5=211,g5=212,p5=213,l5=214,m5=0,d5=1,u5=2,N1=3,c5=4,n5=5,s5=6,i5=7,o5=0,a5=1,r5=2,i8=0,D1=1,q1=2,F1=3,R1=4,O1=5,_1=6,M1=7;var N7=301,f6=302,N9=303,D9=304,P7=306,t5=1000,q9=1001,e5=1002,z6=1003,JQ=1004;var T7=1005;var S8=1006,F9=1007;var v6=1008;var o8=1009,QQ=1010,$Q=1011,S7=1012,w1=1013,I6=1014,G6=1015,k6=1016,L1=1017,V1=1018,D7=1020,WQ=35902,ZQ=35899,HQ=1021,KQ=1022,Q6=1023,b6=1026,y6=1027,YQ=1028,B1=1029,x6=1030,z1=1031;var I1=1033,R9=33776,O9=33777,_9=33778,M9=33779,A1=35840,C1=35841,P1=35842,T1=35843,S1=36196,j1=37492,h1=37496,f1=37488,v1=37489,w9=37490,b1=37491,y1=37808,x1=37809,g1=37810,p1=37811,l1=37812,m1=37813,d1=37814,u1=37815,c1=37816,n1=37817,s1=37818,i1=37819,o1=37820,a1=37821,r1=36492,t1=36494,e1=36495,JJ=36283,QJ=36284,L9=36285,$J=36286;var WJ=0,XQ=1,g6="",UQ="srgb",ZJ="srgb-linear",HJ="linear",W8="srgb";var EQ=512,GQ=513,kQ=514,V9=515,NQ=516,DQ=517,B9=518,qQ=519;var KJ="300 es",YJ=2000;function q$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function F$(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function I7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function FQ(){let J=I7("canvas");return J.style.display="block",J}var J5={},X7=null;function XJ(...J){let Q="THREE."+J.shift();if(X7)X7("log",Q,...J);else console.log(Q,...J)}function RQ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function A0(...J){J=RQ(J);let Q="THREE."+J.shift();if(X7)X7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function C0(...J){J=RQ(J);let Q="THREE."+J.shift();if(X7)X7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function G9(...J){let Q=J.join(" ");if(Q in J5)return;J5[Q]=!0,A0(...J)}function OQ(J,Q,$){return new Promise(function(W,Z){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:W()}}setTimeout(H,$)})}var _Q={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class N6{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,H=W.length;Z<H;Z++)W[Z].call(this,J);J.target=null}}}var w8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var l9=Math.PI/180,k9=180/Math.PI;function j7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(w8[J&255]+w8[J>>8&255]+w8[J>>16&255]+w8[J>>24&255]+"-"+w8[Q&255]+w8[Q>>8&255]+"-"+w8[Q>>16&15|64]+w8[Q>>24&255]+"-"+w8[$&63|128]+w8[$>>8&255]+"-"+w8[$>>16&255]+w8[$>>24&255]+w8[W&255]+w8[W>>8&255]+w8[W>>16&255]+w8[W>>24&255]).toLowerCase()}function d0(J,Q,$){return Math.max(Q,Math.min($,J))}function R$(J,Q){return(J%Q+Q)%Q}function m9(J,Q,$){return(1-$)*J+$*Q}function w7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function C8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class a0{static{a0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(d0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,H=this.y-J.y;return this.x=Z*$-H*W+J.x,this.y=Z*W+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class D6{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,H,K){let Y=$[W+0],X=$[W+1],U=$[W+2],k=$[W+3],D=Z[H+0],E=Z[H+1],F=Z[H+2],_=Z[H+3];if(k!==_||Y!==D||X!==E||U!==F){let L=Y*D+X*E+U*F+k*_;if(L<0)D=-D,E=-E,F=-F,_=-_,L=-L;let G=1-K;if(L<0.9995){let N=Math.acos(L),w=Math.sin(N);G=Math.sin(G*N)/w,K=Math.sin(K*N)/w,Y=Y*G+D*K,X=X*G+E*K,U=U*G+F*K,k=k*G+_*K}else{Y=Y*G+D*K,X=X*G+E*K,U=U*G+F*K,k=k*G+_*K;let N=1/Math.sqrt(Y*Y+X*X+U*U+k*k);Y*=N,X*=N,U*=N,k*=N}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=k}static multiplyQuaternionsFlat(J,Q,$,W,Z,H){let K=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],k=Z[H],D=Z[H+1],E=Z[H+2],F=Z[H+3];return J[Q]=K*F+U*k+Y*E-X*D,J[Q+1]=Y*F+U*D+X*k-K*E,J[Q+2]=X*F+U*E+K*D-Y*k,J[Q+3]=U*F-K*k-Y*D-X*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:H}=J,K=Math.cos,Y=Math.sin,X=K($/2),U=K(W/2),k=K(Z/2),D=Y($/2),E=Y(W/2),F=Y(Z/2);switch(H){case"XYZ":this._x=D*U*k+X*E*F,this._y=X*E*k-D*U*F,this._z=X*U*F+D*E*k,this._w=X*U*k-D*E*F;break;case"YXZ":this._x=D*U*k+X*E*F,this._y=X*E*k-D*U*F,this._z=X*U*F-D*E*k,this._w=X*U*k+D*E*F;break;case"ZXY":this._x=D*U*k-X*E*F,this._y=X*E*k+D*U*F,this._z=X*U*F+D*E*k,this._w=X*U*k-D*E*F;break;case"ZYX":this._x=D*U*k-X*E*F,this._y=X*E*k+D*U*F,this._z=X*U*F-D*E*k,this._w=X*U*k+D*E*F;break;case"YZX":this._x=D*U*k+X*E*F,this._y=X*E*k+D*U*F,this._z=X*U*F-D*E*k,this._w=X*U*k-D*E*F;break;case"XZY":this._x=D*U*k-X*E*F,this._y=X*E*k-D*U*F,this._z=X*U*F+D*E*k,this._w=X*U*k+D*E*F;break;default:A0("Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],H=Q[1],K=Q[5],Y=Q[9],X=Q[2],U=Q[6],k=Q[10],D=$+K+k;if(D>0){let E=0.5/Math.sqrt(D+1);this._w=0.25/E,this._x=(U-Y)*E,this._y=(Z-X)*E,this._z=(H-W)*E}else if($>K&&$>k){let E=2*Math.sqrt(1+$-K-k);this._w=(U-Y)/E,this._x=0.25*E,this._y=(W+H)/E,this._z=(Z+X)/E}else if(K>k){let E=2*Math.sqrt(1+K-$-k);this._w=(Z-X)/E,this._x=(W+H)/E,this._y=0.25*E,this._z=(Y+U)/E}else{let E=2*Math.sqrt(1+k-$-K);this._w=(H-W)/E,this._x=(Z+X)/E,this._y=(Y+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(d0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+H*K+W*X-Z*Y,this._y=W*U+H*Y+Z*K-$*X,this._z=Z*U+H*X+$*Y-W*K,this._w=H*U-$*K-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=this.dot(J);if(K<0)$=-$,W=-W,Z=-Z,H=-H,K=-K;let Y=1-Q;if(K<0.9995){let X=Math.acos(K),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{static{b.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(Q5.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(Q5.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,H=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*H,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*H,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,H=J.y,K=J.z,Y=J.w,X=2*(H*W-K*$),U=2*(K*Q-Z*W),k=2*(Z*$-H*Q);return this.x=Q+Y*X+H*k-K*U,this.y=$+Y*U+K*X-Z*k,this.z=W+Y*k+Z*U-H*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this.z=d0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this.z=d0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,H=Q.x,K=Q.y,Y=Q.z;return this.x=W*Y-Z*K,this.y=Z*H-$*Y,this.z=$*K-W*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return d9.copy(this).projectOnVector(J),this.sub(d9)}reflect(J){return this.sub(d9.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(d0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var d9=new b,Q5=new D6;class T0{static{T0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,H,K,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,X)}set(J,Q,$,W,Z,H,K,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=K,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=H,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[3],Y=$[6],X=$[1],U=$[4],k=$[7],D=$[2],E=$[5],F=$[8],_=W[0],L=W[3],G=W[6],N=W[1],w=W[4],z=W[7],B=W[2],T=W[5],A=W[8];return Z[0]=H*_+K*N+Y*B,Z[3]=H*L+K*w+Y*T,Z[6]=H*G+K*z+Y*A,Z[1]=X*_+U*N+k*B,Z[4]=X*L+U*w+k*T,Z[7]=X*G+U*z+k*A,Z[2]=D*_+E*N+F*B,Z[5]=D*L+E*w+F*T,Z[8]=D*G+E*z+F*A,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8];return Q*H*U-Q*K*X-$*Z*U+$*K*Y+W*Z*X-W*H*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],k=U*H-K*X,D=K*Y-U*Z,E=X*Z-H*Y,F=Q*k+$*D+W*E;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/F;return J[0]=k*_,J[1]=(W*X-U*$)*_,J[2]=(K*$-W*H)*_,J[3]=D*_,J[4]=(U*Q-W*Y)*_,J[5]=(W*Z-K*Q)*_,J[6]=E*_,J[7]=($*Y-X*Q)*_,J[8]=(H*Q-$*Z)*_,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,H,K){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*H+X*K)+H+J,-W*X,W*Y,-W*(-X*H+Y*K)+K+Q,0,0,1),this}scale(J,Q){return this.premultiply(u9.makeScale(J,Q)),this}rotate(J){return this.premultiply(u9.makeRotation(-J)),this}translate(J,Q){return this.premultiply(u9.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u9=new T0,$5=new T0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),W5=new T0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function O$(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,H,K){if(this.enabled===!1||H===K||!H||!K)return Z;if(this.spaces[H].transfer==="srgb")Z.r=E6(Z.r),Z.g=E6(Z.g),Z.b=E6(Z.b);if(this.spaces[H].primaries!==this.spaces[K].primaries)Z.applyMatrix3(this.spaces[H].toXYZ),Z.applyMatrix3(this.spaces[K].fromXYZ);if(this.spaces[K].transfer==="srgb")Z.r=Y7(Z.r),Z.g=Y7(Z.g),Z.b=Y7(Z.b);return Z},workingToColorSpace:function(Z,H){return this.convert(Z,this.workingColorSpace,H)},colorSpaceToWorking:function(Z,H){return this.convert(Z,H,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,H=this.workingColorSpace){return Z.fromArray(this.spaces[H].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,H,K){return Z.copy(this.spaces[H].toXYZ).multiply(this.spaces[K].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,H){return G9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,H)},toWorkingColorSpace:function(Z,H){return G9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:$5,fromXYZ:W5,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:$5,fromXYZ:W5,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=O$();function E6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function Y7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var i6;class UJ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(i6===void 0)i6=I7("canvas");i6.width=J.width,i6.height=J.height;let W=i6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=i6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=I7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let H=0;H<Z.length;H++)Z[H]=E6(Z[H]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(E6(Q[$]/255)*255);else Q[$]=E6(Q[$]);return{data:Q,width:J.width,height:J.height}}else return A0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var _$=0;class h7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_$++}),this.uuid=j7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let H=0,K=W.length;H<K;H++)if(W[H].isDataTexture)Z.push(c9(W[H].image));else Z.push(c9(W[H]))}else Z=c9(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function c9(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return UJ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return A0("Texture: Unable to serialize Texture."),{}}var M$=0,n9=new b;class V8 extends N6{constructor(J=V8.DEFAULT_IMAGE,Q=V8.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,H=1008,K=1023,Y=1009,X=V8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:M$++}),this.uuid=j7(),this.name="",this.source=new h7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=H,this.anisotropy=X,this.format=K,this.internalFormat=null,this.type=Y,this.offset=new a0(0,0),this.repeat=new a0(1,1),this.center=new a0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new T0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(n9).x}get height(){return this.source.getSize(n9).y}get depth(){return this.source.getSize(n9).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){A0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){A0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}V8.DEFAULT_IMAGE=null;V8.DEFAULT_MAPPING=300;V8.DEFAULT_ANISOTROPY=1;class Y8{static{Y8.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*W+H[12]*Z,this.y=H[1]*Q+H[5]*$+H[9]*W+H[13]*Z,this.z=H[2]*Q+H[6]*$+H[10]*W+H[14]*Z,this.w=H[3]*Q+H[7]*$+H[11]*W+H[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,H=0.01,K=0.1,Y=J.elements,X=Y[0],U=Y[4],k=Y[8],D=Y[1],E=Y[5],F=Y[9],_=Y[2],L=Y[6],G=Y[10];if(Math.abs(U-D)<0.01&&Math.abs(k-_)<0.01&&Math.abs(F-L)<0.01){if(Math.abs(U+D)<0.1&&Math.abs(k+_)<0.1&&Math.abs(F+L)<0.1&&Math.abs(X+E+G-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(X+1)/2,z=(E+1)/2,B=(G+1)/2,T=(U+D)/4,A=(k+_)/4,P=(F+L)/4;if(w>z&&w>B)if(w<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(w),W=T/$,Z=A/$;else if(z>B)if(z<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(z),$=T/W,Z=P/W;else if(B<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(B),$=A/Z,W=P/Z;return this.set($,W,Z,Q),this}let N=Math.sqrt((L-F)*(L-F)+(k-_)*(k-_)+(D-U)*(D-U));if(Math.abs(N)<0.001)N=1;return this.x=(L-F)/N,this.y=(k-_)/N,this.z=(D-U)/N,this.w=Math.acos((X+E+G-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this.z=d0(this.z,J.z,Q.z),this.w=d0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this.z=d0(this.z,J,Q),this.w=d0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EJ extends N6{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Y8(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y8(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new V8(W),H=$.count;for(let K=0;K<H;K++)this.textures[K]=Z.clone(),this.textures[K].isRenderTargetTexture=!0,this.textures[K].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new h7(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class l8 extends EJ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class z9 extends V8{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class GJ extends V8{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E8{static{E8.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,H,K,Y,X,U,k,D,E,F,_,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,X,U,k,D,E,F,_,L)}set(J,Q,$,W,Z,H,K,Y,X,U,k,D,E,F,_,L){let G=this.elements;return G[0]=J,G[4]=Q,G[8]=$,G[12]=W,G[1]=Z,G[5]=H,G[9]=K,G[13]=Y,G[2]=X,G[6]=U,G[10]=k,G[14]=D,G[3]=E,G[7]=F,G[11]=_,G[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new E8().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/o6.setFromMatrixColumn(J,0).length(),Z=1/o6.setFromMatrixColumn(J,1).length(),H=1/o6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,H=Math.cos($),K=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),k=Math.sin(Z);if(J.order==="XYZ"){let D=H*U,E=H*k,F=K*U,_=K*k;Q[0]=Y*U,Q[4]=-Y*k,Q[8]=X,Q[1]=E+F*X,Q[5]=D-_*X,Q[9]=-K*Y,Q[2]=_-D*X,Q[6]=F+E*X,Q[10]=H*Y}else if(J.order==="YXZ"){let D=Y*U,E=Y*k,F=X*U,_=X*k;Q[0]=D+_*K,Q[4]=F*K-E,Q[8]=H*X,Q[1]=H*k,Q[5]=H*U,Q[9]=-K,Q[2]=E*K-F,Q[6]=_+D*K,Q[10]=H*Y}else if(J.order==="ZXY"){let D=Y*U,E=Y*k,F=X*U,_=X*k;Q[0]=D-_*K,Q[4]=-H*k,Q[8]=F+E*K,Q[1]=E+F*K,Q[5]=H*U,Q[9]=_-D*K,Q[2]=-H*X,Q[6]=K,Q[10]=H*Y}else if(J.order==="ZYX"){let D=H*U,E=H*k,F=K*U,_=K*k;Q[0]=Y*U,Q[4]=F*X-E,Q[8]=D*X+_,Q[1]=Y*k,Q[5]=_*X+D,Q[9]=E*X-F,Q[2]=-X,Q[6]=K*Y,Q[10]=H*Y}else if(J.order==="YZX"){let D=H*Y,E=H*X,F=K*Y,_=K*X;Q[0]=Y*U,Q[4]=_-D*k,Q[8]=F*k+E,Q[1]=k,Q[5]=H*U,Q[9]=-K*U,Q[2]=-X*U,Q[6]=E*k+F,Q[10]=D-_*k}else if(J.order==="XZY"){let D=H*Y,E=H*X,F=K*Y,_=K*X;Q[0]=Y*U,Q[4]=-k,Q[8]=X*U,Q[1]=D*k+_,Q[5]=H*U,Q[9]=E*k-F,Q[2]=F*k-E,Q[6]=K*U,Q[10]=_*k+D}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(w$,J,L$)}lookAt(J,Q,$){let W=this.elements;if(v8.subVectors(J,Q),v8.lengthSq()===0)v8.z=1;if(v8.normalize(),O6.crossVectors($,v8),O6.lengthSq()===0){if(Math.abs($.z)===1)v8.x+=0.0001;else v8.z+=0.0001;v8.normalize(),O6.crossVectors($,v8)}return O6.normalize(),c7.crossVectors(v8,O6),W[0]=O6.x,W[4]=c7.x,W[8]=v8.x,W[1]=O6.y,W[5]=c7.y,W[9]=v8.y,W[2]=O6.z,W[6]=c7.z,W[10]=v8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[4],Y=$[8],X=$[12],U=$[1],k=$[5],D=$[9],E=$[13],F=$[2],_=$[6],L=$[10],G=$[14],N=$[3],w=$[7],z=$[11],B=$[15],T=W[0],A=W[4],P=W[8],O=W[12],V=W[1],u=W[5],I=W[9],l=W[13],i=W[2],f=W[6],d=W[10],x=W[14],p=W[3],a=W[7],Q0=W[11],N0=W[15];return Z[0]=H*T+K*V+Y*i+X*p,Z[4]=H*A+K*u+Y*f+X*a,Z[8]=H*P+K*I+Y*d+X*Q0,Z[12]=H*O+K*l+Y*x+X*N0,Z[1]=U*T+k*V+D*i+E*p,Z[5]=U*A+k*u+D*f+E*a,Z[9]=U*P+k*I+D*d+E*Q0,Z[13]=U*O+k*l+D*x+E*N0,Z[2]=F*T+_*V+L*i+G*p,Z[6]=F*A+_*u+L*f+G*a,Z[10]=F*P+_*I+L*d+G*Q0,Z[14]=F*O+_*l+L*x+G*N0,Z[3]=N*T+w*V+z*i+B*p,Z[7]=N*A+w*u+z*f+B*a,Z[11]=N*P+w*I+z*d+B*Q0,Z[15]=N*O+w*l+z*x+B*N0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],H=J[1],K=J[5],Y=J[9],X=J[13],U=J[2],k=J[6],D=J[10],E=J[14],F=J[3],_=J[7],L=J[11],G=J[15],N=Y*E-X*D,w=K*E-X*k,z=K*D-Y*k,B=H*E-X*U,T=H*D-Y*U,A=H*k-K*U;return Q*(_*N-L*w+G*z)-$*(F*N-L*B+G*T)+W*(F*w-_*B+G*A)-Z*(F*z-_*T+L*A)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],k=J[9],D=J[10],E=J[11],F=J[12],_=J[13],L=J[14],G=J[15],N=Q*K-$*H,w=Q*Y-W*H,z=Q*X-Z*H,B=$*Y-W*K,T=$*X-Z*K,A=W*X-Z*Y,P=U*_-k*F,O=U*L-D*F,V=U*G-E*F,u=k*L-D*_,I=k*G-E*_,l=D*G-E*L,i=N*l-w*I+z*u+B*V-T*O+A*P;if(i===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/i;return J[0]=(K*l-Y*I+X*u)*f,J[1]=(W*I-$*l-Z*u)*f,J[2]=(_*A-L*T+G*B)*f,J[3]=(D*T-k*A-E*B)*f,J[4]=(Y*V-H*l-X*O)*f,J[5]=(Q*l-W*V+Z*O)*f,J[6]=(L*z-F*A-G*w)*f,J[7]=(U*A-D*z+E*w)*f,J[8]=(H*I-K*V+X*P)*f,J[9]=($*V-Q*I-Z*P)*f,J[10]=(F*T-_*z+G*N)*f,J[11]=(k*z-U*T-E*N)*f,J[12]=(K*O-H*u-Y*P)*f,J[13]=(Q*u-$*O+W*P)*f,J[14]=(_*w-F*B-L*N)*f,J[15]=(U*B-k*w+D*N)*f,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,H=J.x,K=J.y,Y=J.z,X=Z*H,U=Z*K;return this.set(X*H+$,X*K-W*Y,X*Y+W*K,0,X*K+W*Y,U*K+$,U*Y-W*H,0,X*Y-W*K,U*Y+W*H,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,H){return this.set(1,$,Z,0,J,1,H,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,H=Q._y,K=Q._z,Y=Q._w,X=Z+Z,U=H+H,k=K+K,D=Z*X,E=Z*U,F=Z*k,_=H*U,L=H*k,G=K*k,N=Y*X,w=Y*U,z=Y*k,B=$.x,T=$.y,A=$.z;return W[0]=(1-(_+G))*B,W[1]=(E+z)*B,W[2]=(F-w)*B,W[3]=0,W[4]=(E-z)*T,W[5]=(1-(D+G))*T,W[6]=(L+N)*T,W[7]=0,W[8]=(F+w)*A,W[9]=(L-N)*A,W[10]=(1-(D+_))*A,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinant();if(Z===0)return $.set(1,1,1),Q.identity(),this;let H=o6.set(W[0],W[1],W[2]).length(),K=o6.set(W[4],W[5],W[6]).length(),Y=o6.set(W[8],W[9],W[10]).length();if(Z<0)H=-H;c8.copy(this);let X=1/H,U=1/K,k=1/Y;return c8.elements[0]*=X,c8.elements[1]*=X,c8.elements[2]*=X,c8.elements[4]*=U,c8.elements[5]*=U,c8.elements[6]*=U,c8.elements[8]*=k,c8.elements[9]*=k,c8.elements[10]*=k,Q.setFromRotationMatrix(c8),$.x=H,$.y=K,$.z=Y,this}makePerspective(J,Q,$,W,Z,H,K=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),k=2*Z/($-W),D=(Q+J)/(Q-J),E=($+W)/($-W),F,_;if(Y)F=Z/(H-Z),_=H*Z/(H-Z);else if(K===2000)F=-(H+Z)/(H-Z),_=-2*H*Z/(H-Z);else if(K===2001)F=-H/(H-Z),_=-H*Z/(H-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=D,X[12]=0,X[1]=0,X[5]=k,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=_,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,H,K=2000,Y=!1){let X=this.elements,U=2/(Q-J),k=2/($-W),D=-(Q+J)/(Q-J),E=-($+W)/($-W),F,_;if(Y)F=1/(H-Z),_=H/(H-Z);else if(K===2000)F=-2/(H-Z),_=-(H+Z)/(H-Z);else if(K===2001)F=-1/(H-Z),_=-Z/(H-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=0,X[12]=D,X[1]=0,X[5]=k,X[9]=0,X[13]=E,X[2]=0,X[6]=0,X[10]=F,X[14]=_,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var o6=new b,c8=new E8,w$=new b(0,0,0),L$=new b(1,1,1),O6=new b,c7=new b,v8=new b,Z5=new E8,H5=new D6;class B6{constructor(J=0,Q=0,$=0,W=B6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],H=W[4],K=W[8],Y=W[1],X=W[5],U=W[9],k=W[2],D=W[6],E=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(d0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-H,Z);else this._x=Math.atan2(D,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-d0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(K,E),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-k,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(d0(D,-1,1)),Math.abs(D)<0.9999999)this._y=Math.atan2(-k,E),this._z=Math.atan2(-H,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-d0(k,-1,1)),Math.abs(k)<0.9999999)this._x=Math.atan2(D,E),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-H,X);break;case"YZX":if(this._z=Math.asin(d0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-k,Z);else this._x=0,this._y=Math.atan2(K,E);break;case"XZY":if(this._z=Math.asin(-d0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(D,X),this._y=Math.atan2(K,Z);else this._x=Math.atan2(-U,E),this._y=0;break;default:A0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return Z5.makeRotationFromQuaternion(J),this.setFromRotationMatrix(Z5,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return H5.setFromEuler(this),this.setFromQuaternion(H5,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}B6.DEFAULT_ORDER="XYZ";class I9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var V$=0,K5=new b,a6=new D6,Z6=new E8,n7=new b,L7=new b,B$=new b,z$=new D6,Y5=new b(1,0,0),X5=new b(0,1,0),U5=new b(0,0,1),E5={type:"added"},I$={type:"removed"},r6={type:"childadded",child:null},s9={type:"childremoved",child:null};class P8 extends N6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:V$++}),this.uuid=j7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=P8.DEFAULT_UP.clone();let J=new b,Q=new B6,$=new D6,W=new b(1,1,1);function Z(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new E8},normalMatrix:{value:new T0}}),this.matrix=new E8,this.matrixWorld=new E8,this.matrixAutoUpdate=P8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=P8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return a6.setFromAxisAngle(J,Q),this.quaternion.multiply(a6),this}rotateOnWorldAxis(J,Q){return a6.setFromAxisAngle(J,Q),this.quaternion.premultiply(a6),this}rotateX(J){return this.rotateOnAxis(Y5,J)}rotateY(J){return this.rotateOnAxis(X5,J)}rotateZ(J){return this.rotateOnAxis(U5,J)}translateOnAxis(J,Q){return K5.copy(J).applyQuaternion(this.quaternion),this.position.add(K5.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(Y5,J)}translateY(J){return this.translateOnAxis(X5,J)}translateZ(J){return this.translateOnAxis(U5,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Z6.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)n7.copy(J);else n7.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),L7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Z6.lookAt(L7,n7,this.up);else Z6.lookAt(n7,L7,this.up);if(this.quaternion.setFromRotationMatrix(Z6),W)Z6.extractRotation(W.matrixWorld),a6.setFromRotationMatrix(Z6),this.quaternion.premultiply(a6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return C0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(E5),r6.child=J,this.dispatchEvent(r6),r6.child=null;else C0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(I$),s9.child=J,this.dispatchEvent(s9),s9.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Z6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Z6.multiply(J.parent.matrixWorld);return J.applyMatrix4(Z6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(E5),r6.child=J,this.dispatchEvent(r6),r6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,H=W.length;Z<H;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L7,J,B$),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L7,z$,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let W=this.children;for(let Z=0,H=W.length;Z<H;Z++)W[Z].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(this.static!==!1)W.static=this.static;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((K)=>({...K,boundingBox:K.boundingBox?K.boundingBox.toJSON():void 0,boundingSphere:K.boundingSphere?K.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((K)=>({...K})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(K,Y){if(K[Y.uuid]===void 0)K[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let Y=K.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let k=Y[X];Z(J.shapes,k)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let Y=0,X=this.material.length;Y<X;Y++)K.push(Z(J.materials,this.material[Y]));W.material=K}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let K=0;K<this.children.length;K++)W.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let K=0;K<this.animations.length;K++){let Y=this.animations[K];W.animations.push(Z(J.animations,Y))}}if(Q){let K=H(J.geometries),Y=H(J.materials),X=H(J.textures),U=H(J.images),k=H(J.shapes),D=H(J.skeletons),E=H(J.animations),F=H(J.nodes);if(K.length>0)$.geometries=K;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(k.length>0)$.shapes=k;if(D.length>0)$.skeletons=D;if(E.length>0)$.animations=E;if(F.length>0)$.nodes=F}return $.object=W,$;function H(K){let Y=[];for(let X in K){let U=K[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}}P8.DEFAULT_UP=new b(0,1,0);P8.DEFAULT_MATRIX_AUTO_UPDATE=!0;P8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class K7 extends P8{constructor(){super();this.isGroup=!0,this.type="Group"}}var A$={type:"move"};class f7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new K7,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new K7,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new K7,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,H=null,K=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){H=!0;for(let _ of J.hand.values()){let L=Q.getJointPose(_,$),G=this._getHandJoint(X,_);if(L!==null)G.matrix.fromArray(L.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,G.jointRadius=L.radius;G.visible=L!==null}let U=X.joints["index-finger-tip"],k=X.joints["thumb-tip"],D=U.position.distanceTo(k.position),E=0.02,F=0.005;if(X.inputState.pinching&&D>E+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&D<=E-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(K!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(A$)}}}if(K!==null)K.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new K7;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var MQ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_6={h:0,s:0,l:0},s7={h:0,s:0,l:0};function i9(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class s0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,l0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=l0.workingColorSpace){if(J=R$(J,1),Q=d0(Q,0,1),$=d0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-Z;this.r=i9(H,Z,J+0.3333333333333333),this.g=i9(H,Z,J),this.b=i9(H,Z,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)A0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,H=W[1],K=W[2];switch(H){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:A0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],H=Z.length;if(H===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(Z,16),Q);else A0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=MQ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else A0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=E6(J.r),this.g=E6(J.g),this.b=E6(J.b),this}copyLinearToSRGB(J){return this.r=Y7(J.r),this.g=Y7(J.g),this.b=Y7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(L8.copy(this),J),Math.round(d0(L8.r*255,0,255))*65536+Math.round(d0(L8.g*255,0,255))*256+Math.round(d0(L8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.workingToColorSpace(L8.copy(this),Q);let{r:$,g:W,b:Z}=L8,H=Math.max($,W,Z),K=Math.min($,W,Z),Y,X,U=(K+H)/2;if(K===H)Y=0,X=0;else{let k=H-K;switch(X=U<=0.5?k/(H+K):k/(2-H-K),H){case $:Y=(W-Z)/k+(W<Z?6:0);break;case W:Y=(Z-$)/k+2;break;case Z:Y=($-W)/k+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=l0.workingColorSpace){return l0.workingToColorSpace(L8.copy(this),Q),J.r=L8.r,J.g=L8.g,J.b=L8.b,J}getStyle(J="srgb"){l0.workingToColorSpace(L8.copy(this),J);let{r:Q,g:$,b:W}=L8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(_6),this.setHSL(_6.h+J,_6.s+Q,_6.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(_6),J.getHSL(s7);let $=m9(_6.h,s7.h,Q),W=m9(_6.s,s7.s,Q),Z=m9(_6.l,s7.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var L8=new s0;s0.NAMES=MQ;class A9 extends P8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new B6,this.environmentIntensity=1,this.environmentRotation=new B6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var n8=new b,H6=new b,o9=new b,K6=new b,t6=new b,e6=new b,G5=new b,a9=new b,r9=new b,t9=new b,e9=new Y8,J1=new Y8,Q1=new Y8;class g8{constructor(J=new b,Q=new b,$=new b){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),n8.subVectors(J,Q),W.cross(n8);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){n8.subVectors(W,Q),H6.subVectors($,Q),o9.subVectors(J,Q);let H=n8.dot(n8),K=n8.dot(H6),Y=n8.dot(o9),X=H6.dot(H6),U=H6.dot(o9),k=H*X-K*K;if(k===0)return Z.set(0,0,0),null;let D=1/k,E=(X*Y-K*U)*D,F=(H*U-K*Y)*D;return Z.set(1-E-F,F,E)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,K6)===null)return!1;return K6.x>=0&&K6.y>=0&&K6.x+K6.y<=1}static getInterpolation(J,Q,$,W,Z,H,K,Y){if(this.getBarycoord(J,Q,$,W,K6)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,K6.x),Y.addScaledVector(H,K6.y),Y.addScaledVector(K,K6.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,H){return e9.setScalar(0),J1.setScalar(0),Q1.setScalar(0),e9.fromBufferAttribute(J,Q),J1.fromBufferAttribute(J,$),Q1.fromBufferAttribute(J,W),H.setScalar(0),H.addScaledVector(e9,Z.x),H.addScaledVector(J1,Z.y),H.addScaledVector(Q1,Z.z),H}static isFrontFacing(J,Q,$,W){return n8.subVectors($,Q),H6.subVectors(J,Q),n8.cross(H6).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return n8.subVectors(this.c,this.b),H6.subVectors(this.a,this.b),n8.cross(H6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return g8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return g8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return g8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,H,K;t6.subVectors(W,$),e6.subVectors(Z,$),a9.subVectors(J,$);let Y=t6.dot(a9),X=e6.dot(a9);if(Y<=0&&X<=0)return Q.copy($);r9.subVectors(J,W);let U=t6.dot(r9),k=e6.dot(r9);if(U>=0&&k<=U)return Q.copy(W);let D=Y*k-U*X;if(D<=0&&Y>=0&&U<=0)return H=Y/(Y-U),Q.copy($).addScaledVector(t6,H);t9.subVectors(J,Z);let E=t6.dot(t9),F=e6.dot(t9);if(F>=0&&E<=F)return Q.copy(Z);let _=E*X-Y*F;if(_<=0&&X>=0&&F<=0)return K=X/(X-F),Q.copy($).addScaledVector(e6,K);let L=U*F-E*k;if(L<=0&&k-U>=0&&E-F>=0)return G5.subVectors(Z,W),K=(k-U)/(k-U+(E-F)),Q.copy(W).addScaledVector(G5,K);let G=1/(L+_+D);return H=_*G,K=D*G,Q.copy($).addScaledVector(t6,H).addScaledVector(e6,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class p6{constructor(J=new b(1/0,1/0,1/0),Q=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(s8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(s8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=s8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=Z.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,s8);else s8.fromBufferAttribute(Z,H);s8.applyMatrix4(J.matrixWorld),this.expandByPoint(s8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();i7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();i7.copy($.boundingBox)}i7.applyMatrix4(J.matrixWorld),this.union(i7)}}let W=J.children;for(let Z=0,H=W.length;Z<H;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,s8),s8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(V7),o7.subVectors(this.max,V7),J7.subVectors(J.a,V7),Q7.subVectors(J.b,V7),$7.subVectors(J.c,V7),M6.subVectors(Q7,J7),w6.subVectors($7,Q7),T6.subVectors(J7,$7);let Q=[0,-M6.z,M6.y,0,-w6.z,w6.y,0,-T6.z,T6.y,M6.z,0,-M6.x,w6.z,0,-w6.x,T6.z,0,-T6.x,-M6.y,M6.x,0,-w6.y,w6.x,0,-T6.y,T6.x,0];if(!$1(Q,J7,Q7,$7,o7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!$1(Q,J7,Q7,$7,o7))return!1;return a7.crossVectors(M6,w6),Q=[a7.x,a7.y,a7.z],$1(Q,J7,Q7,$7,o7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,s8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(s8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return Y6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),Y6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),Y6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),Y6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),Y6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),Y6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),Y6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),Y6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(Y6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var Y6=[new b,new b,new b,new b,new b,new b,new b,new b],s8=new b,i7=new p6,J7=new b,Q7=new b,$7=new b,M6=new b,w6=new b,T6=new b,V7=new b,o7=new b,a7=new b,S6=new b;function $1(J,Q,$,W,Z){for(let H=0,K=J.length-3;H<=K;H+=3){S6.fromArray(J,H);let Y=Z.x*Math.abs(S6.x)+Z.y*Math.abs(S6.y)+Z.z*Math.abs(S6.z),X=Q.dot(S6),U=$.dot(S6),k=W.dot(S6);if(Math.max(-Math.max(X,U,k),Math.min(X,U,k))>Y)return!1}return!0}var N8=new b,r7=new a0,C$=0;class p8 extends N6{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C$++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)r7.fromBufferAttribute(this,Q),r7.applyMatrix3(J),this.setXY(Q,r7.x,r7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)N8.fromBufferAttribute(this,Q),N8.applyMatrix3(J),this.setXYZ(Q,N8.x,N8.y,N8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)N8.fromBufferAttribute(this,Q),N8.applyMatrix4(J),this.setXYZ(Q,N8.x,N8.y,N8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)N8.fromBufferAttribute(this,Q),N8.applyNormalMatrix(J),this.setXYZ(Q,N8.x,N8.y,N8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)N8.fromBufferAttribute(this,Q),N8.transformDirection(J),this.setXYZ(Q,N8.x,N8.y,N8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=w7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=C8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=w7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=C8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=w7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=C8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=w7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=C8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=w7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=C8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=C8(Q,this.array),$=C8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=C8(Q,this.array),$=C8($,this.array),W=C8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=C8(Q,this.array),$=C8($,this.array),W=C8(W,this.array),Z=C8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class C9 extends p8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class P9 extends p8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class O8 extends p8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var P$=new p6,B7=new b,W1=new b;class v7{constructor(J=new b,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else P$.setFromPoints(J).getCenter($);let W=0;for(let Z=0,H=J.length;Z<H;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;B7.subVectors(J,this.center);let Q=B7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(B7,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else W1.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(B7.copy(J.center).add(W1)),this.expandByPoint(B7.copy(J.center).sub(W1));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var T$=0,x8=new E8,Z1=new P8,W7=new b,b8=new p6,z7=new p6,F8=new b;class m8 extends N6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T$++}),this.uuid=j7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((q$(J))?P9:C9)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new T0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return x8.makeRotationFromQuaternion(J),this.applyMatrix4(x8),this}rotateX(J){return x8.makeRotationX(J),this.applyMatrix4(x8),this}rotateY(J){return x8.makeRotationY(J),this.applyMatrix4(x8),this}rotateZ(J){return x8.makeRotationZ(J),this.applyMatrix4(x8),this}translate(J,Q,$){return x8.makeTranslation(J,Q,$),this.applyMatrix4(x8),this}scale(J,Q,$){return x8.makeScale(J,Q,$),this.applyMatrix4(x8),this}lookAt(J){return Z1.lookAt(J),Z1.updateMatrix(),this.applyMatrix4(Z1.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(W7).negate(),this.translate(W7.x,W7.y,W7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let H=J[W];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new O8($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)A0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new p6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){C0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(b8.setFromBufferAttribute(Z),this.morphTargetsRelative)F8.addVectors(this.boundingBox.min,b8.min),this.boundingBox.expandByPoint(F8),F8.addVectors(this.boundingBox.max,b8.max),this.boundingBox.expandByPoint(F8);else this.boundingBox.expandByPoint(b8.min),this.boundingBox.expandByPoint(b8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))C0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new v7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){C0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(J){let $=this.boundingSphere.center;if(b8.setFromBufferAttribute(J),Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z];if(z7.setFromBufferAttribute(K),this.morphTargetsRelative)F8.addVectors(b8.min,z7.min),b8.expandByPoint(F8),F8.addVectors(b8.max,z7.max),b8.expandByPoint(F8);else b8.expandByPoint(z7.min),b8.expandByPoint(z7.max)}b8.getCenter($);let W=0;for(let Z=0,H=J.count;Z<H;Z++)F8.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(F8));if(Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=K.count;X<U;X++){if(F8.fromBufferAttribute(K,X),Y)W7.fromBufferAttribute(J,X),F8.add(W7);W=Math.max(W,$.distanceToSquared(F8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))C0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){C0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new p8(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),K=[],Y=[];for(let P=0;P<$.count;P++)K[P]=new b,Y[P]=new b;let X=new b,U=new b,k=new b,D=new a0,E=new a0,F=new a0,_=new b,L=new b;function G(P,O,V){X.fromBufferAttribute($,P),U.fromBufferAttribute($,O),k.fromBufferAttribute($,V),D.fromBufferAttribute(Z,P),E.fromBufferAttribute(Z,O),F.fromBufferAttribute(Z,V),U.sub(X),k.sub(X),E.sub(D),F.sub(D);let u=1/(E.x*F.y-F.x*E.y);if(!isFinite(u))return;_.copy(U).multiplyScalar(F.y).addScaledVector(k,-E.y).multiplyScalar(u),L.copy(k).multiplyScalar(E.x).addScaledVector(U,-F.x).multiplyScalar(u),K[P].add(_),K[O].add(_),K[V].add(_),Y[P].add(L),Y[O].add(L),Y[V].add(L)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let P=0,O=N.length;P<O;++P){let V=N[P],u=V.start,I=V.count;for(let l=u,i=u+I;l<i;l+=3)G(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let w=new b,z=new b,B=new b,T=new b;function A(P){B.fromBufferAttribute(W,P),T.copy(B);let O=K[P];w.copy(O),w.sub(B.multiplyScalar(B.dot(O))).normalize(),z.crossVectors(T,O);let u=z.dot(Y[P])<0?-1:1;H.setXYZW(P,w.x,w.y,w.z,u)}for(let P=0,O=N.length;P<O;++P){let V=N[P],u=V.start,I=V.count;for(let l=u,i=u+I;l<i;l+=3)A(J.getX(l+0)),A(J.getX(l+1)),A(J.getX(l+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new p8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let D=0,E=$.count;D<E;D++)$.setXYZ(D,0,0,0);let W=new b,Z=new b,H=new b,K=new b,Y=new b,X=new b,U=new b,k=new b;if(J)for(let D=0,E=J.count;D<E;D+=3){let F=J.getX(D+0),_=J.getX(D+1),L=J.getX(D+2);W.fromBufferAttribute(Q,F),Z.fromBufferAttribute(Q,_),H.fromBufferAttribute(Q,L),U.subVectors(H,Z),k.subVectors(W,Z),U.cross(k),K.fromBufferAttribute($,F),Y.fromBufferAttribute($,_),X.fromBufferAttribute($,L),K.add(U),Y.add(U),X.add(U),$.setXYZ(F,K.x,K.y,K.z),$.setXYZ(_,Y.x,Y.y,Y.z),$.setXYZ(L,X.x,X.y,X.z)}else for(let D=0,E=Q.count;D<E;D+=3)W.fromBufferAttribute(Q,D+0),Z.fromBufferAttribute(Q,D+1),H.fromBufferAttribute(Q,D+2),U.subVectors(H,Z),k.subVectors(W,Z),U.cross(k),$.setXYZ(D+0,U.x,U.y,U.z),$.setXYZ(D+1,U.x,U.y,U.z),$.setXYZ(D+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)F8.fromBufferAttribute(J,Q),F8.normalize(),J.setXYZ(Q,F8.x,F8.y,F8.z)}toNonIndexed(){function J(K,Y){let{array:X,itemSize:U,normalized:k}=K,D=new X.constructor(Y.length*U),E=0,F=0;for(let _=0,L=Y.length;_<L;_++){if(K.isInterleavedBufferAttribute)E=Y[_]*K.data.stride+K.offset;else E=Y[_]*U;for(let G=0;G<U;G++)D[F++]=X[E++]}return new p8(D,U,k)}if(this.index===null)return A0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new m8,$=this.index.array,W=this.attributes;for(let K in W){let Y=W[K],X=J(Y,$);Q.setAttribute(K,X)}let Z=this.morphAttributes;for(let K in Z){let Y=[],X=Z[K];for(let U=0,k=X.length;U<k;U++){let D=X[U],E=J(D,$);Y.push(E)}Q.morphAttributes[K]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,Y=H.length;K<Y;K++){let X=H[K];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let k=0,D=X.length;k<D;k++){let E=X[k];U.push(E.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere=K.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],k=Z[X];for(let D=0,E=k.length;D<E;D++)U.push(k[D].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let X=0,U=H.length;X<U;X++){let k=H[X];this.addGroup(k.start,k.count,k.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var S$=0;class q7 extends N6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:S$++}),this.uuid=j7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new s0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){A0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){A0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let H=[];for(let K in Z){let Y=Z[K];delete Y.metadata,H.push(Y)}return H}if(Q){let Z=W(J.textures),H=W(J.images);if(Z.length>0)$.textures=Z;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var X6=new b,H1=new b,t7=new b,L6=new b,K1=new b,e7=new b,Y1=new b;class kJ{constructor(J=new b,Q=new b(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,X6)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=X6.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return X6.copy(this.origin).addScaledVector(this.direction,Q),X6.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){H1.copy(J).add(Q).multiplyScalar(0.5),t7.copy(Q).sub(J).normalize(),L6.copy(this.origin).sub(H1);let Z=J.distanceTo(Q)*0.5,H=-this.direction.dot(t7),K=L6.dot(this.direction),Y=-L6.dot(t7),X=L6.lengthSq(),U=Math.abs(1-H*H),k,D,E,F;if(U>0)if(k=H*Y-K,D=H*K-Y,F=Z*U,k>=0)if(D>=-F)if(D<=F){let _=1/U;k*=_,D*=_,E=k*(k+H*D+2*K)+D*(H*k+D+2*Y)+X}else D=Z,k=Math.max(0,-(H*D+K)),E=-k*k+D*(D+2*Y)+X;else D=-Z,k=Math.max(0,-(H*D+K)),E=-k*k+D*(D+2*Y)+X;else if(D<=-F)k=Math.max(0,-(-H*Z+K)),D=k>0?-Z:Math.min(Math.max(-Z,-Y),Z),E=-k*k+D*(D+2*Y)+X;else if(D<=F)k=0,D=Math.min(Math.max(-Z,-Y),Z),E=D*(D+2*Y)+X;else k=Math.max(0,-(H*Z+K)),D=k>0?Z:Math.min(Math.max(-Z,-Y),Z),E=-k*k+D*(D+2*Y)+X;else D=H>0?-Z:Z,k=Math.max(0,-(H*D+K)),E=-k*k+D*(D+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,k);if(W)W.copy(H1).addScaledVector(t7,D);return E}intersectSphere(J,Q){X6.subVectors(J.center,this.origin);let $=X6.dot(this.direction),W=X6.dot(X6)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let H=Math.sqrt(Z-W),K=$-H,Y=$+H;if(Y<0)return null;if(K<0)return this.at(Y,Q);return this.at(K,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,H,K,Y,X=1/this.direction.x,U=1/this.direction.y,k=1/this.direction.z,D=this.origin;if(X>=0)$=(J.min.x-D.x)*X,W=(J.max.x-D.x)*X;else $=(J.max.x-D.x)*X,W=(J.min.x-D.x)*X;if(U>=0)Z=(J.min.y-D.y)*U,H=(J.max.y-D.y)*U;else Z=(J.max.y-D.y)*U,H=(J.min.y-D.y)*U;if($>H||Z>W)return null;if(Z>$||isNaN($))$=Z;if(H<W||isNaN(W))W=H;if(k>=0)K=(J.min.z-D.z)*k,Y=(J.max.z-D.z)*k;else K=(J.max.z-D.z)*k,Y=(J.min.z-D.z)*k;if($>Y||K>W)return null;if(K>$||$!==$)$=K;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,X6)!==null}intersectTriangle(J,Q,$,W,Z){K1.subVectors(Q,J),e7.subVectors($,J),Y1.crossVectors(K1,e7);let H=this.direction.dot(Y1),K;if(H>0){if(W)return null;K=1}else if(H<0)K=-1,H=-H;else return null;L6.subVectors(this.origin,J);let Y=K*this.direction.dot(e7.crossVectors(L6,e7));if(Y<0)return null;let X=K*this.direction.dot(K1.cross(L6));if(X<0)return null;if(Y+X>H)return null;let U=-K*L6.dot(Y1);if(U<0)return null;return this.at(U/H,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class F7 extends q7{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new s0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new B6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var k5=new E8,j6=new kJ,J9=new v7,N5=new b,Q9=new b,$9=new b,W9=new b,X1=new b,Z9=new b,D5=new b,H9=new b;class j8 extends P8{constructor(J=new m8,Q=new F7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let K=this.morphTargetInfluences;if(Z&&K){Z9.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=K[Y],k=Z[Y];if(U===0)continue;if(X1.fromBufferAttribute(k,J),H)Z9.addScaledVector(X1,U);else Z9.addScaledVector(X1.sub(Q),U)}Q.add(Z9)}return Q}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(J9.copy($.boundingSphere),J9.applyMatrix4(Z),j6.copy(J.ray).recast(J.near),J9.containsPoint(j6.origin)===!1){if(j6.intersectSphere(J9,N5)===null)return;if(j6.origin.distanceToSquared(N5)>(J.far-J.near)**2)return}if(k5.copy(Z).invert(),j6.copy(J.ray).applyMatrix4(k5),$.boundingBox!==null){if(j6.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,j6)}_computeIntersections(J,Q,$){let W,Z=this.geometry,H=this.material,K=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,k=Z.attributes.normal,D=Z.groups,E=Z.drawRange;if(K!==null)if(Array.isArray(H))for(let F=0,_=D.length;F<_;F++){let L=D[F],G=H[L.materialIndex],N=Math.max(L.start,E.start),w=Math.min(K.count,Math.min(L.start+L.count,E.start+E.count));for(let z=N,B=w;z<B;z+=3){let T=K.getX(z),A=K.getX(z+1),P=K.getX(z+2);if(W=K9(this,G,J,$,X,U,k,T,A,P),W)W.faceIndex=Math.floor(z/3),W.face.materialIndex=L.materialIndex,Q.push(W)}}else{let F=Math.max(0,E.start),_=Math.min(K.count,E.start+E.count);for(let L=F,G=_;L<G;L+=3){let N=K.getX(L),w=K.getX(L+1),z=K.getX(L+2);if(W=K9(this,H,J,$,X,U,k,N,w,z),W)W.faceIndex=Math.floor(L/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(H))for(let F=0,_=D.length;F<_;F++){let L=D[F],G=H[L.materialIndex],N=Math.max(L.start,E.start),w=Math.min(Y.count,Math.min(L.start+L.count,E.start+E.count));for(let z=N,B=w;z<B;z+=3){let T=z,A=z+1,P=z+2;if(W=K9(this,G,J,$,X,U,k,T,A,P),W)W.faceIndex=Math.floor(z/3),W.face.materialIndex=L.materialIndex,Q.push(W)}}else{let F=Math.max(0,E.start),_=Math.min(Y.count,E.start+E.count);for(let L=F,G=_;L<G;L+=3){let N=L,w=L+1,z=L+2;if(W=K9(this,H,J,$,X,U,k,N,w,z),W)W.faceIndex=Math.floor(L/3),Q.push(W)}}}}function j$(J,Q,$,W,Z,H,K,Y){let X;if(Q.side===1)X=W.intersectTriangle(K,H,Z,!0,Y);else X=W.intersectTriangle(Z,H,K,Q.side===0,Y);if(X===null)return null;H9.copy(Y),H9.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(H9);if(U<$.near||U>$.far)return null;return{distance:U,point:H9.clone(),object:J}}function K9(J,Q,$,W,Z,H,K,Y,X,U){J.getVertexPosition(Y,Q9),J.getVertexPosition(X,$9),J.getVertexPosition(U,W9);let k=j$(J,Q,$,W,Q9,$9,W9,D5);if(k){let D=new b;if(g8.getBarycoord(D5,Q9,$9,W9,D),Z)k.uv=g8.getInterpolatedAttribute(Z,Y,X,U,D,new a0);if(H)k.uv1=g8.getInterpolatedAttribute(H,Y,X,U,D,new a0);if(K){if(k.normal=g8.getInterpolatedAttribute(K,Y,X,U,D,new b),k.normal.dot(W.direction)>0)k.normal.multiplyScalar(-1)}let E={a:Y,b:X,c:U,normal:new b,materialIndex:0};g8.getNormal(Q9,$9,W9,E.normal),k.face=E,k.barycoord=D}return k}class NJ extends V8{constructor(J=null,Q=1,$=1,W,Z,H,K,Y,X=1003,U=1003,k,D){super(null,H,K,Y,X,U,W,Z,k,D);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var U1=new b,h$=new b,f$=new T0;class U6{constructor(J=new b(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=U1.subVectors($,Q).cross(h$.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(U1),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(H<0||H>1))return null;return Q.copy(J.start).addScaledVector(W,H)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||f$.getNormalMatrix(J),W=this.coplanarPoint(U1).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var h6=new v7,v$=new a0(0.5,0.5),Y9=new b;class T9{constructor(J=new U6,Q=new U6,$=new U6,W=new U6,Z=new U6,H=new U6){this.planes=[J,Q,$,W,Z,H]}set(J,Q,$,W,Z,H){let K=this.planes;return K[0].copy(J),K[1].copy(Q),K[2].copy($),K[3].copy(W),K[4].copy(Z),K[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,H=Z[0],K=Z[1],Y=Z[2],X=Z[3],U=Z[4],k=Z[5],D=Z[6],E=Z[7],F=Z[8],_=Z[9],L=Z[10],G=Z[11],N=Z[12],w=Z[13],z=Z[14],B=Z[15];if(W[0].setComponents(X-H,E-U,G-F,B-N).normalize(),W[1].setComponents(X+H,E+U,G+F,B+N).normalize(),W[2].setComponents(X+K,E+k,G+_,B+w).normalize(),W[3].setComponents(X-K,E-k,G-_,B-w).normalize(),$)W[4].setComponents(Y,D,L,z).normalize(),W[5].setComponents(X-Y,E-D,G-L,B-z).normalize();else if(W[4].setComponents(X-Y,E-D,G-L,B-z).normalize(),Q===2000)W[5].setComponents(X+Y,E+D,G+L,B+z).normalize();else if(Q===2001)W[5].setComponents(Y,D,L,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();h6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();h6.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(h6)}intersectsSprite(J){h6.center.set(0,0,0);let Q=v$.distanceTo(J.center);return h6.radius=0.7071067811865476+Q,h6.applyMatrix4(J.matrixWorld),this.intersectsSphere(h6)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(Y9.x=W.normal.x>0?J.max.x:J.min.x,Y9.y=W.normal.y>0?J.max.y:J.min.y,Y9.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(Y9)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S9 extends V8{constructor(J=[],Q=301,$,W,Z,H,K,Y,X,U){super(J,Q,$,W,Z,H,K,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class A6 extends V8{constructor(J,Q,$=1014,W,Z,H,K=1003,Y=1003,X,U=1026,k=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let D={width:J,height:Q,depth:k};super(D,W,Z,H,K,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new h7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class DJ extends A6{constructor(J,Q=1014,$=301,W,Z,H=1003,K=1003,Y,X=1026){let U={width:J,height:J,depth:1},k=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,H,K,Y,X);this.image=k,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class j9 extends V8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class R7 extends m8{constructor(J=1,Q=1,$=1,W=1,Z=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:H};let K=this;W=Math.floor(W),Z=Math.floor(Z),H=Math.floor(H);let Y=[],X=[],U=[],k=[],D=0,E=0;F("z","y","x",-1,-1,$,Q,J,H,Z,0),F("z","y","x",1,-1,$,Q,-J,H,Z,1),F("x","z","y",1,1,J,$,Q,W,H,2),F("x","z","y",1,-1,J,$,-Q,W,H,3),F("x","y","z",1,-1,J,Q,$,W,Z,4),F("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new O8(X,3)),this.setAttribute("normal",new O8(U,3)),this.setAttribute("uv",new O8(k,2));function F(_,L,G,N,w,z,B,T,A,P,O){let V=z/A,u=B/P,I=z/2,l=B/2,i=T/2,f=A+1,d=P+1,x=0,p=0,a=new b;for(let Q0=0;Q0<d;Q0++){let N0=Q0*u-l;for(let B0=0;B0<f;B0++){let O0=B0*V-I;a[_]=O0*N,a[L]=N0*w,a[G]=i,X.push(a.x,a.y,a.z),a[_]=0,a[L]=0,a[G]=T>0?1:-1,U.push(a.x,a.y,a.z),k.push(B0/A),k.push(1-Q0/P),x+=1}}for(let Q0=0;Q0<P;Q0++)for(let N0=0;N0<A;N0++){let B0=D+N0+f*Q0,O0=D+N0+f*(Q0+1),i0=D+(N0+1)+f*(Q0+1),g0=D+(N0+1)+f*Q0;Y.push(B0,O0,g0),Y.push(O0,i0,g0),p+=6}K.addGroup(E,p,O),E+=p,D+=x}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class b7 extends m8{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,H=Q/2,K=Math.floor($),Y=Math.floor(W),X=K+1,U=Y+1,k=J/K,D=Q/Y,E=[],F=[],_=[],L=[];for(let G=0;G<U;G++){let N=G*D-H;for(let w=0;w<X;w++){let z=w*k-Z;F.push(z,-N,0),_.push(0,0,1),L.push(w/K),L.push(1-G/Y)}}for(let G=0;G<Y;G++)for(let N=0;N<K;N++){let w=N+X*G,z=N+X*(G+1),B=N+1+X*(G+1),T=N+1+X*G;E.push(w,z,T),E.push(z,B,T)}this.setIndex(E),this.setAttribute("position",new O8(F,3)),this.setAttribute("normal",new O8(_,3)),this.setAttribute("uv",new O8(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b7(J.width,J.height,J.widthSegments,J.heightSegments)}}class y7 extends m8{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,H=0,K=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:H,thetaLength:K},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(H+K,Math.PI),X=0,U=[],k=new b,D=new b,E=[],F=[],_=[],L=[];for(let G=0;G<=$;G++){let N=[],w=G/$,z=0;if(G===0&&H===0)z=0.5/Q;else if(G===$&&Y===Math.PI)z=-0.5/Q;for(let B=0;B<=Q;B++){let T=B/Q;k.x=-J*Math.cos(W+T*Z)*Math.sin(H+w*K),k.y=J*Math.cos(H+w*K),k.z=J*Math.sin(W+T*Z)*Math.sin(H+w*K),F.push(k.x,k.y,k.z),D.copy(k).normalize(),_.push(D.x,D.y,D.z),L.push(T+z,1-w),N.push(X++)}U.push(N)}for(let G=0;G<$;G++)for(let N=0;N<Q;N++){let w=U[G][N+1],z=U[G][N],B=U[G+1][N],T=U[G+1][N+1];if(G!==0||H>0)E.push(w,z,T);if(G!==$-1||Y<Math.PI)E.push(z,B,T)}this.setIndex(E),this.setAttribute("position",new O8(F,3)),this.setAttribute("normal",new O8(_,3)),this.setAttribute("uv",new O8(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y7(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x7 extends m8{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,H=0,K=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:H,thetaLength:K},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],k=[],D=new b,E=new b,F=new b;for(let _=0;_<=$;_++){let L=H+_/$*K;for(let G=0;G<=W;G++){let N=G/W*Z;E.x=(J+Q*Math.cos(L))*Math.cos(N),E.y=(J+Q*Math.cos(L))*Math.sin(N),E.z=Q*Math.sin(L),X.push(E.x,E.y,E.z),D.x=J*Math.cos(N),D.y=J*Math.sin(N),F.subVectors(E,D).normalize(),U.push(F.x,F.y,F.z),k.push(G/W),k.push(_/$)}}for(let _=1;_<=$;_++)for(let L=1;L<=W;L++){let G=(W+1)*_+L-1,N=(W+1)*(_-1)+L-1,w=(W+1)*(_-1)+L,z=(W+1)*_+L;Y.push(G,N,z),Y.push(N,w,z)}this.setIndex(Y),this.setAttribute("position",new O8(X,3)),this.setAttribute("normal",new O8(U,3)),this.setAttribute("uv",new O8(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function l6(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(q5(Z))if(Z.isRenderTargetTexture)A0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(q5(Z[0])){let H=[];for(let K=0,Y=Z.length;K<Y;K++)H[K]=Z[K].clone();Q[$][W]=H}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function B8(J){let Q={};for(let $=0;$<J.length;$++){let W=l6(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function q5(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function b$(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function qJ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var wQ={clone:l6,merge:B8},y$=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x$=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class h8 extends q7{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y$,this.fragmentShader=x$,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=l6(J.uniforms),this.uniformsGroups=b$(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Q.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[W]={type:"m4",value:H.toArray()};else Q.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class FJ extends h8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RJ extends q7{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class OJ extends q7{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function X9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class m6{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let H;Q:{W:if(!(J<W)){for(let K=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===K)break;if(Z=W,W=Q[++$],J<W)break J}H=Q.length;break Q}if(!(J>=Z)){let K=Q[1];if(J<K)$=2,Z=K;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}H=$,$=0;break Q}break $}while($<H){let K=$+H>>>1;if(J<Q[K])H=K;else $=K+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let H=0;H!==W;++H)Q[H]=$[Z+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class _J extends m6{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,H=J+1,K=W[Z],Y=W[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,K=2*Q-$;break;case 2402:Z=W.length-2,K=Q+W[Z]-W[Z+1];break;default:Z=J,K=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Y=2*$-Q;break;case 2402:H=1,Y=$+W[1]-W[0];break;default:H=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-K),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=H*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=this._offsetPrev,k=this._offsetNext,D=this._weightPrev,E=this._weightNext,F=($-Q)/(W-Q),_=F*F,L=_*F,G=-D*L+2*D*_-D*F,N=(1+D)*L+(-1.5-2*D)*_+(-0.5+D)*F+1,w=(-1-E)*L+(1.5+E)*_+0.5*F,z=E*L-E*_;for(let B=0;B!==K;++B)Z[B]=G*H[U+B]+N*H[X+B]+w*H[Y+B]+z*H[k+B];return Z}}class MJ extends m6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=($-Q)/(W-Q),k=1-U;for(let D=0;D!==K;++D)Z[D]=H[X+D]*k+H[Y+D]*U;return Z}}class wJ extends m6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class LJ extends m6{interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=this.settings||this.DefaultSettings_,k=U.inTangents,D=U.outTangents;if(!k||!D){let _=($-Q)/(W-Q),L=1-_;for(let G=0;G!==K;++G)Z[G]=H[X+G]*L+H[Y+G]*_;return Z}let E=K*2,F=J-1;for(let _=0;_!==K;++_){let L=H[X+_],G=H[Y+_],N=F*E+_*2,w=D[N],z=D[N+1],B=J*E+_*2,T=k[B],A=k[B+1],P=($-Q)/(W-Q),O,V,u,I,l;for(let i=0;i<8;i++){O=P*P,V=O*P,u=1-P,I=u*u,l=I*u;let d=l*Q+3*I*P*w+3*u*O*T+V*W-$;if(Math.abs(d)<0.0000000001)break;let x=3*I*(w-Q)+6*u*P*(T-w)+3*O*(W-T);if(Math.abs(x)<0.0000000001)break;P=P-d/x,P=Math.max(0,Math.min(1,P))}Z[_]=l*L+3*I*P*z+3*u*O*A+V*G}return Z}}class d8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=X9(Q,this.TimeBufferType),this.values=X9($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:X9(J.times,Array),values:X9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new wJ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new MJ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new _J(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new LJ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return A0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,H=W-1;while(Z!==W&&$[Z]<J)++Z;while(H!==-1&&$[H]>Q)--H;if(++H,Z!==0||H!==W){if(Z>=H)H=Math.max(H,1),Z=H-1;let K=this.getValueSize();this.times=$.slice(Z,H),this.values=this.values.slice(Z*K,H*K)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)C0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)C0("KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let K=0;K!==Z;K++){let Y=$[K];if(typeof Y==="number"&&isNaN(Y)){C0("KeyframeTrack: Time is not a valid number.",this,K,Y),J=!1;break}if(H!==null&&H>Y){C0("KeyframeTrack: Out of order keys.",this,K,Y,H),J=!1;break}H=Y}if(W!==void 0){if(F$(W))for(let K=0,Y=W.length;K!==Y;++K){let X=W[K];if(isNaN(X)){C0("KeyframeTrack: Value is not a valid number.",this,K,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,H=1;for(let K=1;K<Z;++K){let Y=!1,X=J[K],U=J[K+1];if(X!==U&&(K!==1||X!==J[0]))if(!W){let k=K*$,D=k-$,E=k+$;for(let F=0;F!==$;++F){let _=Q[k+F];if(_!==Q[D+F]||_!==Q[E+F]){Y=!0;break}}}else Y=!0;if(Y){if(K!==H){J[H]=J[K];let k=K*$,D=H*$;for(let E=0;E!==$;++E)Q[D+E]=Q[k+E]}++H}}if(Z>0){J[H]=J[Z];for(let K=Z*$,Y=H*$,X=0;X!==$;++X)Q[Y+X]=Q[K+X];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);return W.createInterpolant=this.createInterpolant,W}}d8.prototype.ValueTypeName="";d8.prototype.TimeBufferType=Float32Array;d8.prototype.ValueBufferType=Float32Array;d8.prototype.DefaultInterpolation=2301;class d6 extends d8{constructor(J,Q,$){super(J,Q,$)}}d6.prototype.ValueTypeName="bool";d6.prototype.ValueBufferType=Array;d6.prototype.DefaultInterpolation=2300;d6.prototype.InterpolantFactoryMethodLinear=void 0;d6.prototype.InterpolantFactoryMethodSmooth=void 0;class VJ extends d8{constructor(J,Q,$,W){super(J,Q,$,W)}}VJ.prototype.ValueTypeName="color";class BJ extends d8{constructor(J,Q,$,W){super(J,Q,$,W)}}BJ.prototype.ValueTypeName="number";class zJ extends m6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=($-Q)/(W-Q),X=J*K;for(let U=X+K;X!==U;X+=4)D6.slerpFlat(Z,0,H,X-K,H,X,Y);return Z}}class h9 extends d8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new zJ(this.times,this.values,this.getValueSize(),J)}}h9.prototype.ValueTypeName="quaternion";h9.prototype.InterpolantFactoryMethodSmooth=void 0;class u6 extends d8{constructor(J,Q,$){super(J,Q,$)}}u6.prototype.ValueTypeName="string";u6.prototype.ValueBufferType=Array;u6.prototype.DefaultInterpolation=2300;u6.prototype.InterpolantFactoryMethodLinear=void 0;u6.prototype.InterpolantFactoryMethodSmooth=void 0;class IJ extends d8{constructor(J,Q,$,W){super(J,Q,$,W)}}IJ.prototype.ValueTypeName="vector";class AJ{constructor(J,Q,$){let W=this,Z=!1,H=0,K=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(K++,Z===!1){if(W.onStart!==void 0)W.onStart(U,H,K)}Z=!0},this.itemEnd=function(U){if(H++,W.onProgress!==void 0)W.onProgress(U,H,K);if(H===K){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,k){return X.push(U,k),this},this.removeHandler=function(U){let k=X.indexOf(U);if(k!==-1)X.splice(k,2);return this},this.getHandler=function(U){for(let k=0,D=X.length;k<D;k+=2){let E=X[k],F=X[k+1];if(E.global)E.lastIndex=0;if(E.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var LQ=new AJ;class CJ{constructor(J){if(this.manager=J!==void 0?J:LQ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}CJ.DEFAULT_MATERIAL_NAME="__DEFAULT";var U9=new b,E9=new D6,t8=new b;class f9 extends P8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new E8,this.projectionMatrix=new E8,this.projectionMatrixInverse=new E8,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(U9,E9,t8),t8.x===1&&t8.y===1&&t8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(U9,E9,t8.set(1,1,1)).invert()}updateWorldMatrix(J,Q){if(super.updateWorldMatrix(J,Q),this.matrixWorld.decompose(U9,E9,t8),t8.x===1&&t8.y===1&&t8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(U9,E9,t8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var V6=new b,F5=new a0,R5=new a0;class I8 extends f9{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=k9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(l9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return k9*2*Math.atan(Math.tan(l9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){V6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(V6.x,V6.y).multiplyScalar(-J/V6.z),V6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(V6.x,V6.y).multiplyScalar(-J/V6.z)}getViewSize(J,Q){return this.getViewBounds(J,F5,R5),Q.subVectors(R5,F5)}setViewOffset(J,Q,$,W,Z,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(l9*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=H;Z+=H.offsetX*W/Y,Q-=H.offsetY*$/X,W*=H.width/Y,$*=H.height/X}let K=this.filmOffset;if(K!==0)Z+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class v9 extends f9{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,H=$+J,K=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,H=Z+X*this.view.width,K-=U*this.view.offsetY,Y=K-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,H,K,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var Z7=-90,H7=1;class PJ extends P8{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new I8(Z7,H7,J,Q);W.layers=this.layers,this.add(W);let Z=new I8(Z7,H7,J,Q);Z.layers=this.layers,this.add(Z);let H=new I8(Z7,H7,J,Q);H.layers=this.layers,this.add(H);let K=new I8(Z7,H7,J,Q);K.layers=this.layers,this.add(K);let Y=new I8(Z7,H7,J,Q);Y.layers=this.layers,this.add(Y);let X=new I8(Z7,H7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,H,K,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,H,K,Y,X,U]=this.children,k=J.getRenderTarget(),D=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let _=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,2,W),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,3,W),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=_,J.setRenderTarget($,5,W),L&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(k,D,E),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class TJ extends I8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var SJ="\\[\\]\\.:\\/",g$=new RegExp("["+SJ+"]","g"),jJ="[^"+SJ+"]",p$="[^"+SJ.replace("\\.","")+"]",l$=/((?:WC+[\/:])*)/.source.replace("WC",jJ),m$=/(WCOD+)?/.source.replace("WCOD",p$),d$=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jJ),u$=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jJ),c$=new RegExp("^"+l$+m$+d$+u$+"$"),n$=["material","materials","bones","map"];class VQ{constructor(J,Q,$){let W=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(g$,"")}static parseTrackName(J){let Q=c$.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(n$.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let H=0;H<Z.length;H++){let K=Z[H];if(K.name===Q||K.uuid===Q)return K;let Y=$(K.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){A0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){C0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){C0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){C0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){C0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){C0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){C0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){C0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let H=J[W];if(H===void 0){let X=Q.nodeName;C0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)K=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)K=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){C0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){C0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Z}else if(H.fromArray!==void 0&&H.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Y=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=VQ;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mY=new Float32Array(1);class hJ{static{hJ.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}function fJ(J,Q,$,W){let Z=s$(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function s$(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)A0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function nQ(){let J=null,Q=!1,$=null,W=null;function Z(H,K){$(H,K),W=J.requestAnimationFrame(Z)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function i$(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:k}=Y,D=U.byteLength,E=J.createBuffer();J.bindBuffer(X,E),J.bufferData(X,U,k),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:D}}function W(Y,X,U){let{array:k,updateRanges:D}=X;if(J.bindBuffer(U,Y),D.length===0)J.bufferSubData(U,0,k);else{D.sort((F,_)=>F.start-_.start);let E=0;for(let F=1;F<D.length;F++){let _=D[E],L=D[F];if(L.start<=_.start+_.count+1)_.count=Math.max(_.count,L.start+L.count-_.start);else++E,D[E]=L}D.length=E+1;for(let F=0,_=D.length;F<_;F++){let L=D[F];J.bufferSubData(U,L.start*k.BYTES_PER_ELEMENT,k,L.start,L.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function H(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function K(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let k=Q.get(Y);if(!k||k.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:H,update:K}}var o$=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a$=`#ifdef USE_ALPHAHASH
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
#endif`,r$=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t$=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e$=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QW=`#ifdef USE_AOMAP
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
#endif`,$W=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WW=`#ifdef USE_BATCHING
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
#endif`,ZW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YW=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XW=`#ifdef USE_IRIDESCENCE
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
#endif`,UW=`#ifdef USE_BUMPMAP
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
#endif`,EW=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NW=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,RW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OW=`#define PI 3.141592653589793
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
} // validated`,_W=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MW=`vec3 transformedNormal = objectNormal;
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
#endif`,wW=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LW=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VW=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BW=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zW="gl_FragColor = linearToOutputTexel( gl_FragColor );",IW=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AW=`#ifdef USE_ENVMAP
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
#endif`,CW=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PW=`#ifdef USE_ENVMAP
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
#endif`,TW=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SW=`#ifdef USE_ENVMAP
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
#endif`,jW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fW=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vW=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bW=`#ifdef USE_GRADIENTMAP
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
}`,yW=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xW=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pW=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lW=`#ifdef USE_ENVMAP
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
#endif`,mW=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uW=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nW=`PhysicalMaterial material;
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
#endif`,sW=`uniform sampler2D dfgLUT;
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
}`,iW=`
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
#endif`,oW=`#if defined( RE_IndirectDiffuse )
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
#endif`,aW=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rW=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JZ=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QZ=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$Z=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WZ=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZZ=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HZ=`#if defined( USE_POINTS_UV )
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
#endif`,KZ=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YZ=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XZ=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UZ=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EZ=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GZ=`#ifdef USE_MORPHTARGETS
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
#endif`,kZ=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NZ=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DZ=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qZ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FZ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RZ=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OZ=`#ifdef USE_NORMALMAP
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
#endif`,_Z=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MZ=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wZ=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LZ=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VZ=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BZ=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zZ=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IZ=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AZ=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CZ=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PZ=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TZ=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SZ=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jZ=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hZ=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fZ=`float getShadowMask() {
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
}`,vZ=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bZ=`#ifdef USE_SKINNING
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
#endif`,yZ=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xZ=`#ifdef USE_SKINNING
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
#endif`,gZ=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pZ=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lZ=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mZ=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dZ=`#ifdef USE_TRANSMISSION
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
#endif`,uZ=`#ifdef USE_TRANSMISSION
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
#endif`,cZ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nZ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sZ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iZ=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oZ=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aZ=`uniform sampler2D t2D;
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
}`,rZ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tZ=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eZ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QH=`#include <common>
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
}`,$H=`#if DEPTH_PACKING == 3200
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
}`,WH=`#define DISTANCE
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
}`,ZH=`#define DISTANCE
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
}`,HH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YH=`uniform float scale;
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
}`,XH=`uniform vec3 diffuse;
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
}`,UH=`#include <common>
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
}`,EH=`uniform vec3 diffuse;
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
}`,GH=`#define LAMBERT
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
}`,kH=`#define LAMBERT
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
}`,NH=`#define MATCAP
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
}`,DH=`#define MATCAP
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
}`,qH=`#define NORMAL
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
}`,FH=`#define NORMAL
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
}`,RH=`#define PHONG
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
}`,OH=`#define PHONG
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
}`,_H=`#define STANDARD
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
}`,MH=`#define STANDARD
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
}`,wH=`#define TOON
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
}`,LH=`#define TOON
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
}`,VH=`uniform float size;
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
}`,BH=`uniform vec3 diffuse;
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
}`,zH=`#include <common>
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
}`,IH=`uniform vec3 color;
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
}`,AH=`uniform float rotation;
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
}`,CH=`uniform vec3 diffuse;
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
}`,v0={alphahash_fragment:o$,alphahash_pars_fragment:a$,alphamap_fragment:r$,alphamap_pars_fragment:t$,alphatest_fragment:e$,alphatest_pars_fragment:JW,aomap_fragment:QW,aomap_pars_fragment:$W,batching_pars_vertex:WW,batching_vertex:ZW,begin_vertex:HW,beginnormal_vertex:KW,bsdfs:YW,iridescence_fragment:XW,bumpmap_pars_fragment:UW,clipping_planes_fragment:EW,clipping_planes_pars_fragment:GW,clipping_planes_pars_vertex:kW,clipping_planes_vertex:NW,color_fragment:DW,color_pars_fragment:qW,color_pars_vertex:FW,color_vertex:RW,common:OW,cube_uv_reflection_fragment:_W,defaultnormal_vertex:MW,displacementmap_pars_vertex:wW,displacementmap_vertex:LW,emissivemap_fragment:VW,emissivemap_pars_fragment:BW,colorspace_fragment:zW,colorspace_pars_fragment:IW,envmap_fragment:AW,envmap_common_pars_fragment:CW,envmap_pars_fragment:PW,envmap_pars_vertex:TW,envmap_physical_pars_fragment:lW,envmap_vertex:SW,fog_vertex:jW,fog_pars_vertex:hW,fog_fragment:fW,fog_pars_fragment:vW,gradientmap_pars_fragment:bW,lightmap_pars_fragment:yW,lights_lambert_fragment:xW,lights_lambert_pars_fragment:gW,lights_pars_begin:pW,lights_toon_fragment:mW,lights_toon_pars_fragment:dW,lights_phong_fragment:uW,lights_phong_pars_fragment:cW,lights_physical_fragment:nW,lights_physical_pars_fragment:sW,lights_fragment_begin:iW,lights_fragment_maps:oW,lights_fragment_end:aW,lightprobes_pars_fragment:rW,logdepthbuf_fragment:tW,logdepthbuf_pars_fragment:eW,logdepthbuf_pars_vertex:JZ,logdepthbuf_vertex:QZ,map_fragment:$Z,map_pars_fragment:WZ,map_particle_fragment:ZZ,map_particle_pars_fragment:HZ,metalnessmap_fragment:KZ,metalnessmap_pars_fragment:YZ,morphinstance_vertex:XZ,morphcolor_vertex:UZ,morphnormal_vertex:EZ,morphtarget_pars_vertex:GZ,morphtarget_vertex:kZ,normal_fragment_begin:NZ,normal_fragment_maps:DZ,normal_pars_fragment:qZ,normal_pars_vertex:FZ,normal_vertex:RZ,normalmap_pars_fragment:OZ,clearcoat_normal_fragment_begin:_Z,clearcoat_normal_fragment_maps:MZ,clearcoat_pars_fragment:wZ,iridescence_pars_fragment:LZ,opaque_fragment:VZ,packing:BZ,premultiplied_alpha_fragment:zZ,project_vertex:IZ,dithering_fragment:AZ,dithering_pars_fragment:CZ,roughnessmap_fragment:PZ,roughnessmap_pars_fragment:TZ,shadowmap_pars_fragment:SZ,shadowmap_pars_vertex:jZ,shadowmap_vertex:hZ,shadowmask_pars_fragment:fZ,skinbase_vertex:vZ,skinning_pars_vertex:bZ,skinning_vertex:yZ,skinnormal_vertex:xZ,specularmap_fragment:gZ,specularmap_pars_fragment:pZ,tonemapping_fragment:lZ,tonemapping_pars_fragment:mZ,transmission_fragment:dZ,transmission_pars_fragment:uZ,uv_pars_fragment:cZ,uv_pars_vertex:nZ,uv_vertex:sZ,worldpos_vertex:iZ,background_vert:oZ,background_frag:aZ,backgroundCube_vert:rZ,backgroundCube_frag:tZ,cube_vert:eZ,cube_frag:JH,depth_vert:QH,depth_frag:$H,distance_vert:WH,distance_frag:ZH,equirect_vert:HH,equirect_frag:KH,linedashed_vert:YH,linedashed_frag:XH,meshbasic_vert:UH,meshbasic_frag:EH,meshlambert_vert:GH,meshlambert_frag:kH,meshmatcap_vert:NH,meshmatcap_frag:DH,meshnormal_vert:qH,meshnormal_frag:FH,meshphong_vert:RH,meshphong_frag:OH,meshphysical_vert:_H,meshphysical_frag:MH,meshtoon_vert:wH,meshtoon_frag:LH,points_vert:VH,points_frag:BH,shadow_vert:zH,shadow_frag:IH,sprite_vert:AH,sprite_frag:CH},Y0={common:{diffuse:{value:new s0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new T0}},envmap:{envMap:{value:null},envMapRotation:{value:new T0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new T0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new T0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new T0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new T0},normalScale:{value:new a0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new T0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new T0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new T0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new T0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new s0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new s0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0},uvTransform:{value:new T0}},sprite:{diffuse:{value:new s0(16777215)},opacity:{value:1},center:{value:new a0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}}},W6={basic:{uniforms:B8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.fog]),vertexShader:v0.meshbasic_vert,fragmentShader:v0.meshbasic_frag},lambert:{uniforms:B8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new s0(0)},envMapIntensity:{value:1}}]),vertexShader:v0.meshlambert_vert,fragmentShader:v0.meshlambert_frag},phong:{uniforms:B8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new s0(0)},specular:{value:new s0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:v0.meshphong_vert,fragmentShader:v0.meshphong_frag},standard:{uniforms:B8([Y0.common,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.roughnessmap,Y0.metalnessmap,Y0.fog,Y0.lights,{emissive:{value:new s0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag},toon:{uniforms:B8([Y0.common,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.gradientmap,Y0.fog,Y0.lights,{emissive:{value:new s0(0)}}]),vertexShader:v0.meshtoon_vert,fragmentShader:v0.meshtoon_frag},matcap:{uniforms:B8([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,{matcap:{value:null}}]),vertexShader:v0.meshmatcap_vert,fragmentShader:v0.meshmatcap_frag},points:{uniforms:B8([Y0.points,Y0.fog]),vertexShader:v0.points_vert,fragmentShader:v0.points_frag},dashed:{uniforms:B8([Y0.common,Y0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:v0.linedashed_vert,fragmentShader:v0.linedashed_frag},depth:{uniforms:B8([Y0.common,Y0.displacementmap]),vertexShader:v0.depth_vert,fragmentShader:v0.depth_frag},normal:{uniforms:B8([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,{opacity:{value:1}}]),vertexShader:v0.meshnormal_vert,fragmentShader:v0.meshnormal_frag},sprite:{uniforms:B8([Y0.sprite,Y0.fog]),vertexShader:v0.sprite_vert,fragmentShader:v0.sprite_frag},background:{uniforms:{uvTransform:{value:new T0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:v0.background_vert,fragmentShader:v0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new T0}},vertexShader:v0.backgroundCube_vert,fragmentShader:v0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:v0.cube_vert,fragmentShader:v0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:v0.equirect_vert,fragmentShader:v0.equirect_frag},distance:{uniforms:B8([Y0.common,Y0.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:v0.distance_vert,fragmentShader:v0.distance_frag},shadow:{uniforms:B8([Y0.lights,Y0.fog,{color:{value:new s0(0)},opacity:{value:1}}]),vertexShader:v0.shadow_vert,fragmentShader:v0.shadow_frag}};W6.physical={uniforms:B8([W6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new T0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new T0},clearcoatNormalScale:{value:new a0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new T0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new T0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new T0},sheen:{value:0},sheenColor:{value:new s0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new T0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new T0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new T0},transmissionSamplerSize:{value:new a0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new T0},attenuationDistance:{value:0},attenuationColor:{value:new s0(0)},specularColor:{value:new s0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new T0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new T0},anisotropyVector:{value:new a0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new T0}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag};var b9={r:0,b:0,g:0},PH=new E8,sQ=new T0;sQ.set(-1,0,0,0,1,0,0,0,1);function TH(J,Q,$,W,Z,H){let K=new s0(0),Y=Z===!0?0:1,X,U,k=null,D=0,E=null;function F(w){let z=w.isScene===!0?w.background:null;if(z&&z.isTexture){let B=w.backgroundBlurriness>0;z=Q.get(z,B)}return z}function _(w){let z=!1,B=F(w);if(B===null)G(K,Y);else if(B&&B.isColor)G(B,1),z=!0;let T=J.xr.getEnvironmentBlendMode();if(T==="additive")$.buffers.color.setClear(0,0,0,1,H);else if(T==="alpha-blend")$.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||z)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(w,z){let B=F(z);if(B&&(B.isCubeTexture||B.mapping===P7)){if(U===void 0)U=new j8(new R7(1,1,1),new h8({name:"BackgroundCubeMaterial",uniforms:l6(W6.backgroundCube.uniforms),vertexShader:W6.backgroundCube.vertexShader,fragmentShader:W6.backgroundCube.fragmentShader,side:T8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(PH.makeRotationFromEuler(z.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(sQ);if(U.material.toneMapped=l0.getTransfer(B.colorSpace)!==W8,k!==B||D!==B.version||E!==J.toneMapping)U.material.needsUpdate=!0,k=B,D=B.version,E=J.toneMapping;U.layers.enableAll(),w.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(X===void 0)X=new j8(new b7(2,2),new h8({name:"BackgroundMaterial",uniforms:l6(W6.background.uniforms),vertexShader:W6.background.vertexShader,fragmentShader:W6.background.fragmentShader,side:E7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=B,X.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,X.material.toneMapped=l0.getTransfer(B.colorSpace)!==W8,B.matrixAutoUpdate===!0)B.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(B.matrix),k!==B||D!==B.version||E!==J.toneMapping)X.material.needsUpdate=!0,k=B,D=B.version,E=J.toneMapping;X.layers.enableAll(),w.unshift(X,X.geometry,X.material,0,0,null)}}function G(w,z){w.getRGB(b9,qJ(J)),$.buffers.color.setClear(b9.r,b9.g,b9.b,z,H)}function N(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return K},setClearColor:function(w,z=1){K.set(w),Y=z,G(K,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(w){Y=w,G(K,Y)},render:_,addToRenderList:L,dispose:N}}function SH(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=E(null),H=Z,K=!1;function Y(I,l,i,f,d){let x=!1,p=D(I,f,i,l);if(H!==p)H=p,U(H.object);if(x=F(I,f,i,d),x)_(I,f,i,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(x||K){if(K=!1,B(I,l,i,f),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function X(){return J.createVertexArray()}function U(I){return J.bindVertexArray(I)}function k(I){return J.deleteVertexArray(I)}function D(I,l,i,f){let d=f.wireframe===!0,x=W[l.id];if(x===void 0)x={},W[l.id]=x;let p=I.isInstancedMesh===!0?I.id:0,a=x[p];if(a===void 0)a={},x[p]=a;let Q0=a[i.id];if(Q0===void 0)Q0={},a[i.id]=Q0;let N0=Q0[d];if(N0===void 0)N0=E(X()),Q0[d]=N0;return N0}function E(I){let l=[],i=[],f=[];for(let d=0;d<$;d++)l[d]=0,i[d]=0,f[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:i,attributeDivisors:f,object:I,attributes:{},index:null}}function F(I,l,i,f){let d=H.attributes,x=l.attributes,p=0,a=i.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let B0=d[Q0],O0=x[Q0];if(O0===void 0){if(Q0==="instanceMatrix"&&I.instanceMatrix)O0=I.instanceMatrix;if(Q0==="instanceColor"&&I.instanceColor)O0=I.instanceColor}if(B0===void 0)return!0;if(B0.attribute!==O0)return!0;if(O0&&B0.data!==O0.data)return!0;p++}if(H.attributesNum!==p)return!0;if(H.index!==f)return!0;return!1}function _(I,l,i,f){let d={},x=l.attributes,p=0,a=i.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let B0=x[Q0];if(B0===void 0){if(Q0==="instanceMatrix"&&I.instanceMatrix)B0=I.instanceMatrix;if(Q0==="instanceColor"&&I.instanceColor)B0=I.instanceColor}let O0={};if(O0.attribute=B0,B0&&B0.data)O0.data=B0.data;d[Q0]=O0,p++}H.attributes=d,H.attributesNum=p,H.index=f}function L(){let I=H.newAttributes;for(let l=0,i=I.length;l<i;l++)I[l]=0}function G(I){N(I,0)}function N(I,l){let{newAttributes:i,enabledAttributes:f,attributeDivisors:d}=H;if(i[I]=1,f[I]===0)J.enableVertexAttribArray(I),f[I]=1;if(d[I]!==l)J.vertexAttribDivisor(I,l),d[I]=l}function w(){let{newAttributes:I,enabledAttributes:l}=H;for(let i=0,f=l.length;i<f;i++)if(l[i]!==I[i])J.disableVertexAttribArray(i),l[i]=0}function z(I,l,i,f,d,x,p){if(p===!0)J.vertexAttribIPointer(I,l,i,d,x);else J.vertexAttribPointer(I,l,i,f,d,x)}function B(I,l,i,f){L();let d=f.attributes,x=i.getAttributes(),p=l.defaultAttributeValues;for(let a in x){let Q0=x[a];if(Q0.location>=0){let N0=d[a];if(N0===void 0){if(a==="instanceMatrix"&&I.instanceMatrix)N0=I.instanceMatrix;if(a==="instanceColor"&&I.instanceColor)N0=I.instanceColor}if(N0!==void 0){let{normalized:B0,itemSize:O0}=N0,i0=Q.get(N0);if(i0===void 0)continue;let{buffer:g0,type:n,bytesPerElement:G0}=i0,M0=n===J.INT||n===J.UNSIGNED_INT||N0.gpuType===w1;if(N0.isInterleavedBufferAttribute){let k0=N0.data,z0=k0.stride,n0=N0.offset;if(k0.isInstancedInterleavedBuffer){for(let b0=0;b0<Q0.locationSize;b0++)N(Q0.location+b0,k0.meshPerAttribute);if(I.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=k0.meshPerAttribute*k0.count}else for(let b0=0;b0<Q0.locationSize;b0++)G(Q0.location+b0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let b0=0;b0<Q0.locationSize;b0++)z(Q0.location+b0,O0/Q0.locationSize,n,B0,z0*G0,(n0+O0/Q0.locationSize*b0)*G0,M0)}else{if(N0.isInstancedBufferAttribute){for(let k0=0;k0<Q0.locationSize;k0++)N(Q0.location+k0,N0.meshPerAttribute);if(I.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let k0=0;k0<Q0.locationSize;k0++)G(Q0.location+k0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let k0=0;k0<Q0.locationSize;k0++)z(Q0.location+k0,O0/Q0.locationSize,n,B0,O0*G0,O0/Q0.locationSize*k0*G0,M0)}}else if(p!==void 0){let B0=p[a];if(B0!==void 0)switch(B0.length){case 2:J.vertexAttrib2fv(Q0.location,B0);break;case 3:J.vertexAttrib3fv(Q0.location,B0);break;case 4:J.vertexAttrib4fv(Q0.location,B0);break;default:J.vertexAttrib1fv(Q0.location,B0)}}}}w()}function T(){V();for(let I in W){let l=W[I];for(let i in l){let f=l[i];for(let d in f){let x=f[d];for(let p in x)k(x[p].object),delete x[p];delete f[d]}}delete W[I]}}function A(I){if(W[I.id]===void 0)return;let l=W[I.id];for(let i in l){let f=l[i];for(let d in f){let x=f[d];for(let p in x)k(x[p].object),delete x[p];delete f[d]}}delete W[I.id]}function P(I){for(let l in W){let i=W[l];for(let f in i){let d=i[f];if(d[I.id]===void 0)continue;let x=d[I.id];for(let p in x)k(x[p].object),delete x[p];delete d[I.id]}}}function O(I){for(let l in W){let i=W[l],f=I.isInstancedMesh===!0?I.id:0,d=i[f];if(d===void 0)continue;for(let x in d){let p=d[x];for(let a in p)k(p[a].object),delete p[a];delete d[x]}if(delete i[f],Object.keys(i).length===0)delete W[l]}}function V(){if(u(),K=!0,H===Z)return;H=Z,U(H.object)}function u(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:V,resetDefaultState:u,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:O,releaseStatesOfProgram:P,initAttributes:L,enableAttribute:G,disableUnusedAttributes:w}}function jH(J,Q,$){let W;function Z(X){W=X}function H(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function K(X,U,k){if(k===0)return;J.drawArraysInstanced(W,X,U,k),$.update(U,W,k)}function Y(X,U,k){if(k===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,k);let E=0;for(let F=0;F<k;F++)E+=U[F];$.update(E,W,1)}this.setMode=Z,this.render=H,this.renderInstances=K,this.renderMultiDraw=Y}function hH(J,Q,$,W){let Z;function H(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function K(P){if(P!==Q6&&W.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(P){let O=P===k6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==o8&&W.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==G6&&!O)return!1;return!0}function X(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",k=X(U);if(k!==U)A0("WebGLRenderer:",U,"not supported, using",k,"instead."),U=k;let D=$.logarithmicDepthBuffer===!0,E=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&E===!1)A0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),_=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),G=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=J.getParameter(J.MAX_SAMPLES),A=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:X,textureFormatReadable:K,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:D,reversedDepthBuffer:E,maxTextures:F,maxVertexTextures:_,maxTextureSize:L,maxCubemapSize:G,maxAttributes:N,maxVertexUniforms:w,maxVaryings:z,maxFragmentUniforms:B,maxSamples:T,samples:A}}function fH(J){let Q=this,$=null,W=0,Z=!1,H=!1,K=new U6,Y=new T0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(D,E){let F=D.length!==0||E||W!==0||Z;return Z=E,W=D.length,F},this.beginShadows=function(){H=!0,k(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(D,E){$=k(D,E,0)},this.setState=function(D,E,F){let{clippingPlanes:_,clipIntersection:L,clipShadows:G}=D,N=J.get(D);if(!Z||_===null||_.length===0||H&&!G)if(H)k(null);else U();else{let w=H?0:W,z=w*4,B=N.clippingState||null;X.value=B,B=k(_,E,z,F);for(let T=0;T!==z;++T)B[T]=$[T];N.clippingState=B,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=w}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function k(D,E,F,_){let L=D!==null?D.length:0,G=null;if(L!==0){if(G=X.value,_!==!0||G===null){let N=F+L*4,w=E.matrixWorldInverse;if(Y.getNormalMatrix(w),G===null||G.length<N)G=new Float32Array(N);for(let z=0,B=F;z!==L;++z,B+=4)K.copy(D[z]).applyMatrix4(w,Y),K.normal.toArray(G,B),G[B+3]=K.constant}X.value=G,X.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,G}}var C6=4,BQ=[0.125,0.215,0.35,0.446,0.526,0.582],c6=20,vH=256,g7=new v9,zQ=new s0,vJ=null,bJ=0,yJ=0,xJ=!1,bH=new b;class lJ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:H=256,position:K=bH}=Z;vJ=this._renderer.getRenderTarget(),bJ=this._renderer.getActiveCubeFace(),yJ=this._renderer.getActiveMipmapLevel(),xJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,K),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=CQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=AQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(vJ,bJ,yJ),this._renderer.xr.enabled=xJ,J.scissorTest=!1,O7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===N7||J.mapping===f6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);vJ=this._renderer.getRenderTarget(),bJ=this._renderer.getActiveCubeFace(),yJ=this._renderer.getActiveMipmapLevel(),xJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:S8,minFilter:S8,generateMipmaps:!1,type:k6,format:Q6,colorSpace:ZJ,depthBuffer:!1},W=IQ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=IQ(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yH(Z)),this._blurMaterial=gH(Z,J,Q),this._ggxMaterial=xH(Z,J,Q)}return W}_compileMaterial(J){let Q=new j8(new m8,J);this._renderer.compile(Q,g7)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new I8(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],k=this._renderer,D=k.autoClear,E=k.toneMapping;if(k.getClearColor(zQ),k.toneMapping=i8,k.autoClear=!1,k.state.buffers.depth.getReversed())k.setRenderTarget(W),k.clearDepth(),k.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j8(new R7,new F7({name:"PMREM.Background",side:T8,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,L=_.material,G=!1,N=J.background;if(N){if(N.isColor)L.color.copy(N),J.background=null,G=!0}else L.color.copy(zQ),G=!0;for(let w=0;w<6;w++){let z=w%3;if(z===0)Y.up.set(0,X[w],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[w],Z.y,Z.z);else if(z===1)Y.up.set(0,0,X[w]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[w],Z.z);else Y.up.set(0,X[w],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[w]);let B=this._cubeSize;if(O7(W,z*B,w>2?B:0,B,B),k.setRenderTarget(W),G)k.render(_,Y);k.render(J,Y)}k.toneMapping=E,k.autoClear=D,J.background=N}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===N7||J.mapping===f6;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=CQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=AQ();let Z=W?this._cubemapMaterial:this._equirectMaterial,H=this._lodMeshes[0];H.material=Z;let K=Z.uniforms;K.envMap.value=J;let Y=this._cubeSize;O7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(H,g7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,H=this._ggxMaterial,K=this._lodMeshes[$];K.material=H;let Y=H.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),k=Math.sqrt(X*X-U*U),D=0+X*1.25,E=k*D,{_lodMax:F}=this,_=this._sizeLods[$],L=3*_*($>F-C6?$-F+C6:0),G=4*(this._cubeSize-_);Y.envMap.value=J.texture,Y.roughness.value=E,Y.mipInt.value=F-Q,O7(Z,L,G,3*_,2*_),W.setRenderTarget(Z),W.render(K,g7),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=F-$,O7(J,L,G,3*_,2*_),W.setRenderTarget(J),W.render(K,g7)}_blur(J,Q,$,W,Z){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,W,"latitudinal",Z),this._halfBlur(H,J,$,$,W,"longitudinal",Z)}_halfBlur(J,Q,$,W,Z,H,K){let Y=this._renderer,X=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")C0("blur direction must be either latitudinal or longitudinal!");let U=3,k=this._lodMeshes[W];k.material=X;let D=X.uniforms,E=this._sizeLods[$]-1,F=isFinite(Z)?Math.PI/(2*E):2*Math.PI/(2*c6-1),_=Z/F,L=isFinite(Z)?1+Math.floor(U*_):c6;if(L>c6)A0(`sigmaRadians, ${Z}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${c6}`);let G=[],N=0;for(let A=0;A<c6;++A){let P=A/_,O=Math.exp(-P*P/2);if(G.push(O),A===0)N+=O;else if(A<L)N+=2*O}for(let A=0;A<G.length;A++)G[A]=G[A]/N;if(D.envMap.value=J.texture,D.samples.value=L,D.weights.value=G,D.latitudinal.value=H==="latitudinal",K)D.poleAxis.value=K;let{_lodMax:w}=this;D.dTheta.value=F,D.mipInt.value=w-$;let z=this._sizeLods[W],B=3*z*(W>w-C6?W-w+C6:0),T=4*(this._cubeSize-z);O7(Q,B,T,3*z,2*z),Y.setRenderTarget(Q),Y.render(k,g7)}}function yH(J){let Q=[],$=[],W=[],Z=J,H=J-C6+1+BQ.length;for(let K=0;K<H;K++){let Y=Math.pow(2,Z);Q.push(Y);let X=1/Y;if(K>J-C6)X=BQ[K-J+C6-1];else if(K===0)X=0;$.push(X);let U=1/(Y-2),k=-U,D=1+U,E=[k,k,D,k,D,D,k,k,D,D,k,D],F=6,_=6,L=3,G=2,N=1,w=new Float32Array(L*_*F),z=new Float32Array(G*_*F),B=new Float32Array(N*_*F);for(let A=0;A<F;A++){let P=A%3*2/3-1,O=A>2?0:-1,V=[P,O,0,P+0.6666666666666666,O,0,P+0.6666666666666666,O+1,0,P,O,0,P+0.6666666666666666,O+1,0,P,O+1,0];w.set(V,L*_*A),z.set(E,G*_*A);let u=[A,A,A,A,A,A];B.set(u,N*_*A)}let T=new m8;if(T.setAttribute("position",new p8(w,L)),T.setAttribute("uv",new p8(z,G)),T.setAttribute("faceIndex",new p8(B,N)),W.push(new j8(T,null)),Z>C6)Z--}return{lodMeshes:W,sizeLods:Q,sigmas:$}}function IQ(J,Q,$){let W=new l8(J,Q,$);return W.texture.mapping=P7,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function O7(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function xH(J,Q,$){return new h8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vH,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:x9(),fragmentShader:`

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function gH(J,Q,$){let W=new Float32Array(c6),Z=new b(0,1,0);return new h8({name:"SphericalGaussianBlur",defines:{n:c6,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Z}},vertexShader:x9(),fragmentShader:`

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function AQ(){return new h8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x9(),fragmentShader:`

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function CQ(){return new h8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:J6,depthTest:!1,depthWrite:!1})}function x9(){return`

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
	`}class uJ extends l8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new S9(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new R7(5,5,5),Z=new h8({name:"CubemapFromEquirect",uniforms:l6($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:T8,blending:J6});Z.uniforms.tEquirect.value=Q;let H=new j8(W,Z),K=Q.minFilter;if(Q.minFilter===v6)Q.minFilter=S8;return new PJ(1,10,this).update(J,H),Q.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,W);J.setRenderTarget(Z)}}function pH(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(E,F=!1){if(E===null||E===void 0)return null;if(F)return K(E);return H(E)}function H(E){if(E&&E.isTexture){let F=E.mapping;if(F===N9||F===D9)if(Q.has(E)){let _=Q.get(E).texture;return Y(_,E.mapping)}else{let _=E.image;if(_&&_.height>0){let L=new uJ(_.height);return L.fromEquirectangularTexture(J,E),Q.set(E,L),E.addEventListener("dispose",U),Y(L.texture,E.mapping)}else return null}}return E}function K(E){if(E&&E.isTexture){let F=E.mapping,_=F===N9||F===D9,L=F===N7||F===f6;if(_||L){let G=$.get(E),N=G!==void 0?G.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==N){if(W===null)W=new lJ(J);return G=_?W.fromEquirectangular(E,G):W.fromCubemap(E,G),G.texture.pmremVersion=E.pmremVersion,$.set(E,G),G.texture}else if(G!==void 0)return G.texture;else{let w=E.image;if(_&&w&&w.height>0||L&&w&&X(w)){if(W===null)W=new lJ(J);return G=_?W.fromEquirectangular(E):W.fromCubemap(E),G.texture.pmremVersion=E.pmremVersion,$.set(E,G),E.addEventListener("dispose",k),G.texture}else return null}}}return E}function Y(E,F){if(F===N9)E.mapping=N7;else if(F===D9)E.mapping=f6;return E}function X(E){let F=0,_=6;for(let L=0;L<_;L++)if(E[L]!==void 0)F++;return F===_}function U(E){let F=E.target;F.removeEventListener("dispose",U);let _=Q.get(F);if(_!==void 0)Q.delete(F),_.dispose()}function k(E){let F=E.target;F.removeEventListener("dispose",k);let _=$.get(F);if(_!==void 0)$.delete(F),_.dispose()}function D(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:D}}function lH(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)G9("WebGLRenderer: "+W+" extension not supported.");return Z}}}function mH(J,Q,$,W){let Z={},H=new WeakMap;function K(D){let E=D.target;if(E.index!==null)Q.remove(E.index);for(let _ in E.attributes)Q.remove(E.attributes[_]);E.removeEventListener("dispose",K),delete Z[E.id];let F=H.get(E);if(F)Q.remove(F),H.delete(E);if(W.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;$.memory.geometries--}function Y(D,E){if(Z[E.id]===!0)return E;return E.addEventListener("dispose",K),Z[E.id]=!0,$.memory.geometries++,E}function X(D){let E=D.attributes;for(let F in E)Q.update(E[F],J.ARRAY_BUFFER)}function U(D){let E=[],F=D.index,_=D.attributes.position,L=0;if(_===void 0)return;if(F!==null){let w=F.array;L=F.version;for(let z=0,B=w.length;z<B;z+=3){let T=w[z+0],A=w[z+1],P=w[z+2];E.push(T,A,A,P,P,T)}}else{let w=_.array;L=_.version;for(let z=0,B=w.length/3-1;z<B;z+=3){let T=z+0,A=z+1,P=z+2;E.push(T,A,A,P,P,T)}}let G=new(_.count>=65535?P9:C9)(E,1);G.version=L;let N=H.get(D);if(N)Q.remove(N);H.set(D,G)}function k(D){let E=H.get(D);if(E){let F=D.index;if(F!==null){if(E.version<F.version)U(D)}}else U(D);return H.get(D)}return{get:Y,update:X,getWireframeAttribute:k}}function dH(J,Q,$){let W;function Z(D){W=D}let H,K;function Y(D){H=D.type,K=D.bytesPerElement}function X(D,E){J.drawElements(W,E,H,D*K),$.update(E,W,1)}function U(D,E,F){if(F===0)return;J.drawElementsInstanced(W,E,H,D*K,F),$.update(E,W,F)}function k(D,E,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,E,0,H,D,0,F);let L=0;for(let G=0;G<F;G++)L+=E[G];$.update(L,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=k}function uH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,K,Y){switch($.calls++,K){case J.TRIANGLES:$.triangles+=Y*(H/3);break;case J.LINES:$.lines+=Y*(H/2);break;case J.LINE_STRIP:$.lines+=Y*(H-1);break;case J.LINE_LOOP:$.lines+=Y*H;break;case J.POINTS:$.points+=Y*H;break;default:C0("WebGLInfo: Unknown draw mode:",K);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function cH(J,Q,$){let W=new WeakMap,Z=new Y8;function H(K,Y,X){let U=K.morphTargetInfluences,k=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,D=k!==void 0?k.length:0,E=W.get(Y);if(E===void 0||E.count!==D){let V=function(){P.dispose(),W.delete(Y),Y.removeEventListener("dispose",V)};if(E!==void 0)E.texture.dispose();let F=Y.morphAttributes.position!==void 0,_=Y.morphAttributes.normal!==void 0,L=Y.morphAttributes.color!==void 0,G=Y.morphAttributes.position||[],N=Y.morphAttributes.normal||[],w=Y.morphAttributes.color||[],z=0;if(F===!0)z=1;if(_===!0)z=2;if(L===!0)z=3;let B=Y.attributes.position.count*z,T=1;if(B>Q.maxTextureSize)T=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let A=new Float32Array(B*T*4*D),P=new z9(A,B,T,D);P.type=G6,P.needsUpdate=!0;let O=z*4;for(let u=0;u<D;u++){let I=G[u],l=N[u],i=w[u],f=B*T*4*u;for(let d=0;d<I.count;d++){let x=d*O;if(F===!0)Z.fromBufferAttribute(I,d),A[f+x+0]=Z.x,A[f+x+1]=Z.y,A[f+x+2]=Z.z,A[f+x+3]=0;if(_===!0)Z.fromBufferAttribute(l,d),A[f+x+4]=Z.x,A[f+x+5]=Z.y,A[f+x+6]=Z.z,A[f+x+7]=0;if(L===!0)Z.fromBufferAttribute(i,d),A[f+x+8]=Z.x,A[f+x+9]=Z.y,A[f+x+10]=Z.z,A[f+x+11]=i.itemSize===4?Z.w:1}}E={count:D,texture:P,size:new a0(B,T)},W.set(Y,E),Y.addEventListener("dispose",V)}if(K.isInstancedMesh===!0&&K.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",K.morphTexture,$);else{let F=0;for(let L=0;L<U.length;L++)F+=U[L];let _=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",_),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:H}}function nH(J,Q,$,W,Z){let H=new WeakMap;function K(U){let k=Z.render.frame,D=U.geometry,E=Q.get(U,D);if(H.get(E)!==k)Q.update(E),H.set(E,k);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(H.get(U)!==k){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);H.set(U,k)}}if(U.isSkinnedMesh){let F=U.skeleton;if(H.get(F)!==k)F.update(),H.set(F,k)}return E}function Y(){H=new WeakMap}function X(U){let k=U.target;if(k.removeEventListener("dispose",X),W.releaseStatesOfObject(k),$.remove(k.instanceMatrix),k.instanceColor!==null)$.remove(k.instanceColor)}return{update:K,dispose:Y}}var sH={[D1]:"LINEAR_TONE_MAPPING",[q1]:"REINHARD_TONE_MAPPING",[F1]:"CINEON_TONE_MAPPING",[R1]:"ACES_FILMIC_TONE_MAPPING",[_1]:"AGX_TONE_MAPPING",[M1]:"NEUTRAL_TONE_MAPPING",[O1]:"CUSTOM_TONE_MAPPING"};function iH(J,Q,$,W,Z){let H=new l8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,depthTexture:W?new A6(Q,$):void 0}),K=new l8(Q,$,{type:k6,depthBuffer:!1,stencilBuffer:!1}),Y=new m8;Y.setAttribute("position",new O8([-1,3,0,-1,-1,0,3,-1,0],3)),Y.setAttribute("uv",new O8([0,2,0,0,2,0],2));let X=new FJ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new j8(Y,X),k=new v9(-1,1,1,-1,0,1),D=null,E=null,F=!1,_,L=null,G=[],N=!1;this.setSize=function(w,z){H.setSize(w,z),K.setSize(w,z);for(let B=0;B<G.length;B++){let T=G[B];if(T.setSize)T.setSize(w,z)}},this.setEffects=function(w){G=w,N=G.length>0&&G[0].isRenderPass===!0;let{width:z,height:B}=H;for(let T=0;T<G.length;T++){let A=G[T];if(A.setSize)A.setSize(z,B)}},this.begin=function(w,z){if(F)return!1;if(w.toneMapping===i8&&G.length===0)return!1;if(L=z,z!==null){let{width:B,height:T}=z;if(H.width!==B||H.height!==T)this.setSize(B,T)}if(N===!1)w.setRenderTarget(H);return _=w.toneMapping,w.toneMapping=i8,!0},this.hasRenderPass=function(){return N},this.end=function(w,z){w.toneMapping=_,F=!0;let B=H,T=K;for(let A=0;A<G.length;A++){let P=G[A];if(P.enabled===!1)continue;if(P.render(w,T,B,z),P.needsSwap!==!1){let O=B;B=T,T=O}}if(D!==w.outputColorSpace||E!==w.toneMapping){if(D=w.outputColorSpace,E=w.toneMapping,X.defines={},l0.getTransfer(D)===W8)X.defines.SRGB_TRANSFER="";let A=sH[E];if(A)X.defines[A]="";X.needsUpdate=!0}X.uniforms.tDiffuse.value=B.texture,w.setRenderTarget(L),w.render(U,k),L=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),K.dispose(),Y.dispose(),X.dispose()}}var iQ=new V8,mJ=new A6(1,1),oQ=new z9,aQ=new GJ,rQ=new S9,PQ=[],TQ=[],SQ=new Float32Array(16),jQ=new Float32Array(9),hQ=new Float32Array(4);function _7(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,H=PQ[Z];if(H===void 0)H=new Float32Array(Z),PQ[Z]=H;if(Q!==0){W.toArray(H,0);for(let K=1,Y=0;K!==Q;++K)Y+=$,J[K].toArray(H,Y)}return H}function D8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function q8(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function g9(J,Q){let $=TQ[Q];if($===void 0)$=new Int32Array(Q),TQ[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function oH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function aH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2fv(this.addr,Q),q8($,Q)}}function rH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(D8($,Q))return;J.uniform3fv(this.addr,Q),q8($,Q)}}function tH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4fv(this.addr,Q),q8($,Q)}}function eH(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),q8($,Q)}else{if(D8($,W))return;hQ.set(W),J.uniformMatrix2fv(this.addr,!1,hQ),q8($,W)}}function JK(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),q8($,Q)}else{if(D8($,W))return;jQ.set(W),J.uniformMatrix3fv(this.addr,!1,jQ),q8($,W)}}function QK(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),q8($,Q)}else{if(D8($,W))return;SQ.set(W),J.uniformMatrix4fv(this.addr,!1,SQ),q8($,W)}}function $K(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function WK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2iv(this.addr,Q),q8($,Q)}}function ZK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(D8($,Q))return;J.uniform3iv(this.addr,Q),q8($,Q)}}function HK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4iv(this.addr,Q),q8($,Q)}}function KK(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function YK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2uiv(this.addr,Q),q8($,Q)}}function XK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(D8($,Q))return;J.uniform3uiv(this.addr,Q),q8($,Q)}}function UK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4uiv(this.addr,Q),q8($,Q)}}function EK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let H;if(this.type===J.SAMPLER_2D_SHADOW)mJ.compareFunction=$.isReversedDepthBuffer()?B9:V9,H=mJ;else H=iQ;$.setTexture2D(Q||H,Z)}function GK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||aQ,Z)}function kK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||rQ,Z)}function NK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||oQ,Z)}function DK(J){switch(J){case 5126:return oH;case 35664:return aH;case 35665:return rH;case 35666:return tH;case 35674:return eH;case 35675:return JK;case 35676:return QK;case 5124:case 35670:return $K;case 35667:case 35671:return WK;case 35668:case 35672:return ZK;case 35669:case 35673:return HK;case 5125:return KK;case 36294:return YK;case 36295:return XK;case 36296:return UK;case 35678:case 36198:case 36298:case 36306:case 35682:return EK;case 35679:case 36299:case 36307:return GK;case 35680:case 36300:case 36308:case 36293:return kK;case 36289:case 36303:case 36311:case 36292:return NK}}function qK(J,Q){J.uniform1fv(this.addr,Q)}function FK(J,Q){let $=_7(Q,this.size,2);J.uniform2fv(this.addr,$)}function RK(J,Q){let $=_7(Q,this.size,3);J.uniform3fv(this.addr,$)}function OK(J,Q){let $=_7(Q,this.size,4);J.uniform4fv(this.addr,$)}function _K(J,Q){let $=_7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function MK(J,Q){let $=_7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function wK(J,Q){let $=_7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function LK(J,Q){J.uniform1iv(this.addr,Q)}function VK(J,Q){J.uniform2iv(this.addr,Q)}function BK(J,Q){J.uniform3iv(this.addr,Q)}function zK(J,Q){J.uniform4iv(this.addr,Q)}function IK(J,Q){J.uniform1uiv(this.addr,Q)}function AK(J,Q){J.uniform2uiv(this.addr,Q)}function CK(J,Q){J.uniform3uiv(this.addr,Q)}function PK(J,Q){J.uniform4uiv(this.addr,Q)}function TK(J,Q,$){let W=this.cache,Z=Q.length,H=g9($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),q8(W,H);let K;if(this.type===J.SAMPLER_2D_SHADOW)K=mJ;else K=iQ;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||K,H[Y])}function SK(J,Q,$){let W=this.cache,Z=Q.length,H=g9($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),q8(W,H);for(let K=0;K!==Z;++K)$.setTexture3D(Q[K]||aQ,H[K])}function jK(J,Q,$){let W=this.cache,Z=Q.length,H=g9($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),q8(W,H);for(let K=0;K!==Z;++K)$.setTextureCube(Q[K]||rQ,H[K])}function hK(J,Q,$){let W=this.cache,Z=Q.length,H=g9($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),q8(W,H);for(let K=0;K!==Z;++K)$.setTexture2DArray(Q[K]||oQ,H[K])}function fK(J){switch(J){case 5126:return qK;case 35664:return FK;case 35665:return RK;case 35666:return OK;case 35674:return _K;case 35675:return MK;case 35676:return wK;case 5124:case 35670:return LK;case 35667:case 35671:return VK;case 35668:case 35672:return BK;case 35669:case 35673:return zK;case 5125:return IK;case 36294:return AK;case 36295:return CK;case 36296:return PK;case 35678:case 36198:case 36298:case 36306:case 35682:return TK;case 35679:case 36299:case 36307:return SK;case 35680:case 36300:case 36308:case 36293:return jK;case 36289:case 36303:case 36311:case 36292:return hK}}class tQ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=DK(Q.type)}}class eQ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=fK(Q.type)}}class J${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,H=W.length;Z!==H;++Z){let K=W[Z];K.setValue(J,Q[K.id],$)}}}var gJ=/(\w+)(\])?(\[|\.)?/g;function fQ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function vK(J,Q,$){let W=J.name,Z=W.length;gJ.lastIndex=0;while(!0){let H=gJ.exec(W),K=gJ.lastIndex,Y=H[1],X=H[2]==="]",U=H[3];if(X)Y=Y|0;if(U===void 0||U==="["&&K+2===Z){fQ($,U===void 0?new tQ(Y,J,Q):new eQ(Y,J,Q));break}else{let D=$.map[Y];if(D===void 0)D=new J$(Y),fQ($,D);$=D}}}class m7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let H=0;H<$;++H){let K=J.getActiveUniform(Q,H),Y=J.getUniformLocation(Q,K.name);vK(K,Y,this)}let W=[],Z=[];for(let H of this.seq)if(H.type===J.SAMPLER_2D_SHADOW||H.type===J.SAMPLER_CUBE_SHADOW||H.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(H);else Z.push(H);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,H=Q.length;Z!==H;++Z){let K=Q[Z],Y=$[K.id];if(Y.needsUpdate!==!1)K.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let H=J[W];if(H.id in Q)$.push(H)}return $}}function vQ(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var bK=37297,yK=0;function xK(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let K=Z;K<H;K++){let Y=K+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[K]}`)}return W.join(`
`)}var bQ=new T0;function gK(J){l0._getMatrix(bQ,l0.workingColorSpace,J);let Q=`mat3( ${bQ.elements.map(($)=>$.toFixed(4))} )`;switch(l0.getTransfer(J)){case HJ:return[Q,"LinearTransferOETF"];case W8:return[Q,"sRGBTransferOETF"];default:return A0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function yQ(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(W&&H==="")return"";let K=/ERROR: 0:(\d+)/.exec(H);if(K){let Y=parseInt(K[1]);return $.toUpperCase()+`

`+H+`

`+xK(J.getShaderSource(Q),Y)}else return H}function pK(J,Q){let $=gK(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var lK={[D1]:"Linear",[q1]:"Reinhard",[F1]:"Cineon",[R1]:"ACESFilmic",[_1]:"AgX",[M1]:"Neutral",[O1]:"Custom"};function mK(J,Q){let $=lK[Q];if($===void 0)return A0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var y9=new b;function dK(){l0.getLuminanceCoefficients(y9);let J=y9.x.toFixed(4),Q=y9.y.toFixed(4),$=y9.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function uK(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(l7).join(`
`)}function cK(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function nK(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let H=J.getActiveAttrib(Q,Z),K=H.name,Y=1;if(H.type===J.FLOAT_MAT2)Y=2;if(H.type===J.FLOAT_MAT3)Y=3;if(H.type===J.FLOAT_MAT4)Y=4;$[K]={type:H.type,location:J.getAttribLocation(Q,K),locationSize:Y}}return $}function l7(J){return J!==""}function xQ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function gQ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var sK=/^[ \t]*#include +<([\w\d./]+)>/gm;function dJ(J){return J.replace(sK,oK)}var iK=new Map;function oK(J,Q){let $=v0[Q];if($===void 0){let W=iK.get(Q);if(W!==void 0)$=v0[W],A0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("Can not resolve #include <"+Q+">")}return dJ($)}var aK=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pQ(J){return J.replace(aK,rK)}function rK(J,Q,$,W){let Z="";for(let H=parseInt(Q);H<parseInt($);H++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Z}function lQ(J){let Q=`precision ${J.precision} float;
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
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var tK={[A7]:"SHADOWMAP_TYPE_PCF",[U7]:"SHADOWMAP_TYPE_VSM"};function eK(J){return tK[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JY={[N7]:"ENVMAP_TYPE_CUBE",[f6]:"ENVMAP_TYPE_CUBE",[P7]:"ENVMAP_TYPE_CUBE_UV"};function QY(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return JY[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var $Y={[f6]:"ENVMAP_MODE_REFRACTION"};function WY(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return $Y[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ZY={[o5]:"ENVMAP_BLENDING_MULTIPLY",[a5]:"ENVMAP_BLENDING_MIX",[r5]:"ENVMAP_BLENDING_ADD"};function HY(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return ZY[J.combine]||"ENVMAP_BLENDING_NONE"}function KY(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function YY(J,Q,$,W){let Z=J.getContext(),H=$.defines,K=$.vertexShader,Y=$.fragmentShader,X=eK($),U=QY($),k=WY($),D=HY($),E=KY($),F=uK($),_=cK(H),L=Z.createProgram(),G,N,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(G=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,_].filter(l7).join(`
`),G.length>0)G+=`
`;if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,_].filter(l7).join(`
`),N.length>0)N+=`
`}else G=[lQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,_,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+k:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(l7).join(`
`),N=[lQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,_,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+k:"",$.envMap?"#define "+D:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==i8?"#define TONE_MAPPING":"",$.toneMapping!==i8?v0.tonemapping_pars_fragment:"",$.toneMapping!==i8?mK("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",v0.colorspace_pars_fragment,pK("linearToOutputTexel",$.outputColorSpace),dK(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(l7).join(`
`);if(K=dJ(K),K=xQ(K,$),K=gQ(K,$),Y=dJ(Y),Y=xQ(Y,$),Y=gQ(Y,$),K=pQ(K),Y=pQ(Y),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,G=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,N=["#define varying in",$.glslVersion===KJ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===KJ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let z=w+G+K,B=w+N+Y,T=vQ(Z,Z.VERTEX_SHADER,z),A=vQ(Z,Z.FRAGMENT_SHADER,B);if(Z.attachShader(L,T),Z.attachShader(L,A),$.index0AttributeName!==void 0)Z.bindAttribLocation(L,0,$.index0AttributeName);else if($.morphTargets===!0)Z.bindAttribLocation(L,0,"position");Z.linkProgram(L);function P(I){if(J.debug.checkShaderErrors){let l=Z.getProgramInfoLog(L)||"",i=Z.getShaderInfoLog(T)||"",f=Z.getShaderInfoLog(A)||"",d=l.trim(),x=i.trim(),p=f.trim(),a=!0,Q0=!0;if(Z.getProgramParameter(L,Z.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,L,T,A);else{let N0=yQ(Z,T,"vertex"),B0=yQ(Z,A,"fragment");C0("THREE.WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(L,Z.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+d+`
`+N0+`
`+B0)}else if(d!=="")A0("WebGLProgram: Program Info Log:",d);else if(x===""||p==="")Q0=!1;if(Q0)I.diagnostics={runnable:a,programLog:d,vertexShader:{log:x,prefix:G},fragmentShader:{log:p,prefix:N}}}Z.deleteShader(T),Z.deleteShader(A),O=new m7(Z,L),V=nK(Z,L)}let O;this.getUniforms=function(){if(O===void 0)P(this);return O};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let u=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(u===!1)u=Z.getProgramParameter(L,bK);return u},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=yK++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=T,this.fragmentShader=A,this}var XY=0;class Q${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,W=this._getShaderStage(Q),Z=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new $$(J),Q.set(J,$);return $}}class $${constructor(J){this.id=XY++,this.code=J,this.usedTimes=0}}function UY(J){return J===x6||J===w9||J===L9}function EY(J,Q,$,W,Z,H){let K=new I9,Y=new Q$,X=new Set,U=[],k=new Map,D=W.logarithmicDepthBuffer,E=W.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(O){if(X.add(O),O===0)return"uv";return`uv${O}`}function L(O,V,u,I,l,i){let f=I.fog,d=l.geometry,x=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,p=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,a=Q.get(O.envMap||x,p),Q0=!!a&&a.mapping===P7?a.image.height:null,N0=F[O.type];if(O.precision!==null){if(E=W.getMaxPrecision(O.precision),E!==O.precision)A0("WebGLProgram.getParameters:",O.precision,"not supported, using",E,"instead.")}let B0=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,O0=B0!==void 0?B0.length:0,i0=0;if(d.morphAttributes.position!==void 0)i0=1;if(d.morphAttributes.normal!==void 0)i0=2;if(d.morphAttributes.color!==void 0)i0=3;let g0,n,G0,M0;if(N0){let S0=W6[N0];g0=S0.vertexShader,n=S0.fragmentShader}else g0=O.vertexShader,n=O.fragmentShader,Y.update(O),G0=Y.getVertexShaderID(O),M0=Y.getFragmentShaderID(O);let k0=J.getRenderTarget(),z0=J.state.buffers.depth.getReversed(),n0=l.isInstancedMesh===!0,b0=l.isBatchedMesh===!0,p0=!!O.map,e0=!!O.matcap,J8=!!a,f0=!!O.aoMap,R8=!!O.lightMap,_8=!!O.bumpMap,G8=!!O.normalMap,S=!!O.displacementMap,z8=!!O.emissiveMap,m0=!!O.metalnessMap,c0=!!O.roughnessMap,U0=O.anisotropy>0,H8=O.clearcoat>0,I0=O.dispersion>0,M=O.iridescence>0,q=O.sheen>0,h=O.transmission>0,o=U0&&!!O.anisotropyMap,r=H8&&!!O.clearcoatMap,e=H8&&!!O.clearcoatNormalMap,H0=H8&&!!O.clearcoatRoughnessMap,m=M&&!!O.iridescenceMap,s=M&&!!O.iridescenceThicknessMap,Z0=q&&!!O.sheenColorMap,F0=q&&!!O.sheenRoughnessMap,$0=!!O.specularMap,K0=!!O.specularColorMap,P0=!!O.specularIntensityMap,h0=h&&!!O.transmissionMap,y0=h&&!!O.thicknessMap,C=!!O.gradientMap,W0=!!O.alphaMap,c=O.alphaTest>0,J0=!!O.alphaHash,R0=!!O.extensions,t=i8;if(O.toneMapped){if(k0===null||k0.isXRRenderTarget===!0)t=J.toneMapping}let w0={shaderID:N0,shaderType:O.type,shaderName:O.name,vertexShader:g0,fragmentShader:n,defines:O.defines,customVertexShaderID:G0,customFragmentShaderID:M0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:E,batching:b0,batchingColor:b0&&l._colorsTexture!==null,instancing:n0,instancingColor:n0&&l.instanceColor!==null,instancingMorph:n0&&l.morphTexture!==null,outputColorSpace:k0===null?J.outputColorSpace:k0.isXRRenderTarget===!0?k0.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:p0,matcap:e0,envMap:J8,envMapMode:J8&&a.mapping,envMapCubeUVHeight:Q0,aoMap:f0,lightMap:R8,bumpMap:_8,normalMap:G8,displacementMap:S,emissiveMap:z8,normalMapObjectSpace:G8&&O.normalMapType===XQ,normalMapTangentSpace:G8&&O.normalMapType===WJ,packedNormalMap:G8&&O.normalMapType===WJ&&UY(O.normalMap.format),metalnessMap:m0,roughnessMap:c0,anisotropy:U0,anisotropyMap:o,clearcoat:H8,clearcoatMap:r,clearcoatNormalMap:e,clearcoatRoughnessMap:H0,dispersion:I0,iridescence:M,iridescenceMap:m,iridescenceThicknessMap:s,sheen:q,sheenColorMap:Z0,sheenRoughnessMap:F0,specularMap:$0,specularColorMap:K0,specularIntensityMap:P0,transmission:h,transmissionMap:h0,thicknessMap:y0,gradientMap:C,opaque:O.transparent===!1&&O.blending===C7&&O.alphaToCoverage===!1,alphaMap:W0,alphaTest:c,alphaHash:J0,combine:O.combine,mapUv:p0&&_(O.map.channel),aoMapUv:f0&&_(O.aoMap.channel),lightMapUv:R8&&_(O.lightMap.channel),bumpMapUv:_8&&_(O.bumpMap.channel),normalMapUv:G8&&_(O.normalMap.channel),displacementMapUv:S&&_(O.displacementMap.channel),emissiveMapUv:z8&&_(O.emissiveMap.channel),metalnessMapUv:m0&&_(O.metalnessMap.channel),roughnessMapUv:c0&&_(O.roughnessMap.channel),anisotropyMapUv:o&&_(O.anisotropyMap.channel),clearcoatMapUv:r&&_(O.clearcoatMap.channel),clearcoatNormalMapUv:e&&_(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&_(O.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&_(O.iridescenceMap.channel),iridescenceThicknessMapUv:s&&_(O.iridescenceThicknessMap.channel),sheenColorMapUv:Z0&&_(O.sheenColorMap.channel),sheenRoughnessMapUv:F0&&_(O.sheenRoughnessMap.channel),specularMapUv:$0&&_(O.specularMap.channel),specularColorMapUv:K0&&_(O.specularColorMap.channel),specularIntensityMapUv:P0&&_(O.specularIntensityMap.channel),transmissionMapUv:h0&&_(O.transmissionMap.channel),thicknessMapUv:y0&&_(O.thicknessMap.channel),alphaMapUv:W0&&_(O.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(G8||U0),vertexNormals:!!d.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!d.attributes.uv&&(p0||W0),fog:!!f,useFog:O.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||d.attributes.normal===void 0&&G8===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:D,reversedDepthBuffer:z0,skinning:l.isSkinnedMesh===!0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:O0,morphTextureStride:i0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:i.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&u.length>0,shadowMapType:J.shadowMap.type,toneMapping:t,decodeVideoTexture:p0&&O.map.isVideoTexture===!0&&l0.getTransfer(O.map.colorSpace)===W8,decodeVideoTextureEmissive:z8&&O.emissiveMap.isVideoTexture===!0&&l0.getTransfer(O.emissiveMap.colorSpace)===W8,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===e8,flipSided:O.side===T8,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:R0&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R0&&O.extensions.multiDraw===!0||b0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return w0.vertexUv1s=X.has(1),w0.vertexUv2s=X.has(2),w0.vertexUv3s=X.has(3),X.clear(),w0}function G(O){let V=[];if(O.shaderID)V.push(O.shaderID);else V.push(O.customVertexShaderID),V.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let u in O.defines)V.push(u),V.push(O.defines[u]);if(O.isRawShaderMaterial===!1)N(V,O),w(V,O),V.push(J.outputColorSpace);return V.push(O.customProgramCacheKey),V.join()}function N(O,V){O.push(V.precision),O.push(V.outputColorSpace),O.push(V.envMapMode),O.push(V.envMapCubeUVHeight),O.push(V.mapUv),O.push(V.alphaMapUv),O.push(V.lightMapUv),O.push(V.aoMapUv),O.push(V.bumpMapUv),O.push(V.normalMapUv),O.push(V.displacementMapUv),O.push(V.emissiveMapUv),O.push(V.metalnessMapUv),O.push(V.roughnessMapUv),O.push(V.anisotropyMapUv),O.push(V.clearcoatMapUv),O.push(V.clearcoatNormalMapUv),O.push(V.clearcoatRoughnessMapUv),O.push(V.iridescenceMapUv),O.push(V.iridescenceThicknessMapUv),O.push(V.sheenColorMapUv),O.push(V.sheenRoughnessMapUv),O.push(V.specularMapUv),O.push(V.specularColorMapUv),O.push(V.specularIntensityMapUv),O.push(V.transmissionMapUv),O.push(V.thicknessMapUv),O.push(V.combine),O.push(V.fogExp2),O.push(V.sizeAttenuation),O.push(V.morphTargetsCount),O.push(V.morphAttributeCount),O.push(V.numDirLights),O.push(V.numPointLights),O.push(V.numSpotLights),O.push(V.numSpotLightMaps),O.push(V.numHemiLights),O.push(V.numRectAreaLights),O.push(V.numDirLightShadows),O.push(V.numPointLightShadows),O.push(V.numSpotLightShadows),O.push(V.numSpotLightShadowsWithMaps),O.push(V.numLightProbes),O.push(V.shadowMapType),O.push(V.toneMapping),O.push(V.numClippingPlanes),O.push(V.numClipIntersection),O.push(V.depthPacking)}function w(O,V){if(K.disableAll(),V.instancing)K.enable(0);if(V.instancingColor)K.enable(1);if(V.instancingMorph)K.enable(2);if(V.matcap)K.enable(3);if(V.envMap)K.enable(4);if(V.normalMapObjectSpace)K.enable(5);if(V.normalMapTangentSpace)K.enable(6);if(V.clearcoat)K.enable(7);if(V.iridescence)K.enable(8);if(V.alphaTest)K.enable(9);if(V.vertexColors)K.enable(10);if(V.vertexAlphas)K.enable(11);if(V.vertexUv1s)K.enable(12);if(V.vertexUv2s)K.enable(13);if(V.vertexUv3s)K.enable(14);if(V.vertexTangents)K.enable(15);if(V.anisotropy)K.enable(16);if(V.alphaHash)K.enable(17);if(V.batching)K.enable(18);if(V.dispersion)K.enable(19);if(V.batchingColor)K.enable(20);if(V.gradientMap)K.enable(21);if(V.packedNormalMap)K.enable(22);if(V.vertexNormals)K.enable(23);if(O.push(K.mask),K.disableAll(),V.fog)K.enable(0);if(V.useFog)K.enable(1);if(V.flatShading)K.enable(2);if(V.logarithmicDepthBuffer)K.enable(3);if(V.reversedDepthBuffer)K.enable(4);if(V.skinning)K.enable(5);if(V.morphTargets)K.enable(6);if(V.morphNormals)K.enable(7);if(V.morphColors)K.enable(8);if(V.premultipliedAlpha)K.enable(9);if(V.shadowMapEnabled)K.enable(10);if(V.doubleSided)K.enable(11);if(V.flipSided)K.enable(12);if(V.useDepthPacking)K.enable(13);if(V.dithering)K.enable(14);if(V.transmission)K.enable(15);if(V.sheen)K.enable(16);if(V.opaque)K.enable(17);if(V.pointsUvs)K.enable(18);if(V.decodeVideoTexture)K.enable(19);if(V.decodeVideoTextureEmissive)K.enable(20);if(V.alphaToCoverage)K.enable(21);if(V.numLightProbeGrids>0)K.enable(22);O.push(K.mask)}function z(O){let V=F[O.type],u;if(V){let I=W6[V];u=wQ.clone(I.uniforms)}else u=O.uniforms;return u}function B(O,V){let u=k.get(V);if(u!==void 0)++u.usedTimes;else u=new YY(J,V,O,Z),U.push(u),k.set(V,u);return u}function T(O){if(--O.usedTimes===0){let V=U.indexOf(O);U[V]=U[U.length-1],U.pop(),k.delete(O.cacheKey),O.destroy()}}function A(O){Y.remove(O)}function P(){Y.dispose()}return{getParameters:L,getProgramCacheKey:G,getUniforms:z,acquireProgram:B,releaseProgram:T,releaseShaderCache:A,programs:U,dispose:P}}function GY(){let J=new WeakMap;function Q(K){return J.has(K)}function $(K){let Y=J.get(K);if(Y===void 0)Y={},J.set(K,Y);return Y}function W(K){J.delete(K)}function Z(K,Y,X){J.get(K)[Y]=X}function H(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:H}}function kY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function mQ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function dQ(){let J=[],Q=0,$=[],W=[],Z=[];function H(){Q=0,$.length=0,W.length=0,Z.length=0}function K(E){let F=0;if(E.isInstancedMesh)F+=2;if(E.isSkinnedMesh)F+=1;return F}function Y(E,F,_,L,G,N){let w=J[Q];if(w===void 0)w={id:E.id,object:E,geometry:F,material:_,materialVariant:K(E),groupOrder:L,renderOrder:E.renderOrder,z:G,group:N},J[Q]=w;else w.id=E.id,w.object=E,w.geometry=F,w.material=_,w.materialVariant=K(E),w.groupOrder=L,w.renderOrder=E.renderOrder,w.z=G,w.group=N;return Q++,w}function X(E,F,_,L,G,N){let w=Y(E,F,_,L,G,N);if(_.transmission>0)W.push(w);else if(_.transparent===!0)Z.push(w);else $.push(w)}function U(E,F,_,L,G,N){let w=Y(E,F,_,L,G,N);if(_.transmission>0)W.unshift(w);else if(_.transparent===!0)Z.unshift(w);else $.unshift(w)}function k(E,F){if($.length>1)$.sort(E||kY);if(W.length>1)W.sort(F||mQ);if(Z.length>1)Z.sort(F||mQ)}function D(){for(let E=Q,F=J.length;E<F;E++){let _=J[E];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:H,push:X,unshift:U,finish:D,sort:k}}function NY(){let J=new WeakMap;function Q(W,Z){let H=J.get(W),K;if(H===void 0)K=new dQ,J.set(W,[K]);else if(Z>=H.length)K=new dQ,H.push(K);else K=H[Z];return K}function $(){J=new WeakMap}return{get:Q,dispose:$}}function DY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new b,color:new s0};break;case"SpotLight":$={position:new b,direction:new b,color:new s0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new b,color:new s0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new b,skyColor:new s0,groundColor:new s0};break;case"RectAreaLight":$={color:new s0,position:new b,halfWidth:new b,halfHeight:new b};break}return J[Q.id]=$,$}}}function qY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new a0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var FY=0;function RY(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function OY(J){let Q=new DY,$=qY(),W={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new b);let Z=new b,H=new E8,K=new E8;function Y(U){let k=0,D=0,E=0;for(let V=0;V<9;V++)W.probe[V].set(0,0,0);let F=0,_=0,L=0,G=0,N=0,w=0,z=0,B=0,T=0,A=0,P=0;U.sort(RY);for(let V=0,u=U.length;V<u;V++){let I=U[V],l=I.color,i=I.intensity,f=I.distance,d=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===x6)d=I.shadow.map.texture;else d=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)k+=l.r*i,D+=l.g*i,E+=l.b*i;else if(I.isLightProbe){for(let x=0;x<9;x++)W.probe[x].addScaledVector(I.sh.coefficients[x],i);P++}else if(I.isDirectionalLight){let x=Q.get(I);if(x.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let p=I.shadow,a=$.get(I);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,W.directionalShadow[F]=a,W.directionalShadowMap[F]=d,W.directionalShadowMatrix[F]=I.shadow.matrix,w++}W.directional[F]=x,F++}else if(I.isSpotLight){let x=Q.get(I);x.position.setFromMatrixPosition(I.matrixWorld),x.color.copy(l).multiplyScalar(i),x.distance=f,x.coneCos=Math.cos(I.angle),x.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),x.decay=I.decay,W.spot[L]=x;let p=I.shadow;if(I.map){if(W.spotLightMap[T]=I.map,T++,p.updateMatrices(I),I.castShadow)A++}if(W.spotLightMatrix[L]=p.matrix,I.castShadow){let a=$.get(I);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,W.spotShadow[L]=a,W.spotShadowMap[L]=d,B++}L++}else if(I.isRectAreaLight){let x=Q.get(I);x.color.copy(l).multiplyScalar(i),x.halfWidth.set(I.width*0.5,0,0),x.halfHeight.set(0,I.height*0.5,0),W.rectArea[G]=x,G++}else if(I.isPointLight){let x=Q.get(I);if(x.color.copy(I.color).multiplyScalar(I.intensity),x.distance=I.distance,x.decay=I.decay,I.castShadow){let p=I.shadow,a=$.get(I);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,a.shadowCameraNear=p.camera.near,a.shadowCameraFar=p.camera.far,W.pointShadow[_]=a,W.pointShadowMap[_]=d,W.pointShadowMatrix[_]=I.shadow.matrix,z++}W.point[_]=x,_++}else if(I.isHemisphereLight){let x=Q.get(I);x.skyColor.copy(I.color).multiplyScalar(i),x.groundColor.copy(I.groundColor).multiplyScalar(i),W.hemi[N]=x,N++}}if(G>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=Y0.LTC_FLOAT_1,W.rectAreaLTC2=Y0.LTC_FLOAT_2;else W.rectAreaLTC1=Y0.LTC_HALF_1,W.rectAreaLTC2=Y0.LTC_HALF_2;W.ambient[0]=k,W.ambient[1]=D,W.ambient[2]=E;let O=W.hash;if(O.directionalLength!==F||O.pointLength!==_||O.spotLength!==L||O.rectAreaLength!==G||O.hemiLength!==N||O.numDirectionalShadows!==w||O.numPointShadows!==z||O.numSpotShadows!==B||O.numSpotMaps!==T||O.numLightProbes!==P)W.directional.length=F,W.spot.length=L,W.rectArea.length=G,W.point.length=_,W.hemi.length=N,W.directionalShadow.length=w,W.directionalShadowMap.length=w,W.pointShadow.length=z,W.pointShadowMap.length=z,W.spotShadow.length=B,W.spotShadowMap.length=B,W.directionalShadowMatrix.length=w,W.pointShadowMatrix.length=z,W.spotLightMatrix.length=B+T-A,W.spotLightMap.length=T,W.numSpotLightShadowsWithMaps=A,W.numLightProbes=P,O.directionalLength=F,O.pointLength=_,O.spotLength=L,O.rectAreaLength=G,O.hemiLength=N,O.numDirectionalShadows=w,O.numPointShadows=z,O.numSpotShadows=B,O.numSpotMaps=T,O.numLightProbes=P,W.version=FY++}function X(U,k){let D=0,E=0,F=0,_=0,L=0,G=k.matrixWorldInverse;for(let N=0,w=U.length;N<w;N++){let z=U[N];if(z.isDirectionalLight){let B=W.directional[D];B.direction.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(z.target.matrixWorld),B.direction.sub(Z),B.direction.transformDirection(G),D++}else if(z.isSpotLight){let B=W.spot[F];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(G),B.direction.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(z.target.matrixWorld),B.direction.sub(Z),B.direction.transformDirection(G),F++}else if(z.isRectAreaLight){let B=W.rectArea[_];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(G),K.identity(),H.copy(z.matrixWorld),H.premultiply(G),K.extractRotation(H),B.halfWidth.set(z.width*0.5,0,0),B.halfHeight.set(0,z.height*0.5,0),B.halfWidth.applyMatrix4(K),B.halfHeight.applyMatrix4(K),_++}else if(z.isPointLight){let B=W.point[E];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(G),E++}else if(z.isHemisphereLight){let B=W.hemi[L];B.direction.setFromMatrixPosition(z.matrixWorld),B.direction.transformDirection(G),L++}}}return{setup:Y,setupView:X,state:W}}function uQ(J){let Q=new OY(J),$=[],W=[],Z=[];function H(E){D.camera=E,$.length=0,W.length=0,Z.length=0}function K(E){$.push(E)}function Y(E){W.push(E)}function X(E){Z.push(E)}function U(){Q.setup($)}function k(E){Q.setupView($,E)}let D={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:D,setupLights:U,setupLightsView:k,pushLight:K,pushShadow:Y,pushLightProbeGrid:X}}function _Y(J){let Q=new WeakMap;function $(Z,H=0){let K=Q.get(Z),Y;if(K===void 0)Y=new uQ(J),Q.set(Z,[Y]);else if(H>=K.length)Y=new uQ(J),K.push(Y);else Y=K[H];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var MY=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wY=`uniform sampler2D shadow_pass;
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
}`,LY=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],VY=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],cQ=new E8,p7=new b,pJ=new b;function BY(J,Q,$){let W=new T9,Z=new a0,H=new a0,K=new Y8,Y=new RJ,X=new OJ,U={},k=$.maxTextureSize,D={[E7]:T8,[T8]:E7,[e8]:e8},E=new h8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new a0},radius:{value:4}},vertexShader:MY,fragmentShader:wY}),F=E.clone();F.defines.HORIZONTAL_PASS=1;let _=new m8;_.setAttribute("position",new p8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new j8(_,E),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A7;let N=this.type;this.render=function(A,P,O){if(G.enabled===!1)return;if(G.autoUpdate===!1&&G.needsUpdate===!1)return;if(A.length===0)return;if(this.type===w5)A0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=A7;let V=J.getRenderTarget(),u=J.getActiveCubeFace(),I=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(J6),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let i=N!==this.type;if(i)P.traverse(function(f){if(f.material)if(Array.isArray(f.material))f.material.forEach((d)=>d.needsUpdate=!0);else f.material.needsUpdate=!0});for(let f=0,d=A.length;f<d;f++){let x=A[f],p=x.shadow;if(p===void 0){A0("WebGLShadowMap:",x,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;Z.copy(p.mapSize);let a=p.getFrameExtents();if(Z.multiply(a),H.copy(p.mapSize),Z.x>k||Z.y>k){if(Z.x>k)H.x=Math.floor(k/a.x),Z.x=H.x*a.x,p.mapSize.x=H.x;if(Z.y>k)H.y=Math.floor(k/a.y),Z.y=H.y*a.y,p.mapSize.y=H.y}let Q0=J.state.buffers.depth.getReversed();if(p.camera._reversedDepth=Q0,p.map===null||i===!0){if(p.map!==null){if(p.map.depthTexture!==null)p.map.depthTexture.dispose(),p.map.depthTexture=null;p.map.dispose()}if(this.type===U7){if(x.isPointLight){A0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new l8(Z.x,Z.y,{format:x6,type:k6,minFilter:S8,magFilter:S8,generateMipmaps:!1}),p.map.texture.name=x.name+".shadowMap",p.map.depthTexture=new A6(Z.x,Z.y,G6),p.map.depthTexture.name=x.name+".shadowMapDepth",p.map.depthTexture.format=b6,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=z6,p.map.depthTexture.magFilter=z6}else{if(x.isPointLight)p.map=new uJ(Z.x),p.map.depthTexture=new DJ(Z.x,I6);else p.map=new l8(Z.x,Z.y),p.map.depthTexture=new A6(Z.x,Z.y,I6);if(p.map.depthTexture.name=x.name+".shadowMap",p.map.depthTexture.format=b6,this.type===A7)p.map.depthTexture.compareFunction=Q0?B9:V9,p.map.depthTexture.minFilter=S8,p.map.depthTexture.magFilter=S8;else p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=z6,p.map.depthTexture.magFilter=z6}p.camera.updateProjectionMatrix()}let N0=p.map.isWebGLCubeRenderTarget?6:1;for(let B0=0;B0<N0;B0++){if(p.map.isWebGLCubeRenderTarget)J.setRenderTarget(p.map,B0),J.clear();else{if(B0===0)J.setRenderTarget(p.map),J.clear();let O0=p.getViewport(B0);K.set(H.x*O0.x,H.y*O0.y,H.x*O0.z,H.y*O0.w),l.viewport(K)}if(x.isPointLight){let{camera:O0,matrix:i0}=p,g0=x.distance||O0.far;if(g0!==O0.far)O0.far=g0,O0.updateProjectionMatrix();p7.setFromMatrixPosition(x.matrixWorld),O0.position.copy(p7),pJ.copy(O0.position),pJ.add(LY[B0]),O0.up.copy(VY[B0]),O0.lookAt(pJ),O0.updateMatrixWorld(),i0.makeTranslation(-p7.x,-p7.y,-p7.z),cQ.multiplyMatrices(O0.projectionMatrix,O0.matrixWorldInverse),p._frustum.setFromProjectionMatrix(cQ,O0.coordinateSystem,O0.reversedDepth)}else p.updateMatrices(x);W=p.getFrustum(),B(P,O,p.camera,x,this.type)}if(p.isPointLightShadow!==!0&&this.type===U7)w(p,O);p.needsUpdate=!1}N=this.type,G.needsUpdate=!1,J.setRenderTarget(V,u,I)};function w(A,P){let O=Q.update(L);if(E.defines.VSM_SAMPLES!==A.blurSamples)E.defines.VSM_SAMPLES=A.blurSamples,F.defines.VSM_SAMPLES=A.blurSamples,E.needsUpdate=!0,F.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new l8(Z.x,Z.y,{format:x6,type:k6});E.uniforms.shadow_pass.value=A.map.depthTexture,E.uniforms.resolution.value=A.mapSize,E.uniforms.radius.value=A.radius,J.setRenderTarget(A.mapPass),J.clear(),J.renderBufferDirect(P,null,O,E,L,null),F.uniforms.shadow_pass.value=A.mapPass.texture,F.uniforms.resolution.value=A.mapSize,F.uniforms.radius.value=A.radius,J.setRenderTarget(A.map),J.clear(),J.renderBufferDirect(P,null,O,F,L,null)}function z(A,P,O,V){let u=null,I=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)u=I;else if(u=O.isPointLight===!0?X:Y,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let l=u.uuid,i=P.uuid,f=U[l];if(f===void 0)f={},U[l]=f;let d=f[i];if(d===void 0)d=u.clone(),f[i]=d,P.addEventListener("dispose",T);u=d}if(u.visible=P.visible,u.wireframe=P.wireframe,V===U7)u.side=P.shadowSide!==null?P.shadowSide:P.side;else u.side=P.shadowSide!==null?P.shadowSide:D[P.side];if(u.alphaMap=P.alphaMap,u.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,u.map=P.map,u.clipShadows=P.clipShadows,u.clippingPlanes=P.clippingPlanes,u.clipIntersection=P.clipIntersection,u.displacementMap=P.displacementMap,u.displacementScale=P.displacementScale,u.displacementBias=P.displacementBias,u.wireframeLinewidth=P.wireframeLinewidth,u.linewidth=P.linewidth,O.isPointLight===!0&&u.isMeshDistanceMaterial===!0){let l=J.properties.get(u);l.light=O}return u}function B(A,P,O,V,u){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&u===U7)&&(!A.frustumCulled||W.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let i=Q.update(A),f=A.material;if(Array.isArray(f)){let d=i.groups;for(let x=0,p=d.length;x<p;x++){let a=d[x],Q0=f[a.materialIndex];if(Q0&&Q0.visible){let N0=z(A,Q0,V,u);A.onBeforeShadow(J,A,P,O,i,N0,a),J.renderBufferDirect(O,null,i,N0,A,a),A.onAfterShadow(J,A,P,O,i,N0,a)}}}else if(f.visible){let d=z(A,f,V,u);A.onBeforeShadow(J,A,P,O,i,d,null),J.renderBufferDirect(O,null,i,d,A,null),A.onAfterShadow(J,A,P,O,i,d,null)}}}let l=A.children;for(let i=0,f=l.length;i<f;i++)B(l[i],P,O,V,u)}function T(A){A.target.removeEventListener("dispose",T);for(let O in U){let V=U[O],u=A.target.uuid;if(u in V)V[u].dispose(),delete V[u]}}}function zY(J,Q){function $(){let C=!1,W0=new Y8,c=null,J0=new Y8(0,0,0,0);return{setMask:function(R0){if(c!==R0&&!C)J.colorMask(R0,R0,R0,R0),c=R0},setLocked:function(R0){C=R0},setClear:function(R0,t,w0,S0,k8){if(k8===!0)R0*=S0,t*=S0,w0*=S0;if(W0.set(R0,t,w0,S0),J0.equals(W0)===!1)J.clearColor(R0,t,w0,S0),J0.copy(W0)},reset:function(){C=!1,c=null,J0.set(-1,0,0,0)}}}function W(){let C=!1,W0=!1,c=null,J0=null,R0=null;return{setReversed:function(t){if(W0!==t){let w0=Q.get("EXT_clip_control");if(t)w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.ZERO_TO_ONE_EXT);else w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.NEGATIVE_ONE_TO_ONE_EXT);W0=t;let S0=R0;R0=null,this.setClear(S0)}},getReversed:function(){return W0},setTest:function(t){if(t)k0(J.DEPTH_TEST);else z0(J.DEPTH_TEST)},setMask:function(t){if(c!==t&&!C)J.depthMask(t),c=t},setFunc:function(t){if(W0)t=_Q[t];if(J0!==t){switch(t){case m5:J.depthFunc(J.NEVER);break;case d5:J.depthFunc(J.ALWAYS);break;case u5:J.depthFunc(J.LESS);break;case N1:J.depthFunc(J.LEQUAL);break;case c5:J.depthFunc(J.EQUAL);break;case n5:J.depthFunc(J.GEQUAL);break;case s5:J.depthFunc(J.GREATER);break;case i5:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=t}},setLocked:function(t){C=t},setClear:function(t){if(R0!==t){if(R0=t,W0)t=1-t;J.clearDepth(t)}},reset:function(){C=!1,c=null,J0=null,R0=null,W0=!1}}}function Z(){let C=!1,W0=null,c=null,J0=null,R0=null,t=null,w0=null,S0=null,k8=null;return{setTest:function(r0){if(!C)if(r0)k0(J.STENCIL_TEST);else z0(J.STENCIL_TEST)},setMask:function(r0){if(W0!==r0&&!C)J.stencilMask(r0),W0=r0},setFunc:function(r0,a8,u8){if(c!==r0||J0!==a8||R0!==u8)J.stencilFunc(r0,a8,u8),c=r0,J0=a8,R0=u8},setOp:function(r0,a8,u8){if(t!==r0||w0!==a8||S0!==u8)J.stencilOp(r0,a8,u8),t=r0,w0=a8,S0=u8},setLocked:function(r0){C=r0},setClear:function(r0){if(k8!==r0)J.clearStencil(r0),k8=r0},reset:function(){C=!1,W0=null,c=null,J0=null,R0=null,t=null,w0=null,S0=null,k8=null}}}let H=new $,K=new W,Y=new Z,X=new WeakMap,U=new WeakMap,k={},D={},E={},F=new WeakMap,_=[],L=null,G=!1,N=null,w=null,z=null,B=null,T=null,A=null,P=null,O=new s0(0,0,0),V=0,u=!1,I=null,l=null,i=null,f=null,d=null,x=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,a=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),p=a>=1;else if(Q0.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),p=a>=2;let N0=null,B0={},O0=J.getParameter(J.SCISSOR_BOX),i0=J.getParameter(J.VIEWPORT),g0=new Y8().fromArray(O0),n=new Y8().fromArray(i0);function G0(C,W0,c,J0){let R0=new Uint8Array(4),t=J.createTexture();J.bindTexture(C,t),J.texParameteri(C,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(C,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let w0=0;w0<c;w0++)if(C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texImage3D(W0,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,R0);else J.texImage2D(W0+w0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,R0);return t}let M0={};M0[J.TEXTURE_2D]=G0(J.TEXTURE_2D,J.TEXTURE_2D,1),M0[J.TEXTURE_CUBE_MAP]=G0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),M0[J.TEXTURE_2D_ARRAY]=G0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),M0[J.TEXTURE_3D]=G0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),K.setClear(1),Y.setClear(0),k0(J.DEPTH_TEST),K.setFunc(N1),_8(!1),G8(E1),k0(J.CULL_FACE),f0(J6);function k0(C){if(k[C]!==!0)J.enable(C),k[C]=!0}function z0(C){if(k[C]!==!1)J.disable(C),k[C]=!1}function n0(C,W0){if(E[C]!==W0){if(J.bindFramebuffer(C,W0),E[C]=W0,C===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=W0;if(C===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=W0;return!0}return!1}function b0(C,W0){let c=_,J0=!1;if(C){if(c=F.get(W0),c===void 0)c=[],F.set(W0,c);let R0=C.textures;if(c.length!==R0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let t=0,w0=R0.length;t<w0;t++)c[t]=J.COLOR_ATTACHMENT0+t;c.length=R0.length,J0=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(c)}function p0(C){if(L!==C)return J.useProgram(C),L=C,!0;return!1}let e0={[k7]:J.FUNC_ADD,[V5]:J.FUNC_SUBTRACT,[B5]:J.FUNC_REVERSE_SUBTRACT};e0[z5]=J.MIN,e0[I5]=J.MAX;let J8={[A5]:J.ZERO,[C5]:J.ONE,[P5]:J.SRC_COLOR,[S5]:J.SRC_ALPHA,[y5]:J.SRC_ALPHA_SATURATE,[v5]:J.DST_COLOR,[h5]:J.DST_ALPHA,[T5]:J.ONE_MINUS_SRC_COLOR,[j5]:J.ONE_MINUS_SRC_ALPHA,[b5]:J.ONE_MINUS_DST_COLOR,[f5]:J.ONE_MINUS_DST_ALPHA,[x5]:J.CONSTANT_COLOR,[g5]:J.ONE_MINUS_CONSTANT_COLOR,[p5]:J.CONSTANT_ALPHA,[l5]:J.ONE_MINUS_CONSTANT_ALPHA};function f0(C,W0,c,J0,R0,t,w0,S0,k8,r0){if(C===J6){if(G===!0)z0(J.BLEND),G=!1;return}if(G===!1)k0(J.BLEND),G=!0;if(C!==L5){if(C!==N||r0!==u){if(w!==k7||T!==k7)J.blendEquation(J.FUNC_ADD),w=k7,T=k7;if(r0)switch(C){case C7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G7:J.blendFunc(J.ONE,J.ONE);break;case G1:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case k1:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:C0("WebGLState: Invalid blending: ",C);break}else switch(C){case C7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case G1:C0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k1:C0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:C0("WebGLState: Invalid blending: ",C);break}z=null,B=null,A=null,P=null,O.set(0,0,0),V=0,N=C,u=r0}return}if(R0=R0||W0,t=t||c,w0=w0||J0,W0!==w||R0!==T)J.blendEquationSeparate(e0[W0],e0[R0]),w=W0,T=R0;if(c!==z||J0!==B||t!==A||w0!==P)J.blendFuncSeparate(J8[c],J8[J0],J8[t],J8[w0]),z=c,B=J0,A=t,P=w0;if(S0.equals(O)===!1||k8!==V)J.blendColor(S0.r,S0.g,S0.b,k8),O.copy(S0),V=k8;N=C,u=!1}function R8(C,W0){C.side===e8?z0(J.CULL_FACE):k0(J.CULL_FACE);let c=C.side===T8;if(W0)c=!c;_8(c),C.blending===C7&&C.transparent===!1?f0(J6):f0(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),K.setFunc(C.depthFunc),K.setTest(C.depthTest),K.setMask(C.depthWrite),H.setMask(C.colorWrite);let J0=C.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(C.stencilWriteMask),Y.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),Y.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass);z8(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?k0(J.SAMPLE_ALPHA_TO_COVERAGE):z0(J.SAMPLE_ALPHA_TO_COVERAGE)}function _8(C){if(I!==C){if(C)J.frontFace(J.CW);else J.frontFace(J.CCW);I=C}}function G8(C){if(C!==_5){if(k0(J.CULL_FACE),C!==l)if(C===E1)J.cullFace(J.BACK);else if(C===M5)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else z0(J.CULL_FACE);l=C}function S(C){if(C!==i){if(p)J.lineWidth(C);i=C}}function z8(C,W0,c){if(C){if(k0(J.POLYGON_OFFSET_FILL),f!==W0||d!==c){if(f=W0,d=c,K.getReversed())W0=-W0;J.polygonOffset(W0,c)}}else z0(J.POLYGON_OFFSET_FILL)}function m0(C){if(C)k0(J.SCISSOR_TEST);else z0(J.SCISSOR_TEST)}function c0(C){if(C===void 0)C=J.TEXTURE0+x-1;if(N0!==C)J.activeTexture(C),N0=C}function U0(C,W0,c){if(c===void 0)if(N0===null)c=J.TEXTURE0+x-1;else c=N0;let J0=B0[c];if(J0===void 0)J0={type:void 0,texture:void 0},B0[c]=J0;if(J0.type!==C||J0.texture!==W0){if(N0!==c)J.activeTexture(c),N0=c;J.bindTexture(C,W0||M0[C]),J0.type=C,J0.texture=W0}}function H8(){let C=B0[N0];if(C!==void 0&&C.type!==void 0)J.bindTexture(C.type,null),C.type=void 0,C.texture=void 0}function I0(){try{J.compressedTexImage2D(...arguments)}catch(C){C0("WebGLState:",C)}}function M(){try{J.compressedTexImage3D(...arguments)}catch(C){C0("WebGLState:",C)}}function q(){try{J.texSubImage2D(...arguments)}catch(C){C0("WebGLState:",C)}}function h(){try{J.texSubImage3D(...arguments)}catch(C){C0("WebGLState:",C)}}function o(){try{J.compressedTexSubImage2D(...arguments)}catch(C){C0("WebGLState:",C)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(C){C0("WebGLState:",C)}}function e(){try{J.texStorage2D(...arguments)}catch(C){C0("WebGLState:",C)}}function H0(){try{J.texStorage3D(...arguments)}catch(C){C0("WebGLState:",C)}}function m(){try{J.texImage2D(...arguments)}catch(C){C0("WebGLState:",C)}}function s(){try{J.texImage3D(...arguments)}catch(C){C0("WebGLState:",C)}}function Z0(C){if(D[C]!==void 0)return D[C];else return J.getParameter(C)}function F0(C,W0){if(D[C]!==W0)J.pixelStorei(C,W0),D[C]=W0}function $0(C){if(g0.equals(C)===!1)J.scissor(C.x,C.y,C.z,C.w),g0.copy(C)}function K0(C){if(n.equals(C)===!1)J.viewport(C.x,C.y,C.z,C.w),n.copy(C)}function P0(C,W0){let c=U.get(W0);if(c===void 0)c=new WeakMap,U.set(W0,c);let J0=c.get(C);if(J0===void 0)J0=J.getUniformBlockIndex(W0,C.name),c.set(C,J0)}function h0(C,W0){let J0=U.get(W0).get(C);if(X.get(W0)!==J0)J.uniformBlockBinding(W0,J0,C.__bindingPointIndex),X.set(W0,J0)}function y0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),K.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),k={},D={},N0=null,B0={},E={},F=new WeakMap,_=[],L=null,G=!1,N=null,w=null,z=null,B=null,T=null,A=null,P=null,O=new s0(0,0,0),V=0,u=!1,I=null,l=null,i=null,f=null,d=null,g0.set(0,0,J.canvas.width,J.canvas.height),n.set(0,0,J.canvas.width,J.canvas.height),H.reset(),K.reset(),Y.reset()}return{buffers:{color:H,depth:K,stencil:Y},enable:k0,disable:z0,bindFramebuffer:n0,drawBuffers:b0,useProgram:p0,setBlending:f0,setMaterial:R8,setFlipSided:_8,setCullFace:G8,setLineWidth:S,setPolygonOffset:z8,setScissorTest:m0,activeTexture:c0,bindTexture:U0,unbindTexture:H8,compressedTexImage2D:I0,compressedTexImage3D:M,texImage2D:m,texImage3D:s,pixelStorei:F0,getParameter:Z0,updateUBOMapping:P0,uniformBlockBinding:h0,texStorage2D:e,texStorage3D:H0,texSubImage2D:q,texSubImage3D:h,compressedTexSubImage2D:o,compressedTexSubImage3D:r,scissor:$0,viewport:K0,reset:y0}}function IY(J,Q,$,W,Z,H,K){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new a0,k=new WeakMap,D=new Set,E,F=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function L(M,q){return _?new OffscreenCanvas(M,q):I7("canvas")}function G(M,q,h){let o=1,r=I0(M);if(r.width>h||r.height>h)o=h/Math.max(r.width,r.height);if(o<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let e=Math.floor(o*r.width),H0=Math.floor(o*r.height);if(E===void 0)E=L(e,H0);let m=q?L(e,H0):E;return m.width=e,m.height=H0,m.getContext("2d").drawImage(M,0,0,e,H0),A0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+e+"x"+H0+")."),m}else{if("data"in M)A0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return M}return M}function N(M){return M.generateMipmaps}function w(M){J.generateMipmap(M)}function z(M){if(M.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function B(M,q,h,o,r,e=!1){if(M!==null){if(J[M]!==void 0)return J[M];A0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H0;if(o){if(H0=Q.get("EXT_texture_norm16"),!H0)A0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=q;if(q===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&H0)m=H0.R16_EXT;if(h===J.SHORT&&H0)m=H0.R16_SNORM_EXT}if(q===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(q===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&H0)m=H0.RG16_EXT;if(h===J.SHORT&&H0)m=H0.RG16_SNORM_EXT}if(q===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(q===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(q===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(q===J.RGB){if(h===J.UNSIGNED_SHORT&&H0)m=H0.RGB16_EXT;if(h===J.SHORT&&H0)m=H0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(q===J.RGBA){let s=e?HJ:l0.getTransfer(r);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=s===W8?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&H0)m=H0.RGBA16_EXT;if(h===J.SHORT&&H0)m=H0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function T(M,q){let h;if(M){if(q===null||q===I6||q===D7)h=J.DEPTH24_STENCIL8;else if(q===G6)h=J.DEPTH32F_STENCIL8;else if(q===S7)h=J.DEPTH24_STENCIL8,A0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(q===null||q===I6||q===D7)h=J.DEPTH_COMPONENT24;else if(q===G6)h=J.DEPTH_COMPONENT32F;else if(q===S7)h=J.DEPTH_COMPONENT16;return h}function A(M,q){if(N(M)===!0||M.isFramebufferTexture&&M.minFilter!==z6&&M.minFilter!==S8)return Math.log2(Math.max(q.width,q.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return q.mipmaps.length;else return 1}function P(M){let q=M.target;if(q.removeEventListener("dispose",P),V(q),q.isVideoTexture)k.delete(q);if(q.isHTMLTexture)D.delete(q)}function O(M){let q=M.target;q.removeEventListener("dispose",O),I(q)}function V(M){let q=W.get(M);if(q.__webglInit===void 0)return;let h=M.source,o=F.get(h);if(o){let r=o[q.__cacheKey];if(r.usedTimes--,r.usedTimes===0)u(M);if(Object.keys(o).length===0)F.delete(h)}W.remove(M)}function u(M){let q=W.get(M);J.deleteTexture(q.__webglTexture);let h=M.source,o=F.get(h);delete o[q.__cacheKey],K.memory.textures--}function I(M){let q=W.get(M);if(M.depthTexture)M.depthTexture.dispose(),W.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(q.__webglFramebuffer[o]))for(let r=0;r<q.__webglFramebuffer[o].length;r++)J.deleteFramebuffer(q.__webglFramebuffer[o][r]);else J.deleteFramebuffer(q.__webglFramebuffer[o]);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer[o])}else{if(Array.isArray(q.__webglFramebuffer))for(let o=0;o<q.__webglFramebuffer.length;o++)J.deleteFramebuffer(q.__webglFramebuffer[o]);else J.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer);if(q.__webglMultisampledFramebuffer)J.deleteFramebuffer(q.__webglMultisampledFramebuffer);if(q.__webglColorRenderbuffer){for(let o=0;o<q.__webglColorRenderbuffer.length;o++)if(q.__webglColorRenderbuffer[o])J.deleteRenderbuffer(q.__webglColorRenderbuffer[o])}if(q.__webglDepthRenderbuffer)J.deleteRenderbuffer(q.__webglDepthRenderbuffer)}let h=M.textures;for(let o=0,r=h.length;o<r;o++){let e=W.get(h[o]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),K.memory.textures--;W.remove(h[o])}W.remove(M)}let l=0;function i(){l=0}function f(){return l}function d(M){l=M}function x(){let M=l;if(M>=Z.maxTextures)A0("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+Z.maxTextures);return l+=1,M}function p(M){let q=[];return q.push(M.wrapS),q.push(M.wrapT),q.push(M.wrapR||0),q.push(M.magFilter),q.push(M.minFilter),q.push(M.anisotropy),q.push(M.internalFormat),q.push(M.format),q.push(M.type),q.push(M.generateMipmaps),q.push(M.premultiplyAlpha),q.push(M.flipY),q.push(M.unpackAlignment),q.push(M.colorSpace),q.join()}function a(M,q){let h=W.get(M);if(M.isVideoTexture)U0(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&h.__version!==M.version){let o=M.image;if(o===null)A0("WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)A0("WebGLRenderer: Texture marked for update but image is incomplete");else{z0(h,M,q);return}}else if(M.isExternalTexture)h.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+q)}function Q0(M,q){let h=W.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&h.__version!==M.version){z0(h,M,q);return}else if(M.isExternalTexture)h.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+q)}function N0(M,q){let h=W.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&h.__version!==M.version){z0(h,M,q);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+q)}function B0(M,q){let h=W.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&h.__version!==M.version){n0(h,M,q);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+q)}let O0={[t5]:J.REPEAT,[q9]:J.CLAMP_TO_EDGE,[e5]:J.MIRRORED_REPEAT},i0={[z6]:J.NEAREST,[JQ]:J.NEAREST_MIPMAP_NEAREST,[T7]:J.NEAREST_MIPMAP_LINEAR,[S8]:J.LINEAR,[F9]:J.LINEAR_MIPMAP_NEAREST,[v6]:J.LINEAR_MIPMAP_LINEAR},g0={[EQ]:J.NEVER,[qQ]:J.ALWAYS,[GQ]:J.LESS,[V9]:J.LEQUAL,[kQ]:J.EQUAL,[B9]:J.GEQUAL,[NQ]:J.GREATER,[DQ]:J.NOTEQUAL};function n(M,q){if(q.type===G6&&Q.has("OES_texture_float_linear")===!1&&(q.magFilter===S8||q.magFilter===F9||q.magFilter===T7||q.magFilter===v6||q.minFilter===S8||q.minFilter===F9||q.minFilter===T7||q.minFilter===v6))A0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(M,J.TEXTURE_WRAP_S,O0[q.wrapS]),J.texParameteri(M,J.TEXTURE_WRAP_T,O0[q.wrapT]),M===J.TEXTURE_3D||M===J.TEXTURE_2D_ARRAY)J.texParameteri(M,J.TEXTURE_WRAP_R,O0[q.wrapR]);if(J.texParameteri(M,J.TEXTURE_MAG_FILTER,i0[q.magFilter]),J.texParameteri(M,J.TEXTURE_MIN_FILTER,i0[q.minFilter]),q.compareFunction)J.texParameteri(M,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(M,J.TEXTURE_COMPARE_FUNC,g0[q.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(q.magFilter===z6)return;if(q.minFilter!==T7&&q.minFilter!==v6)return;if(q.type===G6&&Q.has("OES_texture_float_linear")===!1)return;if(q.anisotropy>1||W.get(q).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(M,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(q.anisotropy,Z.getMaxAnisotropy())),W.get(q).__currentAnisotropy=q.anisotropy}}}function G0(M,q){let h=!1;if(M.__webglInit===void 0)M.__webglInit=!0,q.addEventListener("dispose",P);let o=q.source,r=F.get(o);if(r===void 0)r={},F.set(o,r);let e=p(q);if(e!==M.__cacheKey){if(r[e]===void 0)r[e]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,h=!0;r[e].usedTimes++;let H0=r[M.__cacheKey];if(H0!==void 0){if(r[M.__cacheKey].usedTimes--,H0.usedTimes===0)u(q)}M.__cacheKey=e,M.__webglTexture=r[e].texture}return h}function M0(M,q,h){return Math.floor(Math.floor(M/h)/q)}function k0(M,q,h,o){let e=M.updateRanges;if(e.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,q.width,q.height,h,o,q.data);else{e.sort((F0,$0)=>F0.start-$0.start);let H0=0;for(let F0=1;F0<e.length;F0++){let $0=e[H0],K0=e[F0],P0=$0.start+$0.count,h0=M0(K0.start,q.width,4),y0=M0($0.start,q.width,4);if(K0.start<=P0+1&&h0===y0&&M0(K0.start+K0.count-1,q.width,4)===h0)$0.count=Math.max($0.count,K0.start+K0.count-$0.start);else++H0,e[H0]=K0}e.length=H0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),Z0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,q.width);for(let F0=0,$0=e.length;F0<$0;F0++){let K0=e[F0],P0=Math.floor(K0.start/4),h0=Math.ceil(K0.count/4),y0=P0%q.width,C=Math.floor(P0/q.width),W0=h0,c=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,y0),$.pixelStorei(J.UNPACK_SKIP_ROWS,C),$.texSubImage2D(J.TEXTURE_2D,0,y0,C,W0,1,h,o,q.data)}M.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,Z0)}}function z0(M,q,h){let o=J.TEXTURE_2D;if(q.isDataArrayTexture||q.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(q.isData3DTexture)o=J.TEXTURE_3D;let r=G0(M,q),e=q.source;$.bindTexture(o,M.__webglTexture,J.TEXTURE0+h);let H0=W.get(e);if(e.version!==H0.__version||r===!0){if($.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&q.image instanceof ImageBitmap)===!1){let c=l0.getPrimaries(l0.workingColorSpace),J0=q.colorSpace===g6?null:l0.getPrimaries(q.colorSpace),R0=q.colorSpace===g6||c===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0)}$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);let s=G(q.image,!1,Z.maxTextureSize);s=H8(q,s);let Z0=H.convert(q.format,q.colorSpace),F0=H.convert(q.type),$0=B(q.internalFormat,Z0,F0,q.normalized,q.colorSpace,q.isVideoTexture);n(o,q);let K0,P0=q.mipmaps,h0=q.isVideoTexture!==!0,y0=H0.__version===void 0||r===!0,C=e.dataReady,W0=A(q,s);if(q.isDepthTexture){if($0=T(q.format===y6,q.type),y0)if(h0)$.texStorage2D(J.TEXTURE_2D,1,$0,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,$0,s.width,s.height,0,Z0,F0,null)}else if(q.isDataTexture)if(P0.length>0){if(h0&&y0)$.texStorage2D(J.TEXTURE_2D,W0,$0,P0[0].width,P0[0].height);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],h0){if(C)$.texSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,F0,K0.data)}else $.texImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,Z0,F0,K0.data);q.generateMipmaps=!1}else if(h0){if(y0)$.texStorage2D(J.TEXTURE_2D,W0,$0,s.width,s.height);if(C)k0(q,s,Z0,F0)}else $.texImage2D(J.TEXTURE_2D,0,$0,s.width,s.height,0,Z0,F0,s.data);else if(q.isCompressedTexture)if(q.isCompressedArrayTexture){if(h0&&y0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,$0,P0[0].width,P0[0].height,s.depth);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],q.format!==Q6)if(Z0!==null)if(h0){if(C)if(q.layerUpdates.size>0){let R0=fJ(K0.width,K0.height,q.format,q.type);for(let t of q.layerUpdates){let w0=K0.data.subarray(t*R0/K0.data.BYTES_PER_ELEMENT,(t+1)*R0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,t,K0.width,K0.height,1,Z0,w0)}q.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,K0.width,K0.height,s.depth,Z0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,$0,K0.width,K0.height,s.depth,0,K0.data,0,0);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(C)$.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,K0.width,K0.height,s.depth,Z0,F0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,c,$0,K0.width,K0.height,s.depth,0,Z0,F0,K0.data)}else{if(h0&&y0)$.texStorage2D(J.TEXTURE_2D,W0,$0,P0[0].width,P0[0].height);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],q.format!==Q6)if(Z0!==null)if(h0){if(C)$.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,K0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(C)$.texSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,F0,K0.data)}else $.texImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,Z0,F0,K0.data)}else if(q.isDataArrayTexture)if(h0){if(y0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,$0,s.width,s.height,s.depth);if(C)if(q.layerUpdates.size>0){let c=fJ(s.width,s.height,q.format,q.type);for(let J0 of q.layerUpdates){let R0=s.data.subarray(J0*c/s.data.BYTES_PER_ELEMENT,(J0+1)*c/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,J0,s.width,s.height,1,Z0,F0,R0)}q.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,Z0,F0,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,$0,s.width,s.height,s.depth,0,Z0,F0,s.data);else if(q.isData3DTexture)if(h0){if(y0)$.texStorage3D(J.TEXTURE_3D,W0,$0,s.width,s.height,s.depth);if(C)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,Z0,F0,s.data)}else $.texImage3D(J.TEXTURE_3D,0,$0,s.width,s.height,s.depth,0,Z0,F0,s.data);else if(q.isFramebufferTexture){if(y0)if(h0)$.texStorage2D(J.TEXTURE_2D,W0,$0,s.width,s.height);else{let{width:c,height:J0}=s;for(let R0=0;R0<W0;R0++)$.texImage2D(J.TEXTURE_2D,R0,$0,c,J0,0,Z0,F0,null),c>>=1,J0>>=1}}else if(q.isHTMLTexture){if("texElementImage2D"in J){let c=J.canvas;if(!c.hasAttribute("layoutsubtree"))c.setAttribute("layoutsubtree","true");if(s.parentNode!==c){c.appendChild(s),D.add(q),c.onpaint=(S0)=>{let k8=S0.changedElements;for(let r0 of D)if(k8.includes(r0.image))r0.needsUpdate=!0},c.requestPaint();return}let J0=0,R0=J.RGBA,t=J.RGBA,w0=J.UNSIGNED_BYTE;J.texElementImage2D(J.TEXTURE_2D,J0,R0,t,w0,s),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(P0.length>0){if(h0&&y0){let c=I0(P0[0]);$.texStorage2D(J.TEXTURE_2D,W0,$0,c.width,c.height)}for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],h0){if(C)$.texSubImage2D(J.TEXTURE_2D,c,0,0,Z0,F0,K0)}else $.texImage2D(J.TEXTURE_2D,c,$0,Z0,F0,K0);q.generateMipmaps=!1}else if(h0){if(y0){let c=I0(s);$.texStorage2D(J.TEXTURE_2D,W0,$0,c.width,c.height)}if(C)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Z0,F0,s)}else $.texImage2D(J.TEXTURE_2D,0,$0,Z0,F0,s);if(N(q))w(o);if(H0.__version=e.version,q.onUpdate)q.onUpdate(q)}M.__version=q.version}function n0(M,q,h){if(q.image.length!==6)return;let o=G0(M,q),r=q.source;$.bindTexture(J.TEXTURE_CUBE_MAP,M.__webglTexture,J.TEXTURE0+h);let e=W.get(r);if(r.version!==e.__version||o===!0){$.activeTexture(J.TEXTURE0+h);let H0=l0.getPrimaries(l0.workingColorSpace),m=q.colorSpace===g6?null:l0.getPrimaries(q.colorSpace),s=q.colorSpace===g6||H0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let Z0=q.isCompressedTexture||q.image[0].isCompressedTexture,F0=q.image[0]&&q.image[0].isDataTexture,$0=[];for(let t=0;t<6;t++){if(!Z0&&!F0)$0[t]=G(q.image[t],!0,Z.maxCubemapSize);else $0[t]=F0?q.image[t].image:q.image[t];$0[t]=H8(q,$0[t])}let K0=$0[0],P0=H.convert(q.format,q.colorSpace),h0=H.convert(q.type),y0=B(q.internalFormat,P0,h0,q.normalized,q.colorSpace),C=q.isVideoTexture!==!0,W0=e.__version===void 0||o===!0,c=r.dataReady,J0=A(q,K0);n(J.TEXTURE_CUBE_MAP,q);let R0;if(Z0){if(C&&W0)$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,y0,K0.width,K0.height);for(let t=0;t<6;t++){R0=$0[t].mipmaps;for(let w0=0;w0<R0.length;w0++){let S0=R0[w0];if(q.format!==Q6)if(P0!==null)if(C){if(c)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0,0,0,S0.width,S0.height,P0,S0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0,y0,S0.width,S0.height,0,S0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(C){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0,0,0,S0.width,S0.height,P0,h0,S0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0,y0,S0.width,S0.height,0,P0,h0,S0.data)}}}else{if(R0=q.mipmaps,C&&W0){if(R0.length>0)J0++;let t=I0($0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,y0,t.width,t.height)}for(let t=0;t<6;t++)if(F0){if(C){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,$0[t].width,$0[t].height,P0,h0,$0[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y0,$0[t].width,$0[t].height,0,P0,h0,$0[t].data);for(let w0=0;w0<R0.length;w0++){let k8=R0[w0].image[t].image;if(C){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0+1,0,0,k8.width,k8.height,P0,h0,k8.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0+1,y0,k8.width,k8.height,0,P0,h0,k8.data)}}else{if(C){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,P0,h0,$0[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y0,P0,h0,$0[t]);for(let w0=0;w0<R0.length;w0++){let S0=R0[w0];if(C){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0+1,0,0,P0,h0,S0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,w0+1,y0,P0,h0,S0.image[t])}}}if(N(q))w(J.TEXTURE_CUBE_MAP);if(e.__version=r.version,q.onUpdate)q.onUpdate(q)}M.__version=q.version}function b0(M,q,h,o,r,e){let H0=H.convert(h.format,h.colorSpace),m=H.convert(h.type),s=B(h.internalFormat,H0,m,h.normalized,h.colorSpace),Z0=W.get(q),F0=W.get(h);if(F0.__renderTarget=q,!Z0.__hasExternalTextures){let $0=Math.max(1,q.width>>e),K0=Math.max(1,q.height>>e);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,e,s,$0,K0,q.depth,0,H0,m,null);else $.texImage2D(r,e,s,$0,K0,0,H0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,M),c0(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,r,F0.__webglTexture,0,m0(q));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,r,F0.__webglTexture,e);$.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(M,q,h){if(J.bindRenderbuffer(J.RENDERBUFFER,M),q.depthBuffer){let o=q.depthTexture,r=o&&o.isDepthTexture?o.type:null,e=T(q.stencilBuffer,r),H0=q.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(c0(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,m0(q),e,q.width,q.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,m0(q),e,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,e,q.width,q.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,M)}else{let o=q.textures;for(let r=0;r<o.length;r++){let e=o[r],H0=H.convert(e.format,e.colorSpace),m=H.convert(e.type),s=B(e.internalFormat,H0,m,e.normalized,e.colorSpace);if(c0(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,m0(q),s,q.width,q.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,m0(q),s,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,s,q.width,q.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(M,q,h){let o=q.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,M),!(q.depthTexture&&q.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=W.get(q.depthTexture);if(r.__renderTarget=q,!r.__webglTexture||q.depthTexture.image.width!==q.width||q.depthTexture.image.height!==q.height)q.depthTexture.image.width=q.width,q.depthTexture.image.height=q.height,q.depthTexture.needsUpdate=!0;if(o){if(r.__webglInit===void 0)r.__webglInit=!0,q.depthTexture.addEventListener("dispose",P);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),n(J.TEXTURE_CUBE_MAP,q.depthTexture);let Z0=H.convert(q.depthTexture.format),F0=H.convert(q.depthTexture.type),$0;if(q.depthTexture.format===b6)$0=J.DEPTH_COMPONENT24;else if(q.depthTexture.format===y6)$0=J.DEPTH24_STENCIL8;for(let K0=0;K0<6;K0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0,$0,q.width,q.height,0,Z0,F0,null)}}else a(q.depthTexture,0);let e=r.__webglTexture,H0=m0(q),m=o?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,s=q.depthTexture.format===y6?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(q.depthTexture.format===b6)if(c0(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,m,e,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,m,e,0);else if(q.depthTexture.format===y6)if(c0(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,m,e,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,m,e,0);else throw Error("Unknown depthTexture format")}function J8(M){let q=W.get(M),h=M.isWebGLCubeRenderTarget===!0;if(q.__boundDepthTexture!==M.depthTexture){let o=M.depthTexture;if(q.__depthDisposeCallback)q.__depthDisposeCallback();if(o){let r=()=>{delete q.__boundDepthTexture,delete q.__depthDisposeCallback,o.removeEventListener("dispose",r)};o.addEventListener("dispose",r),q.__depthDisposeCallback=r}q.__boundDepthTexture=o}if(M.depthTexture&&!q.__autoAllocateDepthBuffer)if(h)for(let o=0;o<6;o++)e0(q.__webglFramebuffer[o],M,o);else{let o=M.texture.mipmaps;if(o&&o.length>0)e0(q.__webglFramebuffer[0],M,0);else e0(q.__webglFramebuffer,M,0)}else if(h){q.__webglDepthbuffer=[];for(let o=0;o<6;o++)if($.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[o]),q.__webglDepthbuffer[o]===void 0)q.__webglDepthbuffer[o]=J.createRenderbuffer(),p0(q.__webglDepthbuffer[o],M,!1);else{let r=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=q.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}else{let o=M.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer);if(q.__webglDepthbuffer===void 0)q.__webglDepthbuffer=J.createRenderbuffer(),p0(q.__webglDepthbuffer,M,!1);else{let r=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=q.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function f0(M,q,h){let o=W.get(M);if(q!==void 0)b0(o.__webglFramebuffer,M,M.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)J8(M)}function R8(M){let q=M.texture,h=W.get(M),o=W.get(q);M.addEventListener("dispose",O);let r=M.textures,e=M.isWebGLCubeRenderTarget===!0,H0=r.length>1;if(!H0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=q.version,K.memory.textures++}if(e){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(q.mipmaps&&q.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let s=0;s<q.mipmaps.length;s++)h.__webglFramebuffer[m][s]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(q.mipmaps&&q.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<q.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(H0)for(let m=0,s=r.length;m<s;m++){let Z0=W.get(r[m]);if(Z0.__webglTexture===void 0)Z0.__webglTexture=J.createTexture(),K.memory.textures++}if(M.samples>0&&c0(M)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<r.length;m++){let s=r[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let Z0=H.convert(s.format,s.colorSpace),F0=H.convert(s.type),$0=B(s.internalFormat,Z0,F0,s.normalized,s.colorSpace,M.isXRRenderTarget===!0),K0=m0(M);J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,$0,M.width,M.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),M.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),p0(h.__webglDepthRenderbuffer,M,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){$.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),n(J.TEXTURE_CUBE_MAP,q);for(let m=0;m<6;m++)if(q.mipmaps&&q.mipmaps.length>0)for(let s=0;s<q.mipmaps.length;s++)b0(h.__webglFramebuffer[m][s],M,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,s);else b0(h.__webglFramebuffer[m],M,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(N(q))w(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(H0){for(let m=0,s=r.length;m<s;m++){let Z0=r[m],F0=W.get(Z0),$0=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)$0=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture($0,F0.__webglTexture),n($0,Z0),b0(h.__webglFramebuffer,M,Z0,J.COLOR_ATTACHMENT0+m,$0,0),N(Z0))w($0)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)m=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,o.__webglTexture),n(m,q),q.mipmaps&&q.mipmaps.length>0)for(let s=0;s<q.mipmaps.length;s++)b0(h.__webglFramebuffer[s],M,q,J.COLOR_ATTACHMENT0,m,s);else b0(h.__webglFramebuffer,M,q,J.COLOR_ATTACHMENT0,m,0);if(N(q))w(m);$.unbindTexture()}if(M.depthBuffer)J8(M)}function _8(M){let q=M.textures;for(let h=0,o=q.length;h<o;h++){let r=q[h];if(N(r)){let e=z(M),H0=W.get(r).__webglTexture;$.bindTexture(e,H0),w(e),$.unbindTexture()}}}let G8=[],S=[];function z8(M){if(M.samples>0){if(c0(M)===!1){let{textures:q,width:h,height:o}=M,r=J.COLOR_BUFFER_BIT,e=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=W.get(M),m=q.length>1;if(m)for(let Z0=0;Z0<q.length;Z0++)$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,H0.__webglMultisampledFramebuffer);let s=M.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer);for(let Z0=0;Z0<q.length;Z0++){if(M.resolveDepthBuffer){if(M.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[Z0]);let F0=W.get(q[Z0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,F0,0)}if(J.blitFramebuffer(0,0,h,o,0,0,h,o,r,J.NEAREST),X===!0){if(G8.length=0,S.length=0,G8.push(J.COLOR_ATTACHMENT0+Z0),M.depthBuffer&&M.resolveDepthBuffer===!1)G8.push(e),S.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,S);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,G8)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let Z0=0;Z0<q.length;Z0++){$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[Z0]);let F0=W.get(q[Z0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.TEXTURE_2D,F0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&X){let q=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[q])}}}function m0(M){return Math.min(Z.maxSamples,M.samples)}function c0(M){let q=W.get(M);return M.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&q.__useRenderToTexture!==!1}function U0(M){let q=K.render.frame;if(k.get(M)!==q)k.set(M,q),M.update()}function H8(M,q){let{colorSpace:h,format:o,type:r}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return q;if(h!==ZJ&&h!==g6)if(l0.getTransfer(h)===W8){if(o!==Q6||r!==o8)A0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else C0("WebGLTextures: Unsupported texture color space:",h);return q}function I0(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)U.width=M.naturalWidth||M.width,U.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)U.width=M.displayWidth,U.height=M.displayHeight;else U.width=M.width,U.height=M.height;return U}this.allocateTextureUnit=x,this.resetTextureUnits=i,this.getTextureUnits=f,this.setTextureUnits=d,this.setTexture2D=a,this.setTexture2DArray=Q0,this.setTexture3D=N0,this.setTextureCube=B0,this.rebindTextures=f0,this.setupRenderTarget=R8,this.updateRenderTargetMipmap=_8,this.updateMultisampleRenderTarget=z8,this.setupDepthRenderbuffer=J8,this.setupFrameBufferTexture=b0,this.useMultisampledRTT=c0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function AY(J,Q){function $(W,Z=g6){let H,K=l0.getTransfer(Z);if(W===o8)return J.UNSIGNED_BYTE;if(W===L1)return J.UNSIGNED_SHORT_4_4_4_4;if(W===V1)return J.UNSIGNED_SHORT_5_5_5_1;if(W===WQ)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===ZQ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===QQ)return J.BYTE;if(W===$Q)return J.SHORT;if(W===S7)return J.UNSIGNED_SHORT;if(W===w1)return J.INT;if(W===I6)return J.UNSIGNED_INT;if(W===G6)return J.FLOAT;if(W===k6)return J.HALF_FLOAT;if(W===HQ)return J.ALPHA;if(W===KQ)return J.RGB;if(W===Q6)return J.RGBA;if(W===b6)return J.DEPTH_COMPONENT;if(W===y6)return J.DEPTH_STENCIL;if(W===YQ)return J.RED;if(W===B1)return J.RED_INTEGER;if(W===x6)return J.RG;if(W===z1)return J.RG_INTEGER;if(W===I1)return J.RGBA_INTEGER;if(W===R9||W===O9||W===_9||W===M9)if(K===W8)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(W===R9)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===O9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===_9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===M9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(W===R9)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===O9)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===_9)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===M9)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===A1||W===C1||W===P1||W===T1)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(W===A1)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===C1)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===P1)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===T1)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===S1||W===j1||W===h1||W===f1||W===v1||W===w9||W===b1)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(W===S1||W===j1)return K===W8?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(W===h1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(W===f1)return H.COMPRESSED_R11_EAC;if(W===v1)return H.COMPRESSED_SIGNED_R11_EAC;if(W===w9)return H.COMPRESSED_RG11_EAC;if(W===b1)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===y1||W===x1||W===g1||W===p1||W===l1||W===m1||W===d1||W===u1||W===c1||W===n1||W===s1||W===i1||W===o1||W===a1)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(W===y1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===x1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===g1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===p1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===l1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===m1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===d1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===u1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===c1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===n1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===s1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===i1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===o1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===a1)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===r1||W===t1||W===e1)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(W===r1)return K===W8?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===t1)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===e1)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===JJ||W===QJ||W===L9||W===$J)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(W===JJ)return H.COMPRESSED_RED_RGTC1_EXT;if(W===QJ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===L9)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===$J)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===D7)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var CY=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PY=`
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

}`;class W${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new j9(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new h8({vertexShader:CY,fragmentShader:PY,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new j8(new b7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z$ extends N6{constructor(J,Q){super();let $=this,W=null,Z=1,H=null,K="local-floor",Y=1,X=null,U=null,k=null,D=null,E=null,F=null,_=typeof XRWebGLBinding<"u",L=new W$,G={},N=Q.getContextAttributes(),w=null,z=null,B=[],T=[],A=new a0,P=null,O=new I8;O.viewport=new Y8;let V=new I8;V.viewport=new Y8;let u=[O,V],I=new TJ,l=null,i=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let G0=B[n];if(G0===void 0)G0=new f7,B[n]=G0;return G0.getTargetRaySpace()},this.getControllerGrip=function(n){let G0=B[n];if(G0===void 0)G0=new f7,B[n]=G0;return G0.getGripSpace()},this.getHand=function(n){let G0=B[n];if(G0===void 0)G0=new f7,B[n]=G0;return G0.getHandSpace()};function f(n){let G0=T.indexOf(n.inputSource);if(G0===-1)return;let M0=B[G0];if(M0!==void 0)M0.update(n.inputSource,n.frame,X||H),M0.dispatchEvent({type:n.type,data:n.inputSource})}function d(){W.removeEventListener("select",f),W.removeEventListener("selectstart",f),W.removeEventListener("selectend",f),W.removeEventListener("squeeze",f),W.removeEventListener("squeezestart",f),W.removeEventListener("squeezeend",f),W.removeEventListener("end",d),W.removeEventListener("inputsourceschange",x);for(let n=0;n<B.length;n++){let G0=T[n];if(G0===null)continue;T[n]=null,B[n].disconnect(G0)}l=null,i=null,L.reset();for(let n in G)delete G[n];J.setRenderTarget(w),E=null,D=null,k=null,W=null,z=null,g0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(A.width,A.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(Z=n,$.isPresenting===!0)A0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(K=n,$.isPresenting===!0)A0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||H},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return D!==null?D:E},this.getBinding=function(){if(k===null&&_)k=new XRWebGLBinding(W,Q);return k},this.getFrame=function(){return F},this.getSession=function(){return W},this.setSession=async function(n){if(W=n,W!==null){if(w=J.getRenderTarget(),W.addEventListener("select",f),W.addEventListener("selectstart",f),W.addEventListener("selectend",f),W.addEventListener("squeeze",f),W.addEventListener("squeezestart",f),W.addEventListener("squeezeend",f),W.addEventListener("end",d),W.addEventListener("inputsourceschange",x),N.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(A),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let M0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:Z};E=new XRWebGLLayer(W,Q,M0),W.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),z=new l8(E.framebufferWidth,E.framebufferHeight,{format:Q6,type:o8,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{let M0=null,k0=null,z0=null;if(N.depth)z0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,M0=N.stencil?y6:b6,k0=N.stencil?D7:I6;let n0={colorFormat:Q.RGBA8,depthFormat:z0,scaleFactor:Z};k=this.getBinding(),D=k.createProjectionLayer(n0),W.updateRenderState({layers:[D]}),J.setPixelRatio(1),J.setSize(D.textureWidth,D.textureHeight,!1),z=new l8(D.textureWidth,D.textureHeight,{format:Q6,type:o8,depthTexture:new A6(D.textureWidth,D.textureHeight,k0,void 0,void 0,void 0,void 0,void 0,void 0,M0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:D.ignoreDepthValues===!1,resolveStencilBuffer:D.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(Y),X=null,H=await W.requestReferenceSpace(K),g0.setContext(W),g0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function x(n){for(let G0=0;G0<n.removed.length;G0++){let M0=n.removed[G0],k0=T.indexOf(M0);if(k0>=0)T[k0]=null,B[k0].disconnect(M0)}for(let G0=0;G0<n.added.length;G0++){let M0=n.added[G0],k0=T.indexOf(M0);if(k0===-1){for(let n0=0;n0<B.length;n0++)if(n0>=T.length){T.push(M0),k0=n0;break}else if(T[n0]===null){T[n0]=M0,k0=n0;break}if(k0===-1)break}let z0=B[k0];if(z0)z0.connect(M0)}}let p=new b,a=new b;function Q0(n,G0,M0){p.setFromMatrixPosition(G0.matrixWorld),a.setFromMatrixPosition(M0.matrixWorld);let k0=p.distanceTo(a),z0=G0.projectionMatrix.elements,n0=M0.projectionMatrix.elements,b0=z0[14]/(z0[10]-1),p0=z0[14]/(z0[10]+1),e0=(z0[9]+1)/z0[5],J8=(z0[9]-1)/z0[5],f0=(z0[8]-1)/z0[0],R8=(n0[8]+1)/n0[0],_8=b0*f0,G8=b0*R8,S=k0/(-f0+R8),z8=S*-f0;if(G0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(z8),n.translateZ(S),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),z0[10]===-1)n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse);else{let m0=b0+S,c0=p0+S,U0=_8-z8,H8=G8+(k0-z8),I0=e0*p0/c0*m0,M=J8*p0/c0*m0;n.projectionMatrix.makePerspective(U0,H8,I0,M,m0,c0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function N0(n,G0){if(G0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(G0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(W===null)return;let{near:G0,far:M0}=n;if(L.texture!==null){if(L.depthNear>0)G0=L.depthNear;if(L.depthFar>0)M0=L.depthFar}if(I.near=V.near=O.near=G0,I.far=V.far=O.far=M0,l!==I.near||i!==I.far)W.updateRenderState({depthNear:I.near,depthFar:I.far}),l=I.near,i=I.far;I.layers.mask=n.layers.mask|6,O.layers.mask=I.layers.mask&-5,V.layers.mask=I.layers.mask&-3;let k0=n.parent,z0=I.cameras;N0(I,k0);for(let n0=0;n0<z0.length;n0++)N0(z0[n0],k0);if(z0.length===2)Q0(I,O,V);else I.projectionMatrix.copy(O.projectionMatrix);B0(n,I,k0)};function B0(n,G0,M0){if(M0===null)n.matrix.copy(G0.matrixWorld);else n.matrix.copy(M0.matrixWorld),n.matrix.invert(),n.matrix.multiply(G0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=k9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return I},this.getFoveation=function(){if(D===null&&E===null)return;return Y},this.setFoveation=function(n){if(Y=n,D!==null)D.fixedFoveation=n;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=n},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(I)},this.getCameraTexture=function(n){return G[n]};let O0=null;function i0(n,G0){if(U=G0.getViewerPose(X||H),F=G0,U!==null){let M0=U.views;if(E!==null)J.setRenderTargetFramebuffer(z,E.framebuffer),J.setRenderTarget(z);let k0=!1;if(M0.length!==I.cameras.length)I.cameras.length=0,k0=!0;for(let p0=0;p0<M0.length;p0++){let e0=M0[p0],J8=null;if(E!==null)J8=E.getViewport(e0);else{let R8=k.getViewSubImage(D,e0);if(J8=R8.viewport,p0===0)J.setRenderTargetTextures(z,R8.colorTexture,R8.depthStencilTexture),J.setRenderTarget(z)}let f0=u[p0];if(f0===void 0)f0=new I8,f0.layers.enable(p0),f0.viewport=new Y8,u[p0]=f0;if(f0.matrix.fromArray(e0.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(e0.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(J8.x,J8.y,J8.width,J8.height),p0===0)I.matrix.copy(f0.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);if(k0===!0)I.cameras.push(f0)}let z0=W.enabledFeatures;if(z0&&z0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&_){k=$.getBinding();let p0=k.getDepthInformation(M0[0]);if(p0&&p0.isValid&&p0.texture)L.init(p0,W.renderState)}if(z0&&z0.includes("camera-access")&&_){J.state.unbindTexture(),k=$.getBinding();for(let p0=0;p0<M0.length;p0++){let e0=M0[p0].camera;if(e0){let J8=G[e0];if(!J8)J8=new j9,G[e0]=J8;let f0=k.getCameraImage(e0);J8.sourceTexture=f0}}}}for(let M0=0;M0<B.length;M0++){let k0=T[M0],z0=B[M0];if(k0!==null&&z0!==void 0)z0.update(k0,G0,X||H)}if(O0)O0(n,G0);if(G0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:G0});F=null}let g0=new nQ;g0.setAnimationLoop(i0),this.setAnimationLoop=function(n){O0=n},this.dispose=function(){}}}var TY=new E8,H$=new T0;H$.set(-1,0,0,0,1,0,0,0,1);function SY(J,Q){function $(G,N){if(G.matrixAutoUpdate===!0)G.updateMatrix();N.value.copy(G.matrix)}function W(G,N){if(N.color.getRGB(G.fogColor.value,qJ(J)),N.isFog)G.fogNear.value=N.near,G.fogFar.value=N.far;else if(N.isFogExp2)G.fogDensity.value=N.density}function Z(G,N,w,z,B){if(N.isNodeMaterial)N.uniformsNeedUpdate=!1;else if(N.isMeshBasicMaterial)H(G,N);else if(N.isMeshLambertMaterial){if(H(G,N),N.envMap)G.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshToonMaterial)H(G,N),D(G,N);else if(N.isMeshPhongMaterial){if(H(G,N),k(G,N),N.envMap)G.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshStandardMaterial){if(H(G,N),E(G,N),N.isMeshPhysicalMaterial)F(G,N,B)}else if(N.isMeshMatcapMaterial)H(G,N),_(G,N);else if(N.isMeshDepthMaterial)H(G,N);else if(N.isMeshDistanceMaterial)H(G,N),L(G,N);else if(N.isMeshNormalMaterial)H(G,N);else if(N.isLineBasicMaterial){if(K(G,N),N.isLineDashedMaterial)Y(G,N)}else if(N.isPointsMaterial)X(G,N,w,z);else if(N.isSpriteMaterial)U(G,N);else if(N.isShadowMaterial)G.color.value.copy(N.color),G.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function H(G,N){if(G.opacity.value=N.opacity,N.color)G.diffuse.value.copy(N.color);if(N.emissive)G.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)G.map.value=N.map,$(N.map,G.mapTransform);if(N.alphaMap)G.alphaMap.value=N.alphaMap,$(N.alphaMap,G.alphaMapTransform);if(N.bumpMap){if(G.bumpMap.value=N.bumpMap,$(N.bumpMap,G.bumpMapTransform),G.bumpScale.value=N.bumpScale,N.side===T8)G.bumpScale.value*=-1}if(N.normalMap){if(G.normalMap.value=N.normalMap,$(N.normalMap,G.normalMapTransform),G.normalScale.value.copy(N.normalScale),N.side===T8)G.normalScale.value.negate()}if(N.displacementMap)G.displacementMap.value=N.displacementMap,$(N.displacementMap,G.displacementMapTransform),G.displacementScale.value=N.displacementScale,G.displacementBias.value=N.displacementBias;if(N.emissiveMap)G.emissiveMap.value=N.emissiveMap,$(N.emissiveMap,G.emissiveMapTransform);if(N.specularMap)G.specularMap.value=N.specularMap,$(N.specularMap,G.specularMapTransform);if(N.alphaTest>0)G.alphaTest.value=N.alphaTest;let w=Q.get(N),z=w.envMap,B=w.envMapRotation;if(z){if(G.envMap.value=z,G.envMapRotation.value.setFromMatrix4(TY.makeRotationFromEuler(B)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)G.envMapRotation.value.premultiply(H$);G.reflectivity.value=N.reflectivity,G.ior.value=N.ior,G.refractionRatio.value=N.refractionRatio}if(N.lightMap)G.lightMap.value=N.lightMap,G.lightMapIntensity.value=N.lightMapIntensity,$(N.lightMap,G.lightMapTransform);if(N.aoMap)G.aoMap.value=N.aoMap,G.aoMapIntensity.value=N.aoMapIntensity,$(N.aoMap,G.aoMapTransform)}function K(G,N){if(G.diffuse.value.copy(N.color),G.opacity.value=N.opacity,N.map)G.map.value=N.map,$(N.map,G.mapTransform)}function Y(G,N){G.dashSize.value=N.dashSize,G.totalSize.value=N.dashSize+N.gapSize,G.scale.value=N.scale}function X(G,N,w,z){if(G.diffuse.value.copy(N.color),G.opacity.value=N.opacity,G.size.value=N.size*w,G.scale.value=z*0.5,N.map)G.map.value=N.map,$(N.map,G.uvTransform);if(N.alphaMap)G.alphaMap.value=N.alphaMap,$(N.alphaMap,G.alphaMapTransform);if(N.alphaTest>0)G.alphaTest.value=N.alphaTest}function U(G,N){if(G.diffuse.value.copy(N.color),G.opacity.value=N.opacity,G.rotation.value=N.rotation,N.map)G.map.value=N.map,$(N.map,G.mapTransform);if(N.alphaMap)G.alphaMap.value=N.alphaMap,$(N.alphaMap,G.alphaMapTransform);if(N.alphaTest>0)G.alphaTest.value=N.alphaTest}function k(G,N){G.specular.value.copy(N.specular),G.shininess.value=Math.max(N.shininess,0.0001)}function D(G,N){if(N.gradientMap)G.gradientMap.value=N.gradientMap}function E(G,N){if(G.metalness.value=N.metalness,N.metalnessMap)G.metalnessMap.value=N.metalnessMap,$(N.metalnessMap,G.metalnessMapTransform);if(G.roughness.value=N.roughness,N.roughnessMap)G.roughnessMap.value=N.roughnessMap,$(N.roughnessMap,G.roughnessMapTransform);if(N.envMap)G.envMapIntensity.value=N.envMapIntensity}function F(G,N,w){if(G.ior.value=N.ior,N.sheen>0){if(G.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),G.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)G.sheenColorMap.value=N.sheenColorMap,$(N.sheenColorMap,G.sheenColorMapTransform);if(N.sheenRoughnessMap)G.sheenRoughnessMap.value=N.sheenRoughnessMap,$(N.sheenRoughnessMap,G.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(G.clearcoat.value=N.clearcoat,G.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)G.clearcoatMap.value=N.clearcoatMap,$(N.clearcoatMap,G.clearcoatMapTransform);if(N.clearcoatRoughnessMap)G.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,$(N.clearcoatRoughnessMap,G.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(G.clearcoatNormalMap.value=N.clearcoatNormalMap,$(N.clearcoatNormalMap,G.clearcoatNormalMapTransform),G.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===T8)G.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)G.dispersion.value=N.dispersion;if(N.iridescence>0){if(G.iridescence.value=N.iridescence,G.iridescenceIOR.value=N.iridescenceIOR,G.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)G.iridescenceMap.value=N.iridescenceMap,$(N.iridescenceMap,G.iridescenceMapTransform);if(N.iridescenceThicknessMap)G.iridescenceThicknessMap.value=N.iridescenceThicknessMap,$(N.iridescenceThicknessMap,G.iridescenceThicknessMapTransform)}if(N.transmission>0){if(G.transmission.value=N.transmission,G.transmissionSamplerMap.value=w.texture,G.transmissionSamplerSize.value.set(w.width,w.height),N.transmissionMap)G.transmissionMap.value=N.transmissionMap,$(N.transmissionMap,G.transmissionMapTransform);if(G.thickness.value=N.thickness,N.thicknessMap)G.thicknessMap.value=N.thicknessMap,$(N.thicknessMap,G.thicknessMapTransform);G.attenuationDistance.value=N.attenuationDistance,G.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(G.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)G.anisotropyMap.value=N.anisotropyMap,$(N.anisotropyMap,G.anisotropyMapTransform)}if(G.specularIntensity.value=N.specularIntensity,G.specularColor.value.copy(N.specularColor),N.specularColorMap)G.specularColorMap.value=N.specularColorMap,$(N.specularColorMap,G.specularColorMapTransform);if(N.specularIntensityMap)G.specularIntensityMap.value=N.specularIntensityMap,$(N.specularIntensityMap,G.specularIntensityMapTransform)}function _(G,N){if(N.matcap)G.matcap.value=N.matcap}function L(G,N){let w=Q.get(N).light;G.referencePosition.value.setFromMatrixPosition(w.matrixWorld),G.nearDistance.value=w.shadow.camera.near,G.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function jY(J,Q,$,W){let Z={},H={},K=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(w,z){let B=z.program;W.uniformBlockBinding(w,B)}function U(w,z){let B=Z[w.id];if(B===void 0)_(w),B=k(w),Z[w.id]=B,w.addEventListener("dispose",G);let T=z.program;W.updateUBOMapping(w,T);let A=Q.render.frame;if(H[w.id]!==A)E(w),H[w.id]=A}function k(w){let z=D();w.__bindingPointIndex=z;let B=J.createBuffer(),T=w.__size,A=w.usage;return J.bindBuffer(J.UNIFORM_BUFFER,B),J.bufferData(J.UNIFORM_BUFFER,T,A),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,B),B}function D(){for(let w=0;w<Y;w++)if(K.indexOf(w)===-1)return K.push(w),w;return C0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(w){let z=Z[w.id],B=w.uniforms,T=w.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let A=0,P=B.length;A<P;A++){let O=Array.isArray(B[A])?B[A]:[B[A]];for(let V=0,u=O.length;V<u;V++){let I=O[V];if(F(I,A,V,T)===!0){let l=I.__offset,i=Array.isArray(I.value)?I.value:[I.value],f=0;for(let d=0;d<i.length;d++){let x=i[d],p=L(x);if(typeof x==="number"||typeof x==="boolean")I.__data[0]=x,J.bufferSubData(J.UNIFORM_BUFFER,l+f,I.__data);else if(x.isMatrix3)I.__data[0]=x.elements[0],I.__data[1]=x.elements[1],I.__data[2]=x.elements[2],I.__data[3]=0,I.__data[4]=x.elements[3],I.__data[5]=x.elements[4],I.__data[6]=x.elements[5],I.__data[7]=0,I.__data[8]=x.elements[6],I.__data[9]=x.elements[7],I.__data[10]=x.elements[8],I.__data[11]=0;else if(ArrayBuffer.isView(x))I.__data.set(new x.constructor(x.buffer,x.byteOffset,I.__data.length));else x.toArray(I.__data,f),f+=p.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,l,I.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(w,z,B,T){let A=w.value,P=z+"_"+B;if(T[P]===void 0){if(typeof A==="number"||typeof A==="boolean")T[P]=A;else if(ArrayBuffer.isView(A))T[P]=A.slice();else T[P]=A.clone();return!0}else{let O=T[P];if(typeof A==="number"||typeof A==="boolean"){if(O!==A)return T[P]=A,!0}else if(ArrayBuffer.isView(A))return!0;else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function _(w){let z=w.uniforms,B=0,T=16;for(let P=0,O=z.length;P<O;P++){let V=Array.isArray(z[P])?z[P]:[z[P]];for(let u=0,I=V.length;u<I;u++){let l=V[u],i=Array.isArray(l.value)?l.value:[l.value];for(let f=0,d=i.length;f<d;f++){let x=i[f],p=L(x),a=B%T,Q0=a%p.boundary,N0=a+Q0;if(B+=Q0,N0!==0&&T-N0<p.storage)B+=T-N0;l.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=B,B+=p.storage}}}let A=B%T;if(A>0)B+=T-A;return w.__size=B,w.__cache={},this}function L(w){let z={boundary:0,storage:0};if(typeof w==="number"||typeof w==="boolean")z.boundary=4,z.storage=4;else if(w.isVector2)z.boundary=8,z.storage=8;else if(w.isVector3||w.isColor)z.boundary=16,z.storage=12;else if(w.isVector4)z.boundary=16,z.storage=16;else if(w.isMatrix3)z.boundary=48,z.storage=48;else if(w.isMatrix4)z.boundary=64,z.storage=64;else if(w.isTexture)A0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(w))z.boundary=16,z.storage=w.byteLength;else A0("WebGLRenderer: Unsupported uniform value type.",w);return z}function G(w){let z=w.target;z.removeEventListener("dispose",G);let B=K.indexOf(z.__bindingPointIndex);K.splice(B,1),J.deleteBuffer(Z[z.id]),delete Z[z.id],delete H[z.id]}function N(){for(let w in Z)J.deleteBuffer(Z[w]);K=[],Z={},H={}}return{bind:X,update:U,dispose:N}}var hY=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$6=null;function fY(){if($6===null)$6=new NJ(hY,16,16,x6,k6),$6.name="DFG_LUT",$6.minFilter=S8,$6.magFilter=S8,$6.wrapS=q9,$6.wrapT=q9,$6.generateMipmaps=!1,$6.needsUpdate=!0;return $6}class cJ{constructor(J={}){let{canvas:Q=FQ(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:H=!1,antialias:K=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:k=!1,reversedDepthBuffer:D=!1,outputBufferType:E=o8}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=H;let _=E,L=new Set([I1,z1,B1]),G=new Set([o8,I6,S7,D7,L1,V1]),N=new Uint32Array(4),w=new Int32Array(4),z=new b,B=null,T=null,A=[],P=[],O=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=i8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,u=!1,I=null;this._outputColorSpace=UQ;let l=0,i=0,f=null,d=-1,x=null,p=new Y8,a=new Y8,Q0=null,N0=new s0(0),B0=0,O0=Q.width,i0=Q.height,g0=1,n=null,G0=null,M0=new Y8(0,0,O0,i0),k0=new Y8(0,0,O0,i0),z0=!1,n0=new T9,b0=!1,p0=!1,e0=new E8,J8=new b,f0=new Y8,R8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_8=!1;function G8(){return f===null?g0:1}let S=$;function z8(R,j){return Q.getContext(R,j)}try{let R={alpha:!0,depth:W,stencil:Z,antialias:K,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:k};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${O5}`);if(Q.addEventListener("webglcontextlost",R0,!1),Q.addEventListener("webglcontextrestored",t,!1),Q.addEventListener("webglcontextcreationerror",w0,!1),S===null){if(S=z8("webgl2",R),S===null)if(z8("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(R){throw C0("WebGLRenderer: "+R.message),R}let m0,c0,U0,H8,I0,M,q,h,o,r,e,H0,m,s,Z0,F0,$0,K0,P0,h0,y0,C,W0;function c(){if(m0=new lH(S),m0.init(),y0=new AY(S,m0),c0=new hH(S,m0,J,y0),U0=new zY(S,m0),c0.reversedDepthBuffer&&D)U0.buffers.depth.setReversed(!0);H8=new uH(S),I0=new GY,M=new IY(S,m0,U0,I0,c0,y0,H8),q=new pH(V),h=new i$(S),C=new SH(S,h),o=new mH(S,h,H8,C),r=new nH(S,o,h,C,H8),K0=new cH(S,c0,M),Z0=new fH(I0),e=new EY(V,q,m0,c0,C,Z0),H0=new SY(V,I0),m=new NY,s=new _Y(m0),$0=new TH(V,q,U0,r,F,Y),F0=new BY(V,r,c0),W0=new jY(S,H8,c0,U0),P0=new jH(S,m0,H8),h0=new dH(S,m0,H8),H8.programs=e.programs,V.capabilities=c0,V.extensions=m0,V.properties=I0,V.renderLists=m,V.shadowMap=F0,V.state=U0,V.info=H8}if(c(),_!==o8)O=new iH(_,Q.width,Q.height,W,Z);let J0=new Z$(V,S);this.xr=J0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let R=m0.get("WEBGL_lose_context");if(R)R.loseContext()},this.forceContextRestore=function(){let R=m0.get("WEBGL_lose_context");if(R)R.restoreContext()},this.getPixelRatio=function(){return g0},this.setPixelRatio=function(R){if(R===void 0)return;g0=R,this.setSize(O0,i0,!1)},this.getSize=function(R){return R.set(O0,i0)},this.setSize=function(R,j,g=!0){if(J0.isPresenting){A0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=R,i0=j,Q.width=Math.floor(R*g0),Q.height=Math.floor(j*g0),g===!0)Q.style.width=R+"px",Q.style.height=j+"px";if(O!==null)O.setSize(Q.width,Q.height);this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O0*g0,i0*g0).floor()},this.setDrawingBufferSize=function(R,j,g){O0=R,i0=j,g0=g,Q.width=Math.floor(R*g),Q.height=Math.floor(j*g),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(_===o8){C0("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){A0("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(p)},this.getViewport=function(R){return R.copy(M0)},this.setViewport=function(R,j,g,v){if(R.isVector4)M0.set(R.x,R.y,R.z,R.w);else M0.set(R,j,g,v);U0.viewport(p.copy(M0).multiplyScalar(g0).round())},this.getScissor=function(R){return R.copy(k0)},this.setScissor=function(R,j,g,v){if(R.isVector4)k0.set(R.x,R.y,R.z,R.w);else k0.set(R,j,g,v);U0.scissor(a.copy(k0).multiplyScalar(g0).round())},this.getScissorTest=function(){return z0},this.setScissorTest=function(R){U0.setScissorTest(z0=R)},this.setOpaqueSort=function(R){n=R},this.setTransparentSort=function(R){G0=R},this.getClearColor=function(R){return R.copy($0.getClearColor())},this.setClearColor=function(){$0.setClearColor(...arguments)},this.getClearAlpha=function(){return $0.getClearAlpha()},this.setClearAlpha=function(){$0.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,g=!0){let v=0;if(R){let y=!1;if(f!==null){let E0=f.texture.format;y=L.has(E0)}if(y){let E0=f.texture.type,q0=G.has(E0),X0=$0.getClearColor(),_0=$0.getClearAlpha(),L0=X0.r,j0=X0.g,x0=X0.b;if(q0)N[0]=L0,N[1]=j0,N[2]=x0,N[3]=_0,S.clearBufferuiv(S.COLOR,0,N);else w[0]=L0,w[1]=j0,w[2]=x0,w[3]=_0,S.clearBufferiv(S.COLOR,0,w)}else v|=S.COLOR_BUFFER_BIT}if(j)v|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)v|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(v!==0)S.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){Q.removeEventListener("webglcontextlost",R0,!1),Q.removeEventListener("webglcontextrestored",t,!1),Q.removeEventListener("webglcontextcreationerror",w0,!1),$0.dispose(),m.dispose(),s.dispose(),I0.dispose(),q.dispose(),r.dispose(),C.dispose(),W0.dispose(),e.dispose(),J0.dispose(),J0.removeEventListener("sessionstart",nJ),J0.removeEventListener("sessionend",sJ),P6.stop()};function R0(R){R.preventDefault(),XJ("WebGLRenderer: Context Lost."),u=!0}function t(){XJ("WebGLRenderer: Context Restored."),u=!1;let R=H8.autoReset,j=F0.enabled,g=F0.autoUpdate,v=F0.needsUpdate,y=F0.type;c(),H8.autoReset=R,F0.enabled=j,F0.autoUpdate=g,F0.needsUpdate=v,F0.type=y}function w0(R){C0("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function S0(R){let j=R.target;j.removeEventListener("dispose",S0),k8(j)}function k8(R){r0(R),I0.remove(R)}function r0(R){let j=I0.get(R).programs;if(j!==void 0){if(j.forEach(function(g){e.releaseProgram(g)}),R.isShaderMaterial)e.releaseShaderCache(R)}}this.renderBufferDirect=function(R,j,g,v,y,E0){if(j===null)j=R8;let q0=y.isMesh&&y.matrixWorld.determinant()<0,X0=U$(R,j,g,v,y);U0.setMaterial(v,q0);let _0=g.index,L0=1;if(v.wireframe===!0){if(_0=o.getWireframeAttribute(g),_0===void 0)return;L0=2}let j0=g.drawRange,x0=g.attributes.position,V0=j0.start*L0,t0=(j0.start+j0.count)*L0;if(E0!==null)V0=Math.max(V0,E0.start*L0),t0=Math.min(t0,(E0.start+E0.count)*L0);if(_0!==null)V0=Math.max(V0,0),t0=Math.min(t0,_0.count);else if(x0!==void 0&&x0!==null)V0=Math.max(V0,0),t0=Math.min(t0,x0.count);let X8=t0-V0;if(X8<0||X8===1/0)return;C.setup(y,v,X0,g,_0);let K8,Q8=P0;if(_0!==null)K8=h.get(_0),Q8=h0,Q8.setIndex(K8);if(y.isMesh)if(v.wireframe===!0)U0.setLineWidth(v.wireframeLinewidth*G8()),Q8.setMode(S.LINES);else Q8.setMode(S.TRIANGLES);else if(y.isLine){let M8=v.linewidth;if(M8===void 0)M8=1;if(U0.setLineWidth(M8*G8()),y.isLineSegments)Q8.setMode(S.LINES);else if(y.isLineLoop)Q8.setMode(S.LINE_LOOP);else Q8.setMode(S.LINE_STRIP)}else if(y.isPoints)Q8.setMode(S.POINTS);else if(y.isSprite)Q8.setMode(S.TRIANGLES);if(y.isBatchedMesh)if(!m0.get("WEBGL_multi_draw")){let{_multiDrawStarts:M8,_multiDrawCounts:D0,_multiDrawCount:f8}=y,u0=_0?h.get(_0).bytesPerElement:1,y8=I0.get(v).currentProgram.getUniforms();for(let r8=0;r8<f8;r8++)y8.setValue(S,"_gl_DrawID",r8),Q8.render(M8[r8]/u0,D0[r8])}else Q8.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)Q8.renderInstances(V0,X8,y.count);else if(g.isInstancedBufferGeometry){let M8=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,D0=Math.min(g.instanceCount,M8);Q8.renderInstances(V0,X8,D0)}else Q8.render(V0,X8)};function a8(R,j,g){if(R.transparent===!0&&R.side===e8&&R.forceSinglePass===!1)R.side=T8,R.needsUpdate=!0,u7(R,j,g),R.side=E7,R.needsUpdate=!0,u7(R,j,g),R.side=e8;else u7(R,j,g)}this.compile=function(R,j,g=null){if(g===null)g=R;if(T=s.get(g),T.init(j),P.push(T),g.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}}),R!==g)R.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}});T.setupLights();let v=new Set;return R.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let E0=y.material;if(E0)if(Array.isArray(E0))for(let q0=0;q0<E0.length;q0++){let X0=E0[q0];a8(X0,g,y),v.add(X0)}else a8(E0,g,y),v.add(E0)}),T=P.pop(),v},this.compileAsync=function(R,j,g=null){let v=this.compile(R,j,g);return new Promise((y)=>{function E0(){if(v.forEach(function(q0){if(I0.get(q0).currentProgram.isReady())v.delete(q0)}),v.size===0){y(R);return}setTimeout(E0,10)}if(m0.get("KHR_parallel_shader_compile")!==null)E0();else setTimeout(E0,10)})};let u8=null;function Y$(R){if(u8)u8(R)}function nJ(){P6.stop()}function sJ(){P6.start()}let P6=new nQ;if(P6.setAnimationLoop(Y$),typeof self<"u")P6.setContext(self);this.setAnimationLoop=function(R){u8=R,J0.setAnimationLoop(R),R===null?P6.stop():P6.start()},J0.addEventListener("sessionstart",nJ),J0.addEventListener("sessionend",sJ),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){C0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;if(I!==null)I.renderStart(R,j);let g=J0.enabled===!0&&J0.isPresenting===!0,v=O!==null&&(f===null||g)&&O.begin(V,f);if(R.matrixWorldAutoUpdate===!0)R.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(J0.enabled===!0&&J0.isPresenting===!0&&(O===null||O.isCompositing()===!1)){if(J0.cameraAutoUpdate===!0)J0.updateCamera(j);j=J0.getCamera()}if(R.isScene===!0)R.onBeforeRender(V,R,j,f);if(T=s.get(R,P.length),T.init(j),T.state.textureUnits=M.getTextureUnits(),P.push(T),e0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),n0.setFromProjectionMatrix(e0,YJ,j.reversedDepth),p0=this.localClippingEnabled,b0=Z0.init(this.clippingPlanes,p0),B=m.get(R,A.length),B.init(),A.push(B),J0.enabled===!0&&J0.isPresenting===!0){let q0=V.xr.getDepthSensingMesh();if(q0!==null)p9(q0,j,-1/0,V.sortObjects)}if(p9(R,j,0,V.sortObjects),B.finish(),V.sortObjects===!0)B.sort(n,G0);if(_8=J0.enabled===!1||J0.isPresenting===!1||J0.hasDepthSensing()===!1,_8)$0.addToRenderList(B,R);if(this.info.render.frame++,b0===!0)Z0.beginShadows();let y=T.state.shadowsArray;if(F0.render(y,R,j),b0===!0)Z0.endShadows();if(this.info.autoReset===!0)this.info.reset();if((v&&O.hasRenderPass())===!1){let{opaque:q0,transmissive:X0}=B;if(T.setupLights(),j.isArrayCamera){let _0=j.cameras;if(X0.length>0)for(let L0=0,j0=_0.length;L0<j0;L0++){let x0=_0[L0];oJ(q0,X0,R,x0)}if(_8)$0.render(R);for(let L0=0,j0=_0.length;L0<j0;L0++){let x0=_0[L0];iJ(B,R,x0,x0.viewport)}}else{if(X0.length>0)oJ(q0,X0,R,j);if(_8)$0.render(R);iJ(B,R,j)}}if(f!==null&&i===0)M.updateMultisampleRenderTarget(f),M.updateRenderTargetMipmap(f);if(v)O.end(V);if(R.isScene===!0)R.onAfterRender(V,R,j);if(C.resetDefaultState(),d=-1,x=null,P.pop(),P.length>0){if(T=P[P.length-1],M.setTextureUnits(T.state.textureUnits),b0===!0)Z0.setGlobalState(V.clippingPlanes,T.state.camera)}else T=null;if(A.pop(),A.length>0)B=A[A.length-1];else B=null;if(I!==null)I.renderEnd()};function p9(R,j,g,v){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)g=R.renderOrder;else if(R.isLOD){if(R.autoUpdate===!0)R.update(j)}else if(R.isLightProbeGrid)T.pushLightProbeGrid(R);else if(R.isLight){if(T.pushLight(R),R.castShadow)T.pushShadow(R)}else if(R.isSprite){if(!R.frustumCulled||n0.intersectsSprite(R)){if(v)f0.setFromMatrixPosition(R.matrixWorld).applyMatrix4(e0);let q0=r.update(R),X0=R.material;if(X0.visible)B.push(R,q0,X0,g,f0.z,null)}}else if(R.isMesh||R.isLine||R.isPoints){if(!R.frustumCulled||n0.intersectsObject(R)){let q0=r.update(R),X0=R.material;if(v){if(R.boundingSphere!==void 0){if(R.boundingSphere===null)R.computeBoundingSphere();f0.copy(R.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();f0.copy(q0.boundingSphere.center)}f0.applyMatrix4(R.matrixWorld).applyMatrix4(e0)}if(Array.isArray(X0)){let _0=q0.groups;for(let L0=0,j0=_0.length;L0<j0;L0++){let x0=_0[L0],V0=X0[x0.materialIndex];if(V0&&V0.visible)B.push(R,q0,V0,g,f0.z,x0)}}else if(X0.visible)B.push(R,q0,X0,g,f0.z,null)}}}let E0=R.children;for(let q0=0,X0=E0.length;q0<X0;q0++)p9(E0[q0],j,g,v)}function iJ(R,j,g,v){let{opaque:y,transmissive:E0,transparent:q0}=R;if(T.setupLightsView(g),b0===!0)Z0.setGlobalState(V.clippingPlanes,g);if(v)U0.viewport(p.copy(v));if(y.length>0)d7(y,j,g);if(E0.length>0)d7(E0,j,g);if(q0.length>0)d7(q0,j,g);U0.buffers.depth.setTest(!0),U0.buffers.depth.setMask(!0),U0.buffers.color.setMask(!0),U0.setPolygonOffset(!1)}function oJ(R,j,g,v){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[v.id]===void 0){let V0=m0.has("EXT_color_buffer_half_float")||m0.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[v.id]=new l8(1,1,{generateMipmaps:!0,type:V0?k6:o8,minFilter:v6,samples:Math.max(4,c0.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let E0=T.state.transmissionRenderTarget[v.id],q0=v.viewport||p;E0.setSize(q0.z*V.transmissionResolutionScale,q0.w*V.transmissionResolutionScale);let X0=V.getRenderTarget(),_0=V.getActiveCubeFace(),L0=V.getActiveMipmapLevel();if(V.setRenderTarget(E0),V.getClearColor(N0),B0=V.getClearAlpha(),B0<1)V.setClearColor(16777215,0.5);if(V.clear(),_8)$0.render(g);let j0=V.toneMapping;V.toneMapping=i8;let x0=v.viewport;if(v.viewport!==void 0)v.viewport=void 0;if(T.setupLightsView(v),b0===!0)Z0.setGlobalState(V.clippingPlanes,v);if(d7(R,g,v),M.updateMultisampleRenderTarget(E0),M.updateRenderTargetMipmap(E0),m0.has("WEBGL_multisampled_render_to_texture")===!1){let V0=!1;for(let t0=0,X8=j.length;t0<X8;t0++){let K8=j[t0],{object:Q8,geometry:M8,material:D0,group:f8}=K8;if(D0.side===e8&&Q8.layers.test(v.layers)){let u0=D0.side;D0.side=T8,D0.needsUpdate=!0,aJ(Q8,g,v,M8,D0,f8),D0.side=u0,D0.needsUpdate=!0,V0=!0}}if(V0===!0)M.updateMultisampleRenderTarget(E0),M.updateRenderTargetMipmap(E0)}if(V.setRenderTarget(X0,_0,L0),V.setClearColor(N0,B0),x0!==void 0)v.viewport=x0;V.toneMapping=j0}function d7(R,j,g){let v=j.isScene===!0?j.overrideMaterial:null;for(let y=0,E0=R.length;y<E0;y++){let q0=R[y],{object:X0,geometry:_0,group:L0}=q0,j0=q0.material;if(j0.allowOverride===!0&&v!==null)j0=v;if(X0.layers.test(g.layers))aJ(X0,j,g,_0,j0,L0)}}function aJ(R,j,g,v,y,E0){if(R.onBeforeRender(V,j,g,v,y,E0),R.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),y.onBeforeRender(V,j,g,v,R,E0),y.transparent===!0&&y.side===e8&&y.forceSinglePass===!1)y.side=T8,y.needsUpdate=!0,V.renderBufferDirect(g,j,v,y,R,E0),y.side=E7,y.needsUpdate=!0,V.renderBufferDirect(g,j,v,y,R,E0),y.side=e8;else V.renderBufferDirect(g,j,v,y,R,E0);R.onAfterRender(V,j,g,v,y,E0)}function u7(R,j,g){if(j.isScene!==!0)j=R8;let v=I0.get(R),y=T.state.lights,E0=T.state.shadowsArray,q0=y.state.version,X0=e.getParameters(R,y.state,E0,j,g,T.state.lightProbeGridArray),_0=e.getProgramCacheKey(X0),L0=v.programs;v.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,v.fog=j.fog;let j0=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;if(v.envMap=q.get(R.envMap||v.environment,j0),v.envMapRotation=v.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,L0===void 0)R.addEventListener("dispose",S0),L0=new Map,v.programs=L0;let x0=L0.get(_0);if(x0!==void 0){if(v.currentProgram===x0&&v.lightsStateVersion===q0)return tJ(R,X0),x0}else{if(X0.uniforms=e.getUniforms(R),I!==null&&R.isNodeMaterial)I.build(R,g,X0);R.onBeforeCompile(X0,V),x0=e.acquireProgram(X0,_0),L0.set(_0,x0),v.uniforms=X0.uniforms}let V0=v.uniforms;if(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)V0.clippingPlanes=Z0.uniform;if(tJ(R,X0),v.needsLights=G$(R),v.lightsStateVersion=q0,v.needsLights)V0.ambientLightColor.value=y.state.ambient,V0.lightProbe.value=y.state.probe,V0.directionalLights.value=y.state.directional,V0.directionalLightShadows.value=y.state.directionalShadow,V0.spotLights.value=y.state.spot,V0.spotLightShadows.value=y.state.spotShadow,V0.rectAreaLights.value=y.state.rectArea,V0.ltc_1.value=y.state.rectAreaLTC1,V0.ltc_2.value=y.state.rectAreaLTC2,V0.pointLights.value=y.state.point,V0.pointLightShadows.value=y.state.pointShadow,V0.hemisphereLights.value=y.state.hemi,V0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,V0.spotLightMatrix.value=y.state.spotLightMatrix,V0.spotLightMap.value=y.state.spotLightMap,V0.pointShadowMatrix.value=y.state.pointShadowMatrix;return v.lightProbeGrid=T.state.lightProbeGridArray.length>0,v.currentProgram=x0,v.uniformsList=null,x0}function rJ(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=m7.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function tJ(R,j){let g=I0.get(R);g.outputColorSpace=j.outputColorSpace,g.batching=j.batching,g.batchingColor=j.batchingColor,g.instancing=j.instancing,g.instancingColor=j.instancingColor,g.instancingMorph=j.instancingMorph,g.skinning=j.skinning,g.morphTargets=j.morphTargets,g.morphNormals=j.morphNormals,g.morphColors=j.morphColors,g.morphTargetsCount=j.morphTargetsCount,g.numClippingPlanes=j.numClippingPlanes,g.numIntersection=j.numClipIntersection,g.vertexAlphas=j.vertexAlphas,g.vertexTangents=j.vertexTangents,g.toneMapping=j.toneMapping}function X$(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;z.setFromMatrixPosition(j.matrixWorld);for(let g=0,v=R.length;g<v;g++){let y=R[g];if(y.texture!==null&&y.boundingBox.containsPoint(z))return y}return null}function U$(R,j,g,v,y){if(j.isScene!==!0)j=R8;M.resetTextureUnits();let E0=j.fog,q0=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?j.environment:null,X0=f===null?V.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:l0.workingColorSpace,_0=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,L0=q.get(v.envMap||q0,_0),j0=v.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,x0=!!g.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),V0=!!g.morphAttributes.position,t0=!!g.morphAttributes.normal,X8=!!g.morphAttributes.color,K8=i8;if(v.toneMapped){if(f===null||f.isXRRenderTarget===!0)K8=V.toneMapping}let Q8=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,M8=Q8!==void 0?Q8.length:0,D0=I0.get(v),f8=T.state.lights;if(b0===!0){if(p0===!0||R!==x){let Z8=R===x&&v.id===d;Z0.setState(v,R,Z8)}}let u0=!1;if(v.version===D0.__version){if(D0.needsLights&&D0.lightsStateVersion!==f8.state.version)u0=!0;else if(D0.outputColorSpace!==X0)u0=!0;else if(y.isBatchedMesh&&D0.batching===!1)u0=!0;else if(!y.isBatchedMesh&&D0.batching===!0)u0=!0;else if(y.isBatchedMesh&&D0.batchingColor===!0&&y.colorTexture===null)u0=!0;else if(y.isBatchedMesh&&D0.batchingColor===!1&&y.colorTexture!==null)u0=!0;else if(y.isInstancedMesh&&D0.instancing===!1)u0=!0;else if(!y.isInstancedMesh&&D0.instancing===!0)u0=!0;else if(y.isSkinnedMesh&&D0.skinning===!1)u0=!0;else if(!y.isSkinnedMesh&&D0.skinning===!0)u0=!0;else if(y.isInstancedMesh&&D0.instancingColor===!0&&y.instanceColor===null)u0=!0;else if(y.isInstancedMesh&&D0.instancingColor===!1&&y.instanceColor!==null)u0=!0;else if(y.isInstancedMesh&&D0.instancingMorph===!0&&y.morphTexture===null)u0=!0;else if(y.isInstancedMesh&&D0.instancingMorph===!1&&y.morphTexture!==null)u0=!0;else if(D0.envMap!==L0)u0=!0;else if(v.fog===!0&&D0.fog!==E0)u0=!0;else if(D0.numClippingPlanes!==void 0&&(D0.numClippingPlanes!==Z0.numPlanes||D0.numIntersection!==Z0.numIntersection))u0=!0;else if(D0.vertexAlphas!==j0)u0=!0;else if(D0.vertexTangents!==x0)u0=!0;else if(D0.morphTargets!==V0)u0=!0;else if(D0.morphNormals!==t0)u0=!0;else if(D0.morphColors!==X8)u0=!0;else if(D0.toneMapping!==K8)u0=!0;else if(D0.morphTargetsCount!==M8)u0=!0;else if(!!D0.lightProbeGrid!==T.state.lightProbeGridArray.length>0)u0=!0}else u0=!0,D0.__version=v.version;let y8=D0.currentProgram;if(u0===!0){if(y8=u7(v,j,y),I&&v.isNodeMaterial)I.onUpdateProgram(v,y8,D0)}let r8=!1,q6=!1,n6=!1,$8=y8.getUniforms(),U8=D0.uniforms;if(U0.useProgram(y8.program))r8=!0,q6=!0,n6=!0;if(v.id!==d)d=v.id,q6=!0;if(D0.needsLights){let Z8=X$(T.state.lightProbeGridArray,y);if(D0.lightProbeGrid!==Z8)D0.lightProbeGrid=Z8,q6=!0}if(r8||x!==R){if(U0.buffers.depth.getReversed()&&R.reversedDepth!==!0)R._reversedDepth=!0,R.updateProjectionMatrix();$8.setValue(S,"projectionMatrix",R.projectionMatrix),$8.setValue(S,"viewMatrix",R.matrixWorldInverse);let R6=$8.map.cameraPosition;if(R6!==void 0)R6.setValue(S,J8.setFromMatrixPosition(R.matrixWorld));if(c0.logarithmicDepthBuffer)$8.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2));if(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)$8.setValue(S,"isOrthographic",R.isOrthographicCamera===!0);if(x!==R)x=R,q6=!0,n6=!0}if(D0.needsLights){if(f8.state.directionalShadowMap.length>0)$8.setValue(S,"directionalShadowMap",f8.state.directionalShadowMap,M);if(f8.state.spotShadowMap.length>0)$8.setValue(S,"spotShadowMap",f8.state.spotShadowMap,M);if(f8.state.pointShadowMap.length>0)$8.setValue(S,"pointShadowMap",f8.state.pointShadowMap,M)}if(y.isSkinnedMesh){$8.setOptional(S,y,"bindMatrix"),$8.setOptional(S,y,"bindMatrixInverse");let Z8=y.skeleton;if(Z8){if(Z8.boneTexture===null)Z8.computeBoneTexture();$8.setValue(S,"boneTexture",Z8.boneTexture,M)}}if(y.isBatchedMesh){if($8.setOptional(S,y,"batchingTexture"),$8.setValue(S,"batchingTexture",y._matricesTexture,M),$8.setOptional(S,y,"batchingIdTexture"),$8.setValue(S,"batchingIdTexture",y._indirectTexture,M),$8.setOptional(S,y,"batchingColorTexture"),y._colorsTexture!==null)$8.setValue(S,"batchingColorTexture",y._colorsTexture,M)}let F6=g.morphAttributes;if(F6.position!==void 0||F6.normal!==void 0||F6.color!==void 0)K0.update(y,g,y8);if(q6||D0.receiveShadow!==y.receiveShadow)D0.receiveShadow=y.receiveShadow,$8.setValue(S,"receiveShadow",y.receiveShadow);if((v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial)&&v.envMap===null&&j.environment!==null)U8.envMapIntensity.value=j.environmentIntensity;if(U8.dfgLUT!==void 0)U8.dfgLUT.value=fY();if(q6){if($8.setValue(S,"toneMappingExposure",V.toneMappingExposure),D0.needsLights)E$(U8,n6);if(E0&&v.fog===!0)H0.refreshFogUniforms(U8,E0);if(H0.refreshMaterialUniforms(U8,v,g0,i0,T.state.transmissionRenderTarget[R.id]),D0.needsLights&&D0.lightProbeGrid){let Z8=D0.lightProbeGrid;U8.probesSH.value=Z8.texture,U8.probesMin.value.copy(Z8.boundingBox.min),U8.probesMax.value.copy(Z8.boundingBox.max),U8.probesResolution.value.copy(Z8.resolution)}m7.upload(S,rJ(D0),U8,M)}if(v.isShaderMaterial&&v.uniformsNeedUpdate===!0)m7.upload(S,rJ(D0),U8,M),v.uniformsNeedUpdate=!1;if(v.isSpriteMaterial)$8.setValue(S,"center",y.center);if($8.setValue(S,"modelViewMatrix",y.modelViewMatrix),$8.setValue(S,"normalMatrix",y.normalMatrix),$8.setValue(S,"modelMatrix",y.matrixWorld),v.uniformsGroups!==void 0){let Z8=v.uniformsGroups;for(let R6=0,s6=Z8.length;R6<s6;R6++){let eJ=Z8[R6];W0.update(eJ,y8),W0.bind(eJ,y8)}}return y8}function E$(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function G$(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(R,j,g){let v=I0.get(R);if(v.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,v.__autoAllocateDepthBuffer===!1)v.__useRenderToTexture=!1;I0.get(R.texture).__webglTexture=j,I0.get(R.depthTexture).__webglTexture=v.__autoAllocateDepthBuffer?void 0:g,v.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let g=I0.get(R);g.__webglFramebuffer=j,g.__useDefaultFramebuffer=j===void 0};let k$=S.createFramebuffer();this.setRenderTarget=function(R,j=0,g=0){f=R,l=j,i=g;let v=null,y=!1,E0=!1;if(R){let X0=I0.get(R);if(X0.__useDefaultFramebuffer!==void 0){U0.bindFramebuffer(S.FRAMEBUFFER,X0.__webglFramebuffer),p.copy(R.viewport),a.copy(R.scissor),Q0=R.scissorTest,U0.viewport(p),U0.scissor(a),U0.setScissorTest(Q0),d=-1;return}else if(X0.__webglFramebuffer===void 0)M.setupRenderTarget(R);else if(X0.__hasExternalTextures)M.rebindTextures(R,I0.get(R.texture).__webglTexture,I0.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let j0=R.depthTexture;if(X0.__boundDepthTexture!==j0){if(j0!==null&&I0.has(j0)&&(R.width!==j0.image.width||R.height!==j0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(R)}}let _0=R.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)E0=!0;let L0=I0.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget){if(Array.isArray(L0[j]))v=L0[j][g];else v=L0[j];y=!0}else if(R.samples>0&&M.useMultisampledRTT(R)===!1)v=I0.get(R).__webglMultisampledFramebuffer;else if(Array.isArray(L0))v=L0[g];else v=L0;p.copy(R.viewport),a.copy(R.scissor),Q0=R.scissorTest}else p.copy(M0).multiplyScalar(g0).floor(),a.copy(k0).multiplyScalar(g0).floor(),Q0=z0;if(g!==0)v=k$;if(U0.bindFramebuffer(S.FRAMEBUFFER,v))U0.drawBuffers(R,v);if(U0.viewport(p),U0.scissor(a),U0.setScissorTest(Q0),y){let X0=I0.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+j,X0.__webglTexture,g)}else if(E0){let X0=j;for(let _0=0;_0<R.textures.length;_0++){let L0=I0.get(R.textures[_0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+_0,L0.__webglTexture,g,X0)}}else if(R!==null&&g!==0){let X0=I0.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,X0.__webglTexture,g)}d=-1},this.readRenderTargetPixels=function(R,j,g,v,y,E0,q0,X0=0){if(!(R&&R.isWebGLRenderTarget)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _0=I0.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&q0!==void 0)_0=_0[q0];if(_0){U0.bindFramebuffer(S.FRAMEBUFFER,_0);try{let L0=R.textures[X0],j0=L0.format,x0=L0.type;if(R.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+X0);if(!c0.textureFormatReadable(j0)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!c0.textureTypeReadable(x0)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=R.width-v&&(g>=0&&g<=R.height-y))S.readPixels(j,g,v,y,y0.convert(j0),y0.convert(x0),E0)}finally{let L0=f!==null?I0.get(f).__webglFramebuffer:null;U0.bindFramebuffer(S.FRAMEBUFFER,L0)}}},this.readRenderTargetPixelsAsync=async function(R,j,g,v,y,E0,q0,X0=0){if(!(R&&R.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _0=I0.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&q0!==void 0)_0=_0[q0];if(_0)if(j>=0&&j<=R.width-v&&(g>=0&&g<=R.height-y)){U0.bindFramebuffer(S.FRAMEBUFFER,_0);let L0=R.textures[X0],j0=L0.format,x0=L0.type;if(R.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+X0);if(!c0.textureFormatReadable(j0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!c0.textureTypeReadable(x0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let V0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,V0),S.bufferData(S.PIXEL_PACK_BUFFER,E0.byteLength,S.STREAM_READ),S.readPixels(j,g,v,y,y0.convert(j0),y0.convert(x0),0);let t0=f!==null?I0.get(f).__webglFramebuffer:null;U0.bindFramebuffer(S.FRAMEBUFFER,t0);let X8=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await OQ(S,X8,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,V0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,E0),S.deleteBuffer(V0),S.deleteSync(X8),E0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,g=0){let v=Math.pow(2,-g),y=Math.floor(R.image.width*v),E0=Math.floor(R.image.height*v),q0=j!==null?j.x:0,X0=j!==null?j.y:0;M.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,g,0,0,q0,X0,y,E0),U0.unbindTexture()};let N$=S.createFramebuffer(),D$=S.createFramebuffer();if(this.copyTextureToTexture=function(R,j,g=null,v=null,y=0,E0=0){let q0,X0,_0,L0,j0,x0,V0,t0,X8,K8=R.isCompressedTexture?R.mipmaps[E0]:R.image;if(g!==null)q0=g.max.x-g.min.x,X0=g.max.y-g.min.y,_0=g.isBox3?g.max.z-g.min.z:1,L0=g.min.x,j0=g.min.y,x0=g.isBox3?g.min.z:0;else{let U8=Math.pow(2,-y);if(q0=Math.floor(K8.width*U8),X0=Math.floor(K8.height*U8),R.isDataArrayTexture)_0=K8.depth;else if(R.isData3DTexture)_0=Math.floor(K8.depth*U8);else _0=1;L0=0,j0=0,x0=0}if(v!==null)V0=v.x,t0=v.y,X8=v.z;else V0=0,t0=0,X8=0;let Q8=y0.convert(j.format),M8=y0.convert(j.type),D0;if(j.isData3DTexture)M.setTexture3D(j,0),D0=S.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)M.setTexture2DArray(j,0),D0=S.TEXTURE_2D_ARRAY;else M.setTexture2D(j,0),D0=S.TEXTURE_2D;U0.activeTexture(S.TEXTURE0),U0.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,j.flipY),U0.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U0.pixelStorei(S.UNPACK_ALIGNMENT,j.unpackAlignment);let f8=U0.getParameter(S.UNPACK_ROW_LENGTH),u0=U0.getParameter(S.UNPACK_IMAGE_HEIGHT),y8=U0.getParameter(S.UNPACK_SKIP_PIXELS),r8=U0.getParameter(S.UNPACK_SKIP_ROWS),q6=U0.getParameter(S.UNPACK_SKIP_IMAGES);U0.pixelStorei(S.UNPACK_ROW_LENGTH,K8.width),U0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,K8.height),U0.pixelStorei(S.UNPACK_SKIP_PIXELS,L0),U0.pixelStorei(S.UNPACK_SKIP_ROWS,j0),U0.pixelStorei(S.UNPACK_SKIP_IMAGES,x0);let n6=R.isDataArrayTexture||R.isData3DTexture,$8=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let U8=I0.get(R),F6=I0.get(j),Z8=I0.get(U8.__renderTarget),R6=I0.get(F6.__renderTarget);U0.bindFramebuffer(S.READ_FRAMEBUFFER,Z8.__webglFramebuffer),U0.bindFramebuffer(S.DRAW_FRAMEBUFFER,R6.__webglFramebuffer);for(let s6=0;s6<_0;s6++){if(n6)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,I0.get(R).__webglTexture,y,x0+s6),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,I0.get(j).__webglTexture,E0,X8+s6);S.blitFramebuffer(L0,j0,q0,X0,V0,t0,q0,X0,S.DEPTH_BUFFER_BIT,S.NEAREST)}U0.bindFramebuffer(S.READ_FRAMEBUFFER,null),U0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(y!==0||R.isRenderTargetTexture||I0.has(R)){let U8=I0.get(R),F6=I0.get(j);U0.bindFramebuffer(S.READ_FRAMEBUFFER,N$),U0.bindFramebuffer(S.DRAW_FRAMEBUFFER,D$);for(let Z8=0;Z8<_0;Z8++){if(n6)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,U8.__webglTexture,y,x0+Z8);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,U8.__webglTexture,y);if($8)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,F6.__webglTexture,E0,X8+Z8);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,F6.__webglTexture,E0);if(y!==0)S.blitFramebuffer(L0,j0,q0,X0,V0,t0,q0,X0,S.COLOR_BUFFER_BIT,S.NEAREST);else if($8)S.copyTexSubImage3D(D0,E0,V0,t0,X8+Z8,L0,j0,q0,X0);else S.copyTexSubImage2D(D0,E0,V0,t0,L0,j0,q0,X0)}U0.bindFramebuffer(S.READ_FRAMEBUFFER,null),U0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if($8)if(R.isDataTexture||R.isData3DTexture)S.texSubImage3D(D0,E0,V0,t0,X8,q0,X0,_0,Q8,M8,K8.data);else if(j.isCompressedArrayTexture)S.compressedTexSubImage3D(D0,E0,V0,t0,X8,q0,X0,_0,Q8,K8.data);else S.texSubImage3D(D0,E0,V0,t0,X8,q0,X0,_0,Q8,M8,K8);else if(R.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,E0,V0,t0,q0,X0,Q8,M8,K8.data);else if(R.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,E0,V0,t0,K8.width,K8.height,Q8,K8.data);else S.texSubImage2D(S.TEXTURE_2D,E0,V0,t0,q0,X0,Q8,M8,K8);if(U0.pixelStorei(S.UNPACK_ROW_LENGTH,f8),U0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,u0),U0.pixelStorei(S.UNPACK_SKIP_PIXELS,y8),U0.pixelStorei(S.UNPACK_SKIP_ROWS,r8),U0.pixelStorei(S.UNPACK_SKIP_IMAGES,q6),E0===0&&j.generateMipmaps)S.generateMipmap(D0);U0.unbindTexture()},this.initRenderTarget=function(R){if(I0.get(R).__webglFramebuffer===void 0)M.setupRenderTarget(R)},this.initTexture=function(R){if(R.isCubeTexture)M.setTextureCube(R,0);else if(R.isData3DTexture)M.setTexture3D(R,0);else if(R.isDataArrayTexture||R.isCompressedArrayTexture)M.setTexture2DArray(R,0);else M.setTexture2D(R,0);U0.unbindTexture()},this.resetState=function(){l=0,i=0,f=null,U0.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return YJ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}var A8=(J)=>`assets/wiki/${J}`,M7=[{id:"hubot",slug:"hubot",wikiTitle:"Hubot",year:"c.1983",sortYear:1983,title:"Hubot",subtitle:"The butler robot with an Atari inside",blurb:"A 50kg wheeled companion with a CP/M computer, a voice synthesizer, an Atari 2600, and a Polaroid sonar head. Priced at $3,495, it scanned rooms, spoke 1,200 words, and played Defender.",tags:["Robot","Voice","Home Computer"],image:A8("hubot-hardware.webp"),feature:!0},{id:"power-glove",slug:"nintendo-power-glove",wikiTitle:"Nintendo Power Glove",year:"1989",sortYear:1989,title:"Power Glove",subtitle:"A $10,000 NASA glove, shrunk to $90",blurb:`Mattel had nine months to turn VPL's research-grade DataGlove into a toy. It sold 1.3 million units. "I love the Power Glove. It's so bad."`,tags:["Gesture","Gaming","Wearable"],image:A8("power-glove-1.jpg"),span:2},{id:"atari-mindlink",slug:"atari-mindlink",wikiTitle:"Atari Mindlink",year:"1984",sortYear:1984,title:"Atari Mindlink",subtitle:"Mind control (actually eyebrow control)",blurb:"A headband that read forehead muscle tension and called it telepathy. Demoed at CES, then canceled. Testers got headaches from wiggling their brows.",tags:["BCI","Biofeedback","Vaporware"],image:A8("atari-mindlink-2.jpg")},{id:"videoplace",slug:"videoplace",wikiTitle:"VIDEOPLACE / Artificial Reality",year:"1970s–80s",sortYear:1978,title:"VIDEOPLACE",subtitle:"Artificial reality without goggles",blurb:"Myron Krueger put people in shared silhouette worlds using only cameras and projectors. No headsets, no gloves — just your body, glowing on screen.",tags:["Gesture","Computer Vision","Art"],image:A8("videoplace-mediaartnet.jpg")},{id:"p300-speller",slug:"p300-speller",wikiTitle:"The P300 Speller",year:"1988",sortYear:1988,title:"P300 Speller",subtitle:"Talking off the top of your head",blurb:"The first BCI that let you type with brainwaves alone. Focus on a letter in a 6×6 grid; the system reads the P300 spike when your target flashes. 95% accuracy at 12 bits/min.",tags:["Brain Control","BCI","EEG"],image:A8("p300-rowcolumn.webp")},{id:"vpl",slug:"vpl-research",wikiTitle:"VPL Research EyePhone & DataGlove",year:"1980s",sortYear:1985,title:"VPL EyePhone & DataGlove",subtitle:"The birth of commercial VR",blurb:"Jaron Lanier's fiber-optic glove and Fresnel-lens headset defined the visual language of virtual reality. A full system cost $250,000 and ran at 5 fps.",tags:["VR","Gesture","Wearables"],image:A8("vpl-eyephone-demo.jpg"),span:2},{id:"virtuality",slug:"virtuality",wikiTitle:"Virtuality Arcade VR System",year:"1990",sortYear:1990,title:"Virtuality",subtitle:"Networked VR in an arcade pod",blurb:"Amiga 3000s, camcorder LCDs, and magnetic tracking. Dactyl Nightmare let four players fight in cyberspace years before Doom.",tags:["VR","Arcade","Multiplayer"],image:A8("virtuality-1000cs-1.jpg")},{id:"eyetap",slug:"eyetap",wikiTitle:"Steve Mann’s EyeTap / Wearable Computing",year:"1980s",sortYear:1985,title:"EyeTap",subtitle:"Wearable computing before it had a name",blurb:"Steve Mann built camera-display eyeglasses in high school. The computer mediates reality itself — not a HUD, but a reversible eye.",tags:["Wearable","AR","Sousveillance"],image:A8("eyetap-mann-glass-2.jpg")},{id:"digital-desk",slug:"digital-desk",wikiTitle:"The Digital Desk",year:"1991",sortYear:1991,title:"The Digital Desk",subtitle:"Paper meets projector",blurb:"Pierre Wellner pointed a camera and projector at an ordinary desk. Point at printed numbers; the desk calculates and projects the answer onto the paper.",tags:["Tangible","AR","Projection"],image:A8("digital-desk-2.jpg")},{id:"mandala",slug:"mandala",wikiTitle:"Mandala / The Vivid Group Gesture VR System",year:"1986",sortYear:1986,title:"Mandala",subtitle:"Full-body VR on an Amiga",blurb:"The Vivid Group put your live video silhouette inside a virtual world. Punch objects, play drums, dance — 30fps, no controller, on an Amiga 1000.",tags:["Gesture","VR","Computer Vision"],image:A8("mandala-siggraph-1.jpg")},{id:"put-that-there",slug:"put-that-there",wikiTitle:"Put-That-There",year:"1980",sortYear:1980,title:"Put-That-There",subtitle:"Voice + gesture at the graphics interface",blurb:"MIT's Architecture Machine Group let you move shapes by speaking and pointing. It asked clarifying questions when it couldn't understand you.",tags:["Voice","Gesture","Multimodal"],image:A8("put-that-there-video.jpg")},{id:"speak-spell",slug:"speak-spell",wikiTitle:"Texas Instruments Speak & Spell",year:"1978",sortYear:1978,title:"Speak & Spell",subtitle:"The first talking chip",blurb:"Texas Instruments put a 10th-order LPC vocal tract model on a single chip. It taught kids to spell, became an IEEE Milestone, and soundtracked Kraftwerk.",tags:["Voice","Speech Synthesis","Toy"],image:A8("speak-spell-1.jpg")},{id:"kurzweil",slug:"kurzweil-reading-machine",wikiTitle:"Kurzweil Reading Machine",year:"1976",sortYear:1976,title:"Kurzweil Reading Machine",subtitle:"Print made audible for the blind",blurb:"The first omni-font OCR plus a CCD scanner plus a speech synthesizer. Walter Cronkite read his sign-off with it. Stevie Wonder took the first unit home.",tags:["Accessibility","OCR","Text-to-Speech"],image:A8("kurzweil-reading-machine-1.jpg")},{id:"active-badge",slug:"active-badge",wikiTitle:"Olivetti Active Badge",year:"1992",sortYear:1992,title:"Active Badge",subtitle:"Your location, broadcast every 10 seconds",blurb:"Olivetti Research made an IR badge that told the building where you were. Phones followed you. Desktops moved with you. Privacy was born as a question.",tags:["Wearable","Location-Aware","Ubicomp"],image:A8("active-badge-1.gif")},{id:"twiddler",slug:"twiddler",wikiTitle:"Handykey Twiddler Chord Keyboard",year:"1992",sortYear:1992,title:"Twiddler",subtitle:"A keyboard in one hand",blurb:"A chording keypad you hold like a grenade. MIT wearable researchers typed 60 wpm while walking. Still in production 33 years later.",tags:["Input","Chorded","One-Handed"],image:A8("twiddler-original-1.png")}],K$=M7.find((J)=>J.feature)??M7[0];xY(K$);yY();gY();bY();function bY(){let J=document.getElementById("hero-exhibit-count"),Q=document.getElementById("gallery-count");if(J)J.textContent=String(M7.length);if(Q)Q.textContent=`${M7.length} artifacts recovered`}function yY(){let J=document.getElementById("gallery-grid");if(!J)return;J.replaceChildren(...M7.map((Q)=>{let $=document.createElement("a");if($.className="exhibit-card",Q.span===2)$.classList.add("exhibit-card--wide");$.href=`./exhibits/${Q.slug}/`,$.setAttribute("aria-label",`${Q.title}, ${Q.year}`);let W=document.createElement("div");W.className="exhibit-card__media";let Z=document.createElement("img");Z.className="exhibit-card__image",Z.src=Q.image,Z.alt=`${Q.title} archival photograph`,Z.loading="lazy";let H=document.createElement("div");H.className="exhibit-card__image-glitch";let K=document.createElement("span");K.className="exhibit-card__year",K.textContent=Q.year,W.append(Z,H,K);let Y=document.createElement("div");Y.className="exhibit-card__body";let X=document.createElement("h3");X.className="exhibit-card__title",X.textContent=Q.title;let U=document.createElement("p");U.className="exhibit-card__subtitle",U.textContent=Q.subtitle;let k=document.createElement("div");return k.className="exhibit-card__tags",k.append(...Q.tags.map((D)=>{let E=document.createElement("span");return E.className="exhibit-card__tag",E.textContent=D,E})),Y.append(X,U,k),$.append(W,Y),$}))}function xY(J){let Q=document.getElementById("hero-feature-image"),$=document.getElementById("hero-feature-info");if(!Q||!$)return;Q.src=J.image,Q.alt=`${J.title} archival photograph`;let W=document.createElement("span");W.className="hero__feature-year",W.textContent=J.year;let Z=document.createElement("h2");Z.className="hero__feature-title",Z.textContent=J.title;let H=document.createElement("p");H.className="hero__feature-subtitle",H.textContent=J.blurb;let K=document.createElement("a");K.className="hero__feature-link",K.href=`./exhibits/${J.slug}/`,K.textContent="Inspect artifact",$.replaceChildren(W,Z,H,K)}function gY(){let J=document.getElementById("ambient-canvas");if(!J)return;let Q=window.matchMedia("(prefers-reduced-motion: reduce)"),$=new A9,W=new I8(45,1,0.1,100);W.position.set(0,0,5);let Z=new cJ({canvas:J,antialias:!0,alpha:!0});Z.setClearColor(0,0),Z.setPixelRatio(Math.min(window.devicePixelRatio,2));let H={uTime:{value:0},uGlitch:{value:0.1}},K=new h8({uniforms:H,transparent:!0,depthWrite:!1,blending:G7,vertexShader:`
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
    `}),Y=new j8(new y7(1.5,80,60),K);$.add(Y);let X=new j8(new x7(1.9,0.008,4,80),new F7({color:65403,transparent:!0,opacity:0.12,blending:G7}));X.rotation.x=Math.PI*0.5,$.add(X);function U(){let _=Math.max(1,window.innerWidth),L=Math.max(1,window.innerHeight);W.aspect=_/L,W.updateProjectionMatrix(),Z.setSize(_,L,!1)}let k=0;new ResizeObserver(()=>{cancelAnimationFrame(k),k=requestAnimationFrame(U)}).observe(J),U();let E=performance.now(),F=E;Z.setAnimationLoop(()=>{let _=performance.now(),L=(_-F)/1000,G=(_-E)/1000;E=_;let N=Q.matches?0.2:1;H.uTime.value=L,Y.rotation.y+=G*0.12*N,Y.rotation.x=Math.sin(L*0.3)*0.04*N,X.rotation.z=-L*0.06*N,Z.render($,W)})}
