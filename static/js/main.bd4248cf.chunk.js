(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t(296)},107:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},115:function(e,a,t){},117:function(e,a,t){},296:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(94),s=t.n(c),i=(t(107),t(4)),o=t(5),l=t(8),m=t(6),u=t(7),d=t(57),p=t.n(d),g=(t(109),t(111),t(62),t(45),function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).clicked=function(){t.props.clicked(t.props)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="blue",a="#E1413C",t="#0598EC",r="#F8B23D",c="#009D60",s="#762182",i="#005F78";switch(this.props.category){case"Warmup":e=t;break;case"Cardio":e=a;break;case"Chest":e=c;break;case"Back":e=r;break;case"Legs":e=s;break;case"Core":e=i}var o={backgroundColor:e};return n.a.createElement("div",{className:"card shadow-2",onClick:this.clicked},n.a.createElement("span",{className:"card__title"},this.props.name),n.a.createElement("br",null),n.a.createElement("div",{className:"card__bottom",style:o},this.props.category))}}]),a}(r.Component)),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).clicked=function(e){t.props.clicked(e)},t.getCards=function(){for(var e=[],a=0;a<t.props.exercises.length;a++){var r=t.props.exercises[a],c=r.name,s=r.time,i=r.category;e.push(n.a.createElement(g,{key:c,name:c,time:s,category:i,clicked:t.clicked}))}return e},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.getCards();return n.a.createElement("div",{className:"card-container"},e)}}]),a}(r.Component),E=t(60),k=(t(115),t(43)),v=(t(117),function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).clicked=function(){t.props.clicked(t.props)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="blue",a="#E1413C",t="#0598EC",r="#F8B23D",c="#009D60",s="#762182",i="#005F78";switch(this.props.category){case"Warmup":e=t;break;case"Cardio":e=a;break;case"Chest":e=c;break;case"Back":e=r;break;case"Legs":e=s;break;case"Core":e=i}var o={backgroundColor:e},l="";return this.props.isDragging&&null===this.props.draggingOver&&(l=n.a.createElement("div",{className:"workout-card__delete-cover"},"Remove")),n.a.createElement("div",{className:"workout-card shadow-2"},l,n.a.createElement("div",{className:"workout-card__cat",style:o},this.props.category),n.a.createElement("div",{className:"workout-card__block"},this.props.name),n.a.createElement("div",{className:"workout-card__block"},n.a.createElement("select",{defaultValue:"Reps"},n.a.createElement("option",{value:"Reps"},"Reps:"),n.a.createElement("option",{value:"Seconds"},"Seconds:"),n.a.createElement("option",{value:"Minutes"},"Minutes:")),n.a.createElement("select",{defaultValue:"10"},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"),n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"7"},"7"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"9"},"9"),n.a.createElement("option",{value:"10"},"10"),n.a.createElement("option",{value:"12"},"12"),n.a.createElement("option",{value:"15"},"15"),n.a.createElement("option",{value:"20"},"20"),n.a.createElement("option",{value:"25"},"25"),n.a.createElement("option",{value:"30"},"30"),n.a.createElement("option",{value:"40"},"40"),n.a.createElement("option",{value:"50"},"50"),n.a.createElement("option",{value:"60"},"60"),n.a.createElement("option",{value:"70"},"70"),n.a.createElement("option",{value:"80"},"80"),n.a.createElement("option",{value:"90"},"90"),n.a.createElement("option",{value:"100"},"100"))))}}]),a}(r.Component)),b=t(95),y=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data,a={labels:["Cardio","Legs","Core","Back","Chest"],datasets:[{label:"Exercises",backgroundColor:"rgba(70,130,180,0.7)",borderColor:"rgb(70,130,180)",borderWidth:1,hoverBackgroundColor:"rgb(70,130,180)",hoverBorderColor:"rgb(70,130,180)",data:[e.numCardio,e.numLegs,e.numCore,e.numBack,e.numChest]}],yAxes:[{ticks:{min:0,max:5,stepSize:1}}]};return n.a.createElement("div",{className:"chart-container"},n.a.createElement(b.a,{data:a}))}}]),a}(r.Component),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).clicked=function(e){t.props.clicked(e)},t.createSummary=function(){for(var e=0,a=0,r=0,n=0,c=0,s=0,i=0;i<t.props.exercises.length;i++)switch(e+=t.props.exercises[i].time,t.props.exercises[i].category){case"Chest":c++;break;case"Legs":n++;break;case"Back":r++;break;case"Cardio":a++;break;case"Core":s++}t.setState({totalTime:e,numCardio:a,numBack:r,numLegs:n,numChest:c,numCore:s})},t.onDragEnd=function(e){var a=Object(E.a)(t.state.exercises),r=e.source.index,n="";if(null!==e.destination){if(a[n=e.destination.index]=a[r],n<r)for(var c=n+1;c<=r;c++)a[c]=t.state.exercises[c-1];else for(var s=n-1;s>=r;s--)a[s]=t.state.exercises[s+1];t.setState({exercises:a})}else a.splice(r,1),t.setState({exercises:a})},t.componentWillReceiveProps=function(e){if(t.createSummary(),e.exercises.length!==t.state.exercises.length){var a=Object(E.a)(t.state.exercises);a.push(e.exercises[e.exercises.length-1]),t.setState({exercises:a})}},t.state={totalTime:0,numCardio:0,numLegs:0,numChest:0,numBack:0,numCore:0,exercises:t.props.exercises},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"workout-container"},n.a.createElement("div",{className:"workout-inner-container"},n.a.createElement(k.a,{onDragEnd:this.onDragEnd},n.a.createElement(k.c,{droppableId:"list"},function(a){return n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps),e.state.exercises.map(function(a,t){return n.a.createElement(k.b,{draggableId:"draggable-"+t,index:t},function(t,r){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),n.a.createElement(v,{key:a.name,name:a.name,time:a.time,category:a.category,clicked:e.clicked,isDragging:r.isDragging,draggingOver:r.draggingOver}))})}))}))),n.a.createElement("div",{className:"workout-summary-container shadow-1"},n.a.createElement(y,{data:this.state})))}}]),a}(r.Component),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).clicked=function(e){var a=t.state.addedExercises;a.push(e),t.setState({addedExercises:a})},t.openSlider=function(){document.getElementsByClassName("side-container")[0].style.transform="translateX(300px)",document.getElementsByClassName("main")[0].style.position="fixed",t.setState({sliderOpen:!0})},t.closeSlider=function(){document.getElementsByClassName("side-container")[0].style.transform="translateX(0px)",document.getElementsByClassName("main")[0].style.position="static",t.setState({sliderOpen:!1})},t.state={addedExercises:[],sliderOpen:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=n.a.createElement("svg",{height:"100",width:"100"},n.a.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:"black",strokeWidth:"5",fill:"transparent"}),n.a.createElement("line",{x1:"20",y1:"50",x2:"80",y2:"50",stroke:"black",strokeWidth:"3"}),n.a.createElement("line",{x1:"50",y1:"20",x2:"50",y2:"80",stroke:"black",strokeWidth:"3"})),a="";return this.state.sliderOpen&&(a=n.a.createElement("div",{className:"side-blocker",onClick:this.closeSlider})),n.a.createElement("div",{className:"App"},a,n.a.createElement("div",{className:"navbar shadow-2"},n.a.createElement("h1",null,"Workout Builder")),n.a.createElement("div",{className:"side-container shadow-2"},n.a.createElement(p.a,{maxWidth:900},n.a.createElement("button",{className:"close-slider-button",onClick:this.closeSlider},"X")),n.a.createElement("h2",null,"Dynamic Warmups"),n.a.createElement(h,{exercises:S,clicked:this.clicked}),n.a.createElement("h2",null,"Rest"),n.a.createElement(h,{exercises:B,clicked:this.clicked}),n.a.createElement("h2",null,"Chest"),n.a.createElement(h,{exercises:x,clicked:this.clicked}),n.a.createElement("h2",null,"Legs"),n.a.createElement(h,{exercises:w,clicked:this.clicked}),n.a.createElement("h2",null,"Back"),n.a.createElement(h,{exercises:j,clicked:this.clicked}),n.a.createElement("h2",null,"Cardio"),n.a.createElement(h,{exercises:N,clicked:this.clicked}),n.a.createElement("h2",null,"Core"),n.a.createElement(h,{exercises:O,clicked:this.clicked}),n.a.createElement("div",{className:"bottom-spacer"})),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"main-container shadow-2"},n.a.createElement("span",{className:"header-2"},"Directions"),n.a.createElement("ol",null,n.a.createElement("li",null,"Click to Add Exercises"),n.a.createElement("li",null,"Set Number of Reps"),n.a.createElement("li",null,"Set Number of Sets"),n.a.createElement("li",null,"Drag and Drop to Change the Order")),n.a.createElement("p",null,n.a.createElement("em",null,"Tip: for a well-balanced workout, select an equal number of exercises from each category.")),n.a.createElement(p.a,{maxWidth:900},n.a.createElement("button",{className:"add-button shadow-2",onClick:this.openSlider},e,n.a.createElement("br",null),"Add Exercise"))),n.a.createElement("div",{className:"main-flex"},n.a.createElement("div",{className:"main-container shadow-2"},n.a.createElement("h2",null,"Workout:"),n.a.createElement(C,{exercises:this.state.addedExercises})))))}}]),a}(r.Component),x=[{name:"Push Ups",time:2,category:"Chest"},{name:"Diamond Push Ups",time:2,category:"Chest"},{name:"Wide-Grip Push Ups",time:2,category:"Chest"},{name:"Dips",time:2,category:"Chest"}],w=[{name:"Squats",time:2,category:"Legs"},{name:"Jump Squats",time:2,category:"Legs"},{name:"Lunges",time:2,category:"Legs"},{name:"Jump Lunges",time:2,category:"Legs"}],O=[{name:"Plank",time:1,category:"Core"},{name:"Mountain Climbers",time:1,category:"Core"},{name:"Russian Twist",time:1,category:"Core"},{name:"Scissor Kicks",time:1,category:"Core"},{name:"Leg Lifts",time:1,category:"Core"},{name:"Sit Ups",time:1,category:"Core"},{name:"Crunches",time:1,category:"Core"},{name:"Suitcases",time:1,category:"Core"},{name:"Side Plank",time:1,category:"Core"}],j=[{name:"Pull Ups",time:2,category:"Back"},{name:"Inverted Rows",time:2,category:"Back"},{name:"Chin Ups",time:2,category:"Back"}],N=[{name:"Sprint",time:2,category:"Cardio"},{name:"Hill Climb",time:20,category:"Cardio"},{name:"Lap",time:8,category:"Cardio"},{name:"Mile",time:10,category:"Cardio"}],S=[{name:"High Knees",time:1,category:"Warmup"},{name:"Butt Kickers",time:1,category:"Warmup"},{name:"Russian March",time:1,category:"Warmup"},{name:"Super Marios",time:1,category:"Warmup"},{name:"Inchworm",time:1,category:"Warmup"},{name:"World's Greatest Stretch",time:1,category:"Warmup"},{name:"Lunge and Twist",time:1,category:"Warmup"},{name:"Karaoke Down and Back",time:1,category:"Warmup"}],B=[{name:"Break",time:1,category:"Break"},{name:"Rest",time:1,category:"Break"}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,a,t){},62:function(e,a,t){}},[[102,2,1]]]);
//# sourceMappingURL=main.bd4248cf.chunk.js.map