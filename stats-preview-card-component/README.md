# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgements](#acknowledgements)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Screenshot](./images/screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Code-Course-Reviews/100-days-of-code/tree/main/stats-preview-card-component)
- Live Site URL: [Surge](https://stats-preview-card-component-fm.surge.sh)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS Precompiler

### What I learned

Using the `<picutre>` element to conditionally render images onto the DOM.

```html
<picture>
  <source
    srcset="./images/image-header-desktop.jpg"
    media="(min-width: 768px)" />
  <img
    class="card-image"
    src="./images/image-header-mobile.jpg"
    alt="Card Image" />
</picture>
```

### Continued development

Mostly just adjusting the padding, margin and font sizes etc to make the project closer to being pixel perfect to the design.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - This helped with using the `<picture>` element.

## Author

- Website - [Edward Hong](https://edwardhong.tech)
- Frontend Mentor - [@edward-hong](https://www.frontendmentor.io/profile/edward-hong)
- Twitter - [@codecourserevs](https://twitter.com/codecourserevs)
- Youtube - [@codecoursereviews](https://www.youtube.com/channel/UCMZA3I7RsWzerxqeTQf_VHQ)
- Reddit - [@codecoursereviews](https://www.reddit.com/user/codecoursereviews)

## Acknowledgements

Thank you to my Youtube viewers for the encouragement to continue with the #100DaysOfCode challenge.
