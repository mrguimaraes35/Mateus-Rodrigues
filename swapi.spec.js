const request = require('supertest')

test('Deve visualizar informaçoes de cadastro, quando buscar por uma pessoa existente', async ()=> {

    const resposta = await request('https://swapi.dev/api').get('/people/1');

    expect(resposta.status).toBe(200);

    expect(resposta.body.films).toBeDefined();

    expect(resposta.body.vehicles.length).toBeGreaterThan(0);

    expect(resposta.body.name).toBe('Luke Skywalker');
});



test ('deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');

    expect(resposta.status).toBe(404);

    expect(resposta.body.detail).toBe('Not found');

    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });

});


test('Deve recuperar informações do planeta Tatooine', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine');
    expect(response.body.residents).toBeDefined();
});


test('Deve recuperar informações da nave Millennium Falcon', async () => {
    const response = await request('https://swapi.dev/api').get('/starships/10/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Millennium Falcon');
    expect(response.body.passengers).toBeDefined();
});

test('Deve recuperar informações do filme "A New Hope"', async () => {
    const response = await request('https://swapi.dev/api').get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('A New Hope');
    expect(response.body.director).toBe('George Lucas');
});

test('Deve retornar erro 404 ao buscar uma rota inexistente "/heroes"', async () => {
    const response = await request('https://swapi.dev/api').get('/heroes/');
    expect(response.status).toBe(404);
});

test('Deve recuperar informações do planeta Naboo', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/8/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Naboo');
    expect(response.body.climate).toBe('temperate');
});

test('Deve retornar erro 404 ao tentar acessar um id de planeta inexistente', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/9999/');
    expect(response.status).toBe(404);
});

test('Deve retornar erro 404 ao buscar por uma nave inexistente', async () => {
    const response = await request('https://swapi.dev/api').get('/starships/9999/');
    expect(response.status).toBe(404);
});


test('Deve verificar se o planeta Hoth existe e tem clima "frozen"', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/4/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Hoth');
    expect(response.body.climate).toBe('frozen');
});
