import axios from "axios";

const URL = 'http://localhost:3000/pepega'

export default async function useGetPepega(): Promise<string> {
    return (await axios.get(URL)).data.data
}