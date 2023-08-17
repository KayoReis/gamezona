import React from "react";
import { NavigationContainer} from '@react-navigation/native';
const Theme = {
  light:{
    dark:false,
    color:'black',
    colors: {
      background: 'rgb(192,192,192)',
      card: 'rgb(128,128,128)',
      text: 'rgb(0,0,0)',
      border: 'rgb(0,0,0)',
      notification: 'rgb(255,0,0)'}
    },
    dark:{dark:true,
      color:'white',
      colors: {
        background: 'rgb(0,0,0)',
        card: 'rgb(54,54,54)',
        text: 'rgb(0,0,0)',
        border: 'rgb(255,255,255)',
        notification: 'rgb(255,0,0)'
      },}
  };
 
  export default Theme