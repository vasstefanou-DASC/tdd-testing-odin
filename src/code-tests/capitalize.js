export function capitalize(s) {
    if (!s.trim()) {
        return "no string found";
    }
    return s.at(0).toUpperCase() + s.substring(1).toLowerCase();
}