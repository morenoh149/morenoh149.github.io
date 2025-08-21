# harrymoreno.com

Harry Moreno now has a blog [morenoh149.github.io](http://morenoh149.github.io)
This blog is built using github pages, twitter bootstrap, jekyll, yeoman jekyllrb generator.

TODO
* prevent sidebar horizontal scroll on mobile
* remove bootstrap entirely
* fix up hire-me page, add autostrat experience
* rename twitter to X button
* add mailinglist
  * use AWS SES https://aws.amazon.com/ses/
* add archives so visitors know I have been writing for a while

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
