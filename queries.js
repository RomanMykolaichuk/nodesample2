const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-54-246-87-132.eu-west-1.compute.amazonaws.com',
  database: 'd683ihok8nl14i',
  user:'orfcwfbshumknh',
  password: '2ec9d7ed7b275b068d88968f2f7ea4bbeeff43fffc35251717823b50b5828f16',
  port: 5432, 
  ssl: { rejectUnauthorized: false }
}) 
const getUsers = (request, response) => {
  pool.query('SELECT * FROM table_sample', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM table_sample WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}