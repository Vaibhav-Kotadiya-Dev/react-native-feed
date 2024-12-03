import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import ImageLinks from '../../utils/ImageLinks';
import styles from './Home.style';
import IconBadge from '../../components/IconBadge';
import FeedCard from './components/FeedCard';
import Drawer from '../../components/Drawer';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Home = () => {
  const horizontalList = [
    { icon: ImageLinks.plusSquare, label: 'Create' },
    { icon: ImageLinks.pinkClock, label: 'Itinerary' },
    { icon: ImageLinks.gift, label: 'Contribute' },
    { icon: ImageLinks.heart, label: 'Love Story' },
  ];

  const feedData = [
    {
      id: '1',
      userName: 'Asad Ullah',
      userProfile: ImageLinks.user1,
      isFeatured: true,
      images: [
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      isLiked: true,
    },
    {
      id: '2',
      userName: 'Farhan Ali',
      userProfile: ImageLinks.user2,
      images: [
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      isLiked: false,
    },
    {
      id: '3',
      userName: 'Asad Ullah',
      userProfile: ImageLinks.user1,
      isFeatured: true,
      images: [
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      isLiked: true,
    },
  ];

  const [feedList, setFeedList] = useState(feedData);
  const [showDrawer, setShowDrawer] = useState(false);

  const renderHorizontalItems = (item, index) => {
    return (
      <View key={index} style={styles.navIconWrapper}>
        <IconBadge
          icon={item.icon}
          onIconClick={() => { }}
        />
        <Text style={styles.navLabel}>{item.label}</Text>
      </View>
    );
  };

  const handleSharePress = () => { };

  const handleLikePress = (item) => {
    const selectedPostIndex = feedList?.findIndex(i => i.id === item.id);
    const clonedFeedList = JSON.parse(JSON.stringify(feedList));

    if (selectedPostIndex !== -1) {
      clonedFeedList[selectedPostIndex].isLiked = !clonedFeedList[selectedPostIndex].isLiked;
      setFeedList(clonedFeedList);
    }
  };

  const renderFeedList = (item, index) => {
    return (
      <FeedCard
        key={index}
        images={item.images}
        userName={item.userName}
        isFeatured={item.isFeatured}
        userProfile={item.userProfile}
        isLiked={item.isLiked}
        onSharePress={handleSharePress}
        onLikePress={() => handleLikePress(item)}
      />
    );
  };

  const toggleDrawer = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setShowDrawer(!showDrawer);
  };

  if (showDrawer) {
    return (<Drawer toggleDrawer={toggleDrawer} />);
  }

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.statusBarColor}
      />
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image
            source={ImageLinks.gg}
            style={styles.headerIcon}
          />
          <View>
            <Text style={styles.headerTitle}>Emma & John’s</Text>
            <Text style={styles.headerSubtitle}>Wedding</Text>
            <View style={styles.eventContainer}>
              <Image
                source={ImageLinks.clock}
                style={styles.clockIcon}
              />
              <Text style={styles.headerEvent}>Dinner Service at <Text style={styles.highlight}>6:30pm</Text></Text>
            </View>
          </View>
        </View>
        <IconBadge
          onIconClick={toggleDrawer}
          icon={ImageLinks.menu}
        />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FlatList
          data={horizontalList}
          horizontal
          renderItem={({ item, index }) => renderHorizontalItems(item, index)}
          contentContainerStyle={styles.navIconsContainer}
          style={styles.navIconWrap}
        />
        <View style={styles.feedContainer}>
          <FlatList
            data={feedList}
            renderItem={({ item, index }) => renderFeedList(item, index)}
            style={styles.feedContentWrap}
            keyExtractor={i => i.id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
