module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       // mongoUri: 'mongodb://admin:password@localhost:27017/myFirstNode',
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '511255559311-jprlc8ugkii04vbqvp7k8qp0ncgdba3b.apps.googleusercontent.com',
              clientSecret: 'iwhzTz6vj-v-SSlHwwTiIXtd',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }


}
