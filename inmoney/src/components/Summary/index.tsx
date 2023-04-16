import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saídas.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className='hightlite-bg'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}