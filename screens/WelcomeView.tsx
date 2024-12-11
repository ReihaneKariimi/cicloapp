import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppImages } from '../src/assets';

const WelcomeView = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Image source={AppImages.welcome} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>سلامت زنان</Text>
      <Text style={styles.subtitle}>
        اپلیکیشن ردیابی و پیش‌بینی پریود به شما این امکان را می‌دهد که سیکل پریود خود را وارد کنید، به کمک تقویم پریود، دوره پریود‌ و تخمک گذاری بعدی‌تان را محاسبه کنید.
      </Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')} 
      >
        <Text style={styles.signUpText}>شروع کنید</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  signUpButton: {
    backgroundColor: '#436ff2',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 25,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default WelcomeView;
