https://github.com/atom/vim-mode/issues/966#event-548891514

init.coffee

atom.commands.add 'atom-workspace', 'vim-mode:toggle-enabled', ->
  disabledPackages = atom.config.get('core.disabledPackages')
  disabledPackageIndex = disabledPackages.indexOf('vim-mode')
  if disabledPackageIndex is -1
    disabledPackages.push('vim-mode')
  else
    disabledPackages.splice(disabledPackageIndex, 1)
  atom.config.set('core.disabledPackages', disabledPackages)

//~/.atom/keymap.cson
'atom-workspace':
  'ctrl-alt-v': 'vim-mode:toggle-enabled'
