import React, {lazy, useContext, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTag} from '../hooks/ApiHooks';

const Profile = () => {
  const {getFilesByTag} = useTag();
  const {setIsLoggedIn} = useContext(MainContext);
  const [avatar, setAvatar] =  useState('');

  const loadAvatar = async () => {
    const avatar = await getFilesByTag('avatar_' + user.user_id);
    setAvatar(avatarArray.pop().filename);
    console.log('user avatar', avatar);
  };

  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Image style={styles.image} source={{uri: uploadsUrl + avatar}} />
      <Text>Username: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Full name: {user.full_name}</Text>
      <Button
        title="Logout!"
        onPress={async () => {
          console.log('Logging Out!');
          setIsLoggedIn(false);
          try {
            await AsyncStorage.clear();
          } catch (error) {
            console.error('clearing asyncstorage failed', error);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: 200,
    height: 300,
  },
});

export default Profile;
