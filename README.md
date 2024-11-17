## Expo - A fresh Start

1. Created a new project using the latest command which is as follows

```
npx create-expo-app@latest crud
```

2. To remove the basic example project which comes with the default installation we can use the following code

```
npm run reset-project
```

Later we can remove the app-example folder which has the whole example project created using **create-expo-app@latest** command.

3. In order to use jsx instead of typescript we can go into **tsconfig.json** file and add .jsx inside include array

```
"**/*.jsx",
```
