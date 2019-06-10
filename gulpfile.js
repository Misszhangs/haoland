const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const  sass = require('gulp-sass');
const  connect = require('gulp-connect');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
gulp.task('html', () => {
    // src是去读取文件，gulp读取文件的方式是文件流
    // 通过pipe管道的方式去压缩html
    // 最后把压缩的结果放到dist目录里
    // **代表所有目录，*代表所有文件
    gulp.src('src/**/*.html')
      .pipe(htmlmin({
        removeComments: true,// 清除HTML注释
        collapseWhitespace: true,// 压缩HTML
        collapseBooleanAttributes: true,// 省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,// 删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,// 删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,// 删除<style>和<link>的type="text/css"
        minifyJS: true,// 压缩页面JS
        minifyCSS: true// 压缩页面CSS 
      }))
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload())
  
  })
  //编译scss
gulp.task('css',()=>{
    gulp.src('src/css/**/*.scss')
    .pipe(sass())
    .pipe( cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
})
//开启服务器
gulp.task('server',()=>{
    connect.server({
        root: 'dist', 
        livereload: true, 
        port: 8888
      })
})

// img和libs和json文件移动
gulp.task('move', () => {
    gulp.src('src/libs/**/*')
      .pipe(gulp.dest('dist/libs'))
      gulp.src('src/images/**/*')
      .pipe(gulp.dest('dist/images'))
      gulp.src('src/json/**/*')
      .pipe(gulp.dest('dist/json'))
  })
  //js任务将es6转es5，然后在压缩
  gulp.task('js', () => {
    gulp.src('src/js/**/*.js')
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
      .pipe(connect.reload())
     
  })
  //添加事件监听，只要改动文件，会自动执行命令
  gulp.task('watch',()=>{
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/css/**/*.scss', ['css'])
    gulp.watch('src/js/**/*.js', ['js'])
  })
  
  gulp.task('default',['html', 'css', 'js', 'server', 'move', 'watch'])