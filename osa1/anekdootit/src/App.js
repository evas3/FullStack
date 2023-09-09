import { useState } from 'react'

const Maxim = (props) => {}

const App = () => {
  let arry = [0,0,0,0,0,0,0,0];
  const [ary, setAry] = useState(arry);
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * 8));
  const [maxim, setMaxim] = useState(0);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => 
        {setSelected(Math.floor(Math.random() * 8))
      }}>next anecdote</button>
      <button onClick={() => 
        {const aa = ary.map((a, i) => {
          if (i===selected){
            return a+1;
          }
          else{
            return a;
          }
        })
        setAry(aa);

        setMaxim(ary.indexOf(Math.max(...ary)))}}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxim]}</p>
    </div>

  )
}

export default App
