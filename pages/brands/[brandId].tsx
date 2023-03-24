import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function BrandDetails() {
  const router = useRouter();
  const { brandId } = router.query;

  return (
    <div>
      <Heading>Brand details for brand ID {brandId}</Heading>
    </div>
  );
}
