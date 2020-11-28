const fs = require("fs")
const readline = require("readline")
let i = 1

const main = async () => {
  const stream = fs.createReadStream("day-1")

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    if (line.match(/\s-\s/)) i++
  }

  console.log(`Vocab: ${i}/715 words`)
}

main()
