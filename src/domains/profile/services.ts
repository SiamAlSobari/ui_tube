import { api_client } from "../../common/helpers/api-client";
import type { Profile } from "./type";

class ProfileService {
    public get_profile = (): Promise<{data: Profile}> => {
        return api_client<{data: Profile}>({
            method: 'GET',
            url: '/profile'
        })
    }
}

export const profile_services = new ProfileService();