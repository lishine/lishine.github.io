### Hasura
- Running: cd db; docker-compose up
#### Installing
- Install docker
- curl -L https://cli.hasura.io/install.sh | bash
- hasura init --directory migrations --endpoint http://localhost:8090
- cd migrations, hasura console
- Change schema only through hasura console!!! (then migrations are saved into migrations folder)
- from existing migrations: hasura migrate apply --endpoint http://localhost:8091
- Hasura console: cd db/migrations && hasura console --console-port 9696 --api-port 9692

### Connecting
- Hasura - http://localhost:8090

## Email preview
- ENV settings EMAIL_SEND, EMAIL_PREVIEW, EMAIL_PREVIEW_PATTERN
- If email conforms to the pattern and preview set, then email not sent sent but previewed through <a /> generated link.
- And locally if it not conforms to the pattern, it is previewed by opening from the api server directly.

## Install

## Info
- In vscode in window replace - convert require to import.
- const (.*?) = require\((.*?)\)
- import $1 from $2

## Setup domain
- Register free domain at freenom.com
- Add email records
- Add CNAME record with now alias as a target and name as the naked domain
- now alias vim55k.now.sh do-salsa-tk
- Verify according to instructions

## Setup mailgun email
- Sign-up + add CC
- Add domain
- Add the suggested records of the naked domain to the freenom.com name servers
- Wait for email confirmation

#### Regex
- background[^\n]*?[\s\n]*?(?=})