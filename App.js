import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { client } from './sanity';
import FeaturedRow from "./FeaturedRow"
import RestaurantCard from './RestaurantCard';
import Categories from './Categories';
import CategoryCard from './CategoryCard';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.fetch( `
    *[_type == "featured"] {
      ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
    }
  `).then(data => {
      setData(data);
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\
      {data?.map(category => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
      />
        ))}
    </View>
  );
}