import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Drawer.style';
import ImageLinks from '../../utils/ImageLinks';

const Drawer = ({ toggleDrawer }) => {
  const menuList = [
    {
      label: 'Blocked Users',
      description: 'Manage the list of users you have blocked.',
      image: ImageLinks.block,
      isClicked: true,
    },
    {
      label: 'Security Settings',
      description: 'Update your password and manage security settings.',
      image: ImageLinks.lock,
      isClicked: false,
    },
    {
      label: 'Language',
      description: 'Choose your preferred language for the app.',
      image: ImageLinks.chat,
      isClicked: false,
    },
    {
      label: 'Help and Support',
      description: 'Access help documentation and contact support.',
      image: ImageLinks.help,
      isClicked: false,
    },
    {
      label: 'About',
      description: 'Learn more about the app and its features.',
      image: ImageLinks.about,
      isClicked: false,
    },
    {
      label: 'Delete Account',
      description: '',
      image: ImageLinks.trash,
      isClicked: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon name="close" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {menuList.map(menu => (
            <TouchableOpacity style={[styles.menuItem, menu.isClicked && styles.highlightedItem]}>
              <Image
                source={menu.image}
                style={styles.menuIcon}
              />
              <View style={styles.menuInfoContainer}>
                <Text style={styles.menuTitle}>{menu.label}</Text>
                {menu.description && (
                  <Text style={styles.menuSubtitle}>{menu.description}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutContainer}>
        <Image
          source={ImageLinks.logout}
          style={styles.icon}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Drawer;
