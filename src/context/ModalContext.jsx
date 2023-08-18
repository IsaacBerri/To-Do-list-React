import { useState, createContext } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {

    const [modalActive, setModalActive] = useState(false)
    const [modalType, setModalType] = useState("")
    const [objectDeleted, setObjectDeleted] = useState("")

    const handleClick = (type, objName) => {
        setModalActive(!modalActive);
        setModalType(type)
        setObjectDeleted(objName)
      };

    return (
        <ModalContext.Provider value={{
            modalActive,
            handleClick,
            modalType,
            objectDeleted
        }}>
            {children}
        </ModalContext.Provider>
    )
}