import React from 'react';
import { Image, Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import listProduct from '../../mocks/product';

export const List = ({ navigation }: any) => {
  return (
    <ScrollView>

    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Product"
        />
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>
      <View style={styles.productsContainer}>
        {listProduct.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={{ fontWeight: 'bold' }}>{product.name}</Text>
            <Text>Rp.{product.price}</Text>
            <Text>⭐{product.rating}</Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "white",
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 10,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
});
