"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})})
