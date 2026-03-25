room = data.get("room").lower()

rtc = []

logger.info("Running cleaning with room " + room)

#if the room type is selected, go through all the input selects for the room and find which ones someone clicked!
if room == 'selected':
  logger.info("Running cleaning on selected rooms")
  for entity_id in hass.states.entity_ids('input_select'):
    if hass.states.get(entity_id).state == 'selected' and hass.states.get(entity_id).attributes["friendly_name"].startswith("clean_"):
        rtc.append(int(hass.states.get(entity_id).attributes["number"]))
        logger.info("Adding " +  hass.states.get(entity_id).attributes["friendly_name"] + " to rooms to clean")
        hass.states.set(entity_id, 'cleaning', hass.states.get(entity_id).attributes)
else: #the room type is named and find all the named ones I guess
  logger.info("Running cleaning on named rooms")
  for entity_id in hass.states.entity_ids('input_select'):
    if hass.states.get(entity_id).attributes["friendly_name"].startswith("clean_"):
      for name in hass.states.get(entity_id).attributes["altnames"].split(","):
        if name in room:
          rtc.append(int(hass.states.get(entity_id).attributes["number"]))
          logger.info("Adding " +  name + " to rooms to clean")
          hass.states.set(entity_id, 'cleaning', hass.states.get(entity_id).attributes)

rooms_to_clean = []
for i in rtc:
   if i not in rooms_to_clean:
      rooms_to_clean.append(i)

service_data = {"entity_id": "vacuum.xiaomi_vacuum_cleaner",  "segments": rooms_to_clean}
hass.services.call("xiaomi_miio", "vacuum_clean_segment", service_data, False)
