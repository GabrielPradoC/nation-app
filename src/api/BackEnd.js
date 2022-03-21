import axios from 'axios';
import config from '../../config.json';

/**
 * api
 * 
 * Faz uma requisição GET para a api informada na configuração
 * 
 * @param {String} route - Rota desejada
 * @param {String} searchParam - Parâmetro para ser buscado
 * @returns A resposta da requisição
 */
const api = (route, searchParam) => axios.get(`${config.API_URL}${route}${searchParam}`);

export default api;