const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()

  // store the beforeinstallprompt event in the window.deferredPrompt property
  // trigger the installation prompt later when the user clicks the install button
  window.deferredPrompt = event;

  // show the install button
  butInstall.classList.toggle('hidden', false);
});


// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const event = window.deferredPrompt;
  if(!event){
      return;
  }
  event.prompt();

  // clear the stored reference to the beforeinstallprompt event 
  window.deferredPrompt = null;
  
  // hide the install button
  butInstall.classList.toggle('hidden', true);
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
