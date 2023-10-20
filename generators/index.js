const Generator = require("yeoman-generator")
const chalk = require("chalk")
const yosay = require("yosay")

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.red("wdi5")} generator!`))

    const prompts = [
      {
        type: "input",
        name: "configPath",
        message: "path to the 'wdio.conf.(j|t)s' file (relative to project root)",
        default: "./webapp/test/e2e/"
      },
      {
        type: "input",
        name: "specs",
        message: "path to the test files (relative to project root)",
        default: "./webapp/test/e2e/"
      },
      {
        type: "input",
        name: "baseUrl",
        message: "URL of the UI5 app under test",
        default: "http://localhost:8080"
      }
    ]

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    this.fs.copy(this.templatePath("dummyfile.txt"), this.destinationPath("dummyfile.txt"))
  }

  install() {
    this.installDependencies()
  }
}
