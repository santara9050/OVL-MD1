const { ovlcmd } = require("../framework/ovlcmd");
const config = require('../set');
let activeGames = {};

ovlcmd(
    {
        nom_cmd: "tictactoe",
        classe: "OVL-GAMES",
        react: "🎮",
        desc: "Jeu du Tic-Tac-Toe",
        alias: ["ttt"],

    },
    async (ms_org, ovl, cmd_options) => {
        const { arg, ms, msg_Repondu, auteur_Msg_Repondu, auteur_Message } = cmd_options;
        let joueur1Nom = auteur_Message.split('@')[0];
        let joueur2Nom, joueur2ID;
        
        // Récupération des joueurs
        if (msg_Repondu) { 
            joueur2Nom = auteur_Msg_Repondu.split('@')[0];
            joueur2ID = auteur_Msg_Repondu;
        } else if (arg.length > 0 && arg[0].includes('@')) {
            joueur2Nom = arg[0].replace("@", "");
            joueur2ID = `${joueur2Nom}@s.whatsapp.net`;
        } else {
            return ovl.sendMessage(ms_org, { text: 'Veuillez mentionner ou répondre à un message du joueur pour lancer la partie.' }, { quoted: ms });
        }
        
        // Empêcher les joueurs de jouer contre eux-mêmes
        if (auteur_Message === joueur2ID) {
            return ovl.sendMessage(ms_org, { text: "Vous ne pouvez pas jouer contre vous-même !" }, { quoted: ms });
        }
        
        // Annulation de parties en cours pour les joueurs concernés
        if (activeGames[auteur_Message] || activeGames[joueur2ID]) {
            delete activeGames[auteur_Message];
            delete activeGames[joueur2ID];
        }

        const gameID = `${Date.now()}-${auteur_Message}-${joueur2ID}`;
        activeGames[auteur_Message] = { opponent: joueur2ID, gameID };
        activeGames[joueur2ID] = { opponent: auteur_Message, gameID };

        // Invitation au jeu
        await ovl.sendMessage(ms_org, {
            text: `@${joueur1Nom} invite @${joueur2Nom} à jouer au Tic-tac-toe. Pour accepter, tapez "oui".`,
            mentions: [auteur_Message, joueur2ID]
        }, { quoted: ms });

        try {
            const rep = await ovl.recup_msg({
                expediteur: joueur2ID,
                salon: ms_org,
                limiteTemps: 60000
            });

            if (rep.message.conversation.toLowerCase() === 'oui' || rep.message.extendedTextMessage.text.toLowerCase() === 'oui') {          

            let grid = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
            let currentPlayer = 0;
            let symbols = ['❌', '⭕'];
            let players = [auteur_Message, joueur2ID];

            activeGames[auteur_Message] = { opponent: joueur2ID, grid, currentPlayer, gameID };
            activeGames[joueur2ID] = { opponent: auteur_Message, grid, currentPlayer, gameID };

            const displayGrid = (endGame = false) => {
                let gride = `
${grid[0]}   ${grid[1]}   ${grid[2]}
${grid[3]}   ${grid[4]}   ${grid[5]}
${grid[6]}   ${grid[7]}   ${grid[8]}

❌ : @${joueur1Nom}
⭕ : @${joueur2Nom}`;
                if (!endGame) {
                    gride += `\n\n🎮 Au tour de @${players[currentPlayer].split('@')[0]} de jouer`;
                }
                return gride;
            };

            const checkWin = (symbol) => {
                const winningCombos = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];
                return winningCombos.some(combo => combo.every(index => grid[index] === symbol));
            };

            for (let turn = 0; turn < 9; turn++) {
                let symbol = symbols[currentPlayer];
                await ovl.sendMessage(ms_org, { text: displayGrid(), mentions: [auteur_Message, joueur2ID] }, { quoted: ms });

                let position, valide = false;
                while (!valide) {
                    const rep = await ovl.recup_msg({
                        expediteur: players[currentPlayer],
                        salon: ms_org,
                        limiteTemps: 60000
                    });
                    let response = rep.message.conversation || rep.message.extendedTextMessage.text;

                    if (!isNaN(response)) {
                        position = parseInt(response);
                        if (grid[position - 1] !== '❌' && grid[position - 1] !== '⭕' && position >= 1 && position <= 9) {
                            grid[position - 1] = symbol;
                            valide = true;
                        } else {
                            await ovl.sendMessage(ms_org, { text: "Position non valide, choisis une autre.", mentions: players }, { quoted: ms });
                        } 
                    } else if(reponse === `${config.PREFIXE}ttt`) {

                     } else {
                        await ovl.sendMessage(ms_org, { text: "Numéro invalide, choisis un chiffre entre 1 et 9.", mentions: players }, { quoted: ms });
                    }
                }

                if (checkWin(symbol)) {
                    await ovl.sendMessage(ms_org, { text: `🎉 @${players[currentPlayer].split('@')[0]} a gagné !\n${displayGrid(true)}`, mentions: players }, { quoted: ms });
                    delete activeGames[auteur_Message];
                    delete activeGames[joueur2ID];
                    return;
                }

                currentPlayer = 1 - currentPlayer;
                activeGames[auteur_Message].currentPlayer = currentPlayer;
                activeGames[joueur2ID].currentPlayer = currentPlayer;
            }

            await ovl.sendMessage(ms_org, { text: `Match nul !\n${displayGrid(true)}`, mentions: players }, { quoted: ms });
            delete activeGames[auteur_Message];
            delete activeGames[joueur2ID];
            }  else {
                return ovl.sendMessage(ms_org, { text: 'Invitation refusée' }, { quoted: ms });
            }
        } catch (error) {
            if (error.message === 'Timeout') {
                ovl.sendMessage(ms_org, { text: `@${joueur2Nom} a pris trop de temps. Partie annulée.`, mentions: [auteur_Message, joueur2ID] }, { quoted: ms });
            } else {
                console.error(error);
            }
            delete activeGames[auteur_Message];
            delete activeGames[joueur2ID];
        }
    }
);
