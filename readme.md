<pre>
use mi guia para crear este proyecto
https://fmarcosdev.com/blog/passportjs-nodejs 
</pre>

### modulos para mi proyecto :]
express
morgan
cors
nodemon
eslint   eslint-plugin-import
jsdocs   jsdoc-api-plugin tui-jsdoc-template
sequelize sequelize-cli
sqlite3

passport
passport-google-oauth20
express-session

# mi proyecto en google
<pre>
Este proyecot creando en google tiene:
OAuth tiene un límite de 100 registros de alcance confidencial
</pre>

- nombre
    - -api-nodejs-passportjs-sqlite
- mi ID CLIENTE
    - 57821686997-bq1bqtnjm9phl5es8d1fjv9gg5k50m12.apps.googleusercontent.com
- secret KEY
    - JeXyXdaX6Ur3465GyOSySZeB

# luego de login creado
debe ser accesible solo para los que esten logeados


1- crear MIDDLEWARE/proteccion check is logged or not
```
export function isLogged(req, res, next) { // revisa
  req.user ? next() : res.sendStatus(401); // revisa google trae usuario
}
```

2- usar sessions , npm i express-session
- key , inicializa , inicializa session 
```
app.use(session({ secret: 'boby' })); // set my session key
app.use(passport.initialize()); // session start
app.use(passport.session()); // session for passport
```
 


