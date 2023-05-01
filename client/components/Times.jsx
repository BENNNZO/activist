import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Times() {
    const [wakeUp, setWakeUp] = useState(new Date())
    const [sleep, setSleep] = useState(new Date())

    function handleTimeSubmit() {
        console.log('submit')
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'rgb(240, 240, 240)' }}>Wake Up:</Text>
                <DateTimePicker mode="time" value={wakeUp} onChange={e => setWakeUp(new Date(e.nativeEvent.timestamp))} themeVariant='dark' display='clock'/>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'rgb(240, 240, 240)' }}>Sleep:</Text>
                <DateTimePicker mode="time" value={sleep} onChange={e => setSleep(new Date(e.nativeEvent.timestamp))} themeVariant='dark' display='clock' minimumDate={new Date()}/>
            </View>
            <Button 
                title='Submit'
                onPress={handleTimeSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        flex: 1,
        gap: 10,
        paddingHorizontal: 50
    }
})