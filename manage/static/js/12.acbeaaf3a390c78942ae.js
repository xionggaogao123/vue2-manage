webpackJsonp([12],{213:function(e,r,t){t(259);var o=t(89)(t(235),t(273),"data-v-283f1bcf",null);e.exports=o.exports},235:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(90);t(91);r.default={data:function(){return{loginForm:{name:"",password:""},registerForm:{name:"",password:"",phone:"",idcard:""},loginRules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},registerRules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],idcard:[{required:!0,message:"请输入身份证号码",trigger:"blur"}]},showLogin:!1,loginOrRegister:!0}},mounted:function(){this.showLogin=!0},computed:{},methods:{login:function(){var e=this,r={name:this.loginForm.name,password:this.loginForm.password};t.i(o.k)(r).then(function(r){r.data.result?(localStorage.setItem("ms_username",e.loginForm.name),e.$router.push("notice")):e.$message.error(r.data.message)})},register:function(){var e=this,r={name:this.registerForm.name,password:this.registerForm.password,phone:this.registerForm.phone,idCard:this.registerForm.idcard};t.i(o.l)(r).then(function(r){r.data.result?(e.$message.success(r.data.message),e.loginOrRegister=!0):e.$message.error(r.data.message)})}}}},245:function(e,r,t){r=e.exports=t(204)(!1),r.push([e.i,".allcover[data-v-283f1bcf]{position:absolute;top:0;right:0}.ctt[data-v-283f1bcf]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-283f1bcf]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-283f1bcf]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-283f1bcf]{background-color:#324057}.manage_tip[data-v-283f1bcf]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-283f1bcf]{font-size:34px;color:#fff}.form_contianer[data-v-283f1bcf]{width:320px;height:auto;position:absolute;top:40%;left:50%;margin-top:-105px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_contianer .submit_btn[data-v-283f1bcf]{width:100%;font-size:16px}.tip[data-v-283f1bcf]{font-size:12px;color:red}.form-fade-enter-active[data-v-283f1bcf],.form-fade-leave-active[data-v-283f1bcf]{transition:all 1s}.form-fade-enter[data-v-283f1bcf],.form-fade-leave-active[data-v-283f1bcf]{transform:translate3d(0,-50px,0);opacity:0}.registered[data-v-283f1bcf]{text-align:right;color:#92c7fe}.form_contianer /deep/ .el-form-item[data-v-283f1bcf]{margin-bottom:20px}",""])},259:function(e,r,t){var o=t(245);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(205)("c36a87a8",o,!0)},273:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_page fillcontain"},[t("transition",{attrs:{name:"form-fade",mode:"in-out"}},[t("section",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"form_contianer"},[t("div",{staticClass:"manage_tip"},[t("p",[e._v("jrd 债委会")])]),e._v(" "),e.loginOrRegister?t("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules}},[t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.name,callback:function(r){e.$set(e.loginForm,"name",r)},expression:"loginForm.name"}},[t("span",[e._v("dsfsf")])])],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(r){e.login("loginForm")}}},[e._v("登陆")])],1),e._v(" "),t("p",{staticClass:"registered"},[t("span",{on:{click:function(r){e.loginOrRegister=!e.loginOrRegister}}},[e._v("去注册")])])],1):e._e(),e._v(" "),e.loginOrRegister?e._e():t("el-form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.registerRules}},[t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.registerForm.name,callback:function(r){e.$set(e.registerForm,"name",r)},expression:"registerForm.name"}},[t("span",[e._v("dsfsf")])])],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"手机号"},model:{value:e.registerForm.phone,callback:function(r){e.$set(e.registerForm,"phone",r)},expression:"registerForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"身份证号码"},model:{value:e.registerForm.idcard,callback:function(r){e.$set(e.registerForm,"idcard",r)},expression:"registerForm.idcard"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(r){e.register("registerForm")}}},[e._v("注册")])],1),e._v(" "),t("p",{staticClass:"registered"},[t("span",{on:{click:function(r){e.loginOrRegister=!e.loginOrRegister}}},[e._v("去登录")])])],1)],1)])],1)},staticRenderFns:[]}}});