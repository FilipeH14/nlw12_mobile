import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View className='bg-grey-950 flex-1 items-center justify-center'>
      <Text className='text-grey-50 font-bold text-5xl'>Hello world</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
