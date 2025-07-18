class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    
    set(key, value, duration) {
        const exists = this.cache.has(key) && this.cache.get(key).expiry > Date.now();
        this.cache.set(key, { value, expiry: Date.now() + duration });
        return exists;
    }
    
    get(key) {
        const item = this.cache.get(key);
        return item && item.expiry > Date.now() ? item.value : -1;
    }
    
    count() {
        const now = Date.now();
        return Array.from(this.cache.values()).filter(item => item.expiry > now).length;
    }
} 