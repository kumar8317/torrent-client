"use strict";
import * as fs from "fs";
import bencode from "bencode";
import { Buffer } from "buffer";
import * as tracker from "./tracker.js";
import { open } from "./torrent-parser.js";


const torrent = open('puppy.torrent');

tracker.getPeers(torrent, peers=>{
    console.log('list of peers: ',peers);
})