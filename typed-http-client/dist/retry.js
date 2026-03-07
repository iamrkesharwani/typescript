export async function retry(fn, attempts) {
    attempts = Math.max(1, Math.floor(attempts));
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        }
        catch (error) {
            lastError = error;
            console.log(`Attempt ${i + 1} failed...`);
        }
    }
    throw lastError;
}
