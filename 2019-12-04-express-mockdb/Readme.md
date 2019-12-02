# Express

## Express application generator

https://expressjs.com/en/starter/generator.html

```bash
npx express-generator shop --no-view --git
```

Install deps:

```bash
cd shop
npm install
```

How to run the app:

```bash
DEBUG=shop:* npm start
```

`bin/www` - manage port (default 3000)
`public/` - can be use for js, css etc... (can be deleted)
`views/` - some templates (can be deleted)
`routes/`- routes (by default includes already `index` and `users`)

Useful keys:

```bash
express -h
...
--no-view       generate without view engine
--git           add .gitignore
```

## Express Live Reload

Use ```nodemon``` and ```livereload```

https://stackoverflow.com/a/45622245

The workaround looks roughly so:

first:
```bash
npm install nodemon # check package.json ;)

```

next add a script line to your package.json:

```
"live": "nodemon ./bin/www" 
```
In the shell
```bash
npm run live 
```

But you have to refresh browser.

## 

```
res.send('index page');

users -> records
```
Post request
```
curl -d 'title=mytitle&price=100.00' -v -i 'http://localhost:3000/records'
```

With JSON

curl --header "Content-Type: application/json" -d '{"title": "mytitle", "price": 100.00}' -v -i 'http:localhost:3000/records'

```
records/1
```

To handle POST you have to install 
```
sudo npm install --save body-parser
```

## Low DB

https://github.com/typicode/lowdb

install
```
npm install lowdb
```

## Reference

https://github.com/DigitalCareerInstitute/DS_record_shop

## Bug with infinite loop

https://stackoverflow.com/questions/44855839/nodemon-keeps-restarting-server






