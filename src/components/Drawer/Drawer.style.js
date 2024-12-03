import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFF',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  highlightedItem: {
    backgroundColor: '#FFEAF7',
  },
  icon: {
    height: 25,
    width: 25,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#181F32',
  },
  menuSubtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#28292C',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    backgroundColor: '#FFFBFF',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#F32323',
    marginLeft: 10,
  },
  safeAreaView: {
    height: '100%',
    backgroundColor: '#FFFBFF',
  },
  menuIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  menuInfoContainer: {
    paddingLeft: 23,
  },
});
