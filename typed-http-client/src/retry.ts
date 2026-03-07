export async function retry<T>(
  fn: () => Promise<T>,
  attempts: number
): Promise<T> {
  attempts = Math.max(1, Math.floor(attempts));

  let lastError: unknown;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i + 1} failed...`);
    }
  }
  
  throw lastError;
}
