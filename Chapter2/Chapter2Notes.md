# Node Building Blocks: Global Objects, Events, and Node's Asynchronous Nature

Difference between _Node.js_ applications and _browser-based javascript_ applications is that Node uses **Buffer** class functionality for the binary data functionality.

`The **buffer** is one of the Node's global objects`

`Node has _event ddriven asynchronous_ nature.`

## The global and process Objects

### The global Object

In the browser, when you declare a variable at the top level, it's declared globally. It does not work the same in Node. When you declare a variable in a module or application in Node, the variable isn't globally available; it's is restricted to the module or application that uses the module, and there won't be any conflict.

### The process Object

`this needs to be covered later.`

## Buffers, Typed Arrays, and String

Browser based JavaScript was never meant to deam the binary data. It was meant to deal with string values accessed or output to alert windows or forms. 

The solution in JavaScript and in the browser is the _ArrayBuffer_, manipulated through _typed arrays_. In Node, the solution is the _Buffer_.

It uses _Uint8Array_, one of the typed arrays representing an array of 8-bit unsigned integers.

_Typed Array_ means that the array should be of same data type.

## Node's Callback and Asynchronous Event Handling

JavaScript is single threaded, which makes it inherently synchronous. This means that JS is executed, line by line, untill the application is finished. Node is based in JS, it inherits this single threaded behavior.

If you have functionality that needs to wait on something, such as oopening a file, a web response, or other activity of this nature, then blocking the application until the operation is finished would be a majorr point of failure in server based appliccation.

the solution to prevent blocking is the event loop

### The Event Queue (Loop)

There are two approaches to deal with it.

- One approach would be to assign a thread to eah time-consuming process. The rest of the code could go on its way, in parallel. But this approach is really expensive.

- The second approach is to adopt an _event-driven_ architecture. What happens is the when a time-consuming process is invoked, application doesn't wait for the it to finish. Instead, the process signals when it's finished by emitting an event. This event gets added into a queue, or _event loop_. Any dependent functionality registers an interest in this event with the application, and when the event is pulled from the event loop and processed, the dependent functionality is invoked, with any event related data passed to it.