const { writeFileSync, mkdirSync } = require("fs");
const targetPath = "./src/enviroments";

const envFileContent = `
  export const enviroment = {
    mapbox_key:'${process.env.MAPBOX_KEY}'
  }
`;

mkdirSync(targetPath, { recursive: true });

writeFileSync(`${targetPath}/enviroment.ts`, envFileContent);
writeFileSync(`${targetPath}/enviroment.product.ts`, envFileContent);
