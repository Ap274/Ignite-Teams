import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
    try {
        // Get what's stored in this key
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

        // Since the information is stored in string form, we have to convert it to an object
        const groups: string[] = storage ? JSON.parse(storage) : [];

        // We return groups for those who called our function to have access to our groups
        return groups;
    } catch (error) {
        throw error;
    }
}