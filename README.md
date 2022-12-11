## Features

A complete Blog feature:

- 🎈 Syntax Highlighting
- 🤖 SEO friendly with sitemap.xml and robots.txt
- ⚙️ RSS feed
- 📖 Pagination
- 🌈 Include a dark blog theme
- ⬇️ Markdown
- 📦 Image lazy loading
- 💎 Responsive design

ESLint with:

- Airbnb styled guide
- TypeScript compatible
- Astro compatible
- Automatically remove unused imports
- Import sorting
- Tailwind CSS plugin

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

#### Optional

- [nvm](https://github.com/nvm-sh/nvm)
- [volta](https://volta.sh/)

While Astro-boilerplate should work with the latest Node version, it has been
tested with the versions in .nvmrc & the bottom of package.json. At current
writing, that's Node v16.15.1

### Getting started

Run the following command on your local environment:

``` bash
git clone --depth=1 
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

``` bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your favorite browser
to see your project.

### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run clean`   | Remove `./dist` folder                       |
| `npm run lint`    | Run ESLint and report styling error          |

### Contributions

Everyone is welcome to contribute to this project.
Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

---

Made with ♥ by [StarkPrince](https://www.princeraj.co/)
[![Twitter](https://twitter.com/tt_prince_raj)](https://twitter.com/tt_prince_raj)
