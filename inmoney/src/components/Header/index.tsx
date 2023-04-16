import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {

    }

    function handleCloseNewTransactionModal() {
        
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="inmoney logo" />
                <button type="button">
                    New transition
                </button>
            </Content>
        </Container>
    )
}