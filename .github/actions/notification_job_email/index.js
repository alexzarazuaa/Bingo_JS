var nodemailer = require("nodemailer");
const core = require("@actions/core");

// CREDENTUALS
const author = core.getInput("WORK_CLASS_EMAIL");
const sender = core.getInput("MAIL_AUTHOR");
const pass = core.getInput("NODE_EMAIL_PASSWORD");

const syntax_check_job = core.getInput("syntax_check_job");
const test_execution_job = core.getInput("test_execution_job");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");

console.log(syntax_check_job);
console.log(test_execution_job);
console.log(build_statics_job);
console.log(deploy_job);


// //Esta funcion comrpueba si el job esta vacio (ya que si es skipped no guarda ningun estado)_
// function check(job) {
//     if (job == "") {
//          job = "SKIPPED";
//         console.log(job)
//     }
//     return job;
// }


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
    text: `
    <p>Se ha realizado un push en la rama githubActions_improvement que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados:</p>
    <br>
    <p>- syntax_check_job: ${
      syntax_check_job == "" ? "SKIPPED" : syntax_check_job
    } ✔ </p>
    <p>- test_execution_job: ${
      test_execution_job == "" ? "SKIPPED" : test_execution_job
    } ✔ </p>
    <p>- build_statics_job: ${
      build_statics_job == "" ? "SKIPPED" : build_statics_job
    } ✔ </p>
    <p>- deploy_job: ${deploy_job == "" ? "SKIPPED" : deploy_job}  ✔</p> // text body
  `,
};

transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + data.response);
    }
});