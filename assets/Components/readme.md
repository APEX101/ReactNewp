# React Native

---

From Wikipedia, the free encyclopedia

> Some of this article's listed sources may not be reliable. Please help this article by looking for better, more reliable sources. Unreliable citations may be challenged or deleted. (February 2019)
>
> --<cite>From Wikipedia, the free encyclopedia</cite>

**React Native** is an open-source _mobile_ application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windowsand UWP by enabling developers to use React's framework along with native platform capabilities.

---

**Table of Contents:**

- [React Native](#react-native)
  - [History](#history)
  - [Implementation](#implementation)
  - [Hello World example](#hello-world-example)
  - [UI Examples](#ui-examples)
  - [Getting Started](#getting-started)
  - [References](#references)

## History

---

In 2012 Mark Zuckerberg commented, "The biggest mistake we made as a company was betting too much on HTML as opposed to native". Using HTML5 for Facebook's _mobile_ version resulted in an unstable application that retrieved data slowly. He promised Facebook would soon deliver a better _mobile_ experience.

Inside Facebook, Jordan Walke found a way to generate UI elements for iOS from a background JavaScript thread, which became the basis for the React web framework. They decided to organize an internal Hackathon to perfect this prototype in order to be able to build native apps with this technology.

After months of development, Facebook released the first version for the React JavaScript Configuration in 2015. During a technical talk, Christopher Chedeau explained that Facebook was already using **React Native** in production for their Group App and their Ads Manager App.

## Implementation

---

The working principles of **React Native** are virtually identical to React except that **React Native** does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via serialized data over an asynchronous and batched bridge.

## Hello World example

```py
1. import React from 'react';
2.  import { AppRegistry, Text } from 'react-native';

3. const HelloWorldApp = () => <Text>Hello world!</Text>;
4. export default HelloWorldApp;

5. // Skip this line if using Create React Native App
6 .AppRegistry.registerComponent('HelloWorld', () => HelloWorldApp);

7. // The React native code can also be imported from    8. another component with the following code:
 9. import HelloWorldApp from './HelloWorldApp';

```

## UI Examples

![UI](https://www.instamobile.io/wp-content/uploads/2019/04/Screen-Shot-2019-04-03-at-1.35.19-PM.png)

![UI2](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-react-native/opt_nurn_thumbnail.jpg)

## Getting Started

---

- [x] Learn **HTML**
- [x] Learn **CSS**
- [ ] Learn **JavaScript**
- [x] Start **React Native**

| **Syntax**   | **Description** | **Learn Java Script** |
| ------------ | --------------- | --------------------- |
| Basic        | Title           | Basics                |
| Intermediate | Intermediate    | Intermedite           |
| Advanced     | Advanced        | Advanced              |

## References

---

1. [React Native: Bringing modern web techniques to _mobile_". 26 March 2015.](https://engineering.fb.com/2015/03/26/android/react-native-bringing-modern-web-techniques-to-mobile/)
2. ["Releases – Facebook/React". GitHub.](https://github.com/facebook/react-native/releases)
3. ["Chapter 1. What Is React Native?". oreilly.com. O’Reilly Media, Inc. Retrieved 30 July 2020.](https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html)
4. ["Android Release for React Native". 14 September 2015.](https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/)
5. ["Building For TV Devices · React Native". reactnative.dev. Retrieved 2020-10-02.](https://reactnative.dev/)

---
