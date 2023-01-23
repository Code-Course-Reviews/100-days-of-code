# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Order summary card solution](#frontend-mentor---order-summary-card-solution)
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

- See hover states for interactive elements

### Screenshot

![Screenshot](./images/screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Code-Course-Reviews/100-days-of-code/tree/main/order-summary-component)
- Live Site URL: [Surge](https://order-summary-component-fm.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS precompiler

### What I learned

I learnt about specifically the box-shadow property and values.

```scss
&-proceed {
  width: 100%;
  border: none;
  background-color: $bright-blue;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1.7rem 0 0.65rem;
  font-weight: 900;
  font-size: 1rem;
  box-shadow: 0 1rem 0.5rem 0 $pale-blue;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
}
```

### Continued development

Finding more opportunities to deepen my knowledge of CSS/SCSS.

### Useful resources

- [CSS Tricks](https://css-tricks.com/almanac/properties/b/box-shadow/) - This helped me setting the box shadow of the button and card.

## Author

- Website - [Edward Hong](https://edwardhong.tech)
- Frontend Mentor - [@edward-hong](https://www.frontendmentor.io/profile/edward-hong)
- Twitter - [@codecourserevs](https://twitter.com/codecourserevs)
- Youtube - [@codecoursereviews](https://www.youtube.com/channel/UCMZA3I7RsWzerxqeTQf_VHQ)
- Reddit - [@codecoursereviews](https://www.reddit.com/user/codecoursereviews)

## Acknowledgements

Thank you to my Youtube viewers for the encouragement to continue with the #100DaysOfCode challenge.
