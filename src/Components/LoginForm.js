import React, { Component } from 'react';
import firebase from 'firebase'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Input from './Input'

export default class LoginForm extends Component{
    
    state={
        email:'',
        password:''
}

onPressButton (){
    const {email,password} =this.state
firebase.auth().signInWithEmailAndPassword(email, password);
}
    
    render(){
        return(
            
                <Card>
                    {/* 
                    ===================
                    Username/Email-Section
                    =================== */}
                    <CardSection>
                        <Input 
                        placeholder="Enter your Email"
                       label = "Email"
                       onChangeText={(email)=>this.setState({email})}
                        value={this.state.email}
                       />
                    </CardSection>
                    
                    {/* 
                    ===================
                    Password- Section  
                    ===================*/}
                    <CardSection>
                        <Input 
                            secureTextEntry={true}
                            placeholder= "Password"
                            label ="Password"
                            onChangeText ={(password)=>this.setState({password})}
                            value= {this.state.password}
                         />   

                    </CardSection>
        
                    {/* 
                    ===================
                    Login-Button Section
                    ==================== */}
                    <CardSection>
                        <Button
                        onPressButton={this.onPressButton.bind(this)}
                        >Login</Button>
                    </CardSection>
                </Card>
           
        )
    }
}