use substitution to delete areas of text with regexes

:%s/[.*$
deletes from open bracket to end of the string for every line in a buffer

:%s/^.*a/foo
replace beginning of every string to first occurring 'a' with 'foo'

:syntax on
turns syntax on

:syntax off
turns syntax off

:sort
sort all lines alphabetically
