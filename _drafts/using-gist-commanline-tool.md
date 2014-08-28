gist -cP
grabs anything in your clipboard, creates a gist, and pastes the link to your clipboard

echo "some text" | gist -c
create gist by piping output of command, copy gist link into clipboard

cat somefile.txt | gist -c
output a file to a gist, save link to clipboard
