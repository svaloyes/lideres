function openMisionTab(evt, misionTabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("mision-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("mision-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(misionTabName).style.display = "block";
    evt.currentTarget.className += " active";
}
