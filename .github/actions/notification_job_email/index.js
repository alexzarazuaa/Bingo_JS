var nodemailer = require("nodemailer");
const core = require("@actions/core");


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
    subject: "Resultado del workflow ejecutado.",
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