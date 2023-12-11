import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PracticeModal({ closeModal,statePass}) {
  console.log("DATAPASSED",statePass)
  const [userData, setUserData] = useState({
    name: '',
    medCategories: [],
  });

  const addMedicineType = () => {
    let med_categories = [...userData.medCategories];
    console.log('medCategories', med_categories);
    med_categories.push({ type: '', med: [] });
    console.log('ABCDEFGH', userData);
    setUserData({ ...userData, medCategories: med_categories });

    console.log('ABCDEFGH22222222', userData);
  };

  const addMedicine = (index) => {
    setUserData((prevData) => {
      const newMedicine = { name: '' };

      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === index) {
            category.med.push(newMedicine); // Use push to add the new medicine
          }
          return category;
        }),
      };
    });
  };

  const handleMedicineTypeChange = (index, text) => {
    console.log('TEXT', text);
    setUserData((prevData) => {
      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === index) {
            return {
              ...category,
              type: text,
            };
          }
          return category;
        }),
      };
    });
  };

  const handleMedChange = (categoryIndex, medIndex, newName) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === categoryIndex) {
            return {
              ...category,
              med: category.med.map((medicine, j) => {
                if (j === medIndex) {
                  return {
                    ...medicine,
                    name: newName,
                  };
                }
                return medicine;
              }),
            };
          }
          return category;
        }),
      };
    });
  };

  // const renderMedicine = () => {
  //     console.log('UFINED', userData.medCategories);
  //     return userData.medCategories.map((medCategories, index) => (
  //       // console.log('MM', medCategories, 'MM', index),
  //       // console.log('LENGTH', userData.medCategories.length)
  //       <View>
  //         <View
  //           key={index}
  //           style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  //           <TextInput
  //             style={styles.inputStyle2}
  //             placeholder="Medicine"
  //             value={medCategories.type}
  //             // onChangeText={(text) => handleHobbyInput(text, index)}
  //           />
  //           {index === userData.medCategories.length - 1 && (
  //              <TouchableOpacity >
  //             <Icon
  //               style={styles.Icon}
  //               name="pluscircle"
  //               size={35}
  //               color="black"
  //             />
  //           </TouchableOpacity>
  //           )}
  //         </View>
  //       </View>
  //     ));
  //   };

  const renderInput = () => {
    console.log('FULL DATA', userData);
    console.log('UNDEFINED', userData.medCategories);
    return userData.medCategories.map(
      (medCategories, index) => (
        console.log('INDEX@', index),
        (
          <View>
            <View
              key={index}
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                style={styles.inputStyle2}
                placeholder="Medicine Type"
                value={medCategories.type}
                onChange={(e) =>
                  handleMedicineTypeChange(index, e.target.value)
                }
              />
              {index === userData.medCategories.length - 1 && (
                <TouchableOpacity
                  onPress={() => addMedicine(index)}
                  style={{
                    borderWidth: 1,
                    marginVertical: 7,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#001965' }}> Add Medicine </Text>
                </TouchableOpacity>
              )}
            </View>
            {medCategories.med.map((data, i) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  gap: 5,
                }}>
                <TextInput
                  style={styles.inputStyle3}
                  placeholder="Medicine Name"
                  value={data.name}
                  onChange={(e) =>
                    handleMedChange(index, i, e.target.value)
                  }
                />
                {index === data.length && (
                  <TouchableOpacity onPress={() => addMedicine(index)}>
                    <Icon
                      style={styles.Icon}
                      name="pluscircle"
                      size={35}
                      color="black"
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        )
      )
    );
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
          onChangeText={(text) =>
            setUserData(Object.assign({}, userData, { name: text }))
          }
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
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
        closeModal();
        statePass(userData);}}
      >
        <Text style={{ color: 'white', fontSize: 20, paddingVertical: 10 }}>
          ADD PHARMACY ..
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  addButton: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'blue',
    padding: 2,
    borderRadius: 10,
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

  inputStyle3: {
    backgroundColor: '#4392F1',
    borderRadius: 10,
    width: '75%',
    paddingLeft: 15,
    paddingVertical: 10,
    marginVertical: 7,
  },

  Icon: {
    marginVertical: 7,
  },
});
