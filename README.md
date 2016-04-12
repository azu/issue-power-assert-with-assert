# Reproduce Bug of power-assert with assert

- Issue: [power-assert make `assert()` of assert module silent · Issue #43 · power-assert-js/power-assert](https://github.com/power-assert-js/power-assert/issues/43#issuecomment-208708969 "power-assert make `assert()` of assert module silent · Issue #43 · power-assert-js/power-assert")
- Solution: [babel-plugin-empower-assert by twada · Pull Request #1 · azu/issue-power-assert-with-assert](https://github.com/azu/issue-power-assert-with-assert/pull/1 "babel-plugin-empower-assert by twada · Pull Request #1 · azu/issue-power-assert-with-assert")

You try to use [babel-plugin-empower-assert](https://github.com/twada/babel-plugin-empower-assert "babel-plugin-empower-assert") with [babel-plugin-espower](https://github.com/power-assert-js/babel-plugin-espower "babel-plugin-espower"), and resolve this issue.

## Installation

    npm install

## Usage

    npm test
    # I expected to fail the test, but pass test.
