const fs = require("fs")
const readline = require("readline")
let i = 1

const main = async () => {
  const stream = fs.createReadStream("test")

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    if (line.match(/\s-\s/)) i++
  }

  console.log(`Vocab: ${i}/500 words`)
}

main()
