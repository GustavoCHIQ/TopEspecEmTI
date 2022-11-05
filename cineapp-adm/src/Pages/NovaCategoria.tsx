import React, { useState } from "react";
import { Container, Button, TextField } from "@mui/material";

import "./styles.css";

export function NovaCategoria() {
    const [name, setName] = useState('');

    return (
        <Container maxWidth="sm" component="article" className="form" >
            <h1>Cadastrar Categoria</h1>
            <form>
                <TextField
                    id="name"
                    label="Nome"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    onClick={() => {
                        console.log(name);
                    }}
                />
                <br />
                <br />
                <Button className="btn-form" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container >
    );

}