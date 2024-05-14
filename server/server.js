 const webPush= require("web-push");
 //const vapidKeys= webPush.generateVAPIDKeys();
 const vapidKeys={
    publicKey: 'BLPnbNuF05YjhOCTjkvpkUhg6kBjbF4XJUTH4LU-mGm5IhVZsi7GxcR9EB4VBmbyLFIWHT7i-sjk5RoGQtRF5E4',    
    privateKey: 'u1DT65LWaH1swAr9pxTVZRFOvWg4hQMqLW9iqvjNAn4'
  };
  webPush.setVapidDetails("mailto:hamit.c.aslan@gmail.com",vapidKeys.publicKey,vapidKeys.privateKey)
  console.log(vapidKeys);
  const subscribeBrave={
  "endpoint":"https://fcm.googleapis.com/fcm/send/dh17tHzWO2Q:APA91bGXWL_wwLsAdSMj78dhYvuH2EG4kX0D_IKiYp6ITvJa5KYf2VFdETWfJBI2gABZEy55LMAa2WvhzuQY2J24tpQTwC2D7H_GMLn1NXHRNdSaiTPvlWY6GHG_oNqFHCx4W_yBp7-C",
  "expirationTime":null,
  "keys":{
    "p256dh":"BAAZHUtr2Qb3YhSuFFDMFbU8FGP0iaro1RhbWxTXQciNQ1zAuo6jJzFRCJs_BDuRO17nYlpRA92XLfbAP-MlHm0",
  "auth":"Df9HufLdX9qxTCcctPD5Sg"}
};

const subscribeFirefox={
"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABmQhl7yO8wmJkfvq9doZnmQxa5WT2lx7AYP_OGEO9Ga2xTvam905MNvG89iGGEFeP49XWD6bwXkXfW-Ibk_qGLk5CwB-EwI5sv5-GgHusG_YTDwkyXVUKIAzgVl1HoM4QIX0SUhbOwLs5InjEdqaLN51wZeV4fMka7EnqlkltKbz7x-jQ",
"expirationTime":null,
"keys":{"auth":"r6OHcjfR9mJ4aSZMhegndw",
"p256dh":"BNYqBVIx1dic8yDNVq7zb5pR86w_jaG20NW1zYVUEg6yud1M_XgGGKEBP6tUXK5a2ppAkSWYF3jtrNWuM6E_cdo"
}};

webPush.sendNotification(subscribeBrave);
webPush.sendNotification(subscribeFirefox);