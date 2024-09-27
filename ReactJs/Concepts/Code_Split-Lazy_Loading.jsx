// What is the Code Spilt in React JS?

// In productio mode, when react application runs the only one main file is served through the networks of browser but we don't want to get the entire thing(data, components) at once because unnecessorly, data will be served which in not needed yet.
// so when particular files are served with main js file that is called code splitting.

// Now what is the Lazy loading in react?
// Lazy is the function of react which can be used to import components dynamically. So when particular function or thing will  be occur then the component will load.

// Example : Suppose, You have one about page in your application. In this page one button is reponsible to import the data when user click on this button but what if user comes to the page and never click on the button?? So in this case data won't import unnecessorly. It is important from Performance pov.

// **************

// Synchronous import (static import):

// A regular import at the top of a file is a static import.
// This type of import is resolved at compile time, before the script is executed, and it doesn't return a promise.

import { myFunction } from "./myModule";
// This does not return a promise and is resolved before the code runs.

// *******************
// Dynamic import() (async import):

// When you use import() as a function, it is always dynamic.
// It is resolved at runtime and asynchronously loads the module, returning a promise.

const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./components/Contact").then((module) => ({
      default: module.Contact,
    }))
  )
);
// In this case, it always returns a promise that resolves when the module has been loaded.

// the import() statement in JavaScript is a bit special because it returns a promise. This is called a dynamic import and is part of the ECMAScript 2015 (ES6) standard. Normally, imports are static and processed at the top of the file. But when you use import() in this way, it behaves dynamically and asynchronously.

// In JavaScript, the import() function always returns a promise—this is guaranteed by the specification of dynamic imports.


// General Rule:
// Static import: Doesn't return a promise.
// Dynamic import(): Always returns a promise.
// Thus, if you see import() (with parentheses), it will always return a promise.




// Importing  components with lazy function provided by react 
const Home = lazy(() => import('./components/Home')) ; 

// similarly by using import function we can get the normal data from js file as well. 
import('../data').then((module) => setTodosList(module.todos)) // here we are importing data dynamically . 