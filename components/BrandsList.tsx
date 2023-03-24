import { List, ListItem } from '@chakra-ui/react';
import { Brand } from '../interfaces/Brand';

type Props = {
  brands: Brand[];
};

export default function BrandsList({ brands }: Props) {
  return (
    <List>
      {brands.map((brand) => (
        <ListItem key={brand.id}>{brand.name}</ListItem>
      ))}
    </List>
  );
}
