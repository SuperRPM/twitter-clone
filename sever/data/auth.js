import bcrypt from 'bcrypt';

const secret = 'Bp8:M")g8y;Gxv%vP>Q/*s2d3KKmw+Cb';
export async function getHashed(dataArray) {
    const password = dataArray[0];
    const hashed = bcrypt.hashSync(password, 10);
    dataArray[0] = hashed;
    console.log(dataArray);
    return dataArray;
}