import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect, SetStateAction } from "react";
import ProductsTable from "@/components/ProductsTable";
import { createProduct, deleteProduct, getProducts } from "@/api/products";
import { Product } from "@/interfaces/Product";
import ReactPaginate from "react-paginate";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "@/styles/Pagination.module.css";
import CreateProductModal from "@/components/CreateProductModal";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, total } = await getProducts(currentPage + 1, perPage);
      setProducts(data);
      setIsLoading(false);
      setPageCount(Math.ceil(total / perPage));
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageClick = (data: { selected: SetStateAction<number> }) => {
    setCurrentPage(data.selected);
  };

  async function handleEdit(productId: string) {
    console.log("Edit product", productId);
  }

  async function handleDelete(productId: string) {
    console.log("Delete product", productId);

    await deleteProduct(productId);
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  }

  // Product creation form
  const handleCreate = async (product) => {
    console.log("Create product", product);

    // Aquí llamas a la API para crear el producto
    const newProduct = await createProduct(product);

    // Y luego actualizas el estado de los productos
    setProducts([...products, newProduct]);
  };

  return (
    <Box margin="10">
      <Heading>Products</Heading>
      <Flex justifyContent="flex-end">
        <CreateProductModal onCreate={handleCreate} />
      </Flex>
      {isLoading ? (
        <Box>Loading products...</Box>
      ) : (
        <ProductsTable
          products={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}

      <Box mt={4}>
        <ReactPaginate
          previousLabel={
            <Button leftIcon={<ArrowBackIcon />} size="xs" colorScheme="blue">
              Previous
            </Button>
          }
          nextLabel={
            <Button
              rightIcon={<ArrowForwardIcon />}
              size="xs"
              colorScheme="blue"
            >
              Next
            </Button>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={perPage}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pagination__link}
          nextLinkClassName={styles.pagination__link}
          disabledClassName={styles.pagination__link_disabled}
          activeClassName={styles.pagination__link_active}
          activeLinkClassName={styles.pagination__link_active}
        />
      </Box>
    </Box>
  );
}
