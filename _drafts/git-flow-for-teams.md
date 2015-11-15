run `git pull` to fetch and merge any new code your team members have added.

I look at `git log` and count how many new commits were made. Then to review all these changes I do
`git diff head~N` where N is the number of new commits.

Use `git log -onelines` to get a list of commit titles. Good for skimming.
