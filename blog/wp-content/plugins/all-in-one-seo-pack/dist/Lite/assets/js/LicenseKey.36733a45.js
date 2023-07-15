import{p as a}from"./popup.b60b699f.js";import{a as l}from"./WpTable.320da53b.js";import"./default-i18n.3a91e0e5.js";import"./constants.0d8c074c.js";import{n as c}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.ec9852b3.js";import"./SaveChanges.e40a9083.js";import{a as r,m as n,b as d}from"./vuex.esm.8fdeb4b6.js";import{C as p}from"./index.4b67d3e2.js";import{G as u,a as h}from"./Row.830f6397.js";import{S as m}from"./Checkmark.f26f6201.js";import{W as _,a as y,b as f}from"./Header.f5e32717.js";import{W as g,a as $}from"./Steps.771a7936.js";import"./params.597cd0f5.js";import"./helpers.de7566d0.js";import"./postContent.616e0b04.js";import"./Caret.d93b302e.js";import"./cleanForSlug.51ef7354.js";import"./isArrayLikeObject.9b4b678d.js";import"./html.14f2a8b9.js";import"./Index.5f7ddb17.js";import"./_commonjsHelpers.f84db168.js";import"./Logo.8785cc9f.js";const k={components:{CoreAlert:p,GridColumn:u,GridRow:h,SvgCheckmark:m,WizardBody:_,WizardCloseAndExit:g,WizardContainer:y,WizardHeader:f,WizardSteps:$},mixins:[l],data(){return{error:null,loading:!1,stage:"license-key",localLicenseKey:null,strings:{enterYourLicenseKey:this.$t.sprintf(this.$t.__("Enter your %1$s License Key",this.$td),"AIOSEO"),boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Lite"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Pro"),linkText:this.$t.sprintf(this.$t.__("upgrade to %1$s",this.$td),"Pro"),placeholder:this.$t.__("Paste your license key here",this.$td),connect:this.$t.__("Connect",this.$td)}}},watch:{localLicenseKey(s){this.updateLicenseKey(s)}},computed:{...r(["options"]),...r("wizard",{stateLicenseKey:"licenseKey",presetFeatures:"features"}),noLicenseNeeded(){return this.$t.sprintf(this.$t.__("You're using %1$s - no license needed. Enjoy!",this.$td)+" 🙂",this.strings.boldText)},link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return this.$isPro?this.$t.__("To unlock the selected features, please enter your license key below.",this.$td):this.$t.sprintf(this.$t.__("To unlock the selected features, please %1$s and enter your license key below.",this.$td),this.link)},alreadyPurchased(){return this.$t.sprintf(this.$t.__("Already purchased? Simply enter your license key below to connect with %1$s!",this.$td),this.strings.purchasedBoldText)}},methods:{...n(["getConnectUrl","processConnect","activate"]),...n("wizard",["saveWizard"]),...d("wizard",["updateLicenseKey"]),processConnectOrActivate(){if(this.$isPro)return this.processActivateLicense();this.processGetConnectUrl()},processActivateLicense(){this.error=null,this.loading=!0,this.$store.commit("loading",!0),this.activate(this.localLicenseKey).then(()=>{this.$aioseo.internalOptions.internal.license.expired=!1,this.saveWizard("license-key").then(()=>{this.$router.push(this.getNextLink)})}).catch(s=>{if(this.loading=!1,this.localLicenseKey=null,this.$store.commit("loading",!1),!s||!s.response||!s.response.body||!s.response.body.error||!s.response.body.licenseData){this.error=this.$t.__("An unknown error occurred, please try again later.",this.$tdPro);return}const e=s.response.body.licenseData;e.invalid?this.error=this.$t.__("The license key provided is invalid. Please use a different key to continue receiving automatic updates.",this.$tdPro):e.disabled?this.error=this.$t.__("The license key provided is disabled. Please use a different key to continue receiving automatic updates.",this.$tdPro):e.expired?this.error=this.licenseKeyExpired:e.activationsError?this.error=this.$t.__("This license key has reached the maximum number of activations. Please deactivate it from another site or purchase a new license to continue receiving automatic updates.",this.$tdPro):(e.connectionError||e.requestError)&&(this.error=this.$t.__("There was an error connecting to the licensing API. Please try again later.",this.$tdPro))})},processGetConnectUrl(){this.loading=!0,this.$store.commit("loading",!0),this.getConnectUrl({key:this.localLicenseKey,wizard:!0}).then(s=>{if(s.body.url){if(!s.body.popup)return this.loading=!1,this.$store.commit("loading",!1),window.open(s.body.url);this.openPopup(s.body.url)}})},openPopup(s){a(s,"_self",600,630,!0,["file","token"],this.completedCallback,this.closedCallback)},completedCallback(s){return s.wizard=!0,this.processConnect(s)},closedCallback(s){if(s)return window.location.reload();this.loading=!1,this.$store.commit("loading",!1)},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)}},mounted(){this.localLicenseKey=this.stateLicenseKey}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aioseo-wizard-license-key"},[t("wizard-header"),t("wizard-container",[t("wizard-body",{scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"go-back"},[t("router-link",{staticClass:"no-underline",attrs:{to:e.getPrevLink}},[e._v("←")]),e._v("   "),t("router-link",{attrs:{to:e.getPrevLink}},[e._v(e._s(e.strings.goBack))])],1),t("div",{staticClass:"spacer"}),t("base-button",{attrs:{type:"gray"},on:{click:e.skipStep}},[e._v(e._s(e.strings.skipThisStep))])]},proxy:!0}])},[t("wizard-steps"),t("div",{staticClass:"header"},[e._v(" "+e._s(e.strings.enterYourLicenseKey)+" ")]),e.$isPro?e._e():t("div",{staticClass:"description",domProps:{innerHTML:e._s(e.noLicenseNeeded)}}),t("div",{staticClass:"license-cta-box"},[t("div",{domProps:{innerHTML:e._s(e.tooltipText)}}),t("br"),t("grid-row",e._l(e.getSelectedUpsellFeatures,function(i,o){return t("grid-column",{key:o,attrs:{sm:"6"}},[t("svg-checkmark"),e._v(" "+e._s(i.name)+" ")],1)}),1)],1),e.$isPro?e._e():t("div",{domProps:{innerHTML:e._s(e.alreadyPurchased)}}),t("form",{staticClass:"license-key"},[t("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"username",autocomplete:"username"}}),t("base-input",{attrs:{type:"password",placeholder:e.strings.placeholder,"append-icon":e.localLicenseKey?"circle-check":null,autocomplete:"new-password"},model:{value:e.localLicenseKey,callback:function(i){e.localLicenseKey=i},expression:"localLicenseKey"}}),t("base-button",{attrs:{type:"green",disabled:!e.localLicenseKey,loading:e.loading},on:{click:e.processConnectOrActivate}},[e._v(" "+e._s(e.strings.connect)+" ")])],1),e.error?t("core-alert",{staticClass:"license-key-error",attrs:{type:"red"},domProps:{innerHTML:e._s(e.error)}}):e._e()],1),t("wizard-close-and-exit")],1)],1)},b=[],L=c(k,v,b,!1,null,null,null,null);const j=L.exports;export{j as default};