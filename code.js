let modal=document.getElementById("simplemodal");
let modalbtn=document.getElementById("btn");
let closebtn=document.getElementById("closebtn");

modalbtn.addEventListener("click",openmodal);
closebtn.addEventListener("click",closemodal);

window.addEventListener("click",clickoutside);

function openmodal()
{
    modal.style.display='block';
}

function closemodal()
{
    modal.style.display='none';
}

function clickoutside(e)
{
    if(e.target==modal)
    {
        modal.style.display='none';
    }
}