https://sass-lang.com/guide
https://www.sassmeister.com (SASS master)

# Partials
(1) https://sass-lang.com/guide
(2) https://dev.to/sarah_chima/using-sass-partials-7mh

# Mixins
Basics:
(3) https://scotch.io/tutorials/how-to-use-sass-mixins
(4) https://www.sitepoint.com/sass-basics-the-mixin-directive/ (!!! Start with it)
10 best mixins:
https://engageinteractive.co.uk/blog/top-10-scss-mixins

CSS triangle:
https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
https://css-tricks.com/snippets/css/css-triangle/

Animation:
https://marksheet.io/css-animations.html
https://marksheet.io/sass-mixins.html

# Some demo
But very difficult
https://scotch.io/tutorials/getting-started-with-sass

Media snippet???
https://www.w3schools.com/css/css_rwd_mediaqueries.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_img_gallery
https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_ex2

https://www.w3schools.com/css/css3_mediaqueries_ex.asp

# box sizing
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing


```scss
$breakpoints: (
    "phone":        400px,
    "phone-wide":   480px,
    "phablet":      560px,
    "tablet-small": 640px,
    "tablet":       768px,
    "tablet-wide":  1024px,
    "desktop":      1248px,
    "desktop-wide": 1440px
);
@mixin mq($width, $type: min) {
    @if map_has_key($breakpoints, $width) {
        $width: map_get($breakpoints, $width);
        @if $type == max {
            $width: $width - 1px;
        }
        @media only screen and (#{$type}-width: $width) {
            @content;
        }
    }
}

.site-header {
    padding: 2rem;
    font-size: 1.8rem;
    @include mq('tablet-wide') {
        padding-top: 4rem;
        font-size: 2.4rem;
    }
}
```

```scss
@mixin linx ($link, $visit, $hover, $active) {
  a {
    color: $link;
    &:visited {
      color: $visit;
    }
    &:hover {
      color: $hover;   
    }
    &:active {
      color: $active;
    }
  }
}

@include linx(white, blue, green, red);
```

```scss
$font-base: 12px;

@mixin sample {
  font-size: $font-base;
}

p {
  @include sample;
}
```

