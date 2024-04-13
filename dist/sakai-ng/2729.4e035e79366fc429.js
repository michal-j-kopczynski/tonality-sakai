"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2729],{1782:(T,p,e)=>{e.d(p,{w:()=>u});var m=e(6814),d=e(9467);let u=(()=>{class t{static#t=this.\u0275fac=function(r){return new(r||t)};static#e=this.\u0275mod=d.oAB({type:t});static#s=this.\u0275inj=d.cJS({imports:[m.ez]})}return t})()},2729:(T,p,e)=>{e.r(p),e.d(p,{RemotetransModule:()=>Z});var m=e(6814),d=e(2549),u=e(5219),t=e(9467),y=e(6739),i=e(9862);let r=(()=>{class s{constructor(a){this.http=a,this.apiUrl="http://3.123.146.102:80/api/generate_transcription_remote_url/"}generateRemoteTranscription(a,o,n){const l=localStorage.getItem("authToken");if(!l)throw new Error("No authentication token available.");const h=new i.WM({Authorization:`token ${l}`});return this.http.post(this.apiUrl,{remoteurl:a,trans_name:o,language:n},{headers:h})}static#t=this.\u0275fac=function(o){return new(o||s)(t.LFG(i.eN))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var f=e(615),v=e(707),g=e(4480),c=e(95),M=e(4104),C=e(3714),S=e(3965);let R=(()=>{class s{constructor(a,o,n,l){this.userFileService=a,this.transcriptionService=o,this.taskService=n,this.service=l,this.transData=[],this.filteredTransData=[],this.editDialogVisible=!1,this.playDialogVisible=!1,this.selectedAudioFileName="",this.transcriptionName="",this.items=[],this.cardMenu=[],this.msgs=[],this.languageOptions=["pl","en"],this.remote_url="",this.selectedTranscription=""}generateRemoteTranscription(a){this.remote_url&&a?(console.error(this.remote_url),this.showInfoViaToast(),this.transcriptionService.generateRemoteTranscription(this.remote_url,a,this.selectedLanguage).subscribe(o=>{console.log("Transcription generated successfully:",o),this.taskService.setTaskId(o.task_id),console.log(this.taskService.taskId),this.taskService.pollTaskStatus().subscribe(n=>{console.log("Task status response:",n),"completed"==n.status&&(console.log("Loading message popup..."),this.showSuccessViaToast())},n=>{console.error("Error polling task status:",n)})},o=>{console.error("Error generating transcription:",o)})):(console.error("No audio file selected or transcription name is empty"),this.showErrorViaToast())}showInfoViaToast(){this.service.add({key:"tst",severity:"info",summary:"Info Message",detail:"Your transrciption is being processed...",life:6500})}showErrorViaToast(){this.service.add({key:"tst",severity:"error",summary:"Error Message",detail:"No audio file selected or transcription name is empty",life:6500})}showSuccessViaToast(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Your transcription is ready!",life:6500})}showSuccessViaToastUpload(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Your file has been succesfully added",life:6500})}showWarnViaToast(){this.service.add({key:"tst",severity:"warn",summary:"Warn Message",detail:"Succesfully deleted transcription"})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(y.B),t.Y36(r),t.Y36(f.M),t.Y36(u.ez))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-remotetrans"]],features:[t._Bn([u.ez])],decls:19,vars:6,consts:[[1,"card"],[3,"ngSubmit"],["transcriptionForm","ngForm"],[1,"col-12","mb-2",2,"width","100%"],["type","text","pInputText","","placeholder","url of the audio you want to transribe","name","r_url","required","",2,"width","800px",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-12","mb-2","lg:col-4","lg:mb-0"],["name","selectedLanguage","placeholder","Select the language used in the audio","ngModel","","required","",3,"options","ngModel","showClear","ngModelChange"],["selectedLanguageModel","ngModel"],["type","text","pInputText","","placeholder","Name of the transcription","name","transcriptionName","required","",3,"ngModel","ngModelChange"],["transcriptionNameModel","ngModel"],["type","submit","pButton","","pRipple","",3,"disabled"],["key","tst"]],template:function(o,n){if(1&o&&(t.TgZ(0,"p"),t._uU(1,"Remote URL transcription service"),t.qZA(),t.TgZ(2,"div",0)(3,"h5"),t._uU(4,"Generate transcription from remote URL (youtube)"),t.qZA(),t.TgZ(5,"form",1,2),t.NdJ("ngSubmit",function(){return n.generateRemoteTranscription(n.transcriptionName)}),t.TgZ(7,"div",3)(8,"input",4),t.NdJ("ngModelChange",function(h){return n.remote_url=h}),t.qZA()(),t.TgZ(9,"div",5)(10,"div",6)(11,"p-dropdown",7,8),t.NdJ("ngModelChange",function(h){return n.selectedLanguage=h}),t.qZA()()(),t.TgZ(13,"div",6)(14,"input",9,10),t.NdJ("ngModelChange",function(h){return n.transcriptionName=h}),t.qZA()(),t.TgZ(16,"button",11),t._uU(17,"Generate"),t.qZA()()(),t._UZ(18,"p-toast",12)),2&o){const l=t.MAs(6);t.xp6(8),t.Q6J("ngModel",n.remote_url),t.xp6(3),t.Q6J("options",n.languageOptions)("ngModel",n.selectedLanguage)("showClear",!0),t.xp6(3),t.Q6J("ngModel",n.transcriptionName),t.xp6(2),t.Q6J("disabled",!l.valid)}},dependencies:[v.Hq,g.H,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.On,c.F,M.FN,C.o,S.Lt],encapsulation:2})}return s})(),E=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[d.Bz.forChild([{path:"",component:R}]),d.Bz]})}return s})();var A=e(9552),N=e(3530),F=e(1782),U=e(1122),I=e(1230),L=e(9502),B=e(7161),J=e(3722);let Z=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({providers:[y.B,u.ez],imports:[m.ez,E,A.U$,v.hJ,g.T,N.S,F.w,c.u5,U.$9,I.Q,L.$,B.O,M.EV,C.j,J.O,S.kW]})}return s})()},6739:(T,p,e)=>{e.d(p,{B:()=>u});var m=e(9467),d=e(9862);let u=(()=>{class t{constructor(i){this.http=i,this.apiUrl="http://3.123.146.102:80/api/get_user_audio_files/",this.deleteUrl="http://3.123.146.102:80/api/delete_file/"}getFileList(){const i=localStorage.getItem("authToken");if(!i)throw new Error("No authentication token available.");return this.http.get(this.apiUrl,{headers:{Authorization:`Token ${i}`}})}deleteFileByName(i){const r=localStorage.getItem("authToken");if(!r)throw new Error("No authentication token available.");const f={Authorization:`Token ${r}`},g=`${this.deleteUrl}?filename=${encodeURIComponent(i)}`;return this.http.delete(g,{headers:f})}getAudioFile(i){return this.http.get(`http://localhost:8000/api/get_audio_file/${i}`,{responseType:"blob"})}static#t=this.\u0275fac=function(r){return new(r||t)(m.LFG(d.eN))};static#e=this.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);