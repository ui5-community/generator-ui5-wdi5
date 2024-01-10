const Generator = require("yeoman-generator")
const chalk = require("chalk")
const yosay = require("yosay")

const wdi5 = {
  defaults: {
    configPath: "./webapp/test/e2e/",
    baseUrl: "http://localhost:8080/index.html"
  }
}

/**
 * this generator is a minimal wrapper around `npm init wdi5` and forwards all options to it
 * if running "embedded" (as part of a parent generator, e.g. generator-ui5-project), it will not prompt for any options
 * it also support cms line args, e.g. `yo wdi5 --configPath ./foo --specs ./bar --baseUrl http://localhost:8080 --ts`
 * that will be forwarded to `npm init wdi5`
 */
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    // use this.options.<option> laterz
    this.option("embedded", { type: Boolean }) //> if run as part of a parent generator, e.g. generator-ui5-project
    this.option("ts", { type: Boolean }) //> whether we're in TS-land, will be fwd to npm init
    this.option("configPath", { type: String })
    this.option("specs", { type: String })
    this.option("baseUrl", { type: String })
  }

  prompting() {
    // don't prompt if running as sub-gen
    if (this.options.embedded) {
      return
    }

    this.log(yosay(`Welcome to the ${chalk.red("wdi5")} generator!`))

    const prompts = [
      {
        type: "input",
        name: "configPath",
        message: "path to the 'wdio.conf.(j|t)s' file (relative to project root)",
        default: wdi5.defaults.configPath
      },
      {
        type: "input",
        name: "specs",
        message: "path to the test files (relative to project root)",
        default: wdi5.defaults.specs
      },
      {
        type: "input",
        name: "baseUrl",
        message: "URL of the UI5 app under test",
        default: wdi5.defaults.baseUrl
      }
    ]

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  install() {
    const configPath = this.props?.configPath || this.options?.configPath || wdi5.defaults.configPath
    const baseUrl = this.props?.baseUrl || this.options?.baseUrl || wdi5.defaults.baseUrl
    const specs = this.props?.specs || this.options?.specs

    process.env.DEBUG && this.log(`Generating wdi5 project with configPath=${configPath}, baseUrl=${baseUrl}, specs=${specs}`)

    const cmd = "npm"
    const args = ["init", "wdi5@latest", "-y", "--"]

    args.push("--configPath")
    args.push(configPath)

    args.push("--baseUrl")
    args.push(baseUrl)

    if (specs) {
      args.push("--specs")
      args.push(specs)
    }

    if (this.options?.ts === true) {
      args.push("--ts")
    }

    this.spawnCommandSync(cmd, args, {
      cwd: this.destinationPath()
    })
  }

}
