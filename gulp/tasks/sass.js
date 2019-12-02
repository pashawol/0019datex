module.exports = () =>{
	$.gulp.task('sass', () => {
	return $.gulp.src($.sourse + '/sass/main.scss')
	.pipe($.sassGlob())
	.pipe($.gp.sass().on("error", $.gp.notify.onError()))
	
	//.pipe(gulpif(envDev, sourcemaps.write({includeContent: false, sourceRoot: '/public'})))
	.pipe($.gcmq())
	.pipe($.gp.rename({suffix: '.min', prefix : ''}))
	.pipe($.gp.autoprefixer({

		grid: true,
		overrideBrowserslist: ['last 4 versions']
	}))
	.pipe($.cleanCSS({compatibility: 'ie11',level: 2}))
	.pipe($.tabify(2, true))
	.pipe($.gulp.dest($.public + '/css'))
	//.on('end', browserSync.stream());
	.pipe($.browserSync.stream());
}); 
  
}