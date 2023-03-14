// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaViewBase, StatusBar } from 'react-native';
import {colors} from "./src/utils/colors";
import Focus from './src/features/Focus';


export default function App() {
  return (
    <View style={styles.container}>
        <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.white,
  }
});
