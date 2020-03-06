import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Row,
  Image,
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
      .then(data => this.getItem(data))
      .catch(error => console.log('error', error));
  };

  getItem = data => {
    console.log('data', data.output.collection);
    this.setState({
      data: data.output.collection,
    });
  };

  renderNews = ({item}) => {
    return (
      <View>
        <View>
          <View style={styles.image}>
            <Image
              style={{width: 250, height: 150}}
              source={{uri: item.image}}></Image>
          </View>
          <Text style={styles.txtTitle}>{item.title}</Text>
          <Text>{item.info}</Text>
          <Text>{item.review}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View>
        <Text style={styles.txtHeader}> NEWS</Text>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderNews}
            keyExtractor={(item, index) => index.toString()}
            ></FlatList>
        </View>
      </View>
    );
  }
}
