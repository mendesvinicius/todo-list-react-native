import { MMKV } from 'react-native-mmkv';

const dictionary = {
  EMAIL: '@todoList:email',
};

const mmkv = new MMKV();

export class StorageManager {
  public static setEmail(email: string) {
    return mmkv.set(dictionary.EMAIL, email);
  }

  public static getEmail() {
    return mmkv.getString(dictionary.EMAIL) || '';
  }
}
