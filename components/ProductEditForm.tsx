import { Product } from "@/interfaces/Product";
import {
  ArrowBackIcon,
  ArrowUpIcon,
  CloseIcon,
  EditIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  product: Product;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (product: Product) => void;
  onCancel: () => void;
};

const ProductDetails = ({
  product,
  isEditing,
  onEdit,
  onSave,
  onCancel,
}: Props) => {
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const router = useRouter();

  const handleSave = () => {
    const updatedProduct = {
      ...editedProduct,
      name,
      description,
      price,
    };
    onSave(updatedProduct);
  };

  const handleCancel = () => {
    setEditedProduct(product);
    onCancel();
  };

  const handleEdit = () => {
    onEdit();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+event.target.value);
  };

  const handleGoBack = () => {
    router.push(`/products`);
  };

  return (
    <Box maxWidth="600px" margin="0 auto">
      <Heading as="h2" marginBottom="4">
        {product.name}
      </Heading>

      {isEditing ? (
        <form>
          <FormControl marginBottom="4">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>

          <FormControl marginBottom="4">
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>

          <FormControl marginBottom="4">
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
            />
          </FormControl>

          <Button
            colorScheme="green"
            marginRight="4"
            leftIcon={<ArrowUpIcon />}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<CloseIcon />}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <>
          <Box marginBottom="4">{product.description}</Box>
          <Box marginBottom="4">{`Price: $${product.price}`}</Box>

          <Button colorScheme="yellow" leftIcon={<EditIcon />} onClick={handleEdit}>
            Edit
          </Button>
          <Button
            leftIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
            marginLeft="4"
          >
            Go Back
          </Button>
        </>
      )}
    </Box>
  );
};

export default ProductDetails;
