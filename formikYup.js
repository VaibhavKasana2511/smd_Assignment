import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/, 'First Alphabet Should be Capital')
    .required('Required'),

  email: Yup.string()
    .max(50, 'Too Long!')
    .matches(/^[a-zA-z0-9._-]+@[a-z]+.[a-z]*$/, 'Invalid Email Format')
    .required('Required'),

  phone: Yup.string()
    .length(10, 'Phone No should be of 10 digits')
    .matches(/^[0-9]{10}$/, 'Phone No Only Contain Digits')
    .required('Required'),

  password: Yup.string()
    .min(8, 'Must be 8 digit Long ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
      'Must contain an UpperCase,symbol,numbers',
    )
    .required('Required'),
});

export default function Register({navigation}) {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phone, setPhone] = useState('');
  //   const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Register Your Account
        </Text>
      </View>
      <Formik
        initialValues={{email: '', name: '', phone: '', password: ''}}
        validationSchema={ValidationSchema}
        onSubmit={(values, status, submitCount) =>
          console.log(
            'values',
            values,
            'status',
            status,
            'SubmitCount',
            submitCount,
          )
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          status,
          submitCount,
        }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              value={values.name}
              placeholder="Name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
            />
            {errors.name && touched.name && (
              <Text style={{fontSize: 13, color: 'red', marginLeft: 25}}>
                {errors.name}
              </Text>
            )}
            <TextInput
              style={styles.inputStyle}
              value={values.email}
              placeholder="Email"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && (
              <Text style={{fontSize: 13, color: 'red', marginLeft: 25}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              style={styles.inputStyle}
              placeholder="Phone No"
              value={values.phone}
              keyboardType="numeric"
              onBlur={handleBlur('phone')}
              onChangeText={handleChange('phone')}
            />
            {errors.phone && touched.phone && (
              <Text style={{fontSize: 13, color: 'red', marginLeft: 25}}>
                {errors.phone}
              </Text>
            )}

            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text style={{fontSize: 13, color: 'red', marginLeft: 25}}>
                {errors.password}
              </Text>
            )}
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitContainer}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  width: '100%',
                  textAlign: 'center',
                  marginVertical: 10,
                  fontFamily: 'Poppins-SemiBoldItalic',
                }}>
                Register...
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // margin: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  headingText: {
    // paddingTop: 10,
    flex: 0.25,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: 'pink',
    flex: 0.75,
    justifyContent: 'space-evenly',
  },

  inputStyle: {
    flex: 0.1,
    paddingLeft: 15,
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  submitContainer: {
    backgroundColor: 'white',
    // width: '100%',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
});
