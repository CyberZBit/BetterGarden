import axios from "axios";
let url = "https://sky.shiiyu.moe/api/v2/bazaar"
export function getPrice(str){
    const wantitem = str?.toLowerCase();
    return axios.get(url, { headers: { "User-Agent": "Mozilla/5.0 (ChatTriggers)" }, parseBody: true })
    .then(res => {
      let item_data = null;
      Object.keys(res.data).forEach((bro, index) => {
        let item_name = res.data[bro].name.toLowerCase();
        if (item_name.includes(wantitem)) {
          item_data = res.data[bro];
        }
      });
      if (item_data) {
        return {
          price: item_data.price,
          id: item_data.id,
          name: item_data.name,
          buyPrice: item_data.buyPrice,
          sellPrice: item_data.sellPrice,
          buyVolume: item_data.buyVolume,
          sellVolume: item_data.sellVolume
        };
      } else {
        throw new Error("Item not found: " + itemName);
      }
    });
}

register('command',()=>{
    getPrice("Enchanted Potato").then(item =>{
        ChatLib.chat(item.price)
    })
}).setName('getprice')