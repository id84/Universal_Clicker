/* */
function init() {
    setresearchtree();

    document.getElementById("snglschbx").checked = false;
    document.getElementById("townrange").value = 200;
    townzoom();


    document.getElementById("normierangelbl").style.display = "none";
    document.getElementById("neetrangelbl").style.display = "none";

    document.getElementById("normierange").style.display = "none";
    document.getElementById("neetrange").style.display = "none";
    
    document.getElementById("popalertschkbx").checked = true;
    document.getElementById("sfxalertschkbx").checked = false;
    document.getElementById("autosavechkbx").checked = false;
    document.getElementById("retrochkbx").checked = false;
    document.getElementById("nightmodechkbx").checked = false;

    document.getElementById("thi2").style.animationPlayState = "paused";
    document.getElementById("thf2").style.animationPlayState = "paused";
    document.getElementById("thme2").style.animationPlayState = "paused";
    document.getElementById("ths2").style.animationPlayState = "paused";
}