import React from 'react'
import { Cards } from '../../components/Cards/Cards';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import useProtectedPage from "../../hooks/useProtectedPage"

export const Shopping = () => {

  useProtectedPage()

  return (
    <div>
      <Header />
        <Cards />
      <Footer />
    </div>
  );
};
