import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" className="submitBtn" onClick={() => dispatch(status())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
