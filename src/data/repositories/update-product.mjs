import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class UpdateProductRepository extends Repository {
  async handle(product) {
    const { productID, storeID } = product;
    
    const keysToUpdate = Object.keys(product).filter((key) => key != "storeID" && key != "productID");

    let UpdateExpression = "";
    let ExpressionAttributeNames = {}
    let ExpressionAttributeValues = {}
    
    keysToUpdate.forEach((k, index) => {
        if(index === keysToUpdate.length - 1 ) {
            UpdateExpression += `#p_${k} = :${k}`;
        }else  {
            UpdateExpression += `set #p_${k} = :${k}, `;
        }
        ExpressionAttributeNames[`#p_${k}`] = k;
        ExpressionAttributeValues[`:${k}`] = product[k];
    });

    const { products } = await arc.tables();
    await products.update({
      Key: {
        productID,
        storeID
      },
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues
    });
  } 
}
