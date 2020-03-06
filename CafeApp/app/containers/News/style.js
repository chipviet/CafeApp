import {StyleSheet} from 'react-native'
import SizeMatters from '../../services/SizeMatters'

export default StyleSheet.create({
    container: {
        flex:1
    },
    txtHeader: {
        fontSize: 20,
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 50,
        fontWeight:'bold'
    },
    txtTitle:{
        fontSize: 16,
        justifyContent: 'center',
        alignSelf:'center',
        fontWeight:'bold'
    },
    image :{
        justifyContent:'center',
        alignSelf:'center',
    },
    columnHeader:{
        marginTop: SizeMatters.scaleY(30),
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft: 20,
        paddingRight:20,
    },
    txtTitleList:{
        fontSize:16,
        fontWeight: 'bold'
    },
})