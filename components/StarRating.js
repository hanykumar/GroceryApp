import React from 'react';
import { View, HStack, Text, Icon } from '@gluestack-ui/themed';
import { StarIcon, StarHalfIcon } from 'lucide-react-native'; // Assuming these icons are correctly implemented

const StarRating = ({ rating, totalStars = 5, size = 20, color = 'gold' }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<Icon key={i} as={StarIcon} size={size} color={color} fill={color}/>);
      } else if (hasHalfStar && i === filledStars + 1) {
        stars.push(<Icon key={i} as={StarHalfIcon} size={size} color={color} fill={color}/>);
      } else {
        stars.push(<Icon key={i} as={StarIcon} size={size} color={color} />);
      }
    }

    return stars;
  };

  return (
    <HStack alignItems="flex-start" alignSelf="flex-start">
      {renderStars()}
      <Text color="$coolGray500">110 Reviews</Text>
    </HStack>
  );
};

export default StarRating;
