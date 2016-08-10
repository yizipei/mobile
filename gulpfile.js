var gulp = require('gulp');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');

var paths = {
  scripts: ['./dev/event/js/*','dev/banner/js/*'],
  stylus: ['./dev/media/stylus/*','./dev/em-rem/stylus/*',
  './dev/TencentSports/stylus/*',
  './dev/event/stylus/*',
  'dev/banner/stylus/*']
};

gulp.task('scripts',function() {
  return gulp.src(paths.scripts[0])
      // .pipe(uglify())
    .pipe(gulp.dest('./pro/event/js'));
});
gulp.task('scripts-banner',function() {
  return gulp.src(paths.scripts[1])
      // .pipe(uglify())
    .pipe(gulp.dest('./pro/banner/js'));
});

gulp.task('stylus-1',function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./pro/media/css'));
});

gulp.task('stylus-2',function() {
  return gulp.src(paths.stylus[1])
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./pro/em-rem/css'));
});


gulp.task('stylus-3',function() {
  return gulp.src(paths.stylus[2])
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./pro/TencentSports/css'));
});
gulp.task('stylus-4',function() {
  return gulp.src(paths.stylus[3])
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./pro/event/css'));
});
gulp.task('stylus-5',function() {
  return gulp.src(paths.stylus[4])
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./pro/banner/css'));
});
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts','scripts-banner']);
  gulp.watch(paths.stylus, ['stylus-1','stylus-2','stylus-3','stylus-4','stylus-5']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'stylus-1', 'stylus-2','stylus-3','stylus-4','stylus-5','scripts','scripts-banner']);