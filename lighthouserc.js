module.exports = {
  "ci": {
    "collect": {
      "url": [
        "http://127.0.0.1:4280"
      ],
      "startServerCommand": "npm run start",
      "startServerReadyPattern": "webpack compiled with",
      "numberOfRuns": 1
    },
    "passes": [{
      "passName": 'defaultPass', 
      "pauseAfterLoadMs": 10000
    }],
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended",
    }
  }
}
