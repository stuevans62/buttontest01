
document.write('<a id="referback" href="https://www.rbwm.gov.uk">')
document.write('   <input type="button" id="backbutton" value="Return"/>')
document.write('</a>')

window.onload = function() {
	var url = document.getElementById("xforms_referring_page").value;	
	var link = document.getElementById("referback");
	link.setAttribute("href", url);	
	document.getElementById("backbutton").value = "Welcome to Button Test!!";
}