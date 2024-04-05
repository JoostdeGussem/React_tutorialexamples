import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonScreen from './components/LittleLemonScreen';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>
      <View 
        style={{ 
          height: 700,
          backgroundColor: '#495E57', 
        }}>
        <LittleLemonScreen />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
