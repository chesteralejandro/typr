# Typewriter Effect Library

> A lightweight, reusable typewriter animation script built with modern, dependency-free vanilla JavaScript.

## 🌏 Landing Page

[https://chesteralejandro.github.io/poc-typewriter-effect](https://chesteralejandro.github.io/poc-typewriter-effect)

## 📦 Source Code

[https://github.com/chesteralejandro/poc-typewriter-effect](https://github.com/chesteralejandro/poc-typewriter-effect)

## ✨ Features

- Pure JavaScript (no dependencies).
- Fully scoped using an IIFE (no global variable pollution).
- Configurable via `data-*` attributes.
- Uses `document.currentScript` to read configuration.
- Dynamically injects cursor blinking styles.
- Loops through multiple words.
- Clean and modular function structure for readability.

## 📂 Project Structure

```
├── index.html
├── style.css
├── typewriter.js
└── README.md
```

## 🛠️ Example Setup

```html
<h1>I am an aspiring <span class="your-custom-class">&nbsp;</span></h1>

<script
	defer
	src="https://chesteralejandro.github.io/poc-typewriter-effect/typewriter.js"
	data-class="your-custom-class"
	data-word-list='["Web Developer.", "Designer.", "Coder."]'
></script>
```

## ⚙️ Configuration Options

### Span Tag

| Attribute | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| class     | String | ✅ Yes   | Class name of the span element to animate. |

### Script Tag

| Attribute      | Type       | Required | Description                             |
| -------------- | ---------- | -------- | --------------------------------------- |
| src            | String     | ✅ Yes   | Location of the JavaScript source code. |
| data-class     | String     | ✅ Yes   | Class name provided to the element.     |
| data-word-list | JSON Array | ✅ Yes   | Words or phrases to type.               |

⚠️ **Important Configuration Rule:** The value of the script's `data-class` must match exactly the `class` of the element.

## 💡 What I Learned

- It is possible to pass value to the script tag via `data-*` attribute.
- You can refer to the containing script tag via `document.currentScript`.
- You can create a `style` tag and append it to the `head` tag.
- You can dynamically write string of styles for a style tag and assign it to `style.textContent`.
- I realized that the **script** tag and **style** tag are also HTML elements and you can also access them by `document.getQuerySelector`, `document.getElementById`, etc.

## 🎯 Possible Enhancements

- Configurable typing speed (data-typing-speed).
- Add pause-on-hover feature.
- Conversion to a Web Component version.
