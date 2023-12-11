import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);

  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Seja a mudança que você quer ver no mundo.',
    'A persistência realiza o impossível.',
    'O segredo do sucesso é a constância no objetivo.',
    'A vida é feita de escolhas; faça escolhas que te façam feliz.',
    'O tempo é o recurso mais valioso; use-o com sabedoria.',
    'Cada dia é uma nova oportunidade para ser melhor que ontem.',
    'Não coloque limites em seus sonhos; coloque fé.',
    'O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.',
    'A felicidade não é um destino, é uma jornada.',
    'A gratidão transforma o que temos em suficiente.',
    'A verdadeira sabedoria está em reconhecer a própria ignorância.',
    'A alegria está na jornada, não apenas no destino.',
    'O amor é a força mais poderosa do universo.'
];


function quebraBiscoito() {
  if (biscoitoAberto) {
    // Se o biscoito já estiver aberto, exibe um alerta
    Alert.alert('Biscoito já quebrado', 'Clique em Reiniciar Biscoito para tirar uma nova frase.');
    return;
  }

  let numeroAleatorio = Math.floor(Math.random() * frases.length);
  setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
  setImg(require('./src/biscoitoAberto.png'));
  setBiscoitoAberto(true);
}

function reiniciar() {
  setImg(require('./src/biscoito.png'));
  setTextoFrase('');
  setBiscoitoAberto(false);
}

return (
  <View style={styles.container}>
    <Image source={img} style={styles.img} />
    <Text style={styles.textofrase}> {textoFrase} </Text>

    <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
      onPress={reiniciar}
    >
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
      </View>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

