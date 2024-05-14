self.addEventListener("push",(e)=>{
console.log("e: >>",e.data.text());
    const config={
        body:e.data.text() || "Yeni Makale Gözatın !!",
        data:{
            dateOfArrival:Date.now(),
            primarKey:"3"
        },
        icon:"/images/icon.jpg",
        vibration:[100,50,100],
    }

    e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi !!",config));  
     

});
