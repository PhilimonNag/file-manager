const fs=require('fs');


function readSyncAndWriteFileSync(){
console.log('read and write  file sync')
const data = fs.readFileSync('./source/input.text',{ encoding:'utf-8', flag:'r'})
console.log('readfile sucessfully')
fs.writeFileSync('./source/output.text',data,{encoding:'utf-8',flag:'w'})
console.log('suscessfully write ')
}

function readFileSyncAndWrite(){
    console.log('reading read file sync and write file asyncronously');
    const data=fs.readFileSync('./source/input.text',{encoding:'utf-8',flag:'r'});
    console.log('readfile sucessfully')
    fs.writeFile('./dest/ouput.text',data,{encoding:'utf-8',flag:'w'},(err,data)=>{
        console.log('write file  successfuly')
   })
  console.log('read and write file sucessfully')
}
function readFileAndWrite(){
   console.log('read file  asyncrnously and write file asyncrounously');
    fs.readFile('./source/input.text',{encoding:'utf-8',flag:'r'},(err,data)=>{
               console.log('read file sucessfully') 
    fs.writeFile('./dest/output.text',data,{encoding:'utf-8',flag:'w'},(err2,data2)=>{
               console.log('write file asyncronously')
   });
 });
  for(let i=0;i<10;i++){
    console.log(`${i} Praise the lord`)
   }
}

function readFileAndWritesync(){
  console.log('reading file asyncronously and writing syncronously')
   fs.readFile('./source/input.text',{encoding:'utf-8',flag:'r'},(err,data)=>{
     console.log('reading file  sucessfully');
    fs.writeFileSync('./dest/output.text',data,{encoding:'utf-8',flag:'w'});
    console.log('writng file sucessfull');  
  });
     console.log('read write done');
 for(let i=0;i<5;i++){
   console.log(`${i} Praise the lord`)
 }
}

//readSyncAndWriteFileSync()
//readFileSyncAndWrite()
//readFileAndWrite()
readFileAndWritesync()
