(() => console.log("I've been called!"))();

(f => f())(() => (console.log("Me too!")));
