import{
    Image, 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";


const ListItem = ({singleMedia}) => {
    const item = props.singleMedia;
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
export default ListItem;
ListItem.PropTypes = {
    singleMedia: PropTypes.object,
};