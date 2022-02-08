!function(){"use strict";var e={300:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=window.wp.element;function t(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function s(e,n){return function(e,t){return t.get?t.get.call(e):t.value}(e,t(e,n,"get"))}function i(e,n,s){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,t(e,n,"set"),s),s}var a=window.wp.i18n,o=window.wp.data,l=window.wp.components,r=window.wp.apiFetch,c=n.n(r);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0;const s={path:e,method:t};return void 0!==n&&(s.data=n),new Promise((e=>{c()(s).then((t=>{e(t)}))}))}function h(t){const{contentData:n,currentPage:s,callback:i}=t;return 0===Object.entries(n).length||0===n.total||!1===n.has_more&&1===n.page?(0,e.createElement)(e.Fragment,null):1===n.page&&!0===n.has_more?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__next-button",onClick:()=>i(s+1)},(0,a.__)("Next","textdomain"))):!1===n.has_more&&1!==n.page?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__prev-button",onClick:()=>i(s-1)},(0,a.__)("Previous","textdomain"))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__prev-button",onClick:()=>i(s-1)},(0,a.__)("Previous","textdomain")),(0,e.createElement)("button",{type:"button",className:"components-button button action dm__next-button",onClick:()=>i(s+1)},(0,a.__)("Next","textdomain")))}"undefined"==typeof window?n(300):window.fetch;const u="data/dm-sdk",m={connectionStatus:null},p={reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"SET_CONNECTION_STATUS"===t.type?{connectionStatus:t.status}:e},actions:{setConnectionStatus:e=>({type:"SET_CONNECTION_STATUS",status:e})},selectors:{getConnectionStatus:e=>e.connectionStatus}},g=(0,o.createReduxStore)(u,p);(0,o.register)(g);const w="data/dm-video",v={id:"",private:!1,private_id:"",status:"",thumbnail_240_url:"",title:"",name:""},y={reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return"SET_VIDEO"===t.type?{videoData:t.videoData}:e},actions:{setVideo:e=>({type:"SET_VIDEO",videoData:e})},selectors:{getVideoData:e=>e.videoData}},f=(0,o.createReduxStore)(w,y);function b(e,t,n){_(e,t),t.set(e,n)}function _(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(0,o.register)(f);var E=new WeakMap,P=new WeakMap,k=new WeakSet;class S extends e.Component{constructor(e){var t;super(e),_(this,t=k),t.add(this),b(this,E,{writable:!0,value:null}),b(this,P,{writable:!0,value:""}),this.state={videos:{},currentPage:1,loadingData:!0},i(this,P,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,k,D).call(this)),this.setVideos=this.setVideos.bind(this),this.loadPage=this.loadPage.bind(this),this.setLoadingData=this.setLoadingData.bind(this)}async fetchVideo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;this.setLoadingData(!0);const n=await d("/dm/v1/userinfo"),i=await d("/dm/v1/get-custom-options/manual_embed_content"),a={fields:"id,title,thumbnail_240_url,status,private,private_id",limit:this.props.perPage?this.props.perPage:10,flags:"no_live,exportable,verified",page:e};t?(a.sort="relevance",a.search=t):a.sort="recent";let o="";const l=void 0!==i.owners;return s(this,E)&&!0!==this.props.globalVideo&&!l?o="user/"+n.channel+"/videos":l&&!0!==this.props.globalVideo?(a.owners=i.owners,o="videos"):o="videos",new Promise((async e=>{DM.api(o,"get",a,(t=>{this.setLoadingData(!1),e(t)}))})).catch((e=>{console.log(e)}))}setVideos(e){this.setState({videos:e})}setCurrentPage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setState({currentPage:e})}setLoadingData(e){this.setState({loadingData:e})}async addToPost(e){if("gutenberg"===s(this,P)){(0,o.dispatch)(w).setVideo(e);const t=new CustomEvent("dm-video-updated");document.dispatchEvent(t)}else{let t="";!0===e.private?t+=' privatevideoid="'+e.private_id+'"':t+=' videoid="'+e.id+'"',wp.media.editor.insert("[dm-player"+t+"]")}}async componentDidMount(){i(this,E,(0,o.select)(u).getConnectionStatus().connectionStatus);const e=await this.fetchVideo();this.setVideos(e)}async componentDidUpdate(e){if(this.props.keywords!==e.keywords||this.props.globalVideo!==e.globalVideo){const e=await this.fetchVideo(1,this.props.keywords);this.setCurrentPage(),this.setVideos(e)}}async loadPage(e){const t=await this.fetchVideo(e,this.props.keywords);this.setCurrentPage(e),this.setVideos(t)}renderVideoList(){const t=[];if(void 0!==this.state.videos.error)return(0,e.createElement)("li",{className:"dm__show-message"},"API errors, please check your settings…");if(!(void 0!==this.state.videos&&Object.entries(this.state.videos).length>0&&this.state.videos.list.length>0))return(0,e.createElement)("li",null,"No video found…");{const n=this.state.videos.list;for(let s=0;s<n.length;s++)t.push((0,e.createElement)("li",{key:n[s],className:`content__item ${n[s].private?"private":""} ${"ready"===n[s].status?"draft":""}`},(0,e.createElement)("button",{onClick:()=>this.addToPost(n[s]),type:"button"},(0,e.createElement)("figure",{className:"content__image-wrapper"},(0,e.createElement)("div",{className:"content__placement"},(0,e.createElement)("img",{src:n[s].thumbnail_240_url,alt:n[s].title,className:"content__thumbnail"}))),(0,e.createElement)("span",{className:"content__title",title:n[s].title},n[s].title))))}return t}render(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("ul",{className:"dm__search-results"},this.state.loadingData?(0,e.createElement)("li",null,(0,a.__)("loading video…","textdomain")):this.renderVideoList()),(0,e.createElement)(h,{currentPage:this.state.currentPage,callback:this.loadPage,contentData:this.state.videos}))}}function D(){return document.body.classList.contains("block-editor-page")?"gutenberg":"classic-editor"}function C(e,t,n){x(e,t),t.set(e,n)}function x(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var N=new WeakMap,V=new WeakMap,T=new WeakSet;class F extends e.Component{constructor(e){var t;super(e),x(this,t=T),t.add(this),C(this,N,{writable:!0,value:null}),C(this,V,{writable:!0,value:""}),this.state={playlists:{},currentPage:1,loadingData:!0},i(this,V,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,T,M).call(this)),this.setPlaylist=this.setPlaylist.bind(this),this.loadPage=this.loadPage.bind(this),this.setLoadingData=this.setLoadingData.bind(this)}async addToPost(e){if("gutenberg"===s(this,V)){(0,o.dispatch)(w).setVideo(e);const t=new CustomEvent("dm-video-updated");document.dispatchEvent(t)}else{let t="";t+=' playlistid="'+e.id+'"',wp.media.editor.insert("[dm-player"+t+"]")}}async fetchPlaylist(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;this.setLoadingData(!0);const n=await d("/dm/v1/userinfo"),i=await d("/dm/v1/get-custom-options/manual_embed_content"),a={limit:this.props.perPage?this.props.perPage:10,fields:"id,name,thumbnail_240_url,private",page:e,sort:"recent",flags:"verified"};if(t&&(a.search=t,a.sort="relevance"),s(this,N)&&!0!==this.props.globalVideo)a.owner=n.channel;else if(!s(this,N)&&0!==i.length){const e=i.owners.split(",");a.owner=e[0]}return new Promise((e=>{DM.api("/playlists","get",a,(t=>{this.setLoadingData(!1),e(t)}))})).catch((e=>{console.log(e)}))}async loadPage(e){const t=await this.fetchPlaylist(e,this.props.keywords);this.setCurrentPage(e),this.setPlaylist(t)}async componentDidMount(){i(this,N,(0,o.select)(u).getConnectionStatus().connectionStatus);const e=await this.fetchPlaylist();this.setCurrentPage(),this.setPlaylist(e)}async componentDidUpdate(e){if(this.props.keywords!==e.keywords||this.props.globalVideo!==e.globalVideo){const e=await this.fetchPlaylist(1,this.props.keywords);this.setCurrentPage(1),this.setPlaylist(e)}}setLoadingData(e){this.setState({loadingData:e})}setPlaylist(e){this.setState({playlists:e})}setCurrentPage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setState({currentPage:e})}renderPlaylists(){const t=[];if(void 0!==this.state.playlists.error)return(0,e.createElement)("li",{className:"dm__show-message"},"API errors, to search playlist you must login first…");if(!(void 0!==this.state.playlists&&Object.entries(this.state.playlists).length>0&&this.state.playlists.list.length>0))return(0,e.createElement)("li",null,"No playlist found…");{const n=this.state.playlists.list;for(let s=0;s<n.length;s++)t.push((0,e.createElement)("li",{key:n[s],className:"content__item"},(0,e.createElement)("button",{onClick:()=>this.addToPost(n[s])},(0,e.createElement)("figure",{className:"content__image-wrapper"},(0,e.createElement)("div",{className:"content__placement"},(0,e.createElement)("img",{src:n[s].thumbnail_240_url,alt:n[s].name,className:"content__thumbnail"}))),(0,e.createElement)("span",{className:"content__title"},n[s].name))))}return t}render(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("ul",{className:"dm__search-results"},this.state.loadingData?(0,e.createElement)("li",null,(0,a.__)("loading playlist…","textdomain")):this.renderPlaylists()),(0,e.createElement)(h,{currentPage:this.state.currentPage,callback:this.loadPage,contentData:this.state.playlists}))}}function M(){return document.body.classList.contains("block-editor-page")?"gutenberg":"classic-editor"}var L=new WeakMap;class I extends e.Component{constructor(e){var t,n,s;super(e),s={writable:!0,value:null},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,n=L),n.set(t,s),this.state={playlists:{},keywords:"",currentPage:1,findGlobal:!1,findPlaylist:!1},this.findVideo=this.findVideo.bind(this),this.setKeywords=this.setKeywords.bind(this),this.setGlobalVideo=this.setGlobalVideo.bind(this),this.setFindPlaylist=this.setFindPlaylist.bind(this)}async setConnectionStatus(t){let n;n=t?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"dm--connected"})," ",(0,a.__)("You're connected","textdomain")):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"dm--disconnected"})," ",(0,a.__)("You're not connected","textdomain")),this.setState({connectionStatus:n})}componentDidMount(){i(this,L,(0,o.select)(u).getConnectionStatus().connectionStatus),this.setConnectionStatus(s(this,L))}async findVideo(e){e.preventDefault()}setKeywords(e){this.setState({keywords:e.target.value})}setGlobalVideo(e){this.setState({findGlobal:!0===e.target.checked})}setFindPlaylist(e){this.setState({findPlaylist:!0===e.target.checked})}render(){return(0,e.createElement)(l.PanelBody,null,(0,e.createElement)("div",{className:"dm__content-list"},(0,e.createElement)("p",null,this.state.connectionStatus),(0,e.createElement)("form",{onSubmit:this.findVideo},(0,e.createElement)("label",{htmlFor:"keywords"},(0,a.__)("Find a video","textdomain")),(0,e.createElement)("input",{id:"keywords",onChange:this.setKeywords,type:"text",name:"keywords",className:"dm__keywords-input"}),(0,e.createElement)("button",{type:"submit",className:"action button"},"Find"),(0,e.createElement)("label",{htmlFor:"global-video",className:"checkbox-label"},(0,e.createElement)("input",{type:"checkbox",id:"global-video",onChange:this.setGlobalVideo,name:"globalVideo",value:"1"})," ",(0,a.__)("Find global","textdomain")),(0,e.createElement)("label",{htmlFor:"find-playlist",className:"checkbox-label"},(0,e.createElement)("input",{type:"checkbox",id:"find-playlist",onChange:this.setFindPlaylist,name:"findPlaylist",value:"1"})," ",(0,a.__)("Find playlist","textdomain"))),this.state.findPlaylist?(0,e.createElement)(F,{keywords:this.state.keywords,globalVideo:this.state.findGlobal,perPage:this.props.resultsPerPage}):(0,e.createElement)(S,{keywords:this.state.keywords,globalVideo:this.state.findGlobal,perPage:this.props.resultsPerPage})))}}function O(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function W(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var j=new WeakSet,G=new WeakSet,R=new WeakSet,z=new WeakSet,B=new WeakSet;function A(){DM._oauth.tokenUrl="https://api.dailymotion.com/oauth/token",DM.Auth.isSessionExpired=(e,t)=>(void 0===e&&(e=DM._session),!e||!(e&&"expires_in"in e&&(new Date).getTime()<1e3*parseInt(e.expires_in,10))&&(delete e.expires_in,!0))}async function K(){const e=await d("/dm/v1/get-api-key");DM.init({apiKey:e.api_key,apiSecret:e.api_secret,status:!0,cookie:!0})}function U(){DM.Event.subscribe("auth.sessionChange",(e=>{if("connected"===(null==e?void 0:e.status)){let t=e.session;"expires_in"in e.session||(t.expires_in=t.expires),t.expires=t.expires+2419200,DM.Cookie.set(t)}}))}function q(){return new Promise((e=>{DM.getLoginStatus((t=>{t.session?e(!0):e(!1)}))}))}async function H(){const e=await W(this,z,q).call(this);(0,o.dispatch)(u).setConnectionStatus({connectionStatus:e});const t=new CustomEvent("dm-sdk-ready");document.dispatchEvent(t)}window.wp["components/buildStyle/style.css"];const Y=()=>{const[t,n]=(0,e.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{className:"button",id:"insert-dailymotion",type:"button",onClick:()=>n(!0)},(0,e.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{className:"path",d:"m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",fill:"#2271b1"})),"Dailymotion"),t&&(0,e.createElement)(l.Modal,{className:"popup__content-finder",title:"Find a Video",onRequestClose:()=>n(!1)},(0,e.createElement)(I,{resultsPerPage:12})))};document.addEventListener("dm-sdk-ready",(()=>{const t=document.getElementById("wp-content-editor-tools"),n=document.createElement("span");n.id="dm-search-classic",t.appendChild(n),(0,e.render)((0,e.createElement)(Y),document.getElementById("dm-search-classic"))})),new class{constructor(){O(this,B),O(this,z),O(this,R),O(this,G),O(this,j),this.setupDm()}async setupDm(){await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>Boolean,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return new Promise(((i,a)=>{let o=0;const l=setInterval((()=>{const r=e(),c=o>n||r;o+=t,r?(i(""),clearInterval(l)):c&&(a(new Error("waitFor(): "+s)),clearInterval(l))}),t)}))}((()=>"undefined"!=typeof DM),100,3e4,"Timeout waiting for DM loaded, please refresh and make sure your internet is active"),W(this,j,A).call(this),await W(this,G,K).call(this),W(this,R,U).call(this),await W(this,B,H).call(this)}}}()}();