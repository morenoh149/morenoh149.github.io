https://tools.ietf.org/html/rfc3501#page-44

https://devdocs.io/python~3.8/library/imaplib#imaplib.IMAP4.status

python has imap support in the stdlib

to poll a mailbox for new messages use M.status()

it returns info like
S:   * 18 EXISTS
S:   * FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
S:   * 2 RECENT
S:   * OK [UNSEEN 17] Message 17 is the first unseen message
S:   * OK [UIDVALIDITY 3857529045] UIDs valid
S:   a002 OK [READ-WRITE] SELECT completed
