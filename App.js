import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''};
  }
  jokenpo(escolhaUsuario) {
    //escolha de número aleatório( 0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    //definição literal da escolha
    let escolhaComputador = '';
    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
      default:
        escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você Perdeu';
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado,
    });
    this.setState();
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => {
                this.jokenpo('pedra');
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => {
                this.jokenpo('papel');
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => {
                this.jokenpo('tesoura');
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});
