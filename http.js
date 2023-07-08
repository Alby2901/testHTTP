import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

// const BASE_URL = "http://pinocomo.ddns.net:9999/babysafe/login?user=pino&pwd=pino";
// const BASE_URL = "http://pinocomo.ddns.net:9999/babysafe/login";
// const BASE_URL = "http://172.31.234.97:8084/babysafe/login";
const BASE_URL = "http://130.0.151.40:8090/babysafe/login";
const [response, setResponse] = useState('');


const fetchData = async () => {
  try {
    const url = 'http://BASE_URL.com';
    const user = 'myUsername';
    const password = 'myPassword';

    const response = await axios.get(url, {
      params: {
        user,
        password,
      },
    });

    setResponse(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};



export async function getSession(utente, password) {
  const response = await axios.get(BASE_URL, {
    params: {
      user: utente,
      pwd: password,
    },
  });

  //   console.log("-------------------------------------------------");

  //   console.log("Risposta: " + JSON.stringify(response));

  console.log("-------------------------------------------------");

  console.log("Risposta: " + JSON.stringify(response.data));

  console.log("-------------------------------------------------");

  for (const param in response.data) {
    console.log("param: " + param);
  }

  console.log("param: " + response.data.ret);
  console.log("param: " + response.data.message);
  console.log("param: " + response.data.params);

  const message = response.data.message;
  let sessionID = '';

  if (response.data.ret === -1) {
    console.log("Ret -1 ");
    sessionID = "";
  } else {
    console.log("Ret 0 ");
    sessionID = response.data.params.sessionId;
  }

  console.log("SessionID: " + sessionID);

  return [sessionID, message];
}
