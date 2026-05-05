# 27º GEMAR - Site Institucional ⚜️

Site do 27º Grupo Escoteiro do Mar Cornelis Verolme, desenvolvido em Angular 21.

## ⚙️ Configuração (Google Maps)
O mapa exige uma API Key. Localize os arquivos em `src/environments/` e insira sua chave:
```typescript
googleMapsApiKey: 'SUA_CHAVE_AQUI'
```
*Certifique-se de que os arquivos de environment estão no seu `.gitignore`.*

## 💻 Desenvolvimento Local
1. **Instalar:** `npm install`
2. **Rodar:** `npm start` (Acesse `http://localhost:4200`)
3. **Build:** `npm run build`
4. **Testes:** `npm test`

## 🐳 Docker (Produção)
Para rodar a aplicação via container (Nginx + Node Alpine):

1. **Build da Imagem:**
   ```bash
   docker build -t site-27gemar .
   ```
2. **Executar Container:**
   ```bash
   docker run -d -p 80:80 site-27gemar
   ```
Acesse `http://localhost`.

---
*Sempre Alerta!*
