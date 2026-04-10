// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
fetch(`https://dummyjson.com/carts/?limit=50`)
    .then(res => res.json())
.then(({carts}) => {
    console.log(carts);
    // for (const {discountedTotal,id,products,total,totalProducts,totalQuantity,userId} of carts) {
    //     for (const product of products) {
    //         let cartDiv = document.createElement(`div`);
    //         cartDiv.innerHTML = `
    //    discountedTotal - ${discountedTotal};
    //     id - ${id};
    //    products - ${product.discountPercentage,
    //             product.discountedTotal,
    //             product.id,
    //             product.price,
    //             product.quantity,
    //             product.thumbnail,
    //             product.title,
    //             product.total}
    //     total - ${total};
    //     totalProducts - ${totalProducts};
    //     totalQuantity - ${totalQuantity};
    //     userId - ${userId}`;
    //     }
    //
    // document.body.append(cartDiv);
    //
    //
    // }
})
//
//     #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.