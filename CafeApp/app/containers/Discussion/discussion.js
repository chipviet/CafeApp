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
import Login from '../../components/Login/Login'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: true,
        username: null,
        password: null,
    };
  }
  componentDidMount() {
  }
  onClose =() => {
    this.setState({
        isVisible: false,
    })
  }
  render() {
    return (
      <View>
       <Login 
       isVisible ={this.state.isVisible}
       onClose ={this.onClose}
       username ={this.state.username}
       password ={this.state.password}
       ></Login>
      </View>
    );
  }
}
