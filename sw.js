self.addEventListener("push",(e)=>{
console.log("e: >>",e);
    const config={
        body:"Mesaj içeriği burada yer alacaktır.",
        data:{
            dateOfArrival:Date.now(),
            primarKey:"3"
        }
    }

    e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi !!",config));  
     

});
