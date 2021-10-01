import React from 'react';
import { GitList } from './components/GitList';
import { Header } from './components/Header';

import './styles/global.css';


export function App() {
  return (
    <>
        <Header />
        <GitList />
    </>
  );
}


