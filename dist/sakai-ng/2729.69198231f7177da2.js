"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2729],{2729:(P,h,a)=>{a.r(h),a.d(h,{RemotetransModule:()=>O});var _=a(6814),T=a(2549),m=a(5219),e=a(9467),f=a(6739),p=a(9862),c=a(553);let A=(()=>{class s{constructor(t){this.http=t,this.apiUrl=`https://${c.N.urls.backendURL}/api/generate_transcription_remote_url/`,this.remotetranscriptionListUrl=`https://${c.N.urls.backendURL}/api/get_user_remote_transcriptions/`,this.deleteUrl=`https://${c.N.urls.backendURL}/api/delete_remote_transcription/`,this.regenerateapiUrl=`https://${c.N.urls.backendURL}/api/regenerate_remote_transcription_remote_url/`,this.regenerateNotesRemoteapiUrl=`https://${c.N.urls.backendURL}/api/regenerate_remote_notes_remote_url/`,this.save_edit_url=`https://${c.N.urls.backendURL}/api/save_edited_transcript_remote/`,this.questionAPI=`https://${c.N.urls.backendURL}/api/ask_question/`}generateRemoteTranscription(t,o,n){const r=localStorage.getItem("authToken");if(!r)throw new Error("No authentication token available.");const i=new p.WM({Authorization:`token ${r}`});return this.http.post(this.apiUrl,{remoteurl:t,trans_name:o,language:n},{headers:i})}getRemoteTranscriptionList(){const t=localStorage.getItem("authToken");if(!t)throw new Error("No authentication token available.");return this.http.get(this.remotetranscriptionListUrl,{headers:{Authorization:`Token ${t}`}})}deleteTranscriptionByName(t,o){const n=localStorage.getItem("authToken");if(!n)throw new Error("No authentication token available.");const r={Authorization:`Token ${n}`},i=`${this.deleteUrl}?trans_name=${encodeURIComponent(t)}&date_of_creation=${encodeURIComponent(o)}`;return this.http.delete(i,{headers:r})}regenerate_summary_remote(t,o){const n=localStorage.getItem("authToken");if(!n)throw new Error("No authentication token available.");const r=new p.WM({Authorization:`token ${n}`});return this.http.post(this.regenerateapiUrl,{remoteurl:t,trans_name:o},{headers:r})}regenerate_notes_remote(t,o){const n=localStorage.getItem("authToken");if(!n)throw new Error("No authentication token available.");const r=new p.WM({Authorization:`token ${n}`});return this.http.post(this.regenerateNotesRemoteapiUrl,{remoteurl:t,trans_name:o},{headers:r})}save_edited_transcript_remote(t,o,n){const r=localStorage.getItem("authToken");if(!r)throw new Error("No authentication token available.");const i=new p.WM({Authorization:`token ${r}`});return this.http.post(this.save_edit_url,{trans_name:t,uploaded_at:o,edited_transcript:n},{headers:i})}ask_question(t,o,n){const r=localStorage.getItem("authToken");if(!r)throw new Error("No authentication token available.");const i=new p.WM({Authorization:`token ${r}`});return this.http.post(this.questionAPI,{trans_name:t,uploaded_at:o,question:n,type_data:"remotelist"},{headers:i})}static#e=this.\u0275fac=function(o){return new(o||s)(e.LFG(p.eN))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var S=a(615),M=a(6593),U=a(7852),g=a(9552),b=a(707),v=a(4480),y=a(3530),l=a(95),C=a(1230),Z=a(4104),k=a(3714),w=a(3965),x=a(420),N=a(3351);function R(s,u){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"ID"),e.qZA(),e.TgZ(3,"th",32),e._uU(4,"URL "),e._UZ(5,"p-sortIcon",33),e.qZA(),e.TgZ(6,"th",34),e._uU(7,"YT title "),e._UZ(8,"p-sortIcon",35),e.qZA(),e.TgZ(9,"th",36),e._uU(10,"Transcription name "),e._UZ(11,"p-sortIcon",35),e.qZA(),e.TgZ(12,"th",37),e._uU(13,"Uploaded At "),e._UZ(14,"p-sortIcon",38),e.qZA(),e.TgZ(15,"th",39),e._uU(16,"Transcript"),e._UZ(17,"p-sortIcon",40),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Action"),e.qZA()())}function q(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"htmlToPlain"),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"td")(16,"div",41)(17,"button",42),e.NdJ("click",function(){const r=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.playAudio(i.audioFile,r))}),e.qZA(),e.TgZ(18,"button",43),e.NdJ("click",function(){const r=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.deleteTranscription(r.trans_name,r.uploaded_at))}),e.qZA()()()()}if(2&s){const t=u.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.remoteurl),e.xp6(2),e.Oqu(t.remote_title),e.xp6(2),e.Oqu(t.trans_name),e.xp6(2),e.Oqu(t.uploaded_at),e.xp6(2),e.Oqu(e.lcZ(13,6,e.Dn7(14,8,t.transcript,0,200)))}}function J(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",44)(1,"label",45),e._uU(2,"File Name"),e.qZA(),e.TgZ(3,"input",46),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.selectedAudioFile.file=n)}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.selectedAudioFile.file)}}function I(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.hideEditDialog())}),e.qZA(),e.TgZ(1,"button",48),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.saveAudioFile())}),e.qZA()}}function D(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",0)(1,"p-panel",49),e._UZ(2,"p",50),e.qZA()(),e.TgZ(3,"div",0)(4,"p-panel",51),e._UZ(5,"iframe",52),e.qZA()(),e.TgZ(6,"div",0)(7,"p-panel",53)(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"div",54)(11,"button",55),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.regenerate_summary())}),e.qZA()()()(),e.TgZ(12,"div",0)(13,"p-panel",56)(14,"angular-editor",57),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.htmlContent=n)}),e.qZA(),e.TgZ(15,"button",58),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.save_edited_transcript_remote())}),e.qZA()()(),e.TgZ(16,"div",0)(17,"p-panel",59)(18,"p"),e._uU(19),e.qZA(),e.TgZ(20,"div",54)(21,"button",60),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.regenerate_notes())}),e.qZA()()()(),e.TgZ(22,"div",0)(23,"p-panel",61)(24,"p"),e._uU(25),e.qZA()()(),e.TgZ(26,"div",0)(27,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onSubmitQuestion())}),e.TgZ(29,"p-panel",62)(30,"textarea",63),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.question=n)}),e.qZA(),e.TgZ(31,"button",15),e._uU(32,"Ask"),e.qZA()()(),e.TgZ(33,"p-panel",64)(34,"p"),e._uU(35),e.qZA()()(),e.TgZ(36,"div",0)(37,"p-panel",65)(38,"p"),e._uU(39),e.qZA()()()}if(2&s){const t=e.MAs(28),o=e.oxw();e.xp6(1),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("innerHTML",o.getCurrentTranshtml(),e.oJD),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("src",o.safe_url,e.uOi),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(2),e.Oqu(o.transcriptionsummaryData),e.xp6(4),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("placeholder","Enter text here ....")("ngModel",o.htmlContent)("config",o.editorConfig),e.xp6(3),e.Q6J("toggleable",!0),e.xp6(2),e.Oqu(o.transcriptionNotesData),e.xp6(4),e.Q6J("toggleable",!0),e.xp6(2),e.Oqu(o.transcription_seconds_data),e.xp6(4),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("ngModel",o.question),e.xp6(1),e.Q6J("disabled",!t.valid),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(2),e.Oqu(o.answer),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(2),e.Oqu(o.transcription_speaker_diarization)}}function L(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",66),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.hidePlayDialog())}),e.qZA()}}const E=()=>[10,20,30],Q=()=>({width:"450px"});let z=(()=>{class s{constructor(t,o,n,r,i,d){this.userFileService=t,this.transcriptionService=o,this.taskService=n,this.service=r,this.sanitizer=i,this.data=d,this.transData=[],this.filteredTransData=[],this.editDialogVisible=!1,this.playDialogVisible=!1,this.selectedAudioFileName="",this.transcriptionName="",this.transcriptionsummaryData="",this.transcription_seconds_data="",this.transcription_speaker_diarization="",this.transcriptionNotesData="",this.question="",this.answer="",this.items=[],this.cardMenu=[],this.msgs=[],this.languageOptions=["pl","en"],this.remote_url="",this.htmlContent="There was an error. Please try again later...",this.seconds=0,this.editorConfig={editable:!0,spellcheck:!0,height:"auto",minHeight:"0",maxHeight:"auto",width:"auto",minWidth:"0",translate:"yes",enableToolbar:!0,showToolbar:!0,placeholder:"Enter text here...",defaultParagraphSeparator:"",defaultFontName:"",defaultFontSize:"",fonts:[{class:"arial",name:"Arial"}],uploadWithCredentials:!1,sanitize:!0,toolbarPosition:"top",toolbarHiddenButtons:[["bold","italic"],["fontSize"]]},this.selectedTranscription=""}ngOnInit(){this.fetchTranscriptions(),this.safe_url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/izGwDsrQ1eQ"),this.data.currentMessage.subscribe(t=>{this.seconds=t})}generateRemoteTranscription(t){this.remote_url&&t?(console.error(this.remote_url),this.showInfoViaToast(),this.transcriptionService.generateRemoteTranscription(this.remote_url,t,this.selectedLanguage).subscribe(o=>{console.log("Transcription generated successfully:",o),this.taskService.setTaskId(o.task_id),console.log(this.taskService.taskId),this.taskService.pollTaskStatus(o.task_id).subscribe(n=>{console.log("Task status response:",n),"completed"==n.status&&(console.log("Loading message popup..."),this.showSuccessViaToast(),this.fetchTranscriptions())},n=>{console.error("Error polling task status:",n)})},o=>{console.error("Error generating transcription:",o)})):(console.error("No audio file selected or transcription name is empty"),this.showErrorViaToast())}fetchTranscriptions(){this.transcriptionService.getRemoteTranscriptionList().subscribe(t=>{this.transData=t,this.filteredTransData=t},t=>{console.error("Error fetching audio files:",t)})}deleteTranscription(t,o){this.transcriptionService.deleteTranscriptionByName(t,o).subscribe(()=>{this.transData=this.transData.filter(n=>n.uploaded_at!==o),this.filteredTransData=this.filteredTransData.filter(n=>n.uploaded_at!==o),this.showWarnViaToast()},n=>{console.error("Error deleting audio file:",n)})}regenerate_summary(){console.log("Regenerating transcription..."),this.selectedTranscription.id&&this.selectedTranscription.trans_name?(console.error(this.remote_url),this.showInfoViaToastCustom("Your summary is being regenerated..."),this.transcriptionService.regenerate_summary_remote(this.selectedTranscription.remoteurl,this.selectedTranscription.trans_name).subscribe(t=>{console.log("Transcription summary response generated successfully:",t),this.taskService.setTaskId(t.task_id),console.log(this.taskService.taskId),this.taskService.pollTaskStatus(t.task_id).subscribe(o=>{console.log("Task status response:",o),"completed"==o.status&&(console.log("Loading message popup..."),this.showSuccessViaToastCustom("Your summary is ready!"),this.transcriptionsummaryData=o.result,this.fetchTranscriptions())},o=>{console.error("Error polling task status:",o)})},t=>{console.error("Error generating transcription:",t)})):(console.error("No audio file selected or transcription name is empty"),this.showErrorViaToast())}regenerate_notes(){console.log("Regenerating notes..."),this.selectedTranscription.id?(this.showInfoViaToastCustom("Your notes are being regenerated..."),this.transcriptionService.regenerate_notes_remote(this.selectedTranscription.remoteurl,this.selectedTranscription.trans_name).subscribe(t=>{console.log("Notes response generated successfully:",t),this.taskService.setTaskId(t.task_id),console.log(this.taskService.taskId),this.taskService.pollTaskStatus(t.task_id).subscribe(o=>{console.log("Task status response:",o),"completed"==o.status&&(console.log("Loading message popup..."),this.showSuccessViaToastCustom("Your notes are ready!"),this.transcriptionNotesData=o.result,this.fetchTranscriptions())},o=>{console.error("Error polling task status:",o)})},t=>{console.error("Error generating transcription:",t)})):(console.error("No audio file selected or transcription name is empty"),this.showErrorViaToast())}onGlobalFilter(t){t=t.trim().toLowerCase(),this.filteredTransData=this.transData.filter(o=>o.id.toString().toLowerCase().includes(t)||o.user.toLowerCase().includes(t)||o.remote_title.toLowerCase().includes(t)||o.uploaded_at.toLowerCase().includes(t)||o.transcript.toLowerCase().includes(t))}playAudio(t,o){this.safe_url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.getVideoId(o.remoteurl)),this.selectedAudioFile=t,this.playDialogVisible=!0,this.selectedTranscription=o,this.htmlContent=this.getCurrentTrans(),this.transcription_seconds_data=this.selectedTranscription.transcript_seconds,this.transcription_speaker_diarization=this.selectedTranscription.speaker_diarization,this.transcriptionsummaryData=this.getCurrentTransSummary(),this.transcriptionNotesData=this.getCurrentTransNotes()}hidePlayDialog(){this.playDialogVisible=!1,this.fetchTranscriptions()}getVideoId(t){const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return n&&11===n[2].length?n[2]:null}getEmbedUrl(){return this.getVideoId(this.selectedTranscription.remote_url),this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/izGwDsrQ1eQ")}getAudioUrl(){return this.selectedTranscription.remote_url}getCurrentTrans(){return this.selectedTranscription.transcript}getCurrentTransSummary(){return this.selectedTranscription.summary}getCurrentTransNotes(){return this.selectedTranscription.notes}showInfoViaToastCustom(t){this.service.add({key:"tst",severity:"info",summary:"Info Message",detail:t,life:6500})}showSuccessViaToastCustom(t){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:t,life:6500})}showInfoViaToast(){this.service.add({key:"tst",severity:"info",summary:"Info Message",detail:"Your transrciption is being processed...",life:6500})}showErrorViaToast(){this.service.add({key:"tst",severity:"error",summary:"Error Message",detail:"No audio file selected or transcription name is empty",life:6500})}showSuccessViaToast(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Your transcription is ready!",life:6500})}showSuccessViaToastUpload(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Your file has been succesfully added",life:6500})}showWarnViaToast(){this.service.add({key:"tst",severity:"warn",summary:"Warn Message",detail:"Succesfully deleted transcription"})}save_edited_transcript_remote(){console.error("saving..."),this.transcriptionService.save_edited_transcript_remote(this.selectedTranscription.trans_name,this.selectedTranscription.uploaded_at,this.htmlContent).subscribe(t=>{console.log("Save successful:",t),this.showSuccessViaToastCustom("Save successful")},t=>{console.error("Error saving:",t)})}getCurrentTranshtml(){return this.sanitizer.bypassSecurityTrustHtml(this.selectedTranscription.transcript)}onSubmitQuestion(){this.processQuestion(this.question)}processQuestion(t){console.log("processing question..."),this.selectedTranscription.id&&this.selectedTranscription.trans_name?(console.error(this.remote_url),this.showInfoViaToastCustom("Your question is being processed..."),this.transcriptionService.ask_question(this.selectedTranscription.trans_name,this.selectedTranscription.uploaded_at,t).subscribe(o=>{console.log("working...:",o),this.taskService.setTaskId(o.task_id),console.log(this.taskService.taskId),this.taskService.pollTaskStatus(o.task_id).subscribe(n=>{console.log("Task status response:",n),"completed"==n.status&&(console.log("Loading message popup..."),this.showSuccessViaToastCustom("Answer was generated succesfully!"),this.answer=n.result)},n=>{console.error("Error polling task status:",n)})},o=>{console.error("Error generating transcription:",o)})):(console.error("No audio file selected or transcription name is empty"),this.showErrorViaToast())}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(f.B),e.Y36(A),e.Y36(S.M),e.Y36(m.ez),e.Y36(M.H7),e.Y36(U.Q))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-remotetrans"]],features:[e._Bn([m.ez])],decls:48,vars:20,consts:[[1,"card"],["header","YouTube videos summaries",1,"line-height-3","m-0",3,"toggleable"],[2,"font-size","1.2rem"],[1,"flex","justify-content-center","md:justify-content-end"],["src","assets/graphics/Video files-amico.svg","alt","YouTube image",1,"w-3"],[3,"ngSubmit"],["transcriptionForm","ngForm"],[1,"col-12","mb-2",2,"width","100%"],["type","text","pInputText","","placeholder","url of the audio you want to transribe","name","r_url","required","",2,"width","800px",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-12","mb-2","lg:col-4","lg:mb-0"],["name","selectedLanguage","placeholder","Select the language used in the audio","ngModel","","required","",3,"options","ngModel","showClear","ngModelChange"],["selectedLanguageModel","ngModel"],["type","text","pInputText","","placeholder","Name of the transcription","name","transcriptionName","required","",3,"ngModel","ngModelChange"],["transcriptionNameModel","ngModel"],["type","submit","pButton","","pRipple","",3,"disabled"],["key","tst"],[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center","mb-4"],[1,"m-0"],[1,"flex","items-center"],[1,"pi","pi-search","mr-1"],["pInputText","","type","text","placeholder","Search...",1,"w-full","lg:w-96",3,"input"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","rowsPerPageOptions","showCurrentPageReport"],["pTemplate","header"],["pTemplate","body"],["header","Product Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Play Audio",1,"p-fluid",3,"visible","modal","visibleChange"],["pSortableColumn","remoteurl"],["field","Transcriptionname"],["pSortableColumn","remote_title"],["field","file"],["pSortableColumn","trans_name"],["pSortableColumn","uploaded_at"],["field","uploaded_at"],["pSortableColumn","transcript"],["field","transcript"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-play",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"field"],["for","fileName"],["type","text","pInputText","","id","fileName","required","","autofocus","",3,"ngModel","ngModelChange"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["header","Transkrypcja",1,"line-height-3","m-0",3,"toggleable"],[3,"innerHTML"],["header","Video",1,"line-height-3","m-0",3,"toggleable"],["width","560","height","315","title","YouTube video player","frameborder","0","allow","accelerometer;\n                autoplay; clipboard-write; encrypted-media; gyroscope; \n                picture-in-picture; web-share","allowfullscreen","",3,"src"],["header","Summary",1,"line-height-3","m-0",3,"toggleable"],[1,"flex","flex-wrap","gap-2"],["pButton","","pRipple","","type","button","label","Regenerate summary",1,"p-button-raised",3,"click"],["header","Editor",1,"line-height-3","m-0",3,"toggleable"],[3,"placeholder","ngModel","config","ngModelChange"],["pButton","","pRipple","","type","button","label","Save edit",1,"p-button-raised",3,"click"],["header","Notes",1,"line-height-3","m-0",3,"toggleable"],["pButton","","pRipple","","type","button","label","Regenerate notes",1,"p-button-raised",3,"click"],["header","Subtitles",1,"line-height-3","m-0",3,"toggleable"],["header","Ask a question about the transcription",1,"line-height-3","m-0",3,"toggleable"],["rows","8","cols","240","placeholder","Your question","pInputTextarea","","name","question","required","",3,"ngModel","ngModelChange"],["header","Answer",1,"line-height-3","m-0",3,"toggleable"],["header","Speaker Diarization",1,"line-height-3","m-0",3,"toggleable"],["pButton","","pRipple","","label","Close","icon","pi pi-times",1,"p-button-text",3,"click"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"p-panel",1)(2,"p",2),e._uU(3,"Transcribe and summarize YouTube videos effortlessly!:"),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"ul",2)(7,"li")(8,"strong"),e._uU(9,"Transcribe & Summarize:"),e.qZA(),e._uU(10," Here, you can provide YouTube URLs to transcribe and summarize video content with ease."),e.qZA()()()(),e.TgZ(11,"p"),e._uU(12,"Remote URL transcription service"),e.qZA(),e.TgZ(13,"div",0)(14,"h5"),e._uU(15,"Generate transcription from remote URL (youtube)"),e.qZA(),e.TgZ(16,"form",5,6),e.NdJ("ngSubmit",function(){return n.generateRemoteTranscription(n.transcriptionName)}),e.TgZ(18,"div",7)(19,"input",8),e.NdJ("ngModelChange",function(i){return n.remote_url=i}),e.qZA()(),e.TgZ(20,"div",9)(21,"div",10)(22,"p-dropdown",11,12),e.NdJ("ngModelChange",function(i){return n.selectedLanguage=i}),e.qZA()()(),e.TgZ(24,"div",10)(25,"input",13,14),e.NdJ("ngModelChange",function(i){return n.transcriptionName=i}),e.qZA()(),e.TgZ(27,"button",15),e._uU(28,"Generate"),e.qZA()()(),e._UZ(29,"p-toast",16),e.TgZ(30,"div",17)(31,"div",18)(32,"div",19)(33,"div",20)(34,"h5",21),e._uU(35,"User transcriptions"),e.qZA(),e.TgZ(36,"span",22),e._UZ(37,"i",23),e.TgZ(38,"input",24),e.NdJ("input",function(i){return n.onGlobalFilter(i.target.value)}),e.qZA()()(),e.TgZ(39,"p-table",25),e.YNc(40,R,20,0,"ng-template",26)(41,q,19,12,"ng-template",27),e.qZA(),e.TgZ(42,"p-dialog",28),e.NdJ("visibleChange",function(i){return n.editDialogVisible=i}),e.YNc(43,J,4,1,"ng-template",29)(44,I,2,0,"ng-template",30),e.qZA(),e.TgZ(45,"p-dialog",31),e.NdJ("visibleChange",function(i){return n.playDialogVisible=i}),e.YNc(46,D,40,21,"ng-template",29)(47,L,1,0,"ng-template",30),e.qZA()()()()),2&o){const r=e.MAs(17);e.xp6(1),e.Q6J("toggleable",!0),e.xp6(18),e.Q6J("ngModel",n.remote_url),e.xp6(3),e.Q6J("options",n.languageOptions)("ngModel",n.selectedLanguage)("showClear",!0),e.xp6(3),e.Q6J("ngModel",n.transcriptionName),e.xp6(2),e.Q6J("disabled",!r.valid),e.xp6(12),e.Q6J("value",n.filteredTransData)("rows",10)("paginator",!0)("rowsPerPageOptions",e.DdM(18,E))("showCurrentPageReport",!0),e.xp6(3),e.Akn(e.DdM(19,Q)),e.Q6J("visible",n.editDialogVisible)("modal",!0),e.xp6(3),e.Q6J("visible",n.playDialogVisible)("modal",!0)}},dependencies:[g.iA,m.jx,g.lQ,g.fz,b.Hq,v.H,y.V,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.On,l.F,C.s,Z.FN,k.o,w.Lt,x.s6,_.OU,N.q],encapsulation:2})}return s})(),V=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#o=this.\u0275inj=e.cJS({imports:[T.Bz.forChild([{path:"",component:z}]),T.Bz]})}return s})();var F=a(1782),Y=a(1122),B=a(9502),$=a(7161),H=a(3722);let O=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#o=this.\u0275inj=e.cJS({providers:[f.B,m.ez],imports:[_.ez,V,g.U$,b.hJ,v.T,y.S,F.w,l.u5,Y.$9,C.Q,B.$,$.O,Z.EV,k.j,H.O,w.kW,x.UM]})}return s})()}}]);