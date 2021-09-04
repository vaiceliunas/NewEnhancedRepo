if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register('../service-worker1.0.js', { scope: "/" })
        .then(function (reg) {
            console.log("Yes, it did.");
        }).catch(function (err) {
            console.log("No it didn't. This happened:", err)
        });
}


if (window.location.protocol === 'http:') {
    const requireHTTPS = document.getElementById('requireHTTPS');
    const link = requireHTTPS.querySelector('a');
    //link.href = window.location.href.replace('http://', 'https://');
    requireHTTPS.classList.remove('hidden');
}

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    //nesiulyti iskart, tik spaudziant mygtuka
    //event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
});

window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
});