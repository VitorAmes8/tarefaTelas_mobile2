import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { quadro, fotoSamuel } from './fotos';

export default function App() {

  return (
    <View style={styles.container}>

    <View style={styles.cabecalho}>
      <Text style={styles.textoCabecalho}>ATOR FAMOSO</Text>
    </View>

    <View style={styles.containerCima}>
      <View style={styles.samuel}>
        <Image style={styles.fotoSamuel} source= {fotoSamuel}/>
        <View style={styles.descricaoSamuel}>
          <Text style={styles.tituloSamuel}>Samuel Jackson</Text>
          <Text style={styles.subTituloSamuel}>Ator e produtor norte-americano</Text>
       </View>
     </View>
    </View>

    <View style={styles.containerBaixo}>
      <Text style={styles.tituloBaixo}>Sobre o Ator</Text>
      <View styles={styles.topicos}>
        <Text style={styles.tituloTopico}>Sua Vida</Text>
        <Text style={styles.textoTopico}>Nascido em Washington, DC, 21 de dezembro de 1948<br></br>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College</Text>
      </View>

      <View styles={styles.topicos}>
        <Text style={styles.tituloTopico}>Inicio de Carreira</Text>
        <Text style={styles.textoTopico}>Seu primeiro filme se chama Together for Days que estreou em 1972</Text>
      </View>
      <Image style={styles.quadro} source= {quadro}/>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    
container:{
  flex: 1,
  alignItems: 'center',
  textAlign: 'center',
},

cabecalho:{
  width: '100%',
  height: 55,
  backgroundColor: '#0C4491',
},

textoCabecalho:{
  marginTop: 12,
  marginLeft: 12,
  fontWeight: 500,
  fontSize: 20,
  color: 'white',
  textAlign: 'left',
},

containerCima:{
  alignItems: 'center',
  width: '100%',
  height: 300,
  backgroundColor: '#0A1C35',
},

samuel:{
  marginTop: 20,
  border: '1px solid',
  borderRadius: 20,
},

descricaoSamuel:{
  width: '100%',
  height: 60,
  backgroundColor: 'white',
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
},

fotoSamuel:{
  height: 200,
  width: 250,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},

tituloSamuel:{
  marginTop: 5,
  fontSize: 18,
  color: 'black',
  fontWeight: '500',
},

subTituloSamuel:{
  color: 'black',
  marginTop: 5,
  fontSize: 13,
  fontWeight: '400',
},

containerBaixo:{
  textAlign: 'left',
  margin: 10,
},

tituloBaixo:{
  fontSize: 25,
  fontWeight: 'bold',
},

tituloTopico:{
  marginTop: 10,
  fontSize: 18,
  fontWeight: '700',
},

textoTopico:{
  fontSize: 15,
  fontWeight: '500',
},

quadro:{
  width: 200,
  height: 70,
},

});