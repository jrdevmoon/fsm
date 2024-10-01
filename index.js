const FSM = require (`${__dirname}/fsm.js`)

const fsm = new FSM ()

fsm.map (__dirname)

console.dir (fsm, {depth: 5})