$(function() {
    const LI = {
        methods: {}
    }

    LI.methods.menu = function () {
        var $target = $('.menu'),
            menuativo = 'menuativo'
        
        function menuScroll() {
            var documentTop = $(document).scrollTop();

            $target.each(function() {
                if (documentTop > 50) {
                    $(this).addClass(menuativo);
                }
                else {
                    $(this).removeClass(menuativo);
                }
            })
        }

        menuScroll();

        $(document).scroll(function(){
            menuScroll();
            console.log('teste');
        })

    }

    LI.methods.menu();
});
