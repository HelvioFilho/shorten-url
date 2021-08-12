import AsyncStorage from '@react-native-async-storage/async-storage';
import { ItemLink, StorageLink } from './interface';

export async function getLinksSave(): Promise<ItemLink[]> {
  try {
    const data = await AsyncStorage.getItem('@shorterUrl:links');
    let linkSaves = data ? (JSON.parse(data) as StorageLink) : {} as StorageLink;

    const links = Object
      .keys(linkSaves)
      .map((link) => {
        return {
          ...linkSaves[link].data
        }
      });
    return links;
  } catch (error) {
    throw new Error(error);
  }
}

export async function saveLink(link: ItemLink): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@shorterUrl:links');
    const oldLinks = data ? (JSON.parse(data) as StorageLink) : [];

    const findLink = Object.keys(oldLinks).some(old => old === link.id);

    if (!findLink) {
      const newLinks = {
        [link.id]: {
          data: link,
        }
      };
      await AsyncStorage.setItem(
        '@shorterUrl:links',
        JSON.stringify({
          ...newLinks,
          ...oldLinks
        })
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteLink(id: string) {
  try {
    const data = await AsyncStorage.getItem('@shorterUrl:links');
    const links = data ? (JSON.parse(data) as StorageLink) : {};
    delete links[id];
    await AsyncStorage.setItem(
      '@shorterUrl:links',
      JSON.stringify(links)
    );
  } catch (error) {
    throw new Error(error);
  }
}