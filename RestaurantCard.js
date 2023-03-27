import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantCard = ({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'white', marginRight: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
  <Image
    style={{height: 36, width: 64, borderRadius: 5}}
    source={{
      uri: imgUrl,
    }}
  />
  <View style={{paddingHorizontal: 3, paddingBottom: 4}}>
    <Text style={{fontWeight: 'bold', fontSize: 16, paddingTop: 2}}>{title}</Text>
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 3}}>
      <Text style={{fontSize: 12, color: 'gray', marginLeft: 5}}>
        <Text style={{color: 'green'}}>{rating}</Text> • {genre}
      </Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 3}}>
      <Text style={{fontSize: 12, color: 'gray', marginLeft: 5}}>Nearby • {address}</Text>
    </View>
  </View>
</TouchableOpacity>
  )
}

export default RestaurantCard