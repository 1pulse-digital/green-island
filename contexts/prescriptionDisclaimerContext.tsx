import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { SmallButton } from "../components/button";


interface ContextType {
  showCheckoutDisclaimer: () => void;
  showCartDisclaimer: () => void;
}

const Context = React.createContext({} as ContextType);

const PrescriptionDisclaimerContext = ({ children }: { children: React.ReactNode }) => {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const showCheckoutDisclaimer = () => {
    setMessage(`
    Your cart contains Doctor's Range Products. 
    Please ensure that you have a prescription in your patient history or proof of recommendation before proceeding. 
    `);
    setShowDisclaimer(true);
  };

  const showCartDisclaimer = () => {
    setMessage(`
    This is a Doctor's Range product which requires prescription by a registered health practitioner. 
    It will only be dispatched if there is a prescription in your patient history or you can provide proof of recommendation by Dr Kohler.`);
    setShowDisclaimer(true);
  };

  return (
    <Context.Provider
      value={{
        showCartDisclaimer,
        showCheckoutDisclaimer,
      }}
    >
      <Dialog
        open={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        className={"relative z-50"}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />


        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm lg:max-w-xl rounded bg-white p-4">
            <Dialog.Title className={"text-2xl text-primary mb-2"}>
              Disclaimer
            </Dialog.Title>
            <Dialog.Description className={"text-gray-800"}>
              {message}
            </Dialog.Description>
            <div className={"mt-4 gap-4 grid text-gray-800"}>
              <p>
                Doctor's range products ordered without a prescription will not be dispatched,
                and will be refunded after a 20% processing fee.
              </p>
              <p>For more information, call reception at <a href="tel:011-706-2786">011 706 2786</a>.</p>
            </div>
            <div className={"flex place-content-center mt-4 gap-4"}>
              <SmallButton
                onClick={() => setShowDisclaimer(false)}
                color={"primary"}>
                I understand
              </SmallButton>
              <a
                href="https://robins-perfect-health.cliniko.com/bookings"
                target={"_blank"}
                rel="noreferrer"
                className="items-center justify-center px-4 py-2 text-base font-medium text-center text-primary border border-secondary rounded-full shadow-sm lg:flex hover:ring-2">
                Book an appointment
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      {children}
    </Context.Provider>
  );
};

const usePrescriptionDisclaimerContext = () => useContext(Context);

export { usePrescriptionDisclaimerContext };
export default PrescriptionDisclaimerContext;
