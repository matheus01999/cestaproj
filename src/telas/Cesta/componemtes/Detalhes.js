import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";



import Texto   from '../../componentes/Texto';

export default function Detalhes({logoFazenda, preco, nome, nomeFazenda, descricao, botao}){
    return<>
    <View style={estilos.cesta}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}> 
                <Image source={logoFazenda} style={estilos.imageFazenda}/>
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textobotao}>{botao}</Texto>
            </TouchableOpacity>
            
            
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
    },

    botao:{
        backgroundColor: '#2a9f85',
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 7,  
    },
    textobotao:{
        textAlign: "center",
        color: "white",
        lineHeight: 26,
        fontSize: 17,
        fontWeight: "bold",
    }

    
})