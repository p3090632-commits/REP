import { program } from 'commander';
import fs from 'fs';


program
  .name('football-cli')
  .description('Програма для перегляду футбольних даних')
  .version('1.0.0');

  
  program
  .option('-d, --data <path>','Шлях до json ','data.json');

program
.command('list ') 
  .description('Виводить характеристику чемпіонату')
  .option('-s,--show',"Виводить чемпіонат")
  .option('-m, --match <match>', 'Виводить матчі')
   .option('-p, --players <vuvid>', 'Виводить гравців')
  .option('-t, --team <vuvid>', 'Виводить команду')
  .option('-c, --Player <vuvid>', 'Виводить конкретного гравця')
    .option('-g, --pole <vuvid>', 'Виводить поле гравця')
  .action((options) => {
      try{ const globalop = program.opts()
      const fileContent = fs.readFileSync(globalop.data, 'utf-8');
      const Data = JSON.parse(fileContent);

      if(options.show){
          console.log(fileContent);
          
      }
     
     else if(options.match ){
          if(options.match == "2026-01-11"){
                const matchs = Data[0].championship[1].matchs[0];
                console.log(matchs)
          }else if (options.match == "2026-02-14"){
                       const matchs = Data[0].championship[1].matchs[1];
                console.log(matchs)

          }



     
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
          
            const Players = Data[0].championship[0].teams[0].barcelona[options.Player]["name"];
            const h = Data[0].championship[0].teams[0].barcelona[options.Player][options.pole];
            console.log(Players );
            console.log(h)
        

      }
      else if(options.team =='Liverpool'){
       const Players = Data[0].championship[0].teams[0].Liverpool[options.Player]["name"];
                  const h = Data[0].championship[0].teams[0].Liverpool[options.Player][options.pole];
            console.log(Players );
            console.log(h)
      }else if(options.team =='Arsenal'){
            const Players = Data[0].championship[0].teams[0].Arsenal[options.Player]["name"];
            const h = Data[0].championship[0].teams[0].Arsenal[options.Player][options.pole];
            console.log(Players );
            console.log(h)

      }else if(options.team =='Real-madrid'){
       const Players = Data[0].championship[0].teams[0]["real madrid"][options.Player]["name"];
             const h = Data[0].championship[0].teams[0]["real madrid"][options.Player][options.pole];
            console.log(Players );
            console.log(h);
      }


      }}
     catch(error){
         console.log(error)
     }

  
  });
program.parse();