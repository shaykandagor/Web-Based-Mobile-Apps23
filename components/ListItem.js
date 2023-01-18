import {Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {Menu, Home} from 'react-native-feather';

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgb(255,160,91)" barStyle="light-content" />

      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/sunset.jpg')}
          style={styles.bgImage}
          imageStyle={{borderBottomRightRadius: 65}}
        ></ImageBackground>
        <Menu
          stroke="white"
          fill="#fff"
          width={32}
          height={32}
          style={styles.menu}
        />
        <Home
          stroke="white"
          fill="#fff"
          width={32}
          height={32}
          style={styles.home}
        />
        <Text style={styles.hello}>Hello Stranger, hope you are ok</Text>
      </View>

      <View style={styles.infoArea}>
        <View style={styles.areaA}>
          <Text>Cool Kittens</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.row}>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{uri: uploadsUrl + item.thumbnails?.w160}}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    padding: 10,
  },
  header: {
    height: 270,
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: 270,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  home: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  hello: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  infoArea: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
  },
  areaA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  areaB: {
    flex: 8,
    padding: 20,
  },
  image: {
    width: 200,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    flex: 1,
    minHeight: 100,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

