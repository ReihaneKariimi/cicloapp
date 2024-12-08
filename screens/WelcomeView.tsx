import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppImages } from '../src/assets';  

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      {/* */}
      <Image
        source={AppImages.welcome} 
        style={styles.image}
        resizeMode="contain"
      />

      {/* */}
      <Text style={styles.title}>سلامت زنان</Text>
      <Text style={styles.subtitle}>
      اپلیکیشن ردیابی و پیش‌بینی پریود به شما این امکان را می‌دهد که سیکل پریود خود را وارد کنید، به کمک تقویم پریود، دوره پریود‌ و تخمک گذاری بعدی‌تان را محاسبه کنید.
      </Text>

      {/* */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>ثبت نام کنید</Text>
      </TouchableOpacity>

      {/* */}
      <Text style={styles.loginText}>
      از قبل حساب کاربری دارید؟{' '}
        <Text style={styles.loginLink}>وارد شوید</Text>
      </Text>
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
    paddingVertical: 15,
    paddingHorizontal: 40,
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
  },
  loginText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 14,
    color: '#1E223F',
    fontWeight: '700',
  },
});

export default WelcomeView;