import FuncionarioProps from "../../types/FuncionarioProps";

export default class ServerRequest {
    static baseURL = 'https://my-json-server.typicode.com/pejoota/tri-planner';

    static GETFromServer = async (endpoint: string): Promise<FuncionarioProps[]> => {
        const response = await fetch(`${ServerRequest.baseURL}/${endpoint}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
}