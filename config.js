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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_03_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVpSmRRUEpjOWdYTWNsTVhWT1lYSHEyWUtxa0lZNVZ0SE5ZRjgvNVIxSUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2NjM4MDgxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUQwMjdCMDJEQzVERkVDOTlDMTI5OURFQzlEMzczQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDU3NzkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2NjM4MDgxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDIyQzFCNjlFOTI3RkFGNjdCMjlENDI2MjNFQzNCQjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDU3NzkwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRyUjJjVEpCU2pPLVhuRjd1N0Vmd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTRkNTAwM2QtNjI1YS00MTlkLTk5YTUtNzQ4NTBmMzJmYjMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMCxcbiAgICAgIDIxNSxcbiAgICAgIDIzMyxcbiAgICAgIDE4NixcbiAgICAgIDEyOSxcbiAgICAgIDI0NyxcbiAgICAgIDI0NSxcbiAgICAgIDc2LFxuICAgICAgMTM4LFxuICAgICAgNDUsXG4gICAgICAxOTgsXG4gICAgICA5LFxuICAgICAgOTEsXG4gICAgICAxMDcsXG4gICAgICAxNzEsXG4gICAgICA5OSxcbiAgICAgIDExOCxcbiAgICAgIDE4MSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDEwMixcbiAgICAgIDExLFxuICAgICAgNzEsXG4gICAgICAyNDQsXG4gICAgICAxNTQsXG4gICAgICAyMDcsXG4gICAgICAyNSxcbiAgICAgIDIwNSxcbiAgICAgIDEwNyxcbiAgICAgIDExNyxcbiAgICAgIDIyNyxcbiAgICAgIDg1LFxuICAgICAgMTE0LFxuICAgICAgMTUzLFxuICAgICAgOTMsXG4gICAgICAxMTcsXG4gICAgICAyMzAsXG4gICAgICAyMDMsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkJUUjlORTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjYzODA4MTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk0MDMyMDk2NzQ4ODU6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJdCdzIEhJTVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1WTNJa0VFUGI2MnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGlNa3A3bkF6aFk2Y1Z1MHh1YWhNQmZIL1BJOU5ZV21XNkhrWVpxZlRDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjUTQ0Y1E0ZnlWV3NseVh4WWV6RExtSlVENXFZRFJpR3hFckZBejVCZXFhQTJXMVR1NGV0Z3Y5d1k3cmlBVFZheWpCdzBaYkdpajZaYlhuMmJWMS9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3MzdEbEFCSFpvV09TUHRteUVXVkFHeWVPNW5BQnR6VWM0Tld5STBGbk14RVJNTUlDWUVYVUFxTzVUTkNWVzhqU01WRTJJMXZ3QWcvNTZVd0lxZFVDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY2MzgwODE4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA1Nzc4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFwblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXBuLmpzb24iOiAie1wia2V5RGF0YVwiOlwibGRPbWp3bUV0MGx3V0VOVjB6bmppQWl1a0pKZ1ErQUdFTmdCeTJxSFpkaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk0MTI2NzE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwNTc3OTAxOTJcIn0iCn0="  // PUT your SESSION_ID 


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
