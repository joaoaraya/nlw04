import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 * 
 * request > recebendo
 * response > enviando
 */

// http://localhost:3333/users

app.get("/", (request, response) => {
    return response.json({ message: "hello World - NLW04" })
});

// 1 parametro => Rota(recurso API)
// 2 parametro => request, response

app.post("/", (resquest, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!" });
})

app.listen(3333, () => console.log("server is running!"));