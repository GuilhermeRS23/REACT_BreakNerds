import React, { useState } from "react";
import ModalTeste from "../../components/Modal/ModalTeste/ModalTeste";
import ManageGames from "../ManageGames/ManageGames";

const Test = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div>
                <h1>Exemplo de Modal em React</h1>
                <button onClick={openModal}>Abrir Modal</button>

                <ModalTeste isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Este é o conteúdo do modal</h2>
                    <p>Você pode adicionar qualquer coisa aqui, como um formulário ou texto.</p>
                    <ManageGames />
                </ModalTeste>
            </div>
        </>
    );
};

export default Test;
