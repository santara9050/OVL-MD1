const a70_0x38ffe4 = function () {
  let _0x348c2a = true;
  return function (_0xd1914c, _0x4b464e) {
    const _0x2a9609 = _0x348c2a ? function () {
      if (_0x4b464e) {
        const _0x50454d = _0x4b464e.apply(_0xd1914c, arguments);
        _0x4b464e = null;
        return _0x50454d;
      }
    } : function () {};
    _0x348c2a = false;
    return _0x2a9609;
  };
}();
const a70_0x5aa67a = a70_0x38ffe4(this, function () {
  return a70_0x5aa67a.toString().search("(((.+)+)+)+$").toString().constructor(a70_0x5aa67a).search("(((.+)+)+)+$");
});
a70_0x5aa67a();
const {
  makeWASocket: a70_0x4a7b92,
  fetchLatestBaileysVersion: a70_0x1adde4,
  useMultiFileAuthState: a70_0x51d4a1,
  makeCacheableSignalKeyStore: a70_0x397445,
  DisconnectReason: a70_0x1e69ea,
  getContentType: a70_0x56bed2,
  jidDecode: a70_0x5d99fd,
  delay: a70_0x3023dd,
  downloadContentFromMessage: a70_0x4d1b1f,
  makeInSQLiteStore: a70_0x2effc4,
  getAggregateVotesInPollMessage: a70_0x57a3ec,
  jidNormalizedUser: a70_0x18aef0
} = require("@faouzkk/baileys");
const {
  Boom: a70_0x462f4a
} = require("@hapi/boom");
const {
  default: a70_0x234007
} = require("pino");
const a70_0x1af6b3 = require("./set");
const a70_0x2dd2f0 = require("fs-extra");
let a70_0x1a6b99 = require("./framework/zokou");
const {
  reagir: a70_0x9fa0ea
} = require("./framework/app");
let a70_0x450997 = require("path");
const a70_0x5bf6ad = require("file-type");
const {
  Sticker: a70_0x3b5307,
  StickerTypes: a70_0x5c77c4
} = require("wa-sticker-formatter");
var a70_0x131508 = a70_0x1af6b3.session.replace(/Zokou-MD-WHATSAPP-BOT;;;=>/g, '');
const {
  checkIfInstalledPlugin: a70_0x3dc95b
} = require("./framework/mesfonctions");
const a70_0x2f9378 = require("node-cache");
const a70_0xea2fc5 = require("node-cron");
const a70_0x5bc37c = a70_0x1af6b3.PREFIXE;
const {
  verifierEtatJid: a70_0x609870,
  recupererActionJid: a70_0x4c364e
} = require("./bdd/antilien");
const {
  atbverifierEtatJid: a70_0x83d348,
  atbrecupererActionJid: a70_0x147c0d
} = require("./bdd/antibot");
const {
  isUserBanned: a70_0x335275,
  addUserToBanList: a70_0x44faa3,
  removeUserFromBanList: a70_0x33edd2
} = require("./bdd/banUser");
const {
  addGroupToBanList: a70_0x35bc71,
  isGroupBanned: a70_0xcc7631,
  removeGroupFromBanList: a70_0x21adf1
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin: a70_0x5ee573,
  addGroupToOnlyAdminList: a70_0x1877c4,
  removeGroupFromOnlyAdminList: a70_0x2a33e7
} = require("./bdd/onlyAdmin");
const {
  recupevents: a70_0x1cea01
} = require("./bdd/welcome");
const {
  isGroupspam: a70_0x203449
} = require("./bdd/antispam");
const {
  dbCache: a70_0x5a0daa,
  wcgCache: a70_0x1abcb4
} = require("./cache");
const a70_0x1b4c58 = require("./bdd/plugin");
const {
  ajouterOuMettreAJourUserData: a70_0x53ac29
} = require("./bdd/level");
const a70_0x2d30d3 = require("./bdd/mention");
const {
  getCron: a70_0x271c22,
  createTablecron: a70_0x334b49
} = require("./bdd/cron");
const {
  randomInt: a70_0x3611e1
} = require("crypto");
const {
  default: a70_0x3d4fbe
} = require("axios");
const {
  chooseOneEmojie: a70_0x12fb2c
} = require("./framework/emojie");
const {
  getParainList: a70_0x69b5d3
} = require("./bdd/parrain");
const a70_0x32595a = require("./bdd/afk");
async function a70_0x105d52() {
  try {
    if (!a70_0x2dd2f0.existsSync(__dirname + "/auth/creds.json") && a70_0x131508 != "zokk") {
      console.log("Connexion depuis la variable session_id");
      a70_0x2dd2f0.writeFileSync(__dirname + "/auth/creds.json", atob(a70_0x131508), "utf8");
    } else if (a70_0x2dd2f0.existsSync(__dirname + "/auth/creds.json") && a70_0x131508 != "zokk") {
      console.log("-------------En cours----------------");
      a70_0x2dd2f0.writeFileSync(__dirname + "/auth/creds.json", atob(a70_0x131508), "utf8");
    }
  } catch (_0x57b92b) {
    console.log("Session invalide " + _0x57b92b);
    return;
  }
}
a70_0x105d52();
const a70_0x5b4a01 = {
  level: "silent"
};
const a70_0x44d389 = a70_0x234007(a70_0x5b4a01);
const a70_0xe0bee1 = {
  "stdTTL": 0x1770,
  "checkperiod": 0x1388
};
const a70_0x1d6f1d = new a70_0x2f9378(a70_0xe0bee1);
const a70_0x27cdf6 = {
  "stdTTL": 0x3c,
  "checkperiod": 0x3c
};
const a70_0x3be179 = new a70_0x2f9378(a70_0x27cdf6);
async function a70_0xec02ef(_0x205c67 = null, _0x24ec22 = null) {
  let _0x5daced;
  let _0x25584f;
  if (!_0x205c67 && !_0x24ec22) {
    _0x25584f = await a70_0x51d4a1("./auth");
    const _0x491eaa = {
      "level": "silent"
    };
    _0x5daced = await a70_0x2effc4('1', "./store.db", a70_0x234007(_0x491eaa));
  } else {
    const _0xef03dd = a70_0x450997.join(__dirname, "parainage", _0x205c67.split('@')[0x0]);
    const _0x2767f1 = a70_0x450997.join(_0xef03dd, "creds.json");
    if (!a70_0x2dd2f0.existsSync(_0x2767f1)) {
      const _0xc7c16 = {
        "recursive": true
      };
      a70_0x2dd2f0.mkdirSync(_0xef03dd, _0xc7c16);
      a70_0x2dd2f0.writeFileSync(_0x2767f1, _0x24ec22, "utf8");
    }
    _0x25584f = await a70_0x51d4a1(_0xef03dd);
    _0x5daced = await a70_0x2effc4(_0x205c67.split('@')[0x0], "./store.db", a70_0x234007({
      'level': "silent"
    }));
  }
  const {
    state: _0x1efccc,
    saveCreds: _0x1ebc2d
  } = _0x25584f;
  const {
    version: _0x5f0a8f,
    isLatest: _0x3889e3
  } = await a70_0x1adde4();
  const _0x84228e = _0x5daced;
  const _0x4c92a1 = a70_0x4a7b92({
    'version': _0x5f0a8f,
    'logger': a70_0x44d389,
    'browser': ["Zokou-md", "safari", "1.0.0"],
    'emitOwnEvents': true,
    'syncFullHistory': true,
    'printQRInTerminal': true,
    'markOnlineOnConnect': false,
    'receivedPendingNotifications': true,
    'generateHighQualityLinkPreview': true,
    'auth': {
      'creds': _0x1efccc.creds,
      'keys': a70_0x397445(_0x1efccc.keys, a70_0x44d389)
    },
    'keepAliveIntervalMs': 0x7530,
    'getMessage': async _0x4d6a4c => {
      if (_0x84228e) {
        const _0x325a8a = await _0x84228e.loadMessage(_0x4d6a4c.remoteJid, _0x4d6a4c.id);
        return _0x325a8a?.["message"] || undefined;
      }
    }
  });
  _0x84228e?.["bind"](_0x4c92a1.ev, _0x4c92a1);
  const _0x286540 = {
    "stdTTL": 0x78,
    "checkperiod": 0xf0
  };
  const _0x27b398 = new a70_0x2f9378(_0x286540);
  let _0x3a944c = a70_0x1af6b3.URL;
  if (_0x3a944c.startsWith("http")) {
    a70_0x1af6b3.ARRAY_LIENS = _0x3a944c.split(',');
  } else {
    let _0x5812d1 = (await a70_0x3d4fbe.get("https://raw.githubusercontent.com/Luffy2ndAccount/zokou-themes/refs/heads/main/themes.json", {
      'responseType': "json"
    })).data;
    a70_0x1af6b3.THEMES_KEYS = Object.keys(_0x5812d1);
    if (a70_0x1af6b3.THEMES_KEYS.includes(_0x3a944c.toUpperCase())) {
      a70_0x1af6b3.ARRAY_LIENS = _0x5812d1[_0x3a944c.toUpperCase()];
    } else {
      a70_0x1af6b3.ARRAY_LIENS = _0x5812d1.LUFFY;
    }
  }
  _0x4c92a1.ev.on("messages.upsert", async _0x13e705 => {
    const {
      messages: _0x15c086
    } = _0x13e705;
    const _0xb62d5b = _0x15c086[0x0];
    if (!_0xb62d5b.message) {
      return;
    }
    const _0x1821f3 = _0x1f359f => {
      if (!_0x1f359f) {
        return _0x1f359f;
      }
      if (/:\d+@/gi.test(_0x1f359f)) {
        let _0x217dce = a70_0x5d99fd(_0x1f359f) || {};
        return _0x217dce.user && _0x217dce.server && _0x217dce.user + '@' + _0x217dce.server || _0x1f359f;
      } else {
        return _0x1f359f;
      }
    };
    var _0x50fde8 = a70_0x56bed2(_0xb62d5b.message);
    var _0x444bf9 = _0x50fde8 == "conversation" ? _0xb62d5b.message.conversation : _0x50fde8 == "imageMessage" ? _0xb62d5b.message.imageMessage?.["caption"] : _0x50fde8 == "videoMessage" ? _0xb62d5b.message.videoMessage?.["caption"] : _0x50fde8 == "extendedTextMessage" ? _0xb62d5b.message?.["extendedTextMessage"]?.["text"] : _0x50fde8 == "documentMessage" ? _0xb62d5b.message.documentMessage?.["caption"] : _0x50fde8 == "buttonsResponseMessage" ? _0xb62d5b.message.buttonsResponseMessage?.["selectedButtonId"] : _0x50fde8 == "listResponseMessage" ? _0xb62d5b.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] : _0x50fde8 == "messageContextInfo" ? _0xb62d5b.message?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0xb62d5b.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] || _0xb62d5b.test : '';
    var _0x3f58be = _0xb62d5b.key.remoteJid;
    var _0x32e434 = _0x1821f3(_0x4c92a1.user.id);
    var _0x3833c3 = _0x32e434.split('@')[0x0];
    const _0x2ad052 = _0x3f58be?.["endsWith"]("@g.us");
    var _0x4acdb4 = null;
    if (_0x2ad052) {
      if (a70_0x1d6f1d.has(_0x3f58be)) {
        _0x4acdb4 = a70_0x1d6f1d.get(_0x3f58be);
      } else {
        metadata = await _0x4c92a1.groupMetadata(_0x3f58be);
        _0x4acdb4 = metadata;
        a70_0x1d6f1d.set(_0x3f58be, metadata);
      }
    }
    var _0x4b1ede = _0x2ad052 ? _0x4acdb4.subject : null;
    var _0x440188 = _0xb62d5b.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
    var _0xa8a285 = _0x1821f3(_0xb62d5b.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
    var _0x2224b1 = _0x2ad052 ? _0xb62d5b.key.participant ? _0xb62d5b.key.participant : _0xb62d5b.participant : _0x3f58be;
    if (_0xb62d5b.key.fromMe) {
      _0x2224b1 = _0x32e434;
    }
    var _0x23c752 = _0x2ad052 ? _0xb62d5b.key.participant : null;
    const {
      getAllSudoNumbers: _0x2aa752
    } = require("./bdd/sudo");
    const _0xc92410 = _0xb62d5b.pushName;
    let _0x298882;
    if (a70_0x5a0daa.has("sudo")) {
      console.log("fetching from cache");
      _0x298882 = a70_0x5a0daa.get("sudo");
    } else {
      console.log("fetching from database");
      _0x298882 = await _0x2aa752();
      a70_0x5a0daa.set("sudo", _0x298882);
    }
    const _0x499cc2 = [_0x3833c3, "22559763447", "22543343357", "22564297888", "22891733300", "‪99393228‬", a70_0x1af6b3.NUMERO_OWNER].map(_0x826893 => _0x826893.replace(/[^0-9]/g) + "@s.whatsapp.net");
    const _0x2d3f69 = [..._0x298882, ..._0x499cc2];
    const _0x13a5c4 = _0x2d3f69.includes(_0x2224b1);
    var _0x4bb439 = ["22559763447", "22543343357", "22564297888", "‪99393228‬", "22891733300"].map(_0x913402 => _0x913402.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x2224b1);
    function _0x103bc0(_0x1ed494) {
      const _0x43c1de = {
        text: _0x1ed494
      };
      const _0x1851c5 = {
        "quoted": _0xb62d5b
      };
      _0x4c92a1.sendMessage(_0x3f58be, _0x43c1de, _0x1851c5);
    }
    console.log("\t [][]...{Zokou-Md}...[][]");
    console.log("=========== Nouveau message ===========");
    if (_0x2ad052) {
      console.log("Message provenant du groupe : " + _0x4b1ede);
    }
    console.log("Message envoyé par : [" + _0xc92410 + " : " + _0x2224b1.split("@s.whatsapp.net")[0x0] + " ]");
    console.log("Type de message : " + _0x50fde8);
    console.log("------ Contenu du message ------");
    console.log(_0x444bf9);
    function _0x3ad082(_0x4c7484) {
      let _0x2ea5a1 = [];
      for (_0x13e705 of _0x4c7484) {
        if (_0x13e705.admin == null) {
          continue;
        }
        _0x2ea5a1.push(_0x13e705.id);
      }
      return _0x2ea5a1;
    }
    const _0x793c57 = _0x2ad052 ? await _0x4acdb4.participants : '';
    let _0xd3759a = _0x2ad052 ? _0x3ad082(_0x793c57) : '';
    const _0x3393a4 = _0x2ad052 ? _0xd3759a.includes(_0x2224b1) : false;
    var _0x3a6e4a = _0x2ad052 ? _0xd3759a.includes(_0x32e434) : false;
    var _0x10f87c = a70_0x1af6b3.ETAT;
    if (_0x10f87c == 0x1) {
      await _0x4c92a1.sendPresenceUpdate("available", _0x3f58be);
    } else {
      if (_0x10f87c == 0x2) {
        await _0x4c92a1.sendPresenceUpdate("composing", _0x3f58be);
      } else {
        if (_0x10f87c == 0x3) {
          await _0x4c92a1.sendPresenceUpdate("recording", _0x3f58be);
        } else {}
      }
    }
    let _0x41031d = _0x444bf9 ? _0x444bf9.trim().split(/ +/).slice(0x1) : null;
    function _0x7880b8(_0x3a6b35) {
      return [..._0x3a6b35].map(_0x214d3b => _0x214d3b.codePointAt(0x0).toString(0x10)).join('-');
    }
    let _0x3cc244 = _0x444bf9 ? _0x444bf9.startsWith(a70_0x5bc37c) || _0x7880b8(_0x444bf9).startsWith(_0x7880b8(a70_0x5bc37c)) : false;
    let _0x74eb2 = _0x3cc244 ? _0x444bf9.replace(a70_0x5bc37c, '').trim().split(/ +/).shift().toLowerCase() : false;
    function _0x310549() {
      const _0x5605a0 = Math.floor(Math.random() * a70_0x1af6b3.ARRAY_LIENS.length);
      const _0x1a8b0b = a70_0x1af6b3.ARRAY_LIENS[_0x5605a0];
      return _0x1a8b0b;
    }
    const _0x295f3a = {
      "superUser": _0x13a5c4,
      "dev": _0x4bb439,
      "verifGroupe": _0x2ad052,
      "mbre": _0x793c57,
      "membreGroupe": _0x23c752,
      "verifAdmin": _0x3393a4,
      "infosGroupe": _0x4acdb4,
      "nomGroupe": _0x4b1ede,
      "auteurMessage": _0x2224b1,
      "nomAuteurMessage": _0xc92410,
      "idBot": _0x32e434,
      "verifZokouAdmin": _0x3a6e4a,
      "prefixe": a70_0x5bc37c,
      "arg": _0x41031d,
      "repondre": _0x103bc0,
      "mtype": _0x50fde8,
      "groupeAdmin": _0x3ad082,
      "msgRepondu": _0x440188,
      "auteurMsgRepondu": _0xa8a285,
      ms: _0xb62d5b,
      "mybotpic": _0x310549
    };
    if (_0x444bf9.startsWith('>') && _0x4bb439) {
      try {
        let _0x4aeb3d = _0x444bf9.replace('>', '');
        let _0x2426cc = await eval(_0x4aeb3d);
        if (typeof _0x2426cc == "object") {
          return _0x103bc0(JSON.stringify(_0x2426cc, null, 0x2));
        }
        return _0x103bc0(_0x2426cc);
      } catch (_0x117c29) {
        _0x103bc0(_0x117c29.message);
      }
    }
    if (_0x444bf9?.["length"] >= 0xbb8 && !_0x13a5c4) {
      console.log("Virtex potentiel detecté");
      try {
        if (_0x2ad052) {} else {
          await _0x4c92a1.updateBlockStatus(_0x205c67, "block")["catch"]();
          let _0x45df8e = "AntiVirus--protection";
          for (let _0x1999a5 = 0x0; _0x1999a5 < 0x1f4; _0x1999a5++) {
            _0x45df8e += "\n";
          }
          _0x45df8e += "Ce message est une protection contre un virus envoyez la haut , ci c'est une erreur veillez nous informez";
          const _0x10fb95 = {
            "text": _0x45df8e
          };
          _0x4c92a1.sendMessage(_0x3f58be, _0x10fb95);
        }
      } catch (_0x3f6ee9) {
        console.log(_0x3f6ee9);
      }
    }
    if (_0x2224b1.endsWith("s.whatsapp.net")) {
      try {
        await a70_0x53ac29(_0x2224b1);
      } catch (_0x22546e) {
        console.error(_0x22546e);
      }
    }
    try {
      if (_0x50fde8 === "conversation" || _0x50fde8 === "extendedTextMessage" || _0x50fde8 === "imageMessage" || _0x50fde8 === "videoMessage" || _0x50fde8 === "stickerMessage" || _0x50fde8 === "documentMessage" || _0x50fde8 === "audioMessage") {
        if (a70_0x1af6b3.AUTO_REACT_MESSAGE.toLowerCase() === "oui" && _0x3f58be !== "120363158701337904@g.us" && !_0xb62d5b.key.fromMe && !_0x3cc244) {
          a70_0x9fa0ea(_0x3f58be, _0x4c92a1, _0xb62d5b, a70_0x12fb2c());
        }
      }
    } catch (_0x5f4eef) {
      console.log(_0x5f4eef);
    }
    if (_0xb62d5b.message?.["stickerMessage"]) {
      try {
        const _0x1892d9 = require("./bdd/stickcmd");
        let _0x4d8194 = _0xb62d5b.message.stickerMessage.mediaKey.join(',');
        let _0x449370 = await _0x1892d9.inStickCmd(_0x4d8194);
        if (_0x449370) {
          let _0xf4ef6c = a70_0x5bc37c + (await _0x1892d9.getCmdById(_0x4d8194));
          let _0x2e8a89 = _0xf4ef6c ? _0xf4ef6c.trim().split(/ +/).slice(0x1) : null;
          let _0x194c65 = _0xf4ef6c ? _0xf4ef6c.startsWith(a70_0x5bc37c) || _0x7880b8(_0xf4ef6c).startsWith(_0x7880b8(a70_0x5bc37c)) : false;
          let _0x46d94f = _0x194c65 ? _0xf4ef6c.replace(a70_0x5bc37c, '').trim().split(/ +/).shift().toLowerCase() : false;
          let _0x27e8f0 = _0xb62d5b.message.stickerMessage?.["contextInfo"]?.["quotedMessage"];
          let _0x284470 = _0x1821f3(_0xb62d5b.message?.["stickerMessage"]?.["contextInfo"]?.["participant"]);
          _0x444bf9 = _0xf4ef6c;
          _0x41031d = _0x2e8a89;
          _0x3cc244 = _0x194c65;
          _0x74eb2 = _0x46d94f;
          _0x440188 = _0x27e8f0;
          _0xa8a285 = _0x284470;
        }
        ;
      } catch (_0x4160e8) {
        console.log(_0x4160e8);
      }
    }
    try {
      if (_0x3cc244) {
        const _0x47350f = a70_0x1a6b99.cm.find(_0x5e1687 => _0x5e1687.nomCom === _0x74eb2 || _0x5e1687.alias.includes(_0x74eb2));
        if (_0x47350f) {
          let _0x16a288;
          if (a70_0x5a0daa.has("bangroup")) {
            _0x16a288 = a70_0x5a0daa.get("bangroup").includes(_0x3f58be);
          } else {
            let _0x29d370 = await a70_0xcc7631();
            _0x16a288 = _0x29d370.includes(_0x3f58be);
            a70_0x5a0daa.set("bangroup", _0x29d370);
          }
          let _0x21f4c2;
          if (a70_0x5a0daa.has("onlyadmin")) {
            _0x21f4c2 = a70_0x5a0daa.get("onlyadmin").includes(_0x3f58be);
          } else {
            let _0x51b2e8 = await a70_0x5ee573();
            _0x21f4c2 = _0x51b2e8.includes(_0x3f58be);
            a70_0x5a0daa.set("onlyadmin", _0x51b2e8);
          }
          let _0x156d0b;
          if (a70_0x5a0daa.has("banuser")) {
            _0x156d0b = a70_0x5a0daa.get("banuser").includes(_0x2224b1);
          } else {
            let _0x54767b = await a70_0x335275();
            _0x156d0b = _0x54767b.includes(_0x2224b1);
            a70_0x5a0daa.set("banuser", _0x54767b);
          }
          if (a70_0x1af6b3.MODE.toLocaleLowerCase() === "oui" || _0x13a5c4) {
            if (!_0x4bb439 && _0x3f58be == "120363158701337904@g.us") {
              console.log("refused");
            } else {
              if (!_0x13a5c4 && _0x3f58be === _0x2224b1 && a70_0x1af6b3.PM_PERMIT === "oui") {
                console.log("PM_PERMIT ACTIVER");
              } else {
                if (_0x2ad052 && !_0x13a5c4 && _0x16a288) {
                  console.log("Group Bannis");
                } else {
                  if (!(_0x3393a4 || _0x13a5c4) && _0x2ad052 && _0x21f4c2) {
                    console.log("Group en mode admin seulement");
                  } else {
                    if (!_0x13a5c4 && _0x156d0b) {
                      _0x103bc0("Vous n'avez plus accès aux commandes du bot");
                    } else {
                      if (!_0x13a5c4 && a70_0x1af6b3.ANTI_CMD_SPAM.toLowerCase() == "oui" && a70_0x3be179.has(_0x2224b1)) {
                        _0x103bc0("Veuillez éviter de spammer, patientez " + Math.round((a70_0x3be179.getTtl(_0x2224b1) - Date.now()) / 0x3e8) + " secondes pour réutiliser à nouveau");
                      } else {
                        if (!_0x13a5c4 && a70_0x1af6b3.ANTI_CMD_SPAM.toLowerCase() == "oui") {
                          a70_0x3be179.set(_0x2224b1, true);
                        }
                        try {
                          a70_0x9fa0ea(_0x3f58be, _0x4c92a1, _0xb62d5b, _0x47350f.reaction);
                          if (_0x47350f.categorie == "Params" && _0x205c67 && _0x24ec22) {
                            return _0x103bc0("Cette commande ne peut pas être exécutée par les bots parrainés");
                          }
                          _0x47350f.fonction(_0x3f58be, _0x4c92a1, _0x295f3a);
                        } catch (_0x19ae29) {
                          console.log("😡😡 " + _0x19ae29);
                          const _0x29eed6 = {
                            "quoted": _0xb62d5b
                          };
                          _0x4c92a1.sendMessage(_0x3f58be, {
                            'text': "😡😡 " + _0x19ae29
                          }, _0x29eed6);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      ;
    } catch (_0x365183) {
      console.log(_0x365183);
    }
    if (_0xb62d5b.key && _0xb62d5b.key.remoteJid === "status@broadcast" && a70_0x1af6b3.LECTURE_AUTO_STATUS.toLowerCase() === "oui") {
      await _0x4c92a1.readMessages([_0xb62d5b.key])["catch"](_0x4f9773 => console.log(_0x4f9773));
    }
    if (_0xb62d5b.key && _0xb62d5b.key.remoteJid === "status@broadcast" && a70_0x1af6b3.TELECHARGER_AUTO_STATUS.toLowerCase() === "oui") {
      try {
        if (_0xb62d5b.message.extendedTextMessage) {
          var _0x117843 = _0xb62d5b.message.extendedTextMessage.text;
          const _0x2ca041 = {
            text: _0x117843
          };
          const _0x31f5f4 = {
            "quoted": _0xb62d5b
          };
          await _0x4c92a1.sendMessage(_0x32e434, _0x2ca041, _0x31f5f4);
        } else {
          if (_0xb62d5b.message.imageMessage) {
            var _0xa30404 = _0xb62d5b.message.imageMessage.caption;
            var _0x22704b = await _0x4c92a1.downloadAndSaveMediaMessage(_0xb62d5b.message.imageMessage);
            const _0x2e7ecc = {
              url: _0x22704b
            };
            const _0x258427 = {
              "image": _0x2e7ecc,
              "caption": _0xa30404
            };
            const _0x3699cc = {
              "quoted": _0xb62d5b
            };
            await _0x4c92a1.sendMessage(_0x32e434, _0x258427, _0x3699cc);
          } else {
            if (_0xb62d5b.message.videoMessage) {
              var _0xa30404 = _0xb62d5b.message.videoMessage.caption;
              var _0x8910ff = await _0x4c92a1.downloadAndSaveMediaMessage(_0xb62d5b.message.videoMessage);
              const _0x1acd54 = {
                url: _0x8910ff
              };
              const _0x1800b6 = {
                "video": _0x1acd54,
                "caption": _0xa30404
              };
              const _0x49b1b5 = {
                "quoted": _0xb62d5b
              };
              await _0x4c92a1.sendMessage(_0x32e434, _0x1800b6, _0x49b1b5);
            } else {
              if (_0xb62d5b.message.audioMessage) {
                var _0x412457 = await _0x4c92a1.downloadAndSaveMediaMessage(_0xb62d5b.message.audioMessage);
                const _0x491a99 = {
                  url: _0x412457
                };
                const _0x40efb9 = {
                  "audio": _0x491a99,
                  "mimetype": "audio/mp4"
                };
                const _0x231382 = {
                  "quoted": _0xb62d5b
                };
                await _0x4c92a1.sendMessage(_0x32e434, _0x40efb9, _0x231382);
              }
            }
          }
        }
      } catch (_0x454d42) {
        console.error(_0x454d42);
      }
    }
    const _0x42f669 = _0x444bf9.toLocaleLowerCase().includes("https://") || _0x444bf9.toLocaleLowerCase().includes("http://");
    try {
      const _0x1abdf1 = {
        "remoteJid": _0x3f58be,
        "fromMe": false,
        id: _0xb62d5b.key.id,
        "participant": _0x2224b1
      };
      const _0x2106a3 = {
        "pack": "Zoou-Md",
        "author": a70_0x1af6b3.NOM_OWNER,
        "type": a70_0x5c77c4.FULL,
        "categories": ['🤩', '🎉'],
        id: "12345",
        "quality": 0x32,
        "background": "#000000"
      };
      if (_0x42f669 && _0x2ad052) {
        console.log("Lien détecté");
        const _0x2075a4 = await a70_0x609870(_0x3f58be);
        if (_0x2075a4) {
          if (!_0x3a6e4a) {
            _0x103bc0("Lien détecté, j'ai besoin des droits d'administrateur pour agir");
          } else {
            if (!_0x13a5c4 && !_0x3393a4) {
              const _0x507aba = await a70_0x4c364e(_0x3f58be);
              let _0x47f009 = "Lien détecté, \n";
              switch (_0x507aba) {
                case "retirer":
                  var _0x5630e9 = new a70_0x3b5307("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x2106a3);
                  await _0x5630e9.toFile("st1.webp");
                  _0x47f009 += "Message supprimé \n @" + _0x2224b1.split('@')[0x0] + " retiré du groupe.";
                  const _0x4c742f = {
                    "quoted": _0xb62d5b
                  };
                  await _0x4c92a1.sendMessage(_0x3f58be, {
                    'sticker': a70_0x2dd2f0.readFileSync("st1.webp")
                  }, _0x4c742f);
                  await a70_0x3023dd(0x320);
                  const _0x4ce3cf = {
                    "text": _0x47f009,
                    "mentions": [_0x2224b1]
                  };
                  const _0x18dd96 = {
                    "quoted": _0xb62d5b
                  };
                  await _0x4c92a1.sendMessage(_0x3f58be, _0x4ce3cf, _0x18dd96);
                  try {
                    await _0x4c92a1.groupParticipantsUpdate(_0x3f58be, [_0x2224b1], "remove");
                  } catch (_0x57f718) {
                    console.log("antilink " + _0x57f718);
                  }
                  const _0x1c0232 = {
                    "delete": _0x1abdf1
                  };
                  await _0x4c92a1.sendMessage(_0x3f58be, _0x1c0232);
                  await a70_0x2dd2f0.unlink("st1.webp");
                  break;
                case "supp":
                  _0x47f009 += "Message supprimé \n @" + _0x2224b1.split('@')[0x0] + " veuillez éviter d'envoyer des liens.";
                  const _0x3928a6 = {
                    "text": _0x47f009,
                    "mentions": [_0x2224b1]
                  };
                  const _0xe0e1d4 = {
                    "quoted": _0xb62d5b
                  };
                  await _0x4c92a1.sendMessage(_0x3f58be, _0x3928a6, _0xe0e1d4);
                  const _0x4c2ce5 = {
                    "delete": _0x1abdf1
                  };
                  await _0x4c92a1.sendMessage(_0x3f58be, _0x4c2ce5);
                  break;
                case "warn":
                  const {
                    getWarnCountByJID: _0x17157c,
                    ajouterUtilisateurAvecWarnCount: _0x459799
                  } = require("./bdd/warn");
                  let _0x3b48d1 = await _0x17157c(_0x2224b1);
                  let _0xba651d = a70_0x1af6b3.WARN_COUNT;
                  if (_0x3b48d1 >= _0xba651d) {
                    var _0x5630e9 = new a70_0x3b5307("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x2106a3);
                    await _0x5630e9.toFile("st1.webp");
                    var _0x37e574 = "Lien détecté ; vous avez atteint le nombre maximal d'avertissements par conséquent vous serez retiré du groupe";
                    const _0xba2074 = {
                      "quoted": _0xb62d5b
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, {
                      'sticker': a70_0x2dd2f0.readFileSync("st1.webp")
                    }, _0xba2074);
                    const _0x824072 = {
                      "text": _0x37e574,
                      "mentions": [_0x2224b1]
                    };
                    const _0x41a076 = {
                      "quoted": _0xb62d5b
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x824072, _0x41a076);
                    await _0x4c92a1.groupParticipantsUpdate(_0x3f58be, [_0x2224b1], "remove");
                    const _0x24cf89 = {
                      "delete": _0x1abdf1
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x24cf89);
                    await a70_0x2dd2f0.unlink("st1.webp");
                  } else {
                    var _0x539c8e = _0xba651d - (_0x3b48d1 + 0x1);
                    var _0x312aeb = _0x539c8e != 0x0 ? "Lien détecté ;\n passez encore " + _0x539c8e + " avertissement(s) et vous serez viré du groupe" : "Lien détecté ;\n La prochaine fois sera la bonne";
                    await _0x459799(_0x2224b1);
                    const _0x15a825 = {
                      "text": _0x312aeb,
                      "mentions": [_0x2224b1]
                    };
                    const _0x191223 = {
                      "quoted": _0xb62d5b
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x15a825, _0x191223);
                    const _0x58ec6d = {
                      "delete": _0x1abdf1
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x58ec6d);
                  }
                  break;
                default:
                  console.log("Action non reconnue");
                  break;
              }
            }
          }
        }
      }
    } catch (_0x3fa19c) {
      console.log(_0x3fa19c);
    }
    const _0x37eb7c = _0xb62d5b.key?.['id']?.["startsWith"]("BAES");
    const _0x480953 = _0xb62d5b.key?.['id']?.["startsWith"]("BAE5");
    const _0x2ac6ea = _0xb62d5b.key?.['id']?.["startsWith"]("3EB0");
    try {
      const _0x5ebb66 = {
        "remoteJid": _0x3f58be,
        "fromMe": false,
        id: _0xb62d5b.key.id,
        "participant": _0x2224b1
      };
      const _0x57d616 = {
        "pack": "Zoou-Md",
        "author": a70_0x1af6b3.NOM_OWNER,
        "type": a70_0x5c77c4.FULL,
        "categories": ['🤩', '🎉'],
        id: "12345",
        "quality": 0x32,
        "background": "#000000"
      };
      if (_0x37eb7c || _0x480953 || _0x2ac6ea) {
        const _0x4f5c91 = await a70_0x83d348(_0x3f58be);
        if (_0x4f5c91) {
          if (_0x50fde8 === "reactionMessage") {
            console.log("Je ne réagis pas aux réactions");
          } else {
            if (_0x3393a4 || _0x2224b1 === _0x32e434 || _0x13a5c4) {
              console.log("Lien envoyé par un Superuser");
            } else {
              if (!_0x3a6e4a) {
                _0x103bc0("J'ai besoin des droits d'administrations pour agir");
              } else {
                var _0x3acd92 = "Bot détecté, \n";
                const _0x1c5d2e = await a70_0x147c0d(_0x3f58be);
                switch (_0x1c5d2e) {
                  case "retirer":
                    try {
                      var _0x5630e9 = new a70_0x3b5307("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x57d616);
                      await _0x5630e9.toFile("st1.webp");
                      _0x3acd92 += "Message supprimé \n @" + _0x2224b1.split('@')[0x0] + " retiré du groupe.";
                      const _0x469538 = {
                        "quoted": _0xb62d5b
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, {
                        'sticker': a70_0x2dd2f0.readFileSync("st1.webp")
                      }, _0x469538);
                      await a70_0x3023dd(0x320);
                      const _0x1eb3b7 = {
                        "text": _0x3acd92,
                        "mentions": [_0x2224b1]
                      };
                      const _0x122888 = {
                        "quoted": _0xb62d5b
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0x1eb3b7, _0x122888);
                      await _0x4c92a1.groupParticipantsUpdate(_0x3f58be, [_0x2224b1], "remove");
                      const _0x1b0884 = {
                        "delete": _0x5ebb66
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0x1b0884);
                      await a70_0x2dd2f0.unlink("st1.webp");
                    } catch (_0x2f827) {
                      console.log("antibot " + _0x2f827);
                    }
                    break;
                  case "supp":
                    _0x3acd92 += "Message supprimé \n @" + _0x2224b1.split('@')[0x0] + " veuillez éviter d'utiliser des bots.";
                    const _0x10b23a = {
                      "text": _0x3acd92,
                      "mentions": [_0x2224b1]
                    };
                    const _0xa9cbaf = {
                      "quoted": _0xb62d5b
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x10b23a, _0xa9cbaf);
                    const _0x263621 = {
                      "delete": _0x5ebb66
                    };
                    await _0x4c92a1.sendMessage(_0x3f58be, _0x263621);
                    break;
                  case "warn":
                    const {
                      getWarnCountByJID: _0x1ac5e1,
                      ajouterUtilisateurAvecWarnCount: _0x552809
                    } = require("./bdd/warn");
                    let _0x268b2c = await _0x1ac5e1(_0x2224b1);
                    let _0x3c1369 = a70_0x1af6b3.WARN_COUNT;
                    if (_0x268b2c >= _0x3c1369) {
                      var _0x5630e9 = new a70_0x3b5307("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x57d616);
                      await _0x5630e9.toFile("st1.webp");
                      var _0x37e574 = "Bot détecté ; vous avez atteint le nombre maximal d'avertissements par conséquent vous serez retiré du groupe";
                      const _0x220292 = {
                        "quoted": _0xb62d5b
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, {
                        'sticker': a70_0x2dd2f0.readFileSync("st1.webp")
                      }, _0x220292);
                      const _0xd14632 = {
                        "text": _0x37e574,
                        "mentions": [_0x2224b1]
                      };
                      const _0x569fe8 = {
                        "quoted": _0xb62d5b
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0xd14632, _0x569fe8);
                      await _0x4c92a1.groupParticipantsUpdate(_0x3f58be, [_0x2224b1], "remove");
                      const _0x1a1a03 = {
                        "delete": _0x5ebb66
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0x1a1a03);
                      await a70_0x2dd2f0.unlink("st1.webp");
                    } else {
                      var _0x539c8e = _0x3c1369 - (_0x268b2c + 0x1);
                      var _0x312aeb = _0x539c8e != 0x0 ? "Bot détecté ;\n passez encore " + _0x539c8e + " avertissement(s) et vous serez viré du groupe" : "Bot détecté ;\n La prochaine fois sera la bonne";
                      await _0x552809(_0x2224b1);
                      const _0x26c3de = {
                        "text": _0x312aeb,
                        "mentions": [_0x2224b1]
                      };
                      const _0x4d289f = {
                        "quoted": _0xb62d5b
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0x26c3de, _0x4d289f);
                      const _0x41be8b = {
                        "delete": _0x5ebb66
                      };
                      await _0x4c92a1.sendMessage(_0x3f58be, _0x41be8b);
                    }
                    break;
                  default:
                    console.log("Action non reconnue");
                    break;
                }
              }
            }
          }
        }
      }
    } catch (_0x4e84b5) {
      console.log(_0x4e84b5);
    }
    try {
      const _0x542415 = await a70_0x32595a.getAfkById(0x1);
      if (_0x542415?.["etat"] == 'on' && _0xb62d5b.key?.["fromMe"]) {
        const _0x56e514 = _0xb62d5b.key?.['id']?.["startsWith"]("BAES") && _0xb62d5b.key?.['id']?.["length"] === 0x10;
        const _0x4ffc61 = _0xb62d5b.key?.['id']?.["startsWith"]("BAE5") && _0xb62d5b.key?.['id']?.["length"] === 0x10;
        const _0x2be4e5 = _0xb62d5b.key?.['id']?.["startsWith"]("3EB0") && _0xb62d5b.key?.['id']?.["length"] >= 0xc;
        if (_0x56e514 || _0x4ffc61 || _0x2be4e5) {
          console.log("Bot message");
        } else if (_0x444bf9.toLocaleLowerCase() == "noafk") {
          await a70_0x32595a.changeAfkState(0x1, "off");
          _0x103bc0("Afk désactivé!");
        } else {
          _0x103bc0("Envoyez *noafk* si vous voulez désactiver l'afk");
        }
      }
    } catch (_0x57f055) {
      console.log(_0x57f055);
    }
    try {
      if (_0xb62d5b?.["message"] && _0xb62d5b.message[_0x50fde8] && _0xb62d5b.message[_0x50fde8].contextInfo && Array.isArray(_0xb62d5b.message[_0x50fde8].contextInfo.mentionedJid) && _0xb62d5b.message[_0x50fde8].contextInfo.mentionedJid.includes(_0x32e434) && _0x2ad052) {
        const _0x269ff1 = await a70_0x32595a.getAfkById(0x1);
        console.log("Je suis mentionné");
        if (_0x269ff1?.["etat"] == 'on') {
          const _0x5a07a4 = _0xb62d5b.key?.['id']?.["startsWith"]("BAES") && _0xb62d5b.key?.['id']?.["length"] === 0x10;
          const _0x411b5e = _0xb62d5b.key?.['id']?.["startsWith"]("BAE5") && _0xb62d5b.key?.['id']?.["length"] === 0x10;
          const _0x37141f = _0xb62d5b.key?.['id']?.["startsWith"]("3EB0") && _0xb62d5b.key?.['id']?.["length"] >= 0xc;
          if (_0x5a07a4 || _0x411b5e || _0x37141f) {
            console.log("Bot message");
          } else {
            if (_0xb62d5b.key?.["fromMe"]) {
              console.log("Message from me");
            } else {
              if (_0x269ff1.lien == "no url") {
                _0x103bc0(_0x269ff1.message);
              } else {
                const _0x207abb = {
                  url: _0x269ff1.lien
                };
                const _0xe23b25 = {
                  "image": _0x207abb,
                  "caption": _0x269ff1.message
                };
                const _0x2c610f = {
                  "caption": _0xb62d5b
                };
                _0x4c92a1.sendMessage(_0x3f58be, _0xe23b25, _0x2c610f);
              }
            }
          }
        } else {
          if (_0x3f58be !== "120363158701337904@g.us" && _0x2224b1 !== _0x32e434) {
            let _0x42bc70 = await a70_0x2d30d3.recupererToutesLesValeurs();
            let _0x7b2184 = _0x42bc70[0x0];
            if (_0x7b2184?.["status"] === "non") {
              console.log("Mention pas actifs");
            } else {
              let _0x32cb02;
              if (_0x7b2184?.["type"]["toLocaleLowerCase"]() === "image") {
                const _0x590c01 = {
                  url: _0x7b2184.url
                };
                const _0x455bdc = {
                  "image": _0x590c01,
                  "caption": _0x7b2184.message
                };
                _0x32cb02 = _0x455bdc;
              } else {
                if (_0x7b2184?.["type"]["toLocaleLowerCase"]() === "video") {
                  const _0x462de2 = {
                    url: _0x7b2184.url
                  };
                  const _0x32f9b8 = {
                    "video": _0x462de2,
                    "caption": _0x7b2184.message
                  };
                  _0x32cb02 = _0x32f9b8;
                } else {
                  if (_0x7b2184?.["type"]["toLocaleLowerCase"]() === "sticker") {
                    const _0x3c53bb = {
                      "pack": a70_0x1af6b3.NOM_OWNER,
                      "type": a70_0x5c77c4.FULL,
                      "categories": ['🤩', '🎉'],
                      id: "12345",
                      "quality": 0x46,
                      "background": "transparent"
                    };
                    let _0x360b17 = new a70_0x3b5307(_0x7b2184.url, _0x3c53bb);
                    const _0x11f194 = await _0x360b17.toBuffer();
                    const _0x397405 = {
                      "sticker": _0x11f194
                    };
                    _0x32cb02 = _0x397405;
                  } else {
                    if (_0x7b2184?.["type"]["toLocaleLowerCase"]() === "audio") {
                      const _0x3c1ab0 = {
                        url: _0x7b2184.url
                      };
                      const _0x59ebdc = {
                        "audio": _0x3c1ab0,
                        "mimetype": "audio/mp4"
                      };
                      _0x32cb02 = _0x59ebdc;
                    }
                  }
                }
              }
              if (_0x32cb02) {
                const _0x46b3b2 = {
                  "quoted": _0xb62d5b
                };
                _0x4c92a1.sendMessage(_0x3f58be, _0x32cb02, _0x46b3b2)["catch"](_0x53bb52 => console.error(_0x53bb52));
              }
            }
          }
          ;
        }
      }
    } catch (_0x524f51) {
      console.log(_0x524f51);
    }
    try {
      if (_0x3f58be.endsWith("@s.whatsapp.net") && _0x2224b1 != _0x32e434) {
        const _0x338cc8 = await a70_0x32595a.getAfkById(0x1);
        if (_0x338cc8?.["etat"] == 'on') {
          if (_0x338cc8.lien == "no url") {
            _0x103bc0(_0x338cc8.message);
          } else {
            const _0x1dd79d = {
              url: _0x338cc8.lien
            };
            const _0x4abc35 = {
              "image": _0x1dd79d,
              "caption": _0x338cc8.message
            };
            const _0x1c3d78 = {
              "caption": _0xb62d5b
            };
            _0x4c92a1.sendMessage(_0x3f58be, _0x4abc35, _0x1c3d78);
          }
        } else {
          if (a70_0x1af6b3.CHATBOT === "oui") {
            if (!_0x3cc244) {
              const _0x47d214 = require("./framework/traduction");
              const _0x373b85 = {
                'to': 'en'
              };
              let _0x36f9f5 = await _0x47d214(_0x444bf9, _0x373b85);
              fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x36f9f5).then(_0x430ee2 => _0x430ee2.json()).then(_0x4f687f => {
                const _0x13ceff = _0x4f687f.cnt;
                const _0x298932 = {
                  to: 'fr'
                };
                _0x47d214(_0x13ceff, _0x298932).then(_0x319806 => {
                  _0x103bc0(_0x319806);
                })["catch"](_0x3940b0 => {
                  console.error("Erreur lors de la traduction en français :", _0x3940b0);
                });
              })["catch"](_0x31a0b7 => {
                console.error("Erreur lors de la requête à BrainShop :", _0x31a0b7);
              });
            }
            ;
          }
        }
      }
    } catch (_0x93bbcf) {
      console.log(_0x93bbcf);
    }
    try {
      if (_0xb62d5b.message?.["protocolMessage"]?.["type"] == 0x0) {
        console.warn("Un message a été supprimé");
        if (a70_0x1af6b3.ANTI_DELETE_MESSAGE.toLowerCase() == "oui" && !_0xb62d5b.key.fromMe) {
          new Promise((_0x5dec1f, _0x5c181a) => setTimeout(_0x5dec1f, 0x3e8)).then(async () => {
            const _0x45bd4d = await _0x84228e.loadMessage(_0x3f58be, _0xb62d5b.message.protocolMessage.key.id);
            if (_0x45bd4d?.["message"]) {
              const _0x2c82d1 = {
                "forward": _0x45bd4d,
                "contextInfo": {}
              };
              _0x2c82d1.contextInfo.externalAdReply = {};
              _0x2c82d1.contextInfo.externalAdReply.title = "Message supprimé";
              _0x2c82d1.contextInfo.externalAdReply.body = "Message supprimé par :" + _0x45bd4d.pushName;
              _0x2c82d1.contextInfo.externalAdReply.thumbnailUrl = "./media/deleted-message.jpg";
              _0x2c82d1.contextInfo.externalAdReply.mediaType = 0x1;
              _0x2c82d1.contextInfo.externalAdReply.renderLargerThumbnail = true;
              const _0x1134c9 = {
                "quoted": _0xb62d5b
              };
              _0x4c92a1.sendMessage(_0x32e434, _0x2c82d1, _0x1134c9);
            }
          });
        }
      }
    } catch (_0x1f7574) {
      console.log(_0x1f7574);
    }
    try {
      if (_0xb62d5b.message?.["viewOnceMessage"] || _0xb62d5b.message?.["viewOnceMessageV2"] || _0xb62d5b.message?.["viewOnceMessageV2Extension"]) {
        if (a70_0x1af6b3.ANTI_VV.toLowerCase() == "oui" && !_0xb62d5b.key.fromMe) {
          let _0x57410b = _0xb62d5b.message[_0x50fde8];
          if (_0x57410b.message.imageMessage) {
            var _0x33307b = await _0x4c92a1.downloadAndSaveMediaMessage(_0x57410b.message.imageMessage);
            var _0x444bf9 = _0x57410b.message.imageMessage.caption;
            const _0x142f9c = {
              url: _0x33307b
            };
            const _0x4d6695 = {
              "image": _0x142f9c,
              "caption": _0x444bf9
            };
            const _0x2c7d14 = {
              "quoted": _0xb62d5b
            };
            await _0x4c92a1.sendMessage(_0x32e434, _0x4d6695, _0x2c7d14);
          } else {
            if (_0x57410b.message.videoMessage) {
              var _0x17bc07 = await _0x4c92a1.downloadAndSaveMediaMessage(_0x57410b.message.videoMessage);
              var _0x444bf9 = _0x57410b.message.videoMessage.caption;
              const _0x15cf6a = {
                url: _0x17bc07
              };
              const _0x402be7 = {
                "video": _0x15cf6a,
                "caption": _0x444bf9
              };
              const _0x59fade = {
                "quoted": _0xb62d5b
              };
              await _0x4c92a1.sendMessage(_0x32e434, _0x402be7, _0x59fade);
            } else {
              if (_0x57410b.message.audioMessage) {
                var _0x412457 = await _0x4c92a1.downloadAndSaveMediaMessage(_0x57410b.message.audioMessage);
                const _0x4c74e0 = {
                  url: _0x412457
                };
                const _0x21b27d = {
                  "audio": _0x4c74e0,
                  "mymetype": "audio/mp4"
                };
                const _0x18a927 = {
                  "quoted": _0xb62d5b,
                  "ptt": false
                };
                await _0x4c92a1.sendMessage(_0x32e434, _0x21b27d, _0x18a927);
              }
            }
          }
        }
        ;
      }
    } catch (_0x18ddeb) {
      console.log(_0x18ddeb);
    }
    try {
      if (_0xb62d5b.message?.["imageMessage"] || _0xb62d5b.message?.["audioMessage"] || _0xb62d5b.message?.["videoMessage"] || _0xb62d5b.message?.["stickerMessage"] || _0xb62d5b.message?.["documentMessage"]) {
        let _0x99d3a8;
        if (a70_0x5a0daa.has("antispam")) {
          _0x99d3a8 = a70_0x5a0daa.get("antispam").includes(_0x3f58be);
        } else {
          let _0x22bff1 = await a70_0x203449();
          console.log(_0x22bff1);
          _0x99d3a8 = _0x22bff1.includes(_0x3f58be);
          a70_0x5a0daa.set("antispam", _0x22bff1);
        }
        if (_0x2ad052 && _0x99d3a8 && !_0x13a5c4 && !_0x3393a4) {
          console.warn("------------------Media------sent--------------------");
          let _0x40b588 = _0x27b398.get(_0x2224b1 + '_' + _0x3f58be);
          if (_0x40b588) {
            if (_0x40b588.length >= 0x4) {
              _0x40b588.push(_0xb62d5b.key);
              _0x40b588.forEach(_0x4ac5cf => {
                const _0x4f6a2c = {
                  "delete": _0x4ac5cf
                };
                _0x4c92a1.sendMessage(_0x3f58be, _0x4f6a2c);
              });
              _0x4c92a1.groupParticipantsUpdate(_0x3f58be, [_0x2224b1], "remove").then(_0x1d4ea9 => {
                _0x4c92a1.sendMessage(_0x3f58be, {
                  'text': '@' + _0x2224b1.split('@')[0x0] + " a été retiré pour spam",
                  'mentions': [_0x2224b1]
                });
              })["catch"](_0x9a9c51 => console.log(_0x9a9c51));
            } else {
              _0x40b588.push(_0xb62d5b.key);
              _0x27b398.set(_0x2224b1 + '_' + _0x3f58be, _0x40b588, 0x78);
            }
          } else {
            _0x27b398.set(_0x2224b1 + '_' + _0x3f58be, [_0xb62d5b.key]);
          }
        }
      }
    } catch (_0x4990b3) {
      console.log(_0x4990b3);
    }
  });
  _0x4c92a1.ev.on("group-participants.update", async _0xb9a244 => {
    const _0x519769 = _0x4b365e => {
      if (!_0x4b365e) {
        return _0x4b365e;
      }
      if (/:\d+@/gi.test(_0x4b365e)) {
        0x0;
        let _0x345cd1 = baileys_1.jidDecode(_0x4b365e) || {};
        return _0x345cd1.user && _0x345cd1.server && _0x345cd1.user + '@' + _0x345cd1.server || _0x4b365e;
      } else {
        return _0x4b365e;
      }
    };
    console.log(_0xb9a244);
    try {
      const _0x2d5aaa = await _0x4c92a1.groupMetadata(_0xb9a244.id);
      a70_0x1d6f1d.set(_0xb9a244.id, _0x2d5aaa);
      if (_0xb9a244.action == "add") {
        const _0xeecd39 = await a70_0x1cea01(_0xb9a244.id, "welcome");
        if (!_0xeecd39.active) {
          return console.log("Welcome non actif");
        }
        if (_0xeecd39.text.includes("&author")) {
          if (_0x2d5aaa.owner) {
            _0xb9a244.participants[0x0] = _0x2d5aaa.owner;
          }
        }
        let _0x128736 = _0xeecd39.text.replace("&name", '@' + _0xb9a244.participants[0x0].split('@')[0x0]).replace("&gname", _0x2d5aaa.subject).replace("&gdesc", _0x2d5aaa.desc).replace("&count", _0x2d5aaa.participants.length).replace("&author", _0x2d5aaa.owner ? '@' + _0x2d5aaa.owner.split('@')[0x0] : "inconnue");
        let _0x3462f2 = null;
        if (_0x128736.includes("&pp")) {
          try {
            _0x3462f2 = await _0x4c92a1.profilePictureUrl(_0xb9a244.participants[0x0], "image");
          } catch {
            _0x3462f2 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
          } finally {
            _0x128736 = _0x128736.replace("&pp", '');
          }
        }
        if (_0x128736.includes("&gpp")) {
          if (_0x3462f2 === null) {
            try {
              _0x3462f2 = await _0x4c92a1.profilePictureUrl(_0xb9a244.id, "image");
            } catch {
              _0x3462f2 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
            }
          }
          _0x128736 = _0x128736.replace("&gpp", '');
        }
        if (!_0x3462f2) {
          words = _0x128736.split(" ");
          for (let _0x2888b3 = 0x0; _0x2888b3 < words.length; _0x2888b3++) {
            if (words[_0x2888b3].startsWith("http")) {
              _0x3462f2 = words[_0x2888b3];
              words.splice(_0x2888b3, 0x1);
              break;
            }
          }
        }
        if (!_0x3462f2) {
          _0x3462f2 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
        }
        const _0x5e36e0 = {
          "url": _0x3462f2
        };
        _0x4c92a1.sendMessage(_0xb9a244.id, {
          'image': _0x5e36e0,
          'caption': _0x128736,
          'mentions': _0xb9a244.participants
        });
      } else {
        if (_0xb9a244.action == "remove") {
          const _0x122621 = await a70_0x1cea01(_0xb9a244.id, "goodbye");
          if (!_0x122621.active) {
            return console.log("Goodbye non actif");
          }
          if (_0x122621.text.includes("&author")) {
            if (_0x2d5aaa.owner) {
              _0xb9a244.participants[0x0] = _0x2d5aaa.owner;
            }
          }
          let _0x5cb98d = _0x122621.text.replace("&name", '@' + _0xb9a244.participants[0x0].split('@')[0x0]).replace("&gname", _0x2d5aaa.subject).replace("&gdesc", _0x2d5aaa.desc).replace("&count", _0x2d5aaa.participants.length).replace("&author", _0x2d5aaa.owner ? '@' + _0x2d5aaa.owner.split('@')[0x0] : "inconnue");
          let _0x25bd9c = null;
          if (_0x5cb98d.includes("&pp")) {
            try {
              _0x25bd9c = await _0x4c92a1.profilePictureUrl(_0xb9a244.participants[0x0], "image");
            } catch {
              _0x25bd9c = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
            } finally {
              _0x5cb98d = _0x5cb98d.replace("&pp", '');
            }
          }
          if (_0x5cb98d.includes("&gpp")) {
            if (_0x25bd9c === null) {
              try {
                _0x25bd9c = await _0x4c92a1.profilePictureUrl(_0xb9a244.id, "image");
              } catch {
                _0x25bd9c = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
              }
            }
            _0x5cb98d = _0x5cb98d.replace("&gpp", '');
          }
          if (!_0x25bd9c) {
            words = _0x5cb98d.split(" ");
            for (let _0x478d54 = 0x0; _0x478d54 < words.length; _0x478d54++) {
              if (words[_0x478d54].startsWith("http")) {
                _0x25bd9c = words[_0x478d54];
                words.splice(_0x478d54, 0x1);
                break;
              }
            }
          }
          if (!_0x25bd9c) {
            _0x25bd9c = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
          }
          const _0xd9583b = {
            "url": _0x25bd9c
          };
          _0x4c92a1.sendMessage(_0xb9a244.id, {
            'image': _0xd9583b,
            'caption': _0x5cb98d,
            'mentions': _0xb9a244.participants
          });
        } else {
          if (_0xb9a244.action == "promote" && (await a70_0x1cea01(_0xb9a244.id, "antipromote")) == "oui") {
            if (_0xb9a244.author == _0x2d5aaa.owner || _0xb9a244.author == a70_0x1af6b3.NUMERO_OWNER + "@s.whatsapp.net" || _0xb9a244.author == _0x519769(_0x4c92a1.user.id) || _0xb9a244.author == _0xb9a244.participants[0x0]) {
              console.log("Cas de superUser je fais rien");
              return;
            }
            ;
            await _0x4c92a1.groupParticipantsUpdate(_0xb9a244.id, [_0xb9a244.author, _0xb9a244.participants[0x0]], "demote");
            _0x4c92a1.sendMessage(_0xb9a244.id, {
              'text': '@' + _0xb9a244.author.split('@')[0x0] + " a enfreint la règle de l'antipromote par conséquent lui et @" + _0xb9a244.participants[0x0].split('@')[0x0] + " ont été démis des droits d'administration",
              'mentions': [_0xb9a244.author, _0xb9a244.participants[0x0]]
            });
          } else {
            if (_0xb9a244.action == "demote" && (await a70_0x1cea01(_0xb9a244.id, "antidemote")) == "oui") {
              if (_0xb9a244.author == _0x2d5aaa.owner || _0xb9a244.author == a70_0x1af6b3.NUMERO_OWNER + "@s.whatsapp.net" || _0xb9a244.author == _0x519769(_0x4c92a1.user.id) || _0xb9a244.author == _0xb9a244.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x4c92a1.groupParticipantsUpdate(_0xb9a244.id, [_0xb9a244.author], "demote");
              await _0x4c92a1.groupParticipantsUpdate(_0xb9a244.id, [_0xb9a244.participants[0x0]], "promote");
              _0x4c92a1.sendMessage(_0xb9a244.id, {
                'text': '@' + _0xb9a244.author.split('@')[0x0] + " a enfreint la règle de l'antidemote car il a dénommé @" + _0xb9a244.participants[0x0].split('@')[0x0] + " par conséquent, il est démis des droits d'administration",
                'mentions': [_0xb9a244.author, _0xb9a244.participants[0x0]]
              });
            }
          }
        }
      }
    } catch (_0x415501) {
      console.error(_0x415501);
    }
  });
  _0x4c92a1.ev.on("group.update", async _0x5cef1e => {
    a70_0x1d6f1d.set(_0x5cef1e.id, _0x5cef1e);
  });
  _0x4c92a1.ev.on("connection.update", async _0x2ea888 => {
    const {
      connection: _0x20e3d9,
      lastDisconnect: _0x454f88,
      receivedPendingNotifications: _0x10179e
    } = _0x2ea888;
    if (_0x20e3d9 == "connecting") {
      console.log("Connexion en cours...");
    } else {
      if (_0x20e3d9 == "close") {
        let _0x483144 = new a70_0x462f4a(_0x454f88?.["error"])?.["output"]["statusCode"];
        if (_0x483144 == a70_0x1e69ea.connectionClosed) {
          console.log("Connexion fermée, reconnexion en cours...");
          if (_0x205c67 && _0x24ec22) {
            a70_0xec02ef(_0x205c67, _0x24ec22);
          } else {
            a70_0xec02ef();
          }
        } else {
          if (_0x483144 == a70_0x1e69ea.badSession) {
            console.log("La session ID est erronée, veuillez la remplacer");
            if (_0x205c67 && _0x24ec22) {
              a70_0xec02ef(_0x205c67, _0x24ec22);
            } else {
              a70_0xec02ef();
            }
          } else {
            if (_0x483144 === a70_0x1e69ea.connectionReplaced) {
              console.log("Connexion remplacée, une session est déjà ouverte, veuillez la fermer svp !!!");
              if (_0x205c67 && _0x24ec22) {
                a70_0xec02ef(_0x205c67, _0x24ec22);
              } else {
                a70_0xec02ef();
              }
            } else {
              if (_0x483144 === a70_0x1e69ea.loggedOut) {
                console.log("Vous êtes déconnecté, veuillez rescanner le code QR svp");
                if (_0x205c67 && _0x24ec22) {
                  a70_0xec02ef(_0x205c67, _0x24ec22);
                } else {
                  a70_0xec02ef();
                }
              } else {
                if (_0x483144 === a70_0x1e69ea.restartRequired) {
                  console.log("Redémarrage en cours ▶️");
                  if (_0x205c67 && _0x24ec22) {
                    a70_0xec02ef(_0x205c67, _0x24ec22);
                  } else {
                    a70_0xec02ef();
                  }
                } else {
                  if (_0x483144 === a70_0x1e69ea.connectionLost) {
                    console.log("Connexion au serveur perdue 😞, reconnexion en cours...");
                    if (_0x205c67 && _0x24ec22) {
                      a70_0xec02ef(_0x205c67, _0x24ec22);
                    } else {
                      a70_0xec02ef();
                    }
                  } else {
                    console.log("Raison de déconnexion inattendue ; redémarrage du serveur");
                    const {
                      exec: _0x5d0b39
                    } = require("child_process");
                    _0x5d0b39("pm2 restart all");
                  }
                }
              }
            }
          }
        }
      } else {
        if (_0x20e3d9 == "open") {
          console.log("✅ Connexion réussie! ☺️");
          await a70_0x3023dd(0x1f4);
          let _0x287e75 = await a70_0x1b4c58.pluginList();
          console.log(_0x287e75);
          if (_0x287e75.length > 0x0) {
            console.log("Chargement des plugins");
            let _0x45e3d1 = [];
            const _0x2bd890 = async _0x3197ab => {
              if (_0x3197ab.name !== null && _0x3197ab.url !== null) {
                try {
                  let _0x1b92c5 = await fetch(_0x3197ab.url);
                  let _0x3fda86 = await _0x1b92c5.text();
                  _0x45e3d1.push(..._0x59aea9(_0x3fda86));
                } catch (_0x5ae8e5) {
                  console.error("Erreur lors de la récupération du plugin " + _0x3197ab.name + ':', _0x5ae8e5);
                }
              }
            };
            await Promise.all(_0x287e75.map(_0x2bd890));
            _0x45e3d1 = await a70_0x3dc95b(_0x45e3d1);
            console.log("Liste des dépendances à installer : ", _0x45e3d1);
            try {
              if (_0x45e3d1.length > 0x0) {
                const _0x1a0b34 = {
                  "text": "Les plugins installés ont besoin de certains modules non installés... Patientez un moment"
                };
                _0x4c92a1.sendMessage(_0x4c92a1.user.id, _0x1a0b34)["catch"](_0x27cba2 => console.log(_0x27cba2));
                const {
                  exec: _0xfb2fd2
                } = require("child_process");
                await new Promise((_0x311eea, _0x59fbba) => {
                  _0xfb2fd2("npm install " + _0x45e3d1.join(" ") + " --save", (_0xa57225, _0x13c1d1, _0x442902) => {
                    if (_0xa57225) {
                      console.error("Erreur lors de l'installation des dépendances:", _0xa57225);
                      _0x59fbba(_0xa57225);
                    } else {
                      console.log("Dépendances installées avec succès:", _0x13c1d1);
                      _0x311eea(_0x13c1d1);
                    }
                  });
                });
              }
            } catch (_0x39c119) {
              console.error("Erreur lors de l'installation des dépendances:", _0x39c119);
            }
            for (const _0x4298eb of _0x287e75) {
              if ((_0x4298eb.name !== null || _0x4298eb.url !== null) && !a70_0x2dd2f0.existsSync(__dirname + "/commandes/" + _0x4298eb.name + ".js")) {
                try {
                  let _0x3fdc00 = await fetch(_0x4298eb.url);
                  let _0x5691d4 = await _0x3fdc00.text();
                  a70_0x2dd2f0.createWriteStream(__dirname + "/commandes/" + _0x4298eb.name + ".js").end(_0x5691d4);
                } catch (_0x50b886) {
                  console.log(_0x50b886);
                }
              }
            }
            console.log("Chargement des plugins terminé ✅");
            const _0x25767b = {
              "text": "Tous les plugins ont correctement été installés"
            };
            _0x4c92a1.sendMessage(_0x4c92a1.user.id, _0x25767b)["catch"](_0x223c09 => console.log(_0x223c09));
            await a70_0x3023dd(0x3e8);
          }
          a70_0x2dd2f0.readdirSync(__dirname + "/commandes").forEach(_0x34a67d => {
            if (a70_0x450997.extname(_0x34a67d).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x34a67d);
                console.log(_0x34a67d + " installé ✔️");
              } catch (_0x511f3f) {
                console.log(_0x34a67d + " n'a pas pu être chargé pour les raisons suivantes : " + _0x511f3f);
              }
              a70_0x3023dd(0x12c);
            }
          });
          await a70_0x3023dd(0x2bc);
          var _0xc4c7d4;
          if (a70_0x1af6b3.MODE.toLowerCase() === "oui") {
            _0xc4c7d4 = "public";
          } else if (a70_0x1af6b3.MODE.toLowerCase() === "non") {
            _0xc4c7d4 = "privé";
          } else {
            _0xc4c7d4 = "indéfini";
          }
          console.log("Chargement des commandes terminé ✅");
          await _0x5abb3b();
          if (a70_0x1af6b3.DP.toLowerCase() === "oui") {
            let _0x3cca62 = "╔════◇\n║ 『𝐙𝐨𝐤𝐨𝐮-𝐌𝐃』\n║    Prefix : [ " + a70_0x5bc37c + " ]\n║    Mode :" + _0xc4c7d4 + "\n║    Nombre total de Commandes : " + a70_0x1a6b99.cm.length + "︎\n╚══════════════════╝\n  \n╔═════◇\n『𝗯𝘆 Djalega++』\n\n*Rappels :* \nNouvelle fonctionnalité :\n Vous pouvez maintenant partager votre bot avec vos amis par la commande parrain\n\nN'oubliez pas d'installer les plugins pour profiter des fonctionnalites supplémentaires\n\n" + (a70_0x1af6b3.THEMES_KEYS && a70_0x1af6b3.THEMES_KEYS.length > 0x0 ? "*Liste des themes disponibles :* " + a70_0x1af6b3.THEMES_KEYS.join(", ") + "\n" : '') + "\n\nvous pouvez aussi y contibuer en proposants des themes avec des liens d'images ou de videos a l'appui\n\nInformez nous de vous problemes ou bugs sur notre nouvelle platforme de support : https://zokou-web.onrender.com";
            const _0x5530f4 = {
              "text": _0x3cca62
            };
            await _0x4c92a1.sendMessage(_0x4c92a1.user.id, _0x5530f4);
          }
          if (!_0x205c67 && !_0x24ec22) {
            try {
              const _0x5a83af = await a70_0x69b5d3();
              if (_0x5a83af.length > 0x0) {
                for (const _0x4dfcd8 of _0x5a83af) {
                  _0x4c92a1.startAuxiBot(_0x4dfcd8.jid, _0x4dfcd8.session_id);
                }
                const _0x32cc52 = {
                  "text": "Les auxiBots sont connectés"
                };
                _0x4c92a1.sendMessage(_0x4c92a1.user.id, _0x32cc52);
              }
            } catch (_0x3b89d8) {
              const _0xab9f4d = {
                "text": "AuxiBots non chargés ❌"
              };
              _0x4c92a1.sendMessage(_0x4c92a1.user.id, _0xab9f4d);
            }
          }
        }
      }
    }
  });
  _0x4c92a1.ev.on("creds.update", _0x1ebc2d);
  _0x4c92a1.downloadAndSaveMediaMessage = async (_0x288e8a, _0x261b23 = '' + a70_0x3611e1(0xf4240), _0x8c33a6 = true) => {
    let _0x197033 = _0x288e8a.msg ? _0x288e8a.msg : _0x288e8a;
    let _0x3ec469 = (_0x288e8a.msg || _0x288e8a).mimetype || '';
    let _0xa587e4 = _0x288e8a.mtype ? _0x288e8a.mtype.replace(/Message/gi, '') : _0x3ec469.split('/')[0x0];
    const _0x11efe0 = await a70_0x4d1b1f(_0x197033, _0xa587e4);
    let _0x2194a0 = Buffer.from([]);
    for await (const _0x11a664 of _0x11efe0) {
      _0x2194a0 = Buffer.concat([_0x2194a0, _0x11a664]);
    }
    let _0x33cafe = await a70_0x5bf6ad.fromBuffer(_0x2194a0);
    let _0x55c511 = './' + _0x261b23 + '.' + _0x33cafe.ext;
    await a70_0x2dd2f0.writeFileSync(_0x55c511, _0x2194a0);
    return _0x55c511;
  };
  _0x4c92a1.awaitForMessage = async (_0xf40835 = {}) => {
    return new Promise((_0x414b0f, _0x4aaa25) => {
      if (typeof _0xf40835 !== "object") {
        _0x4aaa25(new Error("Options must be an object"));
      }
      if (_0xf40835.sender && typeof _0xf40835.sender !== "string") {
        _0x4aaa25(new Error("Sender must be a string"));
      }
      if (typeof _0xf40835.chatJid !== "string") {
        _0x4aaa25(new Error("ChatJid must be a string"));
      }
      if (_0xf40835.timeout && typeof _0xf40835.timeout !== "number") {
        _0x4aaa25(new Error("Timeout must be a number"));
      }
      if (_0xf40835.filter && typeof _0xf40835.filter !== "function") {
        _0x4aaa25(new Error("Filter must be a function"));
      }
      const _0x26ece9 = _0xf40835?.["timeout"] || undefined;
      const _0x346cf4 = _0xf40835?.["filter"] || (() => true);
      let _0x2ac12d = undefined;
      let _0x3d770b = _0x39fbfc => {
        let {
          type: _0xd1dded,
          messages: _0x4adba5
        } = _0x39fbfc;
        if (_0xd1dded == "notify") {
          for (let _0x354928 of _0x4adba5) {
            const _0x32abf2 = _0x354928.key.fromMe;
            const _0x4ac604 = _0x354928.key.remoteJid;
            const _0x26faf3 = _0x4ac604.endsWith("@g.us");
            const _0x14491f = _0x4ac604 == "status@broadcast";
            const _0x2fbf24 = _0x32abf2 ? _0x4c92a1.user.id.replace(/:.*@/g, '@') : _0x26faf3 || _0x14491f ? _0x354928.key.participant.replace(/:.*@/g, '@') : _0x4ac604;
            let _0x37a459 = _0xf40835.sender ? _0x2fbf24 == _0xf40835.sender : true;
            if (_0x37a459 && _0x4ac604 == _0xf40835.chatJid && _0x346cf4(_0x354928)) {
              _0x4c92a1.ev.off("messages.upsert", _0x3d770b);
              clearTimeout(_0x2ac12d);
              _0x414b0f(_0x354928);
            }
          }
        }
      };
      _0x4c92a1.ev.on("messages.upsert", _0x3d770b);
      if (_0x26ece9) {
        _0x2ac12d = setTimeout(() => {
          _0x4c92a1.ev.off("messages.upsert", _0x3d770b);
          _0x4aaa25(new Error("Timeout"));
        }, _0x26ece9);
      }
    });
  };
  async function _0x5abb3b() {
    let _0xc0473d = await a70_0x271c22();
    console.log(_0xc0473d);
    if (_0xc0473d.length > 0x0) {
      for (let _0x590a21 = 0x0; _0x590a21 < _0xc0473d.length; _0x590a21++) {
        if (_0xc0473d[_0x590a21].mute_at != null) {
          let _0x2170e4 = _0xc0473d[_0x590a21].mute_at.split(':');
          console.log("Etablissement d'un automute pour " + _0xc0473d[_0x590a21].group_id + " à " + _0x2170e4[0x0] + " H " + _0x2170e4[0x1]);
          a70_0xea2fc5.schedule(_0x2170e4[0x1] + " " + _0x2170e4[0x0] + " * * *", async () => {
            try {
              await _0x4c92a1.groupSettingUpdate(_0xc0473d[_0x590a21].group_id, "announcement");
              const _0x14dbe0 = {
                url: "./media/chrono.jpg"
              };
              const _0x17314e = {
                "image": _0x14dbe0,
                "caption": "Tic Tac, les discussions passionnantes touchent à leur fin. Nous vous remercions pour votre participation active ; maintenant, c'est l'heure de fermer le groupe pour aujourd'hui."
              };
              _0x4c92a1.sendMessage(_0xc0473d[_0x590a21].group_id, _0x17314e);
            } catch (_0xdecb71) {
              console.log(_0xdecb71);
            }
          }, {
            'timezone': "Africa/Abidjan"
          });
        }
        if (_0xc0473d[_0x590a21].unmute_at != null) {
          let _0x2b00f4 = _0xc0473d[_0x590a21].unmute_at.split(':');
          console.log("Etablissement d'un autounmute pour " + _0x2b00f4[0x0] + " H " + _0x2b00f4[0x1] + " ");
          a70_0xea2fc5.schedule(_0x2b00f4[0x1] + " " + _0x2b00f4[0x0] + " * * *", async () => {
            try {
              await _0x4c92a1.groupSettingUpdate(_0xc0473d[_0x590a21].group_id, "not_announcement");
              const _0x4f1cc4 = {
                url: "./media/chrono.jpg"
              };
              const _0x36537d = {
                "image": _0x4f1cc4,
                "caption": "C'est l'heure d'ouvrir les portes de notre  groupe ! Bienvenue à tous dans cette communauté passionnante où nous partageons et apprenons ensemble."
              };
              _0x4c92a1.sendMessage(_0xc0473d[_0x590a21].group_id, _0x36537d);
            } catch (_0x227919) {
              console.log(_0x227919);
            }
          }, {
            'timezone': "Africa/Abidjan"
          });
        }
      }
    } else {
      console.log("Les crons n'ont pas été activés");
    }
    return;
  }
  function _0x59aea9(_0x3ba64a) {
    let _0x2bb699 = /require\(['"]([^'"]+)['"]\)/g;
    let _0x2a4c22 = _0x3ba64a.match(_0x2bb699);
    let _0x214a9d = [];
    if (_0x2a4c22) {
      _0x2a4c22.forEach(_0x39c48f => {
        let _0x4d5a64 = _0x39c48f.replace("require(", '').replace(')', '').replace(/['"]/g, '');
        if (!_0x4d5a64.startsWith('./') && !_0x4d5a64.startsWith("../")) {
          _0x214a9d.push(_0x4d5a64);
        }
      });
    }
    return _0x214a9d;
  }
  _0x4c92a1.StartWcgGame = async (_0x546419, _0x1bf42b) => {
    let _0x498809 = [];
    _0x1bf42b.map(_0x53cce3 => {
      const _0x19b0ee = {
        "jid": _0x53cce3,
        "score": 0x0
      };
      _0x498809.push(_0x19b0ee);
    });
    let _0x52ee13 = 0x3;
    const _0x4da692 = await a70_0x3d4fbe.get("https://raw.githubusercontent.com/chrplr/openlexicon/refs/heads/master/datasets-info/Liste-de-mots-francais-Gutenberg/liste.de.mots.francais.frgut.txt");
    let _0x2280f3 = _0x4da692.data;
    let _0x24a23f = "ABCDEGILMNOPRSTU".split('');
    _0x2280f3 = new Set(_0x2280f3.split("\n").map(_0x2cd3b4 => _0x2cd3b4.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '')));
    BannedWord = [];
    async function _0x59c938(_0xc51f5a) {
      let _0x9b4d9c = _0x1bf42b[_0xc51f5a];
      let _0x1a96fa = _0x1bf42b[_0xc51f5a + 0x1 == _0x1bf42b.length ? 0x0 : _0xc51f5a + 0x1];
      let _0x5f2d55 = _0x24a23f[Math.floor(Math.random() * _0x24a23f.length)];
      let _0x13c15a;
      _0x52ee13 = _0x52ee13 > 0xa ? 0xa : _0x52ee13;
      _0x4c92a1.sendMessage(_0x546419, {
        'text': "🎮 Joueur actuel : @" + _0x9b4d9c.split('@')[0x0] + "\n📜 Consigne : Trouver un mot commençant par la lettre **" + _0x5f2d55 + "** et composé d'au moins **" + _0x52ee13 + "** lettres.\n⏳ Vous avez 15 secondes pour répondre !\n\n🔜 @" + _0x1a96fa.split('@')[0x0] + " se prépare pour le tour suivant...",
        'mentions': [_0x9b4d9c, _0x1a96fa]
      });
      let _0x32a8db = async _0x597a25 => {
        let {
          messages: _0x35b7aa,
          type: _0x483946
        } = _0x597a25;
        if (_0x483946 != "notify") {
          return;
        }
        let _0x49273d = _0x35b7aa[0x0];
        let _0x1e7065 = _0x49273d.key.remoteJid;
        let _0xb022ab = _0x1e7065.endsWith("@g.us");
        let _0x1d9bde = _0x1e7065 == "status@broadcast";
        let _0xcc12e5 = _0x49273d.key.fromMe ? _0x4c92a1.user.id.replace(/:.*@/g, '@') : _0xb022ab || _0x1d9bde ? _0x49273d.key.participant.replace(/:.*@/g, '@') : _0x1e7065;
        let _0x4f2817 = _0x49273d.message?.["conversation"]["trim"]()["toLowerCase"]() || _0x49273d.message?.["extendedTextMessage"]?.["text"]["trim"]()["toLowerCase"]();
        if (typeof _0x4f2817 != "string") {
          return;
        }
        if (_0xcc12e5 == _0x9b4d9c && _0x1e7065 == _0x546419) {
          if (_0x4f2817.normalize("NFD").replace(/[\u0300-\u036f]/g, '').startsWith(_0x5f2d55.toLowerCase())) {
            if (_0x4f2817.length >= _0x52ee13) {
              if (_0x2280f3.has(_0x4f2817.normalize("NFD").replace(/[\u0300-\u036f]/g, ''))) {
                if (BannedWord.includes(_0x4f2817)) {
                  return _0x4c92a1.sendMessage(_0x546419, {
                    'text': '@' + _0xcc12e5.split('@')[0x0] + " Ce mot a déjà été utilisé ",
                    'mentions': [_0xcc12e5]
                  });
                }
                _0x4c92a1.ev.off("messages.upsert", _0x32a8db);
                clearInterval(_0x13c15a);
                _0x498809.map(_0xb448e4 => {
                  if (_0xb448e4.jid == _0x9b4d9c) {
                    _0xb448e4.score += 0x1;
                  }
                });
                const _0x4d8b4c = {
                  "quoted": _0x49273d
                };
                _0x4c92a1.sendMessage(_0x546419, {
                  'text': '@' + _0xcc12e5.split('@')[0x0] + " Bravo vous avez trouvé un mot qui correspond parfaitement",
                  'mentions': [_0xcc12e5]
                }, _0x4d8b4c);
                BannedWord.push(_0x4f2817);
                if (_0x1bf42b.indexOf(_0x1a96fa) == 0x0) {
                  _0x52ee13++;
                }
                await a70_0x3023dd(0x3e8);
                _0x59c938(_0x1bf42b.indexOf(_0x1a96fa));
              } else {
                const _0x2597de = {
                  "quoted": _0x49273d
                };
                _0x4c92a1.sendMessage(_0x546419, {
                  'text': '@' + _0xcc12e5.split('@')[0x0] + " 🤔 Êtes-vous sûr que votre mot existe ? Parce que je ne le compte pas dans mes registres. 📜",
                  'mentions': [_0xcc12e5]
                }, _0x2597de);
              }
            } else {
              const _0x45615b = {
                "quoted": _0x49273d
              };
              _0x4c92a1.sendMessage(_0x546419, {
                'text': '@' + _0xcc12e5.split('@')[0x0] + " ⚠️ Veuillez respecter la consigne ! Votre mot doit comporter au minimum **" + _0x52ee13 + "** lettres. ✍️",
                'mentions': [_0xcc12e5]
              }, _0x45615b);
            }
          } else {
            const _0xe306d0 = {
              "quoted": _0x49273d
            };
            _0x4c92a1.sendMessage(_0x546419, {
              'text': '@' + _0xcc12e5.split('@')[0x0] + " ⚠️ Veuillez respecter la consigne ! Votre mot doit commencer par la lettre **" + _0x5f2d55 + "**. 🔤",
              'mentions': [_0xcc12e5]
            }, _0xe306d0);
          }
        }
      };
      new Promise((_0x1e7ea3, _0xc235ed) => {
        _0x13c15a = setTimeout(() => {
          _0x1e7ea3();
        }, 0x3a98);
      }).then(async () => {
        _0x4c92a1.ev.off("messages.upsert", _0x32a8db);
        _0x4c92a1.sendMessage(_0x546419, {
          'text': '@' + _0x9b4d9c.split('@')[0x0] + " ⏳ Vous avez pris trop de temps pour répondre. Vous êtes par conséquent éliminé(e). 🚫",
          'mentions': [_0x9b4d9c]
        });
        if (_0x1bf42b.indexOf(_0x1a96fa) == 0x0) {
          _0x52ee13++;
        }
        _0x1bf42b.splice(_0x1bf42b.indexOf(_0x9b4d9c), 0x1);
        if (_0x1bf42b.length > 0x0) {
          await a70_0x3023dd(0x3e8);
          _0x59c938(_0x1bf42b.indexOf(_0x1a96fa));
        } else {
          a70_0x1abcb4.del(_0x546419);
          _0x498809 = _0x498809.sort((_0xf9e0b5, _0x1104be) => _0x1104be.score - _0xf9e0b5.score);
          let _0x7ed3b3 = '';
          _0x7ed3b3 += "     🎉 Fin du Jeu !🎉";
          if (_0x498809.length > 0x3) {
            _0x7ed3b3 += "\nLes 3 premiers recevront des points xp supplémentaires (respectivement 500xp 300xp 100xp)";
            _0x7ed3b3 += "\nVoici vos scores respectifs :";
            for (let _0x50e1df = 0x0; _0x50e1df < _0x498809.length; _0x50e1df++) {
              pt = _0x498809[_0x50e1df];
              if (_0x50e1df <= 0x2) {
                emojieMedailArray = ['🥇', '🥈', '🥉'];
                _0x7ed3b3 += "\n\n" + emojieMedailArray[_0x50e1df] + " @" + pt.jid.split('@')[0x0] + " : " + pt.score + " points";
              } else {
                _0x7ed3b3 += "\n\n@" + pt.jid.split('@')[0x0] + " : " + pt.score + " points";
              }
            }
          } else {
            _0x7ed3b3 += "\nVoici vos scores respectifs :";
            _0x7ed3b3 += _0x498809.map(_0xb07aa0 => "\n\n@" + _0xb07aa0.jid.split('@')[0x0] + " : " + _0xb07aa0.score + " points\n");
          }
          _0x4c92a1.sendMessage(_0x546419, {
            'text': _0x7ed3b3,
            'mentions': [..._0x498809.map(_0x19fa2d => _0x19fa2d.jid)]
          });
          if (_0x498809.length > 0x3) {
            for (let _0x55920c = 0x0; _0x55920c < 0x3; _0x55920c++) {
              xpRewqrdArray = [0x1f4, 0x12c, 0x64];
              try {
                await a70_0x53ac29(_0x498809[_0x55920c].jid, xpRewqrdArray[0x1]);
              } catch (_0x267598) {
                console.log(_0x267598);
              }
            }
          }
        }
      })["catch"](_0x3e22fa => {
        console.log(_0x3e22fa);
      });
      _0x4c92a1.ev.on("messages.upsert", _0x32a8db);
    }
    await a70_0x3023dd(0x3e8);
    _0x59c938(0x0);
  };
  _0x4c92a1.awaitFromPollResponse = async (_0x21484f = {}) => {
    if (typeof _0x21484f != "object") {
      throw new Error("Options must be an object");
    }
    if (_0x21484f.timeout && typeof _0x21484f.timeout != "number") {
      throw new Error("Timeout must be a number");
    }
    if (typeof _0x21484f.title !== "string") {
      throw new Error("Title must be a string");
    }
    if (typeof _0x21484f.choices !== "object") {
      throw new Error("Choices must be an array");
    }
    if (_0x21484f.choices.length < 0x2) {
      throw new Error("Choices must have at least 2 elements");
    }
    if (typeof _0x21484f.chatJid != "string") {
      throw new Error("ChatJid must be a string");
    }
    if (_0x21484f.author && typeof _0x21484f.author != "string") {
      throw new Error("Author must be a string");
    }
    const _0x34b784 = _0x21484f.timeout || undefined;
    const _0x49a304 = _0x21484f.title;
    const _0x4faa31 = _0x21484f.choices;
    const _0x1e419a = _0x21484f.chatJid;
    let _0x4989ad = undefined;
    const _0x29f104 = _0x21484f?.["author"] || undefined;
    const _0x42ac17 = {
      "name": _0x49a304,
      "selectableCount": 0x1,
      "values": _0x4faa31
    };
    const _0xc222f = {
      poll: _0x42ac17
    };
    const _0x11c8e7 = await _0x4c92a1.sendMessage(_0x1e419a, _0xc222f);
    return new Promise((_0x245337, _0x508a8d) => {
      let _0x320e41 = async _0x4c790c => {
        for (const {
          key: _0x44f228,
          update: _0x38821c
        } of _0x4c790c) {
          if (_0x38821c.pollUpdates && _0x44f228.remoteJid === _0x1e419a && _0x44f228.id === _0x11c8e7.key.id) {
            if (_0x29f104 && _0x44f228.participant !== _0x29f104) {
              return;
            }
            if (!_0x11c8e7) {
              return;
            }
            const _0x3962f0 = {
              "message": _0x11c8e7.message,
              "pollUpdates": _0x38821c.pollUpdates
            };
            const _0x170d5d = a70_0x57a3ec(_0x3962f0);
            _0x4c92a1.ev.off("messages.update", _0x320e41);
            let _0x59bc39 = _0x44f228.participant ?? _0x44f228.remoteJid;
            _0x59bc39 = a70_0x18aef0(_0x59bc39);
            const _0x5be24d = _0x170d5d.find(_0x28f19d => _0x28f19d.voters.includes(_0x59bc39));
            const _0x565a79 = _0x4faa31.indexOf(_0x5be24d.name);
            _0x245337(_0x565a79);
          }
        }
      };
      _0x4c92a1.ev.on("messages.update", _0x320e41);
      if (_0x34b784) {
        _0x4989ad = setTimeout(() => {
          _0x4c92a1.ev.off("messages.update", _0x320e41);
          _0x508a8d(new Error("Timeout"));
        }, _0x34b784);
      }
    });
  };
  _0x4c92a1.startAuxiBot = a70_0xec02ef;
}
const a70_0xe9fe65 = () => {
  try {
    const _0x113f78 = require('fs');
    const _0x3f2f0b = require("path");
    const _0x5494a9 = _0x113f78.readdirSync('./');
    for (const _0x2ff584 of _0x5494a9) {
      if (_0x2ff584.endsWith(".png") || _0x2ff584.endsWith(".jpg") || _0x2ff584.endsWith(".jpeg") || _0x2ff584.endsWith(".gif") || _0x2ff584.endsWith(".mp4") || _0x2ff584.endsWith(".mp3")) {
        _0x113f78.unlinkSync(_0x3f2f0b.join('./', _0x2ff584), _0x17ce6c => {
          if (_0x17ce6c) {
            console.log(_0x17ce6c);
          }
        });
      }
    }
    console.log("Les fichiers inutiles ont été supprimés avec succès.");
  } catch (_0x54fd8d) {
    console.log(_0x54fd8d);
  }
};
a70_0xe9fe65();
a70_0xec02ef();
