import React, { Component } from 'react';
import { View, TextInput} from 'react-native';
import {Card, CardSection, Button } from './reusable-components'

class LoginForm extends Component{
    render(){
        return(
            <View>
                <Card>
                    {/* Username/Email-Section */}
                    <CardSection>
                        <TextInput  />
                    </CardSection>
                    
                    {/*Password- Section  */}
                    <CardSection>


                    </CardSection>
                    
                    {/* Login-Button Section */}
                    <CardSection>
                        <Button>Login</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}