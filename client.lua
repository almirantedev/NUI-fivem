local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPS = Tunnel.getInterface("vRP")

tabletClient = {}
Tunnel.bindInterface("police",tabletClient)
tabletServer = Tunnel.getInterface("police")

RegisterNUICallback('getUser', function(_, cb) 
  cb({ result = tabletServer.findUserConnecting() })
end)

RegisterCommand('abrirNUI', function()
  local ped = PlayerPedId()
  if not IsPedSwimming(ped) then
		SetNuiFocus(true, true)
    SendNUIMessage({ action = 'open' })

    if not IsPedInAnyVehicle(ped) then
      vRP.removeObjects()
      vRP.createObjects("amb@code_human_in_bus_passenger_idles@female@tablet@base","base","prop_cs_tablet",50,28422)
    end
	end
end)

RegisterNUICallback('closeTablet', function() 
  SetNuiFocus(false, false)
  SendNUIMessage({ action = 'close' })
  vRP.removeObjects()
end)

RegisterKeyMapping("abrirNUI","Abrir menu de policia.","keyboard","F11")