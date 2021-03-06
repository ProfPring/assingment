import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Label, Form,  StyleProvider,Button, Container  } from 'native-base';
export default class signupPage extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      given_name: '',
      family_name:'',
      email:'',
      password:'',
    }
  }
  signup(){
    return  fetch("http://10.0.2.2:3333/api/v0.0.5/user/",{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              given_name:  this.state.given_name,
              family_name: this.state.family_name ,
              email: this.state.email,
              password: this.state.password
            })
        }).then((response) => {
            if(response.ok){
              Alert.alert("you have created an account! Welcome to chittr");
            }else{
              Alert.alert("you did not fill in all areas :(");
            }
            console.log("here", responseJson);
        })
        .catch((error) => {
            console.log("error", error);
      });
  }

  render(){
    return(
      <Container style={styles.container} >
          <Button style={styles.back}
              accessible={true}
              onPress={() => 
                this.props.navigation.navigate('login')
              }>
              <Text style={{left: 13, color: "white",   fontSize: 20}}>
                  back
              </Text>
          </Button> 
          <Container style={styles.container}>
          <Label accessible={true} style={styles.emailTittle} >email</Label>
              <TextInput style={{top:70, left:2, fontSize:20, color:"white", position:"absolute" , borderBottomColor: "white",borderBottomWidth: 1,width: "99%",  }}
                  placeholder="|"
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
              ></TextInput>
                    
              <Label accessible={true} style={styles.password} >password</Label>
                <TextInput style={{top:160, left:2, fontSize:20, color:"white", position:"absolute" , borderBottomColor: "white",borderBottomWidth: 1,width: "99%",  }}
                    placeholder="|"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                ></TextInput>

                <Label accessible={true} style={styles.name} >first name </Label>
                    <TextInput style={{top:250, left:2, fontSize:20, color:"white", position:"absolute" , borderBottomColor: "white",borderBottomWidth: 1,width: "99%",  }}
                      placeholder="|"
                      value={this.state.given_name}
                      onChangeText={(given_name) => this.setState({ given_name })}
                ></TextInput>

                <Label accessible={true} style={styles.givenname} >second name</Label>
                  <TextInput style={{top:350, left:2, fontSize:20, color:"white", position:"absolute" , borderBottomColor: "white",borderBottomWidth: 1,width: "99%",  }}
                    placeholder="|"
                    value={this.state.family_name}
                    onChangeText={(family_name) => this.setState({ family_name })}
                  ></TextInput>
                   

        </Container>

        <TouchableOpacity
                   style={styles.submit}
                    onPress={() => 
                        this.signup().then(()=>{
                          this.props.navigation.navigate('login')
                      })
                    }>
                  <Text style={{textAlign: "center", color: "white", fontSize: 20, top: 4}}>
                      sign up
                  </Text>
               </TouchableOpacity>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  submit:{
    width: 74,
    height: 40,
    top: -610,
    textAlign: "center",
    color:"white",
    fontSize: 20,
    left:329,
    borderWidth: 1,
    borderColor: "white"
},
  container: {
    flex: 1,
    width: null,
    //backgroundColor: 'transparent',
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "column",
    backgroundColor: "#1b2836"
 },
  back:{
    height: 40,
    textAlign: 'center',
    width: 74,
    top: 5,
    textAlign: "center",
    backgroundColor:"#ce1d1d",
    color:"white",
    fontSize: 20,
    left: 10,
    borderWidth: 0,
    borderColor: "white"
  },
    PPtittle: {
      color: "#aaaaaa", 
      flex: 1,
      left: 5, 
      fontSize: 20,
      top: 410, 
      position: "absolute"
      
  },
  emailTittle: {
      color: "#aaaaaa", 
      flex: 1,
      left: 5, 
      fontSize: 20,
      top: 50, 
      position: "absolute"
      
  },
  givenname: {
      color: "#aaaaaa", 
      flex: 1,
      left: 5, 
      fontSize: 20,
      top: 320, 
      position: "absolute"
  },
  name: {
      color: "#aaaaaa", 
      flex: 1,
      left: -1, 
      fontSize: 20,
      top: 230, 
      position: "absolute"
  },
  password: {
      color: "#aaaaaa", 
      flex: 1,
      left: 5, 
      fontSize: 20,
      top: 140, 
      position: "absolute"
  }
})