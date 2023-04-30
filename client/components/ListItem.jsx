import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons'

export default function ListItem({ task }) {
    const translateX = useSharedValue(0)
    const checkSize = useSharedValue(1)
    const trashSize = useSharedValue(1)

    const panGesture = useAnimatedGestureHandler({
        onStart: (e, c) => {
            c.translateX = translateX.value
        },
        onActive: (e, c) => {
            translateX.value = e.translationX + c.translateX
            console.log(translateX.value)
        },
        onEnd: () => {
            translateX.value > 95 ? (
                console.log('green'),
                translateX.value = withSpring(100),
                checkSize.value = withSpring(1.75),
                trashSize.value = withSpring(1)
            ) : translateX.value < -95 ? (
                console.log('red'),
                translateX.value = withSpring(-100),
                trashSize.value = withSpring(1.75),
                checkSize.value = withSpring(1)
            ) : (
                translateX.value = withSpring(0),
                trashSize.value = withSpring(1),
                checkSize.value = withSpring(1)
            )
        }
    })

    const taskStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }))

    const checkStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: checkSize.value
        }]
    }))

    const trashStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: trashSize.value
        }]
    }))

    return (
        <View style={styles.taskContainer}>
            <Animated.View style={[styles.iconContainer, { left: '12%' }, checkStyle]}>
                <FontAwesome5 name={'check'} size={30} color={'lightgreen'}/>
            </Animated.View>
            <Animated.View style={[styles.iconContainer, { right: '12%' }, trashStyle]}>
                <FontAwesome5 name={'times'} size={30} color={'salmon'}/>
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[styles.task, taskStyle]}>
                    <Text style={{ fontSize: 20 }}>{task.title}</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 15
    },
    task: {
        width: '40%',
        height: 50,
        backgroundColor: 'rgba(250, 250, 250, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10
    },
    iconContainer: {
        height: '100%',
        position: 'absolute',
        justifyContent: 'center'
    }
})