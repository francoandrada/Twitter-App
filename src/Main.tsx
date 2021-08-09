import React , { FC } from "react";
import Navigation from 'navigation/RootNavigator';
import { StatusBar } from "expo-status-bar";

const Main: FC = () => {
 return (
  <React.Fragment>
  <StatusBar style='auto'></StatusBar>
  <Navigation/>
</React.Fragment>
 );

}

export default Main;