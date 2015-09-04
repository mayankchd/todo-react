var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var stream = require('vinyl-source-stream');
var babelify = require('babelify');


gulp.task('build' , function() {
      
		var vstream = browserify({
			    entries: './src/js/app.jsx',
			    extensions: ['.js', '.jsx'],
			    debug: true
 		})
		.transform(babelify.configure({
          optional: [ "es7.classProperties" ]
        }))
		.bundle() 
		;

		vstream
    	.pipe(stream('bundle.js'))
    	.pipe(gulp.dest('./build/js'));
	});

gulp.task('file-watch', browserSync.reload);

gulp.task('watch' ,['build'] , function(){

		browserSync({
		        server: {
		            baseDir: "./"
		        }
			});

		gulp.watch('src/js/*/*.jsx' , ['build' ,'file-watch']);
		gulp.watch('src/js/*.jsx' , ['build' ,'file-watch']);
		gulp.watch('index.html' , ['file-watch']);
		gulp.watch('build/src/css/*.css' , ['file-watch']);

	});