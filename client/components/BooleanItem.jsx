import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons'

export default function BooleanItem({ task, changeBoolean, i }) {
    const translateX = useSharedValue(0)
    const taskWidth = useSharedValue(75)
    const iconsSize = useSharedValue([0, 0])
    const iconsXPos = useSharedValue([35, 35])
    const rgbValue = useSharedValue([45, 45, 45])

    const panGesture = useAnimatedGestureHandler({
        onStart: (e, c) => {
            c.translateX = translateX.value
        },
        onActive: (e, c) => {
            translateX.value = e.translationX + c.translateX
            // console.log(translateX.value)
        },
        onEnd: () => {
            translateX.value > 95 ? (
                runOnJS(changeBoolean)(i, true),
                translateX.value = withSpring(100),
                iconsSize.value = withTiming([1.75, 0]),
                iconsXPos.value = withSpring([25, 35]),
                rgbValue.value = withTiming([45, 150, 45]),
                taskWidth.value = withSpring(38)
            ) : translateX.value < -95 ? (
                runOnJS(changeBoolean)(i, false),
                translateX.value = withSpring(-100),
                iconsSize.value = withTiming([0, 1.75]),
                iconsXPos.value = withSpring([35, 25]),
                rgbValue.value = withTiming([150, 45, 45]),
                taskWidth.value = withSpring(38)
            ) : (
                runOnJS(changeBoolean)(i, null),
                translateX.value = withSpring(0),
                iconsSize.value = withTiming([0, 0]),
                iconsXPos.value = withSpring([35, 35]),
                rgbValue.value = withTiming([45, 45, 45]),
                taskWidth.value = withSpring(75)
            )
        }
    })

    const taskStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }],
        backgroundColor: `rgba(${rgbValue.value[0] + 30}, ${rgbValue.value[1] + 30}, ${rgbValue.value[2] + 30}, 0.5)`,
        width: `${taskWidth.value}%`
    }))

    const checkStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: iconsSize.value[0]
        }],
        left: `${iconsXPos.value[0]}%`
    }))

    const trashStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: iconsSize.value[1]
        }],
        right: `${iconsXPos.value[1]}%`
    }))

    const rTaskContainer = useAnimatedStyle(() => ({
        backgroundColor: `rgb(${rgbValue.value[0]}, ${rgbValue.value[1]}, ${rgbValue.value[2]})`
    }))

    return (
        <Animated.View style={[styles.taskContainer, rTaskContainer]}>
            <Animated.View style={[styles.iconContainer, checkStyle]}>
                <FontAwesome5 name={'check'} size={30} color={'lightgreen'}/>
            </Animated.View>
            <Animated.View style={[styles.iconContainer, trashStyle]}>
                <FontAwesome5 name={'times'} size={30} color={'salmon'}/>
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[styles.task, taskStyle]}>
                    <Text style={{ fontSize: 20, color: 'rgb(220, 220, 220)', fontFamily: 'Poppins-Regular' }}>{task.title}</Text>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        overflow: 'visible'
    },
    task: {
        height: 60,
        backgroundColor: 'rgb(60, 60, 60)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    LinearGradient: {
        width: '100%',
        height: 80
    },  
    iconContainer: {
        height: 80,
        position: 'absolute',
        justifyContent: 'center'
    }
})