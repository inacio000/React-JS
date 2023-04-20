import Modal from 'react-modal'
import inComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;  
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type
    })
  }
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

          <Container
            onSubmit={handleCreateNewTransaction}
          >
              <h2>Register transaction</h2>
              <input
                placeholder='Title'
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <input
                type='number'
                placeholder='Value'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
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
                value={category}
                onChange={event => setCategory(event.target.value)}
              />
              <button type="submit">
                Register
              </button>
          </Container>
      </Modal>
    )
}