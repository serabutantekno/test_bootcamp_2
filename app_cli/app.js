#!/usr/bin/env node
const { program } = require("@caporal/core")
const axios = require('axios')

program
  .command('gaccount', 'Retrieve user data that logged in with Google Account')
  .default()
  .action(({ logger }) => {
    axios.get('http://127.0.0.1:3000/data')
      .then(response => {
        logger.info('User data that logged in with Google account retrieved successfully.')
        console.log(response.data)
      })
  })

program.run()
