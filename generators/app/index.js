import Generator from "yeoman-generator";

export default class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径
    // const templates = [
    //   ".gitignore",
    //   "env.d.ts",
    //   "index.html",
    //   "package.json",
    //   "README.md",
    //   "tsconfig.app.json",
    //   "tsconfig.json",
    //   "tsconfig.node.json",
    //   "tsconfig.vitest.json",
    //   "vite.config.ts",
    //   "vitest.config.ts",
    //   ".vscode/extensions.json",
    //   "public/favicon.ico",
    //   "src/App.vue",
    //   "src/main.ts",
    //   "src/assets/base.css",
    //   "src/assets/logo.svg",
    //   "src/assets/main.css",
    //   "src/components/HelloWorld.vue",
    //   "src/components/TheWelcome.vue",
    //   "src/components/WelcomeItem.vue",
    //   "src/components/__tests__/HelloWorld.spec.ts",
    //   "src/components/icons/IconCommunity.vue",
    //   "src/components/icons/IconDocumentation.vue",
    //   "src/components/icons/IconEcosystem.vue",
    //   "src/components/icons/IconSupport.vue",
    //   "src/components/icons/IconTooling.vue",
    //   "src/router/index.ts",
    //   "src/stores/counter.ts",
    //   "src/views/AboutView.vue",
    //   "src/views/HomeView.vue"
    // ];

    // templates.forEach(item => {
    //   // Item => 每个文件路径
    //   console.log(12, item);
      
    //   this.fs.copyTpl(
    //     this.templatePath(item),
    //     this.destinationPath(item),
    //     this.answers
    //   );
    // });

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      this.answers
    );
  }
}
