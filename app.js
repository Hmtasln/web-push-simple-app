window.addEventListener("load", async ()=>{

const subscribeButton=document.querySelector("#subscribeButton");
// Servis Kayıt işlemi
const sW= await navigator.serviceWorker.register("sw.js");
console.log("Service Worker =>", sW);

    subscribeButton.addEventListener("click", async () => {

            const serviceWorker= await navigator.serviceWorker.ready;
            const clientID= await serviceWorker.pushManager.subscribe({

                userVisibleOnly:true,
                applicationServerKey:"BLPnbNuF05YjhOCTjkvpkUhg6kBjbF4XJUTH4LU-mGm5IhVZsi7GxcR9EB4VBmbyLFIWHT7i-sjk5RoGQtRF5E4",


            });

            console.log(clientID);
            console.log(JSON.stringify(clientID));
            
    
    });

});