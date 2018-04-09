'use strict';

const Generator = require('yeoman-generator');
const prompts = require('./prompts');

class Component extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    return this.prompt(prompts).then(answers => {
      this.containerName = answers.containerName;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('container.ejs'),
      this.destinationPath(`${this.containerName}.js`),
      this
    );
  }
}

module.exports = Component;