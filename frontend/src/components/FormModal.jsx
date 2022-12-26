import React from 'react';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr'
import {BsArrowRightCircle} from 'react-icons/bs'

const customStyles = {
  content: {
    textAlign: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '70%',
    padding: '-20px!important',
    borderRadius: '4.5px',
    display:'flex',
    borderRadius:'10px'
  },
};

Modal.setAppElement('#root')

export default function FormModal({ icon, title, text, video, img }) {

  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="col-md-4 d-flex justify-content-center">
        <i onClick={openModal}>
          {icon}
        </i>
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=' h-25'>
          <img src={img} alt="" />
        </div>
        <div className=' h-25'>
          <h3>{title}</h3>
          <div className='mt-md-5'>
            {text}
          </div>
          <div className='mt-md-5'>
            <button className='btn bg-primary text-white'>Wpp</button>
            <button className='btn btn-secondary' onClick={closeModal}>Fechar</button>
            <i><BsArrowRightCircle/></i>
          </div>
        </div>
      </Modal>
    </>
  );
}