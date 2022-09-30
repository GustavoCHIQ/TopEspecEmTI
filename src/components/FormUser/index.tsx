import { KeyboardEvent, useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { viaCep } from "../../api/viaCep";
import { FormUserStyle } from './styled';
import { BeatLoader } from "react-spinners";


export function FormUser() {
    const [isLoading, setIsLoading] = useState(false)
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cepDigitado, setCepDigitado] = useState('')

    const listAdress = async () => {

        const list = await viaCep(cepDigitado)
        setEndereco(list.logradouro)
        setCidade(list.localidade)
        setEstado(list.uf)
        setIsLoading(false)
    }


    function handleKeyPress(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {

        if (event.key === "Enter") {
            setIsLoading(true)
            setTimeout(listAdress, 4000);

        } else {
            setCepDigitado(cepDigitado + event.key)
        }
    }

    return (
        <FormUserStyle>
            <Form>
                <Row>
                    <h3>Cadastro Clientes</h3>
                </Row>
                <Form.Group className="mb-12" controlId="formBasicName">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Digite seu Nome" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicRG">
                            <Form.Label column>RG: </Form.Label>
                            <Form.Control type="text" placeholder="RG" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCPF">
                            <Form.Label column>CPF: </Form.Label>
                            <Form.Control type="text" placeholder="CPF" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDTNascimento">
                            <Form.Label column>Data de Nascimento: </Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {isLoading ? <BeatLoader color="#c536d6" /> : ''}
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCEP">
                            <Form.Label column>CEP: </Form.Label>
                            <Form.Control type="text" placeholder="CEP" defaultValue={cepDigitado} onKeyPress={(event) => handleKeyPress(event)} />
                        </Form.Group>
                    </Col>
                    <Col xs={8}>
                        <Form.Group className="mb-3" controlId="formBasicEndereco">
                            <Form.Label column>Endereço: </Form.Label>
                            <Form.Control type="text" placeholder="Endereço" defaultValue={endereco} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCidade">
                            <Form.Label column>Cidade: </Form.Label>
                            <Form.Control type="text" placeholder="Cidade" defaultValue={cidade} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEstado">
                            <Form.Label column>Estado: </Form.Label>
                            <Form.Control type="text" placeholder="Estado" defaultValue={estado} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="button">Salvar</Button>
            </Form>
        </FormUserStyle >
    )
}