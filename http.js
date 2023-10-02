import axios from 'axios';

// const BASE_URL = "http://pinocomo.ddns.net:9999/babysafe/login?user=pino&pwd=pino";
// const BASE_URL = "http://pinocomo.ddns.net:9999/babysafe/login";
// const BASE_URL = "http://172.31.234.97:8084/babysafe/login";
// const BASE_URL = "http://130.0.151.40:8090/babysafe/login";
const BASE_URL = "http://37.159.251.165:8090/babysafe/login";


export const fetchData = async () => {
  try {
    const response = await axios.get('http://37.159.251.169:8090/babysafe/login?user=pino&pwd=pino');
    // Handle successful response here
    console.log('Data:', response.data);
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
  }
};

export async function fetchData2() {
  try {
    const response = await axios.get('http://37.159.251.169:8090/babysafe/login?user=pino&pwd=pino');
    // Handle successful response here
    console.log('Data:', response.data);
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
  }
};


export async function getSession(utente, password) {

//   try {

//     const response = await axios.get('http://37.159.251.165:8090/babysafe/login?user=pino&pwd=pino')

//     // const response = await axios.get(BASE_URL, {
//     //   params: {
//     //     user: utente,
//     //     pwd: password,
//     //   },
//     // });

//     console.log('Data:', response.data);

//   } catch (error) {
//     // Handle errors here
//     console.error('Error:', error);
//   }
// };


// console.log("-------------------------------------------------");
// console.log("Risposta: " + JSON.stringify(response.data));
// console.log("-------------------------------------------------");

// for (const param in response.data) {
//   console.log("param: " + param);
// }

// console.log("param_ret: " + response.data.ret);
// console.log("param_msg: " + response.data.message);
// console.log("param_prm: " + response.data.params);

// const message = response.data.message;
// let sessionID = '';

// if (response.data.ret !== 0) {
//   console.log("Ret: ", response.data.ret);
//   sessionID = "";
// } else {
//   console.log("Ret: ", response.data.ret);
//   sessionID = response.data.params.sessionId;
// }

// console.log("SessionID: " + sessionID);

// return [sessionID, message];
}
