# MiddlewareNode js :

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

As name suggests it comes in middle of something and that is request and response cycle
Middleware has access to request and response object
Middleware has access to next function of request-response life cycle

Middleware functions can perform the following tasks:

1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware in the stack.
5. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the          request will be left hanging.

--> What is this next()?

--> A middleware is basically a function that will the receive the Request and Response objects, just like your route Handlers do. As a third argument you have another       function which you should call once your middleware code completed. This means you can wait for asynchronous database or network operations to finish before             proceeding    to the next step. This might look like the following:


If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging
