const admin = require("firebase-admin");

exports.sendNotification = (deviceToken, notification, payloadData) => {
  try {
    if (!deviceToken) return;

    const message = {
      notification,
      token: deviceToken,
    };

    if (payloadData && typeof payloadData === 'object' && Object.keys(payloadData).length) {
      message['data'] = payloadData
    }

    admin.messaging().send(message)
      .then((response) => {
        console.log('Successfully sent message:', response);
        return
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        return
      });
  } catch (error) {
    console.error('Error sending message:', error);
  }

}

exports.sendNotificationMultiple = async (deviceTokens, notification, payloadData) => {
  try {
    if (!deviceTokens || deviceTokens.length === 0) {
      return;
    }

    const messages = deviceTokens.map((deviceToken) => {
      return {
        notification,
        token: deviceToken,
        ...(payloadData && typeof payloadData === 'object' && Object.keys(payloadData).length && { data: payloadData })
      };
    });

    // return Promise.all(
    //   messages.map((message) => {
    //     return admin.messaging().send(message);
    //   })
    // )
    //   .then((responses) => {
    //     responses.forEach((response, index) => {
    //       console.log(`Successfully sent message to device ${deviceTokens[index]}:`, response);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error sending notification:', error);
    //   });

    // const sendMessagesRecursively = async (messages, deviceTokens, index = 0) => {
    //   if (index >= messages.length) {
    //     return; 
    //   }

    //   try {
    //     const response = await admin.messaging().send(messages[index]);
    //     console.log(`Successfully sent message to device ${deviceTokens[index]}:`, response);
    //   } catch (error) {
    //     console.error(`Error sending message to device ${deviceTokens[index]}:`, error);
    //   }

    //   await sendMessagesRecursively(messages, deviceTokens, index + 1);
    // };

    // try {
    //   await sendMessagesRecursively(messages, deviceTokens);
    // } catch (error) {
    //   console.error('Error sending in notifications:', error);
    // }

    return Promise.allSettled(
      messages.map((message) => {
        return admin.messaging().send(message);
      })
    )
      .then((results) => {
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            console.log(`Successfully sent message to device ${deviceTokens[index]}:`, result.value);
          } else {
            console.error(`Failed to send message to device ${deviceTokens[index]}:`, result);
          }
        });
      })
      .catch((error) => {
        console.error('Error sending notifications:', error);
      });


  } catch (error) {
    console.error('Error sending messages:', error);
  }
};

exports.sendDifferentNotificationsToDifferentUser = async (notificationData) => {
  try {

    if(!notificationData || !notificationData.length){
      return;
    }

    const deviceTokens = notificationData.map(el => el.deviceToken)
    if (!deviceTokens || deviceTokens.length === 0) {
      return;
    }

    const messages = notificationData.map((data) => {
      return {
        notification : data.notification,
        token: data.deviceToken,
        ...(data.payloadData && typeof data.payloadData === 'object' && Object.keys(data.payloadData).length && { data: data.payloadData })
      };
    });

    return Promise.allSettled(
      messages.map((message) => {
        return admin.messaging().send(message);
      })
    )
      .then((results) => {
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            console.log(`Successfully sent message to device ${deviceTokens[index]}:`, result.value);
          } else {
            console.error(`Failed to send message to device ${deviceTokens[index]}:`, result);
          }
        });
      })
      .catch((error) => {
        console.error('Error sending notifications:', error);
      });


  } catch (error) {
    console.error('Error sending messages:', error);
  }
};

exports.sendNotificationMulticast = async (deviceTokens, notification, payloadData) => {
  try {
    if (!deviceTokens || !Array.isArray(deviceTokens) || deviceTokens.length === 0) {
      return;
    }

    const chunkSize = 500;
    const chunks = [];
    for (let i = 0; i < deviceTokens.length; i += chunkSize) {
      chunks.push(deviceTokens.slice(i, i + chunkSize));
    }

    const promises = chunks.map(async (chunk) => {
      const message = {
        notification,
        tokens: chunk,
        data: payloadData || {}
      };

      return admin.messaging().sendMulticast(message);
    });

    const responses = await Promise.all(promises);
    responses.forEach((response, index) => {
      console.log(`Successfully sent message ${index + 1}:`, response);
    });
  } catch (error) {
    console.error('Error sending multicast notification:', error);
  }
};

exports.sendNotificationToTopic = (notification, topic) => {
  if (typeof notification !== "object" || !notification["title"] || !notification["body"] || !topic) return;
  const message = {
    notification,
    android: {
      priority: 'high',
    },
    apns: {
      headers: {
        'apns-priority': '10',
      },
    },
    topic,
  };

  // Send a message to the topic
  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response, topic);
    })
    .catch((error) => {
      console.log('Error sending message:', error, topic);
    });
}