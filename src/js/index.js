// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['url','template','swiper','header','footer'], (url,template,Swiper) => {
  //  主题逻辑开始
      class Index{
        constructor(){
          this.initSwiper();
          this. rendere1();
          this. rendere2();
        }
        //轮播图
        initSwiper(){
          //用的4.x.x的版本配置必须是也是4.x.x
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, 
            effect:'fade',
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })        
        }
        //鼠标经过图片图片放大效果
        enter(){
          var $aTop=$("#product-top a");
         //product-top的鼠标经过事件
          $aTop.on('mouseenter',function(){
            $(this).children('img').addClass('ac');
          })
          $aTop.on('mouseleave',function(){
            $(this).children('img').removeClass('ac');
          })
          //product-bottom的鼠标经过事件
          var $aBot=$("#product-bottom a");
          $aBot.on('mouseenter',function(){
            $(this).children('img').addClass('ac');
          })
          $aBot.on('mouseleave',function(){
            $(this).children('img').removeClass('ac');
          })
        }
        //渲染产品展示
        rendere1(){
         $.get(url.baseUrl+'/index1.json',resp=>{
              this.renderePro1(resp);
         })
        }
        rendere2(){
          $.get(url.baseUrl+'/index2.json',resp=>{
            this.renderePro2(resp);
       })
         }
        renderePro1(resp){
           let html=template('product-one',{
             dataList:resp.indexData
           })
           $('#product-top').html(html);
           this.enter();
        }
        renderePro2(resp){
          let val=template('product-two',{
            dataList:resp.indexData
          })
          $('#product-bottom').html(val);
          this.enter();
        }
        //产品展示渲染结束
      }
      new Index();
    })
  })