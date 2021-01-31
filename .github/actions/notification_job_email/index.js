
let nodemailer = require("nodemailer");
let core = require("@actions/core");

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alexzarazua7email.test@gmail.com',
      pass: core.getInput('NODE_EMAIL_PASSWORD')
    }
  });
  

  // send mail with defined transport object
  let info = {
    from: 'alexzarazua7email.test@gmail.com',// sender address
    to: core.getInput('WORK_CLASS_EMAIL'), // list of receivers
    subject: "Resultado del workflow ejecutado ✔", // Subject line
    text: "Se ha realizado un push en la rama 'githubActions_improvement' que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados:- syntax_check_job: - test_execution_job: - build_statics_job: - deploy_job", //  text body

  }

  console.log("Message sent: ", info.text);

  transporter.sendMail(info, function(error, data){
    if (error) {
      core.setFailed(error);
    } else {
      console.log(data['text'], "Resultado del workflow ejecutado ✔");
    }
  });


