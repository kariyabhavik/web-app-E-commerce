// var SibApiV3Sdk = require('sib-api-v3-sdk');

// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // // Configure API key authorization: api-key
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = "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"
// // // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// // //apiKey.apiKeyPrefix['api-key'] = "Token"

// // // Configure API key authorization: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = "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"
// // // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// // //partnerKey.apiKeyPrefix['partner-key'] = "Token" 


// exports.send = () => {
    
//  var apiInstance = new SibApiV3Sdk.ApiClient();

// var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
//      sendSmtpEmail = {
//         to: [{
//             email: 'vinit.h.tanna@gmail.com',
//             name: 'Vinit Tanna'
//         }],
//         params: {
//             name: 'Vinit',
//             surname: 'Tanna'
//         },
//         headers: {
//             'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//         },
//         sender: {
//             "email": "kariyabhavik410@gmail.com",
//             "name": "bhavik",
//         },
//         textContent:"This is a transactional email",
//   subject:"Subject Line",
//     };

//     apiInstance.SendSmtpEmail(sendSmtpEmail).then(function(data) {
//         console.log('API called successfully. Returned data: ' + data);
//       }, function(error) {
//         console.error(error);
//       });
// };

const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'ronnieheffinjack@gmail.com',
        pass: 'ronnie@123'
    } 
  });
  
