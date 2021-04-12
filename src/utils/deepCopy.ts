export const deepCopy = <T>(obj: T): T => {
    if (typeof obj === "object") {
        const copyArray = (arr: any[]): any => arr.map((val) => deepCopy(val));
        if (obj instanceof Array) return copyArray(obj);
        const newObj = {} as T;
        for (const key in obj) {
            const val = obj[key];
            if (val instanceof Array) {
                newObj[key] = copyArray(val);
            } else if (typeof val === "object") {
                newObj[key] = deepCopy(val);
            } else {
                newObj[key] = val;
            }
        }
        return newObj;
    }
    return obj;
};