(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"5TKp":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzYjdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWV4dGVybmFsLWxpbmsiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEwIiB5MT0iMTQiIHgyPSIyMSIgeTI9IjMiPjwvbGluZT48L3N2Zz4="},"69L3":function(e,t,a){e.exports={about:"styles-module--about--1gy_g",title:"styles-module--title--2B_k0",links:"styles-module--links--3KZOF",linksContainer:"styles-module--links-container--7a-jK",profile:"styles-module--profile--2jEFT",name:"styles-module--name--3kcoq"}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),l=i(a("8OQS")),o=i(a("pVnL")),d=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,I=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function k(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(I.has(e.target)){var t=I.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),I.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),I.set(e,t)),function(){a.unobserve(e),I.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+l+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,r(i),l):l})),z=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,I=e.itemProp,S=e.loading,k=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:x?1:0,transition:O?"opacity "+y+"ms":"none"},l),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&T,{},l,{},f),j={title:t,alt:this.state.isVisible?"":a,style:W,className:g,itemProp:I};if(m){var N=m,P=p(m);return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&T)}),P.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:N,generateSources:L}),P.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(z,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:I,loading:S,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:N}))}}))}if(h){var G=h,H=p(h),_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},O&&T)}),H.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:G,generateSources:L}),H.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:G,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(G),d.default.createElement(z,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:I,loading:S,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},H,{imageVariants:G}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});O.propTypes={resolutions:V,sizes:C,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=O;t.default=T},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),l=a("Z6vF"),o=a("czNK"),d=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),g=!r.ActiveXObject&&"ActiveXObject"in r,p=l.getWeak,m=Object.isExtensible,h=d.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=p(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(c(this,"WeakMap"),e,t)}},v=e.exports=a("4LiD")("WeakMap",b,y,d,!0,!0);f&&g&&(o((i=d.getConstructor(b,"WeakMap")).prototype,y),l.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!m(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,i){var r=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),l=a("9gX7"),o=a("SlkY"),d=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=d(5),g=d(6),p=0,m=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var d=e((function(e,i){l(e,d,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=i&&o(i,a,e[n],e)}));return i(d.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?m(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?m(c(this,t)).has(e):a&&u(a,this._i)}}),d},def:function(e,t,a){var i=r(n(t),!0);return!0===i?m(e).set(t,a):i[e._i]=a,e},ufstore:m}},bT9l:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));a("f3/d");var i=a("q1tI"),r=a.n(i),n=a("9eSz"),s=a.n(n),l=a("ntAx"),o=a("dmsj"),d=a("5TKp"),u=a.n(d),c=a("69L3"),f=a.n(c);t.default=function(e){var t=e.data,a=t.site.siteMetadata.social,i=a.twitter,n=a.linkedIn,d=a.github,c=a.email,g=t.file.childImageSharp.fluid;return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"About"}),r.a.createElement("div",{className:f.a.about},r.a.createElement("div",null,r.a.createElement(s.a,{className:f.a.profile,fluid:g,alt:"Jonas Gustavsson"}),r.a.createElement("h1",{className:f.a.name},"Jonas Gustavsson")),r.a.createElement("div",null,r.a.createElement("h2",{className:f.a.title},"Who"),r.a.createElement("span",null,"am I?")),r.a.createElement("p",null,"I work professionally as a web developer and create silly little web apps in my spare time.",r.a.createElement("br",null),r.a.createElement("br",null),"The reason I’m writing articles is not so much about spreading knowledge (though a nice bonus to be sure) as it is about me learning by teaching. To explain a topic well I have to push myself to dig deep and understand it."),r.a.createElement("br",null),r.a.createElement("p",null,"For any questions or queries feel free to ",r.a.createElement("b",null,"contact me")," at:"),r.a.createElement("ul",{className:f.a.links},r.a.createElement("li",null,r.a.createElement("a",{href:i},"Twitter ",r.a.createElement("img",{src:u.a,alt:"external link"}))),r.a.createElement("li",null,r.a.createElement("a",{href:c},"Email ",r.a.createElement("img",{src:u.a,alt:"external link"}))),r.a.createElement("li",null,r.a.createElement("a",{href:n},"LinkedIn",r.a.createElement("img",{src:u.a,alt:"external link"}))),r.a.createElement("li",null,r.a.createElement("a",{href:d},"GitHub ",r.a.createElement("img",{src:u.a,alt:"external link"}))))))};var g="869027411"}}]);
//# sourceMappingURL=component---src-pages-about-jsx-346732b77de9fd57b9fb.js.map