self.addEventListener("push",(e)=>{

    const config={
        body:"Mesaj içeriği burada yer alacaktır.",
        data:{
            dateOfArrival:Date.now(),
            primarKey:"3"
        }
    }

    e.waitUntil(self.ServiceWorkerRegistration.showNotification("Yeni Makale Eklendi !!",config));
    

});