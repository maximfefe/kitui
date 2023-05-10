const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { faker } = require('@faker-js/faker');
const css = require('css');

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

router.get('/archive', (req, res) => {
  if (typeof req.query.filename === "undefined" || req.query.filename === ""){
    return res.status(400).send('Veuillez spécifier le nom du fichier souhaité.');
  }
  const filepath = path.join(__dirname, `../public/stylesheets/archives/${req.query.filename}`);
  if (fs.existsSync(filepath)){
    return res.json(storeMaker(req.query.filename, getVariables(filepath)));
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
  let filename = generateCss(req.body);
  if (req.body.name !== null){
    const directoryPath = path.join(__dirname, '../public/stylesheets/')
    fs.readFile(directoryPath + filename, (err1, newCss) => {
      if (err1) throw err1;
      fs.readFile(`${directoryPath}archives/${req.body.name}`, (err2, existingCss) => {
        if (err2) throw err2;
        // Si le nouveau fichier est identique à l'ancien (Téléchargement d'une archive sans modifications)
        if (newCss.toString() === existingCss.toString()) {
          // On supprime le nouveau fichier
          fs.unlink(directoryPath + filename, (err) => {
            if (err) throw err;
            // Si le nouveau fichier est supprimé on télécharge l'ancien
            filename = req.body.name;
          })
        }
      });
    });
  }
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

  let css = `:root {
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
    --kitui-layout-grid-column: ${data.layout.grid.nbColumn};
    --kitui-layout-grid-column-gap:${data.layout.grid.gridColumnGap}px;
    --kitui-layout-grid-row-gap:${data.layout.grid.gridRowGap}px;
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
  let name = getName();
  // Écrire la nouvelle version du fichier CSS avec le contenu ajouté
  fs.writeFileSync(path.join(__dirname, `../public/stylesheets/archives/${name}.css`), css, 'utf-8');

  return `archives/${name}.css`;
}

function getName() {
  const animal = faker.animal.type();
  const state = faker.address.state();

  const filepath = path.join(__dirname, `../public/stylesheets/archives/${state}-${animal}.css`);
  if (fs.existsSync(filepath)) {
    return getName();
  }

  return `${state}-${animal}`;
}

function getVariables(path){
  const cssString = fs.readFileSync(path, 'utf8');
  const parsedCss = css.parse(cssString);
  return parsedCss.stylesheet.rules[0].declarations
      .filter(rule => rule.type === 'declaration')
      .reduce((result, rule) => {
        result[rule.property] = rule.value;
        return result;
      }, {});
}


function storeMaker(kitName, variables) {
  return {
    name: kitName,
    layout:{
      container: {
        "marginX": variables['--kitui-layout-container-marginX'].slice(0, -2),
        "marginY": variables['--kitui-layout-container-marginY'].slice(0, -2),
        "paddingX": variables['--kitui-layout-container-paddingY'].slice(0, -2),
        "paddingY": variables['--kitui-layout-container-paddingX'].slice(0, -2),
        "maxWidth": variables['--kitui-layout-container-maxWidth'].slice(0, -1),
      },
      grid:{
        nbColumn: variables['--kitui-layout-grid-column'],
        gridColumnGap: variables['--kitui-layout-grid-column-gap'].slice(0, -2),
        gridRowGap: variables['--kitui-layout-grid-row-gap'].slice(0, -2),
      }
    },
    colors:{
      dark:{
        "main": variables['--kitui-colors-dark-main'],
        "lighter": variables['--kitui-colors-dark-lighter'],
        "darker": variables['--kitui-colors-dark-darker']
      },
      light:{
        "main": variables['--kitui-colors-light-main'],
        "lighter": variables['--kitui-colors-light-lighter'],
        "darker": variables['--kitui-colors-light-darker']
      },
      accent: variables['--kitui-colors-accent'],
    },
    fonts:{
      title:{
        "fontFamily": variables['--title-font'],
        "fontSize": variables['--title-size'].slice(0, -2),
        "fontWeight": variables['--title-weight'],
      },
      text:{
        "fontFamily": variables['--text-font'],
        "fontSize": variables['--text-size'].slice(0, -2),
      }
    },
    component:{
      bouton:{
        fontSize: variables['--btn-font-size'].slice(0, -2),
        backgroundColor: variables['--btn-bg-color'],
        borderRadius: variables['--btn-border-radius'].slice(0, -2),
        padding: variables['--btn-padding'].slice(0, -2),
        margin: variables['--btn-margin'].slice(0, -2)
      },
      card:{
        borderRadius: variables['--card-border-radius'].slice(0, -2),
        padding: variables['--card-padding'].slice(0, -2),
        margin: variables['--card-margin'].slice(0, -2)
      }
    }
  }
}

module.exports = router;
