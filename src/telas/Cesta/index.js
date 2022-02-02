import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Topo from '../Cesta/componemtes/Topo';
import Detalhes from '../Cesta/componemtes/Detalhes'
import cesta from '../../mocks/cesta';





export default function Cesta( {topo, detalhes}){
    return <>
            
            <SafeAreaView>
                <Topo {...topo}/>
                <Detalhes {...detalhes}/>
            </SafeAreaView>
    </>

            
}


