# odin-restaurant_page
## The Odin Project: Restaurant Page
Project assignment page: [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)\
Project started on: **5/3/2024**\
Project finished on: **5/5/2024**

### Webpack
- Project instructed to use **Webpack** to bundle/package the files/modules.
  - It involved...
  - installing npm, initializing (`npm init -y`), 
  - installing webpack (`npm install webpack webpack-cli --save-dev`), 
  - creating files in the /src (`index.html`, `index.js`, `style.css`), 
  - installing html-webpack-plugin (`npm install --save-dev html-webpack-plugin`),
  - adding HtmlWebpackPlugin to `webpack.config.js` file and to use template,
  - installing *style-loader* and *css-loader* `modules` (`npm install --save-dev style-loader css-loader`),
  - adding the modules to `webpack.config.js`,
  - and finally adding `node_modules/` and `dist/` to `.gitignore` file so they do not get pushed to GitHub.
  - `"build": "webpack"` was added to `package.json`, under `"scripts":`, to be able to use `npm run build` instead of `npx webpack`.
  - `"watch": "webpack --watch"` was also added to use watch mode (`npm run watch`).
- Project also specified to use JavaScript to dynamically render main contents and to use modules.
  - Skeleton HTML's main `div#content` is initially empty.
  - JavaScript will handle rendering and tab switching - `index.js` handles page-switching logic, by importing
  - [`home.js`, `menu.js`, `about.js`] that contain functions (exported) for rendering each page.

### Post-Project Remarks
- Learned JS modules and webpack
- Learned how to create a page-less (one-page), JS driven dynamic website