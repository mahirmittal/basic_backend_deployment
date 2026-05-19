require('dotenv').config()
const express = require('express')
const app = express()

// const port = 4000

const myGithubData= {
  "login": "mahirmittal",
  "id": 141123217,
  "node_id": "U_kgDOCGlekQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/141123217?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mahirmittal",
  "html_url": "https://github.com/mahirmittal",
  "followers_url": "https://api.github.com/users/mahirmittal/followers",
  "following_url": "https://api.github.com/users/mahirmittal/following{/other_user}",
  "gists_url": "https://api.github.com/users/mahirmittal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mahirmittal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mahirmittal/subscriptions",
  "organizations_url": "https://api.github.com/users/mahirmittal/orgs",
  "repos_url": "https://api.github.com/users/mahirmittal/repos",
  "events_url": "https://api.github.com/users/mahirmittal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mahirmittal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-08-01T07:56:20Z",
  "updated_at": "2025-10-14T14:26:20Z"
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/login', (req,res)=>{
    res.send("this is a login page")
})

app.get('/github', (req,res)=>{
    res.json(myGithubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})