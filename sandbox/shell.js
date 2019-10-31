var shell = require('shelljs');

var command = "python test_char.py";
if (shell.exec(command).code !== 0) {
    shell.echo("Error!");
    shell.exit(1);
}
