
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import Index from './src';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar hidden />
      <Index />
    </NativeBaseProvider>

  );
}


