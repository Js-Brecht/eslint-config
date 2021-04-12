import { deepCopy } from "./deepCopy";

/**
 * Does a shallow merge of object `from` to object `to`.
 * Traverses each of the keys in Object `from`, allowing for:
 * 
 * * If the value of a key is an array, it will be concatenated
 * 	 onto `to`.
 * * If the value of a key is an object it will extend `to` the
 *   key/values of that object.
 * @param {Object} from Object to copy from
 * @param {Object} to Object to copy to
 * @returns {Object} The object that has been extended
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function merge<F extends object, T extends object, R extends F & T = F & T>(from: F, to: T): R {
    const mergedInto = deepCopy(to) as R;
    for (const key in from) {
        const curKey = key as unknown as keyof R;
        const hasKey = mergedInto.hasOwnProperty(key);
        const fromVal = from[key];
        if (Array.isArray(fromVal)) {
            if (
                !hasKey || 
				!(mergedInto[curKey] instanceof Array)
            ) mergedInto[curKey] = [] as unknown as R[typeof curKey];

            (mergedInto[curKey] as unknown as Array<any>).push(...fromVal);
        } else if (typeof fromVal === "object") {
            if (
                !hasKey || 
				!(typeof mergedInto[curKey] === "object")
            ) mergedInto[curKey] = {} as unknown as R[typeof curKey];
			
            Object.assign(mergedInto[curKey], fromVal);
        } else {
            mergedInto[curKey] = fromVal as unknown as R[typeof curKey];
        }
    }
    return mergedInto;
}
