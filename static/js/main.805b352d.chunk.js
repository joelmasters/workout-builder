(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(296)},107:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(94),c=a.n(s),i=(a(107),a(4)),o=a(5),l=a(8),m=a(6),u=a(7),d=a(58),p=a.n(d),g=(a(109),a(111),a(62),a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).clicked=function(){a.setState({added:!0}),a.props.clicked(a.props.exercises),setTimeout(function(){return a.setState({added:!1})},1e3)},a.state={added:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.exercises,t=e.name,a=e.category,n="#E1413C",s="#0598EC",c="#F8B23D",i="#009D60",o="#762182",l="#005F78",m="#AAA";switch(a){case"Warmup":m=s;break;case"Cardio":m=n;break;case"Chest":m=i;break;case"Back":m=c;break;case"Legs":m=o;break;case"Core":m=l}var u={backgroundColor:m},d="";return this.state.added&&(d=r.a.createElement("div",{className:"added-block"},r.a.createElement("div",{className:"added-block__text"},"Added!"))),r.a.createElement("div",{className:"card shadow-2",onClick:this.clicked},d,r.a.createElement("span",{className:"card__title"},t),r.a.createElement("br",null),r.a.createElement("div",{className:"card__bottom",style:u},a))}}]),t}(n.Component)),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).clicked=function(e){a.props.clicked(e)},a.getCards=function(){for(var e=[],t=0;t<a.props.exercises.length;t++)e.push(r.a.createElement(g,{key:t,exercises:a.props.exercises[t],clicked:a.clicked}));return e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.getCards();return r.a.createElement("div",{className:"card-container"},e)}}]),t}(n.Component),k=a(25),b=(a(115),a(44)),E=(a(117),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).clicked=function(){a.props.clicked(a.props)},a.changeUnit=function(e){a.props.changeUnit(e.target.value,a.props.index),a.setState({unit:e.target.value})},a.changeNum=function(e){a.props.changeNum(e.target.value,a.props.index),a.setState({num:e.target.value})},a.componentDidMount=function(){},a.renderNums=function(){for(var e=[],t=[1,2,3,4,5,6,7,8,9,10,12,15,20,25,30,40,50,60,70,80,90,100],a=0;a<t.length;a++)e.push(r.a.createElement("option",{value:t[a].toString()},t[a]));return e},a.state={num:a.props.exercises.num,unit:a.props.exercises.unit},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.exercises,t=e.name,a=e.category,n="#E1413C",s="#0598EC",c="#F8B23D",i="#009D60",o="#762182",l="#005F78",m="#AAA";switch(a){case"Warmup":m=s;break;case"Cardio":m=n;break;case"Chest":m=i;break;case"Back":m=c;break;case"Legs":m=o;break;case"Core":m=l}var u="";u="Break"===a?{border:"1px solid ".concat(m),borderRight:"12px solid ".concat(m),marginTop:"15px",marginBottom:"15px"}:{border:"1px solid ".concat(m),borderRight:"12px solid ".concat(m)};var d="";this.props.isDragging&&null===this.props.draggingOver&&(d=r.a.createElement("div",{className:"workout-card__delete-cover"},"Remove"));var p=this.renderNums();return r.a.createElement("div",{className:"workout-card no-select shadow-1",style:u},d,r.a.createElement("div",{className:"workout-card__block workout-card__start"},t),r.a.createElement("div",{className:"workout-card__block workout-card__num"},r.a.createElement("select",{value:this.props.exercises.num,onChange:this.changeNum},p)),r.a.createElement("div",{className:"workout-card__block workout-card__unit"},r.a.createElement("select",{value:this.props.exercises.unit,onChange:this.changeUnit},r.a.createElement("option",{value:"Reps"},"Reps"),r.a.createElement("option",{value:"Seconds"},"Seconds"),r.a.createElement("option",{value:"Minutes"},"Minutes"),r.a.createElement("option",{value:"Laps"},"Laps"),r.a.createElement("option",{value:"Yards"},"Yards"))))}}]),t}(n.Component)),v=a(95),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=["#E1413C","#762182","#005F78","#F8B23D","#009D60"],a={labels:["Cardio","Legs","Core","Back","Chest"],datasets:[{label:"Exercises",borderWidth:1,hoverBackgroundColor:"rgb(70,130,180)",hoverBorderColor:"rgb(70,130,180)",data:[e.numCardio,e.numLegs,e.numCore,e.numBack,e.numChest],borderColor:t,backgroundColor:t,pointBorderColor:t,pointBackgroundColor:t,pointHoverBackgroundColor:t,pointHoverBorderColor:t}]};return r.a.createElement("div",{className:"chart-container"},r.a.createElement(v.a,{data:a,options:{legend:{display:!1},scales:{yAxes:[{label:"Number",type:"linear",display:!0,position:"left",gridLines:{display:!0},labels:{show:!0},ticks:{beginAtZero:!0,min:0,max:5,stepSize:1}}]}}}))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changeUnit=function(e,t){var n=Object(k.a)(a.state.exercises);n[t].unit=e,a.setState({exercises:n})},a.changeNum=function(e,t){var n=Object(k.a)(a.state.exercises);n[t].num=e,a.setState({exercises:n})},a.createSummary=function(){for(var e=0,t=0,n=0,r=0,s=0,c=0,i=0;i<a.props.exercises.length;i++)switch(e+=a.props.exercises[i].time,a.props.exercises[i].category){case"Chest":s++;break;case"Legs":r++;break;case"Back":n++;break;case"Cardio":t++;break;case"Core":c++}a.setState({totalTime:e,numCardio:t,numBack:n,numLegs:r,numChest:s,numCore:c})},a.onDragEnd=function(e){var t=Object(k.a)(a.state.exercises),n=e.source.index,r="";if(null!==e.destination){if(t[r=e.destination.index]=t[n],r<n)for(var s=r+1;s<=n;s++)t[s]=a.state.exercises[s-1];else for(var c=r-1;c>=n;c--)t[c]=a.state.exercises[c+1];a.setState({exercises:t})}else t.splice(n,1),a.setState({exercises:t})},a.componentWillReceiveProps=function(e){if(a.createSummary(),e.exercises.length!==a.state.exercises.length){var t=Object(k.a)(a.state.exercises);t.push(e.exercises[e.exercises.length-1]),a.setState({exercises:t})}},a.state={totalTime:0,numCardio:0,numLegs:0,numChest:0,numBack:0,numCore:0,exercises:a.props.exercises},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"workout-container"},r.a.createElement("div",{className:"workout-inner-container"},r.a.createElement(b.a,{onDragEnd:this.onDragEnd},r.a.createElement(b.c,{droppableId:"list"},function(t){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps),e.state.exercises.map(function(t,a){return r.a.createElement(b.b,{draggableId:"draggable-"+a,index:a},function(n,s){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),r.a.createElement(E,{key:a,index:a,exercises:t,changeUnit:e.changeUnit,changeNum:e.changeNum,clicked:e.clicked,isDragging:s.isDragging,draggingOver:s.draggingOver}))})}))}))),r.a.createElement("div",{className:"workout-summary-container shadow-1"},r.a.createElement(C,{data:this.state})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).clicked=function(e){var t=a.state.addedExercises;t.push(e),a.setState({addedExercises:t})},a.openSlider=function(){document.getElementsByClassName("side-container")[0].style.transform="translateX(300px)",document.getElementsByClassName("main")[0].style.position="fixed",a.setState({sliderOpen:!0})},a.closeSlider=function(){document.getElementsByClassName("side-container")[0].style.transform="translateX(0px)",document.getElementsByClassName("main")[0].style.position="static",a.setState({sliderOpen:!1})},a.state={addedExercises:[],sliderOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=r.a.createElement("svg",{height:"100",width:"100"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:"black",strokeWidth:"5",fill:"transparent"}),r.a.createElement("line",{x1:"20",y1:"50",x2:"80",y2:"50",stroke:"black",strokeWidth:"3"}),r.a.createElement("line",{x1:"50",y1:"20",x2:"50",y2:"80",stroke:"black",strokeWidth:"3"})),t="";return this.state.sliderOpen&&(t=r.a.createElement("div",{className:"side-blocker",onClick:this.closeSlider})),r.a.createElement("div",{className:"App"},t,r.a.createElement("div",{className:"navbar shadow-2"},r.a.createElement("h1",null,"Workout Builder")),r.a.createElement("div",{className:"side-container shadow-2"},r.a.createElement(p.a,{maxWidth:900},r.a.createElement("button",{className:"close-slider-button",onClick:this.closeSlider},"X")),r.a.createElement("h2",null,"Dynamic Warmups"),r.a.createElement(h,{exercises:S,clicked:this.clicked}),r.a.createElement("h2",null,"Rest"),r.a.createElement(h,{exercises:j,clicked:this.clicked}),r.a.createElement("h2",null,"Chest"),r.a.createElement(h,{exercises:f,clicked:this.clicked}),r.a.createElement("h2",null,"Legs"),r.a.createElement(h,{exercises:w,clicked:this.clicked}),r.a.createElement("h2",null,"Back"),r.a.createElement(h,{exercises:R,clicked:this.clicked}),r.a.createElement("h2",null,"Cardio"),r.a.createElement(h,{exercises:N,clicked:this.clicked}),r.a.createElement("h2",null,"Core"),r.a.createElement(h,{exercises:O,clicked:this.clicked}),r.a.createElement("div",{className:"bottom-spacer"})),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main-container shadow-2"},r.a.createElement("span",{className:"header-2"},"Directions"),r.a.createElement("ol",null,r.a.createElement("li",null,"Click to Add Exercises"),r.a.createElement("li",null,"Set Number of Reps"),r.a.createElement("li",null,"Set Number of Sets"),r.a.createElement("li",null,"Drag and Drop to Change the Order")),r.a.createElement("p",null,r.a.createElement("em",null,"Tip: for a well-balanced workout, select an equal number of exercises from each category.")),r.a.createElement(p.a,{maxWidth:900},r.a.createElement("button",{className:"add-button shadow-2",onClick:this.openSlider},e,r.a.createElement("br",null),"Add Exercise"))),r.a.createElement("div",{className:"main-flex"},r.a.createElement("div",{className:"main-container shadow-2"},r.a.createElement("h2",null,"Workout:"),r.a.createElement(y,{exercises:this.state.addedExercises})))))}}]),t}(n.Component),f=[{name:"Push Ups",time:2,num:10,unit:"Reps",category:"Chest"},{name:"Diamond Push Ups",time:2,num:10,unit:"Reps",category:"Chest"},{name:"Wide-Grip Push Ups",time:2,num:10,unit:"Reps",category:"Chest"},{name:"Dips",time:2,num:10,unit:"Reps",category:"Chest"},{name:"Burpees",time:2,num:10,unit:"Reps",category:"Chest"}],w=[{name:"Squats",time:2,num:10,unit:"Reps",category:"Legs"},{name:"Jump Squats",time:2,num:10,unit:"Reps",category:"Legs"},{name:"Lunges",time:2,num:10,unit:"Reps",category:"Legs"},{name:"Jump Lunges",time:2,num:10,unit:"Reps",category:"Legs"}],O=[{name:"Plank",time:1,num:1,unit:"Minutes",category:"Core"},{name:"Mountain Climbers",time:1,num:10,unit:"Reps",category:"Core"},{name:"Russian Twist",time:1,num:10,unit:"Reps",category:"Core"},{name:"Scissor Kicks",time:1,num:10,unit:"Reps",category:"Core"},{name:"Leg Lifts",time:1,num:10,unit:"Reps",category:"Core"},{name:"Sit Ups",time:1,num:10,unit:"Reps",category:"Core"},{name:"Crunches",time:1,num:10,unit:"Reps",category:"Core"},{name:"Suitcases",time:1,num:10,unit:"Reps",category:"Core"},{name:"Side Plank",time:1,num:1,unit:"Minutes",category:"Core"}],R=[{name:"Pull Ups",time:2,num:10,unit:"Reps",category:"Back"},{name:"Inverted Rows",time:2,num:10,unit:"Reps",category:"Back"},{name:"Chin Ups",time:2,num:10,unit:"Reps",category:"Back"}],N=[{name:"Sprint",time:2,num:5,unit:"Seconds",category:"Cardio"},{name:"Hill Climb",time:20,num:1,unit:"Reps",category:"Cardio"},{name:"Lap",time:8,num:1,unit:"Laps",category:"Cardio"},{name:"Mile",time:10,num:1,unit:"Reps",category:"Cardio"}],S=[{name:"High Knees",time:1,num:1,unit:"Reps",category:"Warmup"},{name:"Butt Kickers",time:1,num:1,unit:"Reps",category:"Warmup"},{name:"Russian March",time:1,num:1,unit:"Reps",category:"Warmup"},{name:"Super Marios",time:1,num:1,unit:"Reps",category:"Warmup"},{name:"Inchworm",time:1,num:5,unit:"Reps",category:"Warmup"},{name:"World's Greatest Stretch",time:1,num:10,unit:"Reps",category:"Warmup"},{name:"Lunge and Twist",time:1,num:10,unit:"Reps",category:"Warmup"},{name:"Karaoke Down and Back",time:1,num:1,unit:"Reps",category:"Warmup"}],j=[{name:"Break",time:1,num:1,unit:"Minutes",category:"Break"},{name:"Rest",time:1,num:1,unit:"Minutes",category:"Break"}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){},62:function(e,t,a){}},[[102,2,1]]]);
//# sourceMappingURL=main.805b352d.chunk.js.map