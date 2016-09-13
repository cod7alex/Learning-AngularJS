// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();
var ngAnnotate = require('gulp-ng-annotate');

var source = [
		'app/**/*.js', 
		"vendor/**/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')										// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// index.html
	}));
});

gulp.task('ngAnnotate', function () {
	return gulp.src(['app/**/*.js', "!app/vendor/**/*.*"])
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});

// The default task is 'webserver'
gulp.task("default", ["webserver"]);