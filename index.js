const Command = require('command')

module.exports = function emoteBlock(dispatch) {
  const command = Command(dispatch);
  let enabled = true;

  command.add('blockemotes', () => {
    enabled = !enabled;
    command.message('Emote block ' + (enabled ? 'enabled' : 'disabled') + '.');
  });

  dispatch.hook(S_SOCIAL, 1, (event) => {
    if (enabled) return false;
  });

}
