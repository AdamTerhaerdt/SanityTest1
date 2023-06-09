import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View>
            <Text>{title}</Text>
        </View>
        <Text>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
        >
            {/* Restaurant Cards */}
            <RestaurantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow