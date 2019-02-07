var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync');;

gulp.task('sass', function(){ 
    return gulp.src('../src/sass/**/*.sass') 
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('../src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch('../src/sass/**/*.sass', gulp.parallel('sass'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '../src'
        },
        notify: false
    });
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));