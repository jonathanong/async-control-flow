# Zalgo

A function that takes a callback should either _always_ or _never_ execute the callback asynchronously.
Arbitrarily calling a callback synchronously or asynchronously makes the API inconsistent.
We call this [releasing Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony).

Your task:

- Make the following function always call its callback asynchronously.

To call the callback asynchronously, I recommend using [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg)
