var Links = {  //객체
    setColor : function (color){  //객체 내의 메소드
        // var i =0;
        // while(i<document.querySelectorAll('a').length){
        //     document.querySelectorAll('a')[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day'

        Links.setColor('white')
    }
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night'
        Links.setColor('blue');   
    }
}