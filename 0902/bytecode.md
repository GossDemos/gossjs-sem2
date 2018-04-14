## How to get bytecode:
use flags, e.g
```bash
node --print_code -e 'console.log("hello")'
```
(optimized machine code generated by TurboFan compiler)

or
```bash
node --print_bytecode -e 'console.log("hello")'
```
(bytecode)
