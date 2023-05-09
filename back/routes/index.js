const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(express.json());

router.post('/generate-css', (req, res) => {
  const filename = generateCss(req.body);
  const filepath = path.join(__dirname, `../public/stylesheets/archives/${filename}`);
  res.json({filename})
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.download(filepath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors du téléchargement du fichier');
    }
    //fs.unlinkSync(filepath);
  });
});

function generateCss(data) {
  // code pour générer le fichier CSS
  const existingCss = fs.readFileSync(path.join(__dirname, '../public/stylesheets/kitui.css'), 'utf-8');

  let css = `/* Définition des variables globales */
    :root {
    --title-font: ${data.fonts.title.fontFamily};
    --title-size: ${data.fonts.title.fontSize}px;
    --title-weight: ${data.fonts.title.fontWeight};
    --text-font: ${data.fonts.text.fontFamily};
    --text-size: ${data.fonts.text.fontSize}px;
    --btn-font-size: ${data.component.bouton.fontSize}px;
    --btn-bg-color: ${data.component.bouton.backgroundColor};
    --btn-border-radius: ${data.component.bouton.borderRadius}px;
    --btn-padding: ${data.component.bouton.padding}px;
    --btn-margin: ${data.component.bouton.margin}px;
    --card-border-radius: ${data.component.card.borderRadius}px;
    --card-padding: ${data.component.card.padding}px;
    --card-margin: ${data.component.card.margin}px;
    --kitui-layout-container-marginY: ${data.layout.container.marginY}px;
    --kitui-layout-container-marginX: ${data.layout.container.marginX}px;
    --kitui-layout-container-paddingY: ${data.layout.container.paddingY}px;
    --kitui-layout-container-paddingX: ${data.layout.container.paddingX}px;
    --kitui-layout-container-maxWidth: ${data.layout.container.maxWidth}%;
    --kitui-layout-grid-column: ${data.layout.grid.column}%;
    --kitui-layout-grid-fr:${data.layout.grid.fr}fr;
    --kitui-layout-grid-gap:${data.layout.grid.gap}px;
    --kitui-colors-dark-main: ${data.colors.dark.main};
    --kitui-colors-dark-lighter: ${data.colors.dark.lighter};
    --kitui-colors-dark-darker: ${data.colors.dark.darker};
    --kitui-colors-light-main: ${data.colors.light.main};
    --kitui-colors-light-darker: ${data.colors.light.darker};
    --kitui-colors-light-lighter: ${data.colors.light.lighter};
    --kitui-colors-accent: ${data.colors.accent};
  }
  `;

  css += existingCss; // Ajouter le contenu du fichier existant
  let date = formatedDate();
  // Écrire la nouvelle version du fichier CSS avec le contenu ajouté
  fs.writeFileSync(path.join(__dirname, `../public/stylesheets/archives/kitui-${date}.css`), css, 'utf-8');

  return `archives/kitui-${date}.css`;
}

function formatedDate(){
  let date = new Date();
  let day = ('0' + date.getDate()).slice(-2);
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  return `${day}-${month}-${year}-${hours}:${minutes}`;
}

module.exports = router;
