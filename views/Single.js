import React, {useEffect, useRef, useState} from 'react';
import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';
import {Text, Card, ListItem} from '@rneui/themed';
import {Video} from 'expo-av';
import {ScrollView} from 'react-native';
import {Icon} from '@rneui/base';
import {useUser} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Single = ({route}) => {
  console.log(route.params);
  const {
    title,
    description,
    filename,
    screenshot,
    time_added: timeAdded,
    user_id: userId,
    media_type: type,
  } = route.params;
  const video = useRef(null);
  const [owner, setOwner] = useState({});
  const {getUserById} = useUser();

  const getOwner = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const owner = await getUserById(userId, token);
    console.log(owner);
    setOwner(owner);
  };

  useEffect(() => {
    getOwner();
  }, []);
  return (
    <ScrollView>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        {type === 'image' ? (
          <Card.Image source={{uri: uploadsUrl + filename}} />
        ) : (
          <ListItem>
            <Video
              ref={video}
              source={{uri: uploadsUrl + filename}}
              style={{width: '100%', height: 200}}
              resizeMode="cover"
              useNativeControls
              onError={(error) => {
                console.log(error);
              }}
              isLooping
              usePoster
              postUserSource={{uri: uploadsUrl + screenshot}}
            />
          </ListItem>
        )}
        <Card.Divider />
        {description && (
          <ListItem>
            <Text>{description}</Text>
          </ListItem>
        )}
        <ListItem>
          <Icon name="schedule" />
          <Text>{new Date(timeAdded).toLocaleString('fi-FI')}</Text>
        </ListItem>
        <ListItem>
          <Icon name="person" />
          <Text>
            {owner.username} ({owner.full_name})
          </Text>
        </ListItem>
      </Card>
    </ScrollView>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
