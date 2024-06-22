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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349066380818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidk90NUV2V1BBWWhMQUhGeDAxZWVONVdiWmQybGVZa0o1VEMyaGVRWXFVST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY2MzgwODE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MUFBN0RDMTBGQjVGRDk0NzQ0QjU2NEQzNjA0QTc3NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwNTY4NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY2MzgwODE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGODA5NENDREQxQTY1RTdBNkM5RjlFRjdFRjVDOTFBQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwNTY4NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjE0YVAwc21Sc3U5ZklZdVR3SnByd1wiLFxuICBcInBob25lSWRcIjogXCI4OTA0ZTNhMy0wYzQzLTRjNWUtYTcyNS1iODljNmI3NzM1OWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA2NSxcbiAgICAgIDEwLFxuICAgICAgMTcsXG4gICAgICAyMDIsXG4gICAgICAyMjksXG4gICAgICAxMTIsXG4gICAgICAyMzgsXG4gICAgICA1NCxcbiAgICAgIDIxNixcbiAgICAgIDE0NSxcbiAgICAgIDMwLFxuICAgICAgMTMzLFxuICAgICAgMjUyLFxuICAgICAgMTU1LFxuICAgICAgMTIxLFxuICAgICAgMTQzLFxuICAgICAgNCxcbiAgICAgIDc4LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMjUwLFxuICAgICAgNjksXG4gICAgICA5MCxcbiAgICAgIDE3MixcbiAgICAgIDg3LFxuICAgICAgMTk0LFxuICAgICAgMjA5LFxuICAgICAgMTQ4LFxuICAgICAgNCxcbiAgICAgIDY1LFxuICAgICAgMTU3LFxuICAgICAgMTIxLFxuICAgICAgMjExLFxuICAgICAgMTg5LFxuICAgICAgMTEzLFxuICAgICAgMTQ2LFxuICAgICAgMTUwLFxuICAgICAgMTg1LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkJaNkhMMjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjYzODA4MTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk0MDMyMDk2NzQ4ODU6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJdCdzIEhJTVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxWTNJa0VFT1B6MnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGlNa3A3bkF6aFk2Y1Z1MHh1YWhNQmZIL1BJOU5ZV21XNkhrWVpxZlRDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5VWVCRFBkU2thbG5zRmsvZi9ITElBWGttUWVzeFVtWXloemFTZEZzOXpvVmswMFY4QU9JZmpPa21lUm90TWtFQzB2b2c3VU1MSUJaM2JaYVlIVHhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOei95UTRkUVozK2tTaFVPcHVoU0VhN2l5U2hUditxTmZQT3R1RE84di9pcXh5aEFLc05tR1VvbW90dlJCaS9GeDhZaVNQZnBPejRqRk45MjE4YzFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY2MzgwODE4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA1Njg3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFwbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXBsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUwyRUJKejJKZy8vOCtBaTl0c0pjblkrc0ViN0ZzNXFWRXhIbWpVc0MxRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk0MTI2NzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwNTY4NzM3ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ӇŁ・ざ 𝕋ℝ𝔸𝕍𝕀𝕊 ×͜×🔥🥷",
  ownername:process.env.OWNER_NAME|| "ӇŁ・ざ 𝕋ℝ𝔸𝕍𝕀𝕊 ×͜×🔥🥷",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
