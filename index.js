import { program } from 'commander';
import fs from 'fs';


program
  .name('football-cli')
  .description('Програма для перегляду футбольних даних')
  .version('1.0.0');

  
  program
  .option('-d, --data <path>','BIG DICK','data.json');

program
.command('list') 
  .description('Виводить привітання на екран')
  .option('-m, --match <match>', 'Зробити ім\'я великими літерами','')
   .option('-p, --players <vuvid>', 'Зробити ім\'я великими літерами','11')
  .option('-t, --team <vuvid>', 'Зробити ім\'я великими літерами','1')
  .option('-c, --Player <vuvid>', 'Зробити ім\'я великими літерами','0')
  .action((options) => {
      try{ const globalop = program.opts()
      console.log("Опції, які отримала програма:", options);
      const fileContent = fs.readFileSync(globalop.data, 'utf-8');
      const Data = JSON.parse(fileContent);
     
      if(options.match ){

        const matchs = Data[0].championship[1].matchs[options.match];
        console.log(matchs)


     
      }else if(options.team){
          if(options.team =='1'){
              console.log("\n Barcelona \n")
             
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].barcelona[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " " + Players["scored a goal"])
             
              }

          } else if(options.team =='2'){
               console.log(" \n Liverpool \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].Liverpool[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])

          }
             }else if(options.team =='3'){
               console.log("\n Arsenal \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].Arsenal[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])
             
      }
      
      }else if(options.team =='4'){
               console.log("\n Real madrid \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0]["real madrid"][i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])
             
      }
      
      }}}
     catch(error){
         console.log(error)
     }

  
  });
program.parse();