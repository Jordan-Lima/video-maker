const readline = require('readline-sync')

function start() {
  const content = {} //termo de busca

  content.searchTerm = askAndReturnSearchTerm() 
  content.prefix = askAndReturnPrefix()
  
  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipidia search term: ')
  }
  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
    
    console.log(selectedPrefixText)
  }

  console.log(content)
}

start()