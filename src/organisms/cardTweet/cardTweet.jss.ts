import { StyleSheet, Dimensions } from "react-native";


const WIDTH = Dimensions.get('screen').width;


export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1da1f2',
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  profilePictureContainer: {
    width: 50,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 22,
  },
  nameContainer: {
    marginLeft: 8,
  },
  name: {
    color: 'white',
    fontWeight: '700'
  },
  userContainer: {
    marginLeft: 8,
  },
  user: {
    fontWeight: '700',
    color: 'black',
  },
  header: {
    flexDirection: 'row'
  },
  contentContainer: {
    flexDirection: 'column',
    width: WIDTH - 90,
  },
  tweetContainer: {
    marginLeft: 8,
  },
  tweet: {
    fontWeight: '700',
    color: 'black',
  },
});