const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const PORT = 3000;

const app = express();

app.engine('hbs', handlebars());

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);

app.use(shopRoutes);

app.use((req, res, next) => {
  console.log('dsdsds');
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Not Found' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
