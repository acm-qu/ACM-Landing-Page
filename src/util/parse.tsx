export const parseAboutUs = (text:string) => 
  text
    .replaceAll("\n", " ")
    .split(" ")
    .filter(char => char !== "\r" && char !== "")
    .map(word => word.split(":")[0] === "colored" ? <span className="highlight">{word.split(":")[1]}</span> : word)
