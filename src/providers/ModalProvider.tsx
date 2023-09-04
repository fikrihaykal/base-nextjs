import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { SetStateOptions } from "react-query/types/core/query";

interface ModalContextType {
  isModalActive: boolean | null;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const ModalContextDefault: ModalContextType = {
  isModalActive: false,
  setIsModalActive: () => false,
};

const ModalContext = createContext<ModalContextType>(ModalContextDefault);

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModalActive, setIsModalActive }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
