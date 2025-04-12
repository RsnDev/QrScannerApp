
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#6a9dfc', '#8ec5fc']} style={styles.header}>
        <View style={styles.headerRow}>
          <Icon name="share" size={20} color="#fff" />
          <Text style={styles.headerText}>Share</Text>
          <Icon name="arrow-back-ios" size={18} color="#fff" style={styles.backIcon} />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.shareTitle}>share your details with</Text>
        <Text style={styles.hospitalName}>
          Lady hardinge Medical College and Smt Sucheta Kriplani Hospital (LHMC and SSKH)
        </Text>

        <View style={styles.line} />

        <Text style={styles.sectionTitle}>Your details</Text>

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

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareText}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  backIcon: {
    marginLeft: 'auto',
  },
  body: {
    padding: 20,
  },
  shareTitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
    flexWrap: 'wrap',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  label: {
    color: '#333',
    fontWeight: '500',
  },
  value: {
    color: '#555',
    maxWidth: '60%',
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 2,
  },
  shareButton: {
    backgroundColor: '#307BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 2,
  },
  cancelText: {
    color: '#000',
    fontWeight: '600',
  },
  shareText: {
    color: '#fff',
    fontWeight: '600',
  },
});
