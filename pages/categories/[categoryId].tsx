import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function CategoryDetails() {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <div>
      <Heading>Category details for category ID {categoryId}</Heading>
    </div>
  );
}
