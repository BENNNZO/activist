import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, FlatList, SectionList } from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    height: 64,
    width: 64
}

export default function App() {
    const dataPoints = {
        times: [
            { title: 'Wake Up' },
            { title: 'Sleep' }
        ],
        scale: [
            { title: 'Mood' },
            { title: 'Energy' }
        ],
        boolean: [
            { title: 'Breakfast' },
            { title: 'Lunch' },
            { title: 'Dinner' },
            { title: 'Headache' },
            { title: 'Excersise' },
            { title: 'Shower' },
            { title: 'Work' },
            { title: 'Game' },
            { title: 'Music' }
        ]
    }    

    return (
        <>
            <StatusBar style="auto" />
            <Text style={{ height: 100, padding: 50, textAlign: 'center' }}>Nav Bar Area</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Times</Text>
                {dataPoints.times.map((e, i) => {
                    return (
                        <Text style={styles.item}>{e.title}</Text>
                        )
                    })}
                <Text style={styles.title}>Scales</Text>
                {dataPoints.scale.map((e, i) => {
                    return (
                        <Text style={styles.item}>{e.title}</Text>
                        )
                    })}
                <Text style={styles.title}>Booleans</Text>
                {dataPoints.boolean.map((e, i) => {
                    return (
                        <Text style={styles.item}>{e.title}</Text>
                    )
                })}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 30
    },
    item: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgb(220, 220, 220)',
        borderRadius: 10,
        width: '80%',
        textAlign: 'center'
    }
});
