/**
 * Identity
 */
const I = x => x;

/**
 * Mockingbird combinator
 */
const M = f => f(f);

/**
 * Kestrel Combinator or K combinator
 */
let K = a => b => a;

/**
 * Kite combinator
 * @param a
 * @returns {function(*): *}
 * @constructor
 */
let KI = a => b => b;

/**
 * Cardinal Combinator
 * Accepts a function, two arguments and calculates
 * the function with parameters in reverse order as input
 * @param f
 * @returns {function(*=): function(*=): *}
 * @constructor
 */
C = f => a => b => f(b)(a);
//Cardinal of Kestrel Combinator is Kite. It is called "flip" in Haskell

T = K; //Kestrel selects first option
F = KI; //Kite selects second option

F.inspect = () => 'F / KI';
T.inspect = () => 'T / K';

/**
 * not(K) === KI
 * not(KI) === K
 * Selecting one or another can be done using Cardinal
 * It is much simpler
 **/
const not = p => p(F)(T);

const and = p => q => p(q)(p); //or lambda(pq.pqp)

const or = p => q => p(p)(q); //You can use mockingbird instead
console.dir(M(T)(T));
/**
 * Boolean equality
 */
const equality = p => q => p(q(T)(F))(q(F)(T));
const BEQ = p => q => p(q)(not(q)); // same as above
