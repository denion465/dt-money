import { useState } from "react";
import Modal from "react-modal";

import { TransactionsProvider } from "./hooks/useTransaction";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewTransactionModal(true);
  };

  function handleCloseNewTransaction() {
    setIsNewTransactionModal(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
