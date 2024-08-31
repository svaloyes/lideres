function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("jav-tabcontent_2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        var img = tabcontent[i].getElementsByTagName('img')[0];
        if (img) {
            img.classList.remove('visible');
        }
    }
    tablinks = document.getElementsByClassName("jav-tablink_2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    var activeTab = document.getElementById(tabName);
    var img = activeTab.getElementsByTagName('img')[0];
    if (img) {
        img.classList.add('visible');
    }
}
