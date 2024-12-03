import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FeedCard.style';
import ImageLinks from '../../../../utils/ImageLinks';

const FeedCard = ({
  userName,
  isFeatured,
  images,
  isLiked,
  userProfile,
  onLikePress,
  onSharePress,
}) => {
  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image
          source={userProfile}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.postAuthor}>{userName}</Text>
          {isFeatured && (
            <View style={styles.isFeaturedWrap}>
              <Image
                source={ImageLinks.star}
                style={styles.starIcon}
              />
              <Text style={styles.postRole}>Bridesmaid</Text>
            </View>
          )}
        </View>
        <Icon name="more-vert" size={24} color="#333" style={styles.moreIcon} />
      </View>
      {images?.length === 1 && (
        <View style={styles.singlePostImageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.postImage}
          />
        </View>
      )}
      {images?.length === 3 && (
        <View style={styles.postImagesContainer}>
          <View style={styles.imageLeftContent}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.postImage}
            />
          </View>
          <View style={styles.imageRightContent}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.rightPostTopImage}
            />
            <Image
              source={{ uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.rightPostBottomImage}
            />
          </View>
        </View>
      )}
      <View style={styles.postFooter}>
        <View style={styles.likeButton}>
          <TouchableOpacity onPress={onLikePress}>
            {isLiked && (
              <Image
                source={ImageLinks.likeFilled}
                style={styles.likeFilled}
              />
            )}
            {!isLiked && (
              <Image
                source={ImageLinks.likeOutlined}
                style={styles.likeFilled}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.likeCount}>120</Text>
        </View>
        <TouchableOpacity onPress={onSharePress}>
          <Image
            source={ImageLinks.message}
            style={styles.message}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedCard;
