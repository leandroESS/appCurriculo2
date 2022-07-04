import React from "react";
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity } from 'react-native';

import foto from './assets/profile.jpg';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/leandro-andrade-a168a418b/')
        break
      case 'github':
        Alert.alert('Meu github', 'https://github.com/leandroESS')
        break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/profile.php?id=100006453951245')
        break
    }
  }
  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_abecalho}>
            <Image style={style.foto} source={foto} />
            <Text style={style.nome}>Leandro Andrade</Text>
            <Text style={style.funcao}>Estudante de T.I.</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <Text>facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => handleRedeSocial('linkedin')}>
                <Text>linkedin</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => handleRedeSocial('github')}>
                <Text>github</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Experiência Profissional</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>Python</Text>
                <Text style={style.card_content_text}>SQL</Text>
                <Text style={style.card_content_text}>HTML</Text>
              </View>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Formação Acadêmica</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>Python</Text>
                <Text style={style.card_content_text}>SQL</Text>
                <Text style={style.card_content_text}>HTML</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    //alignItems: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container_abecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15
  },
  funcao: {
    color: '#939393',
    marginBottom: 15,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    marginTop: 20,
  },
  card_content: {
    marginTop: 10,
    color: '#939393'
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }
});