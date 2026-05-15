import { useState } from 'react';

export const useExplorePage = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  return {
    category,
    handleCategoryChange,
  };
};