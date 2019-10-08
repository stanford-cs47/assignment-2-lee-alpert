import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
      <View style={styles.container}>
        <View style={[styles.box1]} >
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={[styles.topButton, { tintColor: 'darkgray'}]}
              source={require('./App/Images/gear.png')}
          />
          </TouchableOpacity>
          <Image
              style={styles.logo}
              source={require('./App/Images/tinder-logo.png')}
            />
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={[styles.topButton, { tintColor: 'darkgray'}]}
              source={require('./App/Images/chatting.png')}
          />
          </TouchableOpacity>
        </View>



        <View style={[styles.box2]}>
          <Image
              source={require('./App/Images/Profiles/harold.jpg')}
            />
          <Text style = {{marginVertical: 4, marginHorizontal: 2, fontSize: 24}}>  <B>Harold</B>, 65</Text>
          <Text style = {{color: 'darkgray', margin: 2, fontSize: 16}}>  Internet meme </Text>
        </View>


        <View style={[styles.box3]} >
          <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainer}>
            <Image
              style={styles.button}
              source={require('./App/Images/rewind.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainerBig}>
            <Image
              style={styles.buttonBig}
              source={require('./App/Images/nope.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainer}>
            <Image
              style={styles.button}
              source={require('./App/Images/boost.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainerBig}>
            <Image
              style={styles.buttonBig}
              source={require('./App/Images/like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainer}>
            <Image
              style={styles.button}
              source={require('./App/Images/super-like.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
    box1: {
    flex: 0.25,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'darkgray',
  },
  box2: {
    flex: 1,
    borderWidth: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginHorizontal: 25,
    marginVertical: 60,
    backgroundColor: 'white',
    borderColor: 'darkgray',
  },
  box3: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    marginVertical: 60,
  },
  button: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 20,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  buttonBig: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  buttonContainerBig: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 20,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  logo: {
    height: 40,
    width: 150,
    resizeMode: 'contain',
  },
  topButton: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});