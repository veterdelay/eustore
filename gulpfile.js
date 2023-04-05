const {src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');

function scripts(){
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/*.js',
        '!app/js/main.min.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles(){
    return src('app/scss/style.scss')
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function watching(){
    watch([
        'app/js/*.js',
        '!app/js/main.min.js'
    ], scripts)
    watch(['app/scss/*.scss'], styles)
    watch(['app/**/*.html']).on('change', browserSync.reload)
    watch([
        'app/**/*.html',
        'app/js/*.js',
        '!app/js/main.min.js',
        'app/scss/*.scss',
        'app/images/**/*',
    ], series(cleanDist, building, buildingHTML))
}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
}

function cleanDist(){
    return src('dist')
        .pipe(clean())
}

function building(){
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/images/**/*',
        'app/fonts/**/*',
        'app/**/*.html'
    ], {base : 'app'})
        .pipe(dest('dist'))
}

function buildingHTML(){
    return src('app/**/*.html')
        .pipe(fileInclude())
        .pipe(dest('dist'))
}

exports.scripts = scripts;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;


exports.default = parallel(scripts, styles, browsersync, watching, series(cleanDist, building, buildingHTML));