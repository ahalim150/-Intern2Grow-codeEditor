// Function to save code to localStorage
function saveCode(key) {
    localStorage.setItem(key, document.getElementById(key).value);
}

// Function to load code from localStorage
function loadCode() {
    if (localStorage.getItem('htmlCode')) {
        document.getElementById("htmlCode").value = localStorage.getItem('htmlCode');
    }
    if (localStorage.getItem('cssCode')) {
        document.getElementById("cssCode").value = localStorage.getItem('cssCode');
    }
    if (localStorage.getItem('jsCode')) {
        document.getElementById("jsCode").value = localStorage.getItem('jsCode');
    }
}

// Initial load of code when the page loads
window.onload = function() {
    loadCode(); // Load saved code from localStorage
    showPreview(); // Show preview based on loaded code
}

// Function to show preview
function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    var jsCode = "<script>" + document.getElementById("jsCode").value + "</script>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

// Function to switch between code sections
function show(x) {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById(x).style.display = "block";
}

// Function to show all sections on larger screens
function show_all() {
    if (window.innerWidth >= 992) {
        document.getElementById("html").style.display = "block";
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
    }
}
