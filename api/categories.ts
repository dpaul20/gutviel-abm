import { Category } from "../interfaces/Category";

const CATEGORIES_ENDPOINT = "/api/categories";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(CATEGORIES_ENDPOINT);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}
