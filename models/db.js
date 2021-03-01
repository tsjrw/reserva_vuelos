const { Client } = require('pg')

require('dotenv').config()

const cliente = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

cliente.connect((err => {
  if(err){
    console.log(err.stack)
  }else{
    console.log('Conexión a la base de datos realizada con éxito')
  }
}))

const consultar = (consulta, mensaje) =>{
  cliente.query(consulta, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(mensaje);
    cliente.end();
  });
}

module.exports = consultar