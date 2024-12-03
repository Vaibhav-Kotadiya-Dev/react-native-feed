import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  postCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postAuthor: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postRole: {
    fontSize: 12,
    color: '#999',
    paddingLeft: 4,
  },
  moreIcon: {
    marginLeft: 'auto',
  },
  postImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    width: '100%',
  },
  singlePostImageContainer: {
    padding: 10,
    width: '100%',
  },
  postImage: {
    height: 185,
    margin: '1%',
    borderRadius: 6,
  },
  rightPostTopImage: {
    height: 88,
    width: 150,
    borderRadius: 6,
    marginBottom: 11,
    alignSelf: 'flex-end',
  },
  rightPostBottomImage: {
    height: 88,
    width: 150,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: '#181F32',
    fontSize: 10,
    fontWeight: '500',
  },
  shareIcon: {
    marginLeft: 'auto',
  },
  isFeaturedWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    height: 11,
    width: 11,
  },
  message: {
    height: 15,
    width: 15,
  },
  likeFilled: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  imageRightContent: {
    width: '48%',
  },
  imageLeftContent: {
    width: '50%',
  },
});
