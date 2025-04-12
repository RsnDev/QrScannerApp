
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#6a9dfc', '#8ec5fc']} style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.name}>Smt. MAMTA MISHRA</Text>
      </LinearGradient>

      <View style={styles.infoContainer}>
        {[
          ['MR No.', 'MR/18/000126'],
          ['Gender', 'Female'],
          ['Date of Birth', 'Oct 2, 1975'],
          ['Age', '43'],
          ['Phone', '+91 - 8693834636'],
          ['Email', 'rudram.43@gmail.com'],
          ['Blood Group', 'A-'],
          ['Marital Status', 'Married'],
          ['Occupation', 'HOUSE WIFE'],
        ].map(([label, value], index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 30,
    flexGrow:1,
  },
  header: {
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  welcome: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  infoContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  label: {
    color: '#333',
    fontWeight: '500',
  },
  value: {
    color: '#555',
    textAlign: 'right',
    maxWidth: '60%',
  },
});
