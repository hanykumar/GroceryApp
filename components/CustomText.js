import React from 'react';
import { Text as RNText } from '@gluestack-ui/themed';

const CustomText = ({ style, fontWeight, ...props }) => {

    let fontFamily;

    switch (fontWeight) {
      case 'bold':
        fontFamily = 'Manrope-Bold';
        break;
      case 'semibold':
        fontFamily = 'Manrope-SemiBold';
        break;
      case 'medium':
        fontFamily = 'Manrope-Medium';
        break;
      default:
        fontFamily = 'Manrope-Regular';
        break;
    }

  return <RNText style={[{ fontFamily }, style]} {...props} />;
};

export default CustomText;
