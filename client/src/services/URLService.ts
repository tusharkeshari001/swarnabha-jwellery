import { ENV_URL } from "./AppUrl";


// api url
export const applicationUrl = ENV_URL;
export const WEBSOCKET_URL = `${applicationUrl}/ws`;
export const ALL_ENTITIES = '/Entity/getAllEntities'

export const getAllEntityUrl = () => applicationUrl + ALL_ENTITIES;