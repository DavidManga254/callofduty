function OpenMenu(id1,id2,contenter){
    var opener=document.getElementById(id1);
    var closer=document.getElementById(id2);
    var content=document.getElementById(contenter)

    opener.style.display='none';
    closer.style.display='block';
    content.style.display='block';
}
function CloseMenu(id1,id2,contenter){
    var opener=document.getElementById(id1);
    var closer=document.getElementById(id2);
    var content=document.getElementById(contenter)

    opener.style.display='block';
    closer.style.display='none';
    content.style.display='none';
}