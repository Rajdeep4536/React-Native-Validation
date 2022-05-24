import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
  Image,
  
  
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/FontAwesome';




  
const {width, height} = Dimensions.get('window');

const Signup1 = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [fname, setFname] = useState('');
  const [errorFname, setErrorFname] = useState(null);
  const [lname, setLname] = useState('');
  const [errorLname, setErrorLname] = useState(null);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [username, setUsername] = useState('');
  const [errorUsername, setErrorUsername] = useState(null);
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);
  const [password, setPassword] = useState('');
  const [ErrorPassword, setErrorPassword] = useState(null);
  const [cpassword, setCPassword] = useState('');
  const [Errorcpassword, setErrorcpassword] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const cpasswordValidate = cpassword => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorcpassword('Please enter  confirm password');
    }
    if (!Regex.test(cpassword)) {
      setErrorcpassword('Please enter valid confirm password');
    } else {
      setErrorcpassword(null);
    }
  };
  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Please enter  password');
    }
    if (!Regex.test(password)) {
      setErrorPassword('Please enter valid  password');
    } else {
      setErrorPassword(null);
    }
  };

  const phoneValidate = phone => {
    var Regex = /^[0]?[789]\d{9}$/;

    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('please enter username');
    }
    if (!Regex.test(phone)) {
      setErrorPhone('please enter valid phone no');
    } else {
      setErrorPhone(null);
    }
  };
  const usernameValidate = username => {
    var Regex = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
    if (username === '' || username === undefined || username === null) {
      setErrorUsername('please enter username');
    }
    if (!Regex.test(username)) {
      setErrorUsername('please enter valid username');
    } else {
      setErrorUsername(null);
    }
  };

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(email)) {
      setErrorEmail('please enter valid email');
    } else {
      setErrorEmail(null);
    }
  };

  const lnameValidate = lname => {
    var Regex = /^[a-zA-Z ]{2,40}$/;

    if (lname === '' || lname === undefined || lname === null) {
      setErrorLname('*please enter Lname');
    }
    if (!Regex.test(lname)) {
      setErrorLname('*Last name should be >2');
    } else {
      setErrorLname(null);
    }
  };

  const fnameValidate = fname => {
    var Regex = /^[a-zA-Z ]{2,40}$/;

    if (fname === '' || fname === undefined || fname === null) {
      setErrorFname('*Please enter Fname');
    }
    if (!Regex.test(fname)) {
      setErrorFname('*First name should be >2');
    } else {
      setErrorFname(null);
    }
  };
  const validate = () => {
    const flag = true;
    if (fname == '') {
      setErrorFname('*please enter Fname');
    }
    if (lname == '') {
      setErrorLname('*please enter Lname');
    }
    if (username == '') {
      setErrorUsername('*please enter Username');
    }
    if (phone == '') {
      setErrorPhone('*please enter Phone no');
    }
    if (password == '') {
      setErrorPassword('*please enter Password');
    }
    if (cpassword == '') {
      setErrorCPassword('*please enter Confirm Password');
    }
    return flag;
  };
  const onSubmit = () => {
    if (validate()) {
      alert('You are wrong');
    } else {
      alert('something went wrong');
    }
  };

  // const [text, setText] = useState('');

  return (
    <LinearGradient  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#4c669f', '#3b5998', '#192f6a']}   locations={[0,0.5,0.6]}  style={styles.linearGradient}>
    <View
      style={{
        // backgroundColor: 'rgb(100,10,219)',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          // backgroundColor: 'red',
          height: height * 0.17,
          //   flexDirection: 'row',
          width: width * 1,
        }}>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.13,
            width: width * 0.1,
            // flexDirection: 'row',
            // justifyContent: 'center',
          }}>
          <View
            style={{
              width: width * 0.13,
              flexDirection: 'row',
              height: height * 1,
            }}>
            <View
              style={{
                // backgroundColor: 'blue',
                width: width * 0.11,
                height: height * 0.12,

                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login1')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  ←
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: 'green',
                width: width * 0.74,
                height: height * 0.13,
                justifyContent: 'flex-end',
              }}>
              <Text style={{alignSelf: 'center', fontSize: 35, color: 'white'}}>
                Sign up
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: 'pink',
                width: width * 0.14,
                justifyContent: 'flex-end',
                height: height * 0.12,
              }}>
              <TouchableOpacity onPress={() => Alert.alert('about')}>
                <Text
                  style={{fontSize: 50, alignSelf: 'center', color: 'white'}}>
                  ...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.04,
            width: width * 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // backgroundColor: 'red',
              height: height * 0.05,
              alignSelf: 'center',
              fontSize: 18,
              color: 'white',
            }}>
            Create a new Account
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'rgb(226,226,226)',
          height: height * 0.7,
          width: width * 0.9,
          alignSelf: 'center',
          borderRadius: 15,
        }}>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.1,
            width: width * 0.9,
            borderRadius: 15,
            flexDirection: 'row',
            // alignSelf:'center'
            // justifyContent:"space-between",
          }}>
          <View
            style={{
              // backgroundColor: 'blue',
              width: width * 0.45,
              height: height * 0.11,
              justifyContent: 'center',
            }}>
            <Text>First Name</Text>
            <TextInput
              style={{
                backgroundColor: 'white',
                height: height * 0.04,
                width: width * 0.44,
                alignSelf: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
              }}
              placeholder=""
              placeholderTextColor="red"
              onChangeText={text => {
                setFname(text), fnameValidate(text);
              }}
            />

            {errorFname !== null ? (
              <View
                style={{
                  width: width * 0.43,
                  // backgroundColor: 'green',
                  height: height * 0.019,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', alignSelf: 'center'}}>
                  {errorFname}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              // backgroundColor: 'pink',
              width: width * 0.44,
              justifyContent: 'center',
              height: height * 0.11,
            }}>
            <Text>Last Name</Text>
            <TextInput
              style={{
                backgroundColor: 'white',
                height: height * 0.04,
                width: width * 0.44,
                borderColor: 'black',
                borderWidth: 0.5,
              }}
              placeholder=""
              placeholderTextColor={'red'}
              onChangeText={text => {
                setLname(text), lnameValidate(text);
              }}
            />
            {errorLname !== null ? (
              <View
                style={{
                  width: width * 0.41,
                  // backgroundColor: 'green',
                  height: height * 0.019,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', alignSelf: 'center'}}>
                  {errorLname}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            width: width * 0.9,
            height: height * 0.081,
            borderRadius: 15,
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              // backgroundColor: 'blue',
              width: width * 0.1,
              textAlign: 'center',
            }}>
            Email
          </Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: width * 0.89,
              height: height * 0.04,
              alignSelf: 'center',
              borderColor: 'black',
              borderWidth: 0.5,
            }}
            placeholder=""
            placeholderTextColor={'gray'}
            keyboardType="email-address"
            underlineColorAndroid={'red'}
            maxLength={30}
            onChangeText={text => {
              setEmail(text), emailValidate(text);
            }}
          />

          {errorEmail !== null ? (
            <View
              style={{
                width: width * 0.41,
                // backgroundColor: 'green',
                height: height * 0.019,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errorEmail}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.08,

            width: width * 0.9,
          }}>
          <Text>Username</Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: width * 0.89,
              height: height * 0.04,
              borderColor: 'black',
              borderWidth: 0.5,
              alignSelf: 'center',
            }}
            placeholder=""
            placeholderTextColor={'gray'}
            keyboardType="email-address"
            underlineColorAndroid={'red'}
            maxLength={30}
            onChangeText={text => {
              setUsername(text), usernameValidate(text);
            }}
          />

          {errorUsername !== null ? (
            <View
              style={{
                width: width * 0.5,
                // backgroundColor: 'green',
                height: height * 0.019,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errorUsername}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.087,

            width: width * 0.9,
          }}>
          <Text>Phone No</Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: width * 0.89,
              height: height * 0.04,
              borderColor: 'black',
              borderWidth: 0.5,
              alignSelf: 'center',
            }}
            placeholder=""
            placeholderTextColor={'gray'}
            keyboardType="numeric"
            underlineColorAndroid={'red'}
            maxLength={10}
            onChangeText={text => {
              setPhone(text), phoneValidate(text);
            }}
          />
          {errorPhone !== null ? (
            <View
              style={{
                width: width * 0.48,
                // backgroundColor: 'green',

                height: height * 0.019,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errorPhone}
              </Text>
            </View>
          ) : null}
        </View>
        {/* <View style={{backgroundColor:'red',height:height*0.05}}></View> */}
        <View
          style={{
            // backgroundColor: 'red',
            width: width * 0.9,
            height: height * 0.08,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // backgroundColor: 'green',
              height: height * 0.02,
            }}>
            Password
          </Text>

          <TextInput
            style={{
              backgroundColor: 'white',
              width: width * 0.89,
              height: height * 0.04,
              alignSelf: 'center',
              borderColor: 'black',
              borderWidth: 0.5,
            }}
            placeholder=""
            placeholderTextColor={'gray'}
            keyboardType="email-address"
            underlineColorAndroid={'red'}
            maxLength={30}
            secureTextEntry={passwordVisible}
            onChangeText={text => {
              setPassword(text), passwordValidate(text);
            }}
            // right={
            //   <TextInput.Icon
            //     name={passwordVisible ? 'eye' : 'eye-off'}
            //     onPress={() => setPasswordVisible(!passwordVisible)}
            //   />
            // }
          />
          {ErrorPassword !== null ? (
            <View
              style={{
                // backgroundColor: 'green',
                width: width * 0.5,
                height: height * 0.027,
              }}>
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {ErrorPassword}
              </Text>
            </View>
          ) : null}
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            width: width * 0.9,
            height: height * 0.08,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // backgroundColor: 'green',
              height: height * 0.02,
            }}>
            Confirm Password
          </Text>

          <TextInput
            style={{
              backgroundColor: 'white',
              width: width * 0.89,
              height: height * 0.04,
              alignSelf: 'center',
              borderColor: 'black',
              borderWidth: 0.5,
            }}
            placeholder=""
            placeholderTextColor={'gray'}
            keyboardType="email-address"
            underlineColorAndroid={'red'}
            secureTextEntry={passwordVisible}
            maxLength={30}
            right={
              <TextInput.Icon
                name={!passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            onChangeText={text => {
              setCPassword(text), cpasswordValidate(text);
            }}
          />

          {Errorcpassword !== null ? (
            <View
              style={{
                // backgroundColor: 'green',
                width: width * 0.62,
                height: height * 0.022,
              }}>
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {Errorcpassword}
              </Text>
            </View>
          ) : null}
        </View>

        <View
          style={{
            // backgroundColor: 'blue',
            height: height * 0.04,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{
            // backgroundColor: 'red',
             width: width * 0.08}}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {/* <Image
              source={{
                uri: '/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview (1).png',
              }}
              style={{width: width * 0.06, height: height * 0.03}}
            /> */}
          </View>
          <View>
            <Text
              style={{
                // backgroundColor: 'pink',
                height: height * 0.06,
                width: width * 0.8,
                textAlign: 'center',
                fontSize: 15,
              }}>
              By Signup you agree the term and condition
            </Text>
          </View>
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            height: height * 0.1,
            width: width * 0.9,
            justifyContent: 'center',
          }}>
          {/*      
     <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  /> */}
          <View
            style={{
              backgroundColor: 'green',
              width: width * 0.4,
              alignSelf: 'center',
              height: height * 0.06,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <TouchableOpacity onLongPress={()=> onSubmit()}>
              <Text
                style={{
                  // backgroundColor: 'green',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {' '}
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin:22}}>
          <Icon1 name='heart' />
        </View>
      </View>

    
    </View>
    </LinearGradient>
  );
};
export default Signup1;
const styles = StyleSheet.create({
//      checkbox:{
   
//    },
});
