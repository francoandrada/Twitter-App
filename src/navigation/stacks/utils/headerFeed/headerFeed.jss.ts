import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context'



export default () => {
  const insets = useSafeAreaInsets();
  return  StyleSheet.create({
    container: {
      paddingTop: insets.top,
      height: 100,
      backgroundColor: 'white',
      alignSelf: 'center',
      width: '100%',
      alignItems: 'center',
      elevation: 10,
    },
    text: {
      color : 'black',
      fontWeight: '700',
      fontSize: 24,
    },
  });
};