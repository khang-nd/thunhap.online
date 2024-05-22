# AI Summary

- Generate `client_secret.json` and place it at the root of the project.
- Oauth command:

```sh
gcloud auth application-default login --client-id-file=client_secret.json --scopes=https://www.googleapis.com/auth/generative-language.tuning.readonly,https://www.googleapis.com/auth/generative-language.retriever
```
