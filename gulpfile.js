var gulp = require("gulp");
var mocha = require("gulp-mocha");
var log = require("gulplog");

gulp.task("mocha", function() {
  return gulp
    .src(["test/**/*.js"], { read: false })
    .pipe(mocha({ reporter: "spec" }))
    .on("error", log.error);
});

gulp.task("default", function() {
  gulp.watch(["./*.js", "lib/**", "test/**/*.js"], gulp.series("mocha"));
});
