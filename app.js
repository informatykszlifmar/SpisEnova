const sql = require('mssql')
const sqlConfig = require('./dbconfig')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
  console.log(
    `API wystartowało na porcie ${port} a nazwa bazy to ${sqlConfig.database}`,
  )
})

app.get('/', (req, res) => {
  res.send('Budowa API podłączonego do Enovy !!!')
})

app.get('/API/V1/:id', async (req, res) => {
  let liczba_znakow = req.params.id.length
  const nr_szukany = req.params.id
  try {
    if (liczba_znakow == 7) {
      var pol = await sql.connect(sqlConfig)
      var result1 = await sql.query`SELECT Towary.ID, Towary.EAN, Jednostki.Kod AS JEDN, Towary.Kod AS ZAPAS, Towary.Nazwa AS NAZWA   FROM Jednostki, Towary WHERE Towary.Jednostka = Jednostki.ID  AND  Towary.Kod = ${nr_szukany}`

      let ileWierszyZwrocono = result1.rowsAffected[0]
      console.log(typeof ileWierszyZwrocono)
      console.log(`Zapytanie SQL zwróciło ${ileWierszyZwrocono} wiersz/y`)
      //res.send(result1);
      res.send(result1.recordset[0])
      await sql.close(pol)
    } else {
      res.send({ ERR: 'Nie właściwa liczba znaków w parametrze.' })
      await sql.close(pol)
    }
  } catch (err) {
    res.send(err)
    console.log(err)
    await sql.close(pol)
    throw err
  }
})

app.get('/API/V2/', async (req, res) => {
  res.send(req)
})
