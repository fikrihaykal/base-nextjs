import { ReactNode, createContext, useState } from "react";

type cuti =
  | "tahunan"
  | "sakit"
  | "melahirkan"
  | "besar"
  | "bersama"
  | "alasanpenting"
  | "";
interface WizardContextType {
  cutiType: cuti;
  setCutiType?: any;
}

const wizardContextDefault: WizardContextType = {
  cutiType: "",
};



const WizardContext = createContext<WizardContextType>(wizardContextDefault);

export function WizardContextProvider({ children }: { children: ReactNode }) {
  const [cutiType, setCutiType] = useState<cuti>("");

  return (
    <WizardContext.Provider value={{ cutiType, setCutiType }}>
      {children}
    </WizardContext.Provider>
  );
}

export default WizardContext;
