#!/usr/bin/env node

'use strict'
const neodoc = require('neodoc')

const syntax = `
Usage:
  brancher.js
  brancher.js validate
  brancher.js snakeify
  brancher.js dashify
`

let getBranchNameFromGit = () => { throw new Error('current-git-branch is not installed') }
try {
  getBranchNameFromGit = require('current-git-branch')
} catch (e) {
  console.warn('current-git-branch is not installed, proceeding without')
}

const Brancher = {
  /**
   * Gets the name of the branch. Supports the folowing env:
   *   * netlify
   *   * CircleCI
   *   * git
   */
  getBranchName: function () {
    if (process.env.CIRCLECI_BRANCH) return process.env.CIRCLECI_BRANCH
    if (process.env.NETLIFY) return process.env.HEAD
    return getBranchNameFromGit()
  },

  /**
   * Returns the branch name with all invalid characters
   * replaced by dashes (-).
   */
  getDashifiedBranch: function () {
    return this.getBranchName().replace(/[\W_]+/g, '-')
  },

  /*
   * Returns the branch name with all invalid characters
   * replaced by underscores (_). It prevents the following error
   * when creating resources on AWS:
   *
   *    Member must satisfy regular expression pattern: [\w\s+=,.@-]+
   *
   */
  getSnakedBranchName: function () {
    return this.snakeify(this.getDashifiedBranch())
  },

  snakeify: function (string = '') {
    return `${string}`.replace(/[-]+/g, '_')
  },

  /**
   * Gets the name of the IAM Role that will be created for this stage.
   * It is based on the name of the branch.
   */
  getIamRoleName: function () {
    const name = this.getDashifiedBranch()

    return `api-swipe-me-${name}-eu-west-1-lambdaRole`
  },

  validateCurrentBranchName: function () {
    const name = this.getIamRoleName()
    const size = name.length

    // The branch name is valid, nothing to do
    if (size <= 64) return

    throw new Error(`The name of the branch is too long (${size}/64)`)
  }
}

module.exports = {
  ...Brancher
}

if (require.main !== module) return

const options = neodoc.run(syntax)

if (options.snakeify) {
  console.log(Brancher.getSnakedBranchName())
}

if (options.dashify) {
  console.log(Brancher.getDashifiedBranch())
}

if (options.validate) {
  Brancher.validateCurrentBranchName()
  console.log('✔ Branch name is valid')
}

if (!Object.keys(options).length) {
  console.log(Brancher.getBranchName())
}
