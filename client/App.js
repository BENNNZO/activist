import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, FlatList } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  height: 64,
  width: 64
}

export default function App() {
  const [text, setText] = useState('')
  const images = []

  for (let i = 0; i < 30; i++) {
    images.push(<Image key={i} source={logo} />)
  }

  return (
    <>
      <StatusBar style="auto" />
      <View>
        <Text
          style={{
            height: 100,
            width: '100%',
            padding: 10,
            paddingTop: 70,
            backgroundColor: 'rgb(240, 240, 240)'
          }}
        >Nav bar right here</Text>
      </View>
      <View>
        <FlatList 
          data={[
            {text: 'hello'},
            {text: 'world'},
            {text: 'how'},
            {text: 'are'},
            {text: 'you'},
            {text: 'today'}
          ]}
          renderItem={({item}) => <Text style={{ width: 100 }}>{item.text}</Text>}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Hello World!</Text>
        <TextInput
          style={{ height: 40, width: 300, borderWidth: 1, borderRadius: 5, padding: 5 }}
          placeholder="Type Your Text Here To Translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text
          style={{ padding: 10, fontSize: 42 }}
        >{text.split(' ').map(word => word && '🍕iokcvbfjlgudoip9 0-[=').join(' ')}</Text>
        <View>
          {images.map((e, i) => {
            return (e)
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
