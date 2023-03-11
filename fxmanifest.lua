fx_version "bodacious"
game "gta5"

lua54 'yes'

ui_page "web/build/index.html"

client_script {
  "@vrp/lib/utils.lua",
	"client.lua"
}

server_scripts {
  "@vrp/lib/utils.lua",
	"server.lua"
}

files {
  "web/build/*",
  "web/build/**/*",
}