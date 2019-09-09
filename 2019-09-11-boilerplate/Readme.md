# Webpack

The outdated way to import dependencies:

```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script srt="app.js"></script>
```

This way has two cons:

- First, the global namespace gets polluted with a lot of global variables.
- Second, we have to care about all our dependencies by ourselves: either download or search for cdn links.

The (Webpack)[https://webpack.js.org] allows to bundle your code easily.  it helps to eliminate the implicit dependency on sorted script tags in our markup. Instead of including many separate scripts, we include single or few bundles using the same script tag.

```html
    <script srt="bundle.js"></script>
```

Bundle should be installed first of all in our system:

    npm install webpack --save-dev

Bundle the code:

    ./node_modules/.bin/webpack input.js

Now you can find under the ```dist``` the ```main.js``` file

# Bable JS

Convert modern JS to old to increase compatibility (link)[https://babeljs.io]

Usage: https://babeljs.io/docs/en/usage

Install CLI:

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

Create file ```babel.config.js```:

```javascript

```

Try it:

    ./node_modules/.bin/babel input.js -o output.js

# HTML

## html-loader

# CSS

## style-loader

(link)[https://github.com/webpack-contrib/style-loader]

How to install:

    npm install --save-dev style-loader

Basic usage

# Remarks

 Install:

    npm install webpack-dev-server --save-dev

Analyse logs.

Live reload:

    webpack-dev-server

# Boilerplate II

## CSS

### style-loader

```style.css```:

```css
.myclass {
    height: 100px;
    width: 100px;
    background: green;
}
```

```index.js```:
```javascript
const divElement = document.createElement('div');
divElement.className = 'myclass';

document.body.appendChild(divElement);

```

# CSS Sun Style

https://natebal.com/blog/project/glowing-css/

```div#sun```:

```
  position: absolute;
  left: 20px;
```

```css
#text {
  position: absolute;
  top: 20px;
  left: 30%;
  width: 600px;
  height: 700px;
  background: white;
  z-index: 100;
}
```

# House of Rising Sun

    There is a house in New Orleans
    They call the Rising Sun
    And it's been the ruin of many a poor boy
    And God I know I'm one

    My mother was a tailor
    She sewed my new blue jeans
    My father was a gamblin' man
    Down in New Orleans

    Now the only thing a gambler needs
    Is a suitcase and trunk
    And the only time he's satisfied
    Is when he's all drunk

    Oh mother tell your children
    Not to do what I have done
    Spend your lives in sin and misery
    In the House of the Rising Sun

    Well, I got one foot on the platform
    The other foot on the train
    I'm goin' back to New Orleans
    To wear that ball and chain

    Well, there is a house in New Orleans
    They call the Rising Sun
    And it's been the ruin of many a poor boy
    And God I know I'm one

# HTML

```html
<body>
  <div id="top"></div>
  <div class="wrapper">
    <div id="sun"></div>
    <div id="title">House of the Rising Sun</div>
    <pre id="text">
      
      There is a house in New Orleans
      They call the Rising Sun
      And it's been the ruin of many a poor boy
      And God I know I'm one

      My mother was a tailor
      She sewed my new blue jeans
      My father was a gamblin' man
      Down in New Orleans

      Now the only thing a gambler needs
      Is a suitcase and trunk
      And the only time he's satisfied
      Is when he's all drunk

      Oh mother tell your children
      Not to do what I have done
      Spend your lives in sin and misery
      In the House of the Rising Sun

      Well, I got one foot on the platform
      The other foot on the train
      I'm goin' back to New Orleans
      To wear that ball and chain
      
      Well, there is a house in New Orleans
      They call the Rising Sun
      And it's been the ruin of many a poor boy
      And God I know I'm one

    </pre>
  </div>
  <div id="bottom"></div>
</body>
```


# CSS

```scss
// This is where your styles can go, import any other scss or css files here or write your own style directly below
/*
body {
  background: #000;
}
*/

#top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80%;
  /* background: -webkit-linear-gradient(red, orange); */
  /* For Safari 5.1 to 6.0 */
  /* background: -o-linear-gradient(red, orange); */
  /* For Opera 11.1 to 12.0 */
  /* background: -moz-linear-gradient(red, orange); */
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(red, orange);
  /* Standard syntax */
}

#bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;

  background: linear-gradient( black, darkred);
  /*background: -webkit-linear-gradient(#080405, #5f1105);*/
  /* For Safari 5.1 to 6.0 */
  //background: -o-linear-gradient(#080405, #5f1105);
  /* For Opera 11.1 to 12.0 */
  //background: -moz-linear-gradient(#080405, #5f1105);
  /* For Firefox 3.6 to 15 */
  //background: linear-gradient(#5f1105, );
  /* Standard syntax */
}

/*
#top {
  top: 0;
}

#bottom {
  bottom: 0;
}
*/

div#sun {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  margin: 7em auto;
  padding: 7em;
  box-shadow: 0 0 60px 30px yellow, 0 0 100px 60px red, 0 0 140px 90px yellow;

  position: absolute;
  left: 20px;
}

.wrapper {
  position: absolute;
  width: 100%;
  margin: 0em auto;
  top: 0px;
}

#text {
  position: absolute;
  top: 50px;
  left: 30%;
  width: 500px;
  height: 450px;
  background: white;
  z-index: 100;
}

@font-face {
  font-family: 'MyWebFont';
  src: url('../fonts/Rockit.ttf')  format('truetype'), /* Safari, Android, iOS */
}

#title {
  position: absolute;
  top: 20px;
  left: 30%;
  width: 500px;
  height: 20px;
  z-index: 100;
  font-family: 'MyWebFont';
}
```


# Put text of the song into a separate file
# Add font

To summarize, to avoid any font related errors with webpack, you need to download file-loader, integrate it within your webpack config, and import whatever fonts you wish to use into your CSS or SCSS files. If you have some local font files of your own, place them in a font directory within src and reference them within .style.scss using @font-face as you normally would—webpack will see that you're referencing a font file and run it through the file-loader like it did with Font Awesome and Google Fonts. 

https://chriscourses.com/blog/loading-fonts-webpack

main.scss:
```scss
 @font-face {
    font-family: FoundersGrotesk;
    src: url('./fonts/FoundersGroteskWeb-Bold.eot') format('eot'),
         url('./fonts/FoundersGroteskWeb-Bold.woff') format('woff'),
         url('./fonts/FoundersGroteskWeb-Bold.woff2') format('woff2');
    font-weight: bold;
}
```

https://css-tricks.com/snippets/css/using-font-face/

Find you font here:

https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=latin

Rock fonts:
https://www.1001fonts.com/Music-fonts.html -> Rock It

```scss
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```



