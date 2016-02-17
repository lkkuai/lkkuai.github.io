self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

  var title = '中文字3';  
  var body = '發送訊息3';  
  var icon = 'http://udn.com/static/img/logo.png?20160108';  
  var tag = 'simple-push-demo-notification-tag';


  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag
    })  
  );  
});
