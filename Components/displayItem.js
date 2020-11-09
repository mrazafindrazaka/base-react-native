import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'

const styles = {
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 20
    },
    textInput: {
        height: 50,
        borderColor: 'white',
        textAlign: 'center',
        color: 'white',
        borderWidth: 1,
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white'
    },
}

const DisplayItem = (props) => {
    const [name, setName] = useState('')

    const changeName = (text) => {
        setName(text)
    }
    return (
        <View style={styles.mainContainer}>
            <TextInput onChangeText={(text) => changeName(text)} style={styles.textInput}/>
            <Text style={styles.text}>{name}</Text>
            {props.displayThat
                ? <Text style={styles.text}>Je suis vivant</Text>
                : <Text style={styles.text}>Je suis mort</Text>
            }
            <Button title="Test redux" onPress={() => {
                props.dispatch({type:'TOGGLE_THAT'})
            }}/>
            <Button
                title="Go to Test"
                onPress={() => props.navigation.navigate('Test')}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        displayThat: state.displayThat
    }
}

export default connect(mapStateToProps)(DisplayItem)
