import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const VerificationCode = ({navigation}: {navigation: any}) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

  const refs = Array.from({length: otp.length}, () =>
    React.createRef<TextInput>(),
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>لطفا کد ارسال شده رو وارد کن.</Text>

        {/* Outer Box */}
        <View style={styles.otpOuterBox}>
          {otp.map((digit, index) => (
            <React.Fragment key={index}>
              <TextInput
                ref={refs[index]}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={value => handleInputChange(value, index)}
              />
              {/* Add separator except for the last input */}
              {index < otp.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Name')}>
        <Text style={styles.buttonText}>ادامه</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  otpOuterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#436FF2',
    borderRadius: 16,
    width: '90%',
    height: 48,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  otpInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#D3D3D3',
  },
  button: {
    width: '90%',
    backgroundColor: '#436FF2',
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default VerificationCode;
