import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ReferralCodeInput = ({navigation}: {navigation: any}) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isCodeFocused, setIsCodeFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          نام خودت رو این قسمت وارد کن، در صورت معرف کد معرف رو وارد کن.
        </Text>

        <View
          style={[
            styles.inputContainer,
            isNameFocused && {borderColor: '#436FF2', borderWidth: 1.5},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="نام"
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            isCodeFocused && {borderColor: '#436FF2', borderWidth: 1.5},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="کد معرف (اختیاری)"
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(false)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextScreen')}>
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
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    height: '100%',
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

export default ReferralCodeInput;
