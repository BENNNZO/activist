import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
    const [tasks, setTasks] = useState([
        {
            title: 'BREAKFAST',
            boolean: false
        },
        {
            title: 'LUNCH',
            boolean: false
        },
        {
            title: 'DINNER',
            boolean: false
        }
    ])

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>ACTIVIST</Text>
            <ScrollView style={{ flexGrow: 1, paddingTop: 20, backgroundColor: 'white', height: '100%' }}>
                {tasks.map((e, i) => (
                    <ListItem key={i} task={e}/>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250, 250, 250)'
    },
    title: {
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        zIndex: 1,
        paddingTop: 60
    }
});
