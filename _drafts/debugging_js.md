Sometimes you get errors with handling click events. Because of the way the dom
works you can get situations where one element is covering another, and thus you
can't grab a click event on the element that is being covered.

One way of debugging these situations is by adding this to your page

$(document).click(function(event) {
    myClickedElement = $(event.target);
    console.log(myClickedElement.text());
});

this will automatically print to the console the text of the element you click
anywhere on the page. Note this uses jQuery. For a non jquery solution try http://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document

if you are trying to find an element that doesn't have text, such as a picture,
you can still find it by querying the console for the myClickedElement variable.
In Chrome dev tools you'll see the clicked element being highlighted. In most
cases you can resolve this issue by increasing the element's z-index.

When you don't know what is catching the click event

$(document).click(function(event) {
  myClicked = $(event.target);
  console.log(myClicked.text());
});

css rule that will put a red outline on anything you hover
`* { border: 1px solid pink; }`
