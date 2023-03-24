import { Brand } from '../interfaces/Brand';

const BRANDS_ENDPOINT = '/api/brands';

export async function getBrands(): Promise<Brand[]> {
  const res = await fetch(BRANDS_ENDPOINT);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}
