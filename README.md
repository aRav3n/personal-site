# My Personal Website V2

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage and Screenshots](#usage-and-screenshots)
- [Technologies Used](#technologies-used)
- [Dependencies and Credits](#dependencies-and-credits)
- [Project Structure](#project-structure)

## Description

This is my personal website that I crafted for displaying my portfolio. All my web development learning up to this point has been via [The Odin Project](https://www.theodinproject.com) and I am very grateful. This site will showcase my projects to show potential clients and employers what my capabilities are. 

## Installation Instructions

1. Clone or fork this repo
2. cd into the project root directory [^1]
3. Run the following in your terminal [^2]
    - ``` bash
      npm init -y
      npm install react react-dom react-router-dom
      npm install lucide-react uuid
      npm install @eslint/js @types/react --save-dev
      npm install @types/react-dom @vitejs/plugin-react
      npm install eslint eslint-config-prettier --save-dev
      npm install eslint-plugin-react-hooks eslint-plugin-react-refresh --save-dev
      npm install globals vite --save-dev
      ```
1. `npm run dev`
   - `^` + `c` will end the process 
1. Navigate to the url displayed in the terminal: `➜  Local:   http://localhost:5173/`

## Usage and Screenshots

<!-- 
<img src="./public/screenshot.png" alt="screenshot" style="height: 50vh; width: auto;"> 

Here's a brief description of how to use the app. 

- [Link to live preview](https://groundedwanderer.dev/) 
-->

### Features
- Display my portfolio
- Sticks to my core design principles of: Simple, Functional, Beautiful

## Technologies Used

### Frontend

- <a href="https://vite.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" style="height: 2rem; width: auto; vertical-align: middle;"> Vite </a>
- <a href="https://react.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style="height: 2rem; width: auto;"> React</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style="height: 2rem; width: auto;"> JavaScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" style="height: 2rem; width: auto;"> HTML</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style="height: 2rem; width: auto;"> CSS</a>

### Development Tools

- <a href="https://code.visualstudio.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" style="height: 24px; width: auto;"/> VS Code</a>
- <a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" style="height: 24px; width: auto;"/> NPM</a>
- <a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style="height: 24px; width: auto;"/> Git</a>

### Hosting

- <a href="https://www.cloudflare.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" style="height: 24px; width: auto;"/> Cloudflare</a>
- <a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" style="height: 24px; width: auto;"/> Github</a>

## Dependencies and Credits

### Package Dependencies

- [lucide-react](https://www.npmjs.com/package/lucide-react)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@types/react](https://www.npmjs.com/package/@types/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [globals](https://www.npmjs.com/package/globals)
- [vite](https://www.npmjs.com/package/vite)
- [uuid](https://www.npmjs.com/package/uuid)

### Other Credits

- [Devicion](https://devicon.dev/)
- [Skillicons](https://skillicons.dev/)
- [Ionicons](https://ionic.io/ionicons)


## Project Structure

```bash
├──public/                 # Locally hosted images and icons
├──src/                    # Source files
    ├──pages/              # Full page React components
    ├──partials/           # Smaller React components
└──test/                   # Test files
```

[^1]: Where the README.md file is located
[^2]: You are free to install all the dev dependencies on a single line instead of breaking them up like this. I've found that breaking them up is more reliable with slower internet connections.