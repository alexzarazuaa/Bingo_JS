
let nodemailer = require("nodemailer");
let core = require("@actions/core");


let jobs = [
    core.getInput("syntax_check_job"),
    core.getInput("test_execution_job"),
    core.getInput("build_statics_job"),
    core.getInput("deploy_job")
]

console.log(jobs);
console.log(jobs[0])
console.log(jobs[1])
console.log(jobs[2])
console.log(jobs[3])


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexzarazua7email.test@gmail.com',
        pass: core.getInput('NODE_EMAIL_PASSWORD')
    }
});

function check(jobs) {
    if (jobs == "") {
        jobs = "skipped";
    }
    return jobs;
}



// send mail with defined transport object
let info = {
    from: 'alexzarazua7email.test@gmail.com',// sender address
    to: core.getInput('WORK_CLASS_EMAIL'), // list of receivers
    subject: "Resultado del workflow ejecutado ✔", // Subject line
    text: `Se ha realizado un push en la rama "githubActions_improvement" que ha provocado la ejecución del workflow Bingo_Workflow 
    con los siguientes resultados: \n\n\n
    - syntax_check_job: ${check(jobs[0])}
    - test_execution_job: ${check(jobs[1])}
    - build_statics_job:  ${check(jobs[2])}
    - deploy_job: ${check(jobs[3])}`       //  text body


}

console.log("Message sent: ", info.text,jobs[0]);

transporter.sendMail(info, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log("Resultado del workflow ejecutado ✔",data.response);

    }
});


