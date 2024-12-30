import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>String Methods</h1>
      <hr></hr>
      <button type="button" 
      onClick={()=>{
        let quote="Indu is a beautiful girl";
        console.log(quote);
        console.log(quote.toUpperCase());
      }}>String toUpperCase</button>
      <button type="button" 
      onClick={()=>{
        let quote="INDU IS A BEAUTIFUL GIRL";
        console.log(quote);
        console.log(quote.toLowerCase());
      }}>String toLowerCase</button>
      <button type="button" 
      onClick={()=>{
        let quote="Indu is a Smart girl in the Trio,";
        let quote1="Bindu is the Pretty girl in the Trio,";
        let quote2="Likitha is the dumb girl in the Trio.";
        console.log(quote);
        console.log(quote1);
        console.log(quote2);
        console.log(quote.concat(quote1,quote2));
      }}>String concat</button>
      <button type="button" 
      onClick={()=>{
        let quote="     Hai Girl     ";
        console.log(quote);
        console.log(`---${quote.trim()}---`);
        console.log(`---${quote.trimStart()}---`);
        console.log(`---${quote.trimEnd()}---`);
      }}>String trim/trimStart/trimEnd</button>
      <button type="button" 
      onClick={()=>{
        let quote="Hey! Good Morning";
        console.log(quote);
        console.log(quote.padStart(50,"-"));
        console.log(quote.padEnd(50,"-"));
      }}>String padStart/padEnd</button>
      <button type="button" 
      onClick={()=>{
        let quote="Ohm Nama Shivaya ";
        console.log(quote);
        console.log(quote.repeat(50));
      }}>String repeat</button>
      <button type="button" 
      onClick={()=>{
        let quote="Villages have good emotions, Villages have pure water, Villages weather is very beautiful";
        console.log(quote);
        console.log(quote.replace("Villages","Small Town"));
        console.log(quote.replaceAll("Villages","Small Town"));
      }}>String replace/replaceAll</button>
      <button type="button" 
      onClick={()=>{
        let quote="Sravya is a Pretty Girl";
        console.log(quote);
        console.log(quote.split("a"));
      }}>String split</button>
      <button type="button" 
      onClick={()=>{
        let quote="India is the Biggest Country in the World";
        console.log(quote);
        console.log(quote.length);
      }}>String length</button>
      <button type="button" 
      onClick={()=>{
        let quote="India is the Biggest Country in the World";
        console.log(quote);
        console.log(quote.at(13));
        console.log(quote.charAt(13));
        console.log(quote[13]);
      }}>Stirng At/charAt</button>
      <button type="button" 
      onClick={()=>{
        let quote="Indu is a Beautiful Girl ";
        console.log(quote);
        console.log(quote.slice(10,19));
        console.log(quote.substring(20,24));
        console.log(quote.substr(1,10));
      }}>String slice/subString/subStr</button>
      <button type="button" 
      onClick={()=>{
        let quote="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(quote);
        for(let i=0;i<=quote.length;i++){
          console.log(quote.charCodeAt(i));
        }
      }}>String charCodeAt</button>
      <button type="button" 
      onClick={()=>{
        for(let i=65;i<=90;i++){
          console.log(String.fromCharCode(i));
        }
      }}>String fromCharCode</button>
      <button type="button" 
      onClick={()=>{
        let quote="Hey! Hai Girl";
        console.log(quote);
        console.log(quote.startsWith("H"));
        console.log(quote.endsWith("l"));
      }}>String startsWith/endsWith</button>
      <button type="button" 
      onClick={()=>{
        let quote="Indu is a Pretty Girl";
        console.log(quote);
        console.log(quote.includes("Pretty"));
      }}>String includes</button>
    </div>
  );
}

export default App;
