(function(){"use strict";var e={5445:function(e,t,o){var n=o(5130),i=o(6768),l=o(4232);const d={id:"app"},s={"aria-labelledby":"list-summary",class:"stack-large"};function a(e,t,o,n,a,r){const u=(0,i.g2)("to-do-form"),c=(0,i.g2)("el-button"),m=(0,i.g2)("to-do-item");return(0,i.uX)(),(0,i.CE)("div",d,[t[1]||(t[1]=(0,i.Lk)("h1",null,"My To-Do List",-1)),(0,i.bF)(u,{onTodoAdded:r.addToDo},null,8,["onTodoAdded"]),(0,i.bF)(c,{type:"primary",onClick:r.showAlert},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Click Me")]))),_:1},8,["onClick"]),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.v_)(r.listSummary),513),(0,i.Lk)("ul",s,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.bF)(m,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>r.updateDoneStatus(e.id),onItemDeleted:t=>r.deleteToDo(e.id),onItemEdited:t=>r.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}o(4114),o(8992),o(4520),o(2577);const r={key:0,class:"stack-small"},u={class:"custom-checkbox"},c=["id","checked"],m=["for"],b={class:"btn-group"},h={class:"visually-hidden"},p={class:"visually-hidden"},f={ref:"echart",style:{height:"300px","margin-top":"20px"}};function g(e,t,o,n,d,s){const a=(0,i.g2)("to-do-item-edit-form");return d.isEditing?((0,i.uX)(),(0,i.Wv)(a,{key:1,id:o.id,label:o.label,onItemEdited:s.itemEdited,onEditCancelled:s.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",u,[(0,i.Lk)("input",{type:"checkbox",class:"checkbox",id:o.id,checked:s.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,c),(0,i.Lk)("label",{for:o.id,class:"checkbox-label"},(0,l.v_)(o.label),9,m)]),(0,i.Lk)("div",b,[(0,i.Lk)("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=(...e)=>s.toggleToItemEditForm&&s.toggleToItemEditForm(...e))},[t[3]||(t[3]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",h,(0,l.v_)(o.label),1)],512),(0,i.Lk)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>s.deleteToDo&&s.deleteToDo(...e))},[t[4]||(t[4]=(0,i.eW)(" Delete ")),(0,i.Lk)("span",p,(0,l.v_)(o.label),1)])]),(0,i.Lk)("div",f,null,512)]))}const v={class:"edit-label"},y=["id"],k={class:"btn-group"},C={class:"visually-hidden"},T={type:"submit",class:"btn btn__primary"},D={class:"visually-hidden"};function I(e,t,o,d,s,a){return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",v,'Edit Name for "'+(0,l.v_)(o.label)+'"',1),(0,i.bo)((0,i.Lk)("input",{id:o.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=t=>e.newName=t)},null,8,y),[[n.Jo,e.newName,void 0,{lazy:!0,trim:!0}]])]),(0,i.Lk)("div",k,[(0,i.Lk)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>a.onCancel&&a.onCancel(...e))},[t[3]||(t[3]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",C,"editing "+(0,l.v_)(o.label),1)]),(0,i.Lk)("button",T,[t[4]||(t[4]=(0,i.eW)(" Save ")),(0,i.Lk)("span",D,"edit for "+(0,l.v_)(o.label),1)])])],32)}var _={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){this.$emit("edit-cancelled")}},mounted(){const e=this.$refs.labelInput;e.focus()}},E=o(1241);const L=(0,E.A)(_,[["render",I],["__scopeId","data-v-6c68a0aa"]]);var S=L,x=o(9671),w={components:{ToDoItemEditForm:S},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1,chartInstance:null}},computed:{isDone(){return this.done}},methods:{deleteToDo(){this.$emit("item-deleted")},toggleToItemEditForm(){console.log(this.$refs.editButton),this.isEditing=!0},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e.focus()}))},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},initChart(){const e=this.$refs.echart;this.chartInstance=x.Ts(e);const t={title:{text:"Task Status"},tooltip:{},xAxis:{type:"category",data:["Completed","Pending"]},yAxis:{type:"value"},series:[{name:"Tasks",type:"bar",data:[this.getCompletedCount(),this.getPendingCount()]}]};this.chartInstance.setOption(t)},getCompletedCount(){return this.isDone?1:0},getPendingCount(){return this.isDone?0:1}},mounted(){this.initChart()},beforeUnmount(){this.chartInstance&&this.chartInstance.dispose()}};const O=(0,E.A)(w,[["render",g],["__scopeId","data-v-49bd01fe"]]);var $=O,A=o(3165),F=o.n(A);function j(e,t,o,l,d,s){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(0,n.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[t[2]||(t[2]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>d.label=e),class:"input__lg"},null,512),[[n.Jo,d.label,void 0,{lazy:!0,trim:!0}]]),t[3]||(t[3]=(0,i.Lk)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1))],32)}var P={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const B=(0,E.A)(P,[["render",j]]);var W=B,X={name:"app",components:{ToDoItem:$,ToDoForm:W},data(){return{ToDoItems:[{id:F()("todo-"),label:"Learn Vue",done:!1},{id:F()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:F()("todo-"),label:"Have fun",done:!0},{id:F()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{showAlert(){this.$message({message:"Hello from Element Plus!",type:"success"})},addToDo(e){this.ToDoItems.push({id:F()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const o=this.ToDoItems.find((t=>t.id===e));o.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const M=(0,E.A)(X,[["render",a]]);var q=M,z=o(1571);o(4188);const V=(0,n.Ef)(q);V.use(z.A),V.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var s=!0,a=0;a<n.length;a++)(!1&l||d>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(s=!1,l<d&&(d=l));if(s){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,d=n[0],s=n[1],a=n[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(a)var u=a(o)}for(t&&t(n);r<d.length;r++)l=d[r],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(5445)}));n=o.O(n)})();
//# sourceMappingURL=app.1dd3daba.js.map