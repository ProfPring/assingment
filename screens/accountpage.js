import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class AccountPage extends Component {
    render() {
        return (

            <View>
                <Button
                    title="home screen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />


             <Text>
                account page
            </Text>

            </View>
        );
    }
}
export default AccountPage;