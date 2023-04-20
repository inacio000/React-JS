import Modal from 'react-modal'
import inComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;  
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

          <button
            className='react-modal-close'
            onClick={onRequestClose}
            type='button'
          >
            <img src={closeImg} alt="close modal"/>
          </button>

          <Container>
              <h2>Register transaction</h2>
              <input
                placeholder='Title'
              />
              <input
                type='number'
                placeholder='Value'
              />

              <TransactionTypeContainer>
                <RadioBox 
                  type='button'
                  onClick={() => { setType('deposit')}}
                  isActive={type === 'deposit'}
                  activeColor="green"
                >
                  <img src={inComeImg} alt="Income" />
                  <span>Income</span>
                </RadioBox>
                <RadioBox 
                  type='button'
                  onClick={() => { setType('withdraw')}}
                  isActive={type === 'withdraw'}
                  activeColor="red"
                >
                  <img src={outComeImg} alt="Outcome" />
                  <span>Outcome</span>
                </RadioBox>
              </TransactionTypeContainer>

              <input
                placeholder='Category'
              />
              <button type="submit">
                Register
              </button>
          </Container>
      </Modal>
    )
}