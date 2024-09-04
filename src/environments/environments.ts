export const environments = {
  production: false,
  // baseUrl : 'http://localhost:5555/',
  baseUrl : 'http://64.23.185.254:5555/',
  S3:{
    accessKeyId: 'DO00G3KEJCQQ8CKYLFVU', // Sustituye con tu Access Key
    secretAccessKey: '46Cay7YYCCSxOphuX9R7yiRNUerqtqJ4YKciWQB5d0g', // Sustituye con tu Secret Key
    region: 'sfo3', // Cambia según la región de tu Space
    endpoint: 'https://sfo3.digitaloceanspaces.com',
    bucket: 'jfnnstorage',
  }
}
