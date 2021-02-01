module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

var nodemailer = __nccwpck_require__(531);
const core = __nccwpck_require__(931);


// CREDENTUALS
const author = core.getInput("WORK_CLASS_EMAIL");
const sender = core.getInput("MAIL_AUTHOR");
const pass = core.getInput("NODE_EMAIL_PASSWORD");

let jobs = [
    core.getInput("SyntaxCodeBingo"),
    core.getInput("BingoJestTest"),
    core.getInput("BuildStatic"),
    core.getInput("DeploySurge")
]



console.log(jobs);

function check(job) {
    if (job == "") {
        job = "skipped";
    }
    return job;
}


// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: sender,
        pass: pass,
    },
});

var mailOptions = {
    from: sender, // sender address
    to: author,  // list of receivers
    subject: "Resultado del workflow ejecutado",
    text: `Se ha realizado un push en la rama "githubActions_improvement" que ha provocado la ejecución del workflow Bingo_Workflow 
    con los siguientes resultados: \n\n\
    - syntax_check_job:  ${check(jobs[0])}  ✔
    - test_execution_job: ${check(jobs[1])} ✔
    - build_statics_job:  ${check(jobs[2])} ✔ 
    - deploy_job: ${check(jobs[3])} ✔`        //  text body
};

transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + data.response);
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