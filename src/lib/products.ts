import path from 'path';
import { promises as fs } from 'fs';
import { Product } from '../types/product';

const PRODUCTS_PER_PAGE = 6;

export async function getProducts(page: number = 1): Promise<{ products: Product[]; totalPages: number }> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const allProducts: Product[] = JSON.parse(jsonData);

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, end);

  return {
    products: paginatedProducts,
    totalPages,
  };
}

export async function getProductById(id: string): Promise<Product | null> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const allProducts: Product[] = JSON.parse(jsonData);
  return allProducts.find((product) => product.id === id) || null;
}
