import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { createServer } from "miragejs";

createServer ({
  routes() {
    this.namespace = 'api';

    this.get('/transitions', () => {
      return [
        {
          id: 1,
          title: 'Translation 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createDate: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}