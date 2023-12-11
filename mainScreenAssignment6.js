import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
// import PracticeModal from './PracticeModal';
import PracticeModal from './practiceModal'

const Practice2D = () => {
  const [DATA, SetDATA] = useState([
    {
      name: 'Cipla Ltd.',
      medCategories: [
        {
          type: 'Gastric',
          med: [{ name: 'Antacids' }, { name: 'Simethicone' }],
        },
        {
          type: 'PainKiller',
          med: [{ name: 'Aspirin' }, { name: 'Paracetamol' }],
        },
      ],
    },
    {
      name: 'Lupin',
      medCategories: [
        { type: 'Capsules', med: [{ name: 'Prilosec' }, { name: 'Prozac' }] },
        { type: 'Liquid', med: [{ name: 'Diazepam' }, { name: 'Docusate' }] },
      ],
    },
    {
      name: 'Alkem',
      medCategories: [
        { type: 'Tablet', med: [{ name: 'Ativan' }, { name: 'Adderall' }] },
        {
          type: 'Injections',
          med: [{ name: 'ADRENALINE' }, { name: 'ARTESUNATE' }],
        },
      ],
    },
  ]);


  const [modalVisible, setModalVisible] = useState(false);

  const renderMedicines = ({ item }) => (
    <View>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const renderMedicineType = ({ item }) => (
    <View>
      <Text style={styles.title}> {item.type}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Medicines : </Text>
        <FlatList
          data={item.med}
          keyExtractor={(title, index) => Math.random()}
          renderItem={renderMedicines}
        />
      </View>
    </View>
  );

  const renderPharmacy = ({ item }) => (
    <View style={styles.renderUser}>
      <Text style={styles.title}> Pharmacy : {item.name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}> Medicine Types: </Text>
        <FlatList
          data={item.medCategories}
          keyExtractor={(title, index) => Math.random()}
          renderItem={renderMedicineType}
        />
      </View>
    </View>
  );

  const handleAddUser = (stateData) => {
    console.log(DATA);
    SetDATA([...DATA, stateData]);
    console.log(DATA);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderPharmacy}
        keyExtractor={(item, index) => Math.random()}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={openModal}
        // onPress={renderMedicineType}
      >
        <Text style={{ color: 'white', fontSize: 20, paddingVertical: 10 }}>
          ADD INFO..
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <PracticeModal statePass={handleAddUser} closeModal={closeModal}/>
        </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 20,
  },
  renderUser: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor:'red',
    shadowOffset: {
      width:1,
      height: 3,
    },
    shadowOpacity: 0.4,
    // shadowRadius: 4,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  addButton: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default Practice2D;
