const express = require('express');
const cors = require('cors');
require("dotenv").config()
const routes = require('./routes/routes');
const usuarios = require('./models/users');
const avaliacoes = require('./models/avaliacoes');
const tipos_usuarios = require('./models/tipos_usuarios')
const cookieParser = require('cookie-parser')

tipos_usuarios.sync();
usuarios.sync();
avaliacoes.sync();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log('servidor rodando na porta 3001'));