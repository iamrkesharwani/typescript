export const capitalize = (input) => {
    return input.toUpperCase();
};
export const truncate = (input) => {
    if (input.length <= 3)
        return input;
    return input.slice(0, 3) + '...';
};
export const slugify = (input) => {
    return input
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]+/g, '')
        .replace(/-+/g, '-');
};
export const countWords = (input) => {
    return input.trim().split(/\s+/).length;
};
export const padStart = (input) => {
    return input.toString().padStart(2, '0');
};
