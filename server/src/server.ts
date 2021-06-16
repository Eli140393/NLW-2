import express from 'express';

const app =  express();

app.use(express.json());

// get - Buscar ou listar um informação
// Post - criar alguma nova informação
// Put -  Atualizar uma informação
// Delete - Deletar uma informação

// parametros
//    Corpo (Request Body): Dados para criação ou atualização de um registro
//    Route Params: identificar qual recurso eu quero atualizar ou deletar
//    Query Params: Paginação, filtros, ordenação 
app.post('/', (request, response) => {
return response.json({message: 'Hello World'});  
  
});
app.listen(3333);