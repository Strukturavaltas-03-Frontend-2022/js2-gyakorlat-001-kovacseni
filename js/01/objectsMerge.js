// const objectsMerge = () => {};

// export default objectsMerge;

export default merge;

function merge(...objects) {
    let result = {};
    for (let index in objects) {
        result[index] = objects[index];
    }
    return result;
}

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

console.log(merge(
    johnDoe, janeDoe
));

