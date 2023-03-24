import { List, ListItem } from '@chakra-ui/react';
import { Category } from '../interfaces/Category';

type Props = {
  categories: Category[];
};

export default function CategoriesList({ categories }: Props) {
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id}>{category.name}</ListItem>
      ))}
    </List>
  );
}
