## Tpescrpt/Superset (from Microsoft)

```typescript
    type User = {
        name: String
        email: String
        address: {
            city: String
            state?: String
        }
    }

    function showWellcomeMsg(user: User) {
        return `
            Wellcome: ${user.name}, your email is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}
        `
    }

    showWellcomeMsg({
        name: 'Inacio',
        email: 'inacio@mail.com',
        address: {
            city: 'Nizhny',
            state: 'NO'
        }
    })
```

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2016",  

    "lib": ["dom", "dom.iterable", "esnext"], 

    "jsx": "react-jsx",  // Estamoss utilizando jsx
                               
    "module": "commonjs",    

    "moduleResolution": "node10", 

    "resolveJsonModule": true, 

    "allowJs": true, // Dar a conhecer que teremos js ou ts    

    "noEmit": true,   

    "isolatedModules": true,  

    "allowSyntheticDefaultImports": true,

    "esModuleInterop": true,    

    "forceConsistentCasingInFileNames": true,  

    "strict": true, // Entrar em modo strict do js *(modo de lhe dar cm erros)         

    "skipLibCheck": true                              
  },
  "include": ["src"], // Onde estara o codigo da nossa app
}

```