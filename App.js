/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Instabug from 'instabug-reactnative';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  const text1Ref = useRef();
  const text2Ref = useRef();

  useEffect(() => {
    Instabug.start('token', [Instabug.invocationEvent.shake]);
    Instabug.addPrivateView(text1Ref.current);
    Instabug.addPrivateView(text2Ref.current);
  }, []);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        ref={text1Ref}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        ref={text2Ref}
      />
      <Pressable
        onPress={() => Instabug?.show()}
        style={{
          backgroundColor: 'gray',
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Text>Open Instabug</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
