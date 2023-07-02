import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getSession } from "./http";
import { useEffect, useState } from "react";

export default function App() {
  const [sessionID, setSessionID] = useState("");
  const [message, setmessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");

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
      <Button style={styles.button} title="Chek utente" onPress={getSessionHandler}></Button>
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
