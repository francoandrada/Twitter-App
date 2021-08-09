import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import Navigator from 'navigation/RootNavigator'
import { View, FlatList} from "react-native";
import { CardTweet } from 'organisms'
import { FeedNavProps } from 'types/navigation.types'


export const TWEETS = [
  {
  id:1,
  tweet: 'En las buenas y las malas',
  user: '@jose123',
  name: 'Jose',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:2,
  tweet: 'Aprendiendo React-Native',
  user: '@Francoandrada',
  name: 'Franco',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:3,
  tweet: 'Un tw de prueba',
  user: '@Prueba',
  name: 'Julian',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
    id:4,
  tweet: 'Cuando llegue a casa te paso ',
  user: '@Ciro',
  name: 'Ciro',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
  id:5,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@jose123',
  name: 'Jose',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:6,
  tweet: 'Aprendiendo React-Native',
  user: '@Francoandrada',
  name: 'Franco',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:7,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@Franco2',
  name: 'Julian',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
    id:8,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@Ciro',
  name: 'Ciro',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
  id:9,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@jose123',
  name: 'Jose',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:10,
  tweet: 'Aprendiendo React-Native',
  user: '@Francoandrada',
  name: 'Franco',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
id:11,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@Franco2',
  name: 'Julian',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
  {
    id:12,
  tweet: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
  user: '@Ciro',
  name: 'Ciro',
  profilePicture: 'https://www.knack.com/images/about/default-profile.png',
},
]

const Main: FC<FeedNavProps<'MainFeed'>> = ( { navigation, route }) => {
  return (
    <View>
      <FlatList 
        keyExtractor={item=>String(item.id)}
        data={TWEETS}
        renderItem={({ item }) => (
          <CardTweet 
          id = {item.id} 
          name = { item.name} 
          user = { item.user} 
          tweet = { item.tweet} 
          profilePicture = { item.profilePicture} 
          navigation= { navigation}
           />
        )}
      />
    </View>
  )
};

export default Main;