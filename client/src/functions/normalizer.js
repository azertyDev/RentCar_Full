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
}

const obj=new Normalizer();
export default obj;