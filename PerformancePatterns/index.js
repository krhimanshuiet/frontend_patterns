/*
Any client-side JavaScript in our application has to be shipped to the client in one way or another. Before this can happen, we have to make sure that:
The JavaScript is executable in a browser environment
The file that the browser has to download and fetch only contains relevant code
,to ensure the browser can quickly fetch this bundle without using too much bandwidth
*/

/*
Tools


1.Bundlers
A bundler bundles our application together in one or multiple files,
and makes it possible to make code executable in other environments, for 
example browsers. A bundler receives an entry file, from which it starts
to bundle the code together. If we're importing modules from other files, 
the bundler traverses these modules in order to include them all in the bundle.


2.Compilers
A compiler converts JavaScript (or TypeScript) code into another version 
of JavaScript, which could be backwards compatible in current and older browsers 
or environments.
For example, we can use Private class features in JavaScript, but not all browsers 
support it yet. If we use Private class features in our code, we need to use a compiler 
to compile it to a version of JavaScript that a browser 
(or other environment, for example in a Serverless Function) can execute.


3.Minifier
A minifier can reduce the size of a JavaScript file based on a certain 
configuration, for example by removes comments, making variable and 
function names smaller, removing whitespace, and so on. This allows us 
to have a much smaller bundle size and faster execution without sacrificing 
readability, while the JavaScript executes and behaves the exact same way.
For example, we can minify the compiled result we previously got after compiling our code with Babel.



Combination
When working with bundlers, for example Webpack, we have to configure
Webpack to include a compiler like Babel, and add optimizations like 
the Terser minifier.

There are also tools out there that combine all these steps, such as:

SWC - a Rust-based compiler, bundler, and minifier
ESBuild - a Go-based compiler, bundler, and minifier.


Bundle Splitting
Bundle splitting is the process of creating multiple, smaller bundles 
rather than one large bundle.

A larger bundle can lead to an increased amount of loading time,
processing time, and execution time. Users on low-end devices or 
slower networks will see a significant increase in loading time 
before the bundle has been fetched.

To avoid larger bundles, we can tell the bundler to create multiple, 
smaller bundles, instead of bundling everything into one big file.


Tree Shaking
With tree shaking, we can reduce the bundle size by eliminating dead code. 
Tree shaking is aimed at removing unused code from a JavaScript bundle. 
Bundlers can automatically detect dead code, to exclude this code from the final bundle.

For example, if two methods are exported from the input.js file, namely validateInput
and formatInput, but we're only importing validateInput, the bundler will ensure that
the formatInput method won't be included in the final bundle.

After tree shaking, the final bundle won't include the formatInput function
as it's not referenced in the code.


*/