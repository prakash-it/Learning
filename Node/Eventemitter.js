const EventEmitter=require('node:events')
const event= new EventEmitter()

event.on(`FreeFire`,(gun,glowall)=>{
    console.log(`FreeFire using ${gun} and ${glowall} to paly`);
})

event.on(`FreeFire`,(gun)=>{
    if(gun=== 'MP40')
        {
            console.log('Free Bags');
        }
})

event.emit(`FreeFire`,'MP40','Thunderglowall')