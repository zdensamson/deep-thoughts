import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // use the useQuery hook to make a query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Home;