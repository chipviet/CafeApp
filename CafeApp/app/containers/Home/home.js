import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Row,
} from 'react-native';
import styles from './style';
import getData from '../../api/getData';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafe: [],
      gold: [],
      date: String,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    getData()
      .then(data => this.getItem(data))
      .catch(error => console.log('error', error));
  };

  getItem = data => {
    this.setState({
      cafe: data.output2.cafeprice,
      gold: data.output2.goldprice,
      date: data.output2.date,
    });
  };

  renderCafe = ({item}) => {
    return (
      <View>
        <View style={styles.listMarket}>
          <Text>{item.markets}</Text>
          <Text style={styles.txtFluct}>{item.fluct}</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
    );
  };

  renderGold = ({item}) => {
    return (
      <View>
        <View style={styles.listMarket}>
          <Text>{item.category}</Text>
          <Text style={styles.txtFluct}>{item.bidprice}</Text>
          <Text>{item.askingprice}</Text>
        </View>
      </View>
    );
  };


  render() {
    return (
      <View>
        <View>
          <Text style={styles.txtTitle}> Cà phê </Text>
          <Text style={styles.txtDay}> {this.state.date}</Text>
        </View>
        <View style={styles.columnHeader}>
          <Text style={styles.txtTitleList}>Thị trường</Text>
          <Text style={styles.txtTitleList}>Thay đổi</Text>
          <Text style={styles.txtTitleList}>Giá </Text>
        </View>
        <View>
          <FlatList
            // numColumns = {3}
            data={this.state.cafe}
            renderItem={this.renderCafe}
            keyExtractor={(item, index) => index.toString()}></FlatList>
        </View>

        <View>
          <Text style={styles.txtTitle}>Giá Vàng Mới Nhất</Text>
          <View style={styles.columnHeader}>
            <Text style={styles.txtTitleList}>Loại</Text>
            <Text style={styles.txtTitleList}>Mua</Text>
            <Text style={styles.txtTitleList}>Bán </Text>
          </View>
          <FlatList

          data={this.state.gold}
          renderItem={this.renderGold}
          keyExtractor={(item,index) => index.toString()}>
          </FlatList>
        </View>
      </View>
    );
  }
}
