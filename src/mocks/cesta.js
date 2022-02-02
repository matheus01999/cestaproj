import logo from '../../assets/logo.png';

//Frutas
import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import tomate from '../../assets/frutas/Tomate.png'

const cesta  = {
    topo:{
        titulo: "Detalhes da Cesta",
    },

    detalhes:{
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha",
        preco: 'R$ 70,00',
        botao: 'Comprar',
    },

    itens:{
        titulo: "Itens da Cesta",
        lista:[
            {nome:"Tomate", image:tomate},
            {nome:"brocolis", image:brocolis},
            {nome:"batata", image:batata},
            {nome:"pepino", image:pepino},
            {nome:"abobora", image:abobora},

        ]
    }
}

export default  cesta;



