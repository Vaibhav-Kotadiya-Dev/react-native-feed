import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFEAF7',
    padding: 15,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    color: '#181F32',
    fontSize: 16,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: '#181F32',
    fontSize: 12,
    fontWeight: '400',
  },
  headerEvent: {
    color: '#181F32',
    fontSize: 10,
    fontWeight: '400',
    paddingLeft: 1,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#F5169C',
  },
  menuIcon: {
    color: '#000000',
  },
  navIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    // backgroundColor: '#fce4ec',
  },
  navIconWrap: {
    paddingHorizontal: 16,
  },
  navIconWrapper: {
    alignItems: 'center',
    marginRight: 14,
  },
  navLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#ff80ab',
  },
  feedContainer: {
    padding: 15,
  },
  singlePostImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  safeAreaView: {
    backgroundColor: '#FFEAF7',
  },
  statusBarColor: '#FFEAF7',
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  clockIcon: {
    height: 12,
    width: 12,
  },
  menuWrap: {
    height: 65,
    width: 65,
    backgroundColor: '#D9D9D9',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedContentWrap: {
    paddingTop: 24,
  },
  giftIcon: {
    height: 34,
    width: 34,
  },
});
