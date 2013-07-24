function install(ev) {
  ev.preventDefault();
  // define the manifest URL
  var manifest_url = "http://people.mozilla.com/~cmills/location-finder/manifest.webapp";
  // install the app
  var installLocFind = navigator.mozApps.install(manifest_url);
  installLocFind.onsuccess = function(data) {
    // App is installed, do something 
  };
  installLocFind.onerror = function() {
    // App wasn't installed, info is in
    // installapp.error.name
    alert(installapp.error.name);
  };
};

// get a reference to the button and call install() on click
var button = document.getElementById('install');

var installCheck = navigator.mozApps.checkInstalled("http://people.mozilla.com/~cmills/location-finder/manifest.webapp");
// check whether the app defined in the above manifest file is installed 
installCheck.onsuccess = function() {
  if(installCheck.result) {
    button.style.display = "none";
    // if it's already installed on the device, hide the install button, as we don't need it.
  } else {
    button.addEventListener('click', install, false);
    // if it isn't, run the install code contained in the install() function
  };
};
