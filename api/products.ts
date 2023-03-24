import { Product } from "../interfaces/Product";

const PRODUCTS_ENDPOINT = "/api/products";

// Mock data for products
const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 10,
    description: "This is product 1",
  },
  {
    id: "2",
    name: "Product 2",
    price: 20,
    description: "This is product 2",
  },
  {
    id: "3",
    name: "Product 3",
    price: 30,
    description: "This is product 3",
  },
  {
    id: "4",
    name: "Product 4",
    price: 40,
    description: "This is product 4",
  },
  {
    id: "5",
    name: "Product 5",
    price: 50,
    description: "This is product 5",
  },
  {
    id: "6",
    name: "Product 6",
    price: 60,
    description: "This is product 6",
  },
  {
    id: "7",
    name: "Product 7",
    price: 70,
    description: "This is product 7",
  },
  {
    id: "8",
    name: "Product 8",
    price: 80,
    description: "This is product 8",
  },
];

export async function getAllProducts(): Promise<Product[]> {
  const response = new Promise((resolve) =>
    setTimeout(() => resolve(products), 1000)
  );
  return await response;
  /* const res = await fetch(PRODUCTS_ENDPOINT);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  } */
}

// Get all products paginated
export async function getProducts(page: number, limit: number): Promise<any> {
  // Slice the products array to simulate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Simulate an API request delay of 1 second
  const response = new Promise((resolve) =>
    setTimeout(() => resolve(products.slice(startIndex, endIndex)), 1000)
  );

  const total = products.length;
  const data = await response;
  return { data, total };

  /*  const res = await fetch(`${PRODUCTS_ENDPOINT}?_page=${page}&_limit=${limit}`);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  } */
}

export async function getProductById(id: string): Promise<Product> {
  const response = new Promise((resolve) =>
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 1000)
  );
  return await response;
  /*  const res = await fetch(`${PRODUCTS_ENDPOINT}/${id}`);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  } */
}

export async function createProduct(product: Product): Promise<Product> {
  const response = new Promise((resolve) =>
    setTimeout(() => {
      product.id = Math.floor(Math.random() * 100).toString();
      products.push(product);
      resolve(product);
    }, 1000)
  );

  return await response;
  /*  const res = await fetch(PRODUCTS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  } */
}

export async function updateProduct(product: Product): Promise<Product> {
  const response = new Promise((resolve) =>
    setTimeout(() => {
      const index = products.findIndex((p) => p.id === product.id);
      products[index] = product;
      resolve(product);
    }, 1000)
  );

  return await response;
  /*  
  const res = await fetch(`${PRODUCTS_ENDPOINT}/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  } */
}

export async function deleteProduct(id: string): Promise<void> {
  await new Promise((resolve) =>
    setTimeout(() => {
      const index = products.findIndex((p) => p.id === id);
      products.splice(index, 1);
      resolve();
    }, 1000)
  );

  /*  const res = await fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  } */
}
