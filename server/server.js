 const webPush= require("web-push");
 //const vapidKeys= webPush.generateVAPIDKeys();
 const vapidKeys={
    publicKey: 'BLPnbNuF05YjhOCTjkvpkUhg6kBjbF4XJUTH4LU-mGm5IhVZsi7GxcR9EB4VBmbyLFIWHT7i-sjk5RoGQtRF5E4',    
    privateKey: 'u1DT65LWaH1swAr9pxTVZRFOvWg4hQMqLW9iqvjNAn4'
  };
  webPush.setVapidDetails("mailto:hamit.c.aslan@gmail.com",vapidKeys.publicKey,vapidKeys.privateKey)
  console.log(vapidKeys);
  const subscribeBrave={"endpoint":"https://fcm.googleapis.com/fcm/send/e9acwVHBOxY:APA91bF43yvyZpdCt_XdbMS8Vjo51Fveg1PppNzhjPI-4Ghk8icXtLxw8PEceSIfi_ux8NVHa-srMk44lmNv6-D-pZZLPykWEoJlAt3IeuLvc82XeRv4VBbrtWmfNKSbPOdSMtNOn-Vw",
  "expirationTime":null,
  "keys":{"p256dh":"BFnJjJmJ254dP2j5QuiuM-iKH-Y6TiWRC6j6XX-xkFt3kGLL69XD_VUoj8_AZAM1ihMYLmQc4A_Yed5N7wdD1iw","auth":"TPm4knaFZuUJQUmJoPpZ0w"}
};

const subscribeFirefox={
"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABmQhl7yO8wmJkfvq9doZnmQxa5WT2lx7AYP_OGEO9Ga2xTvam905MNvG89iGGEFeP49XWD6bwXkXfW-Ibk_qGLk5CwB-EwI5sv5-GgHusG_YTDwkyXVUKIAzgVl1HoM4QIX0SUhbOwLs5InjEdqaLN51wZeV4fMka7EnqlkltKbz7x-jQ",
"expirationTime":null,
"keys":{"auth":"r6OHcjfR9mJ4aSZMhegndw",
"p256dh":"BNYqBVIx1dic8yDNVq7zb5pR86w_jaG20NW1zYVUEg6yud1M_XgGGKEBP6tUXK5a2ppAkSWYF3jtrNWuM6E_cdo"
}};

webPush.sendNotification(subscribeBrave,"Brave bildirim gönderildi.");
webPush.sendNotification(subscribeFirefox,"Firefox bildirim gönderildi."); 