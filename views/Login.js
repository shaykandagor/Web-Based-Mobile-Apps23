import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthentication} from '../hooks/ApiHooks';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(MainContext);
  const {postLogin} = useAuthentication();

  const logIn = async () => {
    console.log('Login button pressed');
    const data = {username: 'shaynek', password: 'secret254'};
    try {
      const loginResult = await postLogin(data);
      console.log('logIn', loginResult);
      await AsyncStorage.setItem('userToken', loginResult.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('LogIn', error);
    }
  };

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (
        ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNzEzLCJ1c2VybmFtZSI6InNoYXluZWsiLCJlbWFpbCI6InNoYXluZWtAbWV0cm9wb2xpYS5maSIsImZ1bGxfbmFtZSI6bnVsbCwiaXNfYWRtaW4iOm51bGwsInRpbWVfY3JlYXRlZCI6IjIwMjMtMDEtMTRUMTY6NTc6NDguMDAwWiIsImlhdCI6MTY3NDAzMjkxNiwiZXhwIjoxNjc0MTE5MzE2fQ.1ezowX3ukqtIWacizd_eyBY1xBYYAXAtNR8_ThX1qdQ',
        userToken)
      ) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('no valid token available');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
