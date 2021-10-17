import React, { Dispatch, useContext, useState } from "react";

interface ContextType {
  defaultRefinementCategories?: string[];
  setDefaultRefinementCategories: Dispatch<string[]>;
}

const Context = React.createContext({} as ContextType);

function RefinementContext({ children }: { children?: React.ReactNode }) {
  const [defaultRefinementCategories, setDefaultRefinementCategories] = useState<string[]>();

  return (
    <Context.Provider
      value={{
        defaultRefinementCategories,
        setDefaultRefinementCategories,
      }}>
      {children}
    </Context.Provider>
  );
}

const useRefinementContext = () => useContext(Context);
export { useRefinementContext };

export default RefinementContext;
