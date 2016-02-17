self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

  var title = 'Hello';  
  var body = 'This message is pushed by google\'s GCM';  
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
