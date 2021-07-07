import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearData = async (value) => {
    try {
        await AsyncStorage.removeItem(value);
        return true;
    }
    catch(exception) {
        return false;
    }
  }