export async function viaCep(cep: String) {
    try {
        let response = await fetch('http://viacep.com.br/ws/' + cep + '/json/')
        let dados = await response.json()
        return dados
    } catch (error) {
        return []
    }
}