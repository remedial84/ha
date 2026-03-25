reason = data.get("reason")

things_on = []

logger.info("Running what's on script to find what's on then maybe tell someone")

#if the room type is selected, go through all the input selects for the room and find which ones someone clicked!
logger.info("Find all lights on")
for light in hass.states.get("group.lights").attributes["entity_id"]:
   logger.debug("Checking " +  str(light))
   if hass.states.get(light).state == 'on':      
      things_on.append(hass.states.get(light))
      logger.info("Adding " +  hass.states.get(light).attributes["friendly_name"] + " to things left on")
logger.info("Find all switches on")
for switch in hass.states.get("group.switches").attributes["entity_id"]:
   logger.debug("Checking " +  hass.states.get(switch).attributes["friendly_name"])
   if hass.states.get(switch).state == 'on':      
      things_on.append(hass.states.get(switch))
      logger.info("Adding " +  hass.states.get(switch).attributes["friendly_name"] + " to things left on")

if len(things_on) > 0:
   if len(things_on) > 1:
  #Just send a button with everything, or ignore
  #Include list of things in message
      logger.info("Found many things on")
      actions = [{"action": "turnoff", "title": "Turn all off"}]
      actions.append({"action": "leaveon", "title": "Leave it"})
      data = {"actions": actions, "tag": "turnoff", "sticky": "true"}
      message = reason + " and " + str(len(things_on)) + " things were left on what should I do?"
      service_data = {"data": data, "title": "Something left on",  "message": message}
   elif len(things_on) == 1:
      logger.info("Found one thing on sending message")
      actions = [{"action": "turnoff", "title": "Turn if off"}]
      actions.append({"action": "leaveon", "title": "Leave it"})
      data = {"actions": actions, "tag": "turnoff", "sticky": "true"} 
      service_data = {"data": data, "title": "Something left on",  "message": reason + " and " + things_on[0].attributes["friendly_name"] + " was left on what should I do?"}
   hass.services.call("notify", "allphones", service_data, False)
   #hass.services.call("notify", "mobile_app_pixel_9_pro_xl", service_data, False)
   if reason == "Bedtime":
      hass.services.call("light", "turn_on", {"entity_id": "light.master_bedroom_light", "rgb_color": [255, 0, 65], "brightness": 40}, False)
      time.sleep(4)
      hass.services.call("light", "turn_off", {"entity_id": "light.master_bedroom_light"}, False)
  #Send a message with the thing, or ignore
else:
  #Do nothing since nothing is on
   logger.info("Doing nothing since nothing is on")
   #maybe make the bedroom light flash green if the reason for off is bedtime?
   if reason == "Bedtime":
      hass.services.call("input_boolean", "turn_on", {"entity_id": "input_boolean.bedtimechecked"}, False)
      hass.services.call("light", "turn_on", {"entity_id": "light.master_bedroom_light", "rgb_color": [0, 255, 65], "brightness": 40}, False)
      time.sleep(4)
      hass.services.call("light", "turn_off", {"entity_id": "light.master_bedroom_light"}, False)