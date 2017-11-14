//压缩ajax;
//var gulp = require("gulp");
//var uglify = require("gulp-uglify");
//gulp.task('js', function(){
//	gulp.src('code-fly/js/ajax.js')
//	.pipe(uglify())
//	.pipe(gulp.dest('code-fly/js2'));
//});
//压缩bullet es6;
//gulp.task('default', ['js']);
//	var gulp = require('gulp');
//	var babel = require('gulp-babel'); //es6转es5
//	var uglify = require('gulp-uglify'); //js压缩插件
////压缩js
//	gulp.task('js', function(){
//		gulp.src('code-fly/js/base.js')
//		.pipe(babel({"presets": ["es2015"]})) //es6转es5
//		.pipe(uglify()) //js压缩
//		.pipe(gulp.dest('code-fly/js2'));
//	});
//	gulp.task('default', ['js']);
//////压缩myplane;
var gulp = require("gulp");
var uglify = require("gulp-uglify");
gulp.task('js', function(){
	gulp.src('code-fly/js/common.js')
	.pipe(uglify())
	.pipe(gulp.dest('code-fly/js2'));
});
gulp.task('default', ['js']);
//es6;
