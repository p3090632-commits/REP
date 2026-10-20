import { program } from 'commander';
import fs from 'fs';

// Описуємо нашу програму
program
  .name('football-cli')
  .description('Програма для перегляду футбольних даних')
  .version('1.0.0');

  
  program
  .option('-d, --data <path>','BIG DICK','data.json');

program
.command('list') 
  .description('Виводить привітання на екран')
  .option('-m, --match', 'Зробити ім\'я великими літерами')
   .option('-p, --players <vuvid>', 'Зробити ім\'я великими літерами','')
  .option('-t, --team <vuvid>', 'Зробити ім\'я великими літерами','1')
  .action((options) => {
      try{ const globalop = program.opts()
      console.log("Опції, які отримала програма:", options);
      const fileContent = fs.readFileSync(globalop.data, 'utf-8');
      const ALL = JSON.parse(fileContent);
     
      if(options.match ){
        const xz = ALL[0].championship[1].matchs;
        console.log(xz)

         
        
      }else if(options.team){
          if(options.team =='1'){
              console.log("Barcelona \n")
             
             for(let i=0; i<options.players;i++){
            const xz = ALL[0].championship[0].teams[0].barcelona[i];
              console.log(i+1 +" "+ xz.name + " "+ xz.number )
             
              }

          }
          
            
         
             
             }
             

      
      }
     catch(error){
         console.log(error)
     }

  
  });
program.parse();