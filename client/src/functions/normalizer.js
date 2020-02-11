class Normalizer{
    norm(data){
    let doc=[];

    for(let i=0; i<data.length; i++){
        doc.push({
            model:data[i].model,
            cost:data[i].cost,
            owner:data[i].seller? data[i].seller.name : "NotOwner" 
        })
    }
    return doc;
    }
    findUser(id, data) {
        if (
          !data.find(item => {
            return item._id === id;
          })
        ) {
          return {};
        }
        return data.find(item => {
          return item._id === id;
        });
      }
    
    chartData(data){
      if(data.length > 0){
         let zero=data.filter(item=>{return item.role ===0}).length;
         let one=data.filter(item=>{return item.role ===1}).length;
         let two=data.filter(item=>{return item.role ===2}).length;
         let three=data.filter(item=>{return item.role ===3}).length;
         let four=data.filter(item=>{return item.role ===4}).length;
         let array=[zero,one,two, three, four];
         var result=[]
         for(let [index, item] of array.entries() ){
            result.push({key:`${index} role`, data:item})
         }
      }
      return result
    }
}

const obj=new Normalizer();
export default obj;