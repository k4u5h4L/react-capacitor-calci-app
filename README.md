# React, Capacitor Calculator App

A cross platform calculator app supporting the web, android, iOS, Mac, windows, Linux all at once! Built with React, Typescript, Ionic Capacitor and electron.

## To run:

-   Clone the repo:

```bash
git clone https://github.com/k4u5h4L/react-capacitor-calci-app.git && cd react-capacitor-calci-app/
```

-   Run the build command to generate all the web assets:

```
yarn run build
```

### On Mobile:

-   Now connect your android/iOS phone to your computer and have USB debugging enabled.

-   Run this command to run the app on your phone:

```
yarn run cap:run
```

Now select the device you want to run on.

### On web:

-   Simply run it like running any react application:

```
yarn start
```

Now check [localhost:3000](http://localhost:3000) to view the site.

### On desktop:

-   Since it uses electron, it can be run on any platform. Just run the below command to get the electron app running:

```
yarn run run:electron
```

Now you'll have a chromium instance running with your app!
