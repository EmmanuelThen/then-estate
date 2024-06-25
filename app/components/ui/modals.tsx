import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


type Props = {}

const Modals = ({ buttontext, modalTitle, modalBody, onClickButton }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('sm')

    const sizes = ["full"];


    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <Button size="sm" className="text-white" key={size} color="primary" radius="sm" onPress={() => handleOpen(size)} onClick={onClickButton}>
                        {buttontext}
                    </Button>
                ))}
            </div>
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
                // scrollBehavior='inside'
            >
                <ModalContent className="z-[9999999] overflow-y-scroll">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 w-full">{modalTitle}</ModalHeader>
                            <ModalBody>
                                {modalBody}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Modals
