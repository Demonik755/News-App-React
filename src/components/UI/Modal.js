import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

const Modal = (props) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className=" ">
                <ModalHeader toggle={toggle}>Delete News?</ModalHeader>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Modal;