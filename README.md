
<img src="https://raw.githubusercontent.com/etigerstudio/hexo-tag-hint/master/hexo-tag-hint_screenshot.png" alt="hexo-tag-hint screenshot" title="hexo-tag-hint screenshot" align="right" width="150" height="108" />

# hexo-tag-hint

`hexo-tag-hint` is a plugin for [Hexo](https://hexo.io) that parses `hint` tags,  which translate into a normal post content but will additionally show up a floating tooltip containing preset hint text when getting **hovered** or clicked. It's achieved by wrapping around and slightly adjusting the [`hint.css`](https://github.com/chinchang/hint.css) pure-css tooltip library.

## Basic Syntax

Insert this little [EJS](http://ejs.co/) snippet anywhere you want to show your hints:

```js
{% hint 'hint_text' 'body_text' %}
```

Where `hint` acts as the identifier of this tag, `hint_text` is the text content inside hint bubble, `body_text` is the normal post body text.

## Example Usage

Here's some handy example to help you quickly catch on:

```js
{% hint 'A fast, simple & powerful blog framework' 'Hexo' %}
{% hint 'I\'m the Hint' 'I\'m a Text' %}
{% hint 'hexo-tag-hint' 'misfits' %}
```

The last one snippet behaves just like the screenshot above.
Just note sometimes it's necessary to use `\'` to escape `'` (single quote).

## Installation Instructions

It takes only one command to integrate this plugin into your Hexo package:

```bash
$ npm install hexo-tag-hint --save
```

Execute this line of command in your Hexo project directory, then it's done! 🎉

## Update Plugin

To update the plugin, execute the command below:

```bash
$ npm update hexo-tag-hint
```

## License

hexo-tag-hint is free and open source under the GNU AGPLv3.
> Copyright (c) 2017 E-Tiger Studio

[`hint.css`](https://github.com/chinchang/hint.css)
> Copyright (c) 2013-2016 Kushagra Gour
