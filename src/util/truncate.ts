type TruncateParams = (
  obj: string | Array<unknown>,
  maxLength?: number,
  type?: ("ellipsis" | "date" | undefined)
) => string | Array<unknown>

export const truncate:TruncateParams = (obj, maxLength, type) => {
  if (!maxLength) return obj;

  if (typeof obj === "string") {
    if (obj.length <= maxLength) return obj;
    switch(type) {
      case "ellipsis":
        return obj.slice(0, maxLength) + "...";
      case "date":
        return obj.slice(2, maxLength).split(" - ").reverse().join(" - ");
      default:
        return obj.slice(0, maxLength)
    }
  }

  if (Array.isArray(obj)) {
    if (obj.length <= maxLength) return obj;
    return [...obj.slice(0, maxLength)];
  }

  return obj;
}