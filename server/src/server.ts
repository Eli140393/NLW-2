import express from 'express';
import routes from './routes';
import cors from 'cors';


const app =  express();
app.use(cors());
app.use(express.json());

// get - Buscar ou listar um informação
// Post - criar alguma nova informação
// Put -  Atualizar uma informação
// Delete - Deletar uma informação

// parametros
//    Corpo (Request Body): Dados para criação ou atualização de um registro
//    Route Params: identificar qual recurso eu quero atualizar ou deletar
//    Query Params: Paginação, filtros, ordenação 

app.use(routes);
  
app.listen(3333);