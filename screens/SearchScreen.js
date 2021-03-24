import React from 'react';
import { Text, View } from 'react-native';
import db from '../config'
import {ScrollView} from 'react-native-gesture-handler';
export default class Searchscreen extends React.Component {
  constructor(){
    super();
    this.state={
allTransactions:[],
    }
  }

  componentDidMount = async ()=>{
    const query = await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions, doc.data()]
      })
    })
  }
    render() {
      return(
        <ScrollView>
          {this.state.allTransactions.map((transaction)=>{
            return(
              <View style ={{borderBottomWidth:2}}>
                <Text>{"Book id: " + transaction.bookId}</Text>
                <Text>{"Student id: " + transaction.studentId}</Text>
                <Text>{"Transaction type: " + transaction.transactionType}</Text>
                <Text>{"Date: " + transaction.date.toDate()}</Text>
              </View>
            )
          })}
        </ScrollView>
      )
    }
  }