local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRPC = Tunnel.getInterface("vRP")
vRP = Proxy.getInterface("vRP")

tabletServer = {}
Tunnel.bindInterface("police",tabletServer)
vCLIENT = Tunnel.getInterface("police")
vTASKBAR = Tunnel.getInterface("taskbar")

function tabletServer.findUserConnecting()
  local source = source
	local user_id = vRP.getUserId(source)
  if user_id then
    local identity = vRP.userIdentity(user_id)
    return { identity["name"].." "..identity["name2"], identity["id"]  }
  end
end