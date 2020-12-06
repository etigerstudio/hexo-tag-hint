![hero](hero.png)

<p align="center">
  <img src="https://badge.fury.io/js/hexo-tag-hint.svg" href="https://badge.fury.io/js/hexo-tag-hint" alt="npm version"/>&nbsp;
  <img alt="npm downloads" src="https://img.shields.io/npm/dt/hexo-tag-hint" href="https://badge.fury.io/js/hexo-tag-hint">&nbsp;
  <img src="https://data.jsdelivr.com/v1/package/npm/hexo-tag-hint/badge/year?style=rounded" href="https://www.jsdelivr.com/package/npm/hexo-tag-hint" alt="jsdelivr downloads"/>
</p>

`hexo-tag-hint` is a simplistic plugin for [Hexo](https://hexo.io) which presents a floating bubble containing the hint text when the content text gets *hovered* or *clicked* (yes, mobile-ready!).

## 💡 Basic Syntax

Insert this little [Nunjucks](https://github.com/mozilla/nunjucks) snippet anywhere you want to show your hints:

```js
{% hint 'body_text' 'hint_text' %}
```

Where `body_text` is the normal post body text, `hint_text` is the text that should be presented inside the hint bubble. Use `\'` to escape `'` if necessary.

<img src="single-line-screencast.gif" alt="Plugin single-line screencast" title="Plugin single-line screencast" align="right" width="159" height="95" />

E.g.:

```js
{% hint 'misfits' 'hexo-tag-hint' %}
```

## 📖 Multi-line Support

Multi-line hints are supported right now🎉. Append additional hint text lines to build a multi-line hint:

```js
{% hint 'body_text' 'hint_text_1st_line' 'hint_text_2nd_line' ... %}
```

<img src="multi-line-screencast.gif" alt="Plugin multi-line screencast" title="Plugin multi-line screencast" align="right" width="201" height="117" />

E.g.:

```js
{% hint 'Hexo' 'A fast, simple &' 'powerful blog framework' %}
```

## 🔌 Install & Update

Execute following one-liners to integrate this plugin into your Hexo project, or to update the plugin:

```bash
$ npm install hexo-tag-hint # install this plugin
$ npm update hexo-tag-hint # update the plugin
$ npm install hexo-tag-hint@latest # force update to latest version
```

## 🚀 Roadmap

- [x] Add support for multi-line hints
- [ ] Strip redundant style classes
- [ ] Make Color theme configurable

✏️*Open issues to request for more features!*

## 🙌 Special Thanks

Main feature of presenting hint bubble is heavily backed by [`hint.css`](https://github.com/chinchang/hint.css), an awesome CSS only tooltip library.

> Brought to you with ❤️ by E-Tiger Studio, 2017-2020. 
