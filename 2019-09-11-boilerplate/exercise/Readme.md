## Setup

1. Clone this repository into a new project folder (replace `[project name]` with your project's name)

   ```
   git clone git@github.com:DigitalCareerInstitute/dci-boilerplate-II.git [project name]
   ```

2. Delete the boilerplate's git history

   ```
   cd <project name>
   rm -rf .git
   ```

3. Create a new github repo by yourself.

4. Copy to you repo the boilerplate folder.

5. Edit `package.json` to add you project's name

   `package.json`

   ```json
   {
     "name": "[project name]",
     ...
     "author": "[your name]"
   }
   ```

6. Edit `index.html` to add your projects name

   ```html
   ...
   <head>
     ...
     <title>[project name]</title>
   </head>
   ...
   ```

7. Install the dependencies

   ```
   npm install
   ```

8.  Have fun coding :D

## Useful Commands

### Development

Run **Webpack** in **Development** mode and start coding!

```
npm start
```

### Production

Run **Webpack** in **Production** mode.

```
npm run build
```

### Deploy to Github Pages

Deploy your code to **Github Pages**: this script creates a 'gh-pages' branch and serves the production bundle to this branch. For this to work, make sure you already have a remote repo on github.

```
npm run deploy
```



1. Write the text of the song and the title in a separate js file and import it import in the ```ìndex.js```. Hint you might use
multiline text representation using backquotes in JS2016 like this:

```javascript
export const text = `
    There is a house in New Orleans
    They call the Rising Sun
    And it's been the ruin of many a poor boy
    And God I know I'm one
`;
```

```javascript
export const myTitle = 'House of the Rising Sun';
```

2. Find a nice font apply to the title. We recommend to download the file in format **ttf**. The font can be imported into your scss file as follows:
```scss
@font-face {
  font-family: 'MyWebFont';
  src: url('../fonts/Rockit.ttf')  format('truetype')
}
```

Then it can be used directly:
```scss
#title {
  font-family: 'MyWebFont';
}
```

3. Put your font definition into a separate file ```font.css``` and use import to get it imported in ```main.scss```
```scss
@import "./font.css";
```

4. Play around with styling.