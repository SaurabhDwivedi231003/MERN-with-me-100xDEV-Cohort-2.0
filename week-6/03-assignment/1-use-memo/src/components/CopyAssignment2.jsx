import React ,{useMemo, useState} from 'react'

const words = ["hello", "my", "name", "is", "random", "word" ];
const TOTAL_LINES = 200;

const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}


function CopyAssignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    const filteredSentences = useMemo(() => {
        return sentences.filter(x => x.includes(filter))
    } ,[sentences, filter])


  return (
    <div>
        <input type="text" onChange={(e)=>{setFilter(e.target.value)}}></input>
       {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
  )
}

export default CopyAssignment2;