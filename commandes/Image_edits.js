const { ovlcmd } = require("../framework/ovlcmd");
const canvacord = require("canvacord");
const { Catbox } = require("node-catbox");
const catbox = new Catbox();

async function envoyerSurCatbox(cheminFichier) {
  try {
    return await catbox.uploadFile({ path: cheminFichier });
  } catch (error) {
    console.error("Erreur lors du téléversement sur Catbox:", error);
    throw new Error("Impossible d'envoyer le fichier.");
  }
}

function genererCommandeCanvacord(nomCommande, effet) {
  ovlcmd(
    {
      nom_cmd: nomCommande,
      classe: "Image_Edits",
      react: "🎨",
      desc: "Applique un effet sur une image",
    },
    async (ms_org, ovl, options) => {
      const { arg, repondre, ms, auteur_Msg_Repondu, msg_Repondu } = options;

      try {
        let imageSource;
        const cible =
          auteur_Msg_Repondu ||
          (arg[0]?.includes("@") && `${arg[0].replace("@", "")}@s.whatsapp.net`);

        if (msg_Repondu?.imageMessage) {
          const image = await ovl.dl_save_media_ms(msg_Repondu.imageMessage);
          imageSource = await envoyerSurCatbox(image);
        } else if (cible) {
          try {
                imageSource = await ovl.profilePictureUrl(cible, "image");
            } catch {
                ppuser = 'https://files.catbox.moe/ulwqtr.jpg'
          }
        } else {
          imageSource = "https://files.catbox.moe/ulwqtr.jpg";
        }

        const resultat = await effet(imageSource);

        await ovl.sendMessage(ms_org, { image: resultat }, { quoted: ms });
      } catch (error) {
        console.error(`Erreur avec la commande "${nomCommande}":`, error);
      }
    }
  );
}

const effetsCanvacord = {
  shit: canvacord.Canvacord.shit,
  wasted: canvacord.Canvacord.wasted,
  wanted: canvacord.Canvacord.wanted,
  trigger: canvacord.Canvacord.trigger,
  trash: canvacord.Canvacord.trash,
  rip: canvacord.Canvacord.rip,
  sepia: canvacord.Canvacord.sepia,
  rainbow: canvacord.Canvacord.rainbow,
  hitler: canvacord.Canvacord.hitler,
  invert: canvacord.Canvacord.invert,
  jail: canvacord.Canvacord.jail,
  affect: canvacord.Canvacord.affect,
  beautiful: canvacord.Canvacord.beautiful,
  blur: canvacord.Canvacord.blur,
  circle: canvacord.Canvacord.circle,
  facepalm: canvacord.Canvacord.facepalm,
  greyscale: canvacord.Canvacord.greyscale,
  joke: canvacord.Canvacord.jokeOverHead,
};

Object.entries(effetsCanvacord).forEach(([nom, effet]) => genererCommandeCanvacord(nom, effet));
