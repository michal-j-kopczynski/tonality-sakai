"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[3756],{4814:(v,p,n)=>{n.r(p),n.d(p,{SigninModule:()=>M});var i=n(6814),c=n(2549),e=n(9467),l=n(3859),C=n(2553),d=n(2333),g=n(707),a=n(8057),h=n(95),f=n(7853);function y(t,T){if(1&t&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Oqu(r.signupError)}}let b=(()=>{class t{constructor(r,s,o,m){this.layoutService=r,this.logService=s,this.authService=o,this.router=m,this.valCheck=["remember"],this.email="",this.username="",this.password="",this.signupError=null,this.logToConsole()}logToConsole(){this.logService.logToConsole("Service is working, hell yeah!")}signup(){this.authService.signup(this.username,this.password,this.email).subscribe(r=>{console.log(r),this.router.navigate(["/"])},r=>{console.error(r),this.signupError="Error occurred during registration. Please try again later."})}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(l.P),e.Y36(C.$),e.Y36(d.e),e.Y36(c.F0))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],decls:29,vars:8,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],["for","username",1,"block","text-900","text-xl","font-medium","mb-2"],["id","username","type","text","placeholder","Username",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModel","ngModelChange"],["for","email",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email","type","email","placeholder","Email",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModel","ngModelChange"],["for","password",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","feedback","ngModelChange"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],["class","text-red-500 mb-3",4,"ngIf"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)",3,"click"],["pButton","","pRipple","","label","Sign Up",1,"w-full","p-3","text-xl",3,"click"],[1,"text-red-500","mb-3"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7,"Welcome!"),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Log in to continue"),e.qZA()(),e.TgZ(10,"div")(11,"label",8),e._uU(12,"Username"),e.qZA(),e.TgZ(13,"input",9),e.NdJ("ngModelChange",function(u){return o.username=u}),e.qZA(),e.TgZ(14,"label",10),e._uU(15,"Email"),e.qZA(),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(u){return o.email=u}),e.qZA(),e.TgZ(17,"label",12),e._uU(18,"Password"),e.qZA(),e.TgZ(19,"p-password",13),e.NdJ("ngModelChange",function(u){return o.password=u}),e.qZA(),e.TgZ(20,"div",14)(21,"div",15),e._UZ(22,"p-checkbox",16),e.TgZ(23,"label",17),e._uU(24,"Remember me"),e.qZA()(),e.YNc(25,y,2,1,"div",18),e.TgZ(26,"a",19),e.NdJ("click",function(){return o.router.navigate(["/auth/login"])}),e._uU(27,"Already have an account? Login"),e.qZA()(),e.TgZ(28,"button",20),e.NdJ("click",function(){return o.signup()}),e.qZA()()()()()()),2&s&&(e.xp6(2),e.MGl("src","assets/layout/images/","light"===o.layoutService.config().colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(11),e.Q6J("ngModel",o.username),e.xp6(3),e.Q6J("ngModel",o.email),e.xp6(3),e.Q6J("ngModel",o.password)("toggleMask",!0)("feedback",!0),e.xp6(3),e.Q6J("binary",!0),e.xp6(3),e.Q6J("ngIf",o.signupError))},dependencies:[i.O5,g.Hq,a.XZ,h.Fj,h.JJ,h.On,f.ro],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return t})(),x=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:b}]),c.Bz]})}return t})();var Z=n(3714);let M=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[i.ez,x,g.hJ,a.nD,Z.j,h.u5,f.gz]})}return t})()},2591:(v,p,n)=>{n.d(p,{n:()=>e});var i=n(9467),c=n(4713);let e=(()=>{class l extends c.s{static \u0275fac=(()=>{let d;return function(a){return(d||(d=i.n5z(l)))(a||l)}})();static \u0275cmp=i.Xpm({type:l,selectors:[["CheckIcon"]],standalone:!0,features:[i.qOj,i.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(g,a){1&g&&(i.O4$(),i.TgZ(0,"svg",0),i._UZ(1,"path",1),i.qZA()),2&g&&(i.Tol(a.getClassNames()),i.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role))},encapsulation:2})}return l})()}}]);