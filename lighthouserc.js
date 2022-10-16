module.exports = {
  "ci": {
    "collect": {
      "url": [
        "http://127.0.0.1:4280"
      ],
      "startServerCommand": "npx swa start",
      "startServerReadyPattern": "webpack compiled successfully",
      "numberOfRuns": 1,
      "settings": {
        "skipAudits": ['is-cralwable'],
        "useThrottling": true,
        "onlyCategories": [
            'performance',
            'accessibility',
            'best-practices',
            'seo'
        ],
      }
    },
    "passes": [{
      "passName": 'defaultPass', 
      "pauseAfterLoadMs": 10000
    }],
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended"
    }
  }
}
