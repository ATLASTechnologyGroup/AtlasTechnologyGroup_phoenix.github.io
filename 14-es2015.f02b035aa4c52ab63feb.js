(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4nEM":function(e,t,n){"use strict";n.r(t),n.d(t,"RichTextExampleModule",(function(){return W}));var a=n("2kYt"),i=n("3WCQ"),r=n("PCNd"),l=n("sEIs"),s=n("C05f"),o=n("J+dc"),c=n("8j5Y"),d=n("htRR"),m=n("EM62"),p=n("vfg2");let h=(()=>{class e{constructor(e){this.apiService=e,this.api$=new s.a(null),this.components=[{name:"RichTextInputComponent",selector:"atlas-rich-text-input",implements:["ControlValueAccessor","AfterViewInit","OnDestroy"],inputs:[{name:"config",type:"RichTextConfiguration",description:"Sets the configuration of the component"},{name:"isDarkMode",type:"boolean",description:"Tells the component whether it is in dark mode or not."},{name:"error",type:"boolean",description:"If not using ngModel or a FormControl, shows or hides an error indication and an error message from atlas-rich-text-error.\n      If using either ngModel or a FormControl, instead add validators for this functionality."}],outputs:[{name:"valueChange",type:"RichTextInputChangeEvent",description:"Emits when the content being edited is updated."}]}],this.directives=[],this.imports=["import { RichTextModule } from '@atlas/ui-rich-text'"],this.expandedTypes=[{name:"RichTextConfiguration",properties:[{name:"height/width",type:"number | string",description:'The starting dimensions of the rich-text-editor which can be any valid CSS size value (ex: "100px" or "100%").  By default, width: 100%, height: 400px.'},{name:"resize",type:"boolean | both",description:"Sets the resize mode of the rich text editor area.  If 'both', it can be resized both horizontally and vertically, otherwise it can only be resized vertically."},{name:"minHeight/maxHeight",type:"number | string",description:"The vertical limits of a resize.  Only used if resize is true or 'both'."},{name:"minWidth/maxWidth",type:"number | string",description:"The horizontal limits of a resize.  Only used if resize is 'both'."},{name:"features",type:"RichTextFeature[]",description:"Sets the editing features that are displayed and enabled for the user. By default, UndoRedo, FontAccent, TextAlignment, List, and TextTabbing are enabled.\n        The Feature tab has more details."},{name:"menubar",type:"RichTextMenubarItems",description:"If provided, will be displayed in a menu bar on top of the Rich Text Editor."},{name:"contextMenu",type:"ContextMenuItem[]",description:"This will add actions to a context menu.  If there's a context menu, Ctrl + Right Click will access the native context menu."},{name:"customElements",type:"string",description:"Given a regex-like string, the text editor will process any non-HTML element here as a an HTML element."},{name:"extendedValidElements",type:"string",description:"Given a regex-like string, the text editor will process any HTML element here as an additional element, not just elements that the Rich Text Editor has determined to be safe."},{name:"toolbar",type:"RichTextToolbars",description:"Sets up the toolbars.  Toolbars are grouped into toolbar rows, then in divided groups.  If empty, each item in features will put in default toolbar items into 1 row."},{name:"statusBar",type:"boolean",description:"If there's a value here, this value will decide whether to show the status bar.  Otherwise, only if any feature that is chosen uses the status bar will it show."},{name:"outputType",type:"SupportedTypes",description:"Determines the output type of the Rich Text Input.  Defaults to returning HTML."},{name:"textReplacementMenu",type:"RichTextReplacementItem[]",description:"This creates the list of items that can be added as placeholders, when using the TextReplacement feature."},{name:"fileUploader",type:"(file: File) => Observable<FileUploadResponse>",description:"When using the UploadImage feature, this function will be called whenever the user attempts to upload a file.  The Observable\n        should return a FileUploadResponse, which can either mark the file's progress or completion, or be thrown with an error message for the user."},{name:"imageList",type:"ImageList",description:"This creates a list of images as suggestions for the user to be able to insert when using the UploadImage or SelectImage feature."}]}]}ngOnInit(){this.apiService.getApi(this.components,this.directives,this.imports,this.expandedTypes).pipe(Object(o.a)(1),Object(c.a)(e=>this.api$.next(e))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-api"]],decls:2,vars:3,consts:[["title","Rich Text Input",3,"api"]],template:function(e,t){1&e&&(m["\u0275\u0275element"](0,"atlas-shared-docs-api",0),m["\u0275\u0275pipe"](1,"async")),2&e&&m["\u0275\u0275property"]("api",m["\u0275\u0275pipeBind1"](1,1,t.api$))},directives:[p.a],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();var u=n("bwdy"),x=n("HLuz"),f=n("J1ZJ"),b=n("RVkH"),g=n("VYW9"),y=n("CAH9"),E=n("YtkY"),S=n("KCEv"),v=n("e4iD"),w=n("nIj0");const T={text:"<p>Testing, Testing</p><br/> <p>1 2 3</p>"};let k=(()=>{class e extends y.v{constructor(e,t){super({initialState:T,subjectConstructor:y.m,validatorMap:{}}),this.sanitizer=e,this.themeService=t,this.styledOutput$=this.model.text.value$.pipe(Object(E.a)(e=>this.sanitizer.bypassSecurityTrustHtml(e))),this.isDarkMode$=this.themeService.theme$.pipe(Object(E.a)(e=>e===S.a.DarkTheme))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](v.b),m["\u0275\u0275directiveInject"](y.y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-basic-use-example"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:7,vars:7,consts:[[3,"formControl","darkMode"],[1,"compact"],[3,"innerHTML"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"section"),m["\u0275\u0275element"](1,"atlas-rich-text-input",0),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"h3",1),m["\u0275\u0275text"](4,"Result"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"section",2),m["\u0275\u0275pipe"](6,"async")),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formControl",t.model.text.formControl)("darkMode",m["\u0275\u0275pipeBind1"](2,3,t.isDarkMode$)),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("innerHTML",m["\u0275\u0275pipeBind1"](6,5,t.styledOutput$),m["\u0275\u0275sanitizeHtml"]))},directives:[i.c,w.k,w.e],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();var M=n("ROBh");const I={text:"# Testing Testing \n\n 123"};let $=(()=>{class e extends y.v{constructor(e,t){super({initialState:I,subjectConstructor:y.m,validatorMap:{}}),this.themeService=e,this.sanitizer=t,this.isDarkMode$=this.themeService.theme$.pipe(Object(E.a)(e=>e===S.a.DarkTheme)),this.configuration$=Object(M.a)({outputType:i.e.Markdown}),this.displayedMarkdown$=this.model.text.value$.pipe(Object(E.a)(e=>this.sanitizer.bypassSecurityTrustHtml(e.replace(/\n/g,"\\n"))))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](y.y),m["\u0275\u0275directiveInject"](v.b))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-markdown-output-example"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:8,vars:10,consts:[[3,"formControl","darkMode","config"],[1,"compact"],[3,"innerHTML"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"section"),m["\u0275\u0275element"](1,"atlas-rich-text-input",0),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275pipe"](3,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"h3",1),m["\u0275\u0275text"](5,"Raw Markdown"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"section",2),m["\u0275\u0275pipe"](7,"async")),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formControl",t.model.text.formControl)("darkMode",m["\u0275\u0275pipeBind1"](2,4,t.isDarkMode$))("config",m["\u0275\u0275pipeBind1"](3,6,t.configuration$)),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("innerHTML",m["\u0275\u0275pipeBind1"](7,8,t.displayedMarkdown$),m["\u0275\u0275sanitizeHtml"]))},directives:[i.c,w.k,w.e],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();const C={text:"<p>Testing, Testing</p><br/> <p>1 2 3</p>"};let R=(()=>{class e extends y.v{constructor(e,t){super({initialState:C,subjectConstructor:y.m,validatorMap:{}}),this.sanitizer=e,this.themeService=t,this.styledOutput$=this.model.text.value$.pipe(Object(E.a)(e=>this.sanitizer.bypassSecurityTrustHtml(e))),this.isDarkMode$=this.themeService.theme$.pipe(Object(E.a)(e=>e===S.a.DarkTheme)),this.configuration$=Object(M.a)(Object.assign(Object.assign({},i.a),{features:[...i.a.features,i.b.TextReplacement],textReplacementMenu:[{friendlyText:"YoY Sales",placeholderName:"DATABASE.YOY-SALES"},{friendlyText:"Week over Week Sales",placeholderName:"DATABASE.WOW-SALES"}]}))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](v.b),m["\u0275\u0275directiveInject"](y.y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-replacement-text-example"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:8,vars:10,consts:[[3,"formControl","darkMode","config"],[1,"compact"],[3,"innerHTML"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"section"),m["\u0275\u0275element"](1,"atlas-rich-text-input",0),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275pipe"](3,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"h3",1),m["\u0275\u0275text"](5,"Result"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"section",2),m["\u0275\u0275pipe"](7,"async")),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formControl",t.model.text.formControl)("darkMode",m["\u0275\u0275pipeBind1"](2,4,t.isDarkMode$))("config",m["\u0275\u0275pipeBind1"](3,6,t.configuration$)),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("innerHTML",m["\u0275\u0275pipeBind1"](7,8,t.styledOutput$),m["\u0275\u0275sanitizeHtml"]))},directives:[i.c,w.k,w.e],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();const j={text:"<p>Testing, Testing</p><br/> <p>1 2 3</p>"};let O=(()=>{class e extends y.v{constructor(e,t){super({initialState:j,subjectConstructor:y.m,validatorMap:{}}),this.sanitizer=e,this.themeService=t,this.styledOutput$=this.model.text.value$.pipe(Object(E.a)(e=>this.sanitizer.bypassSecurityTrustHtml(e))),this.isDarkMode$=this.themeService.theme$.pipe(Object(E.a)(e=>e===S.a.DarkTheme)),this.configuration$=Object(M.a)({features:[...i.a.features,i.b.UploadImage,i.b.Links,i.b.Table],fileUploader:e=>(alert("For more complex cases, you can add a dialog here to help direct or name the image.  The image you uploaded will be replaced by an Atlas logo in lieu of uploading your image."),Object(M.a)({status:200,targetUrl:"assets/logo_small.png"}))})}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](v.b),m["\u0275\u0275directiveInject"](y.y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-advanced-editing-example"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:8,vars:10,consts:[[3,"formControl","darkMode","config"],[1,"compact"],[3,"innerHTML"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"section"),m["\u0275\u0275element"](1,"atlas-rich-text-input",0),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275pipe"](3,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"h3",1),m["\u0275\u0275text"](5,"Result"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"section",2),m["\u0275\u0275pipe"](7,"async")),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formControl",t.model.text.formControl)("darkMode",m["\u0275\u0275pipeBind1"](2,4,t.isDarkMode$))("config",m["\u0275\u0275pipeBind1"](3,6,t.configuration$)),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("innerHTML",m["\u0275\u0275pipeBind1"](7,8,t.styledOutput$),m["\u0275\u0275sanitizeHtml"]))},directives:[i.c,w.k,w.e],pipes:[a.b],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(e){this.codeFileService=e,this.subscriptions=new u.a,this.basicExample$=new s.a(null),this.markdownExample$=new s.a(null),this.replacementTextExample$=new s.a(null),this.basicExample=["assets/example-files/rich-text/basic-use-example/basic-use-example.component.html","assets/example-files/rich-text/basic-use-example/basic-use-example.component.ts"],this.markdownExample=["assets/example-files/rich-text/markdown-output-example/markdown-output-example.component.html","assets/example-files/rich-text/markdown-output-example/markdown-output-example.component.ts"],this.replacementTextExample=["assets/example-files/rich-text/replacement-text-example/replacement-text-example.component.html","assets/example-files/rich-text/replacement-text-example/replacement-text-example.component.ts"],this.advancedEditingExample=["assets/example-files/rich-text/advanced-editing-example/advanced-editing-example.component.html","assets/example-files/rich-text/advanced-editing-example/advanced-editing-example.component.ts"],this.advancedEditingExample$=this.codeFileService.loadFiles(this.advancedEditingExample)}ngOnInit(){this.subscriptions.add(this.codeFileService.loadFiles(this.basicExample).subscribe(e=>{this.basicExample$.next(e)})),this.subscriptions.add(this.codeFileService.loadFiles(this.markdownExample).subscribe(e=>{this.markdownExample$.next(e)})),this.subscriptions.add(this.codeFileService.loadFiles(this.replacementTextExample).subscribe(e=>{this.replacementTextExample$.next(e)}))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](x.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-input-example"]],decls:25,vars:12,consts:[["title","Rich Text Inputs with sample output"],[3,"codeExample"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"atlas-shared-docs-example",0),m["\u0275\u0275elementStart"](1,"atlas-code-example",1),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275elementStart"](3,"atlas-code-example-header"),m["\u0275\u0275elementStart"](4,"h3"),m["\u0275\u0275text"](5,"Basic Usage"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"atlas-rich-text-basic-use-example"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"atlas-code-example",1),m["\u0275\u0275pipe"](8,"async"),m["\u0275\u0275elementStart"](9,"atlas-code-example-header"),m["\u0275\u0275elementStart"](10,"h3"),m["\u0275\u0275text"](11,"Markdown Output"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"atlas-rich-text-markdown-output-example"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"atlas-code-example",1),m["\u0275\u0275pipe"](14,"async"),m["\u0275\u0275elementStart"](15,"atlas-code-example-header"),m["\u0275\u0275elementStart"](16,"h3"),m["\u0275\u0275text"](17,"Replacement Text"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](18,"atlas-rich-text-replacement-text-example"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"atlas-code-example",1),m["\u0275\u0275pipe"](20,"async"),m["\u0275\u0275elementStart"](21,"atlas-code-example-header"),m["\u0275\u0275elementStart"](22,"h3"),m["\u0275\u0275text"](23,"Advanced Editing Features"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](24,"atlas-rich-text-advanced-editing-example"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("codeExample",m["\u0275\u0275pipeBind1"](2,4,t.basicExample$)),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("codeExample",m["\u0275\u0275pipeBind1"](8,6,t.markdownExample$)),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("codeExample",m["\u0275\u0275pipeBind1"](14,8,t.replacementTextExample$)),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("codeExample",m["\u0275\u0275pipeBind1"](20,10,t.advancedEditingExample$)))},directives:[f.a,b.a,g.a,k,$,R,O],pipes:[a.b],encapsulation:2,changeDetection:0}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-features"]],decls:96,vars:0,consts:[[1,"api-description"],[1,"api-table"],[1,"api-header-row"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"section",0),m["\u0275\u0275text"](1," Nearly all of the rich text functionality is grouped into features. Without adding any features, the Rich Text Editor has the same functionality as a textarea element, but these features can add shortcuts and extra tools for the editor. The features provide default toolbar items, but also give you extra toolbar items that you can add and arrange as needed.\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"section"),m["\u0275\u0275elementStart"](3,"h3"),m["\u0275\u0275text"](4,"Features"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"table",1),m["\u0275\u0275elementStart"](6,"tr",2),m["\u0275\u0275elementStart"](7,"th"),m["\u0275\u0275text"](8,"Feature"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"th"),m["\u0275\u0275text"](10,"Purpose"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"th"),m["\u0275\u0275text"](12,"Toolbar Items"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"tr"),m["\u0275\u0275elementStart"](14,"td"),m["\u0275\u0275text"](15,"UndoRedo"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"td"),m["\u0275\u0275text"](17,"Provides Undo and Redo functionality and toolbar items. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"td"),m["\u0275\u0275text"](19,"undo, redo"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"tr"),m["\u0275\u0275elementStart"](21,"td"),m["\u0275\u0275text"](22,"FontAccent"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](23,"td"),m["\u0275\u0275text"](24,"Allows for simple decoration of fonts, like bold "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"td"),m["\u0275\u0275text"](26,"bold, italic, underline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"tr"),m["\u0275\u0275elementStart"](28,"td"),m["\u0275\u0275text"](29,"FontDecoration"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"td"),m["\u0275\u0275text"](31,"Allows for more complex font decorations, like colors. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"td"),m["\u0275\u0275text"](33,"fontsizeselect, fontcolor, backcolor"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](34,"tr"),m["\u0275\u0275elementStart"](35,"td"),m["\u0275\u0275text"](36,"List"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"td"),m["\u0275\u0275text"](38,"Allows for formatted lists "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](39,"td"),m["\u0275\u0275text"](40,"numlist, bullist"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](41,"tr"),m["\u0275\u0275elementStart"](42,"td"),m["\u0275\u0275text"](43,"TextAlignment"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](44,"td"),m["\u0275\u0275text"](45,"Allows for large chunks of text to be aligned to a specific margin. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"td"),m["\u0275\u0275text"](47,"alignleft, aligncenter, alignright, alignjustify"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](48,"tr"),m["\u0275\u0275elementStart"](49,"td"),m["\u0275\u0275text"](50,"TextTabbing"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](51,"td"),m["\u0275\u0275text"](52,"Gives a shortcut to add tabs within text "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](53,"td"),m["\u0275\u0275text"](54,"indent, outdent"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](55,"tr"),m["\u0275\u0275elementStart"](56,"td"),m["\u0275\u0275text"](57,"CharacterCount"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](58,"td"),m["\u0275\u0275text"](59,"The component will show a character count."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](60,"td"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](61,"tr"),m["\u0275\u0275elementStart"](62,"td"),m["\u0275\u0275text"](63,"TextReplacement"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](64,"td"),m["\u0275\u0275text"](65,"Provides the ability to add text placeholders that can be replaced with dynamic content by the consuming application that displays the content created or edited in the rich text input."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](66,"td"),m["\u0275\u0275text"](67,"placeholder"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](68,"tr"),m["\u0275\u0275elementStart"](69,"td"),m["\u0275\u0275text"](70,"SelectImage"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](71,"td"),m["\u0275\u0275text"](72,"Allows the user to add images that are already hosted elsewhere. This can also be configured to show a list of images."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](73,"td"),m["\u0275\u0275text"](74,"image"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](75,"tr"),m["\u0275\u0275elementStart"](76,"td"),m["\u0275\u0275text"](77,"UploadImage"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](78,"td"),m["\u0275\u0275text"](79,"Allows the user to upload images to the rich text editor. This includes the functionality from SelectImage."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](80,"td"),m["\u0275\u0275text"](81,"image"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](82,"tr"),m["\u0275\u0275elementStart"](83,"td"),m["\u0275\u0275text"](84,"Table"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](85,"td"),m["\u0275\u0275text"](86,"Adds options to show and style a table."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](87,"td"),m["\u0275\u0275text"](88,"table"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](89,"tr"),m["\u0275\u0275elementStart"](90,"td"),m["\u0275\u0275text"](91,"Links"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](92,"td"),m["\u0275\u0275text"](93,"Allows the user to turn text into a hyperlink."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](94,"td"),m["\u0275\u0275text"](95,"link, unlink"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var F=n("ZRBK");let A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text-summary"]],decls:19,vars:0,consts:[["title","rich text input"],[1,"compact"],[1,"api-description"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"atlas-shared-docs-summary",0),m["\u0275\u0275elementStart"](1,"h3",1),m["\u0275\u0275text"](2,"Overview"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"section"),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275text"](5," The rich text input is a WYSIWYG editor which outputs HTML or markdown. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"div",2),m["\u0275\u0275text"](7," When working with content generated by the rich text input, it will include inline styling, which some frameworks like Angular will treat as unsafe HTML. However, the rich text input will sanitize any html that the user attempts to add in, so as long as all possible input is generated by this component, the HTML is generally safe to store and use as-is. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"h3",1),m["\u0275\u0275text"](9,"Text Replacement"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"section"),m["\u0275\u0275elementStart"](11,"div",2),m["\u0275\u0275text"](12," The text replacement feature allows the user to add placeholders which can be found via a simple search and replace, allowing the consuming application to replace the placeholders with dynamic content before rendering the HTML or markdown produced by the rich text input. The output is either "),m["\u0275\u0275elementStart"](13,"code"),m["\u0275\u0275text"](14,'<replacement class="mceNonEditable" expr="val">\\${val}</replacement>'),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](15," or "),m["\u0275\u0275elementStart"](16,"code"),m["\u0275\u0275text"](17,"${val}"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](18,", depending on whether the output mode is HTML or Markdown. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[F.a],encapsulation:2,changeDetection:0}),e})();var z=n("JcM3");const L=function(){return["summary","api","features","example"]},B=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["atlas-rich-text"]],decls:2,vars:2,consts:[[3,"options"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"atlas-shared-docs-container",0),m["\u0275\u0275element"](1,"router-outlet"),m["\u0275\u0275elementEnd"]()),2&e&&m["\u0275\u0275property"]("options",m["\u0275\u0275pureFunction0"](1,L))},directives:[z.a,l.m],encapsulation:2,changeDetection:0}),e})(),children:[{path:"summary",component:A},{path:"api",component:h},{path:"features",component:H},{path:"example",component:D},{path:"**",redirectTo:"summary"}]}];let U=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(B)],l.l]}),e})(),W=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.a,i.d,U]]}),e})()}}]);