import * as React from 'react'; 
import { Alert, ScrollView, Text, StyleSheet, Image, Pressable, TextInput,
  KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = (navigation) => {
  const [email, onChangeEmail] = React.useState('');
  const [subscribe, onSubscribe] = React.useState(false);
  const isEmailValid = validateEmail(email);

  const showAlert = () =>{
    onSubscribe(!subscribe)
    Alert.alert(
       'Thanks for subscribing, stay tuned!'
    )
 }
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
      <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
      <Text style={styles.headerText} numberOfLines={2}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput 
        style={styles.messageInput} 
        value={email} 
        placeholder={"Type your email"}
        onChangeText={onChangeEmail} 
        keyboardType={'email-address'}
        textContentType="emailAddress"
      /> 
      { !subscribe && <Pressable disabled={!isEmailValid} style={styles.button} onPress = {showAlert} >
        <Text style={styles.buttonText}>
          { title="Submit" } 
        </Text>
      </Pressable>}
      { subscribe && <Pressable disabled={!isEmailValid} style={styles.buttonout} onPress = {() => {}} >
        <Text style={styles.buttonText}>
          { title="Submit" } 
        </Text>
      </Pressable>}

      </ScrollView>
  </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'white',
  }, 
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    width: 135,
    margin: 24,
    marginHorizontal: 120,
    resizeMode: 'cover',
 },
  messageInput: { 
    fontSize: 14,
    width: 350,
    padding: 8,
    marginVertical: 4,
    margin: 12,
    backgroundColor: 'white',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 12
    }, 
 button: {
    fontSize: 14,
    width: 350,
    padding: 5,
    justifyContent: 'top',
    alignItems: 'center',
    marginVertical: 18,
    margin: 12,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 12
 },
 buttonout: {
  fontSize: 14,
  width: 350,
  padding: 5,
  justifyContent: 'top',
  alignItems: 'center',
  marginVertical: 18,
  margin: 12,
  backgroundColor: 'grey',
  borderColor: 'grey',
  borderWidth: 2,
  borderRadius: 12
},
 buttonText: {
   color: 'white',
   textAlign: 'center',
   fontSize: 20,
 },
 headerText: {
   padding: 20,
   marginVertical: 4,
   fontSize: 20,
   color: 'black',
   textAlign: 'center'
 },
});

export default SubscribeScreen;
