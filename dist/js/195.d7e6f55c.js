"use strict";(self["webpackChunkmy_first_app"]=self["webpackChunkmy_first_app"]||[]).push([[195],{2713:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-container"},[t._t("default")],2)},i=[],r={name:"AuthContainer"},a=r,l=s(1001),u=(0,l.Z)(a,n,i,!1,null,"e7403e3c",null),o=u.exports},140:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"auth-section"},[t._t("default")],2)},i=[],r={name:"AuthSection"},a=r,l=s(1001),u=(0,l.Z)(a,n,i,!1,null,"d2b5f0d6",null),o=u.exports},338:function(t,e,s){s.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("button",t._g({class:{btn:!0,"btn--outlined":t.outlined},attrs:{type:t.type,disabled:t.loading}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"btn__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"btn__content",class:t.contentStyle},[t._t("default")],2)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},a=[],l={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},u=l,o=s(1001),c=(0,o.Z)(u,r,a,!1,null,"7b8ec26e",null),d=c.exports,p={name:"Button",components:{CircleLoader:d},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyle(){return{"btn__content--hidden":this.loading}}}},f=p,h=(0,o.Z)(f,n,i,!1,null,"bf687268",null),m=h.exports},3691:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-input"},[e("input",t._g(t._b({staticClass:"custom-input",class:!t.isValid&&"custom-input--error",domProps:{value:t.value},on:{blur:t.blurHandler}},"input",t.$attrs,!1),t.listeners)),t.isValid?t._e():e("span",{staticClass:"custom-input__error"},[t._v(t._s(t.error))])])},i=[],r={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{value:{type:String,default:""},errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}},watch:{value(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{validate(){return this.isValid=this.rules.every((t=>{const{hasPassed:e,message:s}=t(this.value);return e||(this.error=s||this.errorMessage),e})),this.isValid},blurHandler(){this.isFirstInput&&this.validate(),this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("input","")}}},a=r,l=s(1001),u=(0,l.Z)(a,n,i,!1,null,"5d5e180c",null),o=u.exports},5076:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},i=[],r={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},a=r,l=s(1001),u=(0,l.Z)(a,n,i,!1,null,"1d5d3ea4",null),o=u.exports},4884:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("form",t._g({staticClass:"form"},t.$listeners),[t._t("default")],2)},i=[],r=(s(7658),{name:"Form",provide(){return{form:this}},data(){return{inputs:[]}},methods:{registerInput(t){this.inputs.push(t)},unRegisterInput(t){this.inputs.filter((e=>e!==t))},validate(){return this.inputs.reduce(((t,e)=>{const s=e.validate();return t&&s}),!0)},reset(){this.inputs.forEach((t=>t.reset()))}}}),a=r,l=s(1001),u=(0,l.Z)(a,n,i,!1,null,"35fad603",null),o=u.exports},3195:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var n=function(){var t=this,e=t._self._c;return e("main",{staticClass:"login"},[e("AuthSection",[e("LoginForm")],1)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("AuthContainer",{staticClass:"login"},[e("MainTitle",{staticClass:"login__title"},[t._v("Логін")]),e("Form",{ref:"form",staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("CustomInput",{staticClass:"login__input",attrs:{placeholder:"Email",autocomplete:"email",name:"email",rules:t.emailRules},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),e("CustomInput",{staticClass:"login__input",attrs:{placeholder:"Password",autocomplete:"current-password",type:"password",name:"password",rules:t.passwordRules},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),e("Button",{staticClass:"login__btn",attrs:{type:"submit",loading:t.loading}},[t._v("Вхід")])],1)],1)},a=[],l=(s(7658),s(4884)),u=s(3691),o=s(338),c=s(2713),d=s(5076),p=s(4034),f=s(629),h={name:"Login",components:{Form:l.Z,CustomInput:u.Z,Button:o.Z,AuthContainer:c.Z,MainTitle:d.Z},data(){return{loading:!1,formData:{email:"",password:""}}},computed:{rules(){return{emailValidation:p.D6,passwordValidation:p.aO,isRequired:p.q9}},emailRules(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules(){return[this.rules.isRequired]}},methods:{...(0,f.nv)("auth",["login"]),async handleSubmit(){const{form:t}=this.$refs,e=t.validate();if(e)try{this.loading=!0,await this.login(this.formData),this.$router.push({name:"homepage"}),t.reset()}catch(s){this.$notify({type:"error",title:"Виникла помилка",text:s.message})}finally{this.loading=!1}}}},m=h,_=s(1001),g=(0,_.Z)(m,r,a,!1,null,"134e82bb",null),v=g.exports,y=s(140),b={name:"LoginPage",components:{LoginForm:v,AuthSection:y.Z}},C=b,Z=(0,_.Z)(C,n,i,!1,null,null,null),w=Z.exports},4034:function(t,e,s){s.d(e,{D6:function(){return r},F8:function(){return i},aO:function(){return a},q9:function(){return n}});const n=t=>({hasPassed:!!t,message:"Будь ласка, введіть значення"}),i=t=>e=>({hasPassed:e.length<=t,message:"'Ви перевищили ліміт"}),r=t=>({hasPassed:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(t),message:"Не вірний емейл"}),a=t=>({hasPassed:/^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(t),message:"Пароль має містити одну цифру та один символ"})}}]);
//# sourceMappingURL=195.d7e6f55c.js.map