import gulp from 'gulp';
import del  from 'del';
import ap   from 'auto-plug';

const GP = ap('gulp');

gulp.task('build', ['build:lib', 'build:example']);

gulp.task('build:lib', function () {
  return gulp.src('src/*.js')
    .pipe(GP.cached('js'))
    .pipe(GP.babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('build:example', ['build:example:js', 'build:example:static']);

gulp.task('build:example:js', function () {
  return gulp.src('example/src/*.js')
    .pipe(GP.cached('js'))
    .pipe(GP.babel())
    .pipe(gulp.dest('example/lib'));
});

gulp.task('build:example:static', function () {
  return gulp.src('example/src/*.{css,html}')
    .pipe(GP.cached('html'))
    .pipe(gulp.dest('example/lib'));
});

gulp.task('clean', function (done) {
  del(['lib', 'example/lib'], done);
});

gulp.task('run', ['build'], function () {
  return gulp.src('example').pipe(GP.runElectron());
});

gulp.task('default', ['run'], function () {
  gulp.watch('{src, example/src}/**/*.*', ['build', GP.runElectron.rerun]).on('change', function (event) {
    if (event.type === 'deleted') {
      delete GP.cached.caches[event.path.split('.').pop()][event.path];
    }
  });
});
