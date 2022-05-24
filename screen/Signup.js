import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    SafeAreaView,
    TouchableOpacity
  } from 'react-native';
  import React from 'react';
  import { useState } from "react";
  const {height, width} = Dimensions.get('window');
  const isValidObjField =(obj) =>{
    return Object.values(obj).every(value=>value.trim())
  }
  const updateError=(error,stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
      stateUpdater('')
    },2500);
  }
  const isValidEmail = (value)=>{

    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regx.test(value)
  }
  const isValidPhone = (value)=>{
    const regx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    return regx.test(value)
  }
  const Signup= ({navigation}) => {
  
  const[userInfo,setUserInfo]=useState({
  fullName:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword:'',
  })
  const [error,setError]= useState('')
  
  const{fullName,email,phone,password,confirmPassword}=userInfo
  
  const handleOnChangeText=(value, fieldName) => {
   setUserInfo({...userInfo,[fieldName]:value});
  };
  const isValidForm=()=>{
    if (!isValidObjField(userInfo)) return updateError('Required all fields!',setError)
    if(!fullName.trim() || fullName.length <3) return updateError('Invalid name!', setError)
    if (!isValidEmail(email)) return updateError('Invalid email', setError)
    if(!isValidPhone(phone)) return updateError('Phone number is not valid!',setError)
    if(!password.trim()||password.length<8) return updateError('Password is less than 8 characters!',setError)
    if (password!==confirmPassword) return updateError('Password does not match!',setError)
  
  }
  
  
  const submitForm =()=>{
  if (isValidForm()){
    console.log(userInfo)
  }
  }
  
  
    return (
      <SafeAreaView>
        {error? 
          (<Text style={{color:'red',fontSize:18,textAlign:'center'}}>
          {error}</Text>
          ):null}
        <View>
          <View style={styles.main}>
            <Text style={styles.text}> Full name </Text>
          </View>
          <View style={styles.placeholder}>
        
            <TextInput
              value={fullName}
              onChangeText={(value)=> handleOnChangeText(value,'fullName')}
              placeholder="Enter your name"
              keyboardType='default'
              placeholderTextColor="rgb(68,68,68)"
              style={styles.placeholder1}
            />
          
          </View>
         
          <View style={styles.main}>
            <Text style={styles.text}> Email </Text>
          </View>
          <View style={styles.placeholder}>
            <TextInput
              value={email}
              onChangeText={(value)=> handleOnChangeText(value,'email')}
              placeholder="Enter your Email"
              placeholderTextColor="rgb(68,68,68)"
              style={styles.placeholder1}
            />
          </View>
          
          <View style={styles.main}>
            <Text style={styles.text}> Phone No. </Text>
          </View>
          <View style={styles.placeholder}>
            <TextInput
              value={phone}
              onChangeText={(value)=> handleOnChangeText(value,'phone')}
              placeholder="Enter your number"
              placeholderTextColor="rgb(68,68,68)"
              keyboardType="numeric"
              style={styles.placeholder1}
            />
          </View>
          <View style={styles.main}>
            <Text style={styles.text}> Password </Text>
          </View>
          <View style={styles.placeholder}>
            <TextInput
              value={password}
              onChangeText={(value)=> handleOnChangeText(value,'password')}
              placeholder="Create your password"
              placeholderTextColor="rgb(68,68,68)"
              style={styles.placeholder1}
              maxLength={16}
              secureTextEntry={true}
              keyboardType="default"
             
            />
          </View>
          <View style={styles.main}>
            <Text style={styles.text}> Confirm Password </Text>
          </View>
          <View style={styles.placeholder}>
            <TextInput
              value={confirmPassword} 
              onChangeText={(value)=> handleOnChangeText(value,'confirmPassword')}
              placeholder="Confirm your password"
              style={styles.placeholder1}
              secureTextEntry={true}
              placeholderTextColor="rgb(68,68,68)"
              maxLength={16}
            />
          </View>
          <View style={{margin:46}}>
            <TouchableOpacity style={styles.touch} onPress={submitForm}>
  
           <Text style={styles.submit}>
             Submit
           </Text>
  
            </TouchableOpacity>
            
          </View>
          <View style={{flexDirection:'row',alignSelf:'center',}}>
          <View style={styles.bottom}>
            <Text style={styles.txtbtm}>
              Already have an account?  </Text>     
              
          </View>
          <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
          <Text  style={styles.txtbtm} > Login</Text>
           </TouchableOpacity>
          </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    main: {
      alignSelf: 'center',
      justifyContent: 'center',
      height: height * 0.07,
    },
    text: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    placeholder: {
      color: 'black',
      borderWidth: 1,
      borderRadius: 12,
      width: width * 0.92,
      height: height * 0.07,
      alignSelf: 'center',
      fontSize: 16,
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    placeholder1: {
      fontSize: 16,
    },
    touch:{
    height:height*0.06,
    width:width*0.8,
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:12,
    backgroundColor:'rgb(31,41,41)'
  
  
    },
    submit:{
  alignSelf:'center',
  fontSize:20,
  fontWeight:'bold',
  color:'white'
    },
    bottom:{
    alignSelf:'center',
    
    },
    txtbtm:{
      fontSize:18,

    }
  });
  