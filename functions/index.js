const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: Buffer.from(functions.config().gmail.email, 'base64').toString('utf8'),
    pass: Buffer.from(functions.config().gmail.password, 'base64').toString('utf8'),
  }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = 'Pizzaria';

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order){
  const mailOptions = {
    from: `${APP_NAME} <american.infogest.mailer@gmail.com>`,
    to: order.email,
    subject: `Your order from ${APP_NAME}.`,
    html: `
      <table style="width:500px; margin: auto"> 
        <tr>
            <th>${order.displayName}</th>
            <th>You ordered some food, here's confirmation of that order. </th>
        </tr>
        ${order.order.map(({name, quantity, price}) => `
          <tr>
            <td>
              ${quantity}
            </td>            
            <td>
              ${name}
            </td>  
            <td>
              ${price}
            </td>
          </tr>
        `).join("")}
      </table>
    `
  };
  mailTransport.sendMail(mailOptions);
}
