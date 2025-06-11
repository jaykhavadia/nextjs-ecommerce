import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import { Product } from "@/types/product";
import { Typography, Box } from "@mui/material";
import PaginationWrapper from "@/components/PaginationWrapper";

type Props = {
  searchParams: {
    page?: string;
  };
};

export default async function ProductsPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page || "1", 10);
  const { products, totalPages } = await getProducts(page);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Box display="grid" gap={3  } gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))">
        {products.map((product: Product) => (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      <PaginationWrapper totalPages={totalPages} currentPage={page} />
    </>
  );
}
