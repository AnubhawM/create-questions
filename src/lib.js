export const chooseRandom = (array, numItems) => {
  // TODO copy chooseRandom() from previous assignment or re-implement it if you want
  if (array.length === 0 || array.length === 1) {
    return array
  }

  if (numItems === undefined || numItems < 1 || numItems > array.length) {
    let min = Math.ceil(1)
    let max = Math.floor(array.length)
    let numItems = Math.floor(Math.random() * (max - min + 1)) + min
  }

  if (numItems === 0) {
    let anotherArray = []
    anotherArray.push(...array)
    return anotherArray
  }

  let tempArray = []
  tempArray.push(...array)

  let randomIndices = []
  let alreadyIndexed = []

  for (let i = 0; i < numItems; ++i) {
    let randomIndex = Math.floor(Math.random() * array.length)
    if (!alreadyIndexed.includes(randomIndex)) {
      randomIndices.push(tempArray[randomIndex])
      alreadyIndexed.push(randomIndex)
    } else {
      --i
    }
  }
  return randomIndices
}

// createPrompt: ({numQuestions: number, numChoices: number}) -> [{type: string, name: string, message: string}]
export const createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
  const ret = []

  // Create a range helper function that returns an array representing the range of values to iterate over.
  // Essentially, the returned array would be the for loop values
  // Then use map transducer

  for (let i = 1; i < numQuestions + 1; ++i) {
    ret.push({
      type: `input`,
      name: `question-${i}`,
      message: `Enter question ${i}`
    })
    for (let j = 1; j < numChoices + 1; ++j) {
      ret.push({
        type: `input`,
        name: `question-${i}-choice-${j}`,
        message: `Enter answer choice ${j} for question ${i}`
      })
    }
  }
  // console.log(`This should be the array: ${console.log(ret)}`)
  return ret
}

// // createQuestions: ({})
// export const createQuestions = () => {
//   // TODO implement createQuestions()
// }
