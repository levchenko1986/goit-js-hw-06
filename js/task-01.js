const totalCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${totalCategories.length}`);

const items = document.querySelectorAll('li.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} 
Elements: ${itemsLength}`);
});