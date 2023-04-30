import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, TextInput, Button } from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
    const [tasks, setTasks] = useState([
        { title: 'Breakfast', boolean: null },
        { title: 'Lunch', boolean: null },
        { title: 'Dinner', boolean: null },
        { title: 'Headache', boolean: null },
        { title: 'Exercise', boolean: null },
        { title: 'Shower', boolean: null },
        { title: 'Work', boolean: null },
        { title: 'Game', boolean: null },
        { title: 'Music', boolean: null }
    ])

    function changeBoolean(i, v) {
        setTasks(newTasks => {
            newTasks[i].boolean = v
            return newTasks
        })
    }

    function consoleLogTasks() {
        setInterval(() => {
            console.log(tasks.map(e => { return e.boolean }))
        }, 100);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>ACTIVIST</Text>
            <ScrollView style={{ flexGrow: 1, paddingVertical: 20, backgroundColor: 'rgb(40, 40, 40)' }}>
                {tasks.map((e, i) => (
                    <ListItem key={i} task={e} changeBoolean={changeBoolean} i={i}/>
                ))}
                <Button title='CLG' onPress={() => consoleLogTasks()}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(40, 40, 40)'
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
        paddingTop: 60
    }
});
