import React from "react";
import { StyleSheet, View, Image } from "react-native";

import logo from '../../../../assets/logo.png';
import Texto   from '../../componentes/Texto';

export default function Detalhes(){
    return<>
    <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}> 
                <Image source={logo} style={estilos.imageFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda direto para
                     a sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View></>
}

const estilos = StyleSheet.create({


    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,

    },

    nome:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        

    },

    fazenda:{
        flexDirection: 'row',
        paddingVertical: 12,
    },

    imageFazenda:{
        
        width: 32,
        height: 32,

    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        
    },

    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
        
    },

    preco:{
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 42,
        marginTop: 8,
    }
})