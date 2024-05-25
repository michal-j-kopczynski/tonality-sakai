"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[8099],{2105:(y,p,t)=>{t.r(p),t.d(p,{LoginModule:()=>b});var n=t(6814),m=t(2549),e=t(9467),l=t(3859),Z=t(2553),g=t(2333),c=t(5219),s=t(707),f=t(8057),h=t(95),v=t(7853),C=t(4104);let M=(()=>{class o{constructor(r,i,a,d,u){this.layoutService=r,this.logService=i,this.authService=a,this.router=d,this.serviceMess=u,this.valCheck=["remember"],this.email="",this.password="",this.loginError=null,this.logToConsole()}logToConsole(){this.logService.logToConsole("Service is working, hell yeah!")}login(){this.authService.login(this.email,this.password).subscribe(r=>{console.log(r),this.router.navigate(["/"])},r=>{console.error(r),this.loginError="Sorry, your password was incorrect. Please double-check your password.",this.showWarnViaToast(this.loginError)})}showWarnViaToast(r){this.serviceMess.add({key:"tst",severity:"warn",summary:"Warn Message",detail:r,life:10500})}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(l.P),e.Y36(Z.$),e.Y36(g.e),e.Y36(m.F0),e.Y36(c.ez))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:6,consts:[["key","tst"],[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Username or email",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModel","ngModelChange"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","feedback","ngModelChange"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)",3,"click"],["pButton","","pRipple","","label","Log In",1,"w-full","p-3","text-xl",3,"click"]],template:function(i,a){1&i&&(e._UZ(0,"p-toast",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e._uU(8,"Welcome!"),e.qZA(),e.TgZ(9,"span",8),e._uU(10,"Log in to continue"),e.qZA()(),e.TgZ(11,"div")(12,"label",9),e._uU(13,"Username or email"),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(u){return a.email=u}),e.qZA(),e.TgZ(15,"label",11),e._uU(16,"Password"),e.qZA(),e.TgZ(17,"p-password",12),e.NdJ("ngModelChange",function(u){return a.password=u}),e.qZA(),e.TgZ(18,"div",13)(19,"div",14),e._UZ(20,"p-checkbox",15),e.TgZ(21,"label",16),e._uU(22,"Remember me"),e.qZA()(),e.TgZ(23,"a",17),e._uU(24,"Forgot password?"),e.qZA(),e.TgZ(25,"a",18),e.NdJ("click",function(){return a.router.navigate(["/auth/signin"])}),e._uU(26,"Register"),e.qZA()(),e.TgZ(27,"button",19),e.NdJ("click",function(){return a.login()}),e.qZA()()()()()()),2&i&&(e.xp6(3),e.MGl("src","assets/layout/images/","light"===a.layoutService.config().colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(11),e.Q6J("ngModel",a.email),e.xp6(3),e.Q6J("ngModel",a.password)("toggleMask",!1)("feedback",!1),e.xp6(3),e.Q6J("binary",!0))},dependencies:[s.Hq,f.XZ,h.Fj,h.JJ,h.On,v.ro,C.FN],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return o})(),w=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:M}]),m.Bz]})}return o})();var T=t(3714);let b=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({providers:[c.ez],imports:[n.ez,w,s.hJ,f.nD,T.j,h.u5,v.gz,C.EV]})}return o})()},2591:(y,p,t)=>{t.d(p,{n:()=>e});var n=t(9467),m=t(4713);let e=(()=>{class l extends m.s{static \u0275fac=(()=>{let g;return function(s){return(g||(g=n.n5z(l)))(s||l)}})();static \u0275cmp=n.Xpm({type:l,selectors:[["CheckIcon"]],standalone:!0,features:[n.qOj,n.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(c,s){1&c&&(n.O4$(),n.TgZ(0,"svg",0),n._UZ(1,"path",1),n.qZA()),2&c&&(n.Tol(s.getClassNames()),n.uIk("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role))},encapsulation:2})}return l})()}}]);