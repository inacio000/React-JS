import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TranssitionsTable() {

    useEffect(() => {
        api.get('transitions')
            .then(response => console.log(response.data))
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
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">R$12.000</td>
                        <td>Development</td>
                        <td>20/02/2023</td>
                    </tr>

                    <tr>
                        <td>Home Rent</td>
                        <td className="withdraw">- R$1.000</td>
                        <td>Home</td>
                        <td>16/02/2023</td>
                    </tr>
               </tbody>
            </table>
        </Container>
    )
}