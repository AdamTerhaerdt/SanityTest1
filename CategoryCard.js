import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image 
            style={{ height: 20, width: 20, borderRadius: 10 }}
            source={{
                uri: imgUrl,
            }}
        />
        <Text style={{ position: 'absolute', bottom: 1, left: 1, color: 'white', fontWeight: 'bold' }}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard