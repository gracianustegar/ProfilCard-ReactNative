import React, { Component , useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image, ImageBackground, Linking, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <ScrollView>
          {/* Backgroud atas */}
          <TouchableOpacity>
            <View style={styles.backgroundatas}>
            <Text></Text>
          </View>
          </TouchableOpacity>

          {/* img + nama */}
          <View style={{alignItems: 'center',}}>
            <Image source={require('./src/images/img1.png')}
              style={styles.img}/>
            <Text style={styles.username}>Gracianus Tegar</Text>
          </View>


          {/* tulisan bawah name */}
          <View style={{ alignItems: 'center', marginTop: 15, }}>
            <Text style={styles.paragraf}> Saya siswa SMKN 2 SURAKARTA, 
            </Text>
            <Text style={styles.paragraf}> Jurusan Rekayasa Perangkat Lunak / RPL.
            </Text>
            <Text style={styles.paragraf}>  Saya kelas 12 RPL B 
            </Text>
            {/* <Text style={{ fontSize: 10, fontWeight: '100', }}>dummy text ever since the 1500s,
            </Text> */}
          </View>



          {/* icon data */}
          <View style={{ alignItems: 'center', alignContent: 'center',  marginTop: 8,}}>
            <View style={{ margin: '10%',}}>
            <View style={{flexDirection: 'row', }}>
                <Ionicon name="phone-portrait-outline" size={35} style={styles.coloricondata} />
                <TouchableOpacity>
                  <Text style={styles.texticondata}
                  onPress={() => Linking.openURL('https://web.whatsapp.com')}>+62856 0200 2748</Text>
                </TouchableOpacity>l
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
                <Ionicon name="location-outline" size={35} style={styles.coloricondata} />
                <TouchableOpacity>
                  <Text style={styles.texticondata}
                  onPress={() => Linking.openURL('https://maps.com')}>Surakarta, Jawa Tengah</Text>
                </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
                <Ionicon name="mail-outline" size={32} style={styles.coloricondata} />
                <TouchableOpacity>
                  <Text style={styles.texticondata1}
                  onPress={() => Linking.openURL('https://gmail.com')}>gracianustegar@smkn2-solo.net</Text>
                </TouchableOpacity>
          </View>
          </View>
          </View>
          
          


          {/* icon sosmed */}
          <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 100, }}>
            <View style={{ flexDirection: 'row',  }}>
              <TouchableOpacity>
                <Icon name='facebook' size={25} style={{color: '#ADADAD'}}
                onPress={() => Linking.openURL('https://facebook.com')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicon name='logo-instagram' size={25} style={styles.iconsosmed}
                onPress={() => Linking.openURL('https://instagram.com')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicon name='logo-twitter' size={25} style={styles.iconsosmed}
                onPress={() => Linking.openURL('https://twitter.com')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name='telegram' size={25} style={styles.iconsosmed}
                onPress={() => Linking.openURL('https://telegram.com')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicon name='logo-github' size={25} style={styles.iconsosmed}
                onPress={() => Linking.openURL('https://github.com')}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundatas: {
    padding: 10,
    width: '100%',
    backgroundColor: '#9A8453',
    height: 150,
    elevation: 5,
    position: 'relative',
  },

  username: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,  
  },

  img: {
    width: 140,
    height: 140,
    marginTop: -70,
    borderWidth: 7,
    borderColor: '#fff',
    borderRadius: 70,
    shadowOffset: 100,
  },

  paragraf: {
    fontSize: 12,
    fontWeight: '200',
    color: '#676767',
  },

  coloricondata: {
    color: '#000'
  },

  texticondata: {
    marginTop: 7,
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
    letterSpacing: 1,
  },
  texticondata1: {
    marginTop: 7,
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
    letterSpacing: 0.1,
  },

  iconsosmed: {
    marginLeft: 32,
    color: '#ADADAD' 
  }
})


export default App;