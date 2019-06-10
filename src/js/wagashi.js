require(['./config'],()=>{
    require(['template','url','header','footer'],(template,url,header,footer)=>{
        class Waga{
            constructor(){
            //零食糕点商品展示的页面渲染
            this.init();
            }
            init(){
                $.get(url.baseUrl+'/wagashi.json',(resp)=>{
                    this.render(resp);
                })
            }
            render(resp){
                var html=template('wagashi-products',{
                    list:resp.wagashi
                })
                $('#section').html(html);
            }
           
        }
        new  Waga();
    })
})