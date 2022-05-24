import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Login = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container1}>
        <View style={styles.img}>
          <Image
            source={require('/Users/mobiloitte/Desktop/Focus/IMG-20220512-WA0005-removebg-preview.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.text1}>
          <Text style={styles.docttext}>DOCTOR BOOKING</Text>
        </View>
        <View style={styles.innerv}>
          <View style={styles.main}>
            <TextInput
              placeholder="Email ID"
              style={styles.placeholder}
              placeholderTextColor={'white'}
              maxLength={30}
            />
          </View>
          <View style={styles.main1}>
            <TextInput
              placeholder="Password"
              style={styles.placeholder}
              placeholderTextColor={'white'}
              maxLength={16}
            />
          </View>
        </View>
        <View style={styles.log}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom1}>
          <View style={styles.bottom2}>
            <View style={styles.bottom3}>
              <Text style={styles.text3}>By signing you will be agree to</Text>
              <Text style={styles.text3}>
                our<Text style={styles.text4}> Terms of Services</Text> &{' '}
                <Text style={styles.text5}>Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom4}>
          <View style={styles.bottom5}>
            <Text style={styles.text6}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.text6}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'rgb(44,72,161)',
    height: height * 1,
  },
  logo: {
    height: height * 0.16,
    width: width * 0.39,
    alignSelf: 'center',
  },
  text1: {
    // backgroundColor:'green',
    height: height * 0.05,
    alignSelf: 'center',
    // width:width*1
  },

  main: {
    height: height * 0.07,
    // backgroundColor:'red',
    width: width * 0.9,
    alignSelf: 'center',
  },
  main1: {
    // backgroundColor:'green',
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    height: height * 0.05,
    fontSize: 17,
    color: 'white',
  },
  text: {
    alignSelf: 'center',
  },
  touch: {
    backgroundColor: 'rgb(22,49,108)',
    height: height * 0.05,
    width: width * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16.6,
    fontWeight: 'bold',
  },
  img: {
    //   backgroundColor:'black',
    height: height * 0.24,
    justifyContent: 'flex-end',
  },

  docttext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },
  innerv: {
    // backgroundColor:'cyan',
    height: height * 0.19,
    justifyContent: 'center',
  },
  log: {
    // backgroundColor:'black',
    height: height * 0.1,
    justifyContent: 'center',

    width: width * 1,
  },
  bottom1: {
    height: height * 0.26,
    // backgroundColor:'green',
    justifyContent: 'flex-end',
  },
  bottom2: {
    // backgroundColor:'red',
    height: height * 0.07,
  },
  bottom3: {
    // backgroundColor:'grey',
    height: height * 0.07,
    width: width * 0.67,
    alignSelf: 'center',
  },
  text3: {
    fontSize: 15,
    color: 'white',
    // backgroundColor:'green',
    textAlign: 'center',
    height: height * 0.027,
  },
  text4: {
    color: 'black',
    fontSize: 15,
  },
  text5: {
    color: 'black',
    fontSize: 14,
  },
  bottom4: {
    // backgroundColor:'green',
    height: height * 0.1,
    justifyContent: 'flex-end',
  },
  bottom5: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text6: {
    color: 'white',
    fontSize: 16,
  },
});
