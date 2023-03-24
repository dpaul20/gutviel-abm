import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Product } from "../interfaces/Product";
import { DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type Props = {
  products: Product[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ProductsTable({ products, onEdit, onDelete }: Props) {
  const router = useRouter();
  const onView = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>${product.price}</Td>
              <Td>{product.description}</Td>
              <Td>
                <Button
                  size="xs"
                  leftIcon={<InfoIcon />}
                  colorScheme="blue"
                  variant="outline"
                  mr={2}
                  onClick={() => onView(product.id)}
                >
                  View
                </Button>
                <Button
                  size="xs"
                  leftIcon={<EditIcon />}
                  colorScheme="blue"
                  variant="outline"
                  mr={2}
                  onClick={() => onEdit(product.id)}
                >
                  Edit
                </Button>
                <Button
                  size="xs"
                  leftIcon={<DeleteIcon />}
                  colorScheme="red"
                  variant="solid"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
