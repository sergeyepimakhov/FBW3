const nodemailer = require('nodemailer');


module.exports = (userEmail)=>{
    const output = `
    <p> you are Registered on our website ... welcome </p>
       </p>
   
   `
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
       host: "mail.hamburg-coders.pro",
       port: 587,
       secure: false, // true for 465, false for other ports
       auth: {
         user: process.env.MY_EMAIL, // generated ethereal user
         pass: process.env.MY_PASS // generated ethereal password
       },
       tls:{
           rejectUnauthorized:false
       }
     });
   
       // setup email data with unicode symbols
       let mailOptions = {
           from: '"info   " <info@gmail.com>', // sender address
           to: userEmail, // list of receivers
           subject: 'Registration is competed  ', // Subject line
           text: 'Hello world?', // plain text body
           html: output // html body
       };
        
       // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return console.log(error);
       }
       console.log('Message sent: %s', info.messageId);   
       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
   
   });
}
  
