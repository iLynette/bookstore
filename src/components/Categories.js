import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(status());
  };
  return (
    <div>
      <button type="submit" className="submitBtn" handleClick={handleClick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
