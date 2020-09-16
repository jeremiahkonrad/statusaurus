# Game plan

## Specs
Overarching: Write a status page for the FactoryFour APIs

- A user shall be able to view the statuses of a finite list of APIs
- A user shall be able to get an updated look at each APIs status, automatically, refereshing at a set interval (default 15 seconds)
- A user will be able to easily scan and recognize an outage
- A user will be able to understand the state of each service and be able to communicate it to other 


## Components
- Table (sorted alpha by service name?)
  - Let's not use a tiled layout because it might be hard to scan, and there's value in seeing same-type data in column (e.g. service name, message, etd)
- StatusRow
- Instructions Block
  - let's have added info at the bottom of the status table to confirm scope of info, usage, etc to user. if they feel it's helpful

## Data we're working with
- Main input will be an array of API Service names that map back to an API url format

## Areas of Concern
- use case sounds like this should be a lightweight page, with a bias to functionality. let's keep styles and any overhead minimal.
- can we use background color to communicate "this state of this service is fine, no immediate worry"