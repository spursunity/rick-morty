import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiGetMethod = async (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<unknown>> => {
    try {
        const response = await axios.get(url, config);
        return response;
    } catch (e) {
        const updatedErrorMsg = `API get data ERROR: ${e.message || 'empty message'}`;
        console.error(updatedErrorMsg);
        throw new Error(updatedErrorMsg);
    }
};
