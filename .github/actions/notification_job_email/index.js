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

//Esta funcion comrpueba si el job esta vacio (ya que si es skipped no guarda ningun estado)_
function check(actions) {
    if (actions == "") {
        actions = "skipped";
    }
    return actions;
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
    - syntax_check_job: ${check(syntax_check_job)}  ✔
    - test_execution_job: ${check(test_execution_job)} ✔
    - build_statics_job:  ${check(build_statics_job)} ✔ 
    - deploy_job: ${check(deploy_job)} ✔`        //  text body
};

transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + data.response);
    }
});