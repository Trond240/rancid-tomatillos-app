(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{30:function(e,t,n){e.exports=n(50)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),s=(n(35),n(36),n(8)),c=n(9),l=n(10),u=n(11),m=(n(37),n(5)),v=n(2),p=Object(v.b)((function(e){return{reviews:e.loadReviews}}),null)((function(e){var t,n=e.reviews.find((function(t){return t.movie_id===e.id})),a=function(e,n){var a=Math.ceil(e),o=Array(a).fill("/images/star-".concat(n,".svg")),i=Array(10-a).fill("/images/star-clear-outline.svg");t=o.concat(i).map((function(e,t){return r.a.createElement("img",{key:t,className:"star",src:"".concat(e),alt:"".concat(n," star")})}))};return n?a(n.rating,"yellow"):a(e.averageRating,"green"),r.a.createElement("section",{className:"movie-card"},r.a.createElement("img",{alt:"movie poster",className:"movie-poster",src:e.posterImage}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"Avg. Rating: ",e.averageRating.toFixed(1)),r.a.createElement("section",{className:"rate-movie"},t),r.a.createElement(m.b,{to:"/movies/".concat(e.id)},r.a.createElement("button",{"data-testid":e.id,className:"movie-details-btn"},"View Movie Details")))})),g=(n(43),function(e){return{type:"CHANGE_PAGE",page:e}}),d="https://rancid-tomatillos.herokuapp.com/api/v1",h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={movies:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(d+"/movies").then((function(e){return e.json()})).then((function(t){e.props.loadMovies(t.movies)})).catch((function(e){return console.error(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props.movies.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,title:e.title,posterImage:e.poster_path,backdropImage:e.backdrop_path,releaseDate:e.release_date,overview:e.overview,averageRating:e.average_rating})}));return r.a.createElement("div",{className:"movie-card-page"},r.a.createElement("div",{className:"button-box"},r.a.createElement("button",{onClick:function(){return e.props.sortMovies("release-date")}},"Sort By Release Date"),r.a.createElement("button",{onClick:function(){return e.props.sortMovies("alphabetical")}},"Sort Alphabetically")),r.a.createElement("section",{"data-testid":"card-container",className:"movie-card-container"},t))}}]),n}(a.Component),f=Object(v.b)((function(e){return{movies:e.moviesList}}),(function(e){return{loadMovies:function(t){return e(function(e){return{type:"LOAD_MOVIES",movies:e}}(t))},sortMovies:function(t){return e(function(e){return{type:"SORT_MOVIES",option:e}}(t))}}}))(h),E=(n(44),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),console.log(a.props),a.state={movie:a.props.movies.find((function(e){return e.id===a.props.id})),error:"",successMsg:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.id),fetch("https://rancid-tomatillos.herokuapp.com/api/v1/movies/".concat(this.props.id)).then((function(e){return e.json()})).then((function(t){return e.setState({movie:t.movie})})).catch((function(e){return console.error(e.message)}))}},{key:"rateMovie",value:function(e){var t=this,n=this.props.reviews.find((function(e){return e.movie_id===t.props.id}));if(this.props.user&&!n){var a=e+1;fetch("https://rancid-tomatillos.herokuapp.com/api/v1/users/".concat(this.props.user.id,"/ratings"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movie_id:this.props.id,rating:a})}).then((function(e){return e.json()})).then((function(e){t.props.addReview(e.rating),t.setState({successMsg:"Your rating of ".concat(e.rating.rating," stars has been successfully submitted")}),setTimeout((function(){t.setState({successMsg:""})}),2e3)})).catch((function(e){return t.setState({error:e.message})}))}else this.props.user?(this.setState({error:"Please undo your rating below to submit a new one."}),setTimeout((function(){t.setState({error:""})}),2e3)):(this.setState({error:"You must be logged in to review a movie"}),setTimeout((function(){t.setState({error:""})}),2e3))}},{key:"render",value:function(){var e,t=this,n=this.state.movie,a=this.props.reviews.find((function(e){return e.movie_id===t.props.id})),o=function(n,a){var o=Math.ceil(n),i=Array(o).fill("/images/star-".concat(a,".svg")),s=Array(10-o).fill("/images/star-clear-outline.svg");e=i.concat(s).map((function(e,n){return r.a.createElement("img",{key:n,onClick:function(){return t.rateMovie(n)},className:"star",src:"".concat(e),alt:"".concat(a," star")})}))};if(n&&a?o(a.rating,"yellow"):n&&o(this.state.movie.average_rating,"green"),n){var i={backgroundImage:"url(".concat(n.backdrop_path,")")};return r.a.createElement("section",{className:"details-section",style:i},r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",null,n.title),r.a.createElement("div",{className:"stars-box"},e),this.state.error&&r.a.createElement("p",null,this.state.error),this.state.successMsg&&r.a.createElement("p",null,this.state.successMsg),r.a.createElement("button",{disabled:!a},"undo rating")),r.a.createElement("article",{className:"movie-details"},r.a.createElement("h3",null,"Released: ",n.release_date),r.a.createElement("p",null,n.overview)),r.a.createElement(m.b,{to:"/"},r.a.createElement("button",{type:"button"},"Back to Browse")))}return r.a.createElement("section",null,"loading...")}}]),n}(a.Component)),b=Object(v.b)((function(e){return{movies:e.moviesList,user:e.loginFlow.user,reviews:e.loadReviews}}),(function(e){return{addReview:function(t){return e(function(e){return{type:"ADD_REVIEW",review:e}}(t))}}}))(E),O=(n(45),Object(v.b)((function(e){return{user:e.loginFlow.user,page:e.updatePage}}),(function(e){return{logOut:function(){return e({type:"LOGOUT_USER"})},clearReviews:function(){return e({type:"CLEAR_REVIEWS"})},changePage:function(t){return e(g(t))}}}))((function(e){var t;return t="login"===e.page?"":e.user?r.a.createElement("div",{className:"nav-login-div"},r.a.createElement("h4",{className:"user-name"},"Welcome, ",e.user.name),r.a.createElement(m.b,{to:"/",className:"nav-login-link"},r.a.createElement("button",{"data-testid":"logout-btn",className:"nav-login-button",onClick:function(){e.logOut(),e.clearReviews(),e.changePage("movies")}},"Logout"))):r.a.createElement("div",{className:"nav-login-div"},r.a.createElement("h4",{className:"user-name"},"Welcome! Please Login"),r.a.createElement(m.b,{to:"/login",className:"nav-login-link"},r.a.createElement("button",{className:"nav-login-button",onClick:function(){return e.changePage("login")}},"Login"))),r.a.createElement("section",{className:"nav-bar"},r.a.createElement("div",{className:"header-icon-container"},r.a.createElement("h1",{className:"site-heading"},"Rancid Tomatillos"),r.a.createElement("img",{alt:"tomato logo",className:"icon",src:"/images/tomato.svg"})),t)}))),w=(n(46),n(19)),y=(n(47),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={email:"",password:"",errorMessage:""},e}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"submitLogin",value:function(e){var t,n=this;(t=this.state,fetch(d+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})}).then((function(e){return e.json()}))).then((function(e){n.props.loginUser(e),function(e){return fetch(d+"/users/".concat(e.user.id,"/ratings")).then((function(e){return e.json()}))}(e).then((function(e){return n.props.loadReviews(e.ratings)})).catch((function(e){return console.error(e.message)}))})).catch((function(e){return console.error(e.message)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,o=n.length>0&&a.length>0;return r.a.createElement("section",{className:"login-container"},r.a.createElement("form",null,r.a.createElement("h2",null,"Login"),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},name:"email",type:"email",placeholder:"Email",value:this.state.email}),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},name:"password",type:"password",placeholder:"Password",value:this.state.password}),r.a.createElement("div",{onClick:function(t){e.submitLogin(t),e.props.changePage("movies")},type:"button",className:"login-container"},r.a.createElement(m.b,{className:"login-link",to:"/"},r.a.createElement("button",{disabled:!o,"data-testid":"login-button",className:"login-button",type:"button"},"Login"))),r.a.createElement("div",null,r.a.createElement("p",null,this.state.errorMessage))))}}]),n}(a.Component)),j=Object(v.b)(null,(function(e){return{loginUser:function(t){return e(function(e){return{type:"LOGIN_USER",user:e}}(t))},loadReviews:function(t){return e(function(e){return{type:"LOAD_REVIEWS",reviews:e}}(t))},changePage:function(t){return e(g(t))}}}))(y),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={movieOfDay:a.props.movies[Math.floor(Math.random()*a.props.movies.length)]},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"login-page"},r.a.createElement(j,null),r.a.createElement("div",{className:"login-image-container"},r.a.createElement("h2",null,"Movie Of The Day"),r.a.createElement("img",{className:"login-img",src:e.state.movieOfDay?e.state.movieOfDay.poster_path:"https://image.tmdb.org/t/p/original//AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",alt:"movie-poster"})))}}]),n}(a.Component),k=Object(v.b)((function(e){return{movies:e.moviesList}}),null)(N),_=n(12),S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:function(){return r.a.createElement(f,null)}}),r.a.createElement(_.a,{path:"/login",exact:!0,component:function(){return r.a.createElement(k,null)}}),r.a.createElement(_.a,{path:"/movies/:movie_id",component:function(e){var t=e.match.params;return r.a.createElement(b,{id:parseInt(t.movie_id)})}}),r.a.createElement(_.a,{path:"/users/:user_id/ratings",exact:!0,component:function(){return r.a.createElement(f,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(13),M=n(28),A=n(14),C=n(48);C().format();var L=n(29),D=Object(R.combineReducers)({moviesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_MOVIES":return Object(A.a)(t.movies);case"SORT_MOVIES":var n=Object(A.a)(e);return"release-date"===t.option?n.sort((function(e,t){return C(e.release_date)-C(t.release_date)})):"alphabetical"===t.option&&n.sort((function(e,t){return e.title<t.title?-1:e.title<t.title?1:void 0})),n;default:return e}},loginFlow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return Object(L.a)({},e,{},t.user);case"LOGOUT_USER":return{};default:return e}},loadReviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_REVIEWS":return[].concat(Object(A.a)(e),Object(A.a)(t.reviews));case"CLEAR_REVIEWS":return[];case"ADD_REVIEW":return[].concat(Object(A.a)(e),[t.review]);default:return e}},updatePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movies",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":return t.page;default:return e}}}),I=Object(R.createStore)(D,Object(M.composeWithDevTools)()),P=r.a.createElement(m.a,null,r.a.createElement(S,null));i.a.render(r.a.createElement(v.a,{store:I},r.a.createElement(r.a.StrictMode,null,P)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d0eeee5e.chunk.js.map