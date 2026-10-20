import { program } from 'commander';
import fs from 'fs';


program
  .name('football-cli')
  .description('Програма для перегляду футбольних даних')
  .version('1.0.0');

  
  program
  .option('-d, --data <path>','Шлях до json ','data.json');

program
.command('list') 
  .description('Виводить характеристику чемпіонату')
  .option('-m, --match <match>', 'Виводить матчі')
   .option('-p, --players <vuvid>', 'Виводить гравців')
  .option('-t, --team <vuvid>', 'Виводить команду')
  .option('-c, --Player <vuvid>', 'Виводить конкретного гравця')
  .action((options) => {
      try{ const globalop = program.opts()
      console.log("Опції, які отримала програма:", options);
      const fileContent = fs.readFileSync(globalop.data, 'utf-8');
      const Data = JSON.parse(fileContent);
     
      if(options.match ){

        const matchs = Data[0].championship[1].matchs[options.match];
        console.log(matchs)


     
      }else if(options.team && options.players){
          if(options.team =='Barcelona'){
              console.log("\n Barcelona \n")
             
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].barcelona[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " " + Players["scored a goal"])
             
              }

          } else if(options.team =='Liverpool'){
               console.log(" \n Liverpool \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].Liverpool[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])

          }
             }else if(options.team =='Arsenal'){
               console.log("\n Arsenal \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0].Arsenal[i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])
             
      }
      
      }else if(options.team =='Real madrid'){
               console.log("\n Real madrid \n")
             for(let i=0; i<options.players;i++){
            const Players = Data[0].championship[0].teams[0]["real madrid"][i];
              console.log(i+1 +" "+ Players.name + " "+ Players.number + " | scored a goal:" + Players["scored a goal"])
             
      }
      
      }
      }


      if(options.Player && options.team){if(options.team =='Barcelona'){
          
            const Players = Data[0].championship[0].teams[0].barcelona[options.Player];
            console.log(Players)
        

      }
      else if(options.team =='Liverpool'){
       const Players = Data[0].championship[0].teams[0].Liverpool[options.Player];
            console.log(Players)
      }else if(options.team =='Arsenal'){
            const Players = Data[0].championship[0].teams[0].Arsenal[options.Player];
             console.log(Players)

      }else if(options.team =='Real-madrid'){
       const Players = Data[0].championship[0].teams[0]["real madrid"][options.Player];
             console.log(Players)
      
      }


      }}
     catch(error){
         console.log(error)
     }

  
  });
program.parse();