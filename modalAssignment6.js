import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PracticeModal({ closeModal, OnDataPassed }) {
  let newUser = {
    name: '',
    medCategories: [{ type: '', med: [{ name: '' }] }],
  };
  const [userData, setUserData] = useState({
    name: '',
    medCategories: [{ type: '', med: [{ name: '' }] }],
  });

  const addMedicineType = () => {
    let med_categories = userData.medCategories;
    console.log('medCategories', med_categories);
    med_categories.push({ type: '', med: [{ name: '' }] });
    setUserData(Object.assign({}, userData, { medCategories: med_categories }));
    console.log('ABCDEFGH', userData);
  };

  const addMedicine = (index) => {
    let medicine = userData.medCategories[0].med
    console.log("osduiosudiosdufois",medicine)
    medicine.push({ name: '' })
    console.log("AFTER",medicine)
    // setUserData(Object.assign({}, userData, {medCategories : Object.assign([],medCategories,{})  }))
    // console.log("Add Medicine",userData)


    // console.log("VBV",index)

    

    obj3 = Object.assign({}, pharmacyData, {
      medCategories: Object.assign([], all_hobbies, {
        [index]: { hobby: text },
      }),
    });
  };

  const handleHobbyInput = (text, index) => {
    let all_hobbies = [...userData.title];
    setUserData(
      Object.assign({}, userData, {
        title: Object.assign([], all_hobbies, { [index]: { hobby: text } }),
      })
    );
  };

  // const renderMedicine = () => {
  //   console.log('UINED', userData.medCategories.med);
  //   return userData.medCategories.med.map((hobby, index) =>
  //     console.log('MEDCAT', hobby, 'MEDCAT', index)
  //       <View
  //         key={index}
  //         style={{
  //           alignSelf: 'flex-end',
  //           alignItems: 'flex-end',
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //         }}>
  //         <TextInput
  //           style={styles.inputStyle2}
  //           placeholder="Medicine"
  //           value={hobby.title}
  //           onChangeText={(text) => handleHobbyInput(text, index)}
  //         />
  //         {index === userData.title.length - 1 && (
  //           <TouchableOpacity onPress={addNewInput}>
  //             <Icon
  //               style={styles.Icon}
  //               name="pluscircle"
  //               size={30}
  //               color="black"
  //             />
  //           </TouchableOpacity>
  //         )}
  //       </View>
  //     ));
  //   );
  // };

  const renderInput = () => {
    console.log('UNDEFINED', userData.medCategories);
    return userData.medCategories.map((medCategories, index) => (
      // console.log('MM', medCategories, 'MM', index),
      // console.log('LENGTH', userData.medCategories.length)
      <View>
        <View
          key={index}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={styles.inputStyle2}
            placeholder="Medicine Type"
            value={medCategories.type}
            // onChangeText={(text) => handleHobbyInput(text, index)}
          />
          {index === userData.medCategories.length - 1 && (
            <TouchableOpacity
              onPress={addMedicine}
              style={{
                borderWidth: 1,
                marginVertical: 7,
                justifyContent: 'center',
              }}>
              <Text style={{ color: '#001965' }}> Add Medicine </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: '#001965',
            fontFamily: 'Poppins-SemiBoldItalic',
          }}>
          Enter Pharmacy
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          // onChangeText={(text) =>
          //   setUserData(Object.assign({}, userData, { id: text }))
          // }
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text
          style={{
            fontSize: 20,
            color: '#001965',
            fontFamily: 'Poppins-SemiBoldItalic',
          }}>
          Medicine Type
        </Text>
        <TouchableOpacity onPress={addMedicineType}>
          <Text style={styles.addButton}> Add Type </Text>
        </TouchableOpacity>
      </View>
      {renderInput()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  addButton: {
    borderWidth: 1,
    alignItems: 'center',
    color: 'blue',
    padding: 2,
  },
  inputStyle: {
    backgroundColor: 'pink',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 15,
    marginVertical: 7,
    paddingVertical: 10,
  },
  inputStyle2: {
    backgroundColor: 'pink',
    borderRadius: 10,
    width: '85%',
    paddingLeft: 15,
    paddingVertical: 10,
    marginVertical: 7,
  },

  Icon: {
    marginVertical: 7,
  },
});
