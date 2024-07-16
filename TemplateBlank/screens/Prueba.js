import React, { useState } from 'react';
import { View, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Prueba() {
  const [modal, SetModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      {/* MODAL */}
      <Modal visible={modal} animationType="slide">
        {/* Vista del Modal */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          {/* Recuadro blanco modal */}
          <View style={{ width: width * 0.8, height: height * 0.3, backgroundColor: '#fff', borderRadius: width * 0.1, padding: width * 0.05 }}>
            {/* boton cerrar */}
            <TouchableOpacity onPress={() => SetModal(false)} style={{ width: width * 0.2, height: width * 0.2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4', borderRadius: width * 0.5, left: width * 0.05 }}>
              <FontAwesome5 name="times" size={width * 0.1} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* boton que abre el modal */}
      <TouchableOpacity onPress={() => SetModal(true)} style={{ width: width * 0.8, height: height * 0.07, backgroundColor: '#0088f8', borderRadius: width * 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: width * 0.04, fontWeight: '700', color: '#fff' }}> Abrir Modal </Text>
      </TouchableOpacity>
    </View>
  );
}
