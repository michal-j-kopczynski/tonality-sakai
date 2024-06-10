"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2582],{2582:(q,a,t)=>{t.r(a),t.d(a,{DashboardModule:()=>U});var u=t(6814),g=t(95),d=t(9252),p=t(1122),m=t(9552),h=t(707),y=t(1913),f=t(74),n=t(2549),Z=t(3620),e=t(9467),b=t(981),A=t(3859),l=t(1230);let v=(()=>{class i{constructor(s,o){this.productService=s,this.layoutService=o,this.subscription=this.layoutService.configUpdate$.pipe((0,Z.b)(25)).subscribe(r=>{this.initChart()})}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(s=>this.products=s),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--text-color"),r=s.getPropertyValue("--text-color-secondary"),c=s.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:s.getPropertyValue("--bluegray-700"),borderColor:s.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:s.getPropertyValue("--green-600"),borderColor:s.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:r},grid:{color:c,drawBorder:!1}},y:{ticks:{color:r},grid:{color:c,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(b.M),e.Y36(A.P))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:102,vars:6,consts:[[1,"card"],["header","Hello and Welcome to TonalityWEB!",1,"line-height-3","m-0",3,"toggleable"],[2,"font-size","1.2rem"],[1,"flex","justify-content-center","md:justify-content-end"],["src","assets/graphics/Business Plan-rafiki.svg","alt","dashboard image",1,"w-3"],["header","Getting started",1,"line-height-3","m-0",3,"toggleable"],["src","assets/graphics/Video files-pana.svg","alt","dasboard image",1,"w-3"],["header","Record and Summarize Meetings on the Go!",1,"line-height-3","m-0",3,"toggleable"],["src","assets/graphics/Speech to text-pana.svg","alt","mobile web image",1,"w-3"],["header","Remote URL Transcriptions & Notes",1,"line-height-3","m-0",3,"toggleable"],["src","assets/graphics/Video files-amico.svg","alt","YouTube image",1,"w-3"],["header","Summarize Transcriptions",1,"line-height-3","m-0",3,"toggleable"],["src","assets/graphics/Analyze-bro.svg","alt","AI image",1,"w-3"],["header","Customize Preferences",1,"line-height-3","m-0",3,"toggleable"],["src","assets/graphics/Palette-rafiki.svg","alt","profile image",1,"w-3"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"p-panel",1)(2,"p",2),e._uU(3,"TonalityWEB simplifies transcription with AI:"),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"ul",2)(7,"li")(8,"strong"),e._uU(9,"Effortless Transcription:"),e.qZA(),e._uU(10," TonalityWEB uses AI-powered technology to transcribe audio and video content seamlessly."),e.qZA(),e.TgZ(11,"li")(12,"strong"),e._uU(13,"Accurate Summaries:"),e.qZA(),e._uU(14," Get concise summaries of transcribed content quickly and accurately."),e.qZA(),e.TgZ(15,"li")(16,"strong"),e._uU(17,"Customized Preferences:"),e.qZA(),e._uU(18," Personalize your experience with customizable user preferences."),e.qZA()()()(),e.TgZ(19,"div",0)(20,"p-panel",5)(21,"p",2),e._uU(22,"It's really easy!:"),e.qZA(),e.TgZ(23,"div",3),e._UZ(24,"img",6),e.qZA(),e.TgZ(25,"ul",2)(26,"li")(27,"strong"),e._uU(28,"Get Started:"),e.qZA(),e._uU(29,' Start by navigating to the "Transcriptions & Notes" page on the hideable menu on the left. Here, you can upload audio files to transcribe audio content seamlessly.'),e.qZA(),e.TgZ(30,"li")(31,"strong"),e._uU(32,"Transcriptions & Notes:"),e.qZA(),e._uU(33," To begin transcribing, simply upload a file. Our advanced AI technology will handle the rest, providing accurate transcriptions and summaries in no time."),e.qZA()()()(),e.TgZ(34,"div",0)(35,"p-panel",7)(36,"p",2),e._uU(37,"TonalityWEB is mobile-friendly and perfect for busy professionals:"),e.qZA(),e.TgZ(38,"div",3),e._UZ(39,"img",8),e.qZA(),e.TgZ(40,"ul",2)(41,"li")(42,"strong"),e._uU(43,"Mobile Support:"),e.qZA(),e._uU(44," Access TonalityWEB from your smartphone's web browser anytime, anywhere."),e.qZA(),e.TgZ(45,"li")(46,"strong"),e._uU(47,"Record Meetings:"),e.qZA(),e._uU(48," Easily record important meetings directly from your phone with just a click."),e.qZA(),e.TgZ(49,"li")(50,"strong"),e._uU(51,"Effortless Transcription:"),e.qZA(),e._uU(52," Upload recorded meeting audio files to TonalityWEB for seamless transcription."),e.qZA(),e.TgZ(53,"li")(54,"strong"),e._uU(55,"AI-Powered Summaries:"),e.qZA(),e._uU(56," Get concise summaries of meeting discussions using advanced AI technology."),e.qZA(),e.TgZ(57,"li")(58,"strong"),e._uU(59,"Ask Questions:"),e.qZA(),e._uU(60," Review transcribed meeting content and ask questions for further clarification."),e.qZA()()()(),e.TgZ(61,"div",0)(62,"p-panel",9)(63,"p",2),e._uU(64,"Transcribe and summarize YouTube videos effortlessly!:"),e.qZA(),e.TgZ(65,"div",3),e._UZ(66,"img",10),e.qZA(),e.TgZ(67,"ul",2)(68,"li")(69,"strong"),e._uU(70,"Transcribe & Summarize:"),e.qZA(),e._uU(71,' Navigate to the "Remote URL Transcriptions & Notes" page on the hideable menu on the left. Here, you can provide YouTube URLs to transcribe and summarize video content with ease.'),e.qZA()()()(),e.TgZ(72,"div",0)(73,"p-panel",11)(74,"p",2),e._uU(75,"With AI technology, TonalityWEB can summarize transcriptions and answer user questions about the results:"),e.qZA(),e.TgZ(76,"div",3),e._UZ(77,"img",12),e.qZA(),e.TgZ(78,"ul",2)(79,"li")(80,"strong"),e._uU(81,"Summarize Transcriptions:"),e.qZA(),e._uU(82," TonalityWEB utilizes advanced AI technology to generate concise summaries of transcriptions, providing key insights at a glance."),e.qZA(),e.TgZ(83,"li")(84,"strong"),e._uU(85,"Answer User Questions:"),e.qZA(),e._uU(86," Users can ask questions about the transcribed content, and TonalityWEB's AI capabilities will provide accurate responses based on the transcriptions."),e.qZA()()()(),e.TgZ(87,"div",0)(88,"p-panel",13)(89,"p",2),e._uU(90,"Tailor your experience by customizing your user preferences in the profile page. Personalize your settings to suit your needs and preferences."),e.qZA(),e.TgZ(91,"div",3),e._UZ(92,"img",14),e.qZA(),e.TgZ(93,"ul",2)(94,"li")(95,"strong"),e._uU(96,"Change Theme:"),e.qZA(),e._uU(97," Customize the look and feel of TonalityWEB by selecting different themes. Choose from a variety of color palettes to suit your preferences."),e.qZA(),e.TgZ(98,"li")(99,"strong"),e._uU(100,"Light/Dark Mode:"),e.qZA(),e._uU(101," Switch between light and dark modes for optimal viewing comfort. Enjoy a personalized viewing experience that matches your environment."),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("toggleable",!0),e.xp6(19),e.Q6J("toggleable",!0),e.xp6(15),e.Q6J("toggleable",!0),e.xp6(27),e.Q6J("toggleable",!0),e.xp6(11),e.Q6J("toggleable",!0),e.xp6(15),e.Q6J("toggleable",!0))},dependencies:[l.s],styles:[".card[_ngcontent-%COMP%] {\n        font-size: 1.2rem; \n\n    }"]})}return i})(),T=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#s=this.\u0275inj=e.cJS({imports:[n.Bz.forChild([{path:"",component:v}]),n.Bz]})}return i})(),U=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#s=this.\u0275inj=e.cJS({imports:[u.ez,g.u5,d.S,p.$9,m.U$,y.l,f.ml,h.hJ,T,l.Q]})}return i})()}}]);