## Undefined vs not defined:

In node, `node -e` only evaluates, while `node -p` evaluates and prints result, and the returned result includes the implicitly returned undefined.

Undefined means the variable exists, but isn't given a value yet.

Not defined variables don't exist yet in the current lexical environment, that is, are not accessible there or weren't yet created.
