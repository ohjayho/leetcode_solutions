/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(aVal){
            if(val!==aVal){
                throw Error('Not Equal')
            } else {
                return true;
            }
        },
        notToBe(aVal){
            if(val===aVal){
                throw Error('Equal')
            } else {
                return true;
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */