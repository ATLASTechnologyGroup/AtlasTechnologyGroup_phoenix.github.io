!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{WgsK:function(t,a,r){"use strict";r.r(a),r.d(a,"FileInputModule",(function(){return ye}));var l,p,s,c=r("2kYt"),m=r("sEIs"),u=r("CAH9"),f=r("EM62"),d=r("is7G"),h=function(){return["summary","api","example"]},y={key:u.m.required,type:u.l.Error},v={files:void 0},x=((l=function(t){i(r,t);var a=o(r);function r(){return e(this,r),a.call(this,{initialState:v,subjectConstructor:u.k,validatorMap:{file:[function(e){return e?void 0:y}]}})}return n(r,[{key:"fileChosen",value:function(e){console.log("File chosen",e)}}]),r}(u.s)).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=f["\u0275\u0275defineComponent"]({type:l,selectors:[["atlas-file-input"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:2,vars:2,consts:[[3,"options"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"atlas-shared-docs-container",0),f["\u0275\u0275element"](1,"router-outlet"),f["\u0275\u0275elementEnd"]()),2&e&&f["\u0275\u0275property"]("options",f["\u0275\u0275pureFunction0"](1,h))},directives:[d.a,m.n],encapsulation:2,changeDetection:0}),l),E=r("dAE5"),w=((p=function t(){e(this,t)}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=f["\u0275\u0275defineComponent"]({type:p,selectors:[["atlas-file-input-summary"]],decls:2,vars:0,consts:[["title","Atlas File Input with Drop Area"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"atlas-shared-docs-summary",0),f["\u0275\u0275text"](1," The file upload field allows the app to take in files. When using this control, the user clicks anywhere in the input in order to select multiple files to use elsewhere in the application, which will show up both in the fileChosen event, and as the ngModel or reactive form value.\n"),f["\u0275\u0275elementEnd"]())},directives:[E.a],encapsulation:2,changeDetection:0}),p),S=r("bwdy"),C=r("C05f"),b=r("GRIB"),D=r("vER0"),g=r("H66U"),F=r("x78X"),A=r("5Bw9"),I=r("29Wa"),B=r("nIj0"),k=r("zmEM"),j=r("FlRo"),$=((s=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=t<0?0:t,i=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,i)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}}]),t}()).\u0275fac=function(e){return new(e||s)},s.\u0275pipe=f["\u0275\u0275definePipe"]({name:"formatBytes",type:s,pure:!0}),s);function M(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",13),f["\u0275\u0275text"](1,"File Name"),f["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",14),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](n.name)}}function R(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"td",15),f["\u0275\u0275text"](1,"Total"),f["\u0275\u0275elementEnd"]())}function T(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",16),f["\u0275\u0275text"](1,"Size"),f["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",14),f["\u0275\u0275text"](1),f["\u0275\u0275pipe"](2,"formatBytes"),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](f["\u0275\u0275pipeBind1"](2,1,n.size))}}function z(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",15),f["\u0275\u0275text"](1),f["\u0275\u0275pipe"](2,"formatBytes"),f["\u0275\u0275pipe"](3,"async"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"](2);f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](f["\u0275\u0275pipeBind1"](2,1,n.getTotalSize(f["\u0275\u0275pipeBind1"](3,3,n.files$))))}}function _(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",16),f["\u0275\u0275text"](1,"Type"),f["\u0275\u0275elementEnd"]())}function G(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",14),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](n.type)}}function H(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",15),f["\u0275\u0275text"](1),f["\u0275\u0275pipe"](2,"async"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"](2);f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"]("Count (",f["\u0275\u0275pipeBind1"](2,1,n.files$).length,")")}}function W(e,t){1&e&&f["\u0275\u0275element"](0,"tr",17)}function X(e,t){1&e&&f["\u0275\u0275element"](0,"tr",18)}function N(e,t){1&e&&f["\u0275\u0275element"](0,"tr",19)}var q=function(){return["name","size","type"]};function J(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"section"),f["\u0275\u0275elementStart"](1,"h3",1),f["\u0275\u0275text"](2,"Result"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](3,"mat-divider"),f["\u0275\u0275elementStart"](4,"table",2),f["\u0275\u0275pipe"](5,"async"),f["\u0275\u0275elementContainerStart"](6,3),f["\u0275\u0275template"](7,M,2,0,"th",4),f["\u0275\u0275template"](8,O,2,1,"td",5),f["\u0275\u0275template"](9,R,2,0,"td",6),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](10,7),f["\u0275\u0275template"](11,T,2,0,"th",8),f["\u0275\u0275template"](12,P,3,3,"td",5),f["\u0275\u0275template"](13,z,4,5,"td",6),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](14,9),f["\u0275\u0275template"](15,_,2,0,"th",8),f["\u0275\u0275template"](16,G,2,1,"td",5),f["\u0275\u0275template"](17,H,3,3,"td",6),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275template"](18,W,1,0,"tr",10),f["\u0275\u0275template"](19,X,1,0,"tr",11),f["\u0275\u0275template"](20,N,1,0,"tr",12),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("dataSource",f["\u0275\u0275pipeBind1"](5,4,n.files$)),f["\u0275\u0275advance"](14),f["\u0275\u0275property"]("matHeaderRowDef",f["\u0275\u0275pureFunction0"](6,q)),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("matRowDefColumns",f["\u0275\u0275pureFunction0"](7,q)),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("matFooterRowDef",f["\u0275\u0275pureFunction0"](8,q))}}var U,V,Y,K,L,Z,Q,ee,te=((U=function(){function t(){e(this,t),this.files$=new C.a(null)}return n(t,[{key:"ngOnInit",value:function(){}},{key:"getTotalSize",value:function(e){var t=0;return e.forEach((function(e){return t+=e.size})),t}},{key:"files",set:function(e){this.files$.next(e)}}]),t}()).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=f["\u0275\u0275defineComponent"]({type:U,selectors:[["atlas-results-table"]],inputs:{files:"files"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"compact"],["mat-table","",1,"mat-elevation-z8",2,"width","100%",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","style","min-width: 180px;",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","size"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","type"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell","",2,"min-width","180px"],["mat-cell",""],["mat-footer-cell",""],["mat-header-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(e,t){1&e&&(f["\u0275\u0275template"](0,J,21,9,"section",0),f["\u0275\u0275pipe"](1,"async")),2&e&&f["\u0275\u0275property"]("ngIf",f["\u0275\u0275pipeBind1"](1,1,t.files$))},directives:[c.k,k.a,j.n,j.c,j.i,j.b,j.e,j.k,j.m,j.g,j.h,j.a,j.d,j.j,j.l,j.f],pipes:[c.b,$],styles:[""],encapsulation:2,changeDetection:0}),U),ne={key:u.m.required,type:u.l.Error},ie={files:void 0},ae=((V=function(t){i(r,t);var a=o(r);function r(){return e(this,r),a.call(this,{initialState:ie,subjectConstructor:u.k,validatorMap:{file:[function(e){return e?void 0:ne}]}})}return n(r,[{key:"fileChosen",value:function(e){console.log("File chosen",e)}}]),r}(u.s)).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=f["\u0275\u0275defineComponent"]({type:V,selectors:[["atlas-drop-area-example"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:18,vars:7,consts:[[3,"value","valueChange"],[2,"width","500px"],["placeholder","Add file here",3,"formControl","filesChosen"],[3,"files"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"section"),f["\u0275\u0275elementStart"](1,"atlas-file-upload-drop-area",0),f["\u0275\u0275listener"]("valueChange",(function(e){return t.model.files.update(e)})),f["\u0275\u0275pipe"](2,"async"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"mat-form-field",1),f["\u0275\u0275elementStart"](4,"mat-label"),f["\u0275\u0275text"](5,"Select a file"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"atlas-file-upload-form-field",2),f["\u0275\u0275listener"]("filesChosen",(function(e){return t.fileChosen(e)})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"mat-hint"),f["\u0275\u0275text"](8," Formats: "),f["\u0275\u0275elementStart"](9,"strong"),f["\u0275\u0275text"](10,"DOCX, XLSX, JPG, PNG"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](11," | Max File Size: "),f["\u0275\u0275elementStart"](12,"strong"),f["\u0275\u0275text"](13,"100 MB"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"mat-error"),f["\u0275\u0275text"](15,"Error"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](16,"atlas-results-table",3),f["\u0275\u0275pipe"](17,"async")),2&e&&(f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("value",f["\u0275\u0275pipeBind1"](2,3,t.model.files.value$)),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("formControl",t.model.files.formControl),f["\u0275\u0275advance"](10),f["\u0275\u0275property"]("files",f["\u0275\u0275pipeBind1"](17,5,t.model.files.value$)))},directives:[A.x,I.d,I.h,A.w,B.k,B.e,I.g,I.c,te],pipes:[c.b],encapsulation:2,changeDetection:0}),V),oe={key:u.m.required,type:u.l.Error},re={files:void 0},le=((K=function(t){i(r,t);var a=o(r);function r(){return e(this,r),a.call(this,{initialState:re,subjectConstructor:u.k,validatorMap:{file:[function(e){return e?void 0:oe}]}})}return n(r,[{key:"fileChosen",value:function(e){console.log("File chosen",e)}}]),r}(u.s)).\u0275fac=function(e){return new(e||K)},K.\u0275cmp=f["\u0275\u0275defineComponent"]({type:K,selectors:[["atlas-input-only-example"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:16,vars:4,consts:[[2,"width","500px"],["placeholder","Add file here",3,"formControl","filesChosen"],[3,"files"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"section"),f["\u0275\u0275elementStart"](1,"mat-form-field",0),f["\u0275\u0275elementStart"](2,"mat-label"),f["\u0275\u0275text"](3,"Select a file"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"atlas-file-upload-form-field",1),f["\u0275\u0275listener"]("filesChosen",(function(e){return t.fileChosen(e)})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"mat-hint"),f["\u0275\u0275text"](6," Formats: "),f["\u0275\u0275elementStart"](7,"strong"),f["\u0275\u0275text"](8,"DOCX, XLSX, JPG, PNG"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](9," | Max File Size: "),f["\u0275\u0275elementStart"](10,"strong"),f["\u0275\u0275text"](11,"100 MB"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](12,"mat-error"),f["\u0275\u0275text"](13,"Error"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](14,"atlas-results-table",2),f["\u0275\u0275pipe"](15,"async")),2&e&&(f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("formControl",t.model.files.formControl),f["\u0275\u0275advance"](10),f["\u0275\u0275property"]("files",f["\u0275\u0275pipeBind1"](15,2,t.model.files.value$)))},directives:[I.d,I.h,A.w,B.k,B.e,I.g,I.c,te],pipes:[c.b],encapsulation:2,changeDetection:0}),K),pe=((Y=function(){function t(n){e(this,t),this.codeFileService=n,this.subscriptions=new S.a,this.withDropAreaExample$=new C.a(null),this.withoutDropAreaExample$=new C.a(null),this.withDropAreaExample=["assets/example-files/file-input/drop-area-example/drop-area-example.component.html","assets/example-files/file-input/drop-area-example/drop-area-example.component.ts"],this.withoutDropAreaExample=["assets/example-files/file-input/input-only-example/input-only-example.component.html","assets/example-files/file-input/input-only-example/input-only-example.component.ts"]}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions.add(this.codeFileService.loadFiles(this.withDropAreaExample).subscribe((function(t){e.withDropAreaExample$.next(t)}))),this.subscriptions.add(this.codeFileService.loadFiles(this.withoutDropAreaExample).subscribe((function(t){e.withoutDropAreaExample$.next(t)})))}}]),t}()).\u0275fac=function(e){return new(e||Y)(f["\u0275\u0275directiveInject"](b.a))},Y.\u0275cmp=f["\u0275\u0275defineComponent"]({type:Y,selectors:[["atlas-file-input-example"]],decls:13,vars:6,consts:[["title","Atlas File Input with Drop Area"],[3,"codeExample"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"atlas-shared-docs-example",0),f["\u0275\u0275elementStart"](1,"atlas-code-example",1),f["\u0275\u0275pipe"](2,"async"),f["\u0275\u0275elementStart"](3,"atlas-code-example-header"),f["\u0275\u0275elementStart"](4,"h3"),f["\u0275\u0275text"](5,"With Drop Area"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](6,"atlas-drop-area-example"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"atlas-code-example",1),f["\u0275\u0275pipe"](8,"async"),f["\u0275\u0275elementStart"](9,"atlas-code-example-header"),f["\u0275\u0275elementStart"](10,"h3"),f["\u0275\u0275text"](11,"Without Drop Area"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](12,"atlas-input-only-example"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("codeExample",f["\u0275\u0275pipeBind1"](2,2,t.withDropAreaExample$)),f["\u0275\u0275advance"](6),f["\u0275\u0275property"]("codeExample",f["\u0275\u0275pipeBind1"](8,4,t.withoutDropAreaExample$)))},directives:[D.a,g.a,F.a,ae,le],pipes:[c.b],encapsulation:2,changeDetection:0}),Y),se=r("J+dc"),ce=r("NU+T"),me=((L=function(){function t(n){e(this,t),this.apiDocumentService=n,this.imports=["import { AppShellModule } from '@atlas/ui-app-shell';"],this.components=[{name:"FileUploadFormFieldComponent",selector:"atlas-file-upload-form-field",implements:["AfterViewInit","OnDestroy","ControlValueAccessor","MatFormFieldControl<File[]>"],inputs:[{name:"placeholder",type:"string",description:"The placeholder for this control."},{name:"accept",type:"string",description:"Shows specific file types in the file selection prompt."},{name:"value",type:"File[]",description:"The value of the control."},{name:"required",type:"boolean",description:"Whether the control is required."},{name:"disabled",type:"boolean",description:"Whether the control is disabled."}],outputs:[{name:"filesChosen",type:"EventEmitter<File[]>",description:"The event that happens when the user has chosen file(s)"},{name:"fileReset",type:"EventEmitter",description:"The event that happens when the user has reset file(s)"}]},{name:"FileUploadDropAreaComponent",selector:"atlas-file-upload-drop-area",implements:["AfterContentInit","OnDestroy","ControlValueAccessor"],inputs:[{name:"value",type:"File[]",description:""},{name:"disabled",type:"boolean",description:""}],outputs:[{name:"touched",type:"EventEmitter",description:""},{name:"valueChange",type:"EventEmitter<File[]>",description:""}]}],this.directives=[]}return n(t,[{key:"getApi",value:function(){return this.apiDocumentService.getApi(this.components,this.directives,this.imports)}}]),t}()).\u0275fac=function(e){return new(e||L)(f["\u0275\u0275inject"](ce.a))},L.\u0275prov=f["\u0275\u0275defineInjectable"]({token:L,factory:L.\u0275fac,providedIn:"root"}),L),ue=r("OYCi"),fe=[{path:"",component:x,children:[{path:"summary",component:w},{path:"api",component:(Z=function(){function t(n){e(this,t),this.fileInputService=n,this.api$=new C.a(null)}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.fileInputService.getApi().pipe(Object(se.a)(1)).subscribe((function(t){return e.api$.next(t)}))}}]),t}(),Z.\u0275fac=function(e){return new(e||Z)(f["\u0275\u0275directiveInject"](me))},Z.\u0275cmp=f["\u0275\u0275defineComponent"]({type:Z,selectors:[["atlas-file-input-api"]],decls:2,vars:3,consts:[["title","Atlas File Input with Drop Area",3,"api"]],template:function(e,t){1&e&&(f["\u0275\u0275element"](0,"atlas-shared-docs-api",0),f["\u0275\u0275pipe"](1,"async")),2&e&&f["\u0275\u0275property"]("api",f["\u0275\u0275pipeBind1"](1,1,t.api$))},directives:[ue.a],pipes:[c.b],encapsulation:2,changeDetection:0}),Z)},{path:"example",component:pe},{path:"**",redirectTo:"summary"}]}],de=((Q=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:Q}),Q.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Q)},imports:[[m.m.forChild(fe)],m.m]}),Q),he=r("bAHF"),ye=((ee=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:ee}),ee.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ee)},imports:[[c.c,de,he.a,A.c,B.o,I.f,k.b,j.o]]}),ee)}}])}();