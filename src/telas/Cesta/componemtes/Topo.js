import react from "react";
import { Image,  StyleSheet, Dimensions} from 'react-native'

import topo from '../../../../assets/topo.png';
import Texto   from '../../componentes/Texto';

const widht = Dimensions.get('screen').width;


export default function Topo(){
    return <>
            <Image source={topo} style ={estilos.topo}/>
            <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * widht,
        
    },

    titulo:{
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        padding: 16,
        fontWeight: 'bold',
        

       
    },
})