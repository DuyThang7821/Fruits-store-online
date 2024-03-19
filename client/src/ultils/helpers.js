export const createSlug = string => string.toLowerCase().nomarlize('NFD').replace(/[\u0300-\u036f]/g, "").split('').join('-')
