function smallsidebar(){
    document.getElementById("wrap").classList.toggle("small-menu");
};
function tracuudiem(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("tracuudiem").scrollTop=0;
    document.getElementById("tracuudiem").style.display="block";
};
function trangchu(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("trangchu").scrollTop=0;
    document.getElementById("trangchu").style.display="block";
};
function danhsachhs(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("danhsachhs").scrollTop=0;
    document.getElementById("danhsachhs").style.display="block";
};
function lichthi(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("lichthi").scrollTop=0;
    document.getElementById("lichthi").style.display="block";
};
function vanban(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("vanban").scrollTop=0;
    document.getElementById("vanban").style.display="block";
};
function profile(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("profile").scrollTop=0;
    document.getElementById("profile").style.display="block";
};
function congnhandiem(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("congnhandiem").scrollTop=0;
    document.getElementById("congnhandiem").style.display="block";
};
function xettotnghiep(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("xettotnghiep").scrollTop=0;
    document.getElementById("xettotnghiep").style.display="block";
};
function pdt(){
    var ele=document.getElementsByClassName("wid-pad");
    var pdt=document.getElementsByClassName("pdt");
    for(let i=0;i<ele.length;i++){
        ele[i].style.display="none";
    }
    for(let i=0;i<pdt.length;i++){
        pdt[i].style.display="block";
    }
    document.querySelector(".nav-tintuc .active").classList.toggle("active");
    document.getElementById("news-mucluc3").classList.toggle("active");
};
function pkt(){
    var ele=document.getElementsByClassName("wid-pad");
    var pkt=document.getElementsByClassName("phongkhaothi");
    for(let i=0;i<ele.length;i++){
        ele[i].style.display="none";
    }
    for(let i=0;i<pkt.length;i++){
        pkt[i].style.display="block";
    }
    document.querySelector(".nav-tintuc .active").classList.toggle("active");
    document.getElementById("news-mucluc2").classList.toggle("active");
};
function kcntt(){
    var ele=document.getElementsByClassName("wid-pad");
    var kcntt=document.getElementsByClassName("khoacntt");
    for(let i=0;i<ele.length;i++){
        ele[i].style.display="none";
    }
    for(let i=0;i<kcntt.length;i++){
        kcntt[i].style.display="block";
    }
    document.querySelector(".nav-tintuc .active").classList.toggle("active");
    document.getElementById("news-mucluc4").classList.toggle("active");
};
function ptckt(){
    var ele=document.getElementsByClassName("wid-pad");
    var ptckt=document.getElementsByClassName("phongtckt");
    for(let i=0;i<ele.length;i++){
        ele[i].style.display="none";
    }
    for(let i=0;i<ptckt.length;i++){
        ptckt[i].style.display="block";
    }
    document.querySelector(".nav-tintuc .active").classList.toggle("active");
    document.getElementById("news-mucluc5").classList.toggle("active");
};
function news_all(){
    var ele=document.getElementsByClassName("wid-pad");
    for(let i=0;i<ele.length;i++){
        ele[i].style.display="block";
    }
    document.querySelector(".nav-tintuc .active").classList.toggle("active");
    document.getElementById("news-mucluc1").classList.toggle("active");
};
function tintuc(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    news_all();
    document.getElementById("tintuc").scrollTop=0;
    document.getElementById("tintuc").style.display="block";
};
function overlayfee(){
    var table=document.getElementsByClassName("overlay-fee");
    table[0].style.display="block";
    document.getElementsByClassName("copyright")[0].style.display="none";
}
function btn_close(){
    var table=document.getElementsByClassName("overlay-fee");
    table[0].style.display="none";
    document.getElementsByClassName("copyright")[0].style.display="block";
}
const tab=document.getElementsByClassName("overlay-fee");
tab[0].addEventListener('click',e=>{
    var ele=document.getElementsByClassName("fee-detail");
    if(!ele[0].contains(e.target)){
        tab[0].style.display="none";
        document.getElementsByClassName("copyright")[0].style.display="block";
    }
});
function hocphi(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("hocphi").scrollTop=0;
    document.getElementById("hocphi").style.display="block";
};
function temppage(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("temp-page").scrollTop=0;
    document.getElementById("temp-page").style.display="block";
<<<<<<< HEAD
};
function dkhoc(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("dkhoc").scrollTop=0;
    document.getElementById("dkhoc").style.display="block";
};
function dknv(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("dknv").scrollTop=0;
    document.getElementById("dknv").style.display="block";
};
function showDkhoc() {
    document.getElementById('dkhoc').style.display = 'block';
    document.getElementById('dknv').style.display = 'none';
    // Ẩn các phần tử khác nếu cần
}

function showDknv() {
    document.getElementById('dknv').style.display = 'block';
    document.getElementById('dkhoc').style.display = 'none';
    // Ẩn các phần tử khác nếu cần
}
function showkqdq() {
    document.getElementById('kqdk').style.display = 'block';
    document.getElementById('dkhoc').style.display = 'none';
    // Ẩn các phần tử khác nếu cần
}
function hideAllSections() {
    document.getElementById('dkhoc').style.display = 'none';
    document.getElementById('dknv').style.display = 'none';
    document.getElementById('kqdk').style.display = 'none';
    // Ẩn các phần tử khác nếu cần
}

// Gọi hàm hideAllSections() khi trang chủ được tải
window.onload = function() {
    hideAllSections();
};
function kqdk(){
    var nd=document.getElementsByClassName("nd");
    for(let i=0;i<nd.length;i++){
        if(nd[i].style.display!="none"){
            nd[i].style.display="none";
        }
    }
    document.getElementById("kqdk").scrollTop=0;
    document.getElementById("kqdk").style.display="block";
};
=======
};
>>>>>>> 46225018b1cab323c92213d1486684fd82da8105
