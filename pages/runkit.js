class RunKitEmbed extends HTMLElement {
  constructor() {
      super();
      const wrapper = document.createElement('div')
      wrapper.style = "margin: 20pt"

      const source = this.textContent
      this.textContent = ""
      const tempCodePlaceholder = document.createElement('pre')
      tempCodePlaceholder.textContent = "" //source

      // theme - https://runkit.com/docs/theme-maker/untilted-lkqteuneka0g
      // https://github.com/runkitdev/react-runkit
      window.RunKit.createNotebook({
          element: wrapper,
          //env,
          //minHeight,
          //preamble,                               // source code to run before main code 
          //nodeVersion,                            // node version string
          theme: 'untilted-lkqteuneka0g',
          source,                                 // source code
          onLoad: (e) => {                         // what to do when loaded
            console.log(`Loaded runkit codeblock`);
            console.log(e);
            tempCodePlaceholder.remove()
          },
          onEvaluate: (e) => {                    // what to do when evaluated
            console.log(`Evaluating`)
            console.log(this);
            console.log(e);
          },
          //onURLChanged                          provide a callback that is run whenever the embed's URL changes
      })
      this.appendChild(wrapper)
      this.appendChild(tempCodePlaceholder)

  }
}
customElements.define('rk-embed', RunKitEmbed);