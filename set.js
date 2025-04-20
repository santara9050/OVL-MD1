const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || "/",
  NOM_OWNER: process.env.NOM_OWNER || "𓆩𝘗𝘌𝘙𝘍𝘌𝘊𝘛𝘐𝘖𝘕𓆪",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "22390500302",
  MODE: process.env.MODE || "public",
  MENU: process.env.MENU || "https://i.ibb.co/ynx9QcZ/image.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_DdhGYkMk_SESSION_ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Wa-𓆩𝘗𝘌𝘙𝘍𝘌𝘊𝘛𝘐𝘖𝘕𓆪",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "｟ 𓆩𝘗𝘌𝘙𝘍𝘌𝘊𝘛𝘐𝘖𝘕 𝘒𝘈𝘙𝘈𓆪 ｠",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
};
