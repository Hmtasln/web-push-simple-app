self.addEventListener("push",(e)=>{

    const config={
        body:"Mesaj içeriği burada yer alacaktır.",
        data:{
            dateOfArrival:Date.now(),
            primarKey:"3"
        }
    }

    e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi !!",config)); 
     

});
