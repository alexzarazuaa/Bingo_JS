let nodemailer = require("nodemailer");
let core = require("@actions/core");

const syntax_check_job = core.getInput("syntax_check_job");
const test_execution_job = core.getInput("test_execution_job");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");



let mail = core.getInput('NODE_EMAIL');
let pass = core.getInput('THE_PASSWORD');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "gmail",
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

console.log("Message sent: ", info.text);

transporter.sendMail(info, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Resultado del workflow ejecutado ✔",data.response);

    }
});


