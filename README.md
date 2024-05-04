# odin-restaurant_page
## The Odin Project: Restaurant Page
Project assignment page: [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)\
Project started on: **5/3/2024**\
Project finished on: **TBD**

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

### Takeaway
- 

### Consideration
- 