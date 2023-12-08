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
    medCategories: [],
  });
  const [count, setCount] = useState(0);
  const addMedicineType = () => {
    let med_categories = [...userData.medCategories];
    console.log('medCategories', med_categories);
    med_categories.push({ type: '', med: []});
    console.log('ABCDEFGH', userData);

    // setUserData(Object.assign({}, userData, { medCategories: med_categories }));
    setUserData({ ...userData,  medCategories: med_categories });


    console.log('ABCDEFGH22222222', userData);
  };

//   const addMedicine = (index) => {
//     // console.log('index', index);
//     let medicine = [...userData.medCategories[index].med]

//     medicine.push({ name: '' });
//     const hehe = userData.medCategories
//     obj1=Object.assign([],hehe,med=medicine)

//     // console.log(userData,'above',medicine)
// const data= {...userData,medCategories:[{...userData.medCategories[index],med:medicine}]}


// console.log('abc',data,'jsadksahjkß')
//     setUserData(data)
//     // setUserData(Object.assign({}, userData, { medCategories: Object.assign([],hehe,med=medicine) }));

//     // console.log('Add Medicine', Object.assign({}, userData, { medCategories: Object.assign([],hehe,med=medicine) }))
//   }

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

  const handleHobbyInput = (text, index) => {
    let all_hobbies = [...userData.title];
    setUserData(
      Object.assign({}, userData, {
        title: Object.assign([], all_hobbies, { [index]: { hobby: text } }),
      })
    );
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
    console.log('UNDEFINED', userData.medCategories);
    return  userData.medCategories.map((medCategories, index) => (
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
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={styles.inputStyle2}
              placeholder="Medicine Name"
              value={data.name}
              // onChangeText={(text) => handleHobbyInput(text, index)}
            />
            {index === userData.medCategories.length - 1 && (
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

