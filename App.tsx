import * as React from 'react';
import './style.css';
const strinGG = '111AAABCCCC,,,';
export default function App() {
  console.log('input=', strinGG);
  const convert1 = () => {
    let result = '';
    let count = 0;
    for (let i = 0; i <= strinGG.length; i++) {
      let prev = strinGG.slice(i - 1, i);
      let current = strinGG.slice(i, i + 1);
      // console.log('current=', current);
      if (prev != current) {
        result = result + (count + 1) + prev + ' ';
        count = 0;
      } else {
        count++;
      }
    }
    console.log('convert 1 result=', result.slice(1, strinGG.length));
  };

  const convert2 = () => {
    let result = '';
    let count = 0;
    for (let i = 1; i <= strinGG.length; i++) {
      let prev = strinGG[i - 1];
      let current = strinGG[i];
      if (prev === current) {
        count++;
      } else {
        result = '' + result + (count + 1) + prev;
        count = 0;
      }
    }
    console.log('convert 2 result=', result);
  };
  return (
    <div>
      {convert1()}
      {convert2()}
    </div>
  );
}
