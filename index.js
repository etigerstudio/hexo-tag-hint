'use strict';

/**
 * hexo-tag-hint
 * https://github.com/etigerstudio/hexo-tag-hint
 * Copyright (c) 2017-2020, E-Tiger Studio
 * Licensed under the MIT license.
 *
 * Syntax:
 *   Single-line: {% hint 'body_text' 'hint_text' %}
 *   Multi-line: {% hint 'body_text' 'hint_text_1st_line' 'hint_text_2nd_line' ... %}
 */

const util = require('hexo-util');
const version = '0.2.1';
const styleClass = 'hint--info hint--rounded hint--top';
const newLineDelimiter = '\u000A';

hexo.extend.filter.register('after_post_render', function(data) {
    data.content =
        util.htmlTag(
            'link',
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: `https://cdn.jsdelivr.net/npm/hexo-tag-hint@${version}/dist/hexo-tag-hint.min.css`
            }) +
        data.content;
    return data;
});

// {% hint 'body_text' 'hint_text_1st_line' 'hint_text_2nd_line' ... %}
hexo.extend.tag.register('hint', function(args) {
    let body = args[0];
    let hint = args.slice(1).join(newLineDelimiter);
    return `<span class="${styleClass}" data-hint="${hint}" ontouchstart>${body}</span>`;
});
