const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749750707";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255758937296";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_32_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF1a25idVd1NHFMSDRFQW9BQUpsWG1PV1g1d2FxSUVzZVdSbHVodDc1WFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5KdnBTODRKVFlxdHdFakZfTjZMSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWUzZmJiYzItOWYxOS00ZGQ3LTkwZDktYTQ3MWFmZGY0ZWZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDY2LFxuICAgICAgMTEyLFxuICAgICAgNDQsXG4gICAgICAxNDIsXG4gICAgICA2MCxcbiAgICAgIDI2LFxuICAgICAgMjIyLFxuICAgICAgNDYsXG4gICAgICAxMTUsXG4gICAgICA3MCxcbiAgICAgIDEzNCxcbiAgICAgIDEyNSxcbiAgICAgIDUxLFxuICAgICAgMyxcbiAgICAgIDQ1LFxuICAgICAgMTQ4LFxuICAgICAgMTcsXG4gICAgICA1NyxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgNjYsXG4gICAgICA3NixcbiAgICAgIDExMyxcbiAgICAgIDIxMCxcbiAgICAgIDAsXG4gICAgICAyMjksXG4gICAgICAxMTMsXG4gICAgICA0OCxcbiAgICAgIDQ1LFxuICAgICAgMTMwLFxuICAgICAgMTcyLFxuICAgICAgNCxcbiAgICAgIDE0NyxcbiAgICAgIDQ0LFxuICAgICAgNjIsXG4gICAgICAyNDcsXG4gICAgICAzMSxcbiAgICAgIDI0NixcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA5UDlSNjhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NTg5MzcyOTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg2NzE0MTkyOTc5NTM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUDhoeFFRaDgreXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInA1aWhqL3VpVGE4MFFwbmpqK0tDVXk1dlhXVFdlZkxuNi9PZ0ppTGNBa1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFVlUkMreDJpU1ZqVG5aM21xTUpPbWtScGJjb1NSVklsS1RWb0xOWDA5ZGxOREpBZCtNNFU4eUJHditWcGRqRVRzVkJrTTRMT0VFTGZhSjlHRmkwQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia3o1MEZQT0ZoWTBVTDVVOFA5Y0VIWXNTQVNibnpRaHJ3V1JJOWhCZzZPTzVrTlN4TnVNTlkyQWFWVDhuQzdJRmF3a1YxMjJmSXowclBHL0FYRWNTZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzU4OTM3Mjk2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTkxMTE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
