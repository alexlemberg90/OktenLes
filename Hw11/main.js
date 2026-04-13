// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// fetch(`https://dummyjson.com/carts/?limit=50`)
//     .then(res => res.json())
//     .then(({carts}) => {
//         console.log(carts);
//
//         for (const {discountedTotal, id, products, total, totalProducts, totalQuantity, userId} of carts) {
//             let cardDiv = document.createElement(`div`);
//             let cartDiv = document.createElement(`div`);
//             cartDiv.style.border = '1px solid red';
//             document.body.append(cartDiv);
//             cartDiv.innerText = `
//        discountedTotal - ${discountedTotal};
//         id - ${id};
//         total - ${total};
//         totalProducts - ${totalProducts};
//         totalQuantity - ${totalQuantity};
//         userId - ${userId} `;
//             let productsH3 = document.createElement(`h3`);
//             productsH3.innerText = `
//
//                 Products
//
//                 `;
//             document.body.append(productsH3);
//             for (const product of products) {
//                 let productDiv = document.createElement(`div`);
//                 cartDiv.innerText = `
//        discountedTotal - ${discountedTotal};
//         id - ${id};
//         total - ${total};
//         totalProducts - ${totalProducts};
//         totalQuantity - ${totalQuantity};
//         userId - ${userId}  `;
//
//                 productDiv.innerHTML = `
//                 discountPercentage - ${product.discountPercentage},
//                discountedTotal- ${product.discountedTotal},
//               id - ${product.id},
//                price - ${product.price},
//                quantity - ${product.quantity},
//                <img src="${product.thumbnail}" alt="">
//                title - ${product.title},
//                total - ${product.total}`;
//                 document.body.append(productDiv);
//             }
//             cardDiv.style.border = '1px solid green';
//             document.body.append(cardDiv);
//
//         }
//
//     })
//
//     #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


const recipesDiv = document.createElement('div');
document.body.appendChild(recipesDiv);
fetch('https://dummyjson.com/recipes/?limit=50')
    .then(value => value.json())
    .then(recipesObj => {
        const {recipes} = recipesObj;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const title = document.createElement('div');
                    title.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {

                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }

            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            recipesDiv.appendChild(recipeDiv);
        }


    });
