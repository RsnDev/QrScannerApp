import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const QRCodeScanner = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [latestScannedData, setLatestScannedData] = useState<string | null>(
    null,
  );

  useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'upc-a'],

    onCodeScanned: (codes: Code[]) => {
      if (!codes || codes.length === 0) return;
      try {
        let scannedValue = codes[0].value;
        const scannedType = codes[0].type;

        if (scannedType === 'ean-13' && scannedValue.startsWith('0')) {
          scannedValue = scannedValue.substring(1); // Convert to UPC-A
        }

        let parsedData;
        try {
          parsedData = JSON.parse(scannedValue);
        } catch {
          parsedData = scannedValue;
        }

        setLatestScannedData(parsedData);
        setIsModalVisible(true);
        console.log('Scanned:', parsedData);
      } catch (err) {
        console.error('Error during scan:', err);
      }
    },
  });

  if (!hasPermission || device == null) {
    return (
      <View style={styles.center}>
        <Text>
          {!hasPermission ? 'Camera permission denied' : 'Device not found'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>QR Code Scanner</Text>

      <View style={styles.previewBox}>
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
        {!latestScannedData && (
          <Text style={styles.placeholderText}>Your QR preview box</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => setLatestScannedData(null)}>
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalIcon}>👤</Text>

            <View style={{alignItems: 'center', marginBottom: 10}}>
              <Text style={styles.modalLabel}>Token Number</Text>
              <Text style={styles.highlight}>
                {typeof latestScannedData === 'object' &&
                latestScannedData !== null
                  ? latestScannedData.title
                  : latestScannedData}
              </Text>
            </View>

            <Text style={styles.expiryText}>29:53 minutes to expire</Text>

            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setIsModalVisible(false)}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewBox: {
    width: 250,
    height: 250,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2f80ed',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholderText: {
    color: '#bbb',
    fontSize: 14,
  },
  scanButton: {
    backgroundColor: '#2f80ed',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 24,
    marginBottom: 20,
    elevation: 3,
  },
  scanButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 10,
  },
  modalIcon: {
    fontSize: 40,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  highlight: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
  expiryText: {
    fontSize: 14,
    color: '#e67e22',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#2f80ed',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 24,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRCodeScanner;
