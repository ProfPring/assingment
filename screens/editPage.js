import React, { Component } from 'react';
import { TextInput, ActivityIndicator, AsyncStorage, Text, View, Button, Image, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';



class  editPage extends Component {

        constructor(props) {
            super(props);
            this.state = {
                UserData: [],
                dataReceived: [],
                email:'',
                isLoading: true,
                user_id: 0,
                given_name:'',
                family_name:'',
                chit_id: 0,
                timestamp: 0,
                chit_content:'',
                location:{},
                longitude: 0,
                latitude: 0, 
                token:'', 
                photo:'', 
                photoData: null,      
                filename:''      
            }
        }
        // save the chit content to be used in the drafts page.
        saveChit = async()=>{
              AsyncStorage.setItem('ChitContent', JSON.stringify(this.state.chit_content));
        }
        componentDidMount() {
        }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                      accessible={true}
                      placeholder="edit"
                      style={styles.inputText}
                      value={this.state.chit_content}
                      onChangeText={(chit_content) => this.setState({ chit_content })}
                      maxLength = {147}  
                >   
                
                </TextInput>

                <TouchableOpacity accessible={true} style={styles.edit}
                    onPress={() =>
                            this.saveChit().then(()=> {
                              this.props.navigation.navigate('drafts');
                            })
                    }
                >
                    <Text style={styles.editChitText}>
                        save
                    </Text>
                </TouchableOpacity>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        color: "white",
        fontSize: 20,
        top: 30
        
    },

    edit:{
        width: 60,
        top: -40,
        left: 338,
        borderWidth: 1,
        borderColor: "white"
    },

    Drafts:{
        width: 60,
        top: -69,
        left: 270,
        borderWidth: 1,
        borderColor: "white"
    },
    Images:{
        width: 100,
        top: 430,
        left: 290,
        borderWidth: 1,
        borderColor: "white"
    },

    editChitText: {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    },  
    wrapper: {
        display: "flex", 
        flex: 1,
        backgroundColor:'#1b2836',	
        borderColor: 'white',
        borderWidth: 3,
        left: 0,
        width: "100%",
        height: "100%", 
        top: 3

    },




})



export default editPage;