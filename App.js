import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular,Montserrat_700Bold} from '@expo-google-fonts/montserrat';


export default function App() {
  const[fontecarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if(!fontecarregada){
    return  <Text>oi</Text>
  }

  return (
      <SafeAreaView>
      <Cesta/>
      </SafeAreaView>
  );
}

