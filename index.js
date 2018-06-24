'use strict';

/**
 * hexo-tag-hint
 * https://github.com/etigerstudio/hexo-tag-hint
 * Copyright (c) 2017-2018, E-Tiger Studio
 * Licensed under the GNU AGPLv3 license.
 *
 * Syntax:
 *  {% hint 'body_text' 'hint_text' %}
 */

// var counter = 0;
// var fs = require('hexo-fs'),
//     util = require('hexo-util'),
//     path = require('path'),
//     assetDir = 'assets',
//     cssDir = 'css',
//     fileName = 'hint.min.css',
//     srcPath = path.join(cssDir, fileName);
//
// var tagHintConfig = hexo.config.tag_hint;
// var filePath;
// if (tagHintConfig && tagHintConfig.use_cdn && tagHintConfig.cdn_base_url) {
//     filePath = path.join(tagHintConfig.cdn_base_url, srcPath);
// } else {
//     filePath = path.join(assetDir, srcPath);
//     var physicalPath = path.join(__dirname, srcPath);
//     hexo.extend.generator.register(fileName, function() {
//         return {
//             path: filePath,
//             data: function data() {
//                 return fs.createReadStream(physicalPath);
//             }
//         };
//     });
// }

var util = require('hexo-util');

hexo.extend.filter.register('after_post_render', function(data) {
    data.content =
        util.htmlTag('link', {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/hexo-tag-hint@0.2.0/css/hint.min.css'}) +
        data.content;
    // var root = hexo.config.root ? hexo.config.root : '/';
    // data.content = '<link rel="stylesheet" href="' + path.join('/', filePath) + '"></link>' + data.content;
    return data;
});

// {% hint 'body_text' 'hint_text' %}
hexo.extend.tag.register('hint', function(args) {
    var raw = '<span style="border-bottom: 1px dashed #389fff;">' +
    '<span class="hint--top hint--rounded hint--info" aria-label="' +
    args[1] + '" ontouchstart>' + args[0] + '</span></span>'
    return raw;
});
