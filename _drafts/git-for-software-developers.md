topics:

* Getting the latests changes from your team
  * git pull
  * git rebase <branch>
* rolling back to a known working commit
  * git log
  * git checkout <sha>
  * git checkout -
    * jumps you to the previous branch you were on
* finding the origin of some bug via bisect
  * git bisect
* amending your commit message
  * git commit -v --amend
* squashing your commits
  * git rebase -i <name of branch>
    * will allow you to consolidate your commits on <name of branch> into a single commit


For me I accidentally amended a commit with new changes. You can use reflog to revert to what the commit was before the amend and then recommit the changes as a new commit on top like

    git reflog
find the sha for the unammended commit

    git reset --soft <unammended sha>
    git commit
