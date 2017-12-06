'use strict';

/**
 * hexo-tag-hint
 * https://github.com/grzhan/hexo-tag-aplayer
 * Copyright (c) 2017, E-Tiger Studio
 * Licensed under the MIT license.
 *
 * Syntax:
 *  {% hint content hint_text %}
 */

var counter = 0;
var fs = require('hexo-fs'),
    util = require('hexo-util'),
    path = require('path'),
    assetDir = 'assets',
    cssDir = 'css',
    fileName = 'hint.min.css',
    srcPath = path.join(cssDir, fileName);

/*registers.forEach(function (register) {
	var _register = _slicedToArray(register, 3),
	    regName = _register[0],
	    path = _register[1],
	    srcPath = _register[2];

	hexo.extend.generator.register(regName, function () {
		return {
			path: path,
			data: function data() {
				return fs.createReadStream(srcPath);
			}
		};
	});
});*/


var tagHintConfig = hexo.config.tag_hint;
var filePath;
if (tagHintConfig && tagHintConfig.use_cdn && tagHintConfig.cdn_base_url) {
    filePath = path.join(tagHintConfig.cdn_base_url, srcPath);
} else {
    filePath = path.join(assetDir, srcPath);
    var physicalPath = path.join(__dirname, srcPath);
    hexo.extend.generator.register(fileName, function() {
        return {
            path: filePath,
            data: function data() {
                return fs.createReadStream(physicalPath);
            }
        };
    });
}

hexo.extend.filter.register('after_post_render', function(data) {
    var root = hexo.config.root ? hexo.config.root : '/';
    data.content = '<link rel="stylesheet" href="' + path.join('/', filePath) + '"></link>' + data.content;
    return data;
});

// {% hint content hint_text %}
hexo.extend.tag.register('hint', function(args) {
    var raw = '<span class="hint--top hint--rounded hint--info" aria-label="' + args[0] + '">' + args[1] + '</span>'
    return raw;
});
