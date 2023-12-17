/*

Rendering content on the web can be done in many ways. 
The decision how and where to fetch and render content 
is key to the performance of an application.

The available frameworks and libraries can be used to implement different 
rendering patterns like Client-Side Rendering, Static Rendering, Incremental 
Static Regeneration, Progressive Rendering, Server-Side Rendering and many more. 
Understanding the tradeoffs and use cases for these patterns can drastically help 
the performance of your application, resulting in a great user and developer experience.

Web Vitals
To measure how well our website performs, we can use a set of useful 
measurements called Web Vitals. A subset of these measurements - the Core Web Vitals - 
is usually used to determine the performance of a page, and can affect your website's SEO.



Client-Side Rendering
Render your application's UI on the client

When a user requests a client-side rendered application, the server initially
responds with the barebones HTML file.
Once the client recieves this HTML file, the HTML parser parses the content, 
and fetches the JavaScript bundle when it reaches the script tag.
When the client has downloaded the JavaScript, it executes its contents. 
This contains DOM methods to dynamically append content to the DOM tree, 
which results in rendered content to the user's screen.


Implementation
A basic client-side application consists of at least two files.

First, we need to have a barebones HTML file, which contains the element that 
the JavaScript file can use to dynamically append content to.

<html>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
We also need a JavaScript file, which contains methods to update the 
DOM tree and dynamically render data. This file gets fetched after (or during) 
the HTML parsing.

const root = document.getElementById("root");

// DOM manipulation
root.appendChild(...)



TTFB: The Time To First Byte can be fast, since the initial HTML does not contain large components.
FCP: The First Contentful Paint can occur once the JavaScript bundle has downloaded, parsed, and executed its contents.
TTI: The Time To Interactive can occur once the JavaScript bundle has downloaded, parsed, and executed its contents to bind the event handlers to the components.
LCP: The Largest Contentful Paint can occur at the same time as the First Contentful Paint, provided there aren't any large components such as large images or videos.
*/