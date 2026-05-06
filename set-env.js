const fs = require('fs');
const path = require('path');
require('dotenv').config();

const targetPath = path.join(__dirname, './src/environments/environment.ts');
const targetPathDev = path.join(__dirname, './src/environments/environment.development.ts');

const envConfigFile = `export const environment = {
  production: true,
  googleMapsApiKey: '${process.env.GOOGLE_MAPS_API_KEY || ''}'
};
`;

const envConfigFileDev = `export const environment = {
  production: false,
  googleMapsApiKey: '${process.env.GOOGLE_MAPS_API_KEY || ''}'
};
`;

console.log('Gerando arquivos de ambiente...');

if (!fs.existsSync(path.dirname(targetPath))) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

fs.writeFileSync(targetPath, envConfigFile);
fs.writeFileSync(targetPathDev, envConfigFileDev);

console.log(`Arquivos de ambiente gerados em ${targetPath}`);
