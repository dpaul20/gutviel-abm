import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "@/interfaces/Product";

type Props = {
  onCreate: (product: Product) => void;
};

export default function CreateProductModal({ onCreate }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleCreate = () => {
    if (!name || !description || !price) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    const newProduct = {
      name,
      description,
      price: Number(price),
    };
    onCreate(newProduct);
    onClose();
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Create product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb={4} isInvalid={isEmpty && !name}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormHelperText>
                Please enter a name for the product.
              </FormHelperText>
              {isEmpty && !name && (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired mb={4} isInvalid={isEmpty && !description}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormHelperText>
                Please enter a description for the product.
              </FormHelperText>
              {isEmpty && !description && (
                <FormErrorMessage>Description is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired mb={4} isInvalid={isEmpty && !price}>
              <FormLabel>Price</FormLabel>
              <Input
                type={"number"}
                min={0}
                step={0.01}
                placeholder="Product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <FormHelperText>
                Please enter a price for the product.
              </FormHelperText>
              {isEmpty && !price && (
                <FormErrorMessage>Price is required.</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleCreate}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
