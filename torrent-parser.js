'use strict';

import * as fs from "fs";
import bencode from "bencode";
import { Buffer } from "buffer";
import * as crypto from 'crypto';

export const open = (filepath) => {
    const data = Buffer.from(fs.readFileSync('puppy.torrent'));
    const torrent = bencode.decode(data ,'utf8');

    return torrent;
}

export const infoHash = torrent => {
    const info = bencode.encode(torrent.info);
    return crypto.createHash('sha1').update(info).digest();
}

module.exports.open = (filepath) => {
  return bencode.decode(fs.readFileSync(filepath));
};

module.exports.size = torrent => {
  // ...
};

module.exports.infoHash = torrent => {
  // ...
};