import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    modalContentWrapper: {
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingVertical: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      elevation: 12
    },
  
    txtAddCardTitle: {
    //   fontFamily: 'Roboto-Regular',
      fontSize: 16,
      width: '100%',
      textAlign: 'center'
    },
    btnCloseModal: {
      position: 'absolute',
      right: 0,
      top: 0,
      paddingRight: 4,
      paddingTop: 3
    },
    btnAdd: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 15,
      width: 136,
      backgroundColor: '#06a1de',
      marginHorizontal: 33,
      marginTop: 18
    },
    txtAdd: {
    //   fontFamily: 'Roboto-Medium',
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    },
    btnOpenScanCode: {
      position: 'absolute',
      right: 0,
      top: 0,
      paddingRight: 10,
      paddingTop: 15
    },
    disabledBtn: {
      opacity: 0.7
    }
  })