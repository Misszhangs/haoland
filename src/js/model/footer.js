

define(['jquery'],()=>{
    class Footer{
        constructor(){
            this.contanier=$('footer');
            this.load().then(()=>{
                this.firstA=$("#first");
                this.lastA=$("#last");
                this.firstA.on('mouseenter',()=>{
                this.lastA.addClass('ac');
                }) 
                this.firstA.on('mouseleave',()=>{
                    this.lastA.removeClass('ac');
                }) 
                this.clickArrows();
            })
           
        }
        load(){
            return new Promise(resolve=>{
                this.contanier.load('/html/model/footer.html',()=>{
                    resolve();
                })
            })
        }
        clickArrows(){
            var $topBottom=$('#footer-top-bottom')
            $('#top-arrows').on('click',function(){
               $(this).toggleClass('ac')
               $topBottom.toggleClass('ab')
            })
        }
    }
    return new Footer;
});