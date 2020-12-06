const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

function build() {
    init();
    return src('src/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/'))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: false,
                }
            }
        }))
        .pipe(dest('dist/'));
}

function init() {
    sass.compiler = require('node-sass');
}

exports.build = build;
