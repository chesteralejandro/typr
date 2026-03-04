# Typr ![Status](https://img.shields.io/badge/status-active-brightgreen)

A lightweight, dependency-free typewriter animation library built with modern vanilla JavaScript.

Typr allows you to create animated typing effects using simple declarative `data-*` attributes — no configuration scripts required.

## 🌏 Demo Landing Page

[https://chesteralejandro.github.io/typr](https://chesteralejandro.github.io/typr)

## ✨ Features

- Zero dependencies
- Fully scoped (IIFE – no global pollution)
- Declarative HTML API (`data-*` attributes)
- Custom cursor symbol
- Custom cursor color
- Adjustable typing speed
- Adjustable word delay
- Adjustable pause delay
- Optional cursor blinking toggle
- Pause on hover support
- Automatically initializes on DOM load
- Lightweight and CDN-friendly

## 📦 Installation (CDN)

### jsDelivr (Recommended)

```html
<script
	defer
	src="https://cdn.jsdelivr.net/gh/chesteralejandro/typr@latest/dist/typr.js"
></script>
```

## 🛠️ Basic Usage

### Important Notes

- Phrases must be pipe-separated:

```html
<h1>I am a <span data-typr>Web Developer|Designer|Coder</span></h1>
```

## ⚙️ Configuration Options

Typr is configured using attributes directly on the element.

| Attribute          | Required | Default        | Description                                      |
| ------------------ | -------- | -------------- | ------------------------------------------------ |
| `data-typr`        | ✅ Yes   | \|             | Optional value sets the cursor symbol            |
| `data-typr-color`  | ❌ No    | hsl(0, 0%, 7%) | Cursor color. Accepts any valid CSS color value. |
| `data-typr-speed`  | ❌ No    | 100            | Typing speed per character (ms).                 |
| `data-word-delay`  | ❌ No    | 500            | Delay between words (ms).                        |
| `data-pause-delay` | ❌ No    | 2000           | Pause after fully typing before deleting (ms).   |
| `data-typr-blink`  | ❌ No    | on             | Toggle cursor blinking (on or off).              |

### `data-typr` Behavior

The attribute is required to activate the animation.

It can be used:

- Without a value (uses default cursor `|`):

    ```html
    <span data-typr> Web Developer|Designer|Coder </span>
    ```

- With a custom cursor symbol:

    ```html
    <span data-typr="_"> Web Developer|Designer|Coder </span>

    <span data-typr="✏️"> Web Developer|Designer|Coder </span>
    ```

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

## 🤔 Why Typr?

Most typewriter libraries require:

- Manual JavaScript initialization
- Complex configuration objects
- Extra dependencies
- Global variables

Typr takes a different approach.

It is:

- Declarative (configured directly in HTML)
- Dependency-free
- Automatically initialized
- Minimal and focused
- CDN-friendly
- Designed for simple integration into static sites and modern frontend projects

If you want a clean typewriter effect without introducing framework overhead or complex setup — Typr is built for that use case.
