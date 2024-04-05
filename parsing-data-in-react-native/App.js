import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import menuItems from "./menuItems.json";

export default App = () => {
  const {menu} = menuItems;

  const Item = ({ title, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{title} </Text>
      <Text style={menuStyles.itemText}> {'$' + price} </Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} />
  );
   
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
      <FlatList 
            data={menu}
            keyExtractor={({id})=> id }
            renderItem={renderItem}>
      </FlatList>
    </SafeAreaView>
  );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
});
