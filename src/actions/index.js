import axios from 'axios';

export const FETCH_SALES = 'fetch_sales';
export const FETCH_SALE = 'fetch_sale';

const BASE_URL = 'http://localhost:3000/api/v1';
const AUTH_TOKEN = '355fb6d2844fe9642c689140c7bdf127';

export function fetchSales(){
  const request = axios.get(`${BASE_URL}/sales`, { headers: { 'Authorization': AUTH_TOKEN } });
  return {
    type: FETCH_SALES,
    payload: request
  };
}

export function fetchSale(id){
  const request = axios.get(`${BASE_URL}/sales/${id}`, { headers: { 'Authorization': AUTH_TOKEN } });
  return {
    type: FETCH_SALE,
    payload: request
  };
}
