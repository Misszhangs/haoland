define(['jquery'],()=>{
    class Header {
        constructor () {
          this.container = $("header")
          this.load()
        }
        load () {
          return new Promise(resolve => {
            // 由于header模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
            this.container.load('/html/model/header.html', () => {
              // 异步加载完成
              resolve()
            })
          })
        }
      }
    
      return new Header()
});