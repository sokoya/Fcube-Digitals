import AsyncStorage from '@react-native-community/async-storage';

const checkAsyncStorage = async () => {
  const token = await AsyncStorage.getItem('token');
  const user = await AsyncStorage.getItem('userName');

  return {
    token,
    user
  };
};

export default checkAsyncStorage;
