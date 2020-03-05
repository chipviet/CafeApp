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
import getNews from '../../api/getNews';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getNews()
      //.then(data => this.getNews(data))
      .then(data => console.log('data',data))
      .catch(error => console.log('error', error));
  };

  getItem = data => {
    
    this.setState({
      
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
     
      </View>
    );
  }
}
