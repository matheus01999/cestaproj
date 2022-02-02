import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Cesta from './src/telas/Cesta';
import mocks from './src/mocks/cesta';
import { useFonts, Montserrat_400Regular,Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';


export default function App() {
  const[fontecarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if(!fontecarregada){
    return  <AppLoading/>
  }

  return (
      <SafeAreaView>
      <Cesta {...mocks}/>
      </SafeAreaView>
  );
}

