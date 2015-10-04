# Passwords

When storing passwords in your database, you want to salt + hash them so that if attackers ever get access to your database, it would take a long time for them to figure out the actual passwords.

One method of salting + hashing is [pbkdf2](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback),
which node.js supports natively.

Your task:

- Create a password hashing function that takes in an optional salt.
  - If no salt argument is passed, create a random one with [`crypto.randomBytes()`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback). Use the async version!
- Two passwords with the same salt should match.
- It should support a callback.
- It should return a promise.
