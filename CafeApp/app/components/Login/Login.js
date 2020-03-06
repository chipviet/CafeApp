/* eslint-disable react/require-default-props */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { PureComponent } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { HelperText } from 'react-native-paper'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'
import FloatingTextInput from '../FloatingTextInput'
import styles from './style'

class AddCardModal extends PureComponent {
  constructor(props) {
    super(props);
    // this.setState = {
    //     isVisible: Boolean
    // }
  }
//   getValidCardNumber() {
//     const { cardNumberValue } = this.props
//     if (cardNumberValue && cardNumberValue.length === 15) {
//       return false
//     }
//     return true
//   }

  render() {
    const {
        cardNumberValue,
        typingCardNumber,
        isVisible,
        openScanQrCode,
        onClose,
        submit,
        isAddingCard,
        addingCardError
      } = this.props

    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={isVisible}
          backdropOpacity={0.89}
          avoidKeyboard
          backdropColor='white' style={{marginLeft: 12, marginRight: 12}}>
          <View style={styles.modalContentWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtAddCardTitle}>Đăng nhập</Text>
              <TouchableOpacity style={styles.btnCloseModal} onPress ={onClose} >
                <Image source={require('../../assets/img/close-black.png')} style={{width: 14, height: 15}} />
              </TouchableOpacity>
            </View>

            <FloatingTextInput
              containerStyle={{marginTop: 43}}
              title='Tên đăng nhập'
              //value={}
              onChangeText = {text => console.log("value:",text)}
            //   keyboardType='number-pad'
            //   iconContent={
            //     <TouchableOpacity style={styles.btnOpenScanCode} onPress={openScanQrCode}>
            //       <Image source={require('@assets/img/qr-code-icon.png')} style={{width: 20, height: 20}} />
            //     </TouchableOpacity>
            //   } 
            />
            <FloatingTextInput
              containerStyle={{marginTop: 43}}
              title='Mật khẩu'
              //value={}
              onChangeText = {text => console.log("value:",text)}
            //   keyboardType='number-pad'
            //   iconContent={
            //     <TouchableOpacity style={styles.btnOpenScanCode} onPress={openScanQrCode}>
            //       <Image source={require('@assets/img/qr-code-icon.png')} style={{width: 20, height: 20}} />
            //     </TouchableOpacity>
            //   } 
            />
            {/* <View style={{alignItems: 'center'}}>
              <HelperText type="error" visible={!!addingCardError}>Invalid card number. Please try again.</HelperText>
            </View> */}
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => console.log("dang nhap")}
        >
              {
                isAddingCard && <ActivityIndicator animating size="small" color="#414141" />
              }
              <Text style={styles.txtAdd}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

AddCardModal.propTypes = {
  isVisible: PropTypes.bool,
  isAddingCard: PropTypes.bool,
  addingCardError: PropTypes.object,
  cardNumberValue: PropTypes.number,
  typingCardNumber: PropTypes.func,
  onClose: PropTypes.func,
  submit: PropTypes.func
}

AddCardModal.defaultProps = {
  isVisible: false,
}

export default AddCardModal
