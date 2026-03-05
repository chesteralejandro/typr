# Typr ![Status](https://img.shields.io/badge/status-stable-blue) ![npm](https://img.shields.io/npm/v/@chesteralejandro/typr) ![license](https://img.shields.io/npm/l/@chesteralejandro/typr)

> A lightweight, declarative typewriter animation library built with **vanilla JavaScript**. No dependencies, no setup — just add attributes to your HTML.

## 🌏 Landing Page

[https://chesteralejandro.github.io/typr](https://chesteralejandro.github.io/typr)

## 📦 Installation

**CDN (Recommended)**

Latest version

```html
<script
	defer
	src="https://cdn.jsdelivr.net/npm/@chesteralejandro/typr/dist/typr.min.js"
></script>
```

Stable Version

```html
<script
	defer
	src="https://cdn.jsdelivr.net/npm/@chesteralejandro/typr@1.0.0/dist/typr.min.js"
></script>
```

**NPM**

```bash
npm install @chesteralejandro/typr
```

## ❓ Why Typr?

- **Declarative** — configure entirely with HTML attributes; no extra JavaScript code required.
- **Lightweight** — ~5 KB, minimal footprint for your projects.
- **Reusable** — works on any HTML element with `data-typr`.
- **Customizable** — cursor symbol, typing speed, pauses, blinking, and more.
- **Production-ready** — npm package + CDN support.

## ✨ Features

- Pure vanilla JavaScript.
- Scoped using an IIFE (no global variable pollution).
- Fully configurable with `data-*` attributes.
- Dynamically injects cursor styles.
- Supports pause-on-hover.
- Loops through multiple phrases separated by `|`.

## 🛠️ Example Setup

```html
<h1>I am a <span data-typr>Web Developer|Designer|Coder</span></h1>
```

Optional cursor symbol

```html
<h1>I am a <span data-typr="_">Web Developer|Designer|Coder</span></h1>
```

## ⚙️ Attributes

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Default</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>data-typr</td>
        <td>
            <b>Required</b>. Activates the typewriter animation.<br/> 
            Optional value sets cursor symbol.
        </td>
        <td>|</td>
        <td>data-typr <br /> data-typr="_"</td>
    </tr>
    <tr>
        <td>data-typr-color</td>
        <td>Cursor color. Accepts any valid CSS color.</td>
        <td>hsl(0,0%,7%)</td>
        <td>data-typr-color="red"</td>
    </tr>
    <tr>
        <td>data-typr-blink</td>
        <td>Turns cursor blinking on/off.</td>
        <td>on</td>
        <td>data-typr-blink="off"</td>
    </tr>
    <tr>
        <td>data-typr-speed</td>
        <td>Typing speed per character in milliseconds.</td>
        <td>100</td>
        <td>data-typr-speed="50"</td>
    </tr>
    <tr>
        <td>data-word-delay</td>
        <td>Delay between words in milliseconds.</td>
        <td>500</td>
        <td>data-word-delay="800"</td>
    </tr>
    <tr>
        <td>data-pause-delay</td>
        <td>Delay after typing before deleting in milliseconds.</td>
        <td>2000</td>
        <td>data-pause-delay="3000"</td>
    </tr>
    
</table>

## 💡 Notes

- The element's inner content **must contain pipe-separated phrases:** `Web Developer | Designer | Coder`.
- Hovering over the element **pauses the animation** automatically.

## 📂 Project Structure

```
typr/
├── dist/
│   ├── typr.js
│   └── typr.min.js
├── docs/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── favicon.png
├── src/
│   └── typr.js
├── LICENSE
├── README.md
└── CHANGELOG.md
```
