//이전에 사용했던!
//$(document).ready(function(){});

//지금부터는 이렇게 사용!
$(function(){
    var btn = $('.btn')

    btn.on('click', function(){
        alert('hello...')
    })

    console.log(btn)
})

