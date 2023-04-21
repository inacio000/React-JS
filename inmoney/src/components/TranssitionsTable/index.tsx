import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TranssitionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
            .catch(err => console.error(err));
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map( transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        {
                                            new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(transaction.amount)
                                        }
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {
                                            new Intl.DateTimeFormat('pt-BR').format(
                                                new Date(transaction.createdAt)
                                            )
                                        }
                                    </td>
                                </tr>
                            )
                        )
                    }
               </tbody>
            </table>
        </Container>
    )
}