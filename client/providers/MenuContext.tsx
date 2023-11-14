import { createContext, useContext, useState } from "react";

export const MenuContext = createContext<{
  menu: boolean;
  setMenu: (prev: boolean) => void;
}>({ menu: false, setMenu: () => undefined });

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
