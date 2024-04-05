import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View indicatorStyle="white" style={styles.container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
      <Text style={styles.headerText}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe') }>
        <Text style={styles.buttonText}>
          {'Newsletter'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  footerContainer: { backgroundColor: 'white' },
  headerText: {
    padding: 40,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: 'darkgreen',
    textAlign: 'center',
  },
  logo: {
    height: 310,
    width: 175,
    resizeMode: 'cover',
 },
 button: {
   fontSize: 14,
   width: 350,
   padding: 5,
   marginVertical: 100,
   margin: 20,
   backgroundColor: '#495E57',
   borderColor: '#495E57',
   borderWidth: 2,
   borderRadius: 12
 },
 buttonText: {
   color: 'white',
   textAlign: 'center',
   fontSize: 20,
 },
});


export default WelcomeScreen;
