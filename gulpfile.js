var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

var node_root = "node_modules/"
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});


gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass']); 
  // Other watchers
})






