import { Product } from "@/interfaces/Product";
import ProductDetails from "@/components/ProductEditForm";
import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { getAllProducts, getProductById, updateProduct } from "@/api/products";

type Props = {
  product: Product;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const productId = params?.productId as string;
  const product = await getProductById(productId);
  console.log("Product:", product);

  return { props: { product } };
};

const ProductDetailPage = ({ product }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });
  const [updatedProduct, setUpdatedProduct] = useState<Product>({ ...product });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (editedProduct: Product) => {
    console.log("Saving edited product:", editedProduct);
    const response = await updateProduct(editedProduct);
    console.log("Updated product:", response);

    setUpdatedProduct(response);
    setEditedProduct(response);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProduct(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <ProductDetails
        product={isEditing ? editedProduct : updatedProduct}
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </Box>
  );
};

export default ProductDetailPage;
