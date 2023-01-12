import{Image, StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';


const ListItem = ({singleMedia, navigation}) => {
    const item = singleMedia;
    return (
      <TouchableOpacity
        style={StyleSheet.row}
        onPress={() => {
          navigation.navigate('Single', item);
        }}
      >
        <View style={style.box}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: uploadsUrl + item.thumbnails?.w160}}
          ></Image>
        </View>
        <View style={style.box}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );

};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
