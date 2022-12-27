import React from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { BsArrowRightCircle, BsWhatsapp } from 'react-icons/bs'
import './FormModal.css'

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
    display: 'flex',
    borderRadius: '10px'
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
      <div className="btn-modal col-md-4 d-flex justify-content-center">
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
          <div className='mt-md-2 d-flex justify-content-around text-white'>
            <div>
              <button className='btn mx-md-1' style={{ backgroundColor: 'green' }}>
                <a className='text-white' href="http://wa.me/5511971181829" target='_blank' style={{ textDecoration: 'none' }}>
                    <BsWhatsapp/>
                    WhatsApp
                </a>
              </button>
              <button className='btn btn-secondary' onClick={closeModal}>Fechar</button>
            </div>
            <div className=' d-flex align-items-md-end'>
              <i>
                <Link to='/express'>
                  <BsArrowRightCircle />
                </Link>
              </i>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}