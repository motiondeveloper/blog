<h1 align="center">
  <a href="https://blog.motiondeveloper.com">
    <img alt="Motion Developer Logo" src="content/assets/md-logo.png" width="40" style="clip-path: circle(); display: inline-block; margin-right: 8px; transform: translate(0px, 7px);"/>
  </a>
  Motion Developer Blog
</h1>

This repo hosts the source code for [blog.motiondeveloper.com](blog.motiondeveloper.com).

Built with [Gatsby](https://www.gatsbyjs.org/) and deployed to [Netlify](https://www.netlify.com/).

## 🚀 Quick start

Requires the [gatsby cli](https://www.gatsbyjs.org/docs/gatsby-cli) to be installed.

```sh
npm install -g gatsby-cli
```

1.  **Clone this repo locally**

2.  **Start the dev server**

    Navigate into the site’s directory and start the development server with:

    ```sh
    gatsby develop
    ```

3.  **Open the source code and start editing**

    The site is now running at `http://localhost:8000`
  
4. **Commit and push changes**

    Any changes to this repo trigger a new deployment of the site on Netlify.

## Gatsby Overview

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
