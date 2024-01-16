import React from 'react';
import { ButtonText } from '@gluestack-ui/themed';

const CustomButtonText = ({ style, fontWeight, ...props }) => {

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

  return <ButtonText style={[{ fontFamily }, style]} {...props} />;
};

export default CustomButtonText;
