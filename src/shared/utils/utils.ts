export function formatNumber(num: number) {
    let numStr: string = num.toString();
    let lastThree = numStr.substring(numStr.length-3);
    let otherNumbers = numStr.substring(0,numStr.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}