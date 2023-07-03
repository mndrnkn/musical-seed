import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import { initialState } from './GlobalContext';

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;