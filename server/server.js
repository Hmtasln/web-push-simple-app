 const webPush= require("web-push");
 //const vapidKeys= webPush.generateVAPIDKeys();
 const vapidKeys={
    publicKey: 'BLPnbNuF05YjhOCTjkvpkUhg6kBjbF4XJUTH4LU-mGm5IhVZsi7GxcR9EB4VBmbyLFIWHT7i-sjk5RoGQtRF5E4',    
    privateKey: 'u1DT65LWaH1swAr9pxTVZRFOvWg4hQMqLW9iqvjNAn4'
  };
  webPush.setVapidDetails("mailto:hamit.c.aslan@gmail.com",vapidKeys.publicKey,vapidKeys.privateKey)
  //console.log(vapidKeys);
  const subscribeBrave={"endpoint":"https://fcm.googleapis.com/fcm/send/eME5du95QXg:APA91bEeiDjFStvr95EhENlEhhbZ73cObjBBn6BYfvccnPsRZUjLXd-vcUPus1vww2nc9kI4RZpN0nSw4eD5bvmK3LdF7PFTDdrwvlhE4XXOcycR_qidu4IVTClHbkgYGlFgGzeaCHUE","expirationTime":null,"keys":{"p256dh":"BC39g99DjVUrE3iwYzljej2UT3IJDfFLQIcG6yR1-WMiedGEWAMc5Ms41vlwIf9Rdb_L9F4H2oCoy9fSsf61dvI","auth":"Tj9a19SifthPFJFOkqgJnA"}};

const subscribeFirefox={"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABmQ3v-88CFTG6y8dFJS64rURXYDZhVPass5NSCallzQ1rED1uCiBkWUPCtHYJl1xDoMJQ4iM0esQ4CRfPDiAwPDmAQju1a9KGetEYvwDhWoUxxI5YsTgZpH0aRrnBJ2KVjf8jUj9i8bvShMSm-fNf6B0cNhyEA1Rx9fXIHD07eqnXdgSM",
"expirationTime":null,"keys":{"auth":"0walw2ed0QNsAluPE1C0VA","p256dh":"BD_7akM5_jSYUPomlAwWqLoA9KaWW2DwS5glEGlLWkqJP8BY7ScgtHOLCoWYaPPXkHCf6cdBomgezyxiq9u7uhQ"}};

webPush.sendNotification(subscribeBrave,"Push natification nasıl yapılır ?");
webPush.sendNotification(subscribeFirefox); 