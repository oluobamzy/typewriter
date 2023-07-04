
const typewriter = (sentence)=>{
 let i = 0; let timer = 1000;
 if(i < sentence.length){
  for (const char of sentence) {
    setTimeout(()=>{
      process.stdout.write(char);
    },timer)
       timer+=70;
       i++;
  }
 }else{
  process.stdout.write('\n');
 }


}
typewriter("Hello there from lighthouse labs");
