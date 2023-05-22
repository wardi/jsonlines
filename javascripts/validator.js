/* VALIDATOR */

$(document).ready(() => {
  // CodeMirror editor
  let editor = CodeMirror.fromTextArea(jQuery('.validator textarea')[0], {
      lineNumbers: true,
      theme: 'abbott',
  });
  
  // clear button
  jQuery('.validator input[type="button"][value="clear"]').click(() => {
    editor.setValue('');
  });

  // validate button
  jQuery('.validator input[type="button"][value="validate"]').click(() => {
    let jsonl = editor.getValue();
    let lines = jsonl.split('\n');
    let errors = [];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      if (i !== lines.length - 1 || lines !== '') {
        try {
          JSON.parse(line);
        } catch (e) {
          if (e instanceof SyntaxError) {
            errors.push(`line ${i + 1}: error ${e}\n`);
          } else {
            throw e;
          }
        }
      }
    }

    let result = jQuery('.validator div.result ul');
    result.empty();
    if (0 < errors.length) {
      errors.forEach((error) => {
        result.append(`<li>${error}</li>`);
      });
    } else {
      result.append('valid jsonl')
    }
  });
});
