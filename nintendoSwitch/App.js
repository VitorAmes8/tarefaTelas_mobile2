import { StyleSheet, Text, View, Image} from 'react-native';
import { nintendo, smashBros } from './fotos';

export default function App() {

  return (
    <View style={styles.container}>

    <View style={styles.cabecalho}>
      <Image style={styles.fotoNintendo} source= {nintendo}/>
      <Text style={styles.textoNintendo}>Nintendo Switch</Text>
    </View>

    <View style={styles.containerBaixo}>
      <Text style={styles.principais}>Os principais jogos estão aqui</Text>
        <Image style={styles.fotoSmash} source= {smashBros}/>
      <Text style={styles.textoSmash}>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros., The Legends of Zelda, Mario Kart e muitas outras</Text>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    
container: {
  flex: 1,
  alignItems: 'center',
  textAlign: 'center',
  },

cabecalho:{
  alignItems: 'center',
  width: '100%',
  height: 200,
  backgroundColor: "red",
},

fotoNintendo:{
  width: 120,
  height: 120,
},

textoNintendo:{
  marginTop: 12,
  fontWeight: 'bold',
  fontSize: 20,
  color: 'white'
},

textoSmash:{
  fontWeight: '500',
  fontSize: 18,
  marginRight: 25,
  marginLeft: 25,
},

containerBaixo:{
  alignItems: 'center',
  marginTop: 25,
},

principais:{
  fontSize: 22,
  color: 'black',
  fontWeight: 'bold',
},

fotoSmash:{
  marginTop: 15,
  marginBottom: 15,
  width: 200,
  height: '100%',
},

});