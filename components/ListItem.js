import{
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


const ListItem = ({singleMedia}) => {
    const item = singleMedia;
    return (
        <TouchableOpacity>
            <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.thumbnails.w160 }}
            ></Image>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
        </TouchableOpacity>
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
  image: {
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
