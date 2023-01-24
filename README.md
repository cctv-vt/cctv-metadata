#  Overview
A set of documents and tools for reworking CCTVs program metadata.
The reasoning for this can be found in the [Proposal Document](docs/proposal.md)

# Script
Usage:
```
npm install
npm run start [year] [month] [day]
```

to avoid issues with web caching, set the `COOKIE` environment variable. a propper cookie can be aquired by making a request to cctv.org as a logged in user and copying it from the http request headers. a `.env` file can be used as well.

# Schema
found in `schema/cctv-program-schema.json`
it uses JSON schema draft 7 the documentation of which can be found here:
https://json-schema.org/specification-links.html#draft-7

a quicker overview of JSON schema can be found here:
https://json-schema.org/learn/getting-started-step-by-step.html
