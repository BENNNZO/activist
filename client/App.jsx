import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import BooleanItem from './components/BooleanItem';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import DateTimePicker from '@react-native-community/datetimepicker';

const getFonts = () => {
    Font.loadAsync({
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf")
    })
}

export default function App() {
    const [date, setDate] = useState(new Date())
    const [fontLoaded, setFontLoaded] = useState(false)
    const [tasks, setTasks] = useState([
        { title: 'Breakfast', boolean: null },
        { title: 'Lunch', boolean: null },
        { title: 'Dinner', boolean: null },
        // { title: 'Headache', boolean: null },
        // { title: 'Exercise', boolean: null },
        // { title: 'Shower', boolean: null },
        // { title: 'Work', boolean: null },
        // { title: 'Game', boolean: null },
        // { title: 'Music', boolean: null }
    ])

    function changeBoolean(i, v) {
        setTasks(newTasks => {
            newTasks[i].boolean = v
            return newTasks
        })
        // console.log(tasks.map(e => { return e.boolean }))
    }

    function handleSubmit() {

    }

    if (fontLoaded) {  
        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <Text style={styles.title}>ACTIVIST</Text>
                <ScrollView style={{ flexGrow: 1, paddingTop: 20 }}>
                    {tasks.map((e, i) => (
                        <BooleanItem key={i} task={e} changeBoolean={changeBoolean} i={i}/>
                    ))}
                    {/* <Button title='CLG' onPress={() => consoleLogTasks()}/> */}
                    <Button title='Submit' onPress={handleSubmit} />
                    <DateTimePicker mode="time" value={new Date()} onChange={setDate} themeVariant='dark' display='spinner'/>
                    <View style={{ height: 500 }}>
                        <Text>Footer</Text>
                    </View>
                </ScrollView>
            </View>
        )
    } else {
        return (
            <AppLoading
              startAsync={getFonts}
              onFinish={() => {
                setFontLoaded(true);
              }}
              onError={console.warn}
            />
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(45, 45, 45)'
    },
    title: {
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: 'rgb(50, 50, 50)',
        color: 'rgb(220, 220, 220)',
        fontSize: 40,
        // fontFamily: 'SFUIDisplay-Medium',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        zIndex: 1,
        paddingTop: 60,
        fontFamily: 'Poppins-Regular'
    }
});
