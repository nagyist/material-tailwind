import React from "react";

// types
import type { contextValue, children } from "../../types/components/menu";
import { propTypesContextValue, propTypesChildren } from "../../types/components/menu";

export interface MenuContextProviderProps {
  value: contextValue;
  children: children;
}

const MenuContext = React.createContext<contextValue | null>(null);
MenuContext.displayName = "MaterialTailwind.MenuContext";

export function useMenu() {
  const context = React.useContext(MenuContext);

  if (!context) {
    throw new Error(
      "useMenu() must be used within a Menu. It happens when you use MenuCore, MenuHandler, MenuItem or MenuList components outside the Menu component.",
    );
  }

  return context;
}

export function MenuContextProvider({ value, children }: MenuContextProviderProps) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

MenuContextProvider.prototypes = {
  value: propTypesContextValue,
  children: propTypesChildren,
};
