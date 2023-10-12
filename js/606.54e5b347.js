"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[606],{6150:function(t,e,a){a.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"star-rating"},[t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--outlined"})})),e("div",{staticClass:"star-rating__colored",style:t.ratingWidthStyle},t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--colored"})})),0)],2)},s=[],n={name:"StarRating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return this.rating/this.starLimit*100},ratingWidthStyle(){return`width: ${this.ratingWidth}%;`}}},r=n,o=a(1001),c=(0,o.Z)(r,i,s,!1,null,"4660fbde",null),l=c.exports},338:function(t,e,a){a.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("button",t._g({class:{btn:!0,"btn--outlined":t.outlined},attrs:{type:t.type,disabled:t.loading}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"btn__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"btn__content",class:t.contentStyle},[t._t("default")],2)],1)},s=[],n=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},r=[],o={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},c=o,l=a(1001),u=(0,l.Z)(c,n,r,!1,null,"7b8ec26e",null),p=u.exports,d={name:"Button",components:{CircleLoader:p},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyle(){return{"btn__content--hidden":this.loading}}}},m=d,v=(0,l.Z)(m,i,s,!1,null,"bf687268",null),h=v.exports},7018:function(t,e,a){a.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-spacer"},[t._t("default")],2)},s=[],n={name:"SectionSpacer"},r=n,o=a(1001),c=(0,o.Z)(r,i,s,!1,null,"120c49b9",null),l=c.exports},606:function(t,e,a){a.r(e),a.d(e,{default:function(){return X}});var i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"apartment-page"},[e("SectionWithHeaderSpacer",[e("Container",[t.apartment?e("div",{staticClass:"apartment-page__content"},[e("ApartmentsMainInfo",{attrs:{apartment:t.apartment}}),e("div",{staticClass:"apartment-page__additional-info"},[e("ApartmentsOwner",{staticClass:"apartment-page__owner",attrs:{owner:t.apartment.owner}}),e("Reviews",{attrs:{reviews:t.reviewsList}})],1)],1):t._e()])],1)],1)},s=[],n=a(4620),r=function(){var t=this,e=t._self._c;return e("article",{staticClass:"apartment-main-info"},[e("div",{staticClass:"apartment-main-info__heading"},[e("h1",{staticClass:"apartment-main-info__title"},[t._v(t._s(t.apartment.title))]),e("StarRating",{attrs:{rating:t.apartment.rating}})],1),e("img",{staticClass:"apartment-main-info__photo",attrs:{src:t.apartment.imgUrl,alt:""}}),e("p",{staticClass:"apartment-main-info__description"},[t._v(t._s(t.apartment.descr))]),e("div",{staticClass:"apartment-main-info__btn"},[e("Button",{attrs:{loading:t.isLoading},on:{click:t.handleApartmentsBooking}},[t._v(" Забронювати ")])],1)])},o=[],c=a(6150),l=a(338),u=a(2019),p={name:"ApartmentsMainInfo",components:{StarRating:c.Z,Button:l.Z},props:{apartment:{type:Object,require:!0}},data(){return{isLoading:!1}},methods:{async handleApartmentsBooking(){const t={apartmentId:this.$route.params.id,date:Date.now()};try{this.isLoading=!0,await(0,u.M)(t),this.$notify({type:"success",title:"Замовлення додано"})}catch(e){this.$notify({type:"error",title:"Виникла помилка",text:e.message})}finally{this.isLoading=!1}}}},d=p,m=a(1001),v=(0,m.Z)(d,r,o,!1,null,"43afdf5a",null),h=v.exports,_=function(){var t=this,e=t._self._c;return e("section",{staticClass:"apartments-owner"},[e("h2",{staticClass:"apartments-owner__title"},[t._v("Інформація про власника:")]),e("p",{staticClass:"apartments-owner__info"},[t._v(t._s(t.owner.name))]),e("p",{staticClass:"apartments-owner__info"},[t._v("tel: "+t._s(t.owner.phone))]),e("p",{staticClass:"apartments-owner__info"},[t._v("email: "+t._s(t.owner.email))])])},g=[],f={name:"AprtmentsOwner",props:{owner:{type:Object,required:!0}}},w=f,C=(0,m.Z)(w,_,g,!1,null,"3bbe1122",null),y=C.exports,b=function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews"},[e("div",{staticClass:"reviews__heading"},[e("h2",{staticClass:"reviews__title"},[t._v("Загальний рейтинг")]),e("div",{staticClass:"reviews__rating"},[e("span",[t._v(t._s(t.amountOfReviews)+" відгук(ів)")]),e("Rating",{attrs:{rating:t.totalRating}})],1)]),t._l(t.currentReviews,(function(t){return e("ReviewsItem",{key:t.author,attrs:{review:t}})})),e("button",{staticClass:"reviews__show-more",on:{click:t.toggleReviews}},[t._v(" "+t._s(t.buttonText)+" ")])],2)},L=[],R=function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews-item"},[e("ReviewsHeading",{attrs:{rating:t.review.rating,author:t.review.author}}),e("p",{staticClass:"reviews-item__content"},[t._v(t._s(t.review.content))])],1)},Z=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reviews-heading"},[e("Avatar",{staticClass:"reviews-heading__avatar"}),e("div",{staticClass:"reviews-heading__content"},[e("span",{staticClass:"reviews-heading__author"},[t._v(t._s(t.author))]),e("Rating",{attrs:{rating:t.rating}})],1)],1)},A=[],S=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"17",cy:"17",r:"17",fill:"white"}}),e("circle",{attrs:{cx:"17",cy:"17",r:"16",fill:"white",stroke:"#FF662D","stroke-width":"2"}}),e("path",{attrs:{fill:"#FF662D","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.8053 28.8444L4.83307 28.8028C7.04004 25.4919 10.7338 23.5156 14.712 23.5156H19.2878C23.2661 23.5156 26.9599 25.4919 29.1669 28.8028L29.1946 28.8445C32.1687 25.783 34 21.6054 34 17C34 7.61115 26.3889 0 17 0C7.61115 0 0 7.61115 0 17C0 21.6053 1.83124 25.783 4.8053 28.8444ZM16.9999 7C12.9288 7 9.61713 10.3117 9.61713 14.3828C9.61713 18.4539 12.9288 21.7656 16.9999 21.7656C21.071 21.7656 24.3828 18.4539 24.3828 14.3828C24.3828 10.3117 21.071 7 16.9999 7Z"}})])},q=[],k={name:"ReviewsAvatar"},B=k,I=(0,m.Z)(B,S,q,!1,null,null,null),O=I.exports,M={name:"ReviewsHeading",components:{Rating:c.Z,Avatar:O},props:{author:{type:String,required:!0},rating:{type:Number,default:0}}},$=M,H=(0,m.Z)($,x,A,!1,null,"2bdf4a3c",null),N=H.exports,W={name:"ReviewsItem",components:{ReviewsHeading:N},props:{review:{type:Object,required:!0}}},F=W,j=(0,m.Z)(F,R,Z,!1,null,"0b3cbbe9",null),D=j.exports,J={name:"Reviews",components:{ReviewsItem:D,Rating:c.Z},props:{reviews:{type:Array,required:!0}},data(){return{reviewsLimit:2}},computed:{totalRating(){const t=this.reviews.reduce(((t,e)=>t+e.rating),0);return t/this.reviews.length},amountOfReviews(){return this.reviews.length},currentReviews(){return this.reviews.slice(0,this.reviewsLimit)},buttonText(){return this.reviewsLimit===this.reviews.length?"Згорнути":"Читати наступне..."}},methods:{toggleReviews(){this.reviewsLimit!==this.reviews.length?this.reviewsLimit=this.reviews.length:this.reviewsLimit=2}}},T=J,U=(0,m.Z)(T,b,L,!1,null,"7cbdd9da",null),P=U.exports,z=JSON.parse('[{"author":"Alex","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":3.5},{"author":"Ron","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":4.5},{"author":"Marry","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":4.8},{"author":"John","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":2.8}]'),E=a(1438),G=a(7018),K={name:"ApartmentPage",components:{Container:n.Z,ApartmentsMainInfo:h,ApartmentsOwner:y,Reviews:P,SectionWithHeaderSpacer:G.Z},data(){return{apartment:null}},computed:{reviewsList(){return z}},async created(){try{const{id:t}=this.$route.params,{data:e}=await(0,E.I)(t);this.apartment=e}catch(t){console.error(t)}}},Q=K,V=(0,m.Z)(Q,i,s,!1,null,"51e59f2b",null),X=V.exports},1438:function(t,e,a){a.d(e,{I:function(){return n},U:function(){return s}});var i=a(8042);const s=()=>i.Z.get("/apartments"),n=t=>i.Z.get(`/apartments/${t}`)},2019:function(t,e,a){a.d(e,{A:function(){return n},M:function(){return s}});var i=a(8042);const s=t=>i.Z.post("/orders",t),n=()=>i.Z.get("/orders")}}]);
//# sourceMappingURL=606.54e5b347.js.map