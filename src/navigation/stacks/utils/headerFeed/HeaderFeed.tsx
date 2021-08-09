import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "screens/feed/main/main.jss";
import stylesTheme from "./headerFeed.jss";


const HeaderFeed:FC = ( ) => {
  const styles = stylesTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Feed
      </Text>
    </View>
  )
}

export default HeaderFeed;