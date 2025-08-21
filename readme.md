# harrymoreno.com

Harry Moreno now has a blog [morenoh149.github.io](http://morenoh149.github.io)
This blog is built using github pages, twitter bootstrap, jekyll, yeoman jekyllrb generator.

TODO
* fix linkify headers error, we accidentally deleted the .js file for that
* prevent sidebar horizontal scroll on mobile
* revise about page
  * should double as a CV
  * should have things that would not fit onto a CV but are CV worthy
  * add OSS list to about page
  * make gallery smaller
* figure out how to add alt and titles to all images
* replace social buttons with http://sharingbuttons.io/
* add mailinglist
  * use AWS SES https://aws.amazon.com/ses/
* add archives so visitors know I have been writing for a while
* add search to discover old articles
* replace twitter with contact form
* add portfolio to About page
* add file uploading with https://uploadcare.com

## Running
```
% bundle
% bundle exec jekyll s
% bundle exec jekyll s --drafts --future
```
open http://127.0.0.1:4000/

## Testing on mobile

- start the server locally
- `ngrok http 4000`
- open one of the listed domain on your phone
