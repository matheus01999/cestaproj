import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Topo from '../Cesta/componemtes/Topo';
import Detalhes from '../Cesta/componemtes/Detalhes'





export default function Cesta(){
    return <>
            
            <SafeAreaView>
                <Topo></Topo>
                <Detalhes></Detalhes>
            </SafeAreaView>
    </>

            
}


