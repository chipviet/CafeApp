import {StyleSheet} from 'react-native'
import SizeMatters from '../../services/SizeMatters'

export default StyleSheet.create({
    container: {
        flex:1
    },
    txtTitle: {
        fontSize: 20,
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 50,
    },
    txtDay:{
        fontSize: 16,
        justifyContent: 'center',
        alignSelf:'center'
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
    listMarket:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft: 20,
        paddingRight:20,
        marginTop:10,
    },
    txtFluct:{
        alignContent:'center'
    }

})