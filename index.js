const usuarios = [
    { username: 'tiagolimar' },
    { username: 'edmaralbneto' },
    { username: 'angelolustosa' },
    { username: 'Gustavo1701' },
    { username: 'miguelalves10' },
    { username: 'breno-oliveira98' },
    { username: 'rafaeoTW4' },
    { username: 'JoaoRoberto1' },
    { username: 'Breno-arauj' },
    { username: 'antoniowgaldino' }
];

const tabela = document.getElementById('tbody');

const getUsers = async (username) => {
    // const token = 'API_TOKEN';

    const URL = `https://api.github.com/users/${username}`
    const config = {
        headers: { 'Authorization': `token ${token}` }
    }

    try {
        const response = await axios.get(URL, config);
        console.log('response', response.data);

        // Exibir o resultado no elemento HTML
        //document.getElementById('result').textContent = JSON.stringify(response.data, null, 2);
        gerarTabela(response.data)
    } catch (error) {
        console.error('Erro ao consumir a API do GitHub:', error);
    }
}

const gerarTabela = (data) => {
    
    let conteudoTabela = `
    <tr>
    <td></td>
    <td><img src="${data.avatar_url}" style="border-radius: 3em;" width="35px"></img></td>
    <td>${data.name}</td>
    <td>${data.login}</td>
    <td>${data.public_repos}</td>
    <td>${data.url}</td>
    </tr>
    `;
    
    tabela.innerHTML += conteudoTabela;
    
}


usuarios.forEach(usuario => {            
    getUsers(usuario.username);
});

