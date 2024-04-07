"use strict";
(self["webpackChunkClient"] = self["webpackChunkClient"] || []).push([["main"],{

/***/ 2552:
/*!*************************************************!*\
  !*** ./src/app/Doctor/auth/auth.gaurdDoctor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardDoctor: () => (/* binding */ AuthGuardDoctor)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-auth.service */ 6394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class AuthGuardDoctor {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("in doctor authgaurd ");
      if (yield _this.authService.isAuthenticated()) {
        return true;
      } else {
        // Store the attempted URL for redirection after login
        console.log("in can active else");
        console.log("state.url", state.url);
        _this.authService.redirectUrl = state.url;
        let isLogin = localStorage.getItem('isLogin');
        if (isLogin == "true" && isLogin != null) {
          //console.log(isLogin);
          // console.log("going to signin");
          _this.router.navigate(['/homepatient']);
          // await this.router.navigate(['/signinPatient'], { replaceUrl: true });
        } else {
          _this.router.navigate(['/signinDoctor']);
        }
        return false;
      }
    })();
  }
  static #_ = this.ɵfac = function AuthGuardDoctor_Factory(t) {
    return new (t || AuthGuardDoctor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_doctor_auth_service__WEBPACK_IMPORTED_MODULE_1__.DoctorAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthGuardDoctor,
    factory: AuthGuardDoctor.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6394:
/*!****************************************************!*\
  !*** ./src/app/Doctor/auth/doctor-auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorAuthService: () => (/* binding */ DoctorAuthService)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);





class DoctorAuthService {
  constructor(http) {
    this.http = http;
    this.url_login = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/doctor/auth/login";
    this.url_signup = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/doctor/auth/signup";
    this.url_checkUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/doctor/auth/check";
  }
  signupDoctor(doctorData) {
    return this.http.post(this.url_signup, doctorData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error("Error in Doctor Signup : ", error);
      throw error;
    }));
  }
  loginDoctor(doctorData) {
    console.log("in login doctor.");
    console.log(doctorData);
    return this.http.post(this.url_login, doctorData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error in loginPatient:', error);
      throw error;
    }));
  }
  isAuthenticated() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _this.AuthDoctor().toPromise();
        console.log(data);
        if (data.status === "success") {
          return true;
        } else {
          console.log("in false : ");
          return false;
        }
      } catch (error) {
        console.error("Authentication error", error);
        return false;
      }
    })();
  }
  AuthDoctor() {
    return this.http.get(this.url_checkUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      //console.error('Error in loginPatient:', error);
      throw error;
    }));
  }
  static #_ = this.ɵfac = function DoctorAuthService_Factory(t) {
    return new (t || DoctorAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: DoctorAuthService,
    factory: DoctorAuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5375:
/*!********************************************************************!*\
  !*** ./src/app/Doctor/auth/registration/registration.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationComponentDoctor: () => (/* binding */ RegistrationComponentDoctor)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ 9026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doctor-auth.service */ 6394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);









function RegistrationComponentDoctor_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_9_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 10)(7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_9_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_9_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10)(16, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_9_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.conpassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_9_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.next_verify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.conpassword);
  }
}
function RegistrationComponentDoctor_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.back_to_email());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "div", 10)(7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Varify Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_10_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.entered_otp = $event);
    })("input", function RegistrationComponentDoctor_div_10_Template_input_input_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.autoVerify($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 27)(12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "OTP will send to your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_10_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.genOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Click to Get OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.entered_otp);
  }
}
function RegistrationComponentDoctor_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function RegistrationComponentDoctor_div_12_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", gender_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](gender_r17.label);
  }
}
function RegistrationComponentDoctor_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.back_to_verify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "div", 27)(7, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.dob = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 27)(11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.age = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 27)(15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.selectedGender = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RegistrationComponentDoctor_div_12_option_18_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "div", 37)(21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 40)(24, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Choose profile photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RegistrationComponentDoctor_div_12_Template_input_change_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.loadFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10)(28, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.phnumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 45)(32, "div", 46)(33, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "textarea", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_textarea_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.bio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 46)(37, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_12_Template_textarea_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.about = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_12_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.next_professional());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.dob);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.selectedGender);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.phnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.about);
  }
}
function RegistrationComponentDoctor_div_13_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r31.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r31.label);
  }
}
function RegistrationComponentDoctor_div_13_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const speciality_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", speciality_r32.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](speciality_r32.label);
  }
}
function RegistrationComponentDoctor_div_13_label_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label")(1, "div", 66)(2, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_13_label_20_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.selectedSlotlen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r30.selectedSlotlen)("value", option_r33.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r33.label);
  }
}
function RegistrationComponentDoctor_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.back_to_profile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "div", 27)(7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_13_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.selectedCategory = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RegistrationComponentDoctor_div_13_option_10_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 27)(12, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Specialist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_13_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.selectedSpeciality = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RegistrationComponentDoctor_div_13_option_15_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 27)(17, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Slot length");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RegistrationComponentDoctor_div_13_label_20_Template, 5, 3, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_13_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.experience = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 10)(27, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cirtificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentDoctor_div_13_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.certificate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentDoctor_div_13_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.signUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.doctorCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.selectedSpeciality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.doctorSpeciality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.slotTiming);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.certificate);
  }
}
var Tab;
(function (Tab) {
  Tab["Profile"] = "profile";
  Tab["Email"] = "email";
  Tab["Verify"] = "verify";
  Tab["Professional"] = "professional";
})(Tab || (Tab = {}));
class RegistrationComponentDoctor {
  constructor(doctorAuthServ, router, navbarService) {
    this.doctorAuthServ = doctorAuthServ;
    this.router = router;
    this.navbarService = navbarService;
    this.genders = [{
      label: 'Select Your Gender',
      value: '0'
    }, {
      label: 'Male',
      value: 'Male'
    }, {
      label: 'Female',
      value: 'Female'
    }];
    this.doctorCategories = [{
      label: 'Select Category',
      value: '0'
    }, {
      label: 'xyz',
      value: 'Cardiologist'
    }, {
      label: 'Dermatologist',
      value: 'Dermatologist'
    }, {
      label: 'Orthopedic Surgeon',
      value: 'Orthopedic Surgeon'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }
    // Add more categories as needed
    ];

    this.doctorSpeciality = [{
      label: 'Select Specialist',
      value: '0'
    }, {
      label: 'xyz',
      value: 'Cardiologist'
    }, {
      label: 'Dermatologist',
      value: 'Dermatologist'
    }, {
      label: 'Orthopedic Surgeon',
      value: 'Orthopedic Surgeon'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }];
    this.slotTiming = [{
      label: '15 minute',
      value: 15
    }, {
      label: '30 minute',
      value: 30
    }, {
      label: '45 minute',
      value: 45
    }, {
      label: '60 minute',
      value: 60
    }];
    this.email = '';
    this.name = '';
    this.password = '';
    this.conpassword = '';
    this.selectedGender = '';
    this.profilepic = '../../../../assets/profile.jpeg';
    this.selectedCategory = '';
    this.selectedSpeciality = '';
    this.selectedSlotlen = 0;
    this.S_time_first = ['', '', '', '', '', '', ''];
    this.E_time_first = ['', '', '', '', '', '', ''];
    this.S_time_second = ['', '', '', '', '', '', ''];
    this.E_time_second = ['', '', '', '', '', '', ''];
    this.Slots = [[], [], [], [], [], [], []];
    this.activeTab = Tab.Email;
    this.actual_otp = '012934';
    this.message = '';
    this.varifyEmail = false;
  }
  genOTP() {
    this.actual_otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(this.actual_otp);
    console.log("Inside genOTP");
    emailjs_com__WEBPACK_IMPORTED_MODULE_2__["default"].send(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.SERVICE_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TEMPLATE_ID, {
      name: this.name,
      otp: this.actual_otp,
      to_email: this.email
    }, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.USER_ID).then(response => {
      console.log('Email sent successfully!', response);
    }).catch(error => {
      console.error('Email could not be sent:', error);
    });
  }
  varify_email() {
    console.log(this.actual_otp);
    console.log(this.entered_otp);
    if (this.actual_otp === this.entered_otp) {
      this.varifyEmail = true;
      this.message = '';
      this.next_profile();
    } else {
      this.message = "OTP is incorrect !!!";
    }
  }
  autoVerify(event) {
    const enteredOTP = event.target.value;
    this.entered_otp = enteredOTP;
    if (enteredOTP.length === 6) {
      this.varify_email(); // Automatically verify OTP when 6 digits are entered
    }
  }

  loadFile(event) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          _this.profilepic = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    })();
  }
  getshow(tab) {
    return tab === this.activeTab ? 1 : 0;
  }
  view_profile() {
    this.activeTab = Tab.Profile;
  }
  // Change active tab to Appointments
  view_email() {
    this.activeTab = Tab.Email;
    //console.log('activeTab:', this.activeTab);
  }

  view_verify() {
    this.activeTab = Tab.Verify;
    //console.log('activeTab:', this.activeTab);
  }

  view_professional() {
    this.activeTab = Tab.Professional;
  }
  next_verify() {
    this.view_verify();
  }
  next_profile() {
    this.view_profile();
  }
  next_professional() {
    this.view_professional();
  }
  back_to_profile() {
    this.view_profile();
  }
  back_to_email() {
    this.view_email();
  }
  back_to_verify() {
    this.view_verify();
  }
  signUp() {
    if (this.password == this.conpassword) {
      console.log("Signed up");
      const doctorData = {
        // _id : '',
        Email: this.email,
        Name: this.name,
        Password: this.password,
        DoB: this.dob,
        Age: this.age,
        Profile_photo: this.profilepic,
        Gender: this.selectedGender,
        Phone_no: this.phnumber,
        Counselling_fee: 0,
        Bio: this.bio,
        About: this.about,
        Category: this.selectedCategory,
        Specialist: this.selectedSpeciality,
        Experiance: this.experience,
        Cirtificate: this.certificate,
        Average_rating: 0,
        Total_rating: 0,
        Total_review: 0,
        Starting_time_first: this.S_time_first,
        Ending_time_first: this.E_time_first,
        Starting_time_second: this.S_time_second,
        Ending_time_second: this.E_time_second,
        Slot_length: this.selectedSlotlen,
        Slots: this.Slots,
        Appointment_id: [],
        Review_id: []
      };
      this.doctorAuthServ.signupDoctor(doctorData).subscribe(data => this.doctor = data);
      this.email = '';
      this.password = '';
      console.log("patient : ");
      console.log(this.doctor);
      this.router.navigate(['/signinDoctor']);
    } else {
      console.log("Something Wrong.");
    }
  }
  ngOnInit() {
    this.selectedGender = '0';
    this.selectedCategory = '0';
    this.selectedSpeciality = '0';
    this.selectedSlotlen = 0;
    this.navbarService.setHideNavbar(true);
  }
  static #_ = this.ɵfac = function RegistrationComponentDoctor_Factory(t) {
    return new (t || RegistrationComponentDoctor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_doctor_auth_service__WEBPACK_IMPORTED_MODULE_3__.DoctorAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_4__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RegistrationComponentDoctor,
    selectors: [["app-registration-doctor"]],
    decls: 14,
    vars: 5,
    consts: [[1, "bg-custom-gradient"], [1, "flex", "flex-col", "min-h-screen", "h-screen", "items-center", "justify-center", "px-6", "py-8", "mx-auto", "lg:py-0"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "flex", "items-center", "mb-6", "text-2xl", "font-semibold", "text-gray-900", "dark:text-white"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", 1, "w-420", "mix-blend-color-burn"], [1, "w-full", "backdrop-blur-lg", "bg-white/40", "md:mt-0", "sm:max-w-4xl", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], [4, "ngIf"], [1, "flex", "flex-wrap", "-mx-3", "mb-6"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "fullname", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "fullname", "id", "fullname", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "conpassword", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "password", "name", "conpassword", "id", "conpassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "float-right", "w-20", "h-10", "my-5", "flex", "justify-center", "items-center", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-arrow-right", "fill-black"], [1, "mt-5", "text-sm", "font-normal", "text-black"], ["routerLink", "/signinPatient", 1, "font-medium", "text-primary-700", "hover:underline"], ["type", "submit", 1, "w-20", "h-10", "my-5", "flex", "justify-center", "items-center", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-arrow-left", "fill-black"], ["for", "otp", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "otp", "id", "otp", "placeholder", "123456", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "input"], [1, "w-full", "md:w-1/3", "px-3", "mb-6", "md:mb-0"], ["type", "submit", 1, "block", "w-full", "p-2.5", "text-primary-700", "font-bold", "border-2", "border-primary-700", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2", "space-x-2", "transition", "duration-100", 3, "click"], [1, "text-red-700"], ["for", "dob", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "date", "name", "dob", "id", "dob", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "age", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "age", "id", "age", "placeholder", "49", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "selectedGender", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "selectedGender", "name", "selectedGender", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "md:w-1/2", "pl-3", "space-x-6"], [1, "shrink-0"], ["id", "preview_img", "alt", "Current profile photo", 1, "h-16", "w-16", "object-cover", "rounded-full", 3, "src"], [1, "block"], [1, "sr-only"], ["type", "file", "accept", "image/*", 1, "block", "w-full", "text-sm", "text-slate-500", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-full", "file:border-0", "file:text-sm", "file:font-semibold", "file:bg-violet-50", "file:text-violet-700", "hover:file:bg-violet-100", 3, "change"], ["for", "phone_no", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "tel", "name", "phone_no", "id", "phone_no", "pattern", "[0-9]{10}", "placeholder", "8412349856", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "flex", "flex-wrap", "-mx-3", "mb-3"], [1, "w-full", "md:w-1/2", "px-3", "mb-3", "md:mb-0"], ["for", "bio", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["name", "bio", "id", "bio", "placeholder", "", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "about", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["name", "about", "id", "about", "placeholder", "", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "float-right", "w-20", "h-10", "my-4", "flex", "justify-center", "items-center", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [3, "value"], ["for", "category", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "category", "name", "selectedCategory", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "specialist", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "specialist", "name", "selectedSpeciality", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "slot_length", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex", "flex-row", "..."], [4, "ngFor", "ngForOf"], ["for", "experience", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "experience", "id", "experience", "placeholder", "20", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "cirtificate", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "cirtificate", "id", "cirtificate", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], ["routerLink", "/signinDoctor", 1, "font-medium", "text-primary-700", "hover:underline"], [1, "pt-2", "pr-4", "md:mb-0"], ["id", "red-radio", "type", "radio", "name", "colored-radio", 1, "w-4", "h-4", "text-red-600", "bg-gray-100", "border-gray-300", "focus:ring-red-500", "dark:focus:ring-red-600", "dark:ring-offset-gray-800", ":bg-gray-700", "dark:border-gray-600", 3, "ngModel", "value", "ngModelChange"], ["for", "red-radio", 1, "ms-2", "text-md", "font-medium", "text-gray-900"]],
    template: function RegistrationComponentDoctor_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Register in Doc Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, RegistrationComponentDoctor_div_9_Template, 27, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RegistrationComponentDoctor_div_10_Template, 17, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RegistrationComponentDoctor_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, RegistrationComponentDoctor_div_12_Template, 44, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, RegistrationComponentDoctor_div_13_Template, 36, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("verify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("professional"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2750:
/*!********************************************************!*\
  !*** ./src/app/Doctor/auth/signin/signin.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponentDoctor: () => (/* binding */ SigninComponentDoctor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doctor-auth.service */ 6394);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function SigninComponentDoctor_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *your email or password is incorrect.* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SigninComponentDoctor_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
function SigninComponentDoctor_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentDoctor_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.email);
  }
}
function SigninComponentDoctor_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentDoctor_ng_template_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.email);
  }
}
function SigninComponentDoctor_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
function SigninComponentDoctor_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentDoctor_ng_template_23_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.password);
  }
}
function SigninComponentDoctor_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentDoctor_ng_template_25_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.password);
  }
}
class SigninComponentDoctor {
  constructor(doctorAuthServ, navbarService, router) {
    this.doctorAuthServ = doctorAuthServ;
    this.navbarService = navbarService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.cssclass = "failed";
    this.incorrect = false;
    this.disablesiginin = true;
  }
  signin() {
    console.log("clicked");
    console.log(this.email);
    console.log(this.password);
    if (this.password && this.password) {
      //console.log("In login");
      const doctorData = {
        Email: this.email,
        Password: this.password
      };
      this.doctorAuthServ.loginDoctor(doctorData).subscribe(data => {
        //this.doctor = data;
        this.incorrect = false;
        //console.log("Login successful");
        console.log("data : ", data);
        console.log("data_id : ", data._id);
        this.userId = data._id;
        console.log("userId");
        console.log(this.userId);
        localStorage.removeItem("userId");
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('jwt', data.token);
        this.email = '';
        this.password = '';
        localStorage.setItem('isLogin', "true");
        localStorage.setItem('mode', 'Doctor');
        this.navbarService.setMode('Doctor');
        this.router.navigate(['/homedoctor']);
      }, error => {
        console.error("Login error", error);
        this.incorrect = true;
        // Handle login error (e.g., display an error message)
      });
    } else {
      console.log("unsucessful not login");
      //console.log(this.patient);
      //this.value_border="red-500";
    }
  }

  ngOnInit() {
    console.log("In login");
    localStorage.removeItem("userId");
    this.navbarService.setHideNavbar(true);
    this.router.navigate(['/signinDoctor']);
  }
  static #_ = this.ɵfac = function SigninComponentDoctor_Factory(t) {
    return new (t || SigninComponentDoctor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_doctor_auth_service__WEBPACK_IMPORTED_MODULE_0__.DoctorAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SigninComponentDoctor,
    selectors: [["app-signin-doctor"]],
    decls: 42,
    vars: 7,
    consts: [[1, "bg-custom-gradient"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-8", "mx-auto", "md:h-screen", "lg:py-0"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "flex", "items-center", "mb-6", "text-2xl", "font-semibold", "text-gray-900", "dark:text-white"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", 1, "w-420", "mix-blend-color-burn"], [1, "w-full", "backdrop-blur-lg", "bg-white/40", "md:mt-0", "sm:max-w-lg", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], ["class", "text-sm font-semibold text-red-600 ", 4, "ngIf"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["thenBlock1", ""], ["elseBlock1", ""], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-start"], [1, "flex", "items-center", "h-5"], ["id", "remember", "aria-describedby", "remember", "type", "checkbox", "required", "", 1, "w-4", "h-4", "border", "border-gray-300", "rounded", "bg-gray-50", "focus:ring-3", "focus:ring-primary-300"], [1, "ml-3", "text-sm"], ["for", "remember", 1, "text-gray-800"], ["href", "#", 1, "text-sm", "font-semibold", "text-primary-700", "hover:underline"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], [1, "text-sm", "font-normal", "text-black"], ["routerLink", "/registerDoctor", 1, "font-medium", "text-primary-700", "hover:underline"], [1, "text-sm", "font-semibold", "text-red-600"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border-2", "border-red-500", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border-2", "border-red-500", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"]],
    template: function SigninComponentDoctor_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Sign in to your account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 7)(9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SigninComponentDoctor_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SigninComponentDoctor_div_14_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SigninComponentDoctor_ng_template_15_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SigninComponentDoctor_ng_template_17_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SigninComponentDoctor_div_22_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SigninComponentDoctor_ng_template_23_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SigninComponentDoctor_ng_template_25_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SigninComponentDoctor_Template_button_click_36_listener() {
          return ctx.signin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Don't have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect)("ngIfThen", _r7)("ngIfElse", _r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4313:
/*!***********************************************************************!*\
  !*** ./src/app/Doctor/dashboard-doctor/dashboard-doctor.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDoctorComponent: () => (/* binding */ DashboardDoctorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../doctor.service */ 8137);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 6743);








function DashboardDoctorComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28)(3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Nadiad, Gujarat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.doctor.Profile_photo ? ctx_r4.doctor.Profile_photo : "../../../assets/profile.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.doctor.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.doctor.Specialist, " ");
  }
}
function DashboardDoctorComponent_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "li", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Full name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 37)(7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Birthday:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 37)(12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 37)(17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 33)(20, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "bharadraj2003@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 37)(23, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Specialist :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 37)(28, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Category :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li", 37)(33, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Experiance :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 37)(38, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.doctor.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.birthday, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.doctor.Phone_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.doctor.Specialist, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.doctor.Category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.doctor.Experiance, " ");
  }
}
function DashboardDoctorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DashboardDoctorComponent_div_16_div_6_Template, 12, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18)(8, "div", 19)(9, "div", 20)(10, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DashboardDoctorComponent_div_16_div_13_Template, 42, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 23)(15, "div", 24)(16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.openEditProfilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.doctor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.doctor);
  }
}
function DashboardDoctorComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-edit-profile", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("saveChanges", function DashboardDoctorComponent_div_17_Template_app_edit_profile_saveChanges_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.updateDoctor($event));
    })("closeModal", function DashboardDoctorComponent_div_17_Template_app_edit_profile_closeModal_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined)("doctor", ctx_r1.doctor);
  }
}
const _c0 = function (a0, a1) {
  return {
    "opacity": a0,
    "cursor": a1
  };
};
function DashboardDoctorComponent_div_18_tbody_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody", 51)(1, "tr", 52)(2, "td", 44)(3, "div", 53)(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 55)(6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Senior Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 60)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 59)(22, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_div_18_tbody_21_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const index_r13 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.navigateToCoun(index_r13, ctx_r14.allAppointments[index_r13]._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Create Room ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 59)(25, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_div_18_tbody_21_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const index_r13 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.cancleAppointmet(ctx_r16.allAppointments[index_r13]._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const index_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r11.allAppointments[index_r13].Patient_id.Profile_picture ? ctx_r11.allAppointments[index_r13].Patient_id.Profile_picture : "../../../assets/profile.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.allAppointments[index_r13].Patient_id.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.allAppointments[index_r13].Date.slice(0, 10), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.allAppointments[index_r13].Starting_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.allAppointments[index_r13].Payment_id.Payable_amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("px-2 py-1 flex items-center justify-center font-semibold leading-tight \n  ", ctx_r11.allAppointments[index_r13].Status === "Canceled" ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100" : "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100", "\n  rounded-full");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.allAppointments[index_r13].Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c0, ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done" ? "0.5" : "1", ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done" ? "not-allowed" : "pointer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c0, ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done" ? "0.5" : "1", ctx_r11.allAppointments[index_r13].Status === "Canceled" || ctx_r11.allAppointments[index_r13].Status === "Done" ? "not-allowed" : "pointer"));
  }
}
function DashboardDoctorComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 40)(3, "div", 41)(4, "table", 42)(5, "thead")(6, "tr", 43)(7, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardDoctorComponent_div_18_tbody_21_Template, 27, 19, "tbody", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 46)(23, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Your Appointments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "nav", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.allAppointments);
  }
}
function DashboardDoctorComponent_div_19_form_4_label_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label")(1, "div", 91)(2, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_label_15_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.doctor.Slot_length = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r28 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "slot_length_", option_r28.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r19.doctor.Slot_length)("value", option_r28.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r19.disableRadio ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r28.label);
  }
}
function DashboardDoctorComponent_div_19_form_4_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", day_r31.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](day_r31.label);
  }
}
function DashboardDoctorComponent_div_19_form_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function DashboardDoctorComponent_div_19_form_4_ng_template_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ending time must be greater than starting time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardDoctorComponent_div_19_form_4_ng_template_24_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Starting time of seconde must be greater than ending time of first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardDoctorComponent_div_19_form_4_ng_template_24_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ending time must be greater than starting time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 95)(1, "div", 72)(2, "div", 73)(3, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Starting Time (First)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 97)(6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.startTimeFirst = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 73)(8, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ending Time (First)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.endTimeFirst = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DashboardDoctorComponent_div_19_form_4_ng_template_24_div_11_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 72)(13, "div", 73)(14, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Starting Time (Second)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.startTimeSecond = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_change_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 73)(18, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Ending Time (Second)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.endTimeSecond = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_ng_template_24_Template_input_change_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardDoctorComponent_div_19_form_4_ng_template_24_div_21_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DashboardDoctorComponent_div_19_form_4_ng_template_24_div_22_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r23.startTimeFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r23.endTimeFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.compareTimes(ctx_r23.endTimeFirst, ctx_r23.startTimeFirst));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r23.startTimeSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r23.endTimeSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.compareTimes(ctx_r23.startTimeSecond, ctx_r23.endTimeFirst));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.compareTimes(ctx_r23.endTimeSecond, ctx_r23.startTimeSecond));
  }
}
function DashboardDoctorComponent_div_19_form_4_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 95)(1, "div", 72)(2, "div", 73)(3, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Starting Time (First)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_26_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.doctor.Starting_time_first[ctx_r44.selectedslots] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 73)(7, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Ending Time (First)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_26_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.doctor.Ending_time_first[ctx_r46.selectedslots] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 72)(11, "div", 73)(12, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Starting Time (Second)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_26_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.doctor.Starting_time_second[ctx_r47.selectedslots] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 73)(16, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Ending Time (Second)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_ng_template_26_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r48.doctor.Ending_time_second[ctx_r48.selectedslots] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r25.doctor.Starting_time_first[ctx_r25.selectedslots]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r25.doctor.Ending_time_first[ctx_r25.selectedslots]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r25.doctor.Starting_time_second[ctx_r25.selectedslots]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r25.doctor.Ending_time_second[ctx_r25.selectedslots]);
  }
}
function DashboardDoctorComponent_div_19_form_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r26.slotFirstRelatedString, " ");
  }
}
function DashboardDoctorComponent_div_19_form_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r27.slotSecondeRelatedString, " ");
  }
}
function DashboardDoctorComponent_div_19_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function DashboardDoctorComponent_div_19_form_4_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 67)(2, "div", 68)(3, "h1", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Confirm Your Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 70)(6, "div", 72)(7, "div", 73)(8, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Counselling Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.doctor.Counselling_fee = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.onChangeFee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 76)(12, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Slot length");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DashboardDoctorComponent_div_19_form_4_label_15_Template, 5, 5, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 80)(17, "div", 81)(18, "div", 82)(19, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardDoctorComponent_div_19_form_4_Template_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.selectedDay = $event);
    })("change", function DashboardDoctorComponent_div_19_form_4_Template_select_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DashboardDoctorComponent_div_19_form_4_option_22_Template, 2, 2, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DashboardDoctorComponent_div_19_form_4_div_23_Template, 1, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DashboardDoctorComponent_div_19_form_4_ng_template_24_Template, 23, 7, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, DashboardDoctorComponent_div_19_form_4_ng_template_26_Template, 19, 4, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DashboardDoctorComponent_div_19_form_4_div_28_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardDoctorComponent_div_19_form_4_div_29_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div")(31, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r17.doctor.Counselling_fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.slotTiming);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r17.selectedDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.Alldays);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.selectedslots == -1)("ngIfThen", _r22)("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.slotFirstRelatedString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.slotSecondeRelatedString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.isButtonDisabled)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c0, ctx_r17.isButtonDisabled ? "0.5" : "1", ctx_r17.isButtonDisabled ? "not-allowed" : "pointer"));
  }
}
function DashboardDoctorComponent_div_19_tbody_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 60)(1, "div", 53)(2, "div")(3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 59)(8, "div", 53)(9, "div")(10, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const index_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" First : ", ctx_r64.doctor.Starting_time_first[index_r56], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Second : ", ctx_r64.doctor.Starting_time_second[index_r56], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" First : ", ctx_r64.doctor.Ending_time_first[index_r56], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Second : ", ctx_r64.doctor.Ending_time_second[index_r56], " ");
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 60)(1, "div", 53)(2, "div")(3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 59)(6, "div", 53)(7, "div")(8, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const index_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" First : ", ctx_r66.doctor.Starting_time_first[index_r56], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" First : ", ctx_r66.doctor.Ending_time_first[index_r56], " ");
  }
}
function DashboardDoctorComponent_div_19_tbody_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 52)(1, "td", 44)(2, "div", 53)(3, "div")(4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 59)(7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_8_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_9_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_div_10_Template, 1, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_ng_template_11_Template, 14, 4, "ng-template", null, 114, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_ng_template_13_Template, 10, 2, "ng-template", null, 115, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const index_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r59.days[index_r56], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r59.doctor.Starting_time_second[index_r56] !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r59.doctor.Starting_time_second[index_r56] === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r59.doctor.Starting_time_second[index_r56] !== "")("ngIfThen", _r63)("ngIfElse", _r65);
  }
}
function DashboardDoctorComponent_div_19_tbody_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardDoctorComponent_div_19_tbody_25_div_1_Template, 1, 0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardDoctorComponent_div_19_tbody_25_ng_template_2_Template, 15, 6, "ng-template", null, 113, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r56 = ctx.index;
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.doctor.Starting_time_first[index_r56] !== "")("ngIfThen", _r58);
  }
}
function DashboardDoctorComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "div", 13)(2, "div", 40)(3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DashboardDoctorComponent_div_19_form_4_Template, 33, 14, "form", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 66)(6, "div", 64)(7, "div", 67)(8, "div", 68)(9, "h1", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Your Weekly Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 70)(12, "div", 66)(13, "div", 41)(14, "table", 42)(15, "thead")(16, "tr", 43)(17, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Break");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Starting Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Ending Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DashboardDoctorComponent_div_19_tbody_25_Template, 4, 2, "tbody", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 46)(27, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Showing days for which slot is booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.doctor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.days);
  }
}
var Tab;
(function (Tab) {
  Tab["Profile"] = "profile";
  Tab["Appointments"] = "appointments";
  Tab["Slots"] = "slot";
})(Tab || (Tab = {}));
class DashboardDoctorComponent {
  compareTimes(endTime, startTime) {
    const endDateTime = new Date(`1970-01-01T${endTime}`);
    const startDateTime = new Date(`1970-01-01T${startTime}`);
    return endDateTime <= startDateTime;
  }
  navigateToCoun(index, appointmentId) {
    this.router.navigate(['/DoctorConsulting'], {
      queryParams: {
        userData: JSON.stringify(this.allAppointments[index].Patient_id.Email)
      }
    });
    var mes;
    return new Promise((resolve, reject) => {
      this.doctorServ.doneAppointment(appointmentId).subscribe(data => {
        mes = data.mes;
        this.ngZone.run(() => {
          //alert(mes);
        });
        this.loadDoctorData();
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  cancleAppointmet(appointmentId) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Inside cancleAppointmet");
      var mes;
      return new Promise((resolve, reject) => {
        _this.doctorServ.cancelAppoinment(appointmentId).subscribe(data => {
          mes = data.mes;
          _this.ngZone.run(() => {
            alert(mes);
          });
          _this.loadDoctorData();
          resolve();
        }, error => {
          console.error("error", error);
          reject(error);
        });
      });
    })();
  }
  onChangeFee() {
    if (this.doctor.Counselling_fee < 0) this.isButtonDisabled = true;else this.isButtonDisabled = false;
  }
  onChange() {
    this.isButtonDisabled = this.compareTimes(this.endTimeFirst, this.startTimeFirst) || this.compareTimes(this.endTimeSecond, this.startTimeSecond) || this.compareTimes(this.startTimeSecond, this.endTimeFirst);
    if (this.startTimeFirst === '' || this.endTimeFirst === '') this.isButtonDisabled = true;
    if (this.startTimeSecond === '' && this.endTimeSecond !== '') this.isButtonDisabled = true;
    if (this.startTimeSecond !== '' && this.endTimeSecond === '') this.isButtonDisabled = true;
    console.log(this.isButtonDisabled);
  }
  openEditProfilePopup() {
    this.isEditProfileModalOpen = true;
  }
  closeModal() {
    this.isEditProfileModalOpen = false;
  }
  constructor(doctorServ, datePipe, ngZone, router) {
    this.doctorServ = doctorServ;
    this.datePipe = datePipe;
    this.ngZone = ngZone;
    this.router = router;
    this.slotFirstRelatedString = '';
    this.slotSecondeRelatedString = '';
    this.activeTab = Tab.Profile;
    this.startTimeFirst = '';
    this.endTimeFirst = '';
    this.startTimeSecond = '';
    this.endTimeSecond = '';
    this.isEditProfileModalOpen = false;
    this.currdate = new Date();
    this.days = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // timeSlots: { day: Date; break: string; startTimeFirst: number | undefined; endTimeFirst: number | undefined; startTimeSecond: number | undefined; endTimeSecond: number | undefined }[] = [];
    this.selectedslots = -1;
    this.disableRadio = true;
    this.slotTiming = [{
      label: '15 minute',
      value: 15
    }, {
      label: '30 minute',
      value: 30
    }, {
      label: '45 minute',
      value: 45
    }, {
      label: '60 minute',
      value: 60
    }];
    // days = [
    //   { label: 'Select Your Day for slot', value: -1 },
    // ];
    this.selectedDay = -1;
    this.Alldays = [{
      label: 'Select Your Day for slot',
      value: -1
    }, {
      label: 'Monday',
      value: 0
    }, {
      label: 'Tuesday',
      value: 1
    }, {
      label: 'Wednesday',
      value: 2
    }, {
      label: 'Thursday',
      value: 3
    }, {
      label: 'Friday',
      value: 4
    }, {
      label: 'Saturday',
      value: 5
    }, {
      label: 'Sunday',
      value: 6
    }];
    this.isButtonDisabled = true;
  }
  get Tab() {
    return Tab;
  }
  getshow(tab) {
    return tab === this.activeTab ? 1 : 0;
  }
  getTabIndex(tab) {
    if (tab === 'profile') {
      return '1'; // Current tab, higher index
    } else if (tab === 'appointments') {
      return '2'; // Tab with label 'appointments'
    } else if (tab === 'slot') {
      return '3'; // Tab with label 'slot'
    } else {
      return '0'; // Other tabs, lower index
    }
  }

  view_profile() {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.slot = false;
  }
  // Change active tab to Appointments
  view_appointments() {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.slot = false;
    console.log('activeTab:', this.activeTab);
  }
  // Change active tab to Slots
  view_slots() {
    this.activeTab = Tab.Slots;
    this.profile = false;
    this.appointments = false;
    this.slot = true;
    console.log('activeTab:', this.activeTab);
  }
  // calculateTimeSlots() {
  //   this.timeSlots.splice(0, this.timeSlots.length);
  //   this.Alldays.splice(1, this.Alldays.length);
  //   //console.log("timeslots : {0}",this.timeSlots);
  //   //console.log("days : {0}",this.days);
  //   const today = new Date();
  //   const tomorrow = new Date();
  //   tomorrow.setDate(today.getDate() + 1); // Get the date for tomorrow
  //   for (let i = 0; i < 7; i++) {
  //     const currentDate = new Date();
  //     currentDate.setDate(tomorrow.getDate() + i);
  //     const _day = this.datePipe.transform(currentDate, 'EEEE');
  //     const __day: string = _day !== null ? _day : 'DefaultDay';
  //     let temp: number = 0;
  //     switch (__day) {
  //       case 'Monday':
  //         temp = 0;
  //         break;
  //       case 'Tuesday':
  //         temp = 1;
  //         break;
  //       case 'Wednesday':
  //         temp = 2;
  //         break;
  //       case 'Thursday':
  //         temp = 3;
  //         break;
  //       case 'Friday':
  //         temp = 4;
  //         break;
  //       case 'Saturday':
  //         temp = 5;
  //         break;
  //       case 'Sunday':
  //         temp = 6;
  //         break;
  //       default:
  //         temp = 0;
  //         break;
  //     }
  //     //console.log(temp);
  //     // Replace 'yourStartTime' and 'yourEndTime' with your actual time slot values
  //     /*const timeSlot = {
  //       day: currentDate,
  //       break : this.doctor?.Starting_time_second[temp] == 0 ? "No"  : "Yes",
  //       startTimeFirst: this.doctor?.Starting_time_first[temp],
  //       endTimeFirst: this.doctor?.Ending_time_first[temp],
  //       startTimeSecond:this.doctor?.Starting_time_second[temp],
  //       endTimeSecond:this.doctor?.Ending_time_second[temp],
  //     };
  //     const tempday = {
  //       label: __day,
  //       value: temp
  //     };
  //     this.days.push(tempday);
  //     this.timeSlots.push(timeSlot);*/
  //   }
  //   //console.log("timeSlots : ");
  //   //console.log(this.timeSlots);
  // }
  updateDoctor(updatedDoctor) {
    var _this2 = this;
    return new Promise((resolve, reject) => {
      console.log(this.doctorId);
      // Use your DoctorService to update the doctor data
      this.doctorServ.updateDoctor(this.doctorId, updatedDoctor).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          // Handle successful update, maybe show a success message
          console.log('Doctor updated successfully');
          // Reload the doctor data after the update
          yield _this2.loadDoctorData();
          resolve();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        console.error('Error updating doctor', error);
        // Handle error, maybe show an error message
        reject(error);
      });
    });
  }
  loadDoctorData() {
    return new Promise((resolve, reject) => {
      this.doctorId = '';
      this.doctorId = localStorage.getItem('userId');
      this.doctorServ.getDoctor(this.doctorId).subscribe(data => {
        this.doctor = data;
        this.allAppointments = this.doctor.Appointment_id;
        console.log(this.allAppointments);
        console.log("DashBoard");
        console.log(this.doctor);
        // Convert UTC date to India time zone
        this.birthday = this.datePipe.transform(this.doctor?.DoB, 'd MMM, yyyy');
        //this.calculateTimeSlots();
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  onTimeSet(event) {
    this.selectedTime = event;
    console.log('Selected Time:', this.selectedTime);
    // Perform additional actions if needed
  }

  provideslotFirstOption(userProvidedStartTime, endTime, slotLength) {
    const floorSlots = [];
    const ceilSlots = [];
    // Parse user-provided starting time string into Date object
    var [startHour, startMinute] = userProvidedStartTime.split(':').map(Number);
    // Create a Date object with the specified starting time
    const userProvidedStartTimeDate = new Date(1970, 0, 1, startHour, startMinute);
    // Parse end time string into Date object
    [startHour, startMinute] = endTime.split(':').map(Number);
    const endDate = new Date(1970, 0, 1, startHour, startMinute);
    // Calculate the total available time in minutes
    const totalAvailableTime = (endDate.getTime() - userProvidedStartTimeDate.getTime()) / (60 * 1000);
    // Calculate the adjusted end time using both floor and ceil
    const adjustedEndTimeFloorMinutes = Math.floor(totalAvailableTime / slotLength) * slotLength;
    const adjustedEndTimeCeilMinutes = Math.ceil(totalAvailableTime / slotLength) * slotLength;
    const endDateFloor = new Date(userProvidedStartTimeDate.getTime() + adjustedEndTimeFloorMinutes * 60 * 1000);
    const endDateCeil = new Date(userProvidedStartTimeDate.getTime() + adjustedEndTimeCeilMinutes * 60 * 1000);
    // Loop through the time range and allocate floor slots
    let startDate = new Date(userProvidedStartTimeDate);
    while (startDate.getTime() + slotLength * 60 * 1000 <= endDateFloor.getTime()) {
      const slotStart = startDate.toTimeString().slice(0, 5);
      const slotEnd = new Date(startDate.getTime() + slotLength * 60 * 1000).toTimeString().slice(0, 5);
      // Store or process the slot as needed
      const slot = `${slotStart}`;
      floorSlots.push(slot);
      // Move to the next slot
      startDate.setTime(startDate.getTime() + slotLength * 60 * 1000);
    }
    // Reset start date for ceil slots
    startDate = new Date(userProvidedStartTimeDate);
    console.log(startDate);
    // Loop through the time range and allocate ceil slots
    while (startDate.getTime() + slotLength * 60 * 1000 <= endDateCeil.getTime()) {
      const slotStart = startDate.toTimeString().slice(0, 5);
      const slotEnd = new Date(startDate.getTime() + slotLength * 60 * 1000).toTimeString().slice(0, 5);
      // Store or process the slot as needed
      const slot = `${slotStart}`;
      ceilSlots.push(slot);
      // Move to the next slot
      startDate.setTime(startDate.getTime() + slotLength * 60 * 1000);
    }
    // Calculate the end time of the last slot for both floor and ceil
    const floorEndTime = endDateFloor.toTimeString().slice(0, 5);
    const ceilEndTime = endDateCeil.toTimeString().slice(0, 5);
    return {
      floorSlots,
      ceilSlots,
      floorEndTime,
      ceilEndTime
    };
  }
  submitForm() {
    var _this3 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Inside submitForm");
      const slotLength = _this3.doctor.Slot_length;
      var slotTemp = [];
      const slotFirstOption = _this3.provideslotFirstOption(_this3.startTimeFirst, _this3.endTimeFirst, slotLength);
      _this3.slotFirstRelatedString = '';
      _this3.slotSecondeRelatedString = '';
      if (slotFirstOption.floorEndTime != slotFirstOption.ceilEndTime) {
        if (slotFirstOption.floorEndTime == _this3.startTimeFirst) {
          _this3.slotFirstRelatedString = `You should select ending time ${slotFirstOption.ceilEndTime} or utilize your all time`;
          return;
        }
        _this3.slotFirstRelatedString = `You should select ending time ${slotFirstOption.floorEndTime} or ${slotFirstOption.ceilEndTime} for utilize your all time`;
        return;
      }
      if (_this3.startTimeSecond !== '') {
        const slotSecondOption = _this3.provideslotFirstOption(_this3.startTimeSecond, _this3.endTimeSecond, slotLength);
        if (slotSecondOption.floorEndTime != slotSecondOption.ceilEndTime) {
          if (slotSecondOption.floorEndTime == _this3.startTimeSecond) {
            _this3.slotSecondeRelatedString = `You should select ending time of First ${slotSecondOption.ceilEndTime} for utilize your all time`;
            return;
          }
          _this3.slotSecondeRelatedString = `You should select ending time for Second ${slotSecondOption.floorEndTime} or ${slotSecondOption.ceilEndTime} for utilize your all time`;
          return;
        }
      }
      console.log(_this3.doctor.Counselling_fee);
      console.log(_this3.selectedDay);
      console.log(_this3.startTimeFirst);
      console.log(_this3.endTimeFirst);
      console.log(_this3.startTimeSecond);
      console.log(_this3.endTimeSecond);
      console.log(slotFirstOption.floorSlots);
      _this3.doctor.Starting_time_first[_this3.selectedDay] = _this3.startTimeFirst;
      _this3.doctor.Ending_time_first[_this3.selectedDay] = _this3.endTimeFirst;
      _this3.doctor.Starting_time_second[_this3.selectedDay] = _this3.startTimeSecond;
      _this3.doctor.Ending_time_second[_this3.selectedDay] = _this3.endTimeSecond;
      slotFirstOption.floorSlots.forEach(element => {
        const temp = {
          Time: element,
          Booked: false,
          Canceled: false
          //AppointmentId : '' 
        };

        slotTemp.push(temp);
      });
      if (_this3.startTimeSecond !== '') {
        const slotSecondOption = _this3.provideslotFirstOption(_this3.startTimeSecond, _this3.endTimeSecond, slotLength);
        slotSecondOption.floorSlots.forEach(element => {
          const temp = {
            Time: element,
            Booked: false,
            Canceled: false
            //AppointmentId : ''
          };

          slotTemp.push(temp);
        });
        console.log(slotSecondOption.floorSlots);
      }
      _this3.doctor.Slots[_this3.selectedDay] = slotTemp;
      yield _this3.updateDoctor(_this3.doctor);
      yield _this3.loadDoctorData();
    })();
  }
  ngOnInit() {
    var _this4 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.loadDoctorData();
      _this4.view_profile();
      console.log(_this4.doctorId);
      _this4.today = _this4.datePipe.transform(_this4.currdate, 'EEEE');
      _this4.todaydate = _this4.datePipe.transform(_this4.currdate, 'MMMM d');
    })();
  }
  static #_ = this.ɵfac = function DashboardDoctorComponent_Factory(t) {
    return new (t || DashboardDoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_doctor_service__WEBPACK_IMPORTED_MODULE_1__.DoctorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DashboardDoctorComponent,
    selectors: [["app-dashboard-doctor"]],
    decls: 20,
    vars: 7,
    consts: [[1, "mt-14", "flex", "bg-blue-300", "flex-wrap", "min-vh-screen"], ["id", "sidebar", 1, "sticky", "top-14", "w-full", "md:w-1/6", "pl-4", "py-4", "md:mb-0", "bg-blue-600", "min-vh-screen", "mx"], [1, "w-full", "flex", "flex-col", "items-center"], [1, "py-3", "items-center", "inline-block", "w-full", "rounded-xl", "cursor-pointer", 3, "click"], [1, "fa-regular", "fa-user", "fa-lg", 2, "font-weight", "bold"], [1, "w-full", "font-semibold", "mdc-text-field--with-trailing-icon", "px-3", "py-1"], [1, "fa-regular", "fa-calendar-check", "fa-lg", 2, "font-weight", "bold"], [1, "w-full", "font-semibold", "text-lg", "px-3", "py-1"], [1, "fa-solid", "fa-circle-info", "fa-lg", 2, "font-weight", "bold"], ["class", "w-full top-14 md:w-5/6 mb-6 md:mb-0 bg-blue-300  h-auto mx", 4, "ngIf"], [4, "ngIf"], ["class", "w-full md:w-5/6 mb-6 md:mb-0 bg-blue-300 h-auto mx", 4, "ngIf"], [1, "w-full", "top-14", "md:w-5/6", "mb-6", "md:mb-0", "bg-blue-300", "h-auto", "mx"], [1, "h-full", "p-8"], [1, "bg-white", "rounded-xl", "shadow-xl", "pb-8"], [1, "w-full", "h-[250px]"], ["src", "https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg", 1, "w-full", "h-full", "rounded-tl-lg", "rounded-tr-lg"], [1, "flex", "flex-col", "items-center", "-mt-20"], [1, "mt-4", "flex", "flex-col", "2xl:flex-row", "space-y-4", "2xl:space-y-0", "2xl:space-x-4"], [1, "w-full", "flex", "flex-col", "2xl:w-1/3"], [1, "flex-1", "bg-white", "rounded-lg", "shadow-xl", "p-8"], [1, "text-xl", "text-gray-900", "font-bold"], [1, "mt-2", "text-gray-700"], [1, "flex-1", "flex", "flex-col", "items-center", "lg:items-end", "justify-end", "px-8", "mt-2"], [1, "flex", "items-center", "space-x-4", "mt-2"], [1, "flex", "items-center", "bg-blue-600", "hover:bg-blue-700", "text-gray-100", "px-4", "py-2", "rounded", "text-sm", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-user", 2, "color", "#ffffff"], [1, "w-40", "h-40", "border-4", "border-white", "rounded-full", 3, "src"], [1, "flex", "items-center", "space-x-2", "mt-2"], [1, "text-2xl"], ["title", "Verified", 1, "bg-blue-500", "rounded-full", "p-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "text-gray-100", "h-2.5", "w-2.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "4", "d", "M5 13l4 4L19 7"], [1, "text-gray-700"], [1, "text-sm", "text-gray-500"], [1, "flex", "border-y", "py-2"], [1, "font-bold", "w-32"], [1, "flex", "border-b", "py-2"], ["href", "/cdn-cgi/l/email-protection", "data-cfemail", "01606c606f6560736e7272416479606c716d642f626e6c", 1, "__cf_email__"], [3, "doctor", "saveChanges", "closeModal"], [1, "w-full", "overflow-hidden", "rounded-lg", "shadow-xs"], [1, "w-full", "overflow-x-auto"], [1, "w-full", "whitespace-no-wrap"], [1, "text-lg", "text-gray-900", "font-bold", "tracking-wide", "text-left", "uppercase", "border-b", "bg-white"], [1, "px-4", "py-3"], ["class", "bg-white divide-y dark:divide-gray-700 ", 4, "ngFor", "ngForOf"], [1, "grid", "px-4", "py-3", "text-xs", "font-semibold", "tracking-wide", "text-gray-500", "uppercase", "border-t", "bg-gray-50", "sm:grid-cols-9"], [1, "flex", "items-center", "col-span-3"], [1, "col-span-2"], [1, "flex", "col-span-4", "mt-2", "sm:mt-auto", "sm:justify-end"], ["aria-label", "Table navigation"], [1, "bg-white", "divide-y", "dark:divide-gray-700"], [1, "text-gray-700", "dark:text-gray-400"], [1, "flex", "items-center", "text-sm"], [1, "relative", "hidden", "w-8", "h-8", "mr-3", "rounded-full", "md:block"], ["alt", "", "loading", "lazy", 1, "object-cover", "w-full", "h-full", "rounded-full", 3, "src"], ["aria-hidden", "true", 1, "absolute", "inset-0", "rounded-full", "shadow-inner"], [1, "font-semibold", "text-gray-700"], [1, "text-xs", "text-gray-600"], [1, "px-4", "py-3", "text-gray-700", "text-sm"], [1, "px-4", "py-3", "text-gray-700", "text-xs"], [1, "inline-block", "px-4", "py-2", "font-bold", "text-center", "text-white", "uppercase", "align-middle", "transition-all", "rounded-lg", "cursor-pointer", "bg-gradient-to-tl", "from-purple-700", "to-pink-500", "leading-pro", "text-xs", "ease-soft-in", "tracking-tight-soft", "shadow-soft-md", "bg-150", "bg-x-25", "hover:scale-102", "active:opacity-85", "hover:shadow-soft-xs", 3, "disabled", "ngStyle", "click"], [1, "inline-block", "px-4", "py-2", "font-bold", "text-center", "text-white", "uppercase", "align-middle", "transition-all", "rounded-lg", "cursor-pointer", "bg-red-600", "leading-pro", "text-xs", "ease-soft-in", "tracking-tight-soft", "shadow-soft-md", "bg-150", "bg-x-25", "hover:scale-102", "active:opacity-85", "hover:shadow-soft-xs", 3, "disabled", "ngStyle", "click"], [1, "w-full", "md:w-5/6", "mb-6", "md:mb-0", "bg-blue-300", "h-auto", "mx"], [1, "bg-blue-300", "rounded-lg", "max-h", "overflow-hidden", "scrollbar-thin", "scrollbar-thumb-gray-500", "scrollbar-track-gray-200"], [3, "submit", 4, "ngIf"], [1, "w-full", "overflow-hidden", "rounded-lg", "shadow"], [1, "w-full", "backdrop-blur-lg", "bg-white/50", "md:mt-0", "sm:max-w-6xl", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], [3, "submit"], [1, "flex", "flex-wrap", "-mx-3", "mb-6"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"], ["for", "counselling_fee", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "number", "name", "counselling_fee", "id", "counselling_fee", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], [1, "w-full", "md:w-1/3", "px-3", "mb-6", "md:mb-0"], ["for", "slot_length", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex", "flex-row", "..."], [4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "w-full"], [1, "md:w-1/3", "ml"], [1, "flex", "flex-wrap", "mr-6"], ["for", "DayDropdown", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "DayDropdown", "name", "DayDropdown", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["defaultvalueblock", ""], ["slotbookingblock", ""], ["style", "color: red;", 4, "ngIf"], ["type", "submit", 1, "w-full", "my-3", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "disabled", "ngStyle"], [1, "pt-2", "pr-4", "md:mb-0"], ["type", "radio", "name", "colored-radio", 1, "w-4", "h-4", "text-red-600", "disabled", "bg-gray-100", "border-gray-300", "focus:ring-red-500", "dark:focus:ring-red-600", "dark:ring-offset-gray-800", ":bg-gray-700", "dark:border-gray-600", 3, "id", "ngModel", "value", "ngModelChange"], ["for", "slot_length", 1, "ms-2", "text-md", "font-medium", "text-gray-900", "/*dark:text-gray-300*/"], [3, "value"], [1, "md:w-2/3"], ["for", "starting_time_first", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex"], ["value", "0", "type", "time", "name", "starting_time_first", "placeholder", "Enter Starting Time", "id", "starting_time_first", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], ["for", "ending_time_first", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["value", "0", "type", "time", "name", "ending_time_first", "placeholder", "Enter Starting Time", "id", "ending_time_first", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], ["class", "w-full px-3 mb-6 md:mb-0", 4, "ngIf"], ["for", "starting_time_second", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["value", "0", "type", "time", "name", "starting_time_second", "placeholder", "Enter Starting Time", "id", "starting_time_second", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], ["for", "ending_time_second", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["value", "0", "type", "time", "name", "ending_time_second", "placeholder", "Enter Starting Time", "id", "ending_time_second", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "change"], [1, "w-full", "px-3", "mb-6", "md:mb-0"], [2, "color", "red"], ["type", "number", "name", "starting_time_first", "id", "starting_time_first", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ending_time_first", "id", "ending_time_first", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "starting_time_second", "id", "starting_time_second", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ending_time_second", "id", "ending_time_second", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfThen"], ["Showblock", ""], ["thenBlock", ""], ["elseBlock", ""]],
    template: function DashboardDoctorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "ul", 2)(4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_Template_li_click_4_listener() {
          return ctx.view_profile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_Template_li_click_8_listener() {
          return ctx.view_appointments();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardDoctorComponent_Template_li_click_12_listener() {
          return ctx.view_slots();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Slots");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardDoctorComponent_div_16_Template, 20, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DashboardDoctorComponent_div_17_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DashboardDoctorComponent_div_18_Template, 28, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DashboardDoctorComponent_div_19_Template, 30, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Profile));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Appointments));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Slots));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEditProfileModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appointments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.slot);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent],
    styles: ["#sidebar[_ngcontent-%COMP%] {\n  height: calc(100vh - 3.5rem); \n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1kb2N0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw0QkFBNEIsRUFBRSwyQkFBMkI7QUFDM0QiLCJmaWxlIjoiZGFzaGJvYXJkLWRvY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNzaWRlYmFyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pOyAvKiBTdWJ0cmFjdCBuYXZiYXIgaGVpZ2h0ICovXHJcbn1cclxuXHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvZGFzaGJvYXJkLWRvY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDRCQUE0QixFQUFFLDJCQUEyQjtBQUMzRDs7OztBQUlBLG9hQUFvYSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jc2lkZWJhciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTsgLyogU3VidHJhY3QgbmF2YmFyIGhlaWdodCAqL1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideIndicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateY(0px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateY(52px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('3', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateY(104px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('0.3s ease-out'))]),
      // trigger('slideA', [
      //   state('1', style({ transform: 'translateX(+30px)' })),
      //   state('0', style({ transform: 'translateY(0px)' })),
      //   transition('* => *', animate('0.3s ease-out'))
      // ])
      (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideA', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(+30px)',
        color: '#68e8f7'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateY(0px)',
        color: '#ffffff'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('0.3s ease-out'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 7022:
/*!******************************************************************************************!*\
  !*** ./src/app/Doctor/dashboard-doctor/doctor-consulting/doctor-consulting.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorConsultingComponent: () => (/* binding */ DoctorConsultingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ 9026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../doctor.service */ 8137);
/* harmony import */ var _firebaseservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseservice.service */ 9562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);









const _c0 = ["webcamVideo"];
const _c1 = ["remoteVideo"];
function DoctorConsultingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please Start Your WebCam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DoctorConsultingComponent_video_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "video", 26, 21);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("srcObject", ctx_r2.localStream);
  }
}
const _c2 = function (a0, a1) {
  return {
    "opacity": a0,
    "cursor": a1
  };
};
const _c3 = function (a0, a1) {
  return {
    "bg-green-500": a0,
    "bg-gray-500": a1
  };
};
const _c4 = function (a0, a1) {
  return {
    "bg-gray-300": a0,
    "bg-gray-400": a1
  };
};
class DoctorConsultingComponent {
  constructor(doctorServ, ngZone, firebaseService, datePipe, firestore, router, aroute) {
    this.doctorServ = doctorServ;
    this.ngZone = ngZone;
    this.firebaseService = firebaseService;
    this.datePipe = datePipe;
    this.firestore = firestore;
    this.router = router;
    this.aroute = aroute;
    this.patientEmail = '';
    this.isDoctor = false;
    this.isLocal = false;
    this.isRemote = false;
    this.isCalling = false; // Flag to indicate call state
    this.micButton = "Unmute";
    this.videoButton = "Stop Video";
    this.isAudioMuted = true;
    this.isVideoStopped = false;
    this.remoteStream = new MediaStream();
    this.configuration = {
      iceServers: [{
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302' // Optional additional STUN server
        ]
      }, {
        urls: ['turn:numb.viagenie.ca'],
        credential: 'muazkh',
        username: 'webrtc@live.com'
      }],
      iceCandidatePoolSize: 5
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.aroute.queryParams.subscribe(params => {
        if (params['userData']) {
          _this.patientEmail = JSON.parse(params['userData']);
          console.log("User email : ", _this.patientEmail);
        }
      });
      yield _this.loadDoctorData();
      console.log(_this.doctorId);
      // Initialize peer connection configuration (refer to WebRTC documentation)
      _this.peerConnection = new RTCPeerConnection(_this.configuration);
      // Attach remote stream to video element
      _this.remoteVideo.nativeElement.srcObject = _this.remoteStream;
    })();
  }
  handleRemoteStream(event) {
    event.streams[0].getTracks().forEach(track => {
      this.remoteStream.addTrack(track);
    });
  }
  EndCall() {
    if (this.callEndSubscription) {
      console.log("listenForCallEnd destroyed");
      this.callEndSubscription.unsubscribe();
    }
    // Clean up resources when the component is destroyed
    if (this.callId) {
      const callDocRef = this.firebaseService.getCallDocument(this.callId);
      // const subscription = callDocRef.valueChanges().subscribe((callData: any) => {
      //   if (callData.ended) {
      //     // Call has ended, perform necessary tasks here
      //     console.log('Call ended by doctor');
      //     // Redirect or perform other actions as needed
      //     subscription.unsubscribe(); // Unsubscribe from the snapshot listener
      //   }
      // });
    }

    this.firebaseService.getCallDocument(this.callId).update({
      ended: true
    }).then(() => {
      console.log('Call ended successfully');
    }).catch(error => {
      console.error('Error updating call document:', error);
    });
    this.router.navigate(['/dashboardDoctor']);
  }
  ngOnDestroy() {
    console.log("ngDestroy");
    // Clean up resources when the component is destroyed
    this.peerConnection.close();
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
  }
  // Function to mute audio
  toggleAudio() {
    if (this.localStream) {
      const audioTrack = this.localStream.getAudioTracks()[0];
      if (this.micButton === "Mute") this.micButton = "Unmute";else this.micButton = "Mute";
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        this.isAudioMuted = audioTrack.enabled; // Update isAudioMuted status
      }
    }
  }
  // Function to toggle video stop
  toggleVideo() {
    if (this.localStream) {
      const videoTrack = this.localStream.getVideoTracks()[0];
      if (this.videoButton === "Stop Video") this.videoButton = "Start Video";else this.videoButton = "Stop Video";
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        this.isVideoStopped = !videoTrack.enabled; // Update isVideoStopped status
      }
    }
  }

  loadDoctorData() {
    return new Promise((resolve, reject) => {
      this.doctorId = '';
      this.doctorId = localStorage.getItem('userId');
      this.doctorServ.getDoctor(this.doctorId).subscribe(data => {
        this.doctor = data;
        this.isDoctor = true;
        //console.log("DashBoard");
        // console.log(this.doctor);
        //this.calculateTimeSlots();
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  startWebcam() {
    var _this2 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("in startWebcame");
      _this2.localStream = yield navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          autoGainControl: true,
          noiseSuppression: true,
          echoCancellation: true
        }
      });
      _this2.isLocal = true;
      _this2.localStream.getAudioTracks()[0].enabled = false;
      console.log("in startWebcame1");
      // Push tracks from local stream to peer connection
      _this2.localStream.getTracks().forEach(track => {
        _this2.peerConnection.addTrack(track, _this2.localStream);
      });
      // Show local stream in the video element
      if (_this2.localStream) {
        _this2.webcamVideo.nativeElement.srcObject = _this2.localStream;
      }
      _this2.peerConnection.ontrack = event => {
        event.streams[0].getTracks().forEach(track => {
          _this2.remoteStream.addTrack(track);
        });
      };
    })();
  }
  initiateCall() {
    var _this3 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Obtain user media permissions using navigator.mediaDevices.getUserMedia()
      // ... (access media devices, create local stream)
      // Create an offer and add the local stream to the peer connection
      try {
        if (!_this3.localStream) {
          console.error("Local stream not available. Please start webcam first.");
          return;
        }
        //console.log("InitiaeCall called.");
        const callDocRef = yield _this3.firebaseService.createCallDocument();
        //console.log("createCallDocument completed.");
        _this3.callId = callDocRef.id;
        const offerCandidates = callDocRef.collection('offerCandidates');
        const answerCandidates = callDocRef.collection('answerCandidates');
        _this3.peerConnection.onicecandidate = event => {
          event.candidate && offerCandidates.add(event.candidate.toJSON());
        };
        //console.log("Calling  createOffer.");
        const offerDescription = yield _this3.peerConnection.createOffer();
        //console.log("createOffer completed.");
        yield _this3.peerConnection.setLocalDescription(offerDescription);
        //console.log("setLocalDescription completed.");
        const offer = {
          sdp: offerDescription.sdp,
          type: offerDescription.type
        };
        yield callDocRef.set({
          offer
        });
        // Listen for remote answer
        const unsubscribe = callDocRef.onSnapshot(snapshot => {
          //console.log("listing remote changes");
          const data = snapshot.data();
          if (!_this3.peerConnection.currentRemoteDescription && data?.answer) {
            //console.log("listened remote changes");
            const answerDescription = new RTCSessionDescription(data.answer);
            _this3.peerConnection.setRemoteDescription(answerDescription);
            unsubscribe(); // Unsubscribe from further snapshot changes
          }
        });

        emailjs_com__WEBPACK_IMPORTED_MODULE_2__["default"].send(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.SERVICE_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DOCTOR_TEMPLATE_ID, {
          meetingId: _this3.callId,
          to_email: _this3.patientEmail
        }, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.USER_ID).then(response => {
          console.log('Email sent successfully!', response);
        }).catch(error => {
          console.error('Email could not be sent:', error);
        });
        console.log("this.callId", _this3.callId);
        // When answered, add candidate to peer connection
        answerCandidates.onSnapshot(snapshot => {
          //console.log("adding remote changes");
          snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              //console.log("adding candidate.");
              const candidate = new RTCIceCandidate(change.doc.data());
              //console.log(candidate);
              _this3.peerConnection.addIceCandidate(candidate);
              //console.log(this.peerConnection);
            }
          });
        });
        //console.log("InitiaeCall completed.");
        _this3.listenForCallEnd(_this3.callId);
      } catch (error) {
        console.error('Error creating offer:', error);
      }
    })();
  }
  listenForCallEnd(id) {
    // Assuming you have the callId stored somewhere in your component
    console.log("listenForCallEnd called");
    // Call the service method to get the call document
    const callDocRef = this.firebaseService.getCallDocument(id);
    // Subscribe to changes in the call document
    this.callEndSubscription = callDocRef.valueChanges().subscribe(callData => {
      if (callData.ended) {
        // Call has ended, perform necessary tasks here
        console.log('Call ended by Patient');
        this.ngZone.run(() => {
          alert('Call ended by Patient');
        });
        this.callEndedByPatient();
        // Redirect or perform other actions as needed
      }
    });
  }

  callEndedByPatient() {
    // Clean up resources when the component is destroyed
    console.log("callEndedByPatient");
    this.peerConnection.close();
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
    this.router.navigate(['/dashboardDoctor']);
  }
  answerCall() {
    var _this4 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log("answerCall");
        console.log('callid', _this4.callId);
        if (!_this4.callId) {
          console.error("Call ID is empty");
          return;
        }
        const callDocRef = _this4.firebaseService.getCallDocument(_this4.callId);
        // const callDocRef = this.firestore.collection('calls').doc(this.callId);
        const answerCandidates = callDocRef.collection('answerCandidates');
        const offerCandidates = callDocRef.collection('offerCandidates');
        _this4.peerConnection.onicecandidate = event => {
          event.candidate && answerCandidates.add(event.candidate.toJSON());
        };
        console.log("Retrieving call data");
        let c_id;
        let offer;
        // const docRef = this.firestore.collection('calls').doc(this.callId);
        // const d = docRef.get().subscribe((docSnapshot) => {
        //   console.log("docSnapshot", docSnapshot);
        //   console.log("hello");
        //   if (!docSnapshot.exists) {
        //     console.error("Call document does not exist");
        //     return;
        //   }
        //   // Handle the document data here if it exists
        //   const data = docSnapshot.data();
        //   console.log("Document data:", data);
        // });
        callDocRef.get().subscribe(callSnapshot => {
          if (!callSnapshot.exists) {
            console.error("Call document does not exist");
            return;
          }
          const callData = callSnapshot.data();
          console.log("callData:");
          console.log(callData);
          if (!callData || !callData.offer) {
            console.error("Offer description is missing");
            return;
          }
          const offerDescription = callData.offer;
          console.log("offerDescription:");
          console.log(offerDescription);
          if (!offerDescription) {
            console.error("Offer description is missing");
            return;
          }
          _this4.peerConnection.setRemoteDescription(new RTCSessionDescription(offerDescription)).then(() => {
            _this4.peerConnection.createAnswer().then(answerDescription => {
              _this4.peerConnection.setLocalDescription(answerDescription).then(() => {
                const answer = {
                  type: answerDescription.type,
                  sdp: answerDescription.sdp
                };
                console.log("answer:");
                console.log(answer);
                callDocRef.update({
                  answer
                });
                console.log("callDocRef:");
                console.log(callDocRef);
                offerCandidates.snapshotChanges().subscribe(snapshot => {
                  snapshot.forEach(change => {
                    console.log("offerCandidates change");
                    if (change.type === 'added') {
                      console.log("offerCandidates added");
                      const data = change.payload.doc.data();
                      console.log(data);
                      _this4.peerConnection.addIceCandidate(new RTCIceCandidate(data));
                      console.log(_this4.peerConnection);
                    }
                  });
                });
                _this4.isRemote = true;
                console.log("Answering call completed");
              }).catch(error => {
                console.error('Error setting local description:', error);
              });
            }).catch(error => {
              console.error('Error creating answer:', error);
            });
          }).catch(error => {
            console.error('Error setting remote description:', error);
          });
        });
      } catch (error) {
        console.error('Error answering call:', error);
      }
    })();
  }
  static #_ = this.ɵfac = function DoctorConsultingComponent_Factory(t) {
    return new (t || DoctorConsultingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_doctor_service__WEBPACK_IMPORTED_MODULE_3__.DoctorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_firebaseservice_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DoctorConsultingComponent,
    selectors: [["app-doctor-consulting"]],
    viewQuery: function DoctorConsultingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.webcamVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
      }
    },
    decls: 38,
    vars: 21,
    consts: [[1, "flex", "flex-wrap", "mt-14", "bg-custom-gradient"], ["id", "maindiv", 1, "p-6"], [1, "h-5/6", "flex", "flex-row", "w-full"], [1, "w-2/3", "bg-white/30", "rounded-2xl", "m-1"], ["autoplay", "", "muted", "", "playsinline", "", 1, "w-full", "z-20", "h-full", "object-cover", "rounded-xl", 3, "srcObject"], ["remoteVideo", ""], [1, "w-1/3", "bg-white/30", "rounded-2xl", "my-1", "ml-1"], [1, "m-2", "bg-white/55", "h-1/2", "rounded-xl"], ["class", "flex flex-col items-center justify-center h-full border-2 rounded-xl border-black ", 4, "ngIf"], ["autoplay", "", "muted", "", "playsinline", "", "class", "w-full h-full object-cover rounded-xl", 3, "srcObject", 4, "ngIf"], [1, "m-2", "rounded-xl"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "disabled", "click"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", "cursor-pointer", 3, "disabled", "ngStyle", "click"], ["id", "buttons", 1, "h-1/6", "flex", "flex-row", "justify-center", "items-center", "bg-blue-800", "w-full", "m-1", "rounded-2xl"], [1, "w-1/3", "hover:bg-green-600", "text-white", "font-bold", "py-2", "px-4", "rounded-xl", "m-2", "focus:outline-none", "focus:ring-4", "focus:ring-green-300", 3, "ngClass", "click"], [1, "w-1/3", "bg-red-500", "hover:bg-red-600", "text-white", "font-bold", "py-2", "px-4", "rounded-xl", "m-2", "focus:outline-none", "focus:ring-4", "focus:ring-red-300", 3, "click"], [1, "w-1/3", "hover:bg-gray-400", "text-black", "font-bold", "py-2", "px-4", "rounded-xl", "m-2", "focus:outline-none", "focus:ring-4", "focus:ring-gray-200", 3, "ngClass", "click"], ["hidden", "", 1, "mt-4"], [1, "videos", "mt-8"], [1, "bg-blue-400"], ["autoplay", "", "muted", "", "playsinline", "", 1, "bg-bl", 3, "srcObject"], ["webcamVideo", ""], [1, "bg-blue-800"], ["autoplay", "", "muted", "", "playsinline", "", 3, "srcObject"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "border-2", "rounded-xl", "border-black"], [1, "text-center"], ["autoplay", "", "muted", "", "playsinline", "", 1, "w-full", "h-full", "object-cover", "rounded-xl", 3, "srcObject"]],
    template: function DoctorConsultingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "video", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DoctorConsultingComponent_div_8_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DoctorConsultingComponent_video_9_Template, 2, 1, "video", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10)(11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DoctorConsultingComponent_Template_button_click_11_listener() {
          return ctx.startWebcam();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Start Webcam");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DoctorConsultingComponent_Template_button_click_14_listener() {
          return ctx.initiateCall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DoctorConsultingComponent_Template_button_click_17_listener() {
          return ctx.toggleAudio();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DoctorConsultingComponent_Template_button_click_19_listener() {
          return ctx.EndCall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Hangup");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DoctorConsultingComponent_Template_button_click_21_listener() {
          return ctx.toggleVideo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17)(24, "div")(25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "1. Start your Webcam");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "span", 19)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Local Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "video", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 22)(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Remote Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "video", 23, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("srcObject", ctx.remoteStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.localStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.localStream || ctx.callId)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](12, _c2, !ctx.localStream || ctx.callId ? "0.5" : "1", !ctx.localStream || ctx.callId ? "not-allowed" : "pointer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c3, !ctx.isAudioMuted, ctx.isAudioMuted));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.micButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](18, _c4, !ctx.isVideoStopped, ctx.isVideoStopped));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.videoButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("srcObject", ctx.localStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("srcObject", ctx.remoteStream);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
    styles: ["#maindiv[_ngcontent-%COMP%] {\n    height: calc(100vh - 3.5rem); \n\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1jb25zdWx0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEIsRUFBRSwyQkFBMkI7SUFDekQsV0FBVztBQUNmIiwiZmlsZSI6ImRvY3Rvci1jb25zdWx0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbmRpdiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pOyAvKiBTdWJ0cmFjdCBuYXZiYXIgaGVpZ2h0ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvZG9jdG9yLWNvbnN1bHRpbmcvZG9jdG9yLWNvbnN1bHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QixFQUFFLDJCQUEyQjtJQUN6RCxXQUFXO0FBQ2Y7QUFDQSw0YkFBNGIiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbmRpdiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pOyAvKiBTdWJ0cmFjdCBuYXZiYXIgaGVpZ2h0ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9562:
/*!**************************************************************************************!*\
  !*** ./src/app/Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseserviceService: () => (/* binding */ FirebaseserviceService),
/* harmony export */   firebaseConfig: () => (/* binding */ firebaseConfig)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);



class FirebaseserviceService {
  constructor(firestore) {
    this.firestore = firestore;
  } // Inject AngularFirestore
  createCallDocument() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("createCallDocument called.");
      return yield _this.firestore.collection('calls').add({});
    })();
  }
  addOfferCandidate(callDocRef, candidate) {
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield callDocRef.collection('offerCandidates').add(candidate.toJSON());
    })();
  }
  // async addAnswerCandidate(callDocRef: firebase.firestore.DocumentReference, candidate: RTCIceCandidate): Promise<void> {
  //   await callDocRef.collection('answerCandidates').add(candidate.toJSON());
  // }
  addAnswerCandidate(callDocRef, candidate) {
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nativeDocRef = callDocRef.ref;
      return nativeDocRef.collection('answerCandidates').add(candidate.toJSON()).then(() => {});
    })();
  }
  // async getCallDocument(callId: string): Promise<DocumentSnapshot<DocumentData> | undefined> {
  //   const docRef = this.firestore.collection('calls').doc(callId);
  //   const snapshot = await docRef.get().pipe(take(1)).toPromise();
  //   if (snapshot && snapshot.exists) {
  //     return snapshot as DocumentSnapshot<DocumentData>;
  //   }
  //   return undefined;
  // }
  // async getCallDocument(callId: string): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
  //   const snapshot = await this.firestore.collection('calls').doc(callId).get().toPromise();
  //   return snapshot as DocumentSnapshot<DocumentData>; // Cast the type
  // }
  getCallDocument(callId) {
    return this.firestore.collection('calls').doc(callId);
  }
  updateCallDocument(callDocRef, data) {
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield callDocRef.update(data);
    })();
  }
  static #_ = this.ɵfac = function FirebaseserviceService_Factory(t) {
    return new (t || FirebaseserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FirebaseserviceService,
    factory: FirebaseserviceService.ɵfac,
    providedIn: 'root'
  });
}
const firebaseConfig = {
  apiKey: "AIzaSyCYcmdrSRMuFPpvTnU55PMg4WjuFX8PZYQ",
  authDomain: "docconnect-ddea5.firebaseapp.com",
  projectId: "docconnect-ddea5",
  storageBucket: "docconnect-ddea5.appspot.com",
  messagingSenderId: "347551372277",
  appId: "1:347551372277:web:7d9856bf795fc23e7546bc",
  measurementId: "G-KZ6E9E57P9"
};

/***/ }),

/***/ 6743:
/*!********************************************************************************!*\
  !*** ./src/app/Doctor/dashboard-doctor/edit-profile/edit-profile.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileComponent: () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);





function EditProfileComponent_form_3_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", gender_r5.label, " ");
  }
}
function EditProfileComponent_form_3_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.label);
  }
}
function EditProfileComponent_form_3_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const speciality_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", speciality_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", speciality_r7.label, "");
  }
}
function EditProfileComponent_form_3_label_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label")(1, "div", 54)(2, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_label_72_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.doctor.Slot_length = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "slot_length_", option_r8.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.doctor.Slot_length)("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r8.label);
  }
}
function EditProfileComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditProfileComponent_form_3_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div")(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Edit Your Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_form_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.closeModal.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.doctor.Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.doctor.Password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "div", 18)(21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.doctor.DoB = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.doctor.Age = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18)(29, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.doctor.Gender = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EditProfileComponent_form_3_option_32_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11)(34, "div", 12)(35, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Profile Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27)(38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 30)(41, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose profile photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditProfileComponent_form_3_Template_input_change_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.loadFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12)(45, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.doctor.Phone_no = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11)(49, "div", 12)(50, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_textarea_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.doctor.Bio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12)(54, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_textarea_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.doctor.About = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11)(58, "div", 18)(59, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_select_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.doctor.Category = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, EditProfileComponent_form_3_option_62_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 18)(64, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Specialist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_select_ngModelChange_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.doctor.Specialist = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, EditProfileComponent_form_3_option_67_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 18)(69, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Slot length");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, EditProfileComponent_form_3_label_72_Template, 5, 4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11)(74, "div", 46)(75, "div", 47)(76, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.doctor.Experiance = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 12)(80, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Cirtificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_form_3_Template_input_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.doctor.Cirtificate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div")(84, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.DoB)("value", ctx_r0.doctor.DoB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.doctor.Profile_photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Phone_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.About);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.doctorCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Specialist);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.doctorSpeciality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.slotTiming);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Experiance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.doctor.Cirtificate);
  }
}
class EditProfileComponent {
  constructor() {
    this.saveChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.genders = [{
      label: 'Select Your Gender',
      value: '0'
    }, {
      label: 'Male',
      value: 'Male'
    }, {
      label: 'Female',
      value: 'Female'
    }];
    this.doctorCategories = [{
      label: 'Select Category',
      value: '0'
    }, {
      label: 'xyz',
      value: 'Cardiologist'
    }, {
      label: 'Dermatologist',
      value: 'Dermatologist'
    }, {
      label: 'Orthopedic Surgeon',
      value: 'Orthopedic Surgeon'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }
    // Add more categories as needed
    ];

    this.doctorSpeciality = [{
      label: 'Select Specialist',
      value: '0'
    }, {
      label: 'xyz',
      value: 'Cardiologist'
    }, {
      label: 'Dermatologist',
      value: 'Dermatologist'
    }, {
      label: 'Orthopedic Surgeon',
      value: 'Orthopedic Surgeon'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }, {
      label: 'Pediatrician',
      value: 'Pediatrician'
    }];
    this.slotTiming = [{
      label: '30 minute',
      value: 30
    }, {
      label: '60 minute',
      value: 60
    }];
    this.selectedGender = '';
    this.selectedCategory = '';
    this.selectedSpeciality = '';
    this.selectedSlotlen = 0;
  }
  submitForm() {
    // Emit the updated doctor object to save changes
    this.saveChanges.emit(this.doctor);
    this.closeModal.emit();
  }
  loadFile(event) {
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.doctor?.Profile_photo = reader.result;
        // };
        // reader.readAsDataURL(input.files[0]);
      }
    })();
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.doctor);
    })();
  }
  static #_ = this.ɵfac = function EditProfileComponent_Factory(t) {
    return new (t || EditProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditProfileComponent,
    selectors: [["app-edit-profile"]],
    inputs: {
      doctor: "doctor"
    },
    outputs: {
      saveChanges: "saveChanges",
      closeModal: "closeModal"
    },
    decls: 4,
    vars: 1,
    consts: [[1, "fixed", "inset-0", "z-50", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center"], [1, "mt-4", 2, "margin-top", "1rem", "margin-bottom", "1.5rem"], [1, "bg-blue-300", "p-4", "rounded-lg", "my-6", "max-h-screen", "overflow-auto", "scrollbar-thin", "scrollbar-thumb-gray-500", "scrollbar-track-gray-200"], [3, "submit", 4, "ngIf"], [3, "submit"], [1, "w-full", "backdrop-blur-lg", "bg-white/50", "md:mt-0", "sm:max-w-4xl", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], [1, "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "float-right", "px-2", "pb-1", 3, "click"], [1, "text-3xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], [1, "flex", "flex-wrap", "-mx-3", "mb-6"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"], ["for", "fullname", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "fullname", "id", "fullname", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0", "opacity-35"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["disabled", "", "type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "w-full", "md:w-1/3", "px-3", "mb-6", "md:mb-0"], ["for", "dob", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "date", "name", "dob", "id", "dob", "required", "", "placeholder", "doctor.DoB", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "value", "ngModelChange"], ["for", "age", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "age", "id", "age", "placeholder", "49", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "selectedGender", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "selectedGender", "name", "selectedGender", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "profile_picture", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "pl-3", "space-x-6"], [1, "shrink-0"], ["id", "preview_img", "alt", "Current profile photo", 1, "h-16", "w-16", "object-cover", "rounded-full", 3, "src"], [1, "block"], [1, "sr-only"], ["type", "file", "accept", "image/*", 1, "block", "w-full", "text-sm", "text-slate-500", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-full", "file:border-0", "file:text-sm", "file:font-semibold", "file:bg-violet-50", "file:text-violet-700", "hover:file:bg-violet-100", 3, "change"], ["for", "phone_no", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "tel", "name", "phone_no", "id", "phone_no", "pattern", "[0-9]{5}-[0-9]{5}", "placeholder", "84123-49856", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "bio", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["name", "bio", "id", "bio", "placeholder", "", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "about", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["name", "about", "id", "about", "placeholder", "", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "category", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "category", "name", "selectedCategory", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "specialist", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "specialist", "name", "selectedSpeciality", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "slot_length", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex", "flex-row", "..."], [4, "ngFor", "ngForOf"], [1, "w-full", "md:w-1/2", "mb-6", "md:mb-0"], [1, "w-full", "px-3", "mb-6", "md:mb-0"], ["for", "experience", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "experience", "id", "experience", "placeholder", "20", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "cirtificate", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "cirtificate", "id", "cirtificate", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "w-full", "mt-3", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5"], [3, "value"], [1, "pt-2", "pr-4", "md:mb-0"], ["type", "radio", "name", "colored-radio", 1, "w-4", "h-4", "text-red-600", "bg-gray-100", "border-gray-300", "focus:ring-red-500", "dark:focus:ring-red-600", "dark:ring-offset-gray-800", ":bg-gray-700", "dark:border-gray-600", 3, "id", "ngModel", "value", "ngModelChange"], ["for", "slot_length", 1, "ms-2", "text-md", "font-medium", "text-gray-900", "/*dark:text-gray-300*/"]],
    template: function EditProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditProfileComponent_form_3_Template, 86, 18, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.doctor);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8137:
/*!******************************************!*\
  !*** ./src/app/Doctor/doctor.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorService: () => (/* binding */ DoctorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class DoctorService {
  constructor(http) {
    this.http = http;
    this.url_getdoctor = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/";
    this.url_update_doctor = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/";
    this.url_cancel_appoinment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/appointment/cancelAppointment";
    this.url_done_appointment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/appointment/doneAppointment";
  }
  getDoctor(doctorId) {
    // console.log(this.url_getdoctor);
    const url = this.url_getdoctor + doctorId;
    // console.log(doctorId);
    // console.log(this.url_getdoctor);
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in Geting Doctor:', error);
      throw error;
    }));
  }
  updateDoctor(doctorId, updatedDoctor) {
    //this.url_update_doctor += doctorId;
    const url_generated = this.url_update_doctor;
    //console.log(this.url_update_doctor);
    return this.http.put(url_generated, updatedDoctor).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in loginPatient:', error);
      throw error;
    }));
  }
  cancelAppoinment(appointmentId) {
    console.log(this.url_cancel_appoinment);
    const appointmentIdObj = {
      appointmentId: appointmentId
    };
    return this.http.put(this.url_cancel_appoinment, appointmentIdObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in cancel appoitment:', error);
      throw error;
    }));
  }
  doneAppointment(appointmentId) {
    console.log(this.url_done_appointment);
    const appointmentIdObj = {
      appointmentId: appointmentId
    };
    return this.http.put(this.url_done_appointment, appointmentIdObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in done appointment', error);
      throw error;
    }));
  }
  static #_ = this.ɵfac = function DoctorService_Factory(t) {
    return new (t || DoctorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DoctorService,
    factory: DoctorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4579:
/*!*************************************************************!*\
  !*** ./src/app/Doctor/home-doctor/home-doctor.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeDoctorComponent: () => (/* binding */ HomeDoctorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doctor.service */ 8137);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 6515);




class HomeDoctorComponent {
  constructor(doctorServ, navbarService) {
    this.doctorServ = doctorServ;
    this.navbarService = navbarService;
  }
  ngOnInit() {
    this.navbarService.showNavbar();
    this.doctorId = localStorage.getItem('userId');
    console.log(this.doctorId);
    this.doctorServ.getDoctor(this.doctorId).subscribe(data => {
      this.doctor = data;
      //console.log("Login successful");
      console.log(data);
    }, error => {
      console.error("Doctor not avialable.", error);
      // Handle login error (e.g., display an error message)
    });
  }
  static #_ = this.ɵfac = function HomeDoctorComponent_Factory(t) {
    return new (t || HomeDoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_doctor_service__WEBPACK_IMPORTED_MODULE_0__.DoctorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeDoctorComponent,
    selectors: [["app-home-doctor"]],
    decls: 64,
    vars: 0,
    consts: [[1, "bg-gray-100", "mt-14", "font-sans", "leading-normal", "tracking-normal"], [1, "hero-section", "h-auto"], [1, "h-screen"], ["src", "assets/desk1.jpeg", "alt", "Doctor's Desk Image", 1, "relative", "w-full", "h-3/4", "bg-cover"], [1, "welcome-text", "text-center", "text-white", "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2"], [1, "text-4xl", "md:text-6xl", "font-bold", "mb-4"], [1, "text-lg", "md:text-xl", "mb-8"], [1, "flex", "justify-center", "space-x-4"], ["href", "#", 1, "bg-blue-500", "hover:bg-blue-600", "text-white", "font-bold", "py-2", "px-4", "rounded-full"], ["href", "#", 1, "bg-gray-500", "hover:bg-gray-600", "text-white", "font-bold", "py-2", "px-4", "rounded-full"], [1, "container", "mx-auto", "px-20", "py-12"], [1, "text-3xl", "font-semibold", "text-gray-900", "mb-6", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-56"], [1, "bg-white", "p-6", "pl-12", "rounded-lg", "shadow-md"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-700"], [1, "font-semibold"]],
    template: function HomeDoctorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Welcome, Dr. John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Manage your appointments and patients with ease.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "View Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Manage Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Upcoming Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Feb 25, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "10:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Reason: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Checkup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13)(34, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Jane Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Mar 10, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "2:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Reason: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Follow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 13)(49, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Emily Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Apr 5, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Reason: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Annual Physical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: [".hero-section[_ngcontent-%COMP%] {\n    position: relative;\n}\n.welcome-text[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 34%;\n    left: 28%;\n    transform: translate(-50%, -50%);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZG9jdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQyIsImZpbGUiOiJob21lLWRvY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndlbGNvbWUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM0JTtcclxuICAgIGxlZnQ6IDI4JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL2hvbWUtZG9jdG9yL2hvbWUtZG9jdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7O0FBR0Esb2tCQUFva0IiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ud2VsY29tZS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzQlO1xyXG4gICAgbGVmdDogMjglO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 239:
/*!***************************************************!*\
  !*** ./src/app/Doctor/jwt-interceptor.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptorService: () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class JwtInterceptorService {
  intercept(request, next) {
    // Add the JWT token to the request headers if available
    const token = localStorage.getItem('jwt');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptorService_Factory(t) {
    return new (t || JwtInterceptorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: JwtInterceptorService,
    factory: JwtInterceptorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1756:
/*!***************************************************!*\
  !*** ./src/app/Doctor/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponentDoctor: () => (/* binding */ NavbarComponentDoctor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function NavbarComponentDoctor_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5)(5, "ul", 6)(6, "li", 7)(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7)(10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7)(13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7)(16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
class NavbarComponentDoctor {
  constructor(navbarService) {
    this.navbarService = navbarService;
    this.hideNavbar = false;
  }
  ngOnInit() {
    this.navbarService.hideNavbar$.subscribe(hide => {
      this.hideNavbar = hide;
    });
  }
  static #_ = this.ɵfac = function NavbarComponentDoctor_Factory(t) {
    return new (t || NavbarComponentDoctor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponentDoctor,
    selectors: [["app-navbar-doctor"]],
    decls: 1,
    vars: 1,
    consts: [["class", "fixed top-0 w-full flex align-center bg-custom-gradient z-10", 4, "ngIf"], [1, "fixed", "top-0", "w-full", "flex", "align-center", "bg-custom-gradient", "z-10"], [1, "mx-6", "justify-center", "my-2"], ["routerLink", "/homedoctor", "routerLinkActive", "active"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", "alt", "image", 1, "flex", "float-left", "w-64", "mix-blend-color-burn"], [1, "ml-auto"], [1, "flex", "float-right"], [1, "my-3", "mx-5"], ["routerLink", "/homedoctor", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["routerLink", "/dashboardDoctor", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["routerLink", "/doctor-logout", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"]],
    template: function NavbarComponentDoctor_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavbarComponentDoctor_nav_0_Template, 18, 0, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideNavbar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: [".fixed-navbar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvRG9jdG9yL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBLGdhQUFnYSIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5121:
/*!******************************************************************!*\
  !*** ./src/app/Patient/about-section/about-section.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutSectionComponent: () => (/* binding */ AboutSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../footer/footer.component */ 6515);


class AboutSectionComponent {
  static #_ = this.ɵfac = function AboutSectionComponent_Factory(t) {
    return new (t || AboutSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutSectionComponent,
    selectors: [["app-about-section"]],
    decls: 108,
    vars: 0,
    consts: [[1, "bg-custom-gradient"], [1, "pt-[4%]"], [1, "mb-0", "py-5"], [1, "container", "mx-auto"], [1, "text-center", "font-semibold", "py-4"], [1, "text-[2.5rem]", "text-[#333]"], [1, "web", "mt-0", "px-8"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "web-item", "max-w-[400px]", "bg-white", "shadow-[0px_0px_20px_rgba(0,0,0,0.1)]", "text-center", "transition-all", "duration-[0.3s]", "ease-[ease]", "mx-auto", "my-0", "p-5", "rounded-[10px]", "hover:translate-y-[-5px];"], [1, "flex", "items-center", "justify-center", "mb-4"], [1, "flaticon-1", "text-5xl", "text-[#1497ee]"], [1, "text-center", "mb-4", "text-2xl", "text-[#333]", "mt-2.5"], ["src", "assets/test1.jpg", "alt", "1", 1, "mx-auto", "mb-4", "inline-block", "py-[5%]", "p-[auto]"], [1, "text-center", "text-[#666]", "mt-[5px]"], ["href", "", 1, "btn", "inline-block", "bg-[#1497ee]", "text-white", "transition-all", "duration-[0.3s]", "ease-[ease]", "px-5", "py-2.5", "rounded-[5px]", "hover:bg-[#1497ee]", "mx-auto", "mt-4"], [1, "flaticon-2", "text-5xl", "text-[#1497ee]"], [1, "flaticon-3", "text-5xl", "text-[#1497ee]"], [1, "about", "py-7"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "items-center"], [1, "flex", "about-img", "item-center", "justify-center", "rounded-xl", "bg-white"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712516464/logo21_rmoqg9.jpg", "alt", "Image", 1, "inline-block"], [1, "about-content"], [1, "section-header", "py-5"], [1, "about-text", "text-white", "pb-5"], [1, "mb-[15px]"], ["href", "", 1, "btn", "inline-block", "bg-white", "text-[#417af6]", "transition-all", "duration-[0.3s]", "ease-[ease]", "mt-5", "px-5", "py-2.5", "rounded-[5px]", "hover:bg-[#1497ee]", "hover:text-white"], [1, "bg-white", "bg-opacity-25"], [1, "page-header", "mb-5"], [1, "container", "mx-5", "px-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "py-24"], [1, "feature-img", "mb-8", "rounded-lg", "overflow-hidden"], [1, "bg-white", "grid", "grid-cols-2", "md:grid-cols-2", "border-2", "border-black", "rounded"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712516386/book-doctor-appointment_zsggna.jpg", "alt", "Image", 1, "w-full", "z-10", "h-auto", "md:max-h-30", "md:max-h-44", "lg:max-h-40", "transition", "duration-300", "transform", "hover:scale-110", "hover:-z-20"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712516390/online_doc_sozb47.webp", "alt", "Image", 1, "w-full", "z-10", "h-auto", "md:max-h-30", "md:max-h-44", "lg:max-h-40", "transition", "duration-300", "transform", "hover:scale-110", "hover:-z-20"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712516388/doctorcharacter_vuar3q.png", "alt", "Image", 1, "w-full", "z-10", "h-auto", "md:max-h-30", "md:max-h-44", "lg:max-h-40", "transition", "duration-300", "transform", "hover:scale-110", "hover:-z-20"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712516392/Online_doctor_lvclho.jpg", "alt", "Image", 1, "w-full", "z-1", "0", "h-auto", "md:max-h-30", "md:max-h-44", "lg:max-h-40", "transition", "duration-300", "transform", "hover:scale-110", "hover:-z-20"], [1, "container", "px-10", "py-14"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-12", "gap-y-20"], [1, "feature-item"], [1, "flaticon-cooking", "text-6xl", "text-green-500"], [1, "text-xl", "font-bold", "mb-2"], [1, "text-base"], [1, "flaticon-vegetable", "text-6xl", "text-green-500"]],
    template: function AboutSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 3)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Comprehensive Primary Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Offer a comprehensive range of primary care services, including routine check-ups, preventive care, and treatment for common illnesses. Emphasize the importance of regular health screenings and wellness exams to maintain overall health and detect potential issues early. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Specialized Medical Expertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Highlight the expertise of your medical professionals in specialized areas such as cardiology, dermatology, pediatrics, etc. Describe how these specialists provide advanced diagnostic and treatment options tailored to each patient's unique needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8)(31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Advanced Technology and Diagnostic Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Showcase the state-of-the-art technology and diagnostic facilities available at your clinic, including X-rays, ultrasound, MRI, CT scans, and laboratory tests. Explain how these advanced resources aid in accurate diagnosis, personalized treatment plans, and improved patient outcomes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17)(41, "div", 3)(42, "div", 18)(43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Doc-Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23)(50, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Our website allows patients to easily schedule appointments with medical professionals online, offering convenience and accessibility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Patients can access detailed information about available services, doctor profiles, and clinic contact details, enabling them to make informed decisions about their healthcare needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Book An Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26)(57, "div", 27)(58, "div", 3)(59, "div", 4)(60, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Why choose us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28)(63, "div", 29)(64, "div", 30)(65, "div", 31)(66, "div", 32)(67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 37)(76, "div", 38)(77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Easy Appointment Scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Streamlined booking process for quick appointments with preferred doctors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Comprehensive Doctor Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Detailed profiles with specialties, qualifications, and availability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Real-time Availability Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Instant updates on available appointment slots for efficient scheduling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Patient Feedback and Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Streamlined booking process for quick appointments with preferred doctors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Telemedicine Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Seamless virtual consultations for added accessibility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    styles: [".web-item[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n}\n.web-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: all 0.3s ease;\n}\n.web-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color:#1497ee;\n}\n\n.feature-img[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n    width: 50%; \n}\n\n.feature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%; \n\n    height: auto; \n\n    max-width: 100%; \n\n}\n\n.feature[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    padding: 45px 0 0 0;\n}\n\n.feature[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-img[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    margin-bottom: 25px;\n    overflow: hidden;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-img[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .feature[_ngcontent-%COMP%]   .feature-img[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    padding: 0;\n    overflow: hidden;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    transition: .3s;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n}\n\n.feature[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 15px;\n    margin-bottom: 45px;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 45px;\n}\n\n.feature[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    color: #719a0a;\n    font-size: 60px;\n    line-height: 60px;\n    margin-bottom: 15px;\n    background-image: linear-gradient(#719a0a, #fbaf32);\n    -webkit-text-fill-color: transparent;\n}\n.feature[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n    position: absolute;\n    content: \"\";\n    width: 40px;\n    height: 40px;\n    top: -10px;\n    left: 20px;\n    background: #fbaf32;\n    border-radius: 30px;\n    \n}\n.feature[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXLEVBQUUscURBQXFEO0lBQ2xFLFlBQVksRUFBRSwyQkFBMkI7SUFDekMsZUFBZSxFQUFFLHFDQUFxQztBQUMxRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFib3V0LXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWItaXRlbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuLndlYi1pdGVtIGEge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4ud2ViLWl0ZW0gYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNDk3ZWU7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWltZyAuY29sLTYge1xyXG4gICAgd2lkdGg6IDUwJTsgXHJcbn1cclxuXHJcbi5mZWF0dXJlLWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEVuc3VyZXMgdGhlIGltYWdlcyBmaWxsIHRoZWlyIHJlc3BlY3RpdmUgY29sdW1ucyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbnMgYXNwZWN0IHJhdGlvICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIFByZXZlbnRzIGltYWdlcyBmcm9tIG92ZXJmbG93aW5nICovXHJcbn1cclxuXHJcbi5mZWF0dXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDVweCAwIDAgMDtcclxufVxyXG5cclxuLmZlYXR1cmUgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLXRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWltZyAuY29sLTYsXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWltZyAuY29sLTEyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pbWcgaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtdGV4dCAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pdGVtIGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzcxOWEwYTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNzE5YTBhLCAjZmJhZjMyKTtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pdGVtIGk6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiYWYzMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBcclxufVxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pdGVtIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9hYm91dC1zZWN0aW9uL2Fib3V0LXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXLEVBQUUscURBQXFEO0lBQ2xFLFlBQVksRUFBRSwyQkFBMkI7SUFDekMsZUFBZSxFQUFFLHFDQUFxQztBQUMxRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0Esb3JIQUFvckgiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViLWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcbi53ZWItaXRlbSBhIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLndlYi1pdGVtIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTQ5N2VlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1pbWcgLmNvbC02IHtcclxuICAgIHdpZHRoOiA1MCU7IFxyXG59XHJcblxyXG4uZmVhdHVyZS1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmVzIHRoZSBpbWFnZXMgZmlsbCB0aGVpciByZXNwZWN0aXZlIGNvbHVtbnMgKi9cclxuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW5zIGFzcGVjdCByYXRpbyAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBQcmV2ZW50cyBpbWFnZXMgZnJvbSBvdmVyZmxvd2luZyAqL1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQ1cHggMCAwIDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pbWcgLmNvbC02LFxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pbWcgLmNvbC0xMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtaW1nIGltZzpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLXRleHQgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtaXRlbSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM3MTlhMGE7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzcxOWEwYSwgI2ZiYWYzMik7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZlYXR1cmUgLmZlYXR1cmUtaXRlbSBpOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmFmMzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgXHJcbn1cclxuLmZlYXR1cmUgLmZlYXR1cmUtaXRlbSBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4954:
/*!********************************************!*\
  !*** ./src/app/Patient/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _patientAuth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientAuth.service */ 8162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log("in can active ")
      if (yield _this.authService.isAuthenticated()) {
        return true;
      } else {
        // Store the attempted URL for redirection after login
        //console.log("in can active else")
        //console.log("state.url",state.url);
        _this.authService.redirectUrl = state.url;
        let isLogin = localStorage.getItem('isLogin');
        if (isLogin == "true" && isLogin != null) {
          //console.log(isLogin);
          // console.log("going to signin");
          _this.router.navigate(['/homedoctor']);
          // await this.router.navigate(['/signinPatient'], { replaceUrl: true });
        } else {
          _this.router.navigate(['/signinPatient']);
        }
        return false;
      }
    })();
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_patientAuth_service__WEBPACK_IMPORTED_MODULE_1__.PatientAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8162:
/*!*****************************************************!*\
  !*** ./src/app/Patient/auth/patientAuth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientAuthService: () => (/* binding */ PatientAuthService)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);





class PatientAuthService {
  constructor(http) {
    this.http = http;
    this.url_login = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/patient/auth/login";
    this.url_signup = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/patient/auth/signup";
    this.url_checkUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "api/patient/auth/check";
  }
  signupPatient(patientData) {
    return this.http.post(this.url_signup, patientData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error in signupPatient:', error);
      throw error;
    }));
  }
  loginPatient(patientData) {
    //console.log(patientData);
    return this.http.post(this.url_login, patientData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error in loginPatient:', error);
      throw error;
    }));
  }
  isAuthenticated() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _this.AuthPatient().toPromise();
        //console.log(data);
        if (data.status === "success") {
          return true;
        } else {
          //console.log("in false : ");
          return false;
        }
      } catch (error) {
        console.error("Authentication error", error);
        return false;
      }
    })();
  }
  AuthPatient() {
    return this.http.get(this.url_checkUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      //console.error('Error in loginPatient:', error);
      throw error;
    }));
  }
  static #_ = this.ɵfac = function PatientAuthService_Factory(t) {
    return new (t || PatientAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: PatientAuthService,
    factory: PatientAuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3189:
/*!*********************************************************************!*\
  !*** ./src/app/Patient/auth/registration/registration.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationComponentPatient: () => (/* binding */ RegistrationComponentPatient)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ 9026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _patientAuth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patientAuth.service */ 8162);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);









function RegistrationComponentPatient_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_9_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 10)(7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_9_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.fullname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_9_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10)(16, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_9_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.confpassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentPatient_div_9_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.next_verify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-gray-100 border border-", ctx_r0.value_border, " text-gray-800 sm:text-sm rounded-lg focus:ring-primary-#2563eb focus:border-primary-#2563eb block w-full p-2.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-gray-100 border border-", ctx_r0.value_border, " text-gray-800 sm:text-sm rounded-lg focus:ring-primary-#2563eb focus:border-primary-#2563eb block w-full p-2.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.confpassword);
  }
}
function RegistrationComponentPatient_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentPatient_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.back_to_email());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "div", 10)(7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Varify Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_10_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.entered_otp = $event);
    })("input", function RegistrationComponentPatient_div_10_Template_input_input_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.autoVerify($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 27)(12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "OTP will send to your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentPatient_div_10_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.genOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Click to Get OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.entered_otp);
  }
}
function RegistrationComponentPatient_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function RegistrationComponentPatient_div_12_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bloodgroup_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", bloodgroup_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", bloodgroup_r17.label, " ");
  }
}
function RegistrationComponentPatient_div_12_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", gender_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](gender_r18.label);
  }
}
function RegistrationComponentPatient_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentPatient_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.back_to_verify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "div", 27)(7, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_12_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.dob = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 27)(11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_12_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.age = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 27)(15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_12_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.selectedBloodGroup = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RegistrationComponentPatient_div_12_option_18_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "div", 27)(21, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_12_Template_select_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.selectedGender = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, RegistrationComponentPatient_div_12_option_24_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 39)(26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 42)(29, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Choose profile photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RegistrationComponentPatient_div_12_Template_input_change_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.loadFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 27)(33, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistrationComponentPatient_div_12_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.phone_no = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponentPatient_div_12_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.signup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.dob);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.selectedBloodGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.bloodGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.selectedGender);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.phone_no);
  }
}
var Tab;
(function (Tab) {
  Tab["Profile"] = "profile";
  Tab["Email"] = "email";
  Tab["Verify"] = "verify";
})(Tab || (Tab = {}));
class RegistrationComponentPatient {
  constructor(patientServ, navbarService, router) {
    this.patientServ = patientServ;
    this.navbarService = navbarService;
    this.router = router;
    this.otpLength = 6;
    this.selectedBloodGroup = 0;
    this.selectedGender = 0;
    this.profileImg = '../../../../assets/profile.jpeg';
    this.varifyEmail = false;
    this.message = '';
    this.genders = [{
      label: 'Select Your Gender',
      value: '0'
    }, {
      label: 'Male',
      value: 'Male'
    }, {
      label: 'Female',
      value: 'Female'
    }];
    this.bloodGroups = [{
      label: 'Select Your Blood Group',
      value: '0'
    }, {
      label: 'A+',
      value: 'A+'
    }, {
      label: 'A-',
      value: 'A-'
    }, {
      label: 'B+',
      value: 'B+'
    }, {
      label: 'B-',
      value: 'B-'
    }, {
      label: 'AB+',
      value: 'AB+'
    }, {
      label: 'AB-',
      value: 'AB-'
    }, {
      label: 'O+',
      value: 'O+'
    }, {
      label: 'O-',
      value: 'O-'
    }];
    this.value_border = "gray-400";
    this.activeTab = Tab.Email;
  }
  loadFile(event) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          _this.profileImg = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    })();
  }
  genOTP() {
    this.actual_otp = Math.floor(100000 + Math.random() * 900000).toString();
    // console.log(this.actual_otp);
    // console.log("Inside genOTP");
    emailjs_com__WEBPACK_IMPORTED_MODULE_2__["default"].send(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.SERVICE_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TEMPLATE_ID, {
      name: this.fullname,
      otp: this.actual_otp,
      to_email: this.email
    }, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.USER_ID).then(response => {
      // console.log('Email sent successfully!', response);
    }).catch(error => {
      // console.error('Email could not be sent:', error);
    });
  }
  autoVerify(event) {
    const enteredOTP = event.target.value;
    this.entered_otp = enteredOTP;
    if (enteredOTP.length === 6) {
      this.varify_email(); // Automatically verify OTP when 6 digits are entered
    }
  }

  varify_email() {
    // console.log(this.actual_otp);
    // console.log(this.entered_otp);
    if (this.actual_otp === this.entered_otp) {
      this.varifyEmail = true;
      this.message = '';
      this.next_profile();
    } else {
      this.message = "OTP is incorrect !!!";
    }
  }
  ngOnInit() {
    this.selectedGender = '0';
    this.selectedBloodGroup = '0';
    this.navbarService.setHideNavbar(true);
  }
  get Tab() {
    return Tab;
  }
  getshow(tab) {
    return tab === this.activeTab ? 1 : 0;
  }
  view_profile() {
    this.activeTab = Tab.Profile;
  }
  // Change active tab to Appointments
  view_email() {
    this.activeTab = Tab.Email;
    //console.log('activeTab:', this.activeTab);
  }

  view_verify() {
    this.activeTab = Tab.Verify;
    //console.log('activeTab:', this.activeTab);
  }

  next_verify() {
    this.view_verify();
  }
  next_profile() {
    this.view_profile();
  }
  back_to_email() {
    this.view_email();
  }
  back_to_verify() {
    this.view_verify();
  }
  signup() {
    if (this.password == this.confpassword) {
      // console.log("Signed up");
      const patientData = {
        Email: this.email,
        Password: this.password,
        Name: this.fullname,
        DoB: this.dob,
        Age: this.age,
        Profile_picture: this.profileImg,
        Gender: this.selectedGender,
        Phone_no: this.phone_no,
        BloodGroup: this.selectedBloodGroup
      };
      this.patientServ.signupPatient(patientData).subscribe(data => this.patient = data);
      this.email = '';
      this.password = '';
      // console.log("patient : ");
      // console.log(this.patient);
      this.router.navigate(['/signinPatient']);
    } else {
      this.value_border = "red-500";
    }
  }
  static #_ = this.ɵfac = function RegistrationComponentPatient_Factory(t) {
    return new (t || RegistrationComponentPatient)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_patientAuth_service__WEBPACK_IMPORTED_MODULE_3__.PatientAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_4__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RegistrationComponentPatient,
    selectors: [["app-registration-patient"]],
    decls: 13,
    vars: 4,
    consts: [[1, "bg-custom-gradient"], [1, "flex", "flex-col", "min-h-screen", "h-screen", "items-center", "justify-center", "px-6", "py-8", "mx-auto", "lg:py-0"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "flex", "items-center", "mb-6", "text-2xl", "font-semibold", "text-gray-900", "dark:text-white"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", 1, "w-420", "mix-blend-color-burn"], [1, "w-full", "backdrop-blur-lg", "bg-white/40", "md:mt-0", "sm:max-w-4xl", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], [4, "ngIf"], [1, "flex", "flex-wrap", "-mx-3", "mb-6"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "fullname", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "fullname", "id", "fullname", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModel", "ngModelChange"], ["for", "confpassword", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "password", "name", "confpassword", "id", "confpassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "float-right", "w-20", "h-10", "my-5", "flex", "justify-center", "items-center", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-arrow-right", "fill-black"], [1, "mt-5", "text-sm", "font-normal", "text-black"], ["routerLink", "/signinPatient", 1, "font-medium", "text-primary-700", "hover:underline"], ["type", "submit", 1, "w-20", "h-10", "my-5", "flex", "justify-center", "items-center", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-arrow-left", "fill-black"], ["for", "otp", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "otp", "id", "otp", "placeholder", "123456", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange", "input"], [1, "w-full", "md:w-1/3", "px-3", "mb-6", "md:mb-0"], ["type", "submit", 1, "block", "w-full", "p-2.5", "text-primary-700", "font-bold", "border-2", "border-primary-700", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-10", "py-2", "space-x-2", "transition", "duration-100", 3, "click"], [1, "text-red-700"], ["for", "dob", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "date", "name", "dob", "id", "dob", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "age", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "age", "id", "age", "placeholder", "49", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "selectedBloodGroup", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "selectedBloodGroup", "name", "selectedBloodGroup", "placeholder", "Select Your Gender", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "selectedGender", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "selectedGender", "name", "selectedGender", "placeholder", "Select Your Gender", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "md:w-1/3", "space-x-6"], [1, "shrink-0"], ["id", "preview_img", "alt", "Current profile photo", 1, "h-16", "w-16", "object-cover", "rounded-full", 3, "src"], [1, "block"], [1, "sr-only"], ["type", "file", "accept", "image/*", 1, "block", "w-full", "text-sm", "text-slate-500", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-full", "file:border-0", "file:text-sm", "file:font-semibold", "file:bg-violet-50", "file:text-violet-700", "hover:file:bg-violet-100", 3, "change"], ["for", "phone_no", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "tel", "name", "phone_no", "id", "phone_no", "pattern", "[0-9]{5}-[0-9]{5}", "placeholder", "84123-49856", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], [3, "value"]],
    template: function RegistrationComponentPatient_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Register in Doc Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, RegistrationComponentPatient_div_9_Template, 27, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RegistrationComponentPatient_div_10_Template, 17, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RegistrationComponentPatient_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, RegistrationComponentPatient_div_12_Template, 42, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("verify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getshow("profile"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7616:
/*!*********************************************************!*\
  !*** ./src/app/Patient/auth/signin/signin.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponentPatient: () => (/* binding */ SigninComponentPatient)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _patientAuth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patientAuth.service */ 8162);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function SigninComponentPatient_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *your email or password is incorrect.* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SigninComponentPatient_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
function SigninComponentPatient_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentPatient_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.email);
  }
}
function SigninComponentPatient_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentPatient_ng_template_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.email);
  }
}
function SigninComponentPatient_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
function SigninComponentPatient_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentPatient_ng_template_23_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.password);
  }
}
function SigninComponentPatient_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SigninComponentPatient_ng_template_25_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.password);
  }
}
class SigninComponentPatient {
  //private navbarComponentPatient: NavbarComponentPatient
  constructor(patientServ, navbarService, router) {
    this.patientServ = patientServ;
    this.navbarService = navbarService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.cssclass = "failed";
    this.incorrect = false;
    this.isLogin = false;
  }
  signin() {
    // console.log("clicked");
    //console.log(this.email);
    //console.log(this.password);
    if (this.password && this.email) {
      // console.log("In login");
      const patientData = {
        Email: this.email,
        Password: this.password
      };
      this.patientServ.loginPatient(patientData).subscribe(data => {
        //this.patient = data;
        // console.log("Login successful");
        // console.log("data : ",data);
        this.userId = data._id;
        // console.log("userId");
        // console.log(this.userId);
        localStorage.removeItem("userId");
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('jwt', data.token);
        this.email = '';
        this.password = '';
        localStorage.setItem('isLogin', "true");
        this.isLogin = true;
        this.navbarService.setIsLogin(this.isLogin);
        localStorage.setItem('mode', 'Patient');
        this.navbarService.setMode('Patient');
        this.navbarService.showNavbar();
        const redirectUrl = this.patientServ.redirectUrl || '/homepatient';
        // console.log("this.patientServ.redirectUrl",this.patientServ.redirectUrl);
        this.router.navigate([redirectUrl]);
        //this.router.navigate(['/homepatient']);
      }, error => {
        console.error("Login error", error);
        this.incorrect = true;
        // Handle login error (e.g., display an error message)
      });

      this.password = '';
    } else {
      // console.log("unsucessful not login");
      //console.log(this.patient);
      //this.value_border="red-500";
    }
  }
  ngOnInit() {
    //this.navbarComponentPatient.hideNavbar();
    this.navbarService.setHideNavbar(true);
  }
  static #_ = this.ɵfac = function SigninComponentPatient_Factory(t) {
    return new (t || SigninComponentPatient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_patientAuth_service__WEBPACK_IMPORTED_MODULE_0__.PatientAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SigninComponentPatient,
    selectors: [["app-signin-patient"]],
    decls: 42,
    vars: 7,
    consts: [[1, "bg-custom-gradient"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-8", "mx-auto", "md:h-screen", "lg:py-0"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "flex", "items-center", "mb-6", "text-2xl", "font-semibold", "text-gray-900", "dark:text-white"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", 1, "w-420", "mix-blend-color-burn"], [1, "w-full", "backdrop-blur-lg", "bg-white/40", "md:mt-0", "sm:max-w-lg", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], ["class", "text-sm font-semibold text-red-600 ", 4, "ngIf"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["thenBlock1", ""], ["elseBlock1", ""], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-start"], [1, "flex", "items-center", "h-5"], ["id", "remember", "aria-describedby", "remember", "type", "checkbox", "required", "", 1, "w-4", "h-4", "border", "border-gray-300", "rounded", "bg-gray-50", "focus:ring-3", "focus:ring-primary-300"], [1, "ml-3", "text-sm"], ["for", "remember", 1, "text-gray-800"], ["href", "#", 1, "text-sm", "font-semibold", "text-primary-700", "hover:underline"], ["id", "signin", "type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], [1, "text-sm", "font-normal", "text-black"], ["routerLink", "/registerPatient", 1, "font-medium", "text-primary-700", "hover:underline"], [1, "text-sm", "font-semibold", "text-red-600"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border-2", "border-red-500", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@company.com", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border-2", "border-red-500", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"]],
    template: function SigninComponentPatient_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Sign in to your account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 7)(9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SigninComponentPatient_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SigninComponentPatient_div_14_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SigninComponentPatient_ng_template_15_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SigninComponentPatient_ng_template_17_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SigninComponentPatient_div_22_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SigninComponentPatient_ng_template_23_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SigninComponentPatient_ng_template_25_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SigninComponentPatient_Template_button_click_36_listener() {
          return ctx.signin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Don't have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrect)("ngIfThen", _r7)("ngIfElse", _r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8328:
/*!*************************************************************************************!*\
  !*** ./src/app/Patient/home-patient/book-appointment/book-appointment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookAppointmentComponent: () => (/* binding */ BookAppointmentComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var _payment_status_dialog_payment_status_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-status-dialog/payment-status-dialog.component */ 7166);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services.service */ 1313);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ 6316);











function BookAppointmentComponent_div_0_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 51)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", day_r6, " ");
  }
}
function BookAppointmentComponent_div_0_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-blue-500 text-white": a0,
    "text-gray-700 hover:bg-blue-200": a1
  };
};
function BookAppointmentComponent_div_0_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookAppointmentComponent_div_0_ng_container_95_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const date_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      ctx_r11.getDateValue(date_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.calculateSlot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx_r4.isToday(date_r9) === true, ctx_r4.isToday(date_r9) === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", date_r9, " ");
  }
}
function BookAppointmentComponent_div_0_div_96_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Slot On This Day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BookAppointmentComponent_div_0_div_96_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookAppointmentComponent_div_0_div_96_div_5_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.onChangeSlot(index_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r17.selectedSlot == index_r16 ? "bg-blue-900 text-blue-100" : "bg-blue-100 text-blue-900");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.timeSlots[index_r16].Time, " ");
  }
}
function BookAppointmentComponent_div_0_div_96_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.timeSlots[index_r16].Time, " ");
  }
}
function BookAppointmentComponent_div_0_div_96_div_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.timeSlots[index_r16].Time, " ");
  }
}
function BookAppointmentComponent_div_0_div_96_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookAppointmentComponent_div_0_div_96_div_5_button_1_Template, 2, 2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BookAppointmentComponent_div_0_div_96_div_5_button_2_Template, 2, 1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BookAppointmentComponent_div_0_div_96_div_5_button_3_Template, 2, 1, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.timeSlots[index_r16].Booked && !ctx_r14.timeSlots[index_r16].Canceled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.timeSlots[index_r16].Booked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.timeSlots[index_r16].Canceled);
  }
}
function BookAppointmentComponent_div_0_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Select a time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BookAppointmentComponent_div_0_div_96_div_3_Template, 3, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BookAppointmentComponent_div_0_div_96_div_5_Template, 4, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.timeSlots.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.timeSlots);
  }
}
const _c1 = function (a0) {
  return {
    "cursor-not-allowed opacity-25": a0
  };
};
const _c2 = function (a0, a1) {
  return {
    "opacity": a0,
    "cursor": a1
  };
};
function BookAppointmentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "4 out of 5 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18)(30, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Age :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 21)(35, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Experiance :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 21)(40, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Category :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 21)(45, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Specialist :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 21)(50, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Counselling Duration : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 21)(55, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Counselling Fees : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 22)(60, "div", 23)(61, "div", 24)(62, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Book an appointment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Get an appointment with our experienced accountants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 28)(68, "div", 29)(69, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Select a date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 31)(72, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BookAppointmentComponent_div_0_Template_input_ngModelChange_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.datepickerValue = $event);
    })("click", function BookAppointmentComponent_div_0_Template_input_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.showDatepicker = !ctx_r28.showDatepicker);
    })("keydown.escape", function BookAppointmentComponent_div_0_Template_input_keydown_escape_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.showDatepicker = false);
    })("ngModelChange", function BookAppointmentComponent_div_0_Template_input_ngModelChange_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.calculateSlot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.away", function BookAppointmentComponent_div_0_Template_div_keydown_away_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.showDatepicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 38)(79, "div")(80, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div")(85, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookAppointmentComponent_div_0_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.month = ctx_r32.month - 1);
    })("click", function BookAppointmentComponent_div_0_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.getNoOfDays());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookAppointmentComponent_div_0_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.month = ctx_r34.month + 1);
    })("click", function BookAppointmentComponent_div_0_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.getNoOfDays());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, BookAppointmentComponent_div_0_ng_container_92_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, BookAppointmentComponent_div_0_ng_container_94_Template, 2, 0, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, BookAppointmentComponent_div_0_ng_container_95_Template, 4, 5, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, BookAppointmentComponent_div_0_div_96_Template, 6, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookAppointmentComponent_div_0_Template_button_click_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.bookAppointment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.doctor.Profile_photo ? ctx_r0.doctor.Profile_photo : "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Dr. ", ctx_r0.doctor == null ? null : ctx_r0.doctor.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.doctor.Bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctor.Age, " Years ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctor.Experiance, " Years ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.doctor.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctor.Specialist, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctor.Slot_length, " Minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r0.doctor.Counselling_fee, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx_r0.minDate)("max", ctx_r0.maxDate)("ngModel", ctx_r0.datepickerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r0.showDatepicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.MONTH_NAMES[ctx_r0.month]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c1, ctx_r0.month === 0))("disabled", ctx_r0.month === 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx_r0.month === 11))("disabled", ctx_r0.month === 11 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.DAYS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.blankdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.no_of_days)("ngForTrackBy", ctx_r0.trackByIdentity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.datepickerValue != ctx_r0.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.selectedSlot === -1)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](31, _c2, ctx_r0.selectedSlot === -1 ? "0.5" : "1", ctx_r0.selectedSlot === -1 ? "not-allowed" : "pointer"));
  }
}
const _c3 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "360px",
    height: "360px",
    "border-radius": "10px"
  };
};
const _c4 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "150px",
    height: "35px",
    "border-radius": "3px"
  };
};
const _c5 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "300px",
    height: "35px",
    "border-radius": "3px"
  };
};
const _c6 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "100px",
    height: "35px",
    "border-radius": "3px"
  };
};
const _c7 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "130px",
    height: "35px",
    "border-radius": "3px"
  };
};
const _c8 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "120px",
    height: "35px",
    "border-radius": "3px"
  };
};
const _c9 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "780px",
    height: "360px",
    "border-radius": "10px"
  };
};
const _c10 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "250px",
    height: "40px",
    "border-radius": "8px"
  };
};
const _c11 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "260px",
    height: "40px",
    "border-radius": "8px"
  };
};
const _c12 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "150px",
    height: "40px",
    "border-radius": "4px"
  };
};
const _c13 = function () {
  return {
    "background-color": "rgba(40, 120, 255, 0.2)",
    width: "200px",
    height: "50px",
    "border-radius": "4px"
  };
};
function BookAppointmentComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 69)(24, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ngx-skeleton-loader", 68)(30, "ngx-skeleton-loader", 68)(31, "ngx-skeleton-loader", 68)(32, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ngx-skeleton-loader", 68)(35, "ngx-skeleton-loader", 68)(36, "ngx-skeleton-loader", 68)(37, "ngx-skeleton-loader", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "ngx-skeleton-loader", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](34, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](38, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](39, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](40, _c13));
  }
}
class BookAppointmentComponent {
  onChangeSlot(index) {
    this.selectedSlot = index;
    console.log(index);
  }
  getindex(str) {
    let temp = 0;
    switch (str) {
      case 'Mon':
        temp = 0;
        break;
      case 'Tue':
        temp = 1;
        break;
      case 'Wed':
        temp = 2;
        break;
      case 'Thu':
        temp = 3;
        break;
      case 'Fri':
        temp = 4;
        break;
      case 'Sat':
        temp = 5;
        break;
      case 'Sun':
        temp = 6;
        break;
      default:
        temp = 0;
        break;
    }
    return temp;
  }
  bookAppointment() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // if(this.selectedSlot == undefined)
        // {
        //   this.ngZone.run(() => {
        //     alert('please select Slot');
        //   });
        //   return
        // }
        const data = {
          amount: _this.doctor.Counselling_fee * 100
        };
        const response = yield _this.services.createOrderId(data).toPromise();
        _this.orderId = response.orderId;
        // console.log(this.orderId);
        // console.log(this.selectedSlot);
        // console.log(this.datepickerValue);
        const RazorpayOptions = {
          description: 'Appointment of Dr.' + _this.doctor.Name,
          amount: _this.doctor.Counselling_fee * 100,
          name: `Doc-Connect + ${_this.doctor.Name}`,
          key: 'rzp_test_C7vohyckaiJWR6',
          image: '../assets/Logo/logo21.jpg',
          order_id: _this.orderId,
          handler: response => _this.handlePaymentResponse(response),
          prefill: {
            name: _this.patient.Name,
            email: _this.patient.Email,
            phone: _this.patient.Phone_no
          },
          theme: {
            color: '#528FF0'
          },
          modal: {
            ondismiss: () => {
              console.log('dismissed');
            }
          }
        };
        const rzp1 = new Razorpay(RazorpayOptions);
        rzp1.on('payment.failed', response => {
          _this.ngZone.run(() => {
            // Use Angular's NgZone to ensure UI updates are triggered
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
        });
        rzp1.open();
        // const successCallback = (paymentId: any) => {
        //   console.log('Payment successful. Payment ID:', paymentId);
        // };
        // const failureCallback = (e: any) => {
        //   console.log(e);
        // };
        // Razorpay.open(RazorpayOptions, successCallback, failureCallback);
      } catch (error) {
        console.error('Error getting doctor:', error);
        // Handle error (e.g., display an error message)
      }
    })();
  }

  handlePaymentResponse(response) {
    var _this2 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.ngZone.run(() => {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        });
        // console.log(response);
        const verificationdata = response;
        // console.log('verificationdata');
        // console.log(verificationdata);
        // const paymentVerificationResponse : any = await this.services.verifyPayment(response).toPromise();
        // console.log(paymentVerificationResponse);
        // Display payment verification status in a dialog
        const dialogRef = _this2.dialog.open(_payment_status_dialog_payment_status_dialog_component__WEBPACK_IMPORTED_MODULE_1__.PaymentStatusDialogComponent, {
          data: verificationdata // Pass payment verification status to the dialog
        });
        // Listen to dialog's afterClosed event to handle success or failure
        dialogRef.afterClosed().subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            if (result) {
              // Dialog closed due to success
              // Proceed with redirection or any other actions
              _this2.payment = {
                RazrPay_id: response.razorpay_payment_id,
                Doctor_id: _this2.doctorId,
                Patient_id: _this2.patientId,
                Payable_amount: _this2.doctor.Counselling_fee,
                Status: "Paid"
              };
              const paymentResponse = yield _this2.services.appointmentPayment(_this2.payment).toPromise();
              const dateParts = _this2.datepickerValue.split(" "); // Split the date string by space
              const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              // Parse the date string parts
              const day = parseInt(dateParts[2], 10); // Extract day
              const monthIndex = monthNames.indexOf(dateParts[1]); // Get month index
              const year = parseInt(dateParts[3], 10); // Extract year
              // Create a new Date object
              const date = new Date(year, monthIndex, day);
              // console.log(date);
              _this2.appointment = {
                Doctor_id: _this2.doctorId,
                Patient_id: _this2.patientId,
                Payment_id: paymentResponse.paymentId,
                Starting_time: _this2.timeSlots[_this2.selectedSlot].Time,
                Day: _this2.datepickerValue.slice(0, 3),
                Date: date,
                Status: "Approved"
              };
              //This will also update slot to booked in Docto's Database
              const appointmentResponse = yield _this2.services.bookAppointment(_this2.appointment).toPromise();
              // console.log(appointmentResponse);
              // console.log(appointmentResponse._id);
              const updateSlotObject = {
                appointment_id: appointmentResponse._id,
                day: _this2.getindex(_this2.appointment.Day),
                slotNo: _this2.selectedSlot,
                doctorId: _this2.doctor._id
              };
              // console.log(updateSlotObject);
              const doctorSlotUpdate = yield _this2.services.updateDoctorSlotBook(updateSlotObject, _this2.doctor._id).toPromise();
              //After this redirect to appointment page show that not need to refresh page.
              _this2.ngZone.run(() => {
                alert('Your appointment is booked.');
              });
              _this2.router.navigate(['/dashboardPatient']);
            } else {
              // Dialog closed due to failure
              // Handle failure scenario
              _this2.ngZone.run(() => {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                alert('Please try again your payment.');
              });
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (error) {
        console.error('Error getting doctor:', error);
        // Handle error (e.g., display an error message)
      }
    })();
  }

  calculateSlot() {
    //console.log('calculateSlot function called');
    this.timeSlots = [];
    let date = this.datepickerValue;
    this.selectedSlot = -1;
    //console.log(date);
    let t = date.substr(0, 3);
    //console.log(t);
    this.temp = this.getindex(t);
    // console.log(temp);
    this.timeSlots = this.doctor.Slots[this.temp];
    //console.log(this.timeSlots);
    // let time1_start = this.doctor.Starting_time_first[temp];
    // let time1_end = this.doctor.Ending_time_first[temp];
    // let time2_start = this.doctor.Starting_time_second[temp];
    // let time2_end = this.doctor.Ending_time_second[temp];
    // if(time2_start == 0)
    // {
    //   let slot = this.doctor.Slots[temp];
    //   //console.log(slot);
    //   let count1 = time1_end - time1_start;
    //   let count = 0;
    //   //console.log(count);
    //   while (count1 >0 ) {
    //     const timeSlot = {
    //       Time: time1_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };
    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time1_start += 1;
    //     count1 -= 1;
    //   }
    // }
    // else
    // {
    //   let slot = this.doctor.Slots[temp];
    //   //console.log(slot);
    //   let count1 = time1_end - time1_start;
    //   let count = 0;
    //   //console.log(count);
    //   while (count1 >0 ) {
    //     const timeSlot = {
    //       Time: time1_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };
    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time1_start += 1;
    //     count1 -= 1;
    //   }
    //   let count2 = time2_end - time2_start;
    //   while (count2 >0 ) {
    //     const timeSlot = {
    //       Time: time2_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };
    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time2_start += 1;
    //     count2 -= 1;
    //   }
    // }
    // console.log(this.timeSlots);
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.day = today.getDate();
    this.datepickerValue = new Date(this.year, this.month, today.getDate() + 1).toDateString();
    this.today = new Date(this.year, this.month, today.getDate()).toDateString();
    this.minDate = new Date(this.year, this.month, today.getDate() + 1).toDateString();
    this.maxDate = new Date(this.year, this.month, today.getDate() + 7).toDateString();
    //console.log(this.minDate);
    //console.log(this.maxDate);
  }

  isToday(date) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }
  getDateValue(date) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.showDatepicker = false;
  }
  getNoOfDays() {
    // Get the current date
    const today = new Date();
    // Calculate the date for tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    // Calculate the date for 7 days from tomorrow
    const nextWeek = new Date(tomorrow);
    nextWeek.setDate(tomorrow.getDate() + 5);
    // Get the total number of days in the current month
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    // console.log(daysInMonth);
    // Find where to start the calendar day of the week
    // console.log("month : ",this.month);
    // console.log("month : ",today.getMonth());
    let dayOfWeek;
    if (this.month === today.getMonth()) {
      dayOfWeek = new Date(this.year, this.month, today.getDate() + 1).getDay();
    } else {
      let firstDayOfMonth = new Date(this.year, this.month, 1);
      dayOfWeek = firstDayOfMonth.getDay();
    }
    // let dayOfWeek = new Date(this.year, this.month, today.getDate() + 1).getDay(); // Start of the month
    //let dayOfWeek = new Date(this.year, this.month, 1).getDay();
    // console.log(dayOfWeek);
    let blankdaysArray = [];
    for (let i = 0; i < dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    // console.log(blankdaysArray);
    // Array to store days within the next 7 days
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.year, this.month, i);
      // Include only dates starting from tomorrow and within the next 7 days
      if (currentDate >= today && currentDate <= nextWeek) {
        daysArray.push(i);
      }
    }
    //console.log(daysArray);
    // Update the component properties with the calculated arrays
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }
  constructor(route, services, router, ngZone, dialog) {
    this.route = route;
    this.services = services;
    this.router = router;
    this.ngZone = ngZone;
    this.dialog = dialog;
    this.selectedSlot = -1;
    this.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.showDatepicker = false;
    this.no_of_days = [];
    this.blankdays = [];
    this.timeSlots = [];
    this.loading = true;
    this.trackByIdentity = (index, item) => item;
  }
  ngOnInit() {
    var _this3 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.loading = true;
        let isLogin = localStorage.getItem('isLogin');
        if (isLogin == "false" || isLogin == null) {
          //console.log(isLogin);
          // console.log("going to signin");
          yield _this3.router.navigate(['/signinPatient'], {
            replaceUrl: true
          });
        } else {
          //console.log(isLogin);
          // Read the doctorId from the route parameters
          //console.log("hello");
          const params = yield _this3.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)()).toPromise();
          //console.log(params);
          const id = params?.['id']; // Access the correct property name
          if (id !== undefined) {
            _this3.doctorId = id;
            _this3.doctor = yield _this3.services.getDoctor(_this3.doctorId).toPromise();
            _this3.patientId = localStorage.getItem('userId');
            _this3.patient = yield _this3.services.getPatient().toPromise();
            console.log(_this3.patient);
            _this3.loading = false;
            // setTimeout(async () => {
            //   try {
            //     // Fetch the doctor details using the service
            //     // Reset loading when the data is fetched successfully
            //     this.loading = false;
            //     // You can perform other operations with this.doctor if needed
            //   } catch (error) {
            //     console.error('Error fetching doctor details:', error);
            //     // Handle the error if needed
            //     this.loading = false; // Ensure loading is reset in case of an error
            //   }
            // }, 2000);
          } else {
            console.error("Error: 'id' parameter is undefined.");
          }
          _this3.initDate();
          _this3.getNoOfDays();
          _this3.calculateSlot();
        }
      } catch (error) {
        console.error("error", error);
      }
    })();
  }
  static #_ = this.ɵfac = function BookAppointmentComponent_Factory(t) {
    return new (t || BookAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BookAppointmentComponent,
    selectors: [["app-book-appointment"]],
    decls: 2,
    vars: 2,
    consts: [["class", "bg-custom-gradient mt-14 py-8", 4, "ngIf"], ["class", "bg-custom-gradient mt-14 p-8 ", 4, "ngIf"], [1, "bg-custom-gradient", "mt-14", "py-8"], [1, "mx-auto", "bg-white/40", "rounded-lg", "sm:pt-8", "sm:pb-8", "sm:px-6", "lg:max-w-7xl", "lg:px-8"], [1, "lg:grid", "lg:grid-rows-1", "lg:grid-cols-9", "lg:gap-x-8", "lg:gap-y-10", "xl:gap-x-16"], [1, "lg:row-end-1", "lg:col-span-3"], [1, "aspect-w-1", "aspect-h-1", "rounded-lg", "bg-gray-100", "shadow-lg", "shadow-gray-600", "overflow-hidden"], ["alt", "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.", 1, "object-center", "object-cover", 3, "src"], [1, "w-full", "mx-auto", "lg:mt-0", "sm:mt-16", "lg:row-end-2", "lg:col-span-3"], [1, "flex", "flex-col-reverse"], [1, "mt-4"], [1, "text-2xl", "font-extrabold", "tracking-tight", "text-gray-900", "sm:text-3xl"], [1, "sr-only"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "text-yellow-400", "h-5", "w-5", "flex-shrink-0"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "text-gray-300", "h-5", "w-5", "flex-shrink-0"], [1, "text-gray-500", "mt-6"], [1, "flex", "mt-4"], [1, "relative", "text-base", "font-medium", "text-gray-900"], [1, "prose", "prose-base", "text-gray-500", "ml-2"], [1, "flex"], [1, "sm:mt-16", "lg:max-w-none", "lg:mt-0", "lg:row-end-2", "lg:row-span-2", "lg:col-span-6"], [1, "relative", "z-10", "mb-10", "overflow-hidden", "rounded-xl", "text-center", "shadow-lg", "shadow-gray-600"], [1, "bg-blue-700/70", "w-full", "h-full", "py-32"], [1, "mt-2", "px-8", "text-3xl", "font-bold", "text-white", "md:text-5xl"], [1, "mt-6", "text-lg", "text-white"], ["src", "https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "alt", "", 1, "absolute", "top-0", "left-0", "-z-20", "h-full", "w-full", "object-cover"], [1, "grid", "px-6", "pb-20"], [1, ""], [1, "mt-4", "mb-4", "font-serif", "text-xl", "font-bold", "text-blue-900"], [1, "relative"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "h-5", "w-5", "text-gray-500"], ["fill-rule", "evenodd", "d", "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", "clip-rule", "evenodd"], ["type", "hidden", "name", "date", "x-ref", "date"], ["type", "text", "readonly", "", "placeholder", "Select date", 1, "datepicker-input", "block", "w-56", "rounded-lg", "border", "border-blue-300", "bg-blue-50", "p-2.5", "pl-10", "text-blue-800", "outline-none", "ring-opacity-30", "placeholder:text-blue-800", "focus:ring", "focus:ring-blue-300", "sm:text-sm", 3, "min", "max", "ngModel", "ngModelChange", "click", "keydown.escape"], [1, "bg-white", "mt-12", "rounded-lg", "shadow", "p-4", "absolute", "top-0", "left-0", 2, "width", "17rem", 3, "hidden", "keydown.away"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold", "text-gray-800"], [1, "ml-1", "text-lg", "text-gray-600", "font-normal"], ["type", "button", 1, "transition", "ease-in-out", "duration-100", "inline-flex", "cursor-pointer", "hover:bg-gray-200", "p-1", "rounded-full", 3, "ngClass", "disabled", "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-gray-500", "inline-flex"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "flex", "flex-wrap", "mb-3", "-mx-1"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "-mx-1"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "", 4, "ngIf"], [1, "mt-8", "w-48", "rounded-full", "border-8", "border-blue-500", "bg-blue-600", "px-10", "py-2", "text-lg", "font-bold", "text-white", "transition", "hover:translate-y-1", 3, "disabled", "ngStyle", "click"], [1, "px-1", 2, "width", "14.26%"], [1, "text-gray-800", "font-medium", "text-center", "text-xs"], [1, "text-center", "border-none", "p-1", "border-transparent", "text-sm", 2, "width", "14.28%"], [1, "px-1", "mb-1", 2, "width", "14.28%"], [1, "cursor-pointer", "text-center", "text-sm", "rounded-full", "leading-loose", "transition", "ease-in-out", "duration-100", 3, "ngClass", "click"], [1, "mt-8", "font-serif", "text-xl", "font-bold", "text-blue-900"], ["class", "mt-8 font-serif text-xl font-bold text-red-900", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-4", "gap-2", "lg:max-w-xl"], [1, "mt-8", "font-serif", "text-xl", "font-bold", "text-red-900"], ["class", "rounded-lg w-full  px-4 py-2 font-medium  active:scale-95", 3, "ngClass", "click", 4, "ngIf"], ["class", "rounded-lg w-full bg-gray-400 px-4 py-2 cursor-not-allowed font-medium text-black active:scale-95", "disabled", "", 4, "ngIf"], ["class", "rounded-lg w-full bg-red-200 px-4 py-2 cursor-not-allowed font-medium text-red-700 active:scale-95", "disabled", "", 4, "ngIf"], [1, "rounded-lg", "w-full", "px-4", "py-2", "font-medium", "active:scale-95", 3, "ngClass", "click"], ["disabled", "", 1, "rounded-lg", "w-full", "bg-gray-400", "px-4", "py-2", "cursor-not-allowed", "font-medium", "text-black", "active:scale-95"], ["disabled", "", 1, "rounded-lg", "w-full", "bg-red-200", "px-4", "py-2", "cursor-not-allowed", "font-medium", "text-red-700", "active:scale-95"], [1, "bg-custom-gradient", "mt-14", "p-8"], [1, "aspect-w-1", "aspect-h-1", "rounded-lg", "overflow-hidden"], ["count", "1", "appearance", "circle", 1, "", 3, "theme"], [1, "grid", "pr-4", "pb-20"], [1, "mt-6"], [1, "relative", "mt-7"], ["count", "1", "appearance", "circle", 1, "mt-20", 3, "theme"]],
    template: function BookAppointmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BookAppointmentComponent_div_0_Template, 99, 34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookAppointmentComponent_div_1_Template, 40, 41, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__.NgxSkeletonLoaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLWFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9ob21lLXBhdGllbnQvYm9vay1hcHBvaW50bWVudC9ib29rLWFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 7166:
/*!****************************************************************************************************************!*\
  !*** ./src/app/Patient/home-patient/book-appointment/payment-status-dialog/payment-status-dialog.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentStatusDialogComponent: () => (/* binding */ PaymentStatusDialogComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_Patient_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Patient/services.service */ 1313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function PaymentStatusDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Verifying payment...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PaymentStatusDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.verificationMessage);
  }
}
function PaymentStatusDialogComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.verificationMessage);
  }
}
class PaymentStatusDialogComponent {
  constructor(data, services, dialogRef) {
    this.data = data;
    this.services = services;
    this.dialogRef = dialogRef;
    this.verificationDone = false;
    this.verificationResult = false;
    this.verificationMessage = '';
  }
  ngOnInit() {
    this.verifyPayment();
  }
  verifyPayment() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Simulate payment verification process with a delay (replace with actual verification logic)
      // console.log('data');
      // console.log(this.data);
      const paymentVerificationResponse = yield _this.services.verifyPayment(_this.data).toPromise();
      // Example: Replace with your actual payment verification logic
      const paymentVerificationResult = paymentVerificationResponse.signatureIsValid; // Assuming data.success indicates payment verification result
      // Update verification status and message
      _this.verificationDone = true;
      _this.verificationResult = paymentVerificationResult;
      _this.verificationMessage = paymentVerificationResult ? 'Payment verified successfully' : 'Payment verification failed';
      // If payment is not verified, display appropriate message and handle refund logic
      if (!paymentVerificationResult) {
        // Example: Implement refund logic here
        _this.verificationMessage += '. Refund will be initiated.';
      }
      _this.closeDialogAfterDelay(_this.verificationResult);
    })();
  }
  closeDialogAfterDelay(success) {
    setTimeout(() => {
      // Close the dialog and pass success/failure status
      this.dialogRef.close(success);
    }, 5000);
  }
  static #_ = this.ɵfac = function PaymentStatusDialogComponent_Factory(t) {
    return new (t || PaymentStatusDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Patient_services_service__WEBPACK_IMPORTED_MODULE_1__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PaymentStatusDialogComponent,
    selectors: [["app-payment-status-dialog"]],
    decls: 5,
    vars: 3,
    consts: [[1, "overlay"], [1, "flex", "flex-col", "bg-white", "h-80", "w-1/2", "rounded-xl", "items-center", "justify-center", "relative"], ["class", "flex items-center justify-center flex-col mb-4", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "flex-col", "mb-4"], ["src", "assets/Loader.gif", "alt", "Error Icon", 1, "h-56", "w-auto", "text-red-500"], [1, "text-lg"], ["src", "assets/verification_success.gif", "alt", "Error Icon", 1, "h-56", "w-auto", "text-red-500"], ["src", "assets/verification_failure.gif", "alt", "Error Icon", 1, "h-56", "w-auto", "text-red-500"]],
    template: function PaymentStatusDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PaymentStatusDialogComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PaymentStatusDialogComponent_div_3_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PaymentStatusDialogComponent_div_4_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verificationDone == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verificationDone && ctx.verificationResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verificationDone && !ctx.verificationResult);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); \n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999; \n\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtc3RhdHVzLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUF1QjtBQUN2QjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsNkJBQTZCO0lBQ25FLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSwwQ0FBMEM7QUFDN0QiLCJmaWxlIjoicGF5bWVudC1zdGF0dXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIG92ZXJsYXkgKi9cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGp1c3Qgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OyAvKiBFbnN1cmUgaXQgYXBwZWFycyBhYm92ZSBvdGhlciBjb250ZW50ICovXHJcbn1cclxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9ob21lLXBhdGllbnQvYm9vay1hcHBvaW50bWVudC9wYXltZW50LXN0YXR1cy1kaWFsb2cvcGF5bWVudC1zdGF0dXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0MsRUFBRSw2QkFBNkI7SUFDbkUsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFFLDBDQUEwQztBQUM3RDs7QUFFQSxnOEJBQWc4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlcyBmb3Igb3ZlcmxheSAqL1xyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkanVzdCBvcGFjaXR5IGFzIG5lZWRlZCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk7IC8qIEVuc3VyZSBpdCBhcHBlYXJzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cclxufVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3438:
/*!***************************************************************************!*\
  !*** ./src/app/Patient/home-patient/doctor-card/doctor-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorCardComponent: () => (/* binding */ DoctorCardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services.service */ 1313);





const _c0 = function (a1) {
  return ["/bookappointment", a1];
};
class DoctorCardComponent {
  constructor(route, services) {
    this.route = route;
    this.services = services;
    this.ratings = [2.4, 3.1, 5, 4.8, 1.2];
    this.starsArray = Array.from({
      length: 5
    }, (_, index) => index + 1);
    this.rating = 4.2;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Read the doctorId from the route parameters
        // console.log("hello");
        const params = yield _this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.first)()).toPromise();
        // console.log(params);
        const id = params?.['id']; // Access the correct property name
        if (id !== undefined) {
          _this.doctorId = id;
          // console.log(this.doctorId);
          // Use the doctorId to fetch the corresponding doctor details
          // Fetch the data or use a service to get the details based on the id
          _this.doctor = yield _this.services.getDoctor(_this.doctorId).toPromise();
          // console.log("Home Page");
          // console.log(this.doctor);
        } else {
          console.error("Error: 'id' parameter is undefined.");
        }
      } catch (error) {
        console.error("error", error);
      }
    })();
  }
  static #_ = this.ɵfac = function DoctorCardComponent_Factory(t) {
    return new (t || DoctorCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__.ServicesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DoctorCardComponent,
    selectors: [["app-doctor-card"]],
    decls: 159,
    vars: 13,
    consts: [[1, "bg-custom-gradient", "mt-14", "py-8"], [1, "mx-auto", "bg-white/40", "rounded-lg", "sm:pt-8", "sm:pb-32", "sm:px-6", "lg:max-w-7xl", "lg:px-8"], [1, "lg:grid", "lg:grid-rows-1", "lg:grid-cols-12", "lg:gap-x-8", "lg:gap-y-10", "xl:gap-x-16"], [1, "lg:row-end-1", "lg:col-span-5"], [1, "aspect-w-1", "aspect-h-1", "rounded-lg", "bg-gray-100", "overflow-hidden"], ["alt", "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.", 1, "object-center", "object-cover", 3, "src"], [1, "max-w-2xl", "mx-auto", "mt-14", "sm:mt-16", "lg:max-w-none", "lg:mt-0", "lg:row-end-2", "lg:row-span-2", "lg:col-span-7"], [1, "flex", "flex-col-reverse"], [1, "mt-4"], [1, "text-2xl", "font-extrabold", "tracking-tight", "text-gray-900", "sm:text-3xl"], [1, "sr-only"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "text-yellow-400", "h-5", "w-5", "flex-shrink-0"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "text-gray-300", "h-5", "w-5", "flex-shrink-0"], [1, "text-gray-600", "mt-6"], [1, "flex", "mt-4"], [1, "relative", "text-base", "font-medium", "text-gray-900"], [1, "prose", "prose-base", "text-gray-600", "ml-2"], [1, "flex"], [1, "mt-10", "grid", "grid-cols-1", "gap-x-6", "gap-y-4", "sm:grid-cols-2"], ["type", "button", 1, "w-full", "text-primary-700", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "border", "border-transparent", "rounded-md", "py-3", "px-8", "flex", "items-center", "justify-center", "text-base", "font-medium", "focus:ring-offset-2", "focus:ring-offset-gray-50", 3, "routerLink"], [1, "border-t", "border-primary-800", "mt-10", "pt-10"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "mt-4", "text-sm", "text-gray-600"], [1, "mt-4", "prose", "prose-sm", "text-gray-600"], ["role", "list"], ["role", "list", 1, "flex", "items-center", "space-x-6", "mt-4"], ["href", "#", 1, "flex", "items-center", "justify-center", "w-6", "h-6", "text-gray-400", "hover:text-gray-500"], ["fill", "currentColor", "viewBox", "0 0 20 20", "aria-hidden", "true", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z", "clip-rule", "evenodd"], ["fill", "currentColor", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "w-6", "h-6"], ["fill-rule", "evenodd", "d", "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", "clip-rule", "evenodd"], ["d", "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"], [1, "w-full", "max-w-2xl", "mx-auto", "mt-16", "lg:max-w-none", "lg:mt-0", "lg:col-span-5"], [1, "border-b", "border-primary-800"], ["aria-orientation", "horizontal", "role", "tablist", 1, "-mb-px", "flex", "space-x-8"], ["id", "tab-reviews", "aria-controls", "tab-panel-reviews", "role", "tab", "type", "button", 1, "border-transparent", "text-gray-600", "hover:text-gray-800", "hover:border-gray-300", "whitespace-nowrap", "py-6", "border-b-2", "font-medium", "text-sm"], ["id", "tab-panel-reviews", "aria-labelledby", "tab-reviews", "role", "tabpanel", "tabindex", "0", 1, "-mb-10"], [1, "flex", "text-sm", "text-gray-500", "space-x-4"], [1, "flex-none", "py-10"], ["src", "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80", "alt", "", 1, "w-10", "h-10", "bg-gray-100", "rounded-full"], [1, "flex-1", "py-10"], [1, "font-medium", "text-gray-900"], ["datetime", "2021-07-16"], [1, "flex", "items-center", "mt-4"], [1, "mt-4", "prose", "prose-sm", "max-w-none", "text-gray-600"], [1, "flex", "text-sm", "text-gray-600", "space-x-4"], ["src", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80", "alt", "", 1, "w-10", "h-10", "bg-gray-100", "rounded-full"], [1, "flex-1", "py-10", "border-t", "border-primary-800"], ["datetime", "2021-07-12"]],
    template: function DoctorCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "4 out of 5 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 16)(30, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Age : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19)(35, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Experiance : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 19)(40, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Category : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 19)(45, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Specialist : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 19)(50, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Counselling Duration : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 19)(55, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Counselling Fees : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 20)(60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Book Appoinment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22)(63, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "About Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 22)(68, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Highlights");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 25)(71, "ul", 26)(72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "200+ SVG icons in 3 unique styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Compatible with Figma, Sketch, and Adobe XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Drawn on 24 x 24 pixel grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 22)(79, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "ul", 27)(82, "li")(83, "a", 28)(84, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Share on Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "li")(89, "a", 28)(90, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Share on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "li")(95, "a", 28)(96, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Share on Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 34)(101, "div")(102, "div", 35)(103, "div", 36)(104, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Patient Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 38)(107, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 39)(110, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 42)(113, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Emily Selman");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "p")(116, "time", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "July 16, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "5 out of 5 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 46)(132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 47)(135, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 49)(138, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Hector Gibbons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "p")(141, "time", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "July 12, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "5 out of 5 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 46)(157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.doctor.Profile_photo ? ctx.doctor.Profile_photo : "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Dr. ", ctx.doctor.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.doctor.Bio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.Age, " Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.Experiance, " Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.Category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.Specialist, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.Slot_length, " Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.doctor.Counselling_fee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx.doctor._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.doctor.About, " ");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItY2FyZC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9ob21lLXBhdGllbnQvZG9jdG9yLWNhcmQvZG9jdG9yLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9077:
/*!****************************************************************!*\
  !*** ./src/app/Patient/home-patient/home-patient.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePatientComponent: () => (/* binding */ HomePatientComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ 1313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/animation.component */ 7133);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ 6515);








const _c0 = function (a1) {
  return ["/doctor-details", a1];
};
function HomePatientComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13)(11, "div", 14)(12, "div", 15)(13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "View Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const doctor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", doctor_r1.Profile_photo ? doctor_r1.Profile_photo : "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", doctor_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", doctor_r1.Category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Specialist: ", doctor_r1.Specialist, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, doctor_r1._id));
  }
}
class HomePatientComponent {
  constructor(navbarService, services) {
    this.navbarService = navbarService;
    this.services = services;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.navbarService.showNavbar();
      yield _this.loadDoctorData();
      // console.log(this.doctors)
    })();
  }

  loadDoctorData() {
    return new Promise((resolve, reject) => {
      this.services.getDoctors().subscribe(data => {
        this.doctors = data;
        //console.log("Home Page");
        //console.log(this.doctors);
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  static #_ = this.ɵfac = function HomePatientComponent_Factory(t) {
    return new (t || HomePatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HomePatientComponent,
    selectors: [["app-home-patient"]],
    decls: 12,
    vars: 1,
    consts: [[1, "bg-custom-gradient", "py-6", "sm:py-8", "lg:py-12"], [1, "mx-auto", "max-w-screen-xl", "px-4", "md:px-8"], [1, "mb-10", "md:mb-16"], [1, "mb-4", "text-center", "text-2xl", "font-bold", "text-gray-800", "md:mb-6", "lg:text-3xl"], [1, "mx-auto", "max-w-screen-md", "text-center", "text", "md:text-lg"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-3", "lg:grid-cols-4", "lg:gap-8"], ["class", "flex flex-col items-center rounded-lg bg-white/40 p-4 lg:p-8 hover:shadow-xl shadow-black duration-300 transform transition-transform hover:scale-105", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "rounded-lg", "bg-white/40", "p-4", "lg:p-8", "hover:shadow-xl", "shadow-black", "duration-300", "transform", "transition-transform", "hover:scale-105"], [1, "mb-2", "h-24", "w-24", "overflow-hidden", "rounded-full", "bg-gray-200", "shadow-lg", "md:mb-4", "md:h-32", "md:w-32"], ["loading", "lazy", "alt", "Photo by Radu Florin", 1, "h-full", "w-full", "object-cover", "object-center", 3, "src"], [1, "text-center", "font-bold", "text-primary-700", "md:text-lg"], [1, "mb-1", "text-center", "text-sm", "text-gray-700", "md:mb-1", "md:text-base"], [1, "mb-3", "text-center", "text-sm", "text-gray-700", "md:mb-4", "md:text-base"], [1, "flex", "justify-center"], [1, "flex", "gap-4"], [1, "flex", "gap-2.5"], [1, "inline-block", "flex-1", "rounded-lg", "text-primary-700", "font-semibold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "px-8", "py-3", "text-center", "text-sm", "outline-none", "ring-indigo-300", "transition", "duration-100", "focus-visible:ring", "active:bg-indigo-700", "sm:flex-none", "md:text-base", 3, "routerLink"]],
    template: function HomePatientComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Doctor's Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HomePatientComponent_div_10_Template, 15, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.doctors);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _animation_animation_component__WEBPACK_IMPORTED_MODULE_3__.AnimationComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9ob21lLXBhdGllbnQvaG9tZS1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3103:
/*!****************************************************!*\
  !*** ./src/app/Patient/navbar/navbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponentPatient: () => (/* binding */ NavbarComponentPatient)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/navbar.service */ 3514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function NavbarComponentPatient_nav_0_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavbarComponentPatient_nav_0_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavbarComponentPatient_nav_0_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavbarComponentPatient_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5)(5, "ul", 6)(6, "li", 7)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 7)(18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavbarComponentPatient_nav_0_li_20_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponentPatient_nav_0_li_21_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NavbarComponentPatient_nav_0_li_22_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
class NavbarComponentPatient {
  signInDoctor() {
    // Any logic specific to signing in as a doctor
    // console.log("clicked");
    this.onSignInDoctorClicked.emit();
  }
  constructor(router, navbarService) {
    this.router = router;
    this.navbarService = navbarService;
    this.onSignInDoctorClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLogin = false;
    this.hideNavbar = false;
  }
  ngOnInit() {
    // this.isLogin= false;
    this.navbarService.hideNavbar$.subscribe(hide => {
      this.hideNavbar = hide;
    });
    this.navbarService.isLogin$.subscribe(value => {
      // console.log(value);
      this.isLogin = value;
    });
  }
  static #_ = this.ɵfac = function NavbarComponentPatient_Factory(t) {
    return new (t || NavbarComponentPatient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponentPatient,
    selectors: [["app-navbar-patient"]],
    outputs: {
      onSignInDoctorClicked: "onSignInDoctorClicked"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "fixed flex top-0 left-0 z-20 w-full align-center items-center bg-custom-gradient", 4, "ngIf"], [1, "fixed", "flex", "top-0", "left-0", "z-20", "w-full", "align-center", "items-center", "bg-custom-gradient"], [1, "mx-6", "my-2"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "cursor-pointer"], ["src", "https://res.cloudinary.com/dcz8mfqmp/image/upload/v1711973652/b5zgndle9sd6febq8rrc.png", "alt", "image", 1, "flex", "float-left", "w-64", "mix-blend-color-burn"], [1, "ml-auto"], [1, "flex", "float-right", "items-center"], [1, "my-3", "mx-5"], ["type", "text", "name", "search1", "id", "search1", "placeholder", " Search here", 1, "font-semibold", "text-lg", "border-2", "border-black", "border-opacity-25", "rounded-l-xl", "placeholder:text-white", "placeholder:font-semibold", "placeholder:tracking-wide", "selection:text-white", "selection:font-semibold", "selection:tracking-wide", "focus:border-blue-50", "px-1", "py-1", "w-56", "h-9", "bg-black", "bg-opacity-10"], [1, "flex", "float-right", "items-center", "font-semibold", "text-lg", "w-9", "h-9", "px-2", "py-2", "bg-black", "bg-opacity-10", "border-2", "border-black", "border-opacity-25", "rounded-r-xl"], [1, "fa-solid", "fa-magnifying-glass", 2, "color", "#ffffff"], ["routerLink", "/homepatient", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white"], ["routerLink", "/aboutPage", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["routerLink", "/dashboardPatient", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["class", "my-3 mx-5", 4, "ngIf"], ["routerLink", "/signinPatient", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["routerLink", "/registerPatient", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"], ["id", "logout", "routerLink", "/logout", "routerLinkActive", "active", 1, "font-semibold", "text-lg", "text-white", "px-1", "py-1"]],
    template: function NavbarComponentPatient_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavbarComponentPatient_nav_0_Template, 23, 3, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideNavbar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6570:
/*!**********************************************************************************!*\
  !*** ./src/app/Patient/patient-dashboard/edit-patient/edit-patient.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPatientComponent: () => (/* binding */ EditPatientComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);





function EditPatientComponent_form_3_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", gender_r2.label, " ");
  }
}
function EditPatientComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditPatientComponent_form_3_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div")(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Edit Your Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPatientComponent_form_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.closeModal.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.patient.Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.patient.Password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "div", 17)(21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.patient.DoB = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.patient.Age = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17)(29, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.patient.Gender = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EditPatientComponent_form_3_option_32_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11)(34, "div", 12)(35, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Profile Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26)(38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 29)(41, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose profile photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditPatientComponent_form_3_Template_input_change_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.loadFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12)(45, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPatientComponent_form_3_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.patient.Phone_no = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div")(49, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.Password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.DoB)("value", ctx_r0.patient.DoB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.Age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.patient.Profile_picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.patient.Phone_no);
  }
}
class EditPatientComponent {
  constructor() {
    this.saveChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.genders = [{
      label: 'Select Your Gender',
      value: '0'
    }, {
      label: 'Male',
      value: 'Male'
    }, {
      label: 'Female',
      value: 'Female'
    }];
  }
  submitForm() {
    this.patient.Profile_picture = this.pic;
    // Emit the updated doctor object to save changes
    this.saveChanges.emit(this.patient);
    this.closeModal.emit();
  }
  loadFile(event) {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          _this.pic = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    })();
  }
  ngOnInit() {
    var _this2 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this2.patient);
    })();
  }
  static #_ = this.ɵfac = function EditPatientComponent_Factory(t) {
    return new (t || EditPatientComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditPatientComponent,
    selectors: [["app-edit-patient"]],
    inputs: {
      patient: "patient"
    },
    outputs: {
      saveChanges: "saveChanges",
      closeModal: "closeModal"
    },
    decls: 4,
    vars: 1,
    consts: [[1, "fixed", "inset-0", "z-50", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center"], [1, "mt-4", 2, "margin-top", "1rem", "margin-bottom", "1.5rem"], [1, "bg-blue-300", "p-4", "rounded-lg", "my-6", "max-h-screen", "overflow-auto", "scrollbar-thin", "scrollbar-thumb-gray-500", "scrollbar-track-gray-200"], [3, "submit", 4, "ngIf"], [3, "submit"], [1, "w-full", "backdrop-blur-lg", "bg-white/50", "md:mt-0", "sm:max-w-4xl", "xl:p-0", "rounded-lg", "shadow"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-none", "tracking-normal", "text-gray-950", "md:text-2xl"], [1, "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "float-right", "px-2", "pb-1", 3, "click"], [1, "text-3xl"], ["action", "#", 1, "mt-4", "space-y-4", "md:space-y-6"], [1, "flex", "flex-wrap", "-mx-3", "mb-6"], [1, "w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"], ["for", "fullname", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "fullname", "id", "fullname", "placeholder", "John Cena", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "password", "name", "password", "id", "password", "disabled", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "border", "bg-gray-200", "text-gray-500", "cursor-not-allowed", "border-gray-400", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "w-full", "md:w-1/3", "px-3", "mb-6", "md:mb-0"], ["for", "dob", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "date", "name", "dob", "id", "dob", "required", "", "placeholder", "patient.DoB", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "value", "ngModelChange"], ["for", "age", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "text", "name", "age", "id", "age", "placeholder", "49", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["for", "selectedGender", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["id", "selectedGender", "name", "selectedGender", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "profile_picture", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "pl-3", "space-x-6"], [1, "shrink-0"], ["id", "preview_img", "alt", "Current profile photo", 1, "h-16", "w-16", "object-cover", "rounded-full", 3, "src"], [1, "block"], [1, "sr-only"], ["type", "file", "accept", "image/*", 1, "block", "w-full", "text-sm", "text-slate-500", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-full", "file:border-0", "file:text-sm", "file:font-semibold", "file:bg-violet-50", "file:text-violet-700", "hover:file:bg-violet-100", 3, "change"], ["for", "phone_no", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], ["type", "tel", "name", "phone_no", "id", "phone_no", "pattern", "[0-9]{5}-[0-9]{5}", "placeholder", "84123-49856", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "w-full", "mt-3", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5"], [3, "value"]],
    template: function EditPatientComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditPatientComponent_form_3_Template, 51, 9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.patient);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9lZGl0LXBhdGllbnQvZWRpdC1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4889:
/*!**********************************************************************************************!*\
  !*** ./src/app/Patient/patient-dashboard/patient-consulting/patient-consulting.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientConsultingComponent: () => (/* binding */ PatientConsultingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services.service */ 1313);
/* harmony import */ var src_app_Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service */ 9562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








const _c0 = ["webcamVideo"];
const _c1 = ["remoteVideo"];
function PatientConsultingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Please Start Your WebCam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PatientConsultingComponent_video_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "video", 26, 21);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcObject", ctx_r2.localStream);
  }
}
const _c2 = function (a0, a1) {
  return {
    "bg-green-500": a0,
    "bg-gray-500": a1
  };
};
const _c3 = function (a0, a1) {
  return {
    "bg-gray-300": a0,
    "bg-gray-400": a1
  };
};
class PatientConsultingComponent {
  constructor(route, ngZone, services, firebaseService, datePipe, firestore, router) {
    this.route = route;
    this.ngZone = ngZone;
    this.services = services;
    this.firebaseService = firebaseService;
    this.datePipe = datePipe;
    this.firestore = firestore;
    this.router = router;
    this.isPatient = false;
    this.isLocal = false;
    this.isRemote = false;
    this.isCalling = false; // Flag to indicate call state
    this.isAudioMuted = true;
    this.isVideoStopped = false;
    this.micButton = "Unmute";
    this.videoButton = "Stop Video";
    this.remoteStream = new MediaStream();
    this.configuration = {
      iceServers: [{
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302' // Optional additional STUN server
        ]
      }, {
        urls: ['turn:numb.viagenie.ca'],
        credential: 'muazkh',
        username: 'webrtc@live.com'
      }],
      iceCandidatePoolSize: 5
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.params.subscribe(params => {
        _this.callId = params['callId'];
        // Now you can use the callId in your component
      });

      yield _this.loadPatinetData();
      console.log(_this.patientId);
      // Initialize peer connection configuration (refer to WebRTC documentation)
      _this.peerConnection = new RTCPeerConnection(_this.configuration);
      // Attach remote stream to video element
      _this.remoteVideo.nativeElement.srcObject = _this.remoteStream;
    })();
  }
  handleRemoteStream(event) {
    event.streams[0].getTracks().forEach(track => {
      this.remoteStream.addTrack(track);
    });
  }
  EndCall() {
    if (this.callEndSubscription) {
      console.log("listenForCallEnd destroyed");
      this.callEndSubscription.unsubscribe();
    }
    // Clean up resources when the component is destroyed
    if (this.callId) {
      const callDocRef = this.firebaseService.getCallDocument(this.callId);
      // const subscription = callDocRef.valueChanges().subscribe((callData: any) => {
      //   if (callData.ended) {
      //     // Call has ended, perform necessary tasks here
      //     console.log('Call ended by doctor');
      //     // Redirect or perform other actions as needed
      //     subscription.unsubscribe(); // Unsubscribe from the snapshot listener
      //   }
      // });
    }

    this.firebaseService.getCallDocument(this.callId).update({
      ended: true
    }).then(() => {
      console.log('Call ended successfully');
      // console.log("befor navigation");
      // this.router.navigate(['/dashboardPatient'], { replaceUrl: true });
      // // this.ngOnDestroy()
      // console.log("after navigation")
    }).catch(error => {
      console.error('Error updating call document:', error);
    });
    this.callEndedByDoctor();
    //this.router.navigate(['/dashboardPatient']);
    // this.router.navigate(['/homePatient']);
  }

  ngOnDestroy() {
    console.log("ng Destroy");
    // Clean up resources when the component is destroyed
    this.peerConnection.close();
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
    this.router.navigate(['/dashboardPatient']);
    // this.router.navigate(['/dashboardPatient']);
  }

  listenForCallEnd(id) {
    console.log("listenForCallEnd");
    // Call the service method to get the call document
    const callDocRef = this.firebaseService.getCallDocument(id);
    // Subscribe to changes in the call document
    this.callEndSubscription = callDocRef.valueChanges().subscribe(callData => {
      if (callData.ended) {
        // Call has ended, perform necessary tasks here
        console.log('Call ended by doctor');
        this.ngZone.run(() => {
          alert('Call ended by doctor');
        });
        this.callEndedByDoctor();
        // Redirect or perform other actions as needed
      }
    });
  }

  callEndedByDoctor() {
    // Clean up resources when the component is destroyed
    //console.log("callEndedByDoctor");
    this.peerConnection.close();
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
    this.router.navigate(['/dashboardPatient']);
  }
  // Function to mute audio
  toggleAudio() {
    if (this.localStream) {
      const audioTrack = this.localStream.getAudioTracks()[0];
      if (this.micButton === "Mute") this.micButton = "Unmute";else this.micButton = "Mute";
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        this.isAudioMuted = audioTrack.enabled; // Update isAudioMuted status
      }
    }
  }
  // Function to toggle video stop
  toggleVideo() {
    if (this.localStream) {
      const videoTrack = this.localStream.getVideoTracks()[0];
      if (this.videoButton === "Stop Video") this.videoButton = "Start Video";else this.videoButton = "Stop Video";
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        this.isVideoStopped = !videoTrack.enabled; // Update isVideoStopped status
      }
    }
  }

  loadPatinetData() {
    return new Promise((resolve, reject) => {
      this.patientId = '';
      this.patientId = localStorage.getItem('userId');
      this.services.getPatient().subscribe(data => {
        this.patient = data;
        this.isPatient = true;
        console.log("DashBoard");
        console.log(this.patient);
        //this.calculateTimeSlots();
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  startWebcam() {
    var _this2 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log("in startWebcame");
      _this2.localStream = yield navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          autoGainControl: true,
          noiseSuppression: true,
          echoCancellation: true
        }
      });
      _this2.isLocal = true;
      _this2.localStream.getAudioTracks()[0].enabled = false;
      //console.log("in startWebcame1");
      // Push tracks from local stream to peer connection
      _this2.localStream.getTracks().forEach(track => {
        _this2.peerConnection.addTrack(track, _this2.localStream);
      });
      // Show local stream in the video element
      if (_this2.localStream) {
        _this2.webcamVideo.nativeElement.srcObject = _this2.localStream;
      }
      _this2.peerConnection.ontrack = event => {
        event.streams[0].getTracks().forEach(track => {
          _this2.remoteStream.addTrack(track);
        });
      };
    })();
  }
  initiateCall() {
    var _this3 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Obtain user media permissions using navigator.mediaDevices.getUserMedia()
      // ... (access media devices, create local stream)
      // Create an offer and add the local stream to the peer connection
      try {
        console.log("InitiaeCall called.");
        const callDocRef = yield _this3.firebaseService.createCallDocument();
        console.log("createCallDocument completed.");
        _this3.callId = callDocRef.id;
        const offerCandidates = callDocRef.collection('offerCandidates');
        const answerCandidates = callDocRef.collection('answerCandidates');
        _this3.peerConnection.onicecandidate = event => {
          event.candidate && offerCandidates.add(event.candidate.toJSON());
        };
        console.log("Calling  createOffer.");
        const offerDescription = yield _this3.peerConnection.createOffer();
        console.log("createOffer completed.");
        yield _this3.peerConnection.setLocalDescription(offerDescription);
        console.log("setLocalDescription completed.");
        const offer = {
          sdp: offerDescription.sdp,
          type: offerDescription.type
        };
        yield callDocRef.set({
          offer
        });
        // Listen for remote answer
        const unsubscribe = callDocRef.onSnapshot(snapshot => {
          console.log("listing remote changes");
          const data = snapshot.data();
          if (!_this3.peerConnection.currentRemoteDescription && data?.answer) {
            console.log("listened remote changes");
            const answerDescription = new RTCSessionDescription(data.answer);
            _this3.peerConnection.setRemoteDescription(answerDescription);
            unsubscribe(); // Unsubscribe from further snapshot changes
          }
        });
        // When answered, add candidate to peer connection
        answerCandidates.onSnapshot(snapshot => {
          console.log("adding remote changes");
          snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              console.log("adding candidate.");
              const candidate = new RTCIceCandidate(change.doc.data());
              console.log(candidate);
              _this3.peerConnection.addIceCandidate(candidate);
              console.log(_this3.peerConnection);
            }
          });
        });
        console.log("InitiaeCall completed.");
      } catch (error) {
        console.error('Error creating offer:', error);
      }
    })();
  }
  answerCall() {
    var _this4 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        //console.log("answerCall");
        //console.log('callid',this.callId);
        if (!_this4.callId) {
          console.error("Call ID is empty");
          return;
        }
        const callDocRef = _this4.firebaseService.getCallDocument(_this4.callId);
        // const callDocRef = this.firestore.collection('calls').doc(this.callId);
        const answerCandidates = callDocRef.collection('answerCandidates');
        const offerCandidates = callDocRef.collection('offerCandidates');
        _this4.peerConnection.onicecandidate = event => {
          event.candidate && answerCandidates.add(event.candidate.toJSON());
        };
        //console.log("Retrieving call data");
        let c_id;
        let offer;
        callDocRef.get().subscribe(callSnapshot => {
          if (!callSnapshot.exists) {
            console.error("Call document does not exist");
            return;
          }
          const callData = callSnapshot.data();
          //console.log("callData:");
          //console.log(callData);
          if (!callData || !callData.offer) {
            console.error("Offer description is missing");
            return;
          }
          const offerDescription = callData.offer;
          //console.log("offerDescription:");
          //console.log(offerDescription);
          if (!offerDescription) {
            console.error("Offer description is missing");
            return;
          }
          _this4.peerConnection.setRemoteDescription(new RTCSessionDescription(offerDescription)).then(() => {
            _this4.peerConnection.createAnswer().then(answerDescription => {
              _this4.peerConnection.setLocalDescription(answerDescription).then(() => {
                const answer = {
                  type: answerDescription.type,
                  sdp: answerDescription.sdp
                };
                //console.log("answer:");
                //console.log(answer);
                callDocRef.update({
                  answer
                });
                //console.log("callDocRef:");
                //console.log(callDocRef);
                offerCandidates.snapshotChanges().subscribe(snapshot => {
                  snapshot.forEach(change => {
                    //console.log("offerCandidates change");
                    if (change.type === 'added') {
                      //console.log("offerCandidates added");
                      const data = change.payload.doc.data();
                      //console.log(data);
                      _this4.peerConnection.addIceCandidate(new RTCIceCandidate(data));
                      //console.log(this.peerConnection);
                    }
                  });
                });

                _this4.isRemote = true;
                _this4.listenForCallEnd(_this4.callId);
                console.log("Answering call completed");
              }).catch(error => {
                console.error('Error setting local description:', error);
              });
            }).catch(error => {
              console.error('Error creating answer:', error);
            });
          }).catch(error => {
            console.error('Error setting remote description:', error);
          });
        });
      } catch (error) {
        console.error('Error answering call:', error);
      }
    })();
  }
  static #_ = this.ɵfac = function PatientConsultingComponent_Factory(t) {
    return new (t || PatientConsultingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PatientConsultingComponent,
    selectors: [["app-patient-consulting"]],
    viewQuery: function PatientConsultingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.webcamVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
      }
    },
    decls: 34,
    vars: 16,
    consts: [[1, "flex", "flex-wrap", "mt-14", "bg-custom-gradient"], ["id", "maindiv", 1, "p-6"], [1, "h-5/6", "flex", "flex-row", "w-full"], [1, "w-2/3", "bg-white/30", "rounded-2xl", "m-1"], ["autoplay", "", "muted", "", "playsinline", "", 1, "w-full", "z-20", "object-cover", "h-full", "rounded-xl", 3, "srcObject"], ["remoteVideo", ""], [1, "w-1/3", "bg-white/30", "rounded-2xl", "my-1", "ml-1"], [1, "m-2", "bg-white/55", "h-1/2", "rounded-xl"], ["class", "flex flex-col items-center justify-center h-full border-2 rounded-xl border-black ", 4, "ngIf"], ["autoplay", "", "muted", "", "playsinline", "", "class", "w-full h-full object-cover rounded-xl", 3, "srcObject", 4, "ngIf"], [1, "m-2", "rounded-xl"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "disabled", "click"], ["action", "#", 1, "m-2", "space-y-4", "md:space-y-4"], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], ["id", "buttons", 1, "h-1/6", "flex", "flex-row", "justify-center", "items-center", "bg-blue-800", "w-full", "m-1", "rounded-2xl"], [1, "w-1/3", "hover:bg-green-600", "text-white", "font-bold", "py-2", "px-4", "rounded-xl", "m-2", "focus:outline-none", "focus:ring-4", "focus:ring-green-300", 3, "ngClass", "click"], [1, "w-1/3", "hover:bg-gray-400", "text-black", "font-bold", "py-2", "px-4", "rounded-xl", "m-2", "focus:outline-none", "focus:ring-4", "focus:ring-gray-200", 3, "ngClass", "click"], ["hidden", "", 1, "mt-4"], [1, "videos", "mt-8"], [1, "bg-blue-400"], ["autoplay", "", "muted", "", "playsinline", "", 1, "bg-bl", 3, "srcObject"], ["webcamVideo", ""], [1, "bg-blue-800"], ["autoplay", "", "muted", "", "playsinline", "", 3, "srcObject"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "border-2", "rounded-xl", "border-black"], [1, "text-center"], ["autoplay", "", "muted", "", "playsinline", "", 1, "w-full", "h-full", "object-cover", "rounded-xl", 3, "srcObject"]],
    template: function PatientConsultingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "video", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PatientConsultingComponent_div_8_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PatientConsultingComponent_video_9_Template, 2, 1, "video", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PatientConsultingComponent_Template_button_click_11_listener() {
          return ctx.startWebcam();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Start Webcam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PatientConsultingComponent_Template_button_click_14_listener() {
          return ctx.answerCall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Answer Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PatientConsultingComponent_Template_button_click_17_listener() {
          return ctx.toggleAudio();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PatientConsultingComponent_Template_button_click_19_listener() {
          return ctx.toggleVideo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17)(22, "div")(23, "div", 18)(24, "span", 19)(25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Local Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "video", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 22)(30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Remote Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "video", 23, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcObject", ctx.remoteStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.localStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c2, !ctx.isAudioMuted, ctx.isAudioMuted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.micButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c3, !ctx.isVideoStopped, ctx.isVideoStopped));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.videoButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcObject", ctx.localStream);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcObject", ctx.remoteStream);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm],
    styles: ["#maindiv[_ngcontent-%COMP%] {\n    height: calc(100vh - 3.5rem); \n\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtY29uc3VsdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCLEVBQUUsMkJBQTJCO0lBQ3pELFdBQVc7QUFDZiIsImZpbGUiOiJwYXRpZW50LWNvbnN1bHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluZGl2IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMuNXJlbSk7IC8qIFN1YnRyYWN0IG5hdmJhciBoZWlnaHQgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWNvbnN1bHRpbmcvcGF0aWVudC1jb25zdWx0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEIsRUFBRSwyQkFBMkI7SUFDekQsV0FBVztBQUNmO0FBQ0EsNGJBQTRiIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5kaXYge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTsgLyogU3VidHJhY3QgbmF2YmFyIGhlaWdodCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6126:
/*!**************************************************************************!*\
  !*** ./src/app/Patient/patient-dashboard/patient-dashboard.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientDashboardComponent: () => (/* binding */ PatientDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service */ 9562);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ 1313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ 6570);









function PatientDashboardComponent_main_16_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "li", 38)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Full name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 38)(7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Birthday:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 38)(13, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 38)(18, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 40)(21, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li", 38)(24, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.patient.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, ctx_r4.patient == null ? null : ctx_r4.patient.DoB, "d MMM, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.patient.Phone_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.patient.Email);
  }
}
function PatientDashboardComponent_main_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 12)(1, "div", 13)(2, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 16)(5, "div", 17)(6, "div", 18)(7, "div", 19)(8, "div", 20)(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 23)(12, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Solution Manager - Creative Tim Officer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "University of Computer Science ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 29)(21, "div", 20)(22, "div", 30)(23, "div", 31)(24, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PatientDashboardComponent_main_16_div_27_Template, 28, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 34)(29, "div", 35)(30, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_main_16_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.openEditProfilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.patient.Profile_picture ? ctx_r0.patient.Profile_picture : "../../../assets/profile.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.patient);
  }
}
function PatientDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "app-edit-patient", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("saveChanges", function PatientDashboardComponent_div_17_Template_app_edit_patient_saveChanges_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.updatePatient($event));
    })("closeModal", function PatientDashboardComponent_div_17_Template_app_edit_patient_closeModal_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined)("patient", ctx_r1.patient);
  }
}
const _c0 = function (a0, a1) {
  return {
    "opacity": a0,
    "cursor": a1
  };
};
function PatientDashboardComponent_div_18_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody", 56)(1, "tr", 57)(2, "td", 49)(3, "div", 58)(4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 60)(6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 64)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 63)(20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_div_18_tbody_19_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.cancleAppointmet(ctx_r13.allAppointments[index_r12]._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const index_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r10.allAppointments[index_r12].Doctor_id.Profile_photo ? ctx_r10.allAppointments[index_r12].Doctor_id.Profile_photo : "../../../assets/profile.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.allAppointments[index_r12].Doctor_id.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.allAppointments[index_r12].Date.slice(0, 10), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.allAppointments[index_r12].Starting_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.allAppointments[index_r12].Payment_id.Payable_amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("px-2 py-1 flex items-center justify-center font-semibold leading-tight \n  ", ctx_r10.allAppointments[index_r12].Status === "Canceled" ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100" : "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100", "\n  rounded-full");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.allAppointments[index_r12].Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.allAppointments[index_r12].Status === "Canceled" || ctx_r10.allAppointments[index_r12].Status === "Done")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx_r10.allAppointments[index_r12].Status === "Canceled" || ctx_r10.allAppointments[index_r12].Status === "Done" ? "0.5" : "1", ctx_r10.allAppointments[index_r12].Status === "Canceled" || ctx_r10.allAppointments[index_r12].Status === "Done" ? "not-allowed" : "pointer"));
  }
}
function PatientDashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 46)(4, "table", 47)(5, "thead")(6, "tr", 48)(7, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PatientDashboardComponent_div_18_tbody_19_Template, 22, 14, "tbody", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 51)(21, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Your Appointments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "nav", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.allAppointments);
  }
}
function PatientDashboardComponent_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
function PatientDashboardComponent_div_19_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PatientDashboardComponent_div_19_ng_template_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.callId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r17.callId);
  }
}
function PatientDashboardComponent_div_19_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PatientDashboardComponent_div_19_ng_template_19_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.callId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r19.callId);
  }
}
function PatientDashboardComponent_div_19_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r20.message, " ");
  }
}
function PatientDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "div", 66)(2, "div", 45)(3, "div", 46)(4, "table", 47)(5, "thead")(6, "tr", 48)(7, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Join Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 67)(10, "div", 57)(11, "div", 49)(12, "div", 68)(13, "div")(14, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Enter Room Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, PatientDashboardComponent_div_19_div_16_Template, 1, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PatientDashboardComponent_div_19_ng_template_17_Template, 1, 1, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PatientDashboardComponent_div_19_ng_template_19_Template, 1, 1, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 63)(22, "div", 73)(23, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_div_19_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.join_meet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Join Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PatientDashboardComponent_div_19_p_26_Template, 2, 1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.incorrect)("ngIfThen", _r16)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.incorrect);
  }
}
var Tab;
(function (Tab) {
  Tab["Profile"] = "profile";
  Tab["Appointments"] = "appointments";
  Tab["Join"] = "join";
})(Tab || (Tab = {}));
class PatientDashboardComponent {
  constructor(route, firebaseService, services, router, ngZone) {
    this.route = route;
    this.firebaseService = firebaseService;
    this.services = services;
    this.router = router;
    this.ngZone = ngZone;
    this.activeTab = Tab.Profile;
    this.incorrect = false;
    this.message = "";
    this.isEditProfileModalOpen = false;
  }
  get Tab() {
    return Tab;
  }
  getshow(tab) {
    return tab === this.activeTab ? 1 : 0;
  }
  getTabIndex(tab) {
    if (tab === 'profile') {
      return '1'; // Current tab, higher index
    } else if (tab === 'appointments') {
      return '2'; // Tab with label 'appointments'
    } else if (tab === 'join') {
      return '3'; // Tab with label 'join'
    } else {
      return '0'; // Other tabs, lower index
    }
  }

  view_profile() {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.join = false;
  }
  // Change active tab to Appointments
  view_appointments() {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.join = false;
    // console.log('activeTab:', this.activeTab);
  }
  // Change active tab to join
  view_join() {
    this.activeTab = Tab.Join;
    this.profile = false;
    this.appointments = false;
    this.join = true;
  }
  openEditProfilePopup() {
    this.isEditProfileModalOpen = true;
  }
  closeModal() {
    this.isEditProfileModalOpen = false;
  }
  loadPatientData() {
    return new Promise((resolve, reject) => {
      this.patientId = '';
      // this.patientId = localStorage.getItem('userId');
      this.services.getPatient().subscribe(data => {
        this.patient = data;
        this.allAppointments = this.patient.Appointment_id;
        // console.log(this.allAppointments);
        // console.log("DashBoard");
        // console.log(this.patient);
        //this.calculateTimeSlots();
        resolve();
      }, error => {
        console.error("error", error);
        reject(error);
      });
    });
  }
  updatePatient(updatedPatient) {
    var _this = this;
    return new Promise((resolve, reject) => {
      // console.log(this.patientId);
      // Use your DoctorService to update the doctor data
      this.services.updatePatient(updatedPatient).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.patient = data;
          // Handle successful update, maybe show a success message
          //console.log('Patient updated successfully');
          // Reload the doctor data after the update
          //await this.loadPatientData();
          resolve();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        console.error('Error updating doctor', error);
        // Handle error, maybe show an error message
        reject(error);
      });
    });
  }
  cancleAppointmet(appointmentId) {
    var _this2 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("Inside cancleAppointmet");
      var mes;
      return new Promise((resolve, reject) => {
        _this2.services.cancelAppoinment(appointmentId).subscribe(data => {
          mes = data.mes;
          _this2.ngZone.run(() => {
            alert(mes);
          });
          _this2.loadPatientData();
          resolve();
        }, error => {
          console.error("error", error);
          reject(error);
        });
      });
    })();
  }
  join_meet() {
    var _this3 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get the document reference
        const callDocRef = _this3.firebaseService.getCallDocument(_this3.callId);
        // Check if the document exists
        callDocRef.valueChanges().subscribe({
          next: callSnapshot => {
            if (!callSnapshot) {
              // Handle the case where the document does not exist
              //console.error(`Document with callId ${this.callId} does not exist`);
              _this3.message = `Document with callId ${_this3.callId} does not exist`;
              _this3.incorrect = true;
            } else {
              _this3.incorrect = false;
              _this3.message = "";
              _this3.router.navigate(['/PatientConsulting', _this3.callId], {
                replaceUrl: true
              });
            }
          },
          error: error => {
            console.error('Error fetching document:', error);
            // Handle the error as needed
          }
        });

        console.log('Call ended successfully');
      } catch (error) {
        // Handle errors gracefully
        console.error('Error handling call document:', error);
      }
    })();
  }
  ngOnInit() {
    var _this4 = this;
    return (0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let isLogin = localStorage.getItem('isLogin');
        if (isLogin == "false" || isLogin == null) {
          //console.log(isLogin);
          // console.log("going to signin");
          yield _this4.router.navigate(['/signinPatient'], {
            replaceUrl: true
          });
        } else {
          // this.patientId = localStorage.getItem('userId');
          _this4.view_profile();
          yield _this4.loadPatientData();
          // this.patient = await this.services.getPatient(this.patientId).toPromise();
          // console.log(this.patient);
          setTimeout( /*#__PURE__*/(0,C_Users_Lenovo_Desktop_SDP_pro_Doc_Connect_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            try {
              // Fetch the doctor details using the service
              // Reset loading when the data is fetched successfully
              //this.loading = false;
              // You can perform other operations with this.doctor if needed
            } catch (error) {
              console.error('Error fetching doctor details:', error);
              // Handle the error if needed
              //this.loading = false; // Ensure loading is reset in case of an error
            }
          }), 2000);
          //this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
          //console.log("Home Page");
          //console.log(this.doctor);
          //} else {
          //console.error("Error: 'id' parameter is undefined.");
          //}
        }
      } catch (error) {
        console.error("error", error);
      }
    })();
  }
  static #_ = this.ɵfac = function PatientDashboardComponent_Factory(t) {
    return new (t || PatientDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PatientDashboardComponent,
    selectors: [["app-patient-dashboard"]],
    decls: 20,
    vars: 7,
    consts: [[1, "mt-14", "flex", "bg-blue-300", "flex-wrap", "min-vh-screen"], ["id", "sidebar", 1, "sticky", "top-14", "w-full", "md:w-1/6", "pl-4", "py-4", "md:mb-0", "bg-blue-600", "min-vh-screen", "mx", "rounded-3xl"], [1, "w-full", "flex", "flex-col", "items-center"], [1, "py-3", "items-center", "inline-block", "w-full", "rounded-xl", "cursor-pointer", 3, "click"], [1, "fa-regular", "fa-user", "fa-lg", 2, "font-weight", "bold"], [1, "bgw-full", "font-semibold", "text-lg", "px-3", "py-1"], [1, "fa-regular", "fa-calendar-check", "fa-lg", 2, "font-weight", "bold"], [1, "w-full", "font-semibold", "text-lg", "px-3", "py-1"], [1, "fa-solid", "fa-video", "fa-lg", 2, "font-weight", "bold"], ["class", "bg-blue-300 w-full md:w-5/6 mb-6 md:mb-0 h-auto mt-1", 4, "ngIf"], [4, "ngIf"], ["class", "w-full md:w-5/6 mb-6 md:mb-0 bg-blue-300 h-auto mx", 4, "ngIf"], [1, "bg-blue-300", "w-full", "md:w-5/6", "mb-6", "md:mb-0", "h-auto", "mt-1"], [1, "h-screen"], [1, "relative", "h-1/2"], [1, "absolute", "top-0", "w-full", "h-full", "bg-no-repeat", 2, "background-image", "url('https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg??auto=format&fit=crop')"], [1, "relative", "mb-8", "mx-8", "-mt-96"], [1, "container", "mx-auto"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "shadow-xl", "rounded-lg"], [1, "px-8"], [1, "flex", "flex-wrap", "justify-center"], [1, "flex", "flex-col", "items-center", "-mt-20"], ["alt", "Miss", 1, "w-40", "h-40", "rounded-full", 3, "src"], [1, "text-center", "mt-8"], [1, "text-4xl", "font-semibold", "leading-normal", "text-blueGray-700", "mb-2"], [1, "mb-2", "text-blueGray-600", "mt-10"], [1, "fas", "fa-briefcase", "mr-2", "text-lg", "text-blueGray-400"], [1, "mb-2", "text-blueGray-600"], [1, "fas", "fa-university", "mr-2", "text-lg", "text-blueGray-400"], [1, "mt-10", "py-10", "border-t", "border-blueGray-200", "text-center"], [1, "w-full", "flex", "flex-col", "2xl:w-1/3"], [1, "flex-1", "bg-white", "rounded-lg", "shadow-xl", "p-8"], [1, "text-xl", "text-gray-900", "font-bold"], [1, "mt-2", "text-gray-700"], [1, "flex-1", "flex", "flex-col", "items-center", "lg:items-center", "justify-center", "px-10", "mt-2"], [1, "flex", "items-center", "space-x-4", "mt-2"], ["type", "submit", 1, "w-auto", "h-10", "my-5", "flex", "justify-center", "items-center", "text-black", "font-semibold", "hover:bg-primary-700", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", "space-x-2", "transition", "duration-100", 3, "click"], [1, "fas", "fa-user", "fill-black"], [1, "flex", "border-b", "py-2"], [1, "font-bold", "w-32"], [1, "text-gray-700"], ["href", "/cdn-cgi/l/email-protection", "data-cfemail", "01606c606f6560736e7272416479606c716d642f626e6c", 1, "__cf_email__"], [3, "patient", "saveChanges", "closeModal"], [1, "w-full", "md:w-5/6", "mb-6", "md:mb-0", "bg-blue-300", "h-auto", "mx"], [1, "h-screen", "p-8"], [1, "w-full", "overflow-hidden", "rounded-lg", "shadow-xs"], [1, "w-full", "overflow-x-auto"], [1, "w-full", "whitespace-no-wrap"], [1, "text-lg", "text-gray-900", "font-bold", "tracking-wide", "text-left", "uppercase", "border-b", "bg-white"], [1, "px-4", "py-3"], ["class", "bg-white divide-y dark:divide-gray-700 ", 4, "ngFor", "ngForOf"], [1, "grid", "px-4", "py-3", "text-xs", "font-semibold", "tracking-wide", "text-gray-500", "uppercase", "border-t", "bg-gray-50", "sm:grid-cols-9"], [1, "flex", "items-center", "col-span-3"], [1, "col-span-2"], [1, "flex", "col-span-4", "mt-2", "sm:mt-auto", "sm:justify-end"], ["aria-label", "Table navigation"], [1, "bg-white", "divide-y", "dark:divide-gray-700"], [1, "text-gray-700", "dark:text-gray-400"], [1, "flex", "items-center", "text-sm"], [1, "relative", "hidden", "w-8", "h-8", "mr-3", "rounded-full", "md:block"], ["alt", "", "loading", "lazy", 1, "object-cover", "w-full", "h-full", "rounded-full", 3, "src"], ["aria-hidden", "true", 1, "absolute", "inset-0", "rounded-full", "shadow-inner"], [1, "font-semibold", "text-gray-700"], [1, "px-4", "py-3", "text-gray-700", "text-sm"], [1, "px-4", "py-3", "text-gray-700", "text-xs"], [1, "inline-block", "px-4", "py-2", "font-bold", "text-center", "text-white", "uppercase", "align-middle", "transition-all", "rounded-lg", "cursor-pointer", "bg-red-600", "leading-pro", "text-xs", "ease-soft-in", "tracking-tight-soft", "shadow-soft-md", "bg-150", "bg-x-25", "hover:scale-102", "active:opacity-85", "hover:shadow-soft-xs", 3, "disabled", "ngStyle", "click"], [1, "h-full", "p-8"], [1, "bg-white", "space-y-4", "md:space-y-6"], [1, "flex", "justify-center", "items-center", "text-sm"], ["for", "callId", 1, "block", "mb-2", "text-sm", "font-semibold", "text-gray-900"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, ""], ["type", "submit", 1, "w-full", "text-primary-700", "font-bold", "hover:bg-primary-700", "focus:bg-primary-700", "focus:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-primary-300", "hover:text-white", "rounded-lg", "text-base", "text-center", "px-5", "py-2.5", 3, "click"], ["class", "text-sm font-semibold text-red-600 ", 4, "ngIf"], ["type", "text", "name", "callId", "id", "callId", "placeholder", "bsewifiqevfhvefjvwfu", "required", "", 1, "bg-gray-100", "border-2", "border-red-500", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "callId", "id", "callId", "placeholder", "bsewifiqevfhvefjvwfu", "required", "", 1, "bg-gray-100", "border", "border-gray-400", "text-gray-800", "sm:text-sm", "rounded-lg", "focus:ring-primary-#2563eb", "focus:border-primary-#2563eb", "block", "w-full", "p-2.5", 3, "ngModel", "ngModelChange"], [1, "text-sm", "font-semibold", "text-red-600"]],
    template: function PatientDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "ul", 2)(4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_li_click_4_listener() {
          return ctx.view_profile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_li_click_8_listener() {
          return ctx.view_appointments();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_li_click_12_listener() {
          return ctx.view_join();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Join Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, PatientDashboardComponent_main_16_Template, 34, 4, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PatientDashboardComponent_div_17_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PatientDashboardComponent_div_18_Template, 26, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PatientDashboardComponent_div_19_Template, 27, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Profile));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Appointments));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideA", ctx.getshow(ctx.Tab.Join));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditProfileModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.appointments);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.join);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_3__.EditPatientComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["#sidebar[_ngcontent-%COMP%] {\n    height: calc(100vh - 3.5rem); \n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSw0QkFBNEIsRUFBRSwyQkFBMkI7RUFDM0QiLCJmaWxlIjoicGF0aWVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI3NpZGViYXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTsgLyogU3VidHJhY3QgbmF2YmFyIGhlaWdodCAqL1xyXG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsNEJBQTRCLEVBQUUsMkJBQTJCO0VBQzNEO0FBQ0Ysd1pBQXdaIiwic291cmNlc0NvbnRlbnQiOlsiICAjc2lkZWJhciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pOyAvKiBTdWJ0cmFjdCBuYXZiYXIgaGVpZ2h0ICovXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideIndicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(0px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(52px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('3', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(104px)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.5s ease-out'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideA', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateX(+30px)',
        color: '#68e8f7'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(0px)',
        color: '#ffffff'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.3s ease-out'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 1313:
/*!*********************************************!*\
  !*** ./src/app/Patient/services.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesService: () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ServicesService {
  constructor(http) {
    this.http = http;
    this.url_getdoctors = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/";
    this.url_get_doctor = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/doctor/";
    this.url_get_patient = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/";
    this.url_update_patient = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/";
    this.url_create_orderId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/payment/createOrderId";
    this.url_verify_payment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/payment/verify";
    this.url_appointment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/appointment/";
    this.url_payment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/payment/";
    this.url_cancel_appoinment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/patient/appointment/cancleappointment";
  }
  getDoctors() {
    const url = this.url_getdoctors;
    // console.log(url);
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in Geting Doctor:', error);
      throw error;
    }));
  }
  getDoctor(doctorId) {
    // console.log(doctorId);
    const url = this.url_get_doctor + doctorId;
    // console.log( "url "+ url)
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in fetchin doctor:', error);
      throw error;
    }));
  }
  getPatient() {
    // console.log(doctorId);
    const url = this.url_get_patient; // + patientId;
    // console.log( "url "+ url)
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in fetchin doctor:', error);
      throw error;
    }));
  }
  updatePatient(updatedPatient) {
    const url_generated = this.url_update_patient; // + patientId;
    //console.log(this.url_update_doctor);
    return this.http.put(url_generated, updatedPatient).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in update Patient:', error);
      throw error;
    }));
  }
  createOrderId(Data) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url_create_orderId, Data, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in createOrderId:', error);
      throw error;
    }));
  }
  verifyPayment(Data) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url_verify_payment, Data, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in verifyPayment:', error);
      throw error;
    }));
  }
  bookAppointment(Data) {
    const url = this.url_appointment + 'bookAppointment';
    return this.http.post(url, Data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in book Appointment', error);
      throw error;
    }));
  }
  appointmentPayment(Data) {
    const url = this.url_payment + 'createPayment';
    return this.http.post(url, Data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in appointment Payment', error);
      throw error;
    }));
  }
  updateDoctorSlotBook(Data, doctorId) {
    const url = this.url_get_doctor + doctorId + '/bookSlot';
    return this.http.put(url, Data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in appointment Payment', error);
      throw error;
    }));
  }
  cancelAppoinment(appointmentId) {
    console.log(this.url_cancel_appoinment);
    const appointmentIdObj = {
      appointmentId: appointmentId
    };
    return this.http.put(this.url_cancel_appoinment, appointmentIdObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error in cancel appoitment:', error);
      throw error;
    }));
  }
  static #_ = this.ɵfac = function ServicesService_Factory(t) {
    return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ServicesService,
    factory: ServicesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7133:
/*!**************************************************!*\
  !*** ./src/app/animation/animation.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationComponent: () => (/* binding */ AnimationComponent),
/* harmony export */   fadeInOutAnimation: () => (/* binding */ fadeInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function AnimationComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.slideIndex);
  }
}
class AnimationComponent {
  constructor() {
    this.slideIndex = 0;
    this.images = ['https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712513722/image-1_iaffhm.jpg', 'https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712513723/image-2_oqkgim.jpg', 'https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712513723/image-3_bmri9v.jpg'];
  }
  ngOnInit() {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.images.length;
    }, 3500);
  }
  getCurrentImage() {
    return this.images[this.slideIndex];
  }
  static #_ = this.ɵfac = function AnimationComponent_Factory(t) {
    return new (t || AnimationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnimationComponent,
    selectors: [["app-animation"]],
    decls: 11,
    vars: 3,
    consts: [[1, "image-container"], ["alt", "Current Slide", 1, "min-w-max", "mix-blend-color-burn", 3, "src"], [1, "quote-overlay"], [1, "quote"], [1, "second-line"], [1, "third-line"], [2, "text-align", "center"], ["class", "dot", 3, "active", 4, "ngFor", "ngForOf"], [1, "dot"]],
    template: function AnimationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"Health is the greatest gift,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " contentment the greatest wealth,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " faithfulness the best relationship.\" - Buddha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnimationComponent_span_10_Template, 1, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@imageFadeInOut", ctx.slideIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getCurrentImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 574px;\n  overflow: hidden;\n  position: relative;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  transition: opacity 1.5s ease-in-out;\n}\n\n.quote-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 20px;\n  transform: translateY(-50%);\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.173);\n}\n\n.quote[_ngcontent-%COMP%] {\n  font: bold 30px/1.5 sans-serif;\n  color: black;\n  white-space: pre-line;\n}\n\n.quote[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYW5pbWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1NzRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucXVvdGUtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3Myk7XHJcbn1cclxuXHJcbi5xdW90ZSB7XHJcbiAgZm9udDogYm9sZCAzMHB4LzEuNSBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5xdW90ZSAuc2Vjb25kLWxpbmUge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uL2FuaW1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSx3NENBQXc0QyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDU3NHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5xdW90ZS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTczKTtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICBmb250OiBib2xkIDMwcHgvMS41IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuLnF1b3RlIC5zZWNvbmQtbGluZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('imageFadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':increment, :decrement', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('1.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1
      }))])])]
    }
  });
}
const fadeInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _Patient_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patient/auth/signin/signin.component */ 7616);
/* harmony import */ var _Patient_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patient/auth/registration/registration.component */ 3189);
/* harmony import */ var _Patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patient/patient-dashboard/patient-dashboard.component */ 6126);
/* harmony import */ var _Doctor_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Doctor/auth/registration/registration.component */ 5375);
/* harmony import */ var _Doctor_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Doctor/auth/signin/signin.component */ 2750);
/* harmony import */ var _Doctor_dashboard_doctor_dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/dashboard-doctor.component */ 4313);
/* harmony import */ var _Doctor_home_doctor_home_doctor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Doctor/home-doctor/home-doctor.component */ 4579);
/* harmony import */ var _Patient_home_patient_home_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Patient/home-patient/home-patient.component */ 9077);
/* harmony import */ var _Patient_home_patient_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Patient/home-patient/doctor-card/doctor-card.component */ 3438);
/* harmony import */ var _Patient_home_patient_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Patient/home-patient/book-appointment/book-appointment.component */ 8328);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ 6663);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ 6084);
/* harmony import */ var _Patient_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Patient/about-section/about-section.component */ 5121);
/* harmony import */ var _Doctor_dashboard_doctor_doctor_consulting_doctor_consulting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/doctor-consulting/doctor-consulting.component */ 7022);
/* harmony import */ var _Patient_patient_dashboard_patient_consulting_patient_consulting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Patient/patient-dashboard/patient-consulting/patient-consulting.component */ 4889);
/* harmony import */ var _Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Patient/auth/auth.guard */ 4954);
/* harmony import */ var _Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Doctor/auth/auth.gaurdDoctor */ 2552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);




















const routes = [{
  path: '',
  redirectTo: 'homepatient',
  pathMatch: 'full'
}, {
  path: 'signinDoctor',
  component: _Doctor_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__.SigninComponentDoctor
}, {
  path: 'registerDoctor',
  component: _Doctor_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__.RegistrationComponentDoctor
}, {
  path: 'signinPatient',
  component: _Patient_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponentPatient
}, {
  path: 'registerPatient',
  component: _Patient_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponentPatient
}, {
  path: 'dashboardPatient',
  component: _Patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.PatientDashboardComponent,
  canActivate: [_Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
}, {
  path: 'dashboardDoctor',
  component: _Doctor_dashboard_doctor_dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_5__.DashboardDoctorComponent,
  canActivate: [_Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_16__.AuthGuardDoctor]
}, {
  path: 'DoctorConsulting',
  component: _Doctor_dashboard_doctor_doctor_consulting_doctor_consulting_component__WEBPACK_IMPORTED_MODULE_13__.DoctorConsultingComponent,
  canActivate: [_Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_16__.AuthGuardDoctor]
}, {
  path: 'PatientConsulting/:callId',
  component: _Patient_patient_dashboard_patient_consulting_patient_consulting_component__WEBPACK_IMPORTED_MODULE_14__.PatientConsultingComponent,
  canActivate: [_Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
}, {
  path: 'homedoctor',
  component: _Doctor_home_doctor_home_doctor_component__WEBPACK_IMPORTED_MODULE_6__.HomeDoctorComponent,
  canActivate: [_Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_16__.AuthGuardDoctor]
}, {
  path: 'homepatient',
  component: _Patient_home_patient_home_patient_component__WEBPACK_IMPORTED_MODULE_7__.HomePatientComponent
}, {
  path: 'aboutPage',
  component: _Patient_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_12__.AboutSectionComponent
}, {
  path: 'doctor-details/:id',
  component: _Patient_home_patient_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_8__.DoctorCardComponent
}, {
  path: 'bookappointment/:id',
  component: _Patient_home_patient_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_9__.BookAppointmentComponent,
  canActivate: [_Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
}, {
  path: 'logout',
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__.LogoutComponent,
  canActivate: [_Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
}, {
  path: 'doctor-logout',
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__.LogoutComponent,
  canActivate: [_Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_16__.AuthGuardDoctor]
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__.NotFoundComponent
}
// {path: '**', redirectTo: '/homepatient', pathMatch: 'full' },
];

class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.service */ 3514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _Doctor_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Doctor/navbar/navbar.component */ 1756);
/* harmony import */ var _Patient_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patient/navbar/navbar.component */ 3103);






function AppComponent_app_navbar_doctor_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar-doctor");
  }
}
function AppComponent_app_navbar_patient_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-navbar-patient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSignInDoctorClicked", function AppComponent_app_navbar_patient_2_Template_app_navbar_patient_onSignInDoctorClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.change_mode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(router, navbarService) {
    this.router = router;
    this.navbarService = navbarService;
    this.title = 'Client';
    this.mode = 'Patient';
    this.isLogin = false;
  }
  change_mode() {
    // console.log(this.mode);
    this.router.navigate(['/signinDoctor']);
  }
  ngOnInit() {
    let log = localStorage.getItem('isLogin');
    //console.log("log in app",log);
    if (log == 'false' || log == null) {
      localStorage.removeItem("isLogin");
      localStorage.setItem('isLogin', "false");
    }
    let mode = localStorage.getItem('mode');
    if (mode == 'Doctor') {
      this.mode = 'Doctor';
    } else if (mode == 'Patient' || null) {
      this.mode = 'Patient';
    }
    this.navbarService.mode$.subscribe(mode => {
      this.mode = mode;
      // console.log('mode', mode);
    });
    // console.log("mode",this.mode);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 2,
    consts: [[4, "ngIf"], [3, "onSignInDoctorClicked", 4, "ngIf"], [3, "onSignInDoctorClicked"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_app_navbar_doctor_1_Template, 1, 0, "app-navbar-doctor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_app_navbar_patient_2_Template, 1, 0, "app-navbar-patient", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode == "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode == "Patient");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _Doctor_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponentDoctor, _Patient_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponentPatient],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _Doctor_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Doctor/auth/registration/registration.component */ 5375);
/* harmony import */ var _Doctor_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Doctor/auth/signin/signin.component */ 2750);
/* harmony import */ var _Doctor_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Doctor/navbar/navbar.component */ 1756);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _Patient_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Patient/navbar/navbar.component */ 3103);
/* harmony import */ var _Patient_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Patient/auth/registration/registration.component */ 3189);
/* harmony import */ var _Patient_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Patient/auth/signin/signin.component */ 7616);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _Doctor_home_doctor_home_doctor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Doctor/home-doctor/home-doctor.component */ 4579);
/* harmony import */ var _Doctor_dashboard_doctor_dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/dashboard-doctor.component */ 4313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _Doctor_dashboard_doctor_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/edit-profile/edit-profile.component */ 6743);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation/animation.component */ 7133);
/* harmony import */ var _Patient_home_patient_home_patient_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Patient/home-patient/home-patient.component */ 9077);
/* harmony import */ var _Patient_home_patient_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Patient/home-patient/doctor-card/doctor-card.component */ 3438);
/* harmony import */ var _Patient_home_patient_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Patient/home-patient/book-appointment/book-appointment.component */ 8328);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ 6663);
/* harmony import */ var _Patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Patient/patient-dashboard/patient-dashboard.component */ 6126);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found/not-found.component */ 6084);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-material-timepicker */ 3810);
/* harmony import */ var _Patient_home_patient_book_appointment_payment_status_dialog_payment_status_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Patient/home-patient/book-appointment/payment-status-dialog/payment-status-dialog.component */ 7166);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _Patient_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Patient/about-section/about-section.component */ 5121);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/compat */ 289);
/* harmony import */ var _Doctor_dashboard_doctor_doctor_consulting_doctor_consulting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/doctor-consulting/doctor-consulting.component */ 7022);
/* harmony import */ var _Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service */ 9562);
/* harmony import */ var _Patient_patient_dashboard_patient_consulting_patient_consulting_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Patient/patient-dashboard/patient-consulting/patient-consulting.component */ 4889);
/* harmony import */ var _Patient_patient_dashboard_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Patient/patient-dashboard/edit-patient/edit-patient.component */ 6570);
/* harmony import */ var _Doctor_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Doctor/jwt-interceptor.service */ 239);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-skeleton-loader */ 6316);
/* harmony import */ var _Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Patient/auth/auth.guard */ 4954);
/* harmony import */ var _Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Doctor/auth/auth.gaurdDoctor */ 2552);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 1699);







































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe, _Patient_auth_auth_guard__WEBPACK_IMPORTED_MODULE_25__.AuthGuard, _Doctor_auth_auth_gaurdDoctor__WEBPACK_IMPORTED_MODULE_26__.AuthGuardDoctor, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
      useClass: _Doctor_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_24__.JwtInterceptorService,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_34__.NgxMaterialTimepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_36__.AngularFireModule.initializeApp(_Doctor_dashboard_doctor_doctor_consulting_firebaseservice_service__WEBPACK_IMPORTED_MODULE_21__.firebaseConfig), ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_37__.NgxSkeletonLoaderModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _Doctor_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponentDoctor, _Doctor_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponentDoctor, _Doctor_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponentDoctor, _Patient_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationComponentPatient, _Patient_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__.SigninComponentPatient, _Patient_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponentPatient, _Doctor_home_doctor_home_doctor_component__WEBPACK_IMPORTED_MODULE_8__.HomeDoctorComponent, _Doctor_dashboard_doctor_dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_9__.DashboardDoctorComponent, _Doctor_dashboard_doctor_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__.EditProfileComponent, _animation_animation_component__WEBPACK_IMPORTED_MODULE_11__.AnimationComponent, _Patient_home_patient_home_patient_component__WEBPACK_IMPORTED_MODULE_12__.HomePatientComponent, _Patient_home_patient_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_13__.DoctorCardComponent, _Patient_home_patient_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_14__.BookAppointmentComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__.LogoutComponent, _Patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_16__.PatientDashboardComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__.NotFoundComponent, _Patient_home_patient_book_appointment_payment_status_dialog_payment_status_dialog_component__WEBPACK_IMPORTED_MODULE_18__.PaymentStatusDialogComponent, _Patient_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_19__.AboutSectionComponent, _Doctor_dashboard_doctor_doctor_consulting_doctor_consulting_component__WEBPACK_IMPORTED_MODULE_20__.DoctorConsultingComponent, _Patient_patient_dashboard_patient_consulting_patient_consulting_component__WEBPACK_IMPORTED_MODULE_22__.PatientConsultingComponent, _Patient_patient_dashboard_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_23__.EditPatientComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_34__.NgxMaterialTimepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_36__.AngularFireModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_37__.NgxSkeletonLoaderModule]
  });
})();

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 63,
    vars: 0,
    consts: [[1, "left-0", "bottom-0", "w-full"], [1, "bg-blue-800", "text-white", "px-4", "divide-y", "dark:text-gray-100"], [1, "container", "flex", "flex-col", "justify-between", "py-10", "mx-auto", "space-y-8", "lg:flex-row", "lg:space-y-0"], [1, "lg:w-1/3"], ["rel", "noopener noreferrer", "href", "#", 1, "flex", "justify-center", "space-x-3", "lg:justify-start"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "dark:bg-violet-400"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "fill", "currentColor", 1, "flex-shrink-0", "w-5", "h-5", "rounded-full", "dark:text-gray-900"], ["d", "M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"], [1, "self-center", "text-2xl", "font-semibold"], [1, "grid", "grid-cols-2", "text-sm", "gap-x-3", "gap-y-8", "lg:w-2/3", "sm:grid-cols-4"], [1, "space-y-3"], [1, "tracking-wide", "uppercase", "dark:text-gray-50"], [1, "space-y-1"], ["rel", "noopener noreferrer", "href", "#"], [1, "uppercase", "dark:text-gray-50"], [1, "flex", "justify-start", "space-x-3"], ["rel", "noopener noreferrer", "href", "#", "title", "Facebook", 1, "flex", "items-center", "p-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 32 32", 1, "w-5", "h-5", "fill-current"], ["d", "M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"], ["rel", "noopener noreferrer", "href", "#", "title", "Twitter", 1, "flex", "items-center", "p-1"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5", "fill-current"], ["d", "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"], ["rel", "noopener noreferrer", "href", "#", "title", "Instagram", 1, "flex", "items-center", "p-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "fill", "currentColor", 1, "w-5", "h-5", "fill-current"], ["d", "M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Doc-Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12)(15, "li")(16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 12)(31, "li")(32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10)(38, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 12)(41, "li")(42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Public API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10)(51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15)(54, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6663:
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar.service */ 3514);



class LogoutComponent {
  constructor(router, navbarService) {
    this.router = router;
    this.navbarService = navbarService;
  }
  ngOnInit() {
    //this.navbarComponentPatient.hideNavbar();
    let login = localStorage.getItem('isLogin');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
    localStorage.removeItem('jwt');
    let mode = localStorage.getItem('mode');
    if (mode == 'Doctor') {
      this.navbarService.setMode('Patient');
      localStorage.removeItem('mode');
    } else if (mode == 'Patient') {
      localStorage.removeItem('mode');
    } else {}
    this.navbarService.setIsLogin(false);
    this.navbarService.setMode('Patient');
    this.router.navigate(['/homepatient']);
  }
  static #_ = this.ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 2,
    vars: 0,
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3514:
/*!***********************************!*\
  !*** ./src/app/navbar.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarService: () => (/* binding */ NavbarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class NavbarService {
  setMode(mode) {
    this.modeSubject.next(mode);
  }
  setHideNavbar(hide) {
    this.hideNavbarSubject.next(hide);
  }
  isDoctor() {
    let mode = localStorage.getItem('mode');
    if (mode == 'Doctor') {
      return 'Doctor';
    } else if (mode == 'Patient' || null) {
      return 'Patient';
    }
    return 'Patient';
  }
  authenticated() {
    let log = localStorage.getItem('isLogin');
    // console.log("log",log);
    if (log == 'false') return false;
    if (log == null) return false;
    return true;
  }
  showNavbar() {
    this.setHideNavbar(false);
  }
  setIsLogin(value) {
    this.isLoginSubject.next(value);
  }
  constructor() {
    this.hideNavbarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.hideNavbar$ = this.hideNavbarSubject.asObservable();
    this.isLoginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.authenticated() || false);
    this.isLogin$ = this.isLoginSubject.asObservable();
    this.modeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.isDoctor());
    this.mode$ = this.modeSubject.asObservable();
  }
  static #_ = this.ɵfac = function NavbarService_Factory(t) {
    return new (t || NavbarService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NavbarService,
    factory: NavbarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6084:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class NotFoundComponent {
  constructor(router) {
    this.router = router;
  }
  redirect() {
    let mode = localStorage.getItem('mode');
    if (mode == 'Doctor') {
      this.router.navigate(['/homedoctor']);
    } else if (mode == 'Patient' || mode == null) {
      this.router.navigate(['/']);
    } else {}
  }
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 11,
    vars: 0,
    consts: [[1, "fixed", "left-0", "items-center", "justify-center", "h-5/6"], ["autoplay", "", "loop", "", "playsinline", "", "id", "broken-glass-video"], ["src", "https://res.cloudinary.com/dcz8mfqmp/video/upload/v1712513810/404_screen_breaking_t4atii.mp4", "type", "video/mp4"], [1, "overlay", "absolute", "text-white", "text-center", "zoom-in-text"], [1, "text-4xl", "mb-8"], [1, "text-lg", "mb-12"], [1, "inline-block", "py-3", "rounded-md", "px-5", "bg-white", "cursor-pointer", 3, "click"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 - Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oops! It seems like the page you are looking for is broken.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_9_listener() {
          return ctx.redirect();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go back to the homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["\n\n\n\n @keyframes _ngcontent-%COMP%_zoomIn {\n    from {\n        transform: scale(0.5);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n#broken-glass-video[_ngcontent-%COMP%]{\n    position: absolute;\n    object-fit: cover;\n    max-width: 1536px;\n}\n\n.zoom-in-text[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_zoomIn 10.8s forwards infinite; \n} \n.overlay[_ngcontent-%COMP%] {\n    top: 45%;\n    left: 35%;\n    transform: translate(-50%, -50%);\n    color: white;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1Qix1REFBdUQ7Q0FDdEQ7SUFDRztRQUNJLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTs7Ozs7Ozs7OztDQVVDIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbm90LWZvdW5kLmNvbXBvbmVudC5jc3MgKi9cclxuLyogQWRkIHRoaXMgdG8geW91ciBnbG9iYWwgc3R5bGVzIG9yIGNvbXBvbmVudCBzdHlsZXMgKi9cclxuIEBrZXlmcmFtZXMgem9vbUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG4jYnJva2VuLWdsYXNzLXZpZGVve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcclxufVxyXG5cclxuLnpvb20taW4tdGV4dCB7XHJcbiAgICBhbmltYXRpb246IHpvb21JbiAxMC44cyBmb3J3YXJkcyBpbmZpbml0ZTsgXHJcbn0gXHJcbi5vdmVybGF5IHtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogMzUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLypcclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4qLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1Qix1REFBdUQ7Q0FDdEQ7SUFDRztRQUNJLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTs7Ozs7Ozs7OztDQVVDO0FBQ0Qsb2xEQUFvbEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBub3QtZm91bmQuY29tcG9uZW50LmNzcyAqL1xyXG4vKiBBZGQgdGhpcyB0byB5b3VyIGdsb2JhbCBzdHlsZXMgb3IgY29tcG9uZW50IHN0eWxlcyAqL1xyXG4gQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiNicm9rZW4tZ2xhc3MtdmlkZW97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1heC13aWR0aDogMTUzNnB4O1xyXG59XHJcblxyXG4uem9vbS1pbi10ZXh0IHtcclxuICAgIGFuaW1hdGlvbjogem9vbUluIDEwLjhzIGZvcndhcmRzIGluZmluaXRlOyBcclxufSBcclxuLm92ZXJsYXkge1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKlxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  EMAIL: 'docconnectpvt@gmail.com',
  PASSWORD: 'yybv bdjz nbrc mrjm',
  SERVICE_ID: 'service_lx8ae8c',
  TEMPLATE_ID: 'template_bs5tdjk',
  USER_ID: 'Lx9Z4TNqPKTQ1oiUO',
  DOCTOR_TEMPLATE_ID: 'template_hbae7ct',
  baseUrl: "https://doc-connet-backend.vercel.app/"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.dc8c8d1808ab036d.js.map