1. Write the text of the song in a separate js file and import it import in the ```ìndex.js```. Hint you might use
multiline text representation using backquotes in JS2016 like this:

```javascript
export default text = `
    There is a house in New Orleans
    They call the Rising Sun
    And it's been the ruin of many a poor boy
    And God I know I'm one
`;
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