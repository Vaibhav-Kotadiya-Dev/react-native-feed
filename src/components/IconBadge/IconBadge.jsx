import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './IconBadge.style';

const IconBadge = ({ icon, onIconClick }) => {
  return (
    <TouchableOpacity onPress={onIconClick} style={styles.menuWrap}>
      <Image
        source={icon}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconBadge;
