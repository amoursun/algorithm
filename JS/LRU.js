
class LRU {
    constructor(size) {
        this.size = size;
        this.map = new Map();
    }

    get(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
        return -1;
    }

    put(key, value) {
        // 存在
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
        }
        else {
            if (this.map.size === this.size) {
                const firstKey = this.map.keys().next().value;
                this.map.delete(firstKey);
            }
            this.map.set(key, value);
        }
    }
}

const lru = new LRU(3)
lru.put('a1','a-value-1')
lru.put('a2','a-value-2')
lru.put('a3','a-value-3')

console.log(lru.map)
lru.put('a4','a-value-4')
console.log(lru.map)
lru.get('a3')
console.log(lru.map)