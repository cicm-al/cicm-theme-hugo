# CICM AL Theme Hugo

CICM AL Theme Hugo is a theme for conferences/events.

## Building my conference site from scratch

Note that requires the [Node](https://nodejs.org/en/) toolchains

1. Install [Hugo](https://gohugo.io)
2. Create a new site by running:

```bash
hugo new site my-conf
cd my-conf
mkdir themes
git submodule add https://github.com/cicm-la/cicm-theme-hugo.git themes/cicm-theme-hugo

pushd themes/cicm-theme-hugo
npm install
npm run build
popd
```

3. Then edit your `config.toml` file with

```toml
# ...
theme = "cicm-theme-hugo"
# ...
```


4. It's done. Just start Hugo server to see it live!

```bash
hugo server
```

## Customizing the site

`yarn` to install the dependency

Run `npm start` to watch Sass changes.

When you are happy with the result run `npm run build` to build the minified version

### Notes

* We focus on English and French in this theme, so with other language, you should add months into the `layouts/partials/date-short.html`

## License

MIT, see [LICENSE](https://github.com/jweslley/hugo-conference/blob/master/LICENSE).
