import axios from 'axios';
import config from '../../config.json';
import { EnumEndpoints_V1 } from '../common/Enums/EnumEndpoints_V1';
import { TBaseResponse } from '../common/Types/TBaseResponse';

/**
 * Api
 * 
 * Classe para agrupamento das requisições do app
 */
export default class Api {

    /**
     * region
     * 
     * Faz a chamada para o endpoint de busca por região
     * 
     * @param param - Nome completo ou parcial da região
     * @returns Resultado da busca
     */
    public static async region(param: string): Promise<TBaseResponse[]> {
        return Api.makeRequest(EnumEndpoints_V1.REGION, param);
    }

    /**
     * capital
     * 
     * Faz a chamada para o endpoint de busca por capital
     * 
     * @param param -Nome completo ou parcial da capital
     * @returns Resultado da busca
     */
    public static async capital(param: string): Promise<TBaseResponse[]> {
        return Api.makeRequest(EnumEndpoints_V1.CAPITAL, param);
    }

    /**
     * language
     * 
     * Faz a chamada para o endpoint de busca por língua
     * 
     * @param param -Nome completo ou parcial da língua
     * @returns Resultado da busca
     */
    public static async language(param: string): Promise<TBaseResponse[]> {
        return Api.makeRequest(EnumEndpoints_V1.LANGUAGE, param);
    }

    /**
     * countryName
     * 
     * Faz a chamada para o endpoint de busca por nome do país
     * 
     * @param param - Nome completo ou parcial do país
     * @returns Resultado da busca
     */
    public static async countryName(param: string): Promise<TBaseResponse[]> {
        return Api.makeRequest(EnumEndpoints_V1.NAME, param);
    }

    /**
     * callingCode
     * 
     * Faz a chamada para o endpoint de busca por DDI
     * 
     * @param param - Número completo ou parcial do DDI
     * @returns Resultado da busca
     */
    public static async callingCode(param: string): Promise<TBaseResponse[]> {
        return Api.makeRequest(EnumEndpoints_V1.CALLING_CODE, param);
    }

    /**
     * makeRequest
     * 
     * Efetua a chamada para a api e retorna o reesultado
     * 
     * @param endpoint - Endpoint da api para efetuar a requisição
     * @param param - Texto para ser buscado
     * @returns Resultado da busca
     */
    private static async makeRequest(endpoint: EnumEndpoints_V1, param: string): Promise<TBaseResponse[]> {
        return axios.get(
            `${config.API_URL}/${endpoint}/${param}`
            );
    }
}