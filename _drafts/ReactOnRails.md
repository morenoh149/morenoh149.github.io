---
layout: post
title: React On Rails
---

Lessons learned from developing a React app with a JSON API.

* use browserify
* use npm to manage your frontend dependencies
* use [heroku-buildpack-multi](https://github.com/ddollar/heroku-buildpack-multi)
when pushing your polyglot app. *Note* this will cause both bundle and npm to
run everytime you push to heroku. My deploys are creeping up on 5 minutes to
complete.

## Mocha Testing
```
▾ app/
  ▾ assets/
    ▸ images/
    ▾ javascripts/
      ▾ components/
          .gitkeep
          App.jsx
        application.js
        client.js
        globular.js
        module.js
▾ spec/
  ▸ controllers/
  ▸ factories/
  ▸ features/
  ▸ helpers/
  ▾ javascripts/
    ▾ fixtures/
    ▾ components/
        App_spec.js
      application.js
      client_spec.js
      globular_spec.js
      module_spec.js
  ▸ lib/
  ▸ models/
  ▸ support/
    i18n_spec.rb
    rails_helper.rb
    spec_helper.rb
```
Then run `npm install --save-dev mocha should`
Then `mocha spec/javascripts`


## example of programmatically generated inline styles
style = { color: green }

(
<div style={style}>
</div>
)
