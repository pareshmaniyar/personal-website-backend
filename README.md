Personal Website
Stack used: Node, Express, MongoDB
- [ ] Include webpack
- [x] Include Authentication

APIs
Subscribing and Messaging
1. Subscribe with email and message
3. Unsubscribe

Blogs
1. Get InnerHTML
2. Get Comments
3. Post Comments
4. Edit Comment

## Users

## Blogs

Key Points to Remember/Check:
1. When creating new user in mongodb, check for any other creations happenning, wait for them to complete, when turn comes take over the mongoDB and stop other creations - { upsert: true } 
2. Max comments upto 100
3. Max likes per person 50
