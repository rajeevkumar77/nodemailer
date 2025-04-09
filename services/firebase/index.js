// init firebase-service
require("./init").initFirebase()

const { sendNotification, sendNotificationMultiple, sendNotificationMulticast, sendDifferentNotificationsToDifferentUser, sendNotificationToTopic } = require("./services")


module.exports = { 
    sendNotification, 
    sendNotificationMultiple, 
    sendNotificationMulticast,
    sendDifferentNotificationsToDifferentUser ,
    sendNotificationToTopic
}