import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";


interface ContextType {
  setShowDisclaimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = React.createContext({} as ContextType);

const PrescriptionDisclaimerContext = ({ children }: { children: React.ReactNode }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  return (
    <Context.Provider
      value={{
        setShowDisclaimer,
      }}
    >
      <Dialog
        open={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        className={"relative z-10"}
      >
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          <button onClick={() => setShowDisclaimer(false)}>I understand</button>
        </Dialog.Panel>

      </Dialog>
      {children}
    </Context.Provider>
  );
};

const usePrescriptionDisclaimerContext = () => useContext(Context);

export { usePrescriptionDisclaimerContext };
export default PrescriptionDisclaimerContext;
