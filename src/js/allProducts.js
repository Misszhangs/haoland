require(['./config'],()=>{
    require(['template','url','header','footer'],(template,url,header,footer)=>{
        class All{
            constructor(){
            //所有商品展示的页面渲染
            this.init();
            }
            init(){
                $.get(url.baseUrl+'/allProducts.json',(resp)=>{
                    this.render(resp);
                    // console.log(resp)
                })
            }
            render(resp){
                var html=template('all-products',{
                    list:resp.allProducts
                })
                $('#section').html(html);
            }
           
        }
        new All();
    })
})