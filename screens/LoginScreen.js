import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  
  const handleLogin = () => {
    if (onLogin) onLogin(); 
  };

  return (
    <View style={styles.container}>
     
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />

      <Text style={styles.signInText}>Sign in with</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image source={require('../assets/fb.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/li.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/tw.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>Or</Text>
        <View style={styles.line} />
      </View>

      <TextInput placeholder="Email address" placeholderTextColor="#555" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#555" style={styles.input} secureTextEntry />

      <View style={styles.optionsRow}>
        <View style={styles.checkboxContainer}>
         
          <Text style={styles.rememberMe}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don’t have an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: Platform.OS === 'android' ? 60 : 100,
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
    color: '#333',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  or: {
    marginHorizontal: 10,
    color: '#999',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 18,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMe: {
    marginLeft: 6,
    color: '#333',
  },
  forgot: {
    color: '#007bff',
  },
  loginBtn: {
    backgroundColor: '#1a5cff',
    paddingVertical: 12,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
});
