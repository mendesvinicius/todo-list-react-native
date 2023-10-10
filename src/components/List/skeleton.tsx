import React from 'react';
import { SkeletonList } from './styles';

const items = [0, 1, 2, 3, 4, 5];
const ListSkeleton: React.FC = () => {
  return (
    <>
      {items.map(item => (
        <SkeletonList key={item} />
      ))}
    </>
  );
};

export default ListSkeleton;
