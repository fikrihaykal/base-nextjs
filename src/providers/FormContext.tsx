import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface NameFormInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const nameContextDefault: NameFormInterface = {
  name: "Anonim",
  setName: () => "",
};

const NameContext = createContext<NameFormInterface>(nameContextDefault);

export function NameContextProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("Test");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContext;
