let gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();

gulp.task('scss', () =>
    gulp.src('src/scss/main.scss')
        .pipe(  sass()                   )
        .pipe(  minifyCSS()              )
        .pipe(  gulp.dest('dist/css')    )
        .pipe(  browserSync.stream()     )
);

gulp.task('js', () =>
    gulp.src('src/babel/**.js')
        .pipe(babel({
            presets: [ 'env' ]
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
);

gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/babel/*.js", ['js']);
    gulp.watch("dist/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', [ 'scss', 'js' ]);