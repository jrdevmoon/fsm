const FSM = class
{
  #path
  #fs
  constructor ()
  {
    this.#path = require ('path')
    this.#fs = require ('fs')

    this.fs = []
  }
  map (path)
  {
    this.#loop (path, this.fs)
  }
  #loop (path, content)
  {
    let temp = {}
    temp = this.#path.parse (path)
    temp.path = path 

    if (this.#fs.existsSync (temp.path))
    {
        console.log ("works")
      if (this.#fs.statSync (temp.path).isDirectory ())
      {
        temp.directory = "Yes"
        temp.content = []

        content.push (temp)

        
      }
      if (this.#fs.statSync (temp.path).isFile ())
      {
        temp.file = "Yes"

        content.push (temp)
      }
    }

    console.log (temp)
  }
}

module.exports = FSM