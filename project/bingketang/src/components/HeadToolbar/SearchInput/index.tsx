import React, { useCallback } from 'react';
import { Input } from 'antd';
import { SEARCH_THE_COURSES_OF_INTEREST } from '@/constant/text';
import { useNavigate } from 'react-router-dom';
import { pageType } from '@/pages/Container';

const { Search } = Input;

interface Iprops {
  className?: string;
}

const SearchInput = (props: Iprops) => {
  const navigate = useNavigate();
  
  const handleSearch = useCallback((value: string) => {
    navigate({
      pathname: `/${pageType.HomePage}`,
      search: `?query=${value}`
    });
  }, []);

  return (
    <Search placeholder={SEARCH_THE_COURSES_OF_INTEREST} allowClear onSearch={handleSearch} size="large" {...props} />
  );
};

export default SearchInput;