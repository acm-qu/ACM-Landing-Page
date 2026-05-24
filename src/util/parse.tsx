export const parseAboutUs = (text:string) => 
  text
    .replaceAll("\n", " ")
    .split(" ")
    .filter(char => char !== "\r" && char !== "")
    .map((word, index) => word.split(":")[0] === "colored" ? <span key={`highlight-${index}`} className="highlight">{word.split(":")[1]}</span> : word)
