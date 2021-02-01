module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

let nodemailer = __nccwpck_require__(531);
let core = __nccwpck_require__(931);

const syntax_check_job = core.getInput("syntax_check_job");
const test_execution_job = core.getInput("test_execution_job");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");



let mail = core.getInput('NODE_EMAIL');
let pass = core.getInput('THE_PASSWORD');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: mail,
        pass: pass
    }
});

function check(actions) {
    if (actions == "") {
        actions = "skipped";
    }
    return actions;
}

let mail_author =  core.getInput('MAIL_AUTHOR');
let to_send =  core.getInput('WORK_CLASS_EMAIL');

// send mail with defined transport object
let info = {
    from: mail_author,// sender address
    to: to_send, // list of receivers
    subject: "Resultado del workflow ejecutado ✔", // Subject line
    text: `Se ha realizado un push en la rama "githubActions_improvement" que ha provocado la ejecución del workflow Bingo_Workflow 
    con los siguientes resultados: \n\n\
    - syntax_check_job: ${check(syntax_check_job)}  ✔
    - test_execution_job: ${check(test_execution_job)} ✔
    - build_statics_job:  ${check(build_statics_job)} ✔ 
    - deploy_job: ${check(deploy_job)} ✔`        //  text body
}

console.log("Message sent ✔: ", info.text);

transporter.sendMail(info, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Resultado del workflow ejecutado ✔",data.response);

    }
});




/***/ }),

/***/ 931:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 531:
/***/ ((module) => {

module.exports = eval("require")("nodemailer");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(211);
/******/ })()
;