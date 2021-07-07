import AsyncStorage from "@react-native-async-storage/async-storage";
    
export const getData = async (value) => {
    try {
      const jsonValue = await AsyncStorage.getItem(value)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // error reading value
    }
 }
