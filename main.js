
tablinks = document.getElementsByClassName("tab-links");
tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidebar = document.getElementById("sidebar")

function opensidebar(){
    sidebar.style.left = "0";
}
function closesidebar(){
    sidebar.style.left = "-180px";
}