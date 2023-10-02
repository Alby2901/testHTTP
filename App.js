import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { getSession, fetchData, fetchData2 } from "./http";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
  const [sessionID, setSessionID] = useState("");
  const [message, setmessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");

  function getSessionHandler2(){
    fetchData2()
  }

  // Define an asynchronous function that returns an array with various data structures
  async function getData() {
    try {
      // Make an HTTP GET request using Axios
      const response = await axios.get('http://37.159.251.169:8090/babysafe/login?user=pino&pwd=pino');
  
      if (response.status === 200) {
        console.log('Responce OK');
        console.log('Responce data = ', response.data);
        // const {
        //   numberData,
        //   stringData,
        //   objectData,
        //   arrayData,
        // } = response.data;

        const [

          numberData,
          stringData,
          objectData
        ]
        //   arrayData,
         = [response.data.message, response.data.params.sessionId, response.data.params.username];

        console.log('Responce Data: ', response.data)
        console.log('Responce Data Message: ', response.data.message)
        console.log('Responce Data Params SessionID: ', response.data.params.sessionId)
        console.log('Responce Data Params Username: ', response.data.params.username)
  
        // return [numberData, stringData, objectData, arrayData];
        return [numberData, stringData, objectData];

      } else {
        // Alert.alert('Error fetching Axios data', error);
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.log('Errore GetData: ', error)
      // Alert.alert('Error fetching Axios data', error);
      throw error; // Rethrow the error for further handling
    }
  }
  
  // Call the asynchronous function and handle errors
  async function main() {
    try {
      // const [number, string, person, numbersArray] = await getData();
      const [number, string, person] = await getData();
      
      // Now you can use the destructured data
      console.log("Number:", number);
      console.log("String:", string);
      console.log("Person:", person);
      // console.log("Numbers Array:", numbersArray);
    } catch (error) {
      // Alert.alert('Error fetching Axios data', error)
      console.log('Errore: ', error)
      console.error("Error:", error);
    }
  }
  
  async function getSessionHandler() {
    console.log("+++++++++++++++++++++++++++++");
    console.log("GetSession1: ");
    const [sessionIDData, messageData] = await getSession(usr, pwd);
    console.log("GetSession2: ");
    setSessionID(sessionIDData);
    console.log("GetSession3: ");
    setmessage(messageData);
    console.log("GetSession4: ");
    setIsLogged(true);
  }

  function resetIsLogged() {
    setIsLogged(false);
  }

  function usrInputHandler(enteredUsr){
    setUsr(enteredUsr)
  }

  function pwdInputHandler(enteredPwd){
    setPwd(enteredPwd)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onChangeText={usrInputHandler}
        value={usr}
        placeholder="Utente"
      />
      <TextInput
        style={styles.inputText}
        onChangeText={pwdInputHandler}
        value={pwd}
        placeholder="Password"
      />
      <Text style={styles.text}>Test chiamate HTTP...</Text>
      <Button style={styles.button} title="Chek utente" onPress={main}></Button>
      {/* <Text>The Session ID is: {sessionID}</Text> */}
      {isLogged && <Text>The Message is: {message}</Text>}
      {isLogged && sessionID && <Text>The Session ID is: {sessionID}</Text>}
      {isLogged && !sessionID && <Text style={styles.textAlert}cd >The Session ID is not avaiable!</Text>}
      {isLogged && (
        <Button style={styles.button} title="Annulla... " onPress={resetIsLogged}></Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddin: 40,
    backgroundColor: "#0099ff",
  },
  text: {
    margin: 5,
  },
  textAlert: {
    margin: 5,
    color: '#ff0000',
  },
  button: {
    margin: 5,
  },

  inputText: {
    borderWidth: 1,
    borderColor: "#ff0000",
    margin: 5,
    padding: 4,
    width: 100,
  },
});
