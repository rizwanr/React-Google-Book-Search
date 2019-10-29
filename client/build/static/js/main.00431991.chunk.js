(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(19),r=a.n(l),c=a(4),s=a(5),i=a(8),u=a(6),m=a(9),d=a(50),v=a(51),h=a(52);var p=function(e){return o.a.createElement("div",{className:"searchform  input-group mb-3"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search book by title",onChange:e.handleInputChange}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:e.handleSubmitButton},"Search")))};var b=function(e){return o.a.createElement("div",{className:"DeleteBtn"},o.a.createElement("button",Object.assign({type:"button",className:"btn btn-danger ml-2"},e),"Delete"))};var k=function(e){return o.a.createElement("div",{className:"DeleteBtn"},o.a.createElement("button",Object.assign({type:"button",className:"btn btn-danger ml-2"},e),"Save"))};var f=function(e){var t=e.id,a=e.title,n=e.authors,l=e.description,r=e.image,c=e.link,s=e.handleSaveBook,i=e.deleteBook;return o.a.createElement("div",{className:"Book"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8"},o.a.createElement("p",null,a)),o.a.createElement("div",{className:"col-4 d-flex flex-row-reverse"},o.a.createElement("a",{href:c,className:"btn btn-primary ml-2",style:{height:"36px"},target:"_blank",rel:"noopener noreferrer"},"View"),t?o.a.createElement(b,{onClick:function(){return i(t)}}):o.a.createElement(k,{onClick:function(){return s(a,n,l,r,c)}})))),o.a.createElement("div",{className:"card-body"},o.a.createElement("blockquote",{className:"blockquote"},o.a.createElement("p",null,n),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-3"},o.a.createElement("img",{src:r,alt:a})),o.a.createElement("div",{className:"col-8"},l))))))};var g=function(e){var t=e.title,a=e.description;return o.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},o.a.createElement("h1",null,t),o.a.createElement("h3",null,a))},E=a(10),B=a.n(E),N={getBookByTitle:function(e){return B.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},getSavedBooks:function(){return B.a.get("/api/books")},getBook:function(e){return B.a.get("/api/books/"+e)},deleteBook:function(e){return B.a.delete("/api/books/"+e)},saveBook:function(e){return B.a.post("/api/books",e)}},S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",books:[],error:""},a.loadBooks=function(){N.getBookByTitle(a.state.search).then(function(e){return a.setState({books:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value;a.setState({search:t})},a.handleSubmitButton=function(e){e.preventDefault(),a.loadBooks(),a.setState({search:""})},a.handleSaveBook=function(e,t,a,n,o){console.log(e),console.log(t),console.log(a),console.log(n),console.log(o),N.saveBook({title:e,authors:t,description:a,image:n,link:o}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Search"},o.a.createElement(g,{title:"(React) Google Book Search",description:"Search Book and Save Books of Interest"}),o.a.createElement(p,{handleInputChange:this.handleInputChange,handleSubmitButton:this.handleSubmitButton}),this.state.books.length?this.state.books.map(function(t){console.log(t);var a=t.volumeInfo.authors?t.volumeInfo.authors.join(", "):"",n=t.volumeInfo.title?t.volumeInfo.title:"No title found",l=t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"No image found",r=t.volumeInfo.description?t.volumeInfo.description:"No description available",c=t.volumeInfo.previewLink?t.volumeInfo.previewLink:"No link available";return o.a.createElement(f,{key:n,title:n,authors:a,image:l,description:r,link:c,handleSaveBook:e.handleSaveBook})}):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[],error:""},a.loadSavedBooks=function(){N.getSavedBooks().then(function(e){return a.setState({savedBooks:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){N.deleteBook(e).then(function(e){return a.loadSavedBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Saved"},o.a.createElement(g,{title:"(React) Google Book Search",description:"Search Book and Save Books of Interest"}),this.state.savedBooks.length?this.state.savedBooks.map(function(t){return console.log(t),o.a.createElement(f,{id:t._id,key:t._id,title:t.title,authors:t.authors,image:t.image,description:t.description,link:t.link,deleteBook:e.deleteBook})}):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(n.Component);var j=function(){return o.a.createElement("div",{className:"NoMatch"},o.a.createElement(g,{title:"404 Page Not Found",description:"\ud83d\ude44"}))};var w=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",null,o.a.createElement("a",{className:"navbar-brand",href:"/search"},"Search")),o.a.createElement("li",null,o.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved"))))},I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App container"},o.a.createElement(w,null),o.a.createElement(v.a,null,o.a.createElement(h.a,{exact:!0,path:"/search",component:S}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:y}),o.a.createElement(h.a,{component:j}))))}}]),t}(n.Component);r.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.00431991.chunk.js.map