import React from 'react'
import {Button, Text, View} from 'react-native'
import {connect} from "react-redux";

const Test = (props) => {
     return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Test Screen</Text>
            {props.displayThat
                ? <Text>Je suis vivant</Text>
                : <Text>Je suis mort</Text>
            }
            <Button
                title="Go to DisplayItem"
                onPress={() => props.navigation.navigate('DisplayItem')}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        displayThat: state.displayThat
    }
}

export default connect(mapStateToProps)(Test)
