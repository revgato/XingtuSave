import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import iconData from '../assets/icons.json';

const CustomIcon = ({ name, size, color }) => {
  const iconInfo = iconData[name];

  if (!iconInfo) {
    return null;
  }

  return (
    <View>
      <Image
        source={{ uri: iconInfo.path }}
        style={{ width: size, height: size, tintColor: color }}
      />
    </View>
  );
};

// Define prop types for the component
CustomIcon.propTypes = {
  name: PropTypes.string.isRequired, 
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomIcon;
