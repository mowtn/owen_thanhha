// ẩn hiện box đăng nhập
    function hidede(){
    var hidee = document.getElementById('HD_topright-sign');        
    if(hidee.style.display === "block")
        {
            hidee.style.display = "none";
        }else{
            hidee.style.display = "block";
        }
}

function pagehide(){
    var hidei = document.getElementById('aruge-section');
    if(hidei.style.display ==='none')
    {
        hidei.style.display ='block';
    }else{
        hidei.style.display ='none';
    }
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter > 3)
        counter = 1;
},3500);