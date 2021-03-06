This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [bower install](#bower-install)
  - [npm start](#npm-start)

## Folder Structure

After creation, your project should look like this:

```
project-products/
  README.md
  bower_components/
  node_modules/
  package.json
  bower.json
  public/
    index.html
    favicon.ico
  src/
    actions/
        productActions.js
    css/
        style.css
    reducers/
        product.js
    App.js
    GridProducts.js
    index.js
    ItemProduct.js
    rootReducer.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies that are in the package.json in the node_modules folder

### `bower install`

Installs the dependencies that are in bower.json in the bower_components folder

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
