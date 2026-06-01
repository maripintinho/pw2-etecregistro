import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function List() {
    const names=[
        {id: 0 , nome: 'Luiz', idade: 15},
        {id: 1 , nome: 'Andre', idade: 23},
        {id: 2 , nome: 'Claudio', idade: 55},
        {id: 3 , nome: 'Teresa', idade: 28},
        {id: 4 , nome: 'Livia', idade: 48},
        {id: 5 , nome: 'Maria', idade: 92},
        {id: 6 , nome: 'Sarah', idade: 17},
        {id: 7 , nome: 'Luisa' , idade:82},
        {id: 8 , nome: 'Lucas', idade: 36},
        {id: 9 , nome: 'Sabrina', idade: 64},
    ]

    const renderItemns = () => {
        return names.map((item) => (
            <TouchableOpacity
            key={item.id}
                style = {styles.botao}
                onPress={() => alertItemName(item)}>
                <View style={styles.item}>
                    <Text style={styles.texto}>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        ));
    };

    const alertItemName = (item) =>{
        alert('Você clicou no nome ' + item.nome + "\n Idade: " + item.idade);
    };

    return(
        <View style={styles.view}>
          <Image source={require('../assets/icon.png')} style={styles.image}>
          </Image>
          <Text style={styles.titulo}>🤼‍♂️Lista de Pessoas</Text>
        <ScrollView contentContainerStyle={styles.container}>
            {renderItemns()}
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  botao:{
    padding: 16,
    marginTop: 3,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    borderBottomWidth: 7,
    borderBottomColor: '#ada'
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e0f0fdd'
  },
  image:{
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  view:{
    width: '100%',
  },
  titulo:{
    fontSize: 25,
    color: '#ccdaab',
    fontWeight: 'bold'
  }
});
