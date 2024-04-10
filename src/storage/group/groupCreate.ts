import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupsGetAll } from "./groupsGettAll"; 
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
    try {
        const storedGroups = await groupsGetAll();

        const normalizedGroup = newGroup.trim();

        const groupAlreadyExists = storedGroups.map(group => group.trim()).includes(normalizedGroup);
        if(groupAlreadyExists) {
            throw new AppError('Já existe um grupo cadastrado com esse nome.');
        }

        const storage = JSON.stringify([...storedGroups, normalizedGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}