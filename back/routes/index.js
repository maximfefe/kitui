const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const cors = require('cors');

router.use(express.json());
router.use(cors());

router.get('/cdn/style/archive', (req, res) => {
  if (typeof req.query.filename === "undefined" || req.query.filename === ""){
    return res.status(400).send('Veuillez spécifier le nom du fichier souhaité.');
  }
  const filepath = path.join(__dirname, `../public/stylesheets/archives/${req.query.filename}.css`);
  if (fs.existsSync(filepath)){
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(filepath);
  }else{
    res.status(404).send('Aucun fichier trouvé.');
  }
});

router.get('/archives', (req, res) => {
  const directoryPath = path.join(__dirname, '../public/stylesheets/archives/');
  const files = [];

  fs.readdir(directoryPath, function (err, fileList) {
    if (err) {
      return res.status(500).send('Une erreur est survenu lors du traitement.')
    } else {
      fileList.forEach(function (file) {
        if (fs.statSync(path.join(directoryPath, file)).isFile()) {
          files.push(file);
        }
      });
      res.json(files);
    }
  });
});

router.post('/generate-css', (req, res) => {
  const filename = generateCss(req.body);
  const filepath = path.join(__dirname, `../public/stylesheets/${filename}`);
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.download(filepath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors du téléchargement du fichier');
    }
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
