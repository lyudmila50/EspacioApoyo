import express, { Router } from "express";

const app = express();
app.use(express.json());

app.listen(3000, () =>
    console.log('Bienvenido a mi apiiiiiiiiii <3'),

)
export const App = () => {
    return (
        <AuthProvider>
            <Route exact path="/">
                <LoginPage />
            </Route>
            
        </AuthProvider>
    );
}